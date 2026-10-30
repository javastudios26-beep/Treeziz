import { GradeType, DifficultyType, Question } from './index';

// Função auxiliar para gerar inteiro aleatório inclusivo
function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Embaralhar opções e retornar índice da resposta correta
function makeOptions(correct: string, distractors: string[]): { options: string[]; correctAnswer: number } {
  // Limpar duplicatas nos distratores e garantir que nenhum distrator seja igual ao correto
  const validDistractors = Array.from(new Set(distractors.filter(d => d !== correct))).slice(0, 3);
  
  // Se faltarem distratores, gerar variações numéricas plausíveis
  const numVal = parseFloat(correct.replace(/[^\d.-]/g, ''));
  while (validDistractors.length < 3) {
    const fake = !isNaN(numVal) 
      ? String(Math.round((numVal + (validDistractors.length + 1) * (Math.random() > 0.5 ? 2 : -2)) * 10) / 10)
      : `Opção ${validDistractors.length + 2}`;
    if (fake !== correct && !validDistractors.includes(fake)) {
      validDistractors.push(fake);
    }
  }

  const all = [correct, ...validDistractors];
  // Fisher-Yates
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }

  return {
    options: all,
    correctAnswer: all.indexOf(correct),
  };
}

// ----------------------------------------------------
// GERADORES MATEMÁTICOS PROCEDURAIS POR SÉRIE & DIFICULDADE
// ----------------------------------------------------

