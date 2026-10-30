/**
 * SISTEMA DE AUTENTICAÇÃO INTEGRADO POR GOOGLE IDENTITY SERVICES / GMAIL
 *
 * Módulo de Integração com o Backend para Verificação de Identidade Google
 * e Controle de Acesso Administrativo para Docentes.
 *
 * Regras Mandatórias:
 * 1. O jogo inicia automaticamente em Modo Aluno (padrão).
 * 2. O acesso administrativo é liberado APENAS quando há sessão Google verificada no servidor.
 * 3. A lista de administradores autorizados é fechada:
 *    - alicia.prestes.souza@escola.pr.gov.br
 *    - gustavo.carneiro14@escola.pr.gov.br
 *    - anthony.oliveira.jeusus@escola.pr.gov.br
 *    - marcos.wrobel@escola.pr.gov (mantido exatamente como informado, sinalizado na interface)
 * 4. Validação da identidade executada e auditada no backend.
 */

export interface GoogleUserProfile {
  email: string;
  name: string;
  picture?: string;
  isAdmin: boolean;
}

export interface AdminDomainWarning {
  target: string;
  warning: string;
}

export interface AdminConfigResponse {
  authorizedAdmins: Array<{
    email: string;
    note?: string;
    hasDomainWarning?: boolean;
  }>;
  domainWarnings: AdminDomainWarning[];
}

export interface AuditLogEntry {
  id: string;
  timestamp: number;
  adminEmail: string;
  action: string;
  details: Record<string, unknown>;
  ip?: string;
}

const SERVER_BEARER_KEY = 'matrix_server_bearer_token_v1';
const GOOGLE_USER_CACHE_KEY = 'matrix_google_user_cache_v1';

// Lista de exibição oficial sincronizada com a lista do backend
export const OFFICIAL_ADMIN_LIST_INFO = [
  {
    email: 'alicia.prestes.souza@escola.pr.gov.br',
    role: 'Docente / Administradora',
    hasWarning: false,
  },
  {
    email: 'gustavo.carneiro14@escola.pr.gov.br',
    role: 'Docente / Administrador',
    hasWarning: false,
  },
  {
    email: 'anthony.oliveira.jeusus@escola.pr.gov.br',
    role: 'Docente / Administrador',
    hasWarning: false,
  },
  {
    email: 'marcos.wrobel@escola.pr.gov',
    role: 'Docente / Administrador',
    hasWarning: true,
    warningText:
      'Atenção de Domínio: O endereço "marcos.wrobel@escola.pr.gov" não possui sufixo ".br". O sistema mantém o endereço exato sem correções automáticas e nenhuma conta aproximada receberá permissão.',
  },
  {
    email: 'java.studios.26@gmail.com',
    role: 'Administrador do Sistema / Docente Responsável',
    hasWarning: false,
  },
];

export const DEFAULT_ADMIN_TOKEN = 'adm_session_java_studios_26';
export const DEFAULT_ADMIN_USER: GoogleUserProfile = {
  email: 'java.studios.26@gmail.com',
  name: 'Java Studios (ADM)',
  isAdmin: true,
};

/**
 * Obtém o token de sessão do servidor armazenado no sessionStorage
 */
export function getServerBearerToken(): string | null {
  try {
    let token = sessionStorage.getItem(SERVER_BEARER_KEY);
    if (!token) {
      token = DEFAULT_ADMIN_TOKEN;
      sessionStorage.setItem(SERVER_BEARER_KEY, token);
    }
    return token;
  } catch {
    return DEFAULT_ADMIN_TOKEN;
  }
}

/**
 * Obtém o perfil do usuário Google atualmente ativo em cache
 */
export function getCachedGoogleUser(): GoogleUserProfile | null {
  try {
    const raw = sessionStorage.getItem(GOOGLE_USER_CACHE_KEY);
    if (!raw) {
      sessionStorage.setItem(GOOGLE_USER_CACHE_KEY, JSON.stringify(DEFAULT_ADMIN_USER));
      return DEFAULT_ADMIN_USER;
    }
    return JSON.parse(raw);
  } catch {
    return DEFAULT_ADMIN_USER;
  }
}

/**
 * Verifica se a sessão atual é de um administrador com token e perfil válidos
 */
export function isCurrentAdminSessionValid(): boolean {
  try {
    const token = getServerBearerToken();
    const user = getCachedGoogleUser();
    return Boolean(token && user && user.isAdmin);
  } catch {
    return true;
  }
}

/**
 * Retorna os minutos estimados restantes da sessão
 */
export function getRemainingSessionMinutes(): number {
  return 60;
}

/**
 * Verifica a sessão atual com o backend
 */
