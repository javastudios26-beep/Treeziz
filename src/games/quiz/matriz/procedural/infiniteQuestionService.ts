import { SubjectType, GradeType, DifficultyType } from '../index';
import { QuestionData } from '../questions/types';
import { ProceduralQuestion } from './types';
import { generateProceduralMathQuestion } from './mathGenerator';
import { generateProceduralScienceQuestion } from './scienceGenerator';
import { validateQuestion } from './questionValidator';
import { balanceQuestionOptions } from './optionBalancer';

const RECENT_SIGNATURES_KEY = 'matrix-quiz-recent-signatures-v1';
const MAX_RECENT_SIGNATURES = 60;

/**
 * Lê assinaturas recentes para a seção a fim de prevenir repetições semânticas.
 */
export function getRecentSignatures(
  subject: SubjectType,
  grade: GradeType,
  difficulty: DifficultyType
): Set<string> {
  try {
    const raw = sessionStorage.getItem(`${RECENT_SIGNATURES_KEY}__${subject}__${grade}__${difficulty}`);
    if (!raw) return new Set<string>();
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return new Set<string>(parsed.filter((item): item is string => typeof item === 'string'));
    }
  } catch {
    // Silencioso
  }
  return new Set<string>();
}

/**
 * Salva a assinatura recente mantendo o limite do rolling window.
 */
export function saveRecentSignature(
  subject: SubjectType,
  grade: GradeType,
  difficulty: DifficultyType,
  signature: string
): void {
  try {
    const key = `${RECENT_SIGNATURES_KEY}__${subject}__${grade}__${difficulty}`;
    const set = getRecentSignatures(subject, grade, difficulty);
    set.add(signature);
    const arr = Array.from(set);
    if (arr.length > MAX_RECENT_SIGNATURES) {
      arr.splice(0, arr.length - MAX_RECENT_SIGNATURES);
    }
    sessionStorage.setItem(key, JSON.stringify(arr));
  } catch {
    // Silencioso
  }
}

export interface NextQuestionResult {
  question: QuestionData & { isProcedural?: boolean; signature?: string };
  isFromFixedBank: boolean;
  isProcedural: boolean;
}

/**
 * Gera ou seleciona a próxima pergunta de forma CONTÍNUA E INFINITA.
 * Ordem obrigatória:
 * 1. Seleciona questão fixa inédita do banco se disponível.
 * 2. Quando o banco fixo esgotar, gera dinamicamente questão procedural verificada.
 * 3. Valida a questão com o validador rigoroso.
 * 4. Evita repetições semânticas de assinaturas.
 * 5. Garante que o quiz NUNCA mostre "Perguntas acabaram".
 */
export function getNextInfiniteQuestion(
  subject: SubjectType,
  grade: GradeType,
  difficulty: DifficultyType,
  fixedQueue: QuestionData[],
  inMemoryRecentSignatures?: Set<string>
): NextQuestionResult {
  // 1. Tentar selecionar questão fixa inédita
  if (fixedQueue.length > 0) {
    const fixedQ = fixedQueue.shift()!;
    let finalQ = fixedQ;
    if (subject === 'ciencias') {
      const balanced = balanceQuestionOptions(fixedQ.options, fixedQ.correctAnswer);
      finalQ = { ...fixedQ, options: balanced.options, correctAnswer: balanced.correctAnswer };
    }
    return {
      question: finalQ,
      isFromFixedBank: true,
      isProcedural: false,
    };
  }

  // 2. Banco estático esgotado: gerar questão proceduralmente
  const persistentSignatures = getRecentSignatures(subject, grade, difficulty);
  const combinedSignatures = inMemoryRecentSignatures
    ? new Set([...Array.from(persistentSignatures), ...Array.from(inMemoryRecentSignatures)])
    : persistentSignatures;

  let candidate: ProceduralQuestion | null = null;
  let attempts = 0;
  const maxAttempts = 25;

  while (attempts < maxAttempts) {
    attempts++;
    const generated =
      subject === 'matematica'
        ? generateProceduralMathQuestion(grade, difficulty, combinedSignatures)
        : generateProceduralScienceQuestion(grade, difficulty, combinedSignatures);

    const validation = validateQuestion(generated);
    if (validation.valid) {
      if (!combinedSignatures.has(generated.signature) || attempts >= maxAttempts - 2) {
        candidate = generated;
        break;
      }
    }
  }

  // Se por algum motivo extremo não validou, gerar fallback com carimbo de tempo
  if (!candidate) {
    candidate =
      subject === 'matematica'
        ? generateProceduralMathQuestion(grade, difficulty, new Set())
        : generateProceduralScienceQuestion(grade, difficulty, new Set());
  }

  // Garantir balanceamento final em Ciências
  if (subject === 'ciencias' && candidate) {
    const balanced = balanceQuestionOptions(candidate.options, candidate.correctAnswer);
    candidate = { ...candidate, options: balanced.options, correctAnswer: balanced.correctAnswer };
  }

  // Registrar a assinatura
  saveRecentSignature(subject, grade, difficulty, candidate.signature);
  if (inMemoryRecentSignatures) {
    inMemoryRecentSignatures.add(candidate.signature);
  }

  return {
    question: candidate,
    isFromFixedBank: false,
    isProcedural: true,
  };
}
