import { SubjectType, GradeType, DifficultyType } from '../index';

export interface QuestionData {
  id: string;
  subject: SubjectType;
  grade: GradeType;
  difficulty: DifficultyType;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  xp: number;
  bnccSkill?: string;
  topic?: string;
}

export type SectionKey = `${SubjectType}__${GradeType}__${DifficultyType}`;

export function getSectionKey(
  subject: SubjectType,
  grade: GradeType,
  difficulty: DifficultyType
): SectionKey {
  return `${subject}__${grade}__${difficulty}` as SectionKey;
}