export function generateMathQuestion(grade: GradeType, difficulty: DifficultyType): Question {
  const uid = `proc-mat-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
  const xp = difficulty === 'facil' ? 20 : difficulty === 'medio' ? 35 : difficulty === 'dificil' ? 55 : 80;

  switch (grade) {
    case '6º ano':
      return genMath6(uid, difficulty, xp);
    case '7º ano':
      return genMath7(uid, difficulty, xp);
    case '8º ano':
      return genMath8(uid, difficulty, xp);
    case '9º ano':
      return genMath9(uid, difficulty, xp);
    case '1º ano EM':
      return genMath1EM(uid, difficulty, xp);
    case '2º ano EM':
      return genMath2EM(uid, difficulty, xp);
    case '3º ano EM':
      return genMath3EM(uid, difficulty, xp);
    default:
      return genMath6(uid, difficulty, xp);
  }
}

// 6º ANO
function genMath6(id: string, diff: DifficultyType, xp: number): Question {
  if (diff === 'facil') {
    const type = randInt(1, 4);
    if (type === 1) {
      // MMC simples
      const a = randInt(2, 6);
      const b = randInt(3, 8);
      const gcd = (x: number, y: number): number => y === 0 ? x : gcd(y, x % y);
      const mmc = (a * b) / gcd(a, b);
      const { options, correctAnswer } = makeOptions(String(mmc), [String(a * b), String(mmc + a), String(Math.max(1, mmc - b))]);
      return {
        id, subject: 'matematica', grade: '6º ano', difficulty: diff, xp,
        question: `Qual é o Mínimo Múltiplo Comum (MMC) entre ${a} e ${b}?`,
        options, correctAnswer,
        explanation: `Os múltiplos de ${a} e ${b} encontram o menor valor positivo comum em ${mmc}.`,
      };
    } else if (type === 2) {
      // Perímetro de retângulo
      const w = randInt(4, 15);
      const h = randInt(3, 12);
      const perim = 2 * (w + h);
      const { options, correctAnswer } = makeOptions(`${perim} cm`, [`${w * h} cm`, `${w + h} cm`, `${perim + 4} cm`]);
      return {
        id, subject: 'matematica', grade: '6º ano', difficulty: diff, xp,
        question: `Qual é o perímetro de um retângulo de largura ${w} cm e comprimento ${h} cm?`,
        options, correctAnswer,
        explanation: `O perímetro é a soma de todos os lados: 2 × (${w} + ${h}) = ${perim} cm.`,
      };
    } else if (type === 3) {
      // Fração equivalente simples
      const num = randInt(1, 5);
      const den = randInt(2, 6);
      const k = randInt(2, 4);
      const { options, correctAnswer } = makeOptions(`${num * k}/${den * k}`, [`${num * k + 1}/${den * k}`, `${num}/${den * k}`, `${num * k}/${den}`]);
      return {
        id, subject: 'matematica', grade: '6º ano', difficulty: diff, xp,
        question: `Multiplicando numerador e denominador por ${k}, qual fração equivalente a ${num}/${den} é obtida?`,
        options, correctAnswer,
        explanation: `Multiplicando ambos os termos por ${k}: (${num} × ${k})/(${den} × ${k}) = ${num * k}/${den * k}.`,
      };
    } else {
      // Operações com naturais
      const a = randInt(15, 60);
      const b = randInt(10, 40);
      const sum = a + b;
      const { options, correctAnswer } = makeOptions(String(sum), [String(sum + 10), String(sum - 2), String(sum + 5)]);
      return {
        id, subject: 'matematica', grade: '6º ano', difficulty: diff, xp,
        question: `Qual é o resultado da adição ${a} + ${b}?`,
        options, correctAnswer,
        explanation: `${a} + ${b} = ${sum}.`,
      };
    }
  } else if (diff === 'medio') {
    const type = randInt(1, 3);
    if (type === 1) {
      // Área de retângulo
      const b = randInt(5, 12);
      const h = randInt(4, 9);
      const area = b * h;
      const { options, correctAnswer } = makeOptions(`${area} m²`, [`${2 * (b + h)} m²`, `${area + 6} m²`, `${area - 4} m²`]);
      return {
        id, subject: 'matematica', grade: '6º ano', difficulty: diff, xp,
        question: `Uma sala retangular tem ${b} m de base e ${h} m de altura. Qual é a sua área?`,
        options, correctAnswer,
        explanation: `Área do retângulo = base × altura = ${b} × ${h} = ${area} m².`,
      };
    } else if (type === 2) {
      // Porcentagem simples (10%, 25%, 50%)
      const p = [10, 20, 25, 50][randInt(0, 3)];
      const val = randInt(2, 10) * 20;
      const res = (p / 100) * val;
      const { options, correctAnswer } = makeOptions(String(res), [String(res + 5), String(res * 2), String(Math.max(1, res - 4))]);
      return {
        id, subject: 'matematica', grade: '6º ano', difficulty: diff, xp,
        question: `Quanto vale ${p}% de ${val}?`,
        options, correctAnswer,
        explanation: `${p}% de ${val} = (${p} ÷ 100) × ${val} = ${res}.`,
      };
    } else {
      // Potenciação de números naturais
      const base = randInt(2, 6);
      const exp = randInt(2, 3);
      const res = Math.pow(base, exp);
      const { options, correctAnswer } = makeOptions(String(res), [String(base * exp), String(res + base), String(res - 1)]);
      return {
        id, subject: 'matematica', grade: '6º ano', difficulty: diff, xp,
        question: `Qual é o valor da potência ${base}^${exp}?`,
        options, correctAnswer,
        explanation: `${base}^${exp} = ${Array(exp).fill(base).join(' × ')} = ${res}.`,
      };
    }
  } else if (diff === 'dificil') {
    // Expressões numéricas com precedência
    const a = randInt(3, 8);
    const b = randInt(2, 6);
    const c = randInt(2, 5);
    const ans = a + b * c;
    const { options, correctAnswer } = makeOptions(String(ans), [String((a + b) * c), String(ans + 3), String(ans - 4)]);
    return {
      id, subject: 'matematica', grade: '6º ano', difficulty: diff, xp,
      question: `Resolva a expressão numérica respeitando a ordem das operações: ${a} + ${b} × ${c}`,
      options, correctAnswer,
      explanation: `Multiplicação tem prioridade sobre adição: primeiro ${b} × ${c} = ${b * c}, depois somamos ${a}: ${a} + ${b * c} = ${ans}.`,
    };
  } else {
    // Expert 6º ano: MDC
    const a = randInt(2, 5) * 6;
    const b = randInt(2, 4) * 8;
    const gcd = (x: number, y: number): number => y === 0 ? x : gcd(y, x % y);
    const mdc = gcd(a, b);
    const { options, correctAnswer } = makeOptions(String(mdc), [String(mdc * 2), String(Math.max(1, mdc - 2)), String(mdc + 4)]);
    return {
      id, subject: 'matematica', grade: '6º ano', difficulty: diff, xp,
      question: `Determine o Maior Divisor Comum (MDC) entre ${a} e ${b}:`,
      options, correctAnswer,
      explanation: `O maior número inteiro positivo que divide simultaneamente ${a} e ${b} é ${mdc}.`,
    };
  }
}

// 7º ANO
function genMath7(id: string, diff: DifficultyType, xp: number): Question {
  if (diff === 'facil') {
    // Operações com inteiros negativos
    const a = randInt(-15, -2);
    const b = randInt(-10, 15);
    const ans = a + b;
    const { options, correctAnswer } = makeOptions(String(ans), [String(ans + 4), String(a - b), String(-ans)]);
    return {
      id, subject: 'matematica', grade: '7º ano', difficulty: diff, xp,
      question: `Calcule a soma dos números inteiros: (${a}) + (${b})`,
      options, correctAnswer,
      explanation: `(${a}) + (${b}) = ${ans}.`,
    };
  } else if (diff === 'medio') {
    // Equação do 1º grau ax + b = c
    const a = randInt(2, 5);
    const x = randInt(1, 9);
    const b = randInt(1, 15);
    const c = a * x + b;
    const { options, correctAnswer } = makeOptions(`x = ${x}`, [`x = ${x + 2}`, `x = ${Math.max(1, x - 1)}`, `x = ${x + 4}`]);
    return {
      id, subject: 'matematica', grade: '7º ano', difficulty: diff, xp,
      question: `Determine a solução da equação do 1º grau: ${a}x + ${b} = ${c}`,
      options, correctAnswer,
      explanation: `Subtraindo ${b}: ${a}x = ${c - b}. Dividindo por ${a}: x = ${c - b} ÷ ${a} = ${x}.`,
    };
  } else if (diff === 'dificil') {
    // Regra de três simples direta
    const k = randInt(2, 6);
    const d1 = randInt(3, 8);
    const p1 = d1 * k * 5;
    const d2 = d1 * 2;
    const ans = (p1 * d2) / d1;
    const { options, correctAnswer } = makeOptions(String(ans), [String(ans + 10), String(ans - 15), String(ans * 2)]);
    return {
      id, subject: 'matematica', grade: '7º ano', difficulty: diff, xp,
      question: `Se ${d1} operários produzem ${p1} peças por dia, quantas peças ${d2} operários produzirão no mesmo ritmo?`,
      options, correctAnswer,
      explanation: `Grandezas diretamente proporcionais: (${d1}/${d2}) = (${p1}/x) ⇒ x = (${p1} × ${d2}) ÷ ${d1} = ${ans} peças.`,
    };
  } else {
    // Expert 7º ano: Ângulos complementares / suplementares
    const isSup = Math.random() > 0.5;
    const target = isSup ? 180 : 90;
    const term = isSup ? 'suplementar' : 'complementar';
    const ang = randInt(25, target - 15);
    const ans = target - ang;
    const { options, correctAnswer } = makeOptions(`${ans}º`, [`${ans + 10}º`, `${180 - ans}º`, `${ans - 5}º`]);
    return {
      id, subject: 'matematica', grade: '7º ano', difficulty: diff, xp,
      question: `Qual é a medida do ângulo ${term} de ${ang}º?`,
      options, correctAnswer,
      explanation: `Dois ângulos são ${term}es quando sua soma é igual a ${target}º. Portanto: ${target}º - ${ang}º = ${ans}º.`,
    };
  }
}

// 8º ANO
function genMath8(id: string, diff: DifficultyType, xp: number): Question {
  if (diff === 'facil') {
    // Propriedade de potência mesma base
    const base = randInt(2, 5);
    const e1 = randInt(2, 5);
    const e2 = randInt(2, 4);
    const sumExp = e1 + e2;
    const { options, correctAnswer } = makeOptions(`${base}^${sumExp}`, [`${base}^${e1 * e2}`, `${base * 2}^${sumExp}`, `${base}^${Math.abs(e1 - e2)}`]);
    return {
      id, subject: 'matematica', grade: '8º ano', difficulty: diff, xp,
      question: `Aplicando as propriedades de potências de mesma base, quanto vale (${base}^${e1}) × (${base}^${e2})?`,
      options, correctAnswer,
      explanation: `Na multiplicação de potências de mesma base, conserva-se a base e somam-se os expoentes: ${e1} + ${e2} = ${sumExp}.`,
    };
  } else if (diff === 'medio') {
    // Teorema de Pitágoras com trio pitagórico
    const triplets = [
      [3, 4, 5],
      [6, 8, 10],
      [5, 12, 13],
      [8, 15, 17],
      [9, 12, 15],
    ];
    const chosen = triplets[randInt(0, triplets.length - 1)];
    const c1 = chosen[0];
    const c2 = chosen[1];
    const hyp = chosen[2];
    const { options, correctAnswer } = makeOptions(`${hyp} cm`, [`${c1 + c2} cm`, `${hyp + 2} cm`, `${hyp - 1} cm`]);
    return {
      id, subject: 'matematica', grade: '8º ano', difficulty: diff, xp,
      question: `Em um triângulo retângulo com catetos medindo ${c1} cm e ${c2} cm, qual é a medida da hipotenusa?`,
      options, correctAnswer,
      explanation: `Pelo Teorema de Pitágoras: a² = b² + c² = ${c1}² + ${c2}² = ${c1 * c1} + ${c2 * c2} = ${hyp * hyp}. Portanto, a = √${hyp * hyp} = ${hyp} cm.`,
    };
  } else if (diff === 'dificil') {
    // Produtos notáveis (quadrado da soma)
    const k = randInt(2, 6);
    const ans = `x² + ${2 * k}x + ${k * k}`;
    const { options, correctAnswer } = makeOptions(ans, [`x² + ${k * k}`, `x² + ${k}x + ${k * k}`, `x² + ${2 * k}x + ${2 * k}`]);
    return {
      id, subject: 'matematica', grade: '8º ano', difficulty: diff, xp,
      question: `Desenvolva o produto notável (x + ${k})²:`,
      options, correctAnswer,
      explanation: `O quadrado da soma de dois termos é: (a + b)² = a² + 2ab + b² = x² + 2(${k})x + ${k}² = ${ans}.`,
    };
  } else {
    // Expert 8º ano: Sistema Linear 2x2
    const x = randInt(2, 6);
    const y = randInt(1, 5);
    const eq1 = x + y;
    const eq2 = x - y;
    const { options, correctAnswer } = makeOptions(`x = ${x}, y = ${y}`, [`x = ${x + 1}, y = ${Math.max(1, y - 1)}`, `x = ${y}, y = ${x}`, `x = ${x + 2}, y = ${y + 1}`]);
    return {
      id, subject: 'matematica', grade: '8º ano', difficulty: diff, xp,
      question: `Resolva o sistema linear: { x + y = ${eq1} ; x - y = ${eq2} }`,
      options, correctAnswer,
      explanation: `Somando as duas equações: 2x = ${eq1 + eq2} ⇒ x = ${x}. Substituindo na primeira: ${x} + y = ${eq1} ⇒ y = ${y}.`,
    };
  }
}

// 9º ANO
function genMath9(id: string, diff: DifficultyType, xp: number): Question {
  if (diff === 'facil') {
    // Coeficientes da equação do 2º grau
    const a = randInt(1, 4);
    const b = randInt(-7, 7);
    const c = randInt(-10, 10);
    const { options, correctAnswer } = makeOptions(`a = ${a}, b = ${b}, c = ${c}`, [`a = ${b}, b = ${a}, c = ${c}`, `a = ${a}, b = ${c}, c = ${b}`, `a = 1, b = ${b}, c = ${c}`]);
    const bSign = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
    const cSign = c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`;
    return {
      id, subject: 'matematica', grade: '9º ano', difficulty: diff, xp,
      question: `Identifique os coeficientes a, b e c da equação quadrática: ${a}x² ${bSign}x ${cSign} = 0`,
      options, correctAnswer,
      explanation: `Na forma geral ax² + bx + c = 0, a acompanha x² (${a}), b acompanha x (${b}) e c é o termo independente (${c}).`,
    };
  } else if (diff === 'medio') {
    // Discriminante Delta de equação com raízes reais
    const a = 1;
    const r1 = randInt(1, 5);
    const r2 = randInt(1, 5);
    const b = -(r1 + r2);
    const c = r1 * r2;
    const delta = b * b - 4 * a * c;
    const { options, correctAnswer } = makeOptions(String(delta), [String(delta + 8), String(Math.abs(delta - 4)), String(delta * 2)]);
    const bStr = b < 0 ? `- ${Math.abs(b)}x` : `+ ${b}x`;
    return {
      id, subject: 'matematica', grade: '9º ano', difficulty: diff, xp,
      question: `Qual é o valor do discriminante (Δ = b² - 4ac) da equação x² ${bStr} + ${c} = 0?`,
      options, correctAnswer,
      explanation: `Δ = (${b})² - 4 × 1 × (${c}) = ${b * b} - ${4 * c} = ${delta}.`,
    };
  } else if (diff === 'dificil') {
    // Raízes de equação quadrática
    const r1 = randInt(1, 4);
    const r2 = randInt(5, 8);
    const b = -(r1 + r2);
    const c = r1 * r2;
    const { options, correctAnswer } = makeOptions(`S = {${r1}, ${r2}}`, [`S = {${-r1}, ${-r2}}`, `S = {${r1}, ${-r2}}`, `S = {${r1 + 1}, ${r2 - 1}}`]);
    return {
      id, subject: 'matematica', grade: '9º ano', difficulty: diff, xp,
      question: `Encontre as raízes reais da equação x² - ${r1 + r2}x + ${c} = 0:`,
      options, correctAnswer,
      explanation: `Pela soma e produto: r₁ + r₂ = ${r1 + r2} e r₁ × r₂ = ${c}. As raízes são x = ${r1} e x = ${r2}.`,
    };
  } else {
    // Expert 9º ano: Trigonometria básica (seno, cosseno ou tangente notável)
    const angles = [
      { name: '30º', sin: '1/2', cos: '√3/2', tan: '√3/3' },
      { name: '45º', sin: '√2/2', cos: '√2/2', tan: '1' },
      { name: '60º', sin: '√3/2', cos: '1/2', tan: '√3' },
    ];
    const pick = angles[randInt(0, 2)];
    const func = ['seno', 'cosseno', 'tangente'][randInt(0, 2)] as 'seno' | 'cosseno' | 'tangente';
    const ans = func === 'seno' ? pick.sin : func === 'cosseno' ? pick.cos : pick.tan;
    const pool = ['1/2', '√2/2', '√3/2', '1', '√3', '√3/3'].filter(v => v !== ans);
    const { options, correctAnswer } = makeOptions(ans, pool.slice(0, 3));
    return {
      id, subject: 'matematica', grade: '9º ano', difficulty: diff, xp,
      question: `Qual é o valor exato de ${func}(${pick.name})?`,
      options, correctAnswer,
      explanation: `Pelos valores trigonométricos dos ângulos notáveis (30º, 45º e 60º), ${func}(${pick.name}) = ${ans}.`,
    };
  }
}

