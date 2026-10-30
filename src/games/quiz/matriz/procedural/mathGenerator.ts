import { GradeType, DifficultyType } from '../index';
import { ProceduralQuestion } from './types';

// ============================================================================
// UTILITÁRIOS MATEMÁTICOS CONFIÁVEIS
// ============================================================================

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randChoice<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a || 1;
}

function lcm(a: number, b: number): number {
  return (Math.abs(a * b)) / gcd(a, b);
}

function formatOptions(correct: string, rawDistractors: string[]): { options: string[]; correctAnswer: number } {
  const normCorrect = correct.trim();
  const seen = new Set<string>([normCorrect.toLowerCase()]);
  const validDistractors: string[] = [];

  for (const d of rawDistractors) {
    const trimmed = d.trim();
    const low = trimmed.toLowerCase();
    if (trimmed.length > 0 && !seen.has(low)) {
      seen.add(low);
      validDistractors.push(trimmed);
      if (validDistractors.length === 3) break;
    }
  }

  // Se faltarem distratores, gerar variações numéricas plausíveis
  const numMatch = normCorrect.match(/[-+]?\d*\.?\d+/);
  const baseNum = numMatch ? parseFloat(numMatch[0]) : 10;
  const unitSuffix = normCorrect.replace(/[-+]?\d*\.?\d+/, '');

  let offset = 1;
  while (validDistractors.length < 3) {
    const delta = offset * (offset % 2 === 0 ? 2 : -2);
    offset++;
    const candidateVal = Math.round((baseNum + delta) * 10) / 10;
    const candidateStr = `${candidateVal}${unitSuffix}`.trim();
    const low = candidateStr.toLowerCase();
    if (!seen.has(low)) {
      seen.add(low);
      validDistractors.push(candidateStr);
    }
  }

  const all = [normCorrect, validDistractors[0], validDistractors[1], validDistractors[2]];

  // Embaralhamento determinístico / Fisher-Yates
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }

  return {
    options: all,
    correctAnswer: all.indexOf(normCorrect),
  };
}

function getXpForDifficulty(diff: DifficultyType): number {
  switch (diff) {
    case 'facil': return 20;
    case 'medio': return 35;
    case 'dificil': return 55;
    case 'expert': return 80;
  }
}

// ============================================================================
// GERADORES POR SÉRIE E DIFICULDADE (BNCC ALINHADA)
// ============================================================================

type MathFamilyGenerator = (xp: number) => {
  question: string;
  correct: string;
  distractors: string[];
  explanation: string;
  signature: string;
  bnccSkill: string;
  topic: string;
};

