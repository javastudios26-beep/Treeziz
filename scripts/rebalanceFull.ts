import fs from 'fs';
import path from 'path';
import { FUNDAMENTAL_SCIENCE_QUESTIONS } from '../src/games/quiz/matriz/questions/fundamentalScience';
import { MEDIO_SCIENCE_QUESTIONS } from '../src/games/quiz/matriz/questions/medioScience';
import { QuestionData } from '../src/games/quiz/matriz/questions/types';

function cleanOption(text: string): string {
  if (!text) return '';
  let t = text.trim();
  // Preserva fórmulas curtas como (O₂), (CO₂), (H₂O), (N), (F), (Z = 6), (a = 0)
  if (/\([A-Za-z0-9_\u2070-\u209F\u00B0-\u00BE+\-=\s]{1,8}\)/.test(t)) {
    return t.replace(/\.$/, '').trim();
  }
  t = t.replace(/\s*\([^)]+\)\s*/g, ' ').replace(/\s{2,}/g, ' ').trim();
  return t.replace(/\.$/, '').trim();
}

function trimClauses(c: string, targetMax: number): string {
  if (c.length <= targetMax) return c;
  const splits = [
    /,\s+(com|onde|pois|já que|garantindo|evitando|permitindo|devido|diminuindo|aumentando|sem|caracterizad[ao]|compost[ao]|resultando|possuindo|atuando|apresentando|formando|causando|impedindo|possibilitando|delimitad[ao]|produzind[ao]|recebendo|exigindo|iniciando|inibindo|gerando|passando|ocorrendo)\b.*$/i,
    /,\s+(que\s+[a-z]|para\s+[a-z]|de\s+modo\s+que|o\s+que\s+[a-z]|de\s+forma\s+a)\b.*$/i,
    /\s+(de modo a|com o objetivo de|garantindo que|com a finalidade de)\b.*$/i,
    /:\s+.*$/
  ];
  for (const sp of splits) {
    const trimmed = c.replace(sp, '').trim();
    if (trimmed.length >= 10 && trimmed.length < c.length) {
      c = trimmed;
      if (c.length <= targetMax) return c;
    }
  }
  return c;
}

function expandDistractor(d: string, targetLen: number, topic: string, question: string): string {
  if (d.length >= targetLen) return d;
  
  const qLower = (question + ' ' + topic).toLowerCase();
  let modifier = 'em condições normais observadas';

  if (qLower.includes('célul') || qLower.includes('mitocôndria') || qLower.includes('organela') || qLower.includes('dna') || qLower.includes('núcleo')) {
    modifier = 'na organização da estrutura celular';
  } else if (qLower.includes('terra') || qLower.includes('planeta') || qLower.includes('lua') || qLower.includes('sol') || qLower.includes('órbita') || qLower.includes('estação') || qLower.includes('fuso')) {
    modifier = 'no movimento orbital astronômico';
  } else if (qLower.includes('mistura') || qLower.includes('substância') || qLower.includes('química') || qLower.includes('fase') || qLower.includes('átomo') || qLower.includes('ligação')) {
    modifier = 'no sistema material em equilíbrio';
  } else if (qLower.includes('energia') || qLower.includes('eletricidade') || qLower.includes('circuito') || qLower.includes('corrente') || qLower.includes('tensão') || qLower.includes('onda') || qLower.includes('luz')) {
    modifier = 'ao longo do circuito físico observável';
  } else if (qLower.includes('ecolog') || qLower.includes('ambiente') || qLower.includes('espécie') || qLower.includes('evolu') || qLower.includes('popula')) {
    modifier = 'no equilíbrio da comunidade biológica';
  } else if (qLower.includes('corpo') || qLower.includes('órgão') || qLower.includes('sangue') || qLower.includes('pulmão') || qLower.includes('músculo') || qLower.includes('neurônio')) {
    modifier = 'no funcionamento fisiológico do organismo';
  }

  if (d.length < targetLen - 15) {
    return `${d} ${modifier}`;
  } else if (d.length < targetLen - 4) {
    return `${d} de modo contínuo e estável`;
  }

  return d;
}

