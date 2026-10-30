import { QuestionData, SectionKey, getSectionKey } from './types';
import { FUNDAMENTAL_MATH_QUESTIONS } from './fundamentalMath';
import { MEDIO_MATH_QUESTIONS } from './medioMath';
import { FUNDAMENTAL_SCIENCE_QUESTIONS } from './fundamentalScience';
import { MEDIO_SCIENCE_QUESTIONS } from './medioScience';
import { SubjectType, GradeType, DifficultyType } from '../index';

// Unificação de todo o repositório oficial de perguntas
export const ALL_OFFICIAL_QUESTIONS: QuestionData[] = [
  ...FUNDAMENTAL_MATH_QUESTIONS,
  ...MEDIO_MATH_QUESTIONS,
  ...FUNDAMENTAL_SCIENCE_QUESTIONS,
  ...MEDIO_SCIENCE_QUESTIONS,
];

// Mapa indexado por Chave de Seção: subject__grade__difficulty
const SECTION_MAP: Map<SectionKey, QuestionData[]> = new Map();

// Inicialização e validação de integridade dos IDs
function initializeSectionMap() {
  const seenIds = new Set<string>();

  for (const q of ALL_OFFICIAL_QUESTIONS) {
    if (seenIds.has(q.id)) {
      console.warn(`[QuestionRegistry] Alerta: ID duplicado detectado no banco: ${q.id}`);
    }
    seenIds.add(q.id);

    const key = getSectionKey(q.subject, q.grade, q.difficulty);
    const existing = SECTION_MAP.get(key) || [];
    existing.push(q);
    SECTION_MAP.set(key, existing);
  }
}

initializeSectionMap();

/**
 * Retorna todas as perguntas oficiais cadastradas para uma seção específica.
 */
export function getQuestionsForSection(
  subject: SubjectType,
  grade: GradeType,
  difficulty: DifficultyType
): QuestionData[] {
  const key = getSectionKey(subject, grade, difficulty);
  return SECTION_MAP.get(key) || [];
}

/**
 * Retorna estatísticas de todas as seções (total de questões).
 */
export function getAllSectionsMetadata(): Array<{
  key: SectionKey;
  subject: SubjectType;
  grade: GradeType;
  difficulty: DifficultyType;
  totalQuestions: number;
}> {
  const list: Array<{
    key: SectionKey;
    subject: SubjectType;
    grade: GradeType;
    difficulty: DifficultyType;
    totalQuestions: number;
  }> = [];

  const subjects: SubjectType[] = ['matematica', 'ciencias'];
  const grades: GradeType[] = [
    '6º ano',
    '7º ano',
    '8º ano',
    '9º ano',
    '1º ano EM',
    '2º ano EM',
    '3º ano EM',
  ];
  const difficulties: DifficultyType[] = ['facil', 'medio', 'dificil', 'expert'];

  for (const subject of subjects) {
    for (const grade of grades) {
      for (const difficulty of difficulties) {
        const key = getSectionKey(subject, grade, difficulty);
        const count = SECTION_MAP.get(key)?.length || 0;
        list.push({
          key,
          subject,
          grade,
          difficulty,
          totalQuestions: count,
        });
      }
    }
  }

  return list;
}

/**
 * Retorna as chaves de todas as 56 seções existentes.
 */
export function getAllSectionKeys(): SectionKey[] {
  return Array.from(SECTION_MAP.keys());
}