// 1º ANO EM
function genMath1EM(id: string, diff: DifficultyType, xp: number): Question {
  if (diff === 'facil') {
    // Função afim f(x) = ax + b, calcular f(k)
    const a = randInt(2, 6);
    const b = randInt(-8, 8);
    const k = randInt(2, 5);
    const ans = a * k + b;
    const { options, correctAnswer } = makeOptions(String(ans), [String(ans + 2), String(ans - 3), String(ans + 5)]);
    const bStr = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
    return {
      id, subject: 'matematica', grade: '1º ano EM', difficulty: diff, xp,
      question: `Dada a função afim f(x) = ${a}x ${bStr}, calcule o valor numérico de f(${k}):`,
      options, correctAnswer,
      explanation: `Substituindo x por ${k}: f(${k}) = ${a}(${k}) ${bStr} = ${a * k} ${bStr} = ${ans}.`,
    };
  } else if (diff === 'medio') {
    // Termo geral de PA: an = a1 + (n - 1)r
    const a1 = randInt(2, 10);
    const r = randInt(3, 7);
    const n = randInt(8, 15);
    const an = a1 + (n - 1) * r;
    const { options, correctAnswer } = makeOptions(String(an), [String(an + r), String(an - 2 * r), String(a1 * n)]);
    return {
      id, subject: 'matematica', grade: '1º ano EM', difficulty: diff, xp,
      question: `Em uma Progressão Aritmética (PA) com a₁ = ${a1} e razão r = ${r}, determine o termo a_${n}:`,
      options, correctAnswer,
      explanation: `Fórmula do termo geral: a_n = a₁ + (n - 1)r = ${a1} + (${n} - 1) × ${r} = ${a1} + ${n - 1} × ${r} = ${an}.`,
    };
  } else if (diff === 'dificil') {
    // Vértice da parábola Xv = -b / (2a)
    const a = 1;
    const xv = randInt(2, 6);
    const b = -2 * a * xv;
    const c = randInt(1, 9);
    const { options, correctAnswer } = makeOptions(`Xv = ${xv}`, [`Xv = ${-xv}`, `Xv = ${xv * 2}`, `Xv = ${xv + 1}`]);
    return {
      id, subject: 'matematica', grade: '1º ano EM', difficulty: diff, xp,
      question: `Qual é a abscissa do vértice (Xv) da parábola f(x) = x² ${b < 0 ? `- ${Math.abs(b)}` : `+ ${b}`}x + ${c}?`,
      options, correctAnswer,
      explanation: `Xv = -b / (2a) = -(${b}) / (2 × 1) = ${-b} / 2 = ${xv}.`,
    };
  } else {
    // Expert 1º ano EM: Soma dos termos de uma PA finita
    const a1 = randInt(1, 5);
    const r = randInt(2, 4);
    const n = 10;
    const an = a1 + (n - 1) * r;
    const sn = ((a1 + an) * n) / 2;
    const { options, correctAnswer } = makeOptions(String(sn), [String(sn + 15), String(sn - 10), String(an * n)]);
    return {
      id, subject: 'matematica', grade: '1º ano EM', difficulty: diff, xp,
      question: `Calcule a soma dos primeiros ${n} termos da PA (${a1}, ${a1 + r}, ${a1 + 2 * r}, ...):`,
      options, correctAnswer,
      explanation: `a_${n} = ${a1} + 9 × ${r} = ${an}. S_${n} = [(a₁ + a_${n}) × n] / 2 = [(${a1} + ${an}) × ${n}] / 2 = ${sn}.`,
    };
  }
}