// ----------------------------------------------------------------------------
// 6º ANO
// ----------------------------------------------------------------------------
const math6Generators: Record<DifficultyType, MathFamilyGenerator[]> = {
  facil: [
    (xp) => {
      // MMC simples
      const a = randChoice([2, 3, 4, 5, 6]);
      const b = randChoice([3, 4, 5, 6, 8]);
      const res = lcm(a, b);
      return {
        question: `Dois semáforos piscam em intervalos regulares: um a cada ${a} segundos e outro a cada ${b} segundos. Se piscarem juntos agora, após quantos segundos piscarão juntos novamente?`,
        correct: `${res} segundos`,
        distractors: [`${a * b} segundos`, `${res + a} segundos`, `${Math.max(2, res - b)} segundos`],
        explanation: `O menor tempo comum em que os dois semáforos piscam simultaneamente é o Mínimo Múltiplo Comum: MMC(${a}, ${b}) = ${res} segundos.`,
        signature: `mat:6:facil:mmc:a=${a}:b=${b}:ans=${res}`,
        bnccSkill: 'EF06MA06',
        topic: 'Múltiplos e Divisores',
      };
    },
    (xp) => {
      // Perímetro de retângulo
      const base = randInt(4, 15);
      const altura = randInt(3, 12);
      const perim = 2 * (base + altura);
      return {
        question: `Um jardim retangular mede ${base} metros de largura por ${altura} metros de comprimento. Quantos metros de cerca são necessários para contorná-lo completamente?`,
        correct: `${perim} m`,
        distractors: [`${base * altura} m`, `${base + altura} m`, `${perim + 4} m`],
        explanation: `O perímetro de um retângulo é a soma dos 4 lados: 2 × (${base} + ${altura}) = 2 × ${base + altura} = ${perim} m.`,
        signature: `mat:6:facil:perim:b=${base}:h=${altura}:ans=${perim}`,
        bnccSkill: 'EF06MA20',
        topic: 'Geometria e Grandezas',
      };
    },
    (xp) => {
      // Frações equivalentes
      const num = randInt(1, 5);
      const den = randInt(2, 6);
      const k = randChoice([2, 3, 4, 5]);
      const eqNum = num * k;
      const eqDen = den * k;
      return {
        question: `Multiplicando o numerador e o denominador da fração ${num}/${den} pelo número natural ${k}, qual fração equivalente é obtida?`,
        correct: `${eqNum}/${eqDen}`,
        distractors: [`${eqNum + 1}/${eqDen}`, `${num}/${eqDen}`, `${eqNum}/${den}`],
        explanation: `Multiplicando numerador e denominador pelo mesmo fator ${k}, preservamos o valor da fração: (${num} × ${k}) / (${den} × ${k}) = ${eqNum}/${eqDen}.`,
        signature: `mat:6:facil:frac:n=${num}:d=${den}:k=${k}:ans=${eqNum}/${eqDen}`,
        bnccSkill: 'EF06MA07',
        topic: 'Frações e Racionais',
      };
    },
    (xp) => {
      // Operações com naturais em contexto financeiro
      const valor = randInt(20, 80);
      const trocoDe = 100;
      const troco = trocoDe - valor;
      return {
        question: `Você comprou um material escolar que custou R$ ${valor},00 e pagou com uma cédula de R$ ${trocoDe},00. Qual foi o valor exato do troco recebido?`,
        correct: `R$ ${troco},00`,
        distractors: [`R$ ${troco + 10},00`, `R$ ${troco - 5},00`, `R$ ${valor},00`],
        explanation: `O troco é a diferença entre a quantia paga e o custo: R$ ${trocoDe},00 - R$ ${valor},00 = R$ ${troco},00.`,
        signature: `mat:6:facil:troco:v=${valor}:ans=${troco}`,
        bnccSkill: 'EF06MA03',
        topic: 'Operações Fundamentais',
      };
    },
  ],
  medio: [
    (xp) => {
      // Área de retângulo
      const largura = randInt(5, 14);
      const comp = randInt(6, 16);
      const area = largura * comp;
      return {
        question: `O piso de uma sala de aula retangular tem ${largura} metros de largura e ${comp} metros de comprimento. Qual é a área total desse piso?`,
        correct: `${area} m²`,
        distractors: [`${2 * (largura + comp)} m²`, `${area + 12} m²`, `${area - 10} m²`],
        explanation: `A área do retângulo é calculada multiplicando a base pela altura: ${largura} m × ${comp} m = ${area} m².`,
        signature: `mat:6:medio:area:l=${largura}:c=${comp}:ans=${area}`,
        bnccSkill: 'EF06MA19',
        topic: 'Áreas de Figuras Planas',
      };
    },
    (xp) => {
      // Porcentagem notável de quantia
      const pct = randChoice([10, 20, 25, 50]);
      const total = randInt(4, 20) * 20;
      const res = (pct / 100) * total;
      return {
        question: `Uma loja oferece um desconto de ${pct}% em um tênis que custa R$ ${total},00. Qual é o valor do desconto em reais?`,
        correct: `R$ ${res},00`,
        distractors: [`R$ ${res + 10},00`, `R$ ${res / 2},00`, `R$ ${total - res},00`],
        explanation: `${pct}% de R$ ${total},00 = (${pct} ÷ 100) × ${total} = R$ ${res},00.`,
        signature: `mat:6:medio:pct:p=${pct}:t=${total}:ans=${res}`,
        bnccSkill: 'EF06MA13',
        topic: 'Porcentagem',
      };
    },
    (xp) => {
      // Potência de natural
      const base = randChoice([2, 3, 4, 5]);
      const exp = randChoice([3, 4]);
      const pot = Math.pow(base, exp);
      return {
        question: `Qual é o valor numérico da potência ${base}^${exp}?`,
        correct: `${pot}`,
        distractors: [`${base * exp}`, `${pot + base}`, `${pot - 2}`],
        explanation: `${base}^${exp} significa multiplicar a base ${base} por ela mesma ${exp} vezes: ${Array(exp).fill(base).join(' × ')} = ${pot}.`,
        signature: `mat:6:medio:pot:b=${base}:e=${exp}:ans=${pot}`,
        bnccSkill: 'EF06MA03',
        topic: 'Potenciação',
      };
    },
  ],
  dificil: [
    (xp) => {
      // Expressão com precedência e parênteses
      const a = randInt(4, 9);
      const b = randInt(3, 7);
      const c = randInt(2, 5);
      const ans = a + b * c;
      return {
        question: `Respeitando a ordem oficial das operações aritméticas, qual é o resultado exato de: ${a} + ${b} × ${c}?`,
        correct: `${ans}`,
        distractors: [`${(a + b) * c}`, `${ans + 4}`, `${ans - 6}`],
        explanation: `A multiplicação tem precedência sobre a adição: primeiro calculamos ${b} × ${c} = ${b * c}, e em seguida somamos ${a} + ${b * c} = ${ans}.`,
        signature: `mat:6:dificil:expr:a=${a}:b=${b}:c=${c}:ans=${ans}`,
        bnccSkill: 'EF06MA03',
        topic: 'Expressões Numéricas',
      };
    },
    (xp) => {
      // Volume de paralelepípedo
      const a = randInt(2, 5);
      const b = randInt(3, 6);
      const c = randInt(4, 8);
      const vol = a * b * c;
      return {
        question: `Uma caixa d'água em formato de paralelepípedo reto-retângulo tem dimensões internas de ${a} m, ${b} m e ${c} m. Qual é o seu volume em metros cúbicos?`,
        correct: `${vol} m³`,
        distractors: [`${2 * (a + b + c)} m³`, `${vol + 10} m³`, `${(a + b) * c} m³`],
        explanation: `O volume de um paralelepípedo retângulo é o produto das três dimensões: V = comprimento × largura × altura = ${a} × ${b} × ${c} = ${vol} m³.`,
        signature: `mat:6:dificil:vol:a=${a}:b=${b}:c=${c}:ans=${vol}`,
        bnccSkill: 'EF06MA21',
        topic: 'Volume e Capacidade',
      };
    },
  ],
  expert: [
    (xp) => {
      // MDC com aplicação
      const a = randChoice([24, 36, 48]);
      const b = randChoice([18, 30, 42]);
      const mdcVal = gcd(a, b);
      return {
        question: `Um professor deseja dividir ${a} alunos de uma turma e ${b} de outra em equipes com o mesmo número de integrantes, de modo que cada equipe tenha o maior número possível de pessoas. Quantos alunos haverá em cada equipe?`,
        correct: `${mdcVal} alunos`,
        distractors: [`${mdcVal * 2} alunos`, `${Math.max(2, mdcVal - 2)} alunos`, `${mdcVal + 4} alunos`],
        explanation: `O maior tamanho possível de grupo comum é dado pelo Maior Divisor Comum: MDC(${a}, ${b}) = ${mdcVal}.`,
        signature: `mat:6:expert:mdc:a=${a}:b=${b}:ans=${mdcVal}`,
        bnccSkill: 'EF06MA06',
        topic: 'MDC e Problemas',
      };
    },
  ],
};

