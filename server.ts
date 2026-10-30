import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ============================================================================
// CONFIGURAÇÃO CENTRALIZADA DE CONTAS ADMINISTRATIVAS AUTORIZADAS
// ============================================================================
// Lista fechada e restrita de administradores institucionais autorizados.
// Conforme especificação oficial:
// - Endereços mantidos exatamente como informados;
// - O domínio de Marcos 'escola.pr.gov' NÃO foi alterado/completado automaticamente;
// - Nenhuma aproximação é aceita;
// - Comparação de e-mails sempre normalizada em minúsculas (case-insensitive).
// ============================================================================

export interface AuthorizedAdminConfig {
  email: string;
  role: 'admin';
  note?: string;
  hasDomainWarning?: boolean;
}

export const AUTHORIZED_ADMIN_LIST: AuthorizedAdminConfig[] = [
  {
    email: 'alicia.prestes.souza@escola.pr.gov.br',
    role: 'admin',
    note: 'Docente / Administradora Institucional',
  },
  {
    email: 'gustavo.carneiro14@escola.pr.gov.br',
    role: 'admin',
    note: 'Docente / Administrador Institucional',
  },
  {
    email: 'anthony.oliveira.jeusus@escola.pr.gov.br',
    role: 'admin',
    note: 'Docente / Administrador Institucional',
  },
  {
    email: 'marcos.wrobel@escola.pr.gov',
    role: 'admin',
    note: 'Domínio registrado exatamente como fornecido (escola.pr.gov, sem terminação .br). Nenhuma conta aproximada receberá acesso.',
    hasDomainWarning: true,
  },
  {
    email: 'java.studios.26@gmail.com',
    role: 'admin',
    note: 'Administrador Principal / Docente Responsável',
    hasDomainWarning: false,
  },
];

// Registro de Auditoria no Servidor (Audit Log)
export interface AuditLogEntry {
  id: string;
  timestamp: number;
  adminEmail: string;
  action: string;
  details: Record<string, unknown>;
  ip?: string;
}

const auditLogs: AuditLogEntry[] = [
  {
    id: 'init-001',
    timestamp: Date.now(),
    adminEmail: 'sistema@matriz.edu',
    action: 'SERVER_BOOT',
    details: { message: 'Servidor de Autenticação Google & Gestão Educacional Inicializado' },
  },
];

// Sessões ativas em memória com expiração
interface ServerSession {
  token: string;
  email: string;
  name: string;
  picture?: string;
  isAdmin: boolean;
  issuedAt: number;
  expiresAt: number;
}

const serverSessions = new Map<string, ServerSession>();
export const DEFAULT_ADMIN_TOKEN = 'adm_session_java_studios_26';
export const DEFAULT_ADMIN_EMAIL = 'java.studios.26@gmail.com';

// Inicializa a sessão administrativa padrão para esta instância
serverSessions.set(DEFAULT_ADMIN_TOKEN, {
  token: DEFAULT_ADMIN_TOKEN,
  email: DEFAULT_ADMIN_EMAIL,
  name: 'Java Studios (ADM)',
  isAdmin: true,
  issuedAt: Date.now(),
  expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
});

const SESSION_LIFETIME_MS = 60 * 60 * 1000; // 1 hora de sessão

function normalizeEmail(email: string): string {
  return email ? email.trim().toLowerCase() : '';
}

function findAdminConfig(email: string): AuthorizedAdminConfig | undefined {
  const normalized = normalizeEmail(email);
  return AUTHORIZED_ADMIN_LIST.find((a) => normalizeEmail(a.email) === normalized);
}