// 2º ANO EM
function genMath2EM(id: string, diff: DifficultyType, xp: number): Question {
  if (diff === 'facil') {
    // Matrizes: elemento a_ij
    const a11 = randInt(1, 5);
    const a12 = randInt(1, 5);
    const a21 = randInt(1, 5);
    const a22 = randInt(1, 5);
    const { options, correctAnswer } = makeOptions(String(a21), [String(a12), String(a11), String(a22)]);
    return {
      id, subject: 'matematica', grade: '2º ano EM', difficulty: diff, xp,
      question: `Na matriz A = [ [${a11}, ${a12}], [${a21}, ${a22}] ], qual é o valor do elemento a₂₁ (segunda linha, primeira coluna)?`,
      options, correctAnswer,
      explanation: `O elemento a₂₁ fica na linha 2 e coluna 1, que corresponde ao número ${a21}.`,
    };
  } else if (diff === 'medio') {
    // Determinante de matriz 2x2
    const a = randInt(2, 6);
    const b = randInt(1, 4);
    const c = randInt(1, 4);
    const d = randInt(2, 6);
    const det = a * d - b * c;
    const { options, correctAnswer } = makeOptions(String(det), [String(a * d + b * c), String(det + 3), String(det - 5)]);
    return {
      id, subject: 'matematica', grade: '2º ano EM', difficulty: diff, xp,
      question: `Calcule o determinante da matriz 2×2: | ${a}  ${b} | e | ${c}  ${d} |`,
      options, correctAnswer,
      explanation: `det = (diagonal principal) - (diagonal secundária) = (${a} × ${d}) - (${b} × ${c}) = ${a * d} - ${b * c} = ${det}.`,
    };
  } else if (diff === 'dificil') {
    // Análise Combinatória: Permutação Simples P_n
    const n = randInt(4, 5);
    const fact = (k: number): number => k <= 1 ? 1 : k * fact(k - 1);
    const ans = fact(n);
    const { options, correctAnswer } = makeOptions(String(ans), [String(ans + 12), String(n * (n - 1)), String(ans / 2)]);
    return {
      id, subject: 'matematica', grade: '2º ano EM', difficulty: diff, xp,
      question: `De quantas maneiras distintas ${n} pessoas podem se organizar em uma fila (Permutação P_${n})?`,
      options, correctAnswer,
      explanation: `P_${n} = ${n}! = ${Array.from({ length: n }, (_, i) => n - i).join(' × ')} = ${ans} maneiras.`,
    };
  } else {
    // Expert 2º ano EM: Combinação Simples C(n, 2)
    const n = randInt(5, 8);
    const ans = (n * (n - 1)) / 2;
    const { options, correctAnswer } = makeOptions(String(ans), [String(ans + 4), String(n * (n - 1)), String(ans - 3)]);
    return {
      id, subject: 'matematica', grade: '2º ano EM', difficulty: diff, xp,
      question: `Quantas comissões de 2 membros podem ser formadas a partir de um grupo de ${n} pessoas [C(${n}, 2)]?`,
      options, correctAnswer,
      explanation: `C(${n}, 2) = (${n} × ${n - 1}) / (2 × 1) = ${n * (n - 1)} / 2 = ${ans}.`,
    };
  }
}