// ----------------------------------------------------------------------------
// 7º ANO
// ----------------------------------------------------------------------------
const math7Generators: Record<DifficultyType, MathFamilyGenerator[]> = {
  facil: [
    (xp) => {
      // Adição de inteiros com sinal
      const a = randInt(-18, -4);
      const b = randInt(-10, 25);
      const ans = a + b;
      return {
        question: `Em uma cidade na montanha, a temperatura inicial era de ${a} ºC pela manhã. Ao meio-dia, a temperatura subiu ${b > 0 ? `+${b}` : b} ºC. Qual temperatura os termômetros marcaram?`,
        correct: `${ans} ºC`,
        distractors: [`${ans + 4} ºC`, `${a - b} ºC`, `${-ans} ºC`],
        explanation: `Somando os valores inteiros: (${a}) + (${b}) = ${ans} ºC.`,
        signature: `mat:7:facil:int:a=${a}:b=${b}:ans=${ans}`,
        bnccSkill: 'EF07MA04',
        topic: 'Números Inteiros',
      };
    },
    (xp) => {
      // Multiplicação de inteiros com regras de sinal
      const a = randChoice([-2, -3, -4, -5]);
      const b = randChoice([-3, -4, 5, 6]);
      const ans = a * b;
      return {
        question: `Qual é o produto resultante da multiplicação entre os números inteiros (${a}) × (${b})?`,
        correct: `${ans}`,
        distractors: [`${-ans}`, `${ans + 3}`, `${a + b}`],
        explanation: `Pelas regras de sinais: sinais iguais resultam em positivo (+) e sinais diferentes em negativo (-). (${a}) × (${b}) = ${ans}.`,
        signature: `mat:7:facil:multint:a=${a}:b=${b}:ans=${ans}`,
        bnccSkill: 'EF07MA04',
        topic: 'Regra de Sinais em Inteiros',
      };
    },
  ],
  medio: [
    (xp) => {
      // Equação do 1º grau ax + b = c
      const a = randChoice([2, 3, 4, 5]);
      const x = randInt(2, 9);
      const b = randInt(3, 15);
      const c = a * x + b;
      return {
        question: `Qual é a solução da equação linear do 1º grau: ${a}x + ${b} = ${c}?`,
        correct: `x = ${x}`,
        distractors: [`x = ${x + 2}`, `x = ${Math.max(1, x - 1)}`, `x = ${x + 4}`],
        explanation: `Isolando a incógnita x: subtraímos ${b} de ambos os lados (${a}x = ${c - b}), e dividimos por ${a}: x = ${c - b} ÷ ${a} = ${x}.`,
        signature: `mat:7:medio:eq1:a=${a}:b=${b}:x=${x}:ans=${x}`,
        bnccSkill: 'EF07MA18',
        topic: 'Equações do 1º Grau',
      };
    },
    (xp) => {
      // Regra de três simples direta
      const k = randChoice([3, 4, 5]);
      const qtd1 = randChoice([2, 3, 4]);
      const preco1 = qtd1 * k * 8;
      const qtd2 = qtd1 * 3;
      const ans = (preco1 / qtd1) * qtd2;
      return {
        question: `Se ${qtd1} cadernos idênticos custam juntos R$ ${preco1},00, quanto custarão ${qtd2} desses mesmos cadernos?`,
        correct: `R$ ${ans},00`,
        distractors: [`R$ ${ans + 12},00`, `R$ ${preco1 * 2},00`, `R$ ${ans - 8},00`],
        explanation: `Grandezas diretamente proporcionais: o preço unitário é R$ ${preco1} ÷ ${qtd1} = R$ ${preco1 / qtd1},00. Logo, ${qtd2} cadernos custam ${qtd2} × R$ ${preco1 / qtd1},00 = R$ ${ans},00.`,
        signature: `mat:7:medio:r3:q1=${qtd1}:p1=${preco1}:q2=${qtd2}:ans=${ans}`,
        bnccSkill: 'EF07MA17',
        topic: 'Proporcionalidade',
      };
    },
  ],
  dificil: [
    (xp) => {
      // Regra de três inversa (velocidade x tempo)
      const v1 = randChoice([40, 60, 80]);
      const t1 = randChoice([2, 3, 4]);
      const dist = v1 * t1;
      const v2 = randChoice([30, 50, 100, 120].filter(v => dist % v === 0));
      const t2 = dist / v2;
      return {
        question: `Um carro percorre uma distância em ${t1} horas mantendo velocidade média constante de ${v1} km/h. Se a velocidade média for alterada para ${v2} km/h, qual será o tempo gasto no mesmo trajeto?`,
        correct: `${t2} horas`,
        distractors: [`${t2 + 1} horas`, `${Math.max(1, t2 - 1)} horas`, `${(v1 * t1) / 10} horas`],
        explanation: `Velocidade e tempo são grandezas inversamente proporcionais (V × T = constante): ${v1} × ${t1} = ${dist} km. Portanto: T = ${dist} ÷ ${v2} = ${t2} horas.`,
        signature: `mat:7:dificil:r3inv:v1=${v1}:t1=${t1}:v2=${v2}:ans=${t2}`,
        bnccSkill: 'EF07MA17',
        topic: 'Grandezas Inversamente Proporcionais',
      };
    },
    (xp) => {
      // Área de trapézio
      const B = randInt(8, 14);
      const b = randInt(4, B - 2);
      const h = randChoice([4, 6, 8]);
      const area = ((B + b) * h) / 2;
      return {
        question: `Um terreno tem formato de trapézio com base maior de ${B} m, base menor de ${b} m e altura de ${h} m. Qual é a sua área total?`,
        correct: `${area} m²`,
        distractors: [`${(B + b) * h} m²`, `${area + 8} m²`, `${B * h} m²`],
        explanation: `A área do trapézio é dada por: A = [(B + b) × h] / 2 = [(${B} + ${b}) × ${h}] / 2 = [${B + b} × ${h}] / 2 = ${area} m².`,
        signature: `mat:7:dificil:trap:B=${B}:b=${b}:h=${h}:ans=${area}`,
        bnccSkill: 'EF07MA31',
        topic: 'Áreas de Polígonos',
      };
    },
  ],
  expert: [
    (xp) => {
      // Ângulos suplementares
      const ang = randInt(35, 145);
      const sup = 180 - ang;
      return {
        question: `Dois ângulos são suplementares quando sua soma resulta em 180º. Qual é o valor do ângulo suplementar de ${ang}º?`,
        correct: `${sup}º`,
        distractors: [`${90 - (ang > 90 ? ang - 90 : ang)}º`, `${sup + 10}º`, `${sup - 15}º`],
        explanation: `O suplemento de um ângulo x é obtido subtraindo-o de 180º: 180º - ${ang}º = ${sup}º.`,
        signature: `mat:7:expert:angsup:ang=${ang}:ans=${sup}`,
        bnccSkill: 'EF07MA23',
        topic: 'Geometria de Ângulos',
      };
    },
  ],
};

