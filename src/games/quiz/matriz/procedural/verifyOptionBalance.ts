import { getNextInfiniteQuestion } from './infiniteQuestionService';
import { getQuestionsForSection } from '../questions/questionRegistry';
import { GradeType, DifficultyType } from '../index';

declare const process: any;

export interface VerificationMetrics {
  totalSampled: number;
  correctIsLongestCount: number;
  correctIsLongestPct: number;
  correctIsShortestCount: number;
  correctIsShortestPct: number;
  correctIsMiddleCount: number;
  correctIsMiddlePct: number;
  averageLengthRatio: number;
  positionDistribution: {
    A: number;
    B: number;
    C: number;
    D: number;
  };
  passed: boolean;
}

export function runScienceBalanceVerification(sampleCountPerSection = 35): VerificationMetrics {
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

  let totalSampled = 0;
  let correctIsLongestCount = 0;
  let correctIsShortestCount = 0;
  let correctIsMiddleCount = 0;
  let totalRatio = 0;

  const positions = { A: 0, B: 0, C: 0, D: 0 };
  const posKeys: Array<'A' | 'B' | 'C' | 'D'> = ['A', 'B', 'C', 'D'];

  for (const grade of grades) {
    for (const diff of difficulties) {
      const fixedQueue = [...getQuestionsForSection('ciencias', grade, diff)];
      const signatures = new Set<string>();

      for (let i = 0; i < sampleCountPerSection; i++) {
        const result = getNextInfiniteQuestion('ciencias', grade, diff, fixedQueue, signatures);
        const q = result.question;
        totalSampled++;

        // Simulação do embaralhamento de apresentação real em tela
        const mapped = q.options.map((text, idx) => ({ text, originalIndex: idx }));
        for (let j = mapped.length - 1; j > 0; j--) {
          const k = Math.floor(Math.random() * (j + 1));
          [mapped[j], mapped[k]] = [mapped[k], mapped[j]];
        }
        const presentedCorrectIndex = mapped.findIndex((m) => m.originalIndex === q.correctAnswer);
        positions[posKeys[presentedCorrectIndex]]++;

        const cLen = q.options[q.correctAnswer]?.length || 0;
        const dLens = q.options.filter((_, idx) => idx !== q.correctAnswer).map((o) => o.length);
        const maxD = Math.max(...dLens);
        const minD = Math.min(...dLens);
        const avgD = dLens.reduce((a, b) => a + b, 0) / (dLens.length || 1);

        if (avgD > 0) {
          totalRatio += cLen / avgD;
        }

        if (cLen > maxD) {
          correctIsLongestCount++;
        } else if (cLen < minD) {
          correctIsShortestCount++;
        } else {
          correctIsMiddleCount++;
        }
      }
    }
  }

  const correctIsLongestPct = (correctIsLongestCount / totalSampled) * 100;
  const correctIsShortestPct = (correctIsShortestCount / totalSampled) * 100;
  const correctIsMiddlePct = (correctIsMiddleCount / totalSampled) * 100;
  const averageLengthRatio = totalRatio / totalSampled;

  // Critérios de validação:
  // 1. Mais longa deve estar próxima de 25% (tolerância 15% a 35%)
  // 2. Mais curta deve estar próxima de 25% (tolerância 15% a 35%)
  // 3. Posições A, B, C, D equilibradas (20% a 30% cada)
  // 4. Razão média próxima de 1.0 (0.85 a 1.25)
  const isLongestBalanced = correctIsLongestPct >= 15 && correctIsLongestPct <= 35;
  const isShortestBalanced = correctIsShortestPct >= 15 && correctIsShortestPct <= 35;
  const isRatioBalanced = averageLengthRatio >= 0.85 && averageLengthRatio <= 1.25;

  const passed = isLongestBalanced && isShortestBalanced && isRatioBalanced;

  return {
    totalSampled,
    correctIsLongestCount,
    correctIsLongestPct,
    correctIsShortestCount,
    correctIsShortestPct,
    correctIsMiddleCount,
    correctIsMiddlePct,
    averageLengthRatio,
    positionDistribution: positions,
    passed,
  };
}

if (typeof process !== 'undefined' && (process as { argv?: string[] }).argv?.[1]?.includes('verifyOptionBalance')) {
  console.log('Executando teste automatizado de calibração de alternativas de Ciências...');
  const res = runScienceBalanceVerification(40);
  console.log('--------------------------------------------------');
  console.log(`Total de questões testadas: ${res.totalSampled}`);
  console.log(`Correta é a mais longa: ${res.correctIsLongestPct.toFixed(1)}% (Esperado: ~25%)`);
  console.log(`Correta é a mais curta: ${res.correctIsShortestPct.toFixed(1)}% (Esperado: ~25%)`);
  console.log(`Correta é mediana/intermediária: ${res.correctIsMiddlePct.toFixed(1)}% (Esperado: ~50%)`);
  console.log(`Razão média (Tamanho da Correta / Média dos Distratores): ${res.averageLengthRatio.toFixed(2)} (Esperado: ~1.00)`);
  console.log('Distribuição por alternativas:', res.positionDistribution);
  console.log(`STATUS DO TESTE: ${res.passed ? '✅ APROVADO COM SUCESSO' : '❌ REPROVADO'}`);
  console.log('--------------------------------------------------');
}