// 3º ANO EM
function genMath3EM(id: string, diff: DifficultyType, xp: number): Question {
  if (diff === 'facil') {
    // Distância entre pontos cartesianos ou identificação de quadrante
    const x = randInt(-6, -1);
    const y = randInt(1, 6);
    const { options, correctAnswer } = makeOptions('2º Quadrante', ['1º Quadrante', '3º Quadrante', '4º Quadrante']);
    return {
      id, subject: 'matematica', grade: '3º ano EM', difficulty: diff, xp,
      question: `No plano cartesiano ortogonal, em qual quadrante se localiza o ponto P(${x}, ${y})?`,
      options, correctAnswer,
      explanation: `Como x < 0 (${x}) e y > 0 (${y}), o ponto pertence exclusivamente ao 2º quadrante.`,
    };
  } else if (diff === 'medio') {
    // Distância cartesiana com valor inteiro (triângulo retângulo)
    const dx = 3;
    const dy = 4;
    const x1 = randInt(1, 4);
    const y1 = randInt(1, 4);
    const x2 = x1 + dx;
    const y2 = y1 + dy;
    const d = 5;
    const { options, correctAnswer } = makeOptions(String(d), ['7', '25', '√7']);
    return {
      id, subject: 'matematica', grade: '3º ano EM', difficulty: diff, xp,
      question: `Qual é a distância euclidiana entre os pontos A(${x1}, ${y1}) e B(${x2}, ${y2})?`,
      options, correctAnswer,
      explanation: `d = √[(x₂ - x₁)² + (y₂ - y₁)²] = √[(${dx})² + (${dy})²] = √[9 + 16] = √25 = 5 unidades.`,
    };
  } else if (diff === 'dificil') {
    // Coeficiente angular da reta ax + by + c = 0
    const m = randInt(2, 5);
    const b = randInt(1, 8);
    // y = mx + b  =>  mx - y + b = 0
    const { options, correctAnswer } = makeOptions(String(m), [String(-m), String(1 / m), String(b)]);
    return {
      id, subject: 'matematica', grade: '3º ano EM', difficulty: diff, xp,
      question: `Qual é o coeficiente angular (declividade m) da reta de equação ${m}x - y + ${b} = 0?`,
      options, correctAnswer,
      explanation: `Isolando y na forma reduzida: y = ${m}x + ${b}. O coeficiente angular que multiplica x é m = ${m}.`,
    };
  } else {
    // Expert 3º ano EM: Raio de circunferência reduzida (x - a)² + (y - b)² = r²
    const r = randInt(3, 7);
    const a = randInt(1, 5);
    const b = randInt(1, 5);
    const r2 = r * r;
    const { options, correctAnswer } = makeOptions(`r = ${r}`, [`r = ${r2}`, `r = ${r * 2}`, `r = ${r - 1}`]);
    return {
      id, subject: 'matematica', grade: '3º ano EM', difficulty: diff, xp,
      question: `Dada a equação da circunferência (x - ${a})² + (y - ${b})² = ${r2}, qual é o raio r?`,
      options, correctAnswer,
      explanation: `Na equação canônica (x - a)² + (y - b)² = r², temos r² = ${r2} ⇒ r = √${r2} = ${r}.`,
    };
  }
}