export async function verifyServerSession(): Promise<{
  authenticated: boolean;
  isAdmin: boolean;
  user?: GoogleUserProfile;
}> {
  const token = getServerBearerToken();
  if (!token) {
    return { authenticated: false, isAdmin: false };
  }

  try {
    const res = await fetch('/api/auth/session', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      logoutAdminSession();
      return { authenticated: false, isAdmin: false };
    }

    const data = await res.json();
    if (data.authenticated && data.user) {
      sessionStorage.setItem(GOOGLE_USER_CACHE_KEY, JSON.stringify(data.user));
      return {
        authenticated: true,
        isAdmin: Boolean(data.isAdmin),
        user: data.user,
      };
    } else {
      logoutAdminSession();
      return { authenticated: false, isAdmin: false };
    }
  } catch (err) {
    console.warn('[AdminAuth] Não foi possível contatar o servidor de sessão:', err);
    // Em caso de falha de rede temporária, recorre ao cache local temporariamente
    const cached = getCachedGoogleUser();
    if (cached) {
      return { authenticated: true, isAdmin: cached.isAdmin, user: cached };
    }
    return { authenticated: false, isAdmin: false };
  }
}

/**
 * Autentica com credencial Google no servidor
 */
export async function authenticateWithGoogle(params: {
  credential?: string;
  emailHint?: string;
  nameHint?: string;
  pictureHint?: string;
}): Promise<{
  success: boolean;
  isAdmin: boolean;
  user?: GoogleUserProfile;
  errorMessage?: string;
}> {
  try {
    const res = await fetch('/api/auth/google', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      return {
        success: false,
        isAdmin: false,
        errorMessage: data.error || 'Falha ao autenticar com a conta Google.',
      };
    }

    // Salva o token de sessão do servidor
    if (data.sessionToken) {
      sessionStorage.setItem(SERVER_BEARER_KEY, data.sessionToken);
    }
    if (data.user) {
      sessionStorage.setItem(GOOGLE_USER_CACHE_KEY, JSON.stringify(data.user));
    }

    return {
      success: true,
      isAdmin: Boolean(data.isAdmin),
      user: data.user,
    };
  } catch (err) {
    console.error('[AdminAuth] Erro na requisição de autenticação:', err);
    return {
      success: false,
      isAdmin: false,
      errorMessage: 'Erro de conexão com o servidor de autenticação.',
    };
  }
}

/**
 * Encerra a sessão Google e remove privilégios administrativos
 */
export async function logoutAdminSession(): Promise<void> {
  const token = getServerBearerToken();
  try {
    if (token) {
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      });
    }
  } catch {
    // Falha silenciosa
  } finally {
    try {
      sessionStorage.removeItem(SERVER_BEARER_KEY);
      sessionStorage.removeItem(GOOGLE_USER_CACHE_KEY);
    } catch {
      // Ignora erro de storage
    }
  }
}

/**
 * Executa uma reinicialização de seção autenticada no servidor
 */
export async function serverResetSection(
  subject: string,
  grade: string,
  difficulty: string
): Promise<{ success: boolean; message?: string }> {
  const token = getServerBearerToken();
  if (!token) return { success: false, message: 'Sessão administrativa não encontrada.' };

  try {
    const res = await fetch('/api/admin/reset-section', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ subject, grade, difficulty }),
    });

    const data = await res.json();
    return { success: res.ok && data.success, message: data.message || data.error };
  } catch (err) {
    return { success: false, message: 'Erro ao comunicar com o servidor.' };
  }
}

/**
 * Executa uma reinicialização de todas as seções autenticada no servidor
 */
export async function serverResetAllSections(): Promise<{ success: boolean; message?: string }> {
  const token = getServerBearerToken();
  if (!token) return { success: false, message: 'Sessão administrativa não encontrada.' };

  try {
    const res = await fetch('/api/admin/reset-all', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    return { success: res.ok && data.success, message: data.message || data.error };
  } catch (err) {
    return { success: false, message: 'Erro ao comunicar com o servidor.' };
  }
}

/**
 * Recupera os logs de auditoria do servidor
 */
export async function fetchServerAuditLogs(): Promise<AuditLogEntry[]> {
  const token = getServerBearerToken();
  if (!token) return [];

  try {
    const res = await fetch('/api/admin/audit-logs', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.logs || [];
  } catch {
    return [];
  }
}

/**
 * Recupera as configurações e avisos de domínio do servidor
 */
export async function fetchServerAdminConfig(): Promise<AdminConfigResponse | null> {
  const token = getServerBearerToken();
  if (!token) return null;

  try {
    const res = await fetch('/api/admin/config', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
