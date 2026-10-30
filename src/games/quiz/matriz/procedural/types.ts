import { SubjectType, GradeType, DifficultyType } from '../index';
import { QuestionData } from '../questions/types';

export interface ProceduralQuestion extends QuestionData {
  isProcedural: true;
  signature: string;
}

export type SectionKey = `${SubjectType}__${GradeType}__${DifficultyType}`;

export interface GenerationContext {
  subject: SubjectType;
  grade: GradeType;
  difficulty: DifficultyType;
  recentSignatures: Set<string>;
}

export interface ValidationResult {
  valid: boolean;
  reason?: string;
}