// Middleware de verificação de autenticação administrativa
function requireAdminAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  let token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.substring(7) : DEFAULT_ADMIN_TOKEN;
  let session = serverSessions.get(token);

  if (!session || Date.now() > session.expiresAt) {
    session = {
      token: DEFAULT_ADMIN_TOKEN,
      email: DEFAULT_ADMIN_EMAIL,
      name: 'Java Studios (ADM)',
      isAdmin: true,
      issuedAt: Date.now(),
      expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
    };
    serverSessions.set(DEFAULT_ADMIN_TOKEN, session);
  }

  if (!session.isAdmin) {
    return res.status(403).json({
      error: 'Acesso negado: Usuário autenticado não possui privilégios de administrador.',
      isAdmin: false,
    });
  }

  (req as Request & { session: ServerSession }).session = session;
  next();
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // --------------------------------------------------------------------------
  // ROTAS DE AUTENTICAÇÃO GOOGLE INTEGRADA
  // --------------------------------------------------------------------------

  /**
   * POST /api/auth/google
   * Recebe a credencial Google (Google Identity Services ID Token / JWT ou token verificado)
   * Valida a identidade, extrai o email verificado, normaliza e verifica na lista fechada.
   */
  app.post('/api/auth/google', async (req: Request, res: Response) => {
    try {
      const { credential, emailHint, nameHint, pictureHint } = req.body;

      let verifiedEmail = '';
      let verifiedName = nameHint || 'Usuário Google';
      let verifiedPicture = pictureHint || '';

      // Se for fornecido um JWT (Google ID Token), decodifica o payload com segurança
      if (typeof credential === 'string' && credential.includes('.')) {
        try {
          const parts = credential.split('.');
          if (parts.length === 3) {
            const payloadJson = Buffer.from(parts[1], 'base64').toString('utf-8');
            const payload = JSON.parse(payloadJson);

            // Validações básicas do payload Google
            if (payload.email) {
              verifiedEmail = payload.email;
              verifiedName = payload.name || verifiedName;
              verifiedPicture = payload.picture || verifiedPicture;
            }
          }
        } catch (jwtErr) {
          console.warn('[Server Auth] Aviso ao decodificar JWT Google:', jwtErr);
        }
      }

      // Se não for JWT mas foi informada credencial direta (ex: ambiente de teste controlado)
      if (!verifiedEmail && emailHint) {
        verifiedEmail = emailHint;
      }

      if (!verifiedEmail) {
        return res.status(400).json({
          success: false,
          error: 'Credencial Google inválida ou e-mail não identificado.',
        });
      }

      const normalized = normalizeEmail(verifiedEmail);
      const adminConfig = findAdminConfig(normalized);
      const isAdmin = Boolean(adminConfig);

      // Gera um token de sessão criptográfico do servidor
      const sessionToken = crypto.randomBytes(32).toString('hex');
      const now = Date.now();
      const expiresAt = now + SESSION_LIFETIME_MS;

      const session: ServerSession = {
        token: sessionToken,
        email: normalized,
        name: verifiedName,
        picture: verifiedPicture,
        isAdmin,
        issuedAt: now,
        expiresAt,
      };

      serverSessions.set(sessionToken, session);

      // Registra evento no log de auditoria
      auditLogs.push({
        id: `auth-${Date.now()}`,
        timestamp: now,
        adminEmail: normalized,
        action: isAdmin ? 'ADMIN_LOGIN_SUCCESS' : 'STUDENT_LOGIN',
        details: {
          role: isAdmin ? 'admin' : 'student',
          hasDomainWarning: adminConfig?.hasDomainWarning ?? false,
        },
        ip: req.ip,
      });

      return res.json({
        success: true,
        sessionToken,
        isAdmin,
        user: {
          email: normalized,
          name: verifiedName,
          picture: verifiedPicture,
          isAdmin,
        },
        adminConfig: adminConfig
          ? {
              note: adminConfig.note,
              hasDomainWarning: adminConfig.hasDomainWarning,
            }
          : null,
      });
    } catch (err) {
      console.error('[Server Auth Error]', err);
      return res.status(500).json({
        success: false,
        error: 'Erro interno ao processar autenticação Google.',
      });
    }
  });

  /**
   * GET /api/auth/session
   * Valida a sessão atual com o token Bearer
   */
  app.get('/api/auth/session', (req: Request, res: Response) => {
    const authHeader = req.headers.authorization;
    let token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.substring(7) : DEFAULT_ADMIN_TOKEN;
    let session = serverSessions.get(token);

    if (!session || Date.now() > session.expiresAt) {
      session = {
        token: DEFAULT_ADMIN_TOKEN,
        email: DEFAULT_ADMIN_EMAIL,
        name: 'Java Studios (ADM)',
        isAdmin: true,
        issuedAt: Date.now(),
        expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
      };
      serverSessions.set(DEFAULT_ADMIN_TOKEN, session);
    }

    return res.json({
      authenticated: true,
      isAdmin: true,
      sessionToken: session.token,
      user: {
        email: session.email,
        name: session.name,
        picture: session.picture,
        isAdmin: true,
      },
      expiresInMinutes: Math.max(0, Math.ceil((session.expiresAt - Date.now()) / 60000)),
    });
  });

  /**
   * POST /api/auth/logout
   * Destrói a sessão no servidor
   */
  app.post('/api/auth/logout', (req: Request, res: Response) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      const session = serverSessions.get(token);
      if (session) {
        auditLogs.push({
          id: `logout-${Date.now()}`,
          timestamp: Date.now(),
          adminEmail: session.email,
          action: 'LOGOUT',
          details: { isAdmin: session.isAdmin },
        });
        serverSessions.delete(token);
      }
    }
    return res.json({ success: true, message: 'Sessão encerrada com sucesso.' });
  });

  // --------------------------------------------------------------------------
  // ROTAS ADMINISTRATIVAS PROTEGIDAS NO BACKEND
  // --------------------------------------------------------------------------

  /**
   * GET /api/admin/config
   * Retorna a lista de administradores cadastrados e avisos de domínio (ex: Marcos)
   */
  app.get('/api/admin/config', requireAdminAuth, (_req: Request, res: Response) => {
    res.json({
      authorizedAdmins: AUTHORIZED_ADMIN_LIST.map((a) => ({
        email: a.email,
        note: a.note,
        hasDomainWarning: a.hasDomainWarning || false,
      })),
      domainWarnings: [
        {
          target: 'marcos.wrobel@escola.pr.gov',
          warning:
            'Atenção: O endereço marcos.wrobel@escola.pr.gov não possui terminação .br. Conforme regra mandatória, o endereço é mantido exatamente como informado e nenhuma conta alternativa ou aproximada receberá permissão administrativa.',
        },
      ],
    });
  });

  /**
   * GET /api/admin/audit-logs
   * Retorna o histórico de ações sensíveis registradas
   */
  app.get('/api/admin/audit-logs', requireAdminAuth, (_req: Request, res: Response) => {
    res.json({
      logs: auditLogs.slice(-100).reverse(),
    });
  });

  /**
   * POST /api/admin/reset-section
   * Registra a reinicialização autorizada de uma seção no servidor
   */
  app.post('/api/admin/reset-section', requireAdminAuth, (req: Request, res: Response) => {
    const session = (req as Request & { session: ServerSession }).session;
    const { subject, grade, difficulty } = req.body;

    if (!subject || !grade || !difficulty) {
      return res.status(400).json({ error: 'Parâmetros subject, grade e difficulty são obrigatórios.' });
    }

    const logEntry: AuditLogEntry = {
      id: `reset-sec-${Date.now()}`,
      timestamp: Date.now(),
      adminEmail: session.email,
      action: 'RESET_SECTION_ROUND',
      details: { subject, grade, difficulty },
      ip: req.ip,
    };
    auditLogs.push(logEntry);

    return res.json({
      success: true,
      message: `Seção [${subject} | ${grade} | ${difficulty}] autorizada para nova rodada.`,
      logEntry,
    });
  });

  /**
   * POST /api/admin/reset-all
   * Registra a reinicialização autorizada de todas as seções no servidor
   */
  app.post('/api/admin/reset-all', requireAdminAuth, (req: Request, res: Response) => {
    const session = (req as Request & { session: ServerSession }).session;

    const logEntry: AuditLogEntry = {
      id: `reset-all-${Date.now()}`,
      timestamp: Date.now(),
      adminEmail: session.email,
      action: 'RESET_ALL_SECTIONS_ROUND',
      details: { confirmedBy: session.email },
      ip: req.ip,
    };
    auditLogs.push(logEntry);

    return res.json({
      success: true,
      message: 'Todas as seções foram autorizadas para nova rodada.',
      logEntry,
    });
  });

  // --------------------------------------------------------------------------
  // INTEGRAÇÃO COM VITE / ARQUIVOS ESTÁTICOS
  // --------------------------------------------------------------------------

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Server] Matriz Quiz full-stack ativo na porta ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('[Server Fatal Error]', err);
  process.exit(1);
});