// ----------------------------------------------------------------------------
// 8º ANO
// ----------------------------------------------------------------------------
const math8Generators: Record<DifficultyType, MathFamilyGenerator[]> = {
  facil: [
    (xp) => {
      // Propriedade de potências mesma base
      const base = randChoice([2, 3, 5, 7]);
      const e1 = randInt(2, 6);
      const e2 = randInt(2, 5);
      const sum = e1 + e2;
      return {
        question: `Aplicando as propriedades de potências de mesma base, a multiplicação (${base}^${e1}) × (${base}^${e2}) pode ser simplificada para:`,
        correct: `${base}^${sum}`,
        distractors: [`${base}^${e1 * e2}`, `${base * 2}^${sum}`, `${base}^${Math.abs(e1 - e2)}`],
        explanation: `Na multiplicação de potências de mesma base, conserva-se a base e somam-se os expoentes: ${e1} + ${e2} = ${sum}.`,
        signature: `mat:8:facil:potprop:b=${base}:e1=${e1}:e2=${e2}:ans=${sum}`,
        bnccSkill: 'EF08MA01',
        topic: 'Potenciação e Propriedades',
      };
    },
  ],
  medio: [
    (xp) => {
      // Teorema de Pitágoras com trios pitagóricos
      const triplets = [
        [3, 4, 5],
        [6, 8, 10],
        [5, 12, 13],
        [9, 12, 15],
        [8, 15, 17],
      ];
      const [c1, c2, hyp] = randChoice(triplets);
      return {
        question: `Um triângulo retângulo possui catetos com comprimentos de ${c1} cm e ${c2} cm. Qual é a medida exata da hipotenusa?`,
        correct: `${hyp} cm`,
        distractors: [`${c1 + c2} cm`, `${hyp + 2} cm`, `${hyp - 1} cm`],
        explanation: `Pelo Teorema de Pitágoras (a² = b² + c²): ${c1}² + ${c2}² = ${c1 * c1} + ${c2 * c2} = ${hyp * hyp}. Logo, a hipotenusa é √${hyp * hyp} = ${hyp} cm.`,
        signature: `mat:8:medio:pit:c1=${c1}:c2=${c2}:ans=${hyp}`,
        bnccSkill: 'EF08MA14',
        topic: 'Teorema de Pitágoras',
      };
    },
    (xp) => {
      // Quadrado da soma (produto notável)
      const k = randInt(2, 7);
      const k2 = k * k;
      const k2x = 2 * k;
      return {
        question: `Desenvolvendo o produto notável (x + ${k})², obtemos qual expressão algébrica?`,
        correct: `x² + ${k2x}x + ${k2}`,
        distractors: [`x² + ${k2}`, `x² + ${k}x + ${k2}`, `x² + ${k2x}x + ${2 * k}`],
        explanation: `Pela regra do quadrado da soma de dois termos: (a + b)² = a² + 2ab + b² = x² + 2 × ${k} × x + ${k}² = x² + ${k2x}x + ${k2}.`,
        signature: `mat:8:medio:prodnot:k=${k}:ans=${k2}`,
        bnccSkill: 'EF08MA06',
        topic: 'Produtos Notáveis',
      };
    },
  ],
  dificil: [
    (xp) => {
      // Sistema linear 2x2
      const x = randInt(2, 6);
      const y = randInt(1, 5);
      const s = x + y;
      const d = x - y;
      return {
        question: `Resolva o sistema de duas equações de 1º grau: { x + y = ${s} ; x - y = ${d} }. Quais são os valores de x e y?`,
        correct: `x = ${x}, y = ${y}`,
        distractors: [`x = ${x + 1}, y = ${Math.max(1, y - 1)}`, `x = ${y}, y = ${x}`, `x = ${x + 2}, y = ${y + 1}`],
        explanation: `Somando termo a termo as equações: (x + y) + (x - y) = ${s} + ${d} ⇒ 2x = ${s + d} ⇒ x = ${x}. Substituindo na primeira: ${x} + y = ${s} ⇒ y = ${y}.`,
        signature: `mat:8:dificil:sist:x=${x}:y=${y}:ans=${x}_${y}`,
        bnccSkill: 'EF08MA08',
        topic: 'Sistemas Lineares',
      };
    },
  ],
  expert: [
    (xp) => {
      // Polígonos regulares: soma dos ângulos internos
      const n = randChoice([5, 6, 8, 10]);
      const nomes: Record<number, string> = { 5: 'pentágono', 6: 'hexágono', 8: 'octógono', 10: 'decágono' };
      const s = (n - 2) * 180;
      return {
        question: `Qual é a soma de todos os ângulos internos de um ${nomes[n]} (${n} lados)?`,
        correct: `${s}º`,
        distractors: [`${s + 180}º`, `${s - 180}º`, `${n * 180}º`],
        explanation: `A soma dos ângulos internos de qualquer polígono convexo de n lados é dada por Si = (n - 2) × 180º = (${n} - 2) × 180º = ${n - 2} × 180º = ${s}º.`,
        signature: `mat:8:expert:angint:n=${n}:ans=${s}`,
        bnccSkill: 'EF08MA15',
        topic: 'Geometria de Polígonos',
      };
    },
  ],
};