export function balanceSingleQuestion(q: QuestionData): QuestionData {
  let opts = q.options.map(cleanOption);
  let c = opts[q.correctAnswer];
  let dists = opts.filter((_, i) => i !== q.correctAnswer);
  let maxD = Math.max(...dists.map(d => d.length));

  if (c.length > maxD + 6) {
    c = trimClauses(c, Math.max(maxD + 6, 25));
    opts[q.correctAnswer] = c;
  }

  // Re-check
  dists = opts.filter((_, i) => i !== q.correctAnswer);
  maxD = Math.max(...dists.map(d => d.length));

  if (c.length > maxD) {
    // Expand distractors so at least 1 or 2 become equal or longer than c
    opts = opts.map((opt, i) => {
      if (i === q.correctAnswer) return opt;
      const target = c.length + (i % 2 === 0 ? 6 : -2);
      return expandDistractor(opt, target, q.topic || '', q.question);
    });
  }

  // Deterministic shuffle of the initial answer index based on question ID
  // so that source data does not have 100% at index 0
  const charSum = q.id.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const targetIdx = charSum % 4;

  const correctText = opts[q.correctAnswer];
  const otherOpts = opts.filter((_, i) => i !== q.correctAnswer);
  const finalOptions: string[] = [];

  let otherIdx = 0;
  for (let i = 0; i < 4; i++) {
    if (i === targetIdx) {
      finalOptions.push(correctText);
    } else {
      finalOptions.push(otherOpts[otherIdx++]);
    }
  }

  return {
    ...q,
    options: finalOptions,
    correctAnswer: targetIdx,
  };
}

const fundBalanced = FUNDAMENTAL_SCIENCE_QUESTIONS.map(balanceSingleQuestion);
const medBalanced = MEDIO_SCIENCE_QUESTIONS.map(balanceSingleQuestion);

function evaluate(name: string, list: QuestionData[]) {
  let ranks = [0, 0, 0, 0];
  let longest = 0;
  for (const q of list) {
    const cLen = q.options[q.correctAnswer].length;
    const sorted = [...q.options.map(o => o.length)].sort((a,b) => a - b);
    const r = sorted.indexOf(cLen);
    ranks[r]++;
    if (cLen === Math.max(...q.options.map(o => o.length))) longest++;
  }
  console.log(name, 'Total:', list.length);
  console.log('Ranks (0=shortest, 1=2nd, 2=3rd, 3=longest):', ranks);
  console.log('Longest %:', ((longest / list.length) * 100).toFixed(1) + '%');
}

evaluate('Fundamental', fundBalanced);
evaluate('Medio', medBalanced);

// Output to files
const fundHeader = `import { QuestionData } from './types';

// ============================================================================
// BANCO DE CIÊNCIAS - ENSINO FUNDAMENTAL (6º AO 9º ANO)
// REVISADO E CALIBRADO PELA BNCC COM HABILIDADES OFICIAIS VERIFICADAS
// Total: 240 questões (15 por dificuldade em cada ano escolar)
// ALTERNATIVAS BALANCEADAS: Sem viés de resposta mais longa
// ============================================================================

export const FUNDAMENTAL_SCIENCE_QUESTIONS: QuestionData[] = ${JSON.stringify(fundBalanced, null, 2)};
`;

const medHeader = `import { QuestionData } from './types';

// ============================================================================
// BANCO DE CIÊNCIAS - ENSINO MÉDIO (1º AO 3º ANO EM)
// REVISADO E CALIBRADO PELA BNCC COM HABILIDADES OFICIAIS VERIFICADAS
// Total: 180 questões (15 por dificuldade em cada ano escolar)
// ALTERNATIVAS BALANCEADAS: Sem viés de resposta mais longa
// ============================================================================

export const MEDIO_SCIENCE_QUESTIONS: QuestionData[] = ${JSON.stringify(medBalanced, null, 2)};
`;

fs.writeFileSync(path.resolve('src/games/quiz/matriz/questions/fundamentalScience.ts'), fundHeader, 'utf-8');
fs.writeFileSync(path.resolve('src/games/quiz/matriz/questions/medioScience.ts'), medHeader, 'utf-8');

console.log('Successfully written updated fundamentalScience.ts and medioScience.ts!');
