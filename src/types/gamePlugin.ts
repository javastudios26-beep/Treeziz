export type StudentRpgClass = 'warrior' | 'archer' | 'mage';

export interface GameSessionStats {
  score: number;
  accuracyPercentage: number;
  timeSpentSeconds: number;
  correctAnswers: number;
  wrongAnswers: number;
  levelReached?: number;
  extraMetrics?: Record<string, number | string>;
}

export interface GameExitPayload {
  bytesEarned: number;
  levelTokensEarned?: number;
  duelTokensEarned?: number;
  sessionStats: GameSessionStats;
}

export interface BaseGameProps {
  studentClass?: StudentRpgClass;
  difficultyMultiplier?: number;
  onExitToHub: (payload: GameExitPayload) => void;
}