// ----------------------------------------------------------------------------
// 9º ANO
// ----------------------------------------------------------------------------
const math9Generators: Record<DifficultyType, MathFamilyGenerator[]> = {
  facil: [
    (xp) => {
      // Identificação dos coeficientes da equação quadrática
      const a = randChoice([1, 2, 3]);
      const b = randChoice([-6, -4, 4, 6]);
      const c = randChoice([-8, -5, 5, 8]);
      const bStr = b >= 0 ? `+ ${b}x` : `- ${Math.abs(b)}x`;
      const cStr = c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`;
      return {
        question: `Na equação do 2º grau ${a}x² ${bStr} ${cStr} = 0, quais são os respectivos coeficientes a, b e c?`,
        correct: `a = ${a}, b = ${b}, c = ${c}`,
        distractors: [`a = ${b}, b = ${a}, c = ${c}`, `a = ${a}, b = ${c}, c = ${b}`, `a = 1, b = ${b}, c = ${c}`],
        explanation: `Na forma canônica ax² + bx + c = 0: a é o coeficiente do termo quadrático (${a}), b acompanha x (${b}) e c é o termo independente (${c}).`,
        signature: `mat:9:facil:coef:a=${a}:b=${b}:c=${c}:ans=quad`,
        bnccSkill: 'EF09MA09',
        topic: 'Equações Quadráticas',
      };
    },
  ],
  medio: [
    (xp) => {
      // Discriminante Delta de raízes inteiras
      const r1 = randInt(1, 4);
      const r2 = randInt(2, 6);
      const b = -(r1 + r2);
      const c = r1 * r2;
      const delta = b * b - 4 * 1 * c;
      const bStr = b >= 0 ? `+ ${b}x` : `- ${Math.abs(b)}x`;
      return {
        question: `Qual é o valor do discriminante delta (Δ = b² - 4ac) da equação x² ${bStr} + ${c} = 0?`,
        correct: `Δ = ${delta}`,
        distractors: [`Δ = ${delta + 8}`, `Δ = ${Math.abs(delta - 6)}`, `Δ = ${delta * 2}`],
        explanation: `Δ = b² - 4ac = (${b})² - 4 × 1 × (${c}) = ${b * b} - ${4 * c} = ${delta}. Como Δ > 0, a equação possui 2 raízes reais e distintas.`,
        signature: `mat:9:medio:delta:b=${b}:c=${c}:ans=${delta}`,
        bnccSkill: 'EF09MA09',
        topic: 'Discriminante e Raízes',
      };
    },
    (xp) => {
      // Trigonometria notável
      const angle = randChoice(['30º', '45º', '60º']);
      const fn = randChoice(['seno', 'cosseno', 'tangente'] as const);
      const tabela: Record<string, Record<'seno' | 'cosseno' | 'tangente', string>> = {
        '30º': { seno: '1/2', cosseno: '√3/2', tangente: '√3/3' },
        '45º': { seno: '√2/2', cosseno: '√2/2', tangente: '1' },
        '60º': { seno: '√3/2', cosseno: '1/2', tangente: '√3' },
      };
      const correctVal = tabela[angle][fn];
      const allVals = ['1/2', '√2/2', '√3/2', '1', '√3', '√3/3'].filter(v => v !== correctVal);
      return {
        question: `Qual é o valor trigonométrico exato de ${fn}(${angle})?`,
        correct: correctVal,
        distractors: [allVals[0], allVals[1], allVals[2]],
        explanation: `Pelos valores notáveis da trigonometria no triângulo retângulo: ${fn}(${angle}) = ${correctVal}.`,
        signature: `mat:9:medio:trig:ang=${angle}:fn=${fn}:ans=${correctVal}`,
        bnccSkill: 'EF09MA13',
        topic: 'Trigonometria no Triângulo Retângulo',
      };
    },
  ],
  dificil: [
    (xp) => {
      // Raízes reais inteiras de equação quadrática
      const r1 = randInt(1, 4);
      const r2 = randInt(5, 8);
      const b = -(r1 + r2);
      const c = r1 * r2;
      return {
        question: `Encontre o conjunto solução com as raízes reais da equação x² - ${r1 + r2}x + ${c} = 0:`,
        correct: `S = {${r1}, ${r2}}`,
        distractors: [`S = {${-r1}, ${-r2}}`, `S = {${r1}, ${-r2}}`, `S = {${r1 + 1}, ${r2 - 1}}`],
        explanation: `Pelas relações de Girard (soma e produto): r₁ + r₂ = ${r1 + r2} e r₁ × r₂ = ${c}. Portanto, as raízes reais são x = ${r1} e x = ${r2}.`,
        signature: `mat:9:dificil:raizes:r1=${r1}:r2=${r2}:ans=set`,
        bnccSkill: 'EF09MA09',
        topic: 'Resolução de Equações do 2º Grau',
      };
    },
  ],
  expert: [
    (xp) => {
      // Vértice da parábola em contexto de altura máxima
      const xv = randInt(2, 6);
      const b = 2 * xv;
      // y = -x² + bx
      const yv = xv * xv;
      return {
        question: `A trajetória de um projétil é dada pela função h(t) = -t² + ${b}t (com h em metros e t em segundos). Em quantos segundos o projétil atinge sua altura máxima?`,
        correct: `${xv} segundos`,
        distractors: [`${xv * 2} segundos`, `${Math.max(1, xv - 1)} segundos`, `${b} segundos`],
        explanation: `O instante da altura máxima corresponde à abscissa do vértice: t_v = -b / (2a) = -(${b}) / (2 × (-1)) = ${b} / 2 = ${xv} segundos.`,
        signature: `mat:9:expert:vertice:b=${b}:ans=${xv}`,
        bnccSkill: 'EF09MA06',
        topic: 'Funções Quadráticas e Máximos',
      };
    },
  ],
};

// ----------------------------------------------------------------------------
// 1º ANO ENSINO MÉDIO
// ----------------------------------------------------------------------------
const math1EMGenerators: Record<DifficultyType, MathFamilyGenerator[]> = {
  facil: [
    (xp) => {
      // Função afim: valor numérico f(k)
      const a = randChoice([2, 3, 4, 5]);
      const b = randInt(-8, 8);
      const k = randInt(2, 5);
      const ans = a * k + b;
      const bStr = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
      return {
        question: `Dada a função afim f(x) = ${a}x ${bStr}, calcule o valor numérico de f(${k}):`,
        correct: `${ans}`,
        distractors: [`${ans + 3}`, `${ans - 4}`, `${ans + 5}`],
        explanation: `Substituindo x por ${k}: f(${k}) = ${a}(${k}) ${bStr} = ${a * k} ${bStr} = ${ans}.`,
        signature: `mat:1em:facil:funcaofim:a=${a}:b=${b}:k=${k}:ans=${ans}`,
        bnccSkill: 'EM13MAT101',
        topic: 'Função Afim',
      };
    },
  ],
  medio: [
    (xp) => {
      // Termo geral de PA: an = a1 + (n - 1)r
      const a1 = randInt(2, 10);
      const r = randInt(3, 7);
      const n = randInt(8, 15);
      const an = a1 + (n - 1) * r;
      return {
        question: `Em uma Progressão Aritmética (PA) onde o primeiro termo é a₁ = ${a1} e a razão é r = ${r}, determine o termo a_${n}:`,
        correct: `${an}`,
        distractors: [`${an + r}`, `${an - 2 * r}`, `${a1 * n}`],
        explanation: `Pela fórmula do termo geral da PA: an = a₁ + (n - 1)r = ${a1} + (${n} - 1) × ${r} = ${a1} + ${n - 1} × ${r} = ${an}.`,
        signature: `mat:1em:medio:pa:a1=${a1}:r=${r}:n=${n}:ans=${an}`,
        bnccSkill: 'EM13MAT507',
        topic: 'Progressão Aritmética (PA)',
      };
    },
  ],
  dificil: [
    (xp) => {
      // Soma dos termos de uma PA finita
      const a1 = randInt(1, 5);
      const r = randChoice([2, 3, 4]);
      const n = 10;
      const an = a1 + (n - 1) * r;
      const sn = ((a1 + an) * n) / 2;
      return {
        question: `Qual é a soma dos ${n} primeiros termos da PA (${a1}, ${a1 + r}, ${a1 + 2 * r}, ...)?`,
        correct: `${sn}`,
        distractors: [`${sn + 15}`, `${sn - 12}`, `${an * n}`],
        explanation: `O 10º termo é a₁₀ = ${a1} + 9 × ${r} = ${an}. A soma é Sn = [(a₁ + an) × n] / 2 = [(${a1} + ${an}) × ${n}] / 2 = ${sn}.`,
        signature: `mat:1em:dificil:somapa:a1=${a1}:r=${r}:n=${n}:ans=${sn}`,
        bnccSkill: 'EM13MAT507',
        topic: 'Soma de Termos da PA',
      };
    },
  ],
  expert: [
    (xp) => {
      // Termo de PG: an = a1 * q^(n-1)
      const a1 = randChoice([2, 3]);
      const q = randChoice([2, 3]);
      const n = 5;
      const an = a1 * Math.pow(q, n - 1);
      return {
        question: `Em uma Progressão Geométrica (PG) com primeiro termo a₁ = ${a1} e razão q = ${q}, qual é o 5º termo (a₅)?`,
        correct: `${an}`,
        distractors: [`${an * q}`, `${an / q}`, `${a1 + 4 * q}`],
        explanation: `Pela fórmula do termo geral da PG: an = a₁ × q^(n - 1). Para n = 5: a₅ = ${a1} × ${q}^4 = ${a1} × ${Math.pow(q, 4)} = ${an}.`,
        signature: `mat:1em:expert:pg:a1=${a1}:q=${q}:n=${n}:ans=${an}`,
        bnccSkill: 'EM13MAT507',
        topic: 'Progressão Geométrica (PG)',
      };
    },
  ],
};

// ----------------------------------------------------------------------------
// 2º ANO ENSINO MÉDIO
// ----------------------------------------------------------------------------
const math2EMGenerators: Record<DifficultyType, MathFamilyGenerator[]> = {
  facil: [
    (xp) => {
      // Elementos de matriz
      const a11 = randInt(1, 5);
      const a12 = randInt(1, 5);
      const a21 = randInt(1, 5);
      const a22 = randInt(1, 5);
      return {
        question: `Dada a matriz A = [ [${a11}, ${a12}], [${a21}, ${a22}] ], qual é o elemento a₂₁ (linha 2, coluna 1)?`,
        correct: `${a21}`,
        distractors: [`${a12}`, `${a11}`, `${a22}`],
        explanation: `O índice a_ij indica linha i e coluna j. O elemento da 2ª linha e 1ª coluna é ${a21}.`,
        signature: `mat:2em:facil:matriz:a11=${a11}:a12=${a12}:a21=${a21}:a22=${a22}:ans=${a21}`,
        bnccSkill: 'EM13MAT301',
        topic: 'Matrizes',
      };
    },
  ],
  medio: [
    (xp) => {
      // Determinante 2x2
      const a = randInt(2, 6);
      const b = randInt(1, 4);
      const c = randInt(1, 4);
      const d = randInt(2, 6);
      const det = a * d - b * c;
      return {
        question: `Calcule o determinante da matriz 2×2: | ${a}  ${b} | e | ${c}  ${d} |`,
        correct: `${det}`,
        distractors: [`${a * d + b * c}`, `${det + 4}`, `${det - 5}`],
        explanation: `det = (diagonal principal) - (diagonal secundária) = (${a} × ${d}) - (${b} × ${c}) = ${a * d} - ${b * c} = ${det}.`,
        signature: `mat:2em:medio:det2:a=${a}:b=${b}:c=${c}:d=${d}:ans=${det}`,
        bnccSkill: 'EM13MAT301',
        topic: 'Determinantes',
      };
    },
  ],
  dificil: [
    (xp) => {
      // Permutação simples P_n
      const n = randChoice([4, 5]);
      const fact = (k: number): number => (k <= 1 ? 1 : k * fact(k - 1));
      const ans = fact(n);
      return {
        question: `De quantas maneiras diferentes ${n} livros distintos podem ser organizados lado a lado em uma prateleira (Permutação P_${n})?`,
        correct: `${ans}`,
        distractors: [`${ans + 12}`, `${n * (n - 1)}`, `${ans / 2}`],
        explanation: `P_${n} = ${n}! = ${Array.from({ length: n }, (_, i) => n - i).join(' × ')} = ${ans} ordenações possíveis.`,
        signature: `mat:2em:dificil:perm:n=${n}:ans=${ans}`,
        bnccSkill: 'EM13MAT310',
        topic: 'Análise Combinatória: Permutação',
      };
    },
  ],
  expert: [
    (xp) => {
      // Combinação simples C(n, 2)
      const n = randChoice([6, 7, 8]);
      const ans = (n * (n - 1)) / 2;
      return {
        question: `Em um grupo de ${n} estudantes, quantas duplas distintas podem ser formadas para realizar um trabalho [Combinação C(${n}, 2)]?`,
        correct: `${ans}`,
        distractors: [`${n * (n - 1)}`, `${ans + 4}`, `${ans - 3}`],
        explanation: `Como a ordem dos membros não importa: C(${n}, 2) = (${n} × ${n - 1}) / (2 × 1) = ${n * (n - 1)} / 2 = ${ans}.`,
        signature: `mat:2em:expert:comb:n=${n}:ans=${ans}`,
        bnccSkill: 'EM13MAT310',
        topic: 'Análise Combinatória: Combinação',
      };
    },
  ],
};

// ----------------------------------------------------------------------------
// 3º ANO ENSINO MÉDIO
// ----------------------------------------------------------------------------
const math3EMGenerators: Record<DifficultyType, MathFamilyGenerator[]> = {
  facil: [
    (xp) => {
      // Coordenadas cartesianas e quadrantes
      const x = randInt(-7, -2);
      const y = randInt(2, 7);
      return {
        question: `No plano cartesiano ortogonal, em qual quadrante se localiza o ponto P(${x}, ${y})?`,
        correct: '2º Quadrante',
        distractors: ['1º Quadrante', '3º Quadrante', '4º Quadrante'],
        explanation: `Pontos com abscissa negativa (x = ${x}) e ordenada positiva (y = ${y}) pertencem estritamente ao 2º quadrante.`,
        signature: `mat:3em:facil:quad:x=${x}:y=${y}:ans=2`,
        bnccSkill: 'EM13MAT501',
        topic: 'Geometria Analítica: Plano Cartesiano',
      };
    },
  ],
  medio: [
    (xp) => {
      // Distância entre dois pontos no plano (triângulo 3-4-5)
      const x1 = randInt(1, 4);
      const y1 = randInt(1, 4);
      const x2 = x1 + 3;
      const y2 = y1 + 4;
      const d = 5;
      return {
        question: `Qual é a distância euclidiana exata entre os pontos A(${x1}, ${y1}) e B(${x2}, ${y2}) no plano cartesiano?`,
        correct: '5 unidades',
        distractors: ['7 unidades', '25 unidades', '√7 unidades'],
        explanation: `d = √[(x₂ - x₁)² + (y₂ - y₁)²] = √[(${x2} - ${x1})² + (${y2} - ${y1})²] = √[3² + 4²] = √[9 + 16] = √25 = 5 unidades.`,
        signature: `mat:3em:medio:dist:x1=${x1}:y1=${y1}:ans=5`,
        bnccSkill: 'EM13MAT501',
        topic: 'Geometria Analítica: Distância de Pontos',
      };
    },
  ],
  dificil: [
    (xp) => {
      // Coeficiente angular da reta y = mx + b
      const m = randChoice([2, 3, 4, 5]);
      const b = randInt(1, 9);
      return {
        question: `Qual é o coeficiente angular (declividade m) da reta expressa pela equação geral ${m}x - y + ${b} = 0?`,
        correct: `m = ${m}`,
        distractors: [`m = ${-m}`, `m = 1/${m}`, `m = ${b}`],
        explanation: `Isolando y na forma reduzida: y = ${m}x + ${b}. O coeficiente angular m que multiplica x é ${m}.`,
        signature: `mat:3em:dificil:reta:m=${m}:b=${b}:ans=${m}`,
        bnccSkill: 'EM13MAT501',
        topic: 'Geometria Analítica: Equação da Reta',
      };
    },
  ],
  expert: [
    (xp) => {
      // Equação da circunferência reduzida
      const r = randChoice([3, 4, 5, 6]);
      const a = randInt(1, 5);
      const b = randInt(1, 5);
      const r2 = r * r;
      return {
        question: `Dada a equação da circunferência (x - ${a})² + (y - ${b})² = ${r2}, qual é o raio r dessa circunferência?`,
        correct: `r = ${r}`,
        distractors: [`r = ${r2}`, `r = ${r * 2}`, `r = ${r - 1}`],
        explanation: `Na equação canônica da circunferência (x - a)² + (y - b)² = r², temos r² = ${r2}. Portanto: r = √${r2} = ${r}.`,
        signature: `mat:3em:expert:circ:r=${r}:a=${a}:b=${b}:ans=${r}`,
        bnccSkill: 'EM13MAT501',
        topic: 'Geometria Analítica: Circunferência',
      };
    },
  ],
};

// ============================================================================
// PONTO DE ENTRADA PRINCIPAL PARA MATEMÁTICA PROCEDURAL
// ============================================================================

export function generateProceduralMathQuestion(
  grade: GradeType,
  difficulty: DifficultyType,
  recentSignatures: Set<string> = new Set()
): ProceduralQuestion {
  const xp = getXpForDifficulty(difficulty);

  let pool: MathFamilyGenerator[];
  switch (grade) {
    case '6º ano':
      pool = math6Generators[difficulty];
      break;
    case '7º ano':
      pool = math7Generators[difficulty];
      break;
    case '8º ano':
      pool = math8Generators[difficulty];
      break;
    case '9º ano':
      pool = math9Generators[difficulty];
      break;
    case '1º ano EM':
      pool = math1EMGenerators[difficulty];
      break;
    case '2º ano EM':
      pool = math2EMGenerators[difficulty];
      break;
    case '3º ano EM':
      pool = math3EMGenerators[difficulty];
      break;
    default:
      pool = math6Generators[difficulty];
  }

  // Tentar encontrar uma família cuja assinatura não esteja no histórico recente
  let attempts = 0;
  while (attempts < 20) {
    attempts++;
    const generator = randChoice(pool);
    const data = generator(xp);

    if (!recentSignatures.has(data.signature) || attempts >= 18) {
      const { options, correctAnswer } = formatOptions(data.correct, data.distractors);
      const uid = `proc-mat-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`;

      return {
        id: uid,
        subject: 'matematica',
        grade,
        difficulty,
        question: data.question,
        options,
        correctAnswer,
        explanation: data.explanation,
        xp,
        bnccSkill: data.bnccSkill,
        topic: data.topic,
        isProcedural: true,
        signature: data.signature,
      };
    }
  }

  // Fallback seguro
  const fallbackGen = pool[0];
  const fallbackData = fallbackGen(xp);
  const { options, correctAnswer } = formatOptions(fallbackData.correct, fallbackData.distractors);
  return {
    id: `proc-mat-fallback-${Date.now().toString(36)}`,
    subject: 'matematica',
    grade,
    difficulty,
    question: fallbackData.question,
    options,
    correctAnswer,
    explanation: fallbackData.explanation,
    xp,
    bnccSkill: fallbackData.bnccSkill,
    topic: fallbackData.topic,
    isProcedural: true,
    signature: fallbackData.signature,
  };
}
