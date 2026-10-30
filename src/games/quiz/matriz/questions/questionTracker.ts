import { QuestionData, SectionKey, getSectionKey } from './types';
import { getQuestionsForSection } from './questionRegistry';
import { SubjectType, GradeType, DifficultyType } from '../index';

const USED_QUESTIONS_STORAGE_KEY = 'matrix-quiz-used-questions-v1';
const SECTION_ROUNDS_STORAGE_KEY = 'matrix-quiz-section-rounds-v1';

export interface SectionRoundInfo {
  round: number;
  lastResetTimestamp: number;
  resetBy: 'admin' | 'system';
}

/**
 * Lê de forma segura o registro de questões utilizadas do localStorage.
 * Trata corrupções e dados legados sem quebrar o jogo.
 */
function readUsedRegistry(): Record<string, string[]> {
  try {
    const raw = localStorage.getItem(USED_QUESTIONS_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null) return {};

    const clean: Record<string, string[]> = {};
    for (const [key, val] of Object.entries(parsed)) {
      if (Array.isArray(val)) {
        clean[key] = val.filter((item): item is string => typeof item === 'string');
      }
    }
    return clean;
  } catch {
    return {};
  }
}

/**
 * Salva com segurança o registro no localStorage.
 */
function writeUsedRegistry(registry: Record<string, string[]>): void {
  try {
    localStorage.setItem(USED_QUESTIONS_STORAGE_KEY, JSON.stringify(registry));
  } catch {
    // Falha silenciosa de quota ou restrição
  }
}

/**
 * Lê de forma segura o registro de rodadas das seções.
 */
function readRoundsRegistry(): Record<string, SectionRoundInfo> {
  try {
    const raw = localStorage.getItem(SECTION_ROUNDS_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null) return {};
    return parsed as Record<string, SectionRoundInfo>;
  } catch {
    return {};
  }
}

/**
 * Salva o registro de rodadas no localStorage.
 */
function writeRoundsRegistry(registry: Record<string, SectionRoundInfo>): void {
  try {
    localStorage.setItem(SECTION_ROUNDS_STORAGE_KEY, JSON.stringify(registry));
  } catch {
    // Falha silenciosa
  }
}

/**
 * Retorna os IDs das questões já utilizadas em uma determinada seção.
 */
export function getUsedQuestionIds(
  subject: SubjectType,
  grade: GradeType,
  difficulty: DifficultyType
): string[] {
  const key = getSectionKey(subject, grade, difficulty);
  const registry = readUsedRegistry();
  return registry[key] || [];
}

/**
 * REGRA OBRIGATÓRIA: Registra a questão como utilizada no exato momento
 * em que é apresentada ao jogador. Persiste no localStorage sob chave versionada.
 */
export function markQuestionAsUsed(
  subject: SubjectType,
  grade: GradeType,
  difficulty: DifficultyType,
  questionId: string
): void {
  const key = getSectionKey(subject, grade, difficulty);
  const registry = readUsedRegistry();
  const currentList = registry[key] || [];

  if (!currentList.includes(questionId)) {
    registry[key] = [...currentList, questionId];
    writeUsedRegistry(registry);
  }
}

/**
 * Retorna apenas as questões INÉDITAS da seção.
 */
export function getUnusedQuestions(
  subject: SubjectType,
  grade: GradeType,
  difficulty: DifficultyType
): QuestionData[] {
  const all = getQuestionsForSection(subject, grade, difficulty);
  const used = getUsedQuestionIds(subject, grade, difficulty);
  const usedSet = new Set(used);
  return all.filter((q) => !usedSet.has(q.id));
}

/**
 * Verifica se todas as questões da seção foram concluídas.
 */
export function isSectionCompleted(
  subject: SubjectType,
  grade: GradeType,
  difficulty: DifficultyType
): boolean {
  const unused = getUnusedQuestions(subject, grade, difficulty);
  return unused.length === 0;
}

/**
 * Obtém o progresso atual de uma seção (quantas usadas / total).
 */
export function getSectionProgress(
  subject: SubjectType,
  grade: GradeType,
  difficulty: DifficultyType
): {
  usedCount: number;
  totalCount: number;
  isCompleted: boolean;
  round: number;
} {
  const all = getQuestionsForSection(subject, grade, difficulty);
  const used = getUsedQuestionIds(subject, grade, difficulty);
  const rounds = readRoundsRegistry();
  const key = getSectionKey(subject, grade, difficulty);
  const round = rounds[key]?.round || 1;

  const fixedIdsSet = new Set(all.map((q) => q.id));
  const usedFixedCount = used.filter((id) => fixedIdsSet.has(id)).length;

  return {
    usedCount: Math.min(usedFixedCount, all.length),
    totalCount: all.length,
    isCompleted: all.length > 0 && usedFixedCount >= all.length,
    round,
  };
}

/**
 * Retorna verdadeiro se todas as questões fixas cadastradas no banco já foram concluídas.
 */
export function isSectionFixedBankCompleted(
  subject: SubjectType,
  grade: GradeType,
  difficulty: DifficultyType
): boolean {
  const all = getQuestionsForSection(subject, grade, difficulty);
  const used = getUsedQuestionIds(subject, grade, difficulty);
  const fixedIdsSet = new Set(all.map((q) => q.id));
  const usedFixedCount = used.filter((id) => fixedIdsSet.has(id)).length;
  return all.length > 0 && usedFixedCount >= all.length;
}

/**
 * Reinicia uma rodada da seção específica com autorização administrativa deliberada.
 * Não apaga o histórico de outras seções.
 */
export function restartSectionRound(
  subject: SubjectType,
  grade: GradeType,
  difficulty: DifficultyType,
  adminAuthorized: boolean = true
): { success: boolean; round: number } {
  if (!adminAuthorized) {
    return { success: false, round: 1 };
  }

  const key = getSectionKey(subject, grade, difficulty);

  // 1. Limpa apenas a lista de usadas daquela seção
  const registry = readUsedRegistry();
  registry[key] = [];
  writeUsedRegistry(registry);

  // 2. Incrementa o contador de rodadas da seção
  const rounds = readRoundsRegistry();
  const prevRound = rounds[key]?.round || 1;
  const newRound = prevRound + 1;
  rounds[key] = {
    round: newRound,
    lastResetTimestamp: Date.now(),
    resetBy: 'admin',
  };
  writeRoundsRegistry(rounds);

  return { success: true, round: newRound };
}

/**
 * Reinicia as rodadas de TODAS as seções (Comando de Administrador com confirmação dupla).
 */
export function restartAllSectionsRounds(adminAuthorized: boolean = true): boolean {
  if (!adminAuthorized) return false;

  // Limpa o registro geral de questões utilizadas
  try {
    localStorage.removeItem(USED_QUESTIONS_STORAGE_KEY);
    localStorage.removeItem(SECTION_ROUNDS_STORAGE_KEY);
  } catch {
    // Falha silenciosa
  }
  return true;
}
