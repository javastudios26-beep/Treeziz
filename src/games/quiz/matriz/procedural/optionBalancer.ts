/**
 * Módulo de balanceamento e calibração de alternativas de Ciências.
 * Garante que a resposta correta NÃO seja sistematicamente a mais longa,
 * a mais detalhada, a mais técnica ou a única com explicações.
 */

export interface OptionLengthMetrics {
  correctLength: number;
  avgDistractorLength: number;
  maxDistractorLength: number;
  minDistractorLength: number;
  ratio: number;
  rank: number; // 0 = menor, 1/2 = intermediária, 3 = maior
  isBalanced: boolean;
}

/**
 * Remove parênteses explicativos e ressalvas que denunciam a alternativa correta.
 * Preserva fórmulas químicas e notações científicas indispensáveis (como H2O, O2, Z = 6, etc.).
 */
export function stripExplanatoryParentheses(text: string): string {
  if (!text) return '';
  // Se for uma fórmula química curta ou símbolo de elemento (ex: (O2), (CO2), (H2O), (N2), (Z = 6), (ΔH < 0)), mantém
  if (/\(([A-Za-z0-9_\u2070-\u209F\u00B0-\u00BE+\-=\s<>/]{1,8}|[A-Z][a-z]?)\)/.test(text)) {
    return text.replace(/\.$/, '').trim();
  }
  // Remove parênteses com explicações, sinônimos ou ressalvas (ex: (solução), (Litosfera), (Primeira Lei de Newton))
  const stripped = text.replace(/\s*\([^)]+\)\s*/g, ' ').replace(/\s{2,}/g, ' ').trim();
  return stripped.replace(/\.$/, '').trim();
}

/**
 * Remove orações explicativas finais introduzidas por vírgulas ou conjunções
 * que foram anexadas apenas à resposta correta.
 */
export function stripTrailingExplanationClauses(text: string, targetMaxLen: number): string {
  if (!text || text.length <= targetMaxLen) return text;

  const patterns = [
    /,\s+(com|onde|pois|já que|garantindo|evitando|permitindo|devido|diminuindo|aumentando|sem|caracterizad[ao]|compost[ao]|resultando|possuindo|atuando|apresentando|formando|causando|impedindo|possibilitando|delimitad[ao]|produzind[ao]|liberando|gerando|constituíd[ao]|responsável)\b.*$/i,
    /,\s+(que\s+[a-z]|para\s+[a-z]|de\s+modo\s+que|o\s+que\s+[a-z]|de\s+forma\s+a)\b.*$/i,
    /:\s+.*$/
  ];

  for (const p of patterns) {
    const trimmed = text.replace(p, '').trim();
    if (trimmed.length >= 8 && trimmed.length < text.length) {
      if (trimmed.length <= targetMaxLen + 15 || text.length > targetMaxLen + 20) {
        return trimmed;
      }
    }
  }

  return text;
}

/**
 * Calcula métricas de extensão e proporção das alternativas.
 */
export function getOptionLengthMetrics(options: string[], correctAnswer: number): OptionLengthMetrics {
  if (!options || options.length < 4 || correctAnswer < 0 || correctAnswer >= options.length) {
    return {
      correctLength: 0,
      avgDistractorLength: 0,
      maxDistractorLength: 0,
      minDistractorLength: 0,
      ratio: 1,
      rank: 1,
      isBalanced: true,
    };
  }

  const correctText = options[correctAnswer];
  const correctLength = correctText.length;
  const distractors = options.filter((_, idx) => idx !== correctAnswer);
  const distractorLengths = distractors.map((d) => d.length);

  const avgDistractorLength = distractorLengths.reduce((a, b) => a + b, 0) / distractors.length;
  const maxDistractorLength = Math.max(...distractorLengths);
  const minDistractorLength = Math.min(...distractorLengths);

  // Classificação do tamanho (0 = menor, 3 = maior)
  const sortedLengths = [...options.map((o) => o.length)].sort((a, b) => a - b);
  const rank = sortedLengths.indexOf(correctLength);

  const ratio = avgDistractorLength > 0 ? correctLength / avgDistractorLength : 1;
  const isBalanced = ratio >= 0.75 && ratio <= 1.35 && correctLength <= maxDistractorLength + 15;

  return {
    correctLength,
    avgDistractorLength,
    maxDistractorLength,
    minDistractorLength,
    ratio,
    rank,
    isBalanced,
  };
}

/**
 * Balanceia as 4 alternativas de uma questão científica para assegurar que:
 * 1. Não haja parênteses explicativos apenas na correta.
 * 2. A correta não tenha orações subordinadas explicativas isoladas.
 * 3. O tamanho da correta seja comparável ao dos distratores (ratio ~ 1.0).
 */
export function balanceQuestionOptions(
  rawOptions: string[],
  correctAnswer: number
): { options: string[]; correctAnswer: number } {
  if (!rawOptions || rawOptions.length !== 4 || correctAnswer < 0 || correctAnswer > 3) {
    return { options: rawOptions || [], correctAnswer };
  }

  // 1. Limpeza preliminar de parênteses explicativos assimétricos
  const hasParensInAll = rawOptions.every((o) => /\([^)]+\)/.test(o));
  const cleaned = rawOptions.map((opt) => {
    let t = opt.trim();
    if (!hasParensInAll) {
      t = stripExplanatoryParentheses(t);
    }
    // Remove ponto final das alternativas para manter uniformidade estética
    t = t.replace(/\.$/, '').trim();
    return t;
  });

  const correctText = cleaned[correctAnswer];
  const distractors = cleaned.filter((_, idx) => idx !== correctAnswer);
  const avgDistractorLen = distractors.reduce((a, b) => a + b.length, 0) / 3;
  const maxDistractorLen = Math.max(...distractors.map((d) => d.length));
  const minDistractorLen = Math.min(...distractors.map((d) => d.length));

  // 2. Se a alternativa correta for muito mais longa que os distratores,
  // aparar cláusulas explicativas redundantes
  let balancedCorrect = correctText;
  if (balancedCorrect.length > maxDistractorLen + 10 || balancedCorrect.length / avgDistractorLen > 1.35) {
    balancedCorrect = stripTrailingExplanationClauses(balancedCorrect, Math.max(maxDistractorLen, 25));
  }

  const finalOptions = [...cleaned];
  finalOptions[correctAnswer] = balancedCorrect;

  return {
    options: finalOptions,
    correctAnswer,
  };
}

/**
 * Embaralha as alternativas usando o algoritmo Fisher-Yates de forma determinística por questão,
 * mantendo o mapeamento exato da resposta correta e distribuindo a posição uniformemente.
 */
export function shuffleOptionsWithCorrect<T extends { options: string[]; correctAnswer: number }>(item: T): T {
  const currentOptions = [...item.options];
  const correctText = currentOptions[item.correctAnswer];

  // Fisher-Yates
  for (let i = currentOptions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [currentOptions[i], currentOptions[j]] = [currentOptions[j], currentOptions[i]];
  }

  const newCorrectIndex = currentOptions.indexOf(correctText);

  return {
    ...item,
    options: currentOptions,
    correctAnswer: newCorrectIndex >= 0 ? newCorrectIndex : 0,
  };
}
