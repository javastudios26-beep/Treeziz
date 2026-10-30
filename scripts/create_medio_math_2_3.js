import fs from 'fs';

const list = JSON.parse(fs.readFileSync('scripts/medio_math_temp_1.json', 'utf-8'));

function q(id, grade, diff, xp, bncc, topic, question, options, explanation) {
  list.push({
    id,
    subject: 'matematica',
    grade,
    difficulty: diff,
    xp,
    bnccSkill: bncc,
    topic,
    question,
    options,
    correctAnswer: 0,
    explanation,
  });
}

// ============================================================================
// 2º ANO ENSINO MÉDIO - MATEMÁTICA (EM13MAT)
// ============================================================================

// FÁCIL (15 questões)
q('mat-2em-f-01', '2º ano EM', 'facil', 20, 'EM13MAT306', 'Progressão Aritmética (PA)',
  'Qual é a razão da PA (3, 7, 11, 15, ...)?',
  ['4', '3', '5', '7'],
  'A razão r é a diferença entre dois termos consecutivos: 7 - 3 = 4.');

q('mat-2em-f-02', '2º ano EM', 'facil', 20, 'EM13MAT306', 'Progressão Geométrica (PG)',
  'Qual é o 4º termo da PG (2, 6, 18, ...)?',
  ['54', '36', '48', '72'],
  'A razão q = 6/2 = 3. O 4º termo é a₄ = 18 × 3 = 54.');

q('mat-2em-f-03', '2º ano EM', 'facil', 20, 'EM13MAT504', 'Geometria Espacial (Prismas)',
  'Quantas faces possui um prisma de base triangular?',
  ['5 faces', '6 faces', '4 faces', '8 faces'],
  'Possui 2 bases triangulares e 3 faces laterais retangulares, totalizando 2 + 3 = 5 faces.');

q('mat-2em-f-04', '2º ano EM', 'facil', 20, 'EM13MAT310', 'Princípio Multiplicativo (PFC)',
  'Uma pessoa tem 3 calças e 4 camisas. De quantas maneiras distintas ela pode se vestir combinando uma calça e uma camisa?',
  ['12 maneiras', '7 maneiras', '10 maneiras', '14 maneiras'],
  'Pelo PFC: 3 × 4 = 12 maneiras.');

q('mat-2em-f-05', '2º ano EM', 'facil', 20, 'EM13MAT506', 'Ciclo Trigonométrico',
  'Quantos graus correspondem ao arco de π radianos?',
  ['180°', '360°', '90°', '270°'],
  'Por definição do ciclo trigonométrico, π radianos equivale a 180°.');

q('mat-2em-f-06', '2º ano EM', 'facil', 20, 'EM13MAT306', 'Termo Geral da PA',
  'Qual é o 10º termo da PA cujo primeiro termo é a₁ = 2 e a razão é r = 3?',
  ['29', '32', '27', '30'],
  'a₁₀ = a₁ + (10 - 1)r = 2 + 9(3) = 2 + 27 = 29.');

q('mat-2em-f-07', '2º ano EM', 'facil', 20, 'EM13MAT504', 'Volume de Cilindro Reto',
  'Qual é o volume de um cilindro com raio 2 cm e altura 5 cm? (Considere π = 3,14)',
  ['62,8 cm³', '31,4 cm³', '20 cm³', '50 cm³'],
  'V = π r² h = 3,14 × 4 × 5 = 3,14 × 20 = 62,8 cm³.');

q('mat-2em-f-08', '2º ano EM', 'facil', 20, 'EM13MAT310', 'Fatorial Básico',
  'Qual é o valor de 4! (4 fatorial)?',
  ['24', '12', '16', '20'],
  '4! = 4 × 3 × 2 × 1 = 24.');

q('mat-2em-f-09', '2º ano EM', 'facil', 20, 'EM13MAT506', 'Seno de 90°',
  'No ciclo trigonométrico, qual é o valor de sen (90°)?',
  ['1', '0', '-1', '1/2'],
  'No ponto superior do ciclo trigonométrico (0, 1), a ordenada (seno) vale 1.');

q('mat-2em-f-10', '2º ano EM', 'facil', 20, 'EM13MAT311', 'Permutação Simples',
  'De quantas maneiras distintas 3 pessoas podem se sentar lado a lado em um banco de 3 lugares?',
  ['6 maneiras', '3 maneiras', '9 maneiras', '8 maneiras'],
  'P₃ = 3! = 3 × 2 × 1 = 6 maneiras.');

q('mat-2em-f-11', '2º ano EM', 'facil', 20, 'EM13MAT505', 'Volume de Pirâmide',
  'Uma pirâmide tem base quadrada com área 30 cm² e altura 6 cm. Qual é o seu volume?',
  ['60 cm³', '180 cm³', '90 cm³', '120 cm³'],
  'V = (Área da Base × h) / 3 = (30 × 6) / 3 = 180 / 3 = 60 cm³.');

q('mat-2em-f-12', '2º ano EM', 'facil', 20, 'EM13MAT506', 'Cosseno de 180°',
  'Qual é o valor do cos (180°)?',
  ['-1', '1', '0', '-1/2'],
  'No ponto (-1, 0) do ciclo trigonométrico, a abscissa (cosseno) é -1.');

q('mat-2em-f-13', '2º ano EM', 'facil', 20, 'EM13MAT306', 'Classificação de PG',
  'A sequência (5, -10, 20, -40, ...) é uma PG com razão igual a:',
  ['-2 (PG oscilante)', '+2', '-5', '+1/2'],
  'q = -10 / 5 = -2. Quando a razão é negativa, os termos alternam de sinal (PG oscilante).');

q('mat-2em-f-14', '2º ano EM', 'facil', 20, 'EM13MAT504', 'Vértices do Prisma Hexagonal',
  'Quantos vértices possui um prisma hexagonal (base com 6 lados)?',
  ['12 vértices', '18 vértices', '8 vértices', '14 vértices'],
  'Possui 6 vértices na base inferior e 6 na base superior: 6 + 6 = 12 vértices.');

q('mat-2em-f-15', '2º ano EM', 'facil', 20, 'EM13MAT312', 'Probabilidade no Lançamento de Moedas',
  'Ao lançar três moedas honestas, qual é o número total de resultados possíveis no espaço amostral?',
  ['8 resultados', '6 resultados', '9 resultados', '16 resultados'],
  'Cada moeda tem 2 faces: 2 × 2 × 2 = 8 resultados possíveis.');

// MÉDIO (15 questões)
q('mat-2em-m-01', '2º ano EM', 'medio', 35, 'EM13MAT306', 'Soma dos Termos da PA',
  'Qual é a soma dos 20 primeiros termos da PA (1, 3, 5, 7, ...)?',
  ['400', '200', '380', '420'],
  'a₂₀ = 1 + 19(2) = 39. S₂₀ = (a₁ + a₂₀) × 20 / 2 = (1 + 39) × 10 = 40 × 10 = 400.');

q('mat-2em-m-02', '2º ano EM', 'medio', 35, 'EM13MAT306', 'Soma dos Termos da PG Finita',
  'Calcule a soma dos 5 primeiros termos da PG (1, 2, 4, 8, ...).',
  ['31', '32', '30', '29'],
  'S₅ = a₁(q⁵ - 1) / (q - 1) = 1(32 - 1) / 1 = 31.');

q('mat-2em-m-03', '2º ano EM', 'medio', 35, 'EM13MAT505', 'Volume do Cone Reto',
  'Um cone reto tem raio da base 3 cm e altura 4 cm. Qual é o seu volume? (Considere π = 3,14)',
  ['37,68 cm³', '113,04 cm³', '50,24 cm³', '25,12 cm³'],
  'V = (π r² h) / 3 = (3,14 × 9 × 4) / 3 = 3,14 × 12 = 37,68 cm³.');

q('mat-2em-m-04', '2º ano EM', 'medio', 35, 'EM13MAT311', 'Combinação Simples',
  'De quantas maneiras podemos escolher uma comissão de 3 pessoas a partir de um grupo de 7 voluntários?',
  ['35 maneiras', '21 maneiras', '42 maneiras', '210 maneiras'],
  'C(7, 3) = 7! / (3! × 4!) = (7 × 6 × 5) / (3 × 2 × 1) = 35 maneiras.');

q('mat-2em-m-05', '2º ano EM', 'medio', 35, 'EM13MAT506', 'Arco Côngruo',
  'Qual é a primeira determinação positiva do arco de 750°?',
  ['30°', '60°', '45°', '90°'],
  '750° ÷ 360° = 2 voltas completas com resto de 750° - 720° = 30°.');

q('mat-2em-m-06', '2º ano EM', 'medio', 35, 'EM13MAT306', 'Interpolação Aritmética',
  'Inserindo 4 meios aritméticos entre 2 e 17, qual é a razão da PA formada?',
  ['3', '4', '2,5', '5'],
  'A PA terá 6 termos: a₆ = a₁ + 5r => 17 = 2 + 5r => 15 = 5r => r = 3.');

q('mat-2em-m-07', '2º ano EM', 'medio', 35, 'EM13MAT504', 'Área Total de Cilindro',
  'Um cilindro equilátero tem raio r = 3 cm (altura h = 2r = 6 cm). Qual é sua área total? (Use π = 3,14)',
  ['169,56 cm²', '113,04 cm²', '150,72 cm²', '180,00 cm²'],
  'At = 2πr(h + r) = 2 × 3,14 × 3 × (6 + 3) = 18,84 × 9 = 169,56 cm².');

q('mat-2em-m-08', '2º ano EM', 'medio', 35, 'EM13MAT311', 'Anagramas sem Repetição',
  'Quantos anagramas podem ser formados com a palavra "LIVRO"?',
  ['120', '60', '24', '720'],
  'A palavra tem 5 letras distintas: P₅ = 5! = 120 anagramas.');

q('mat-2em-m-09', '2º ano EM', 'medio', 35, 'EM13MAT506', 'Seno de 150°',
  'No ciclo trigonométrico, qual é o valor de sen (150°)?',
  ['1/2', '-1/2', '√3/2', '-√3/2'],
  '150° está no 2º quadrante (seno positivo) e seu simétrico é 180° - 150° = 30°: sen 150° = sen 30° = 1/2.');

q('mat-2em-m-10', '2º ano EM', 'medio', 35, 'EM13MAT505', 'Volume da Esfera',
  'Qual é o volume de uma esfera de raio 3 cm? (Considere π = 3,14)',
  ['113,04 cm³', '37,68 cm³', '75,36 cm³', '150,72 cm³'],
  'V = (4/3) π r³ = (4/3) × 3,14 × 27 = 4 × 3,14 × 9 = 113,04 cm³.');

q('mat-2em-m-11', '2º ano EM', 'medio', 35, 'EM13MAT306', 'Problema Contextualizado de PA',
  'Um atleta corre 5 km no 1º dia e aumenta 1,5 km a cada dia subsequente. Quantos km ele correrá no 10º dia?',
  ['18,5 km', '17,0 km', '20,0 km', '19,5 km'],
  'a₁₀ = 5 + 9(1,5) = 5 + 13,5 = 18,5 km.');

q('mat-2em-m-12', '2º ano EM', 'medio', 35, 'EM13MAT312', 'Probabilidade da União de Eventos',
  'Ao retirar uma carta de um baralho de 52 cartas, qual a probabilidade de sair um Rei OU uma carta de Copas?',
  ['16/52 (4/13)', '17/52', '13/52', '12/52'],
  'Reis = 4. Copas = 13. Rei de Copas = 1 (interseção). P = (4 + 13 - 1)/52 = 16/52 = 4/13.');

q('mat-2em-m-13', '2º ano EM', 'medio', 35, 'EM13MAT506', 'Equação Trigonométrica Simples',
  'Quais são as soluções da equação sen x = 1/2 no intervalo [0, 2π)?',
  ['π/6 e 5π/6', 'π/3 e 2π/3', 'π/6 e 7π/6', 'π/4 e 3π/4'],
  'No ciclo trigonométrico, sen x = 1/2 nos quadrantes I e II: 30° (π/6) e 150° (5π/6).');

q('mat-2em-m-14', '2º ano EM', 'medio', 35, 'EM13MAT504', 'Relação de Euler para Poliedros',
  'Um poliedro convexo tem 8 vértices e 12 arestas. Quantas faces ele possui?',
  ['6 faces', '8 faces', '10 faces', '4 faces'],
  'Pela relação de Euler: V - A + F = 2 => 8 - 12 + F = 2 => -4 + F = 2 => F = 6.');

q('mat-2em-m-15', '2º ano EM', 'medio', 35, 'EM13MAT310', 'Senhas com Restrição',
  'Quantas senhas de 4 dígitos distintos podem ser formadas usando os algarismos de 1 a 6?',
  ['360 senhas', '1.296 senhas', '240 senhas', '720 senhas'],
  'Arranjo A(6, 4) = 6 × 5 × 4 × 3 = 360 senhas.');

// DIFÍCIL (15 questões)
q('mat-2em-d-01', '2º ano EM', 'dificil', 55, 'EM13MAT306', 'Soma da PG Infinita',
  'Qual é a soma dos infinitos termos da PG decrescente (16, 8, 4, 2, ...)?',
  ['32', '30', '64', '28'],
  'Razão q = 1/2. S_inf = a₁ / (1 - q) = 16 / (1 - 1/2) = 16 / 0,5 = 32.');

q('mat-2em-d-02', '2º ano EM', 'dificil', 55, 'EM13MAT311', 'Anagramas com Letras Repetidas',
  'Quantos anagramas distintos possui a palavra "MATRIZ"?',
  ['720', '360', '120', '240'],
  'Todas as 6 letras são distintas: P₆ = 6! = 720 anagramas.');

q('mat-2em-d-03', '2º ano EM', 'dificil', 55, 'EM13MAT505', 'Tronco de Pirâmide ou Cone',
  'Um reservatório em forma de cone reto de altura 12 cm tem raio 6 cm. Um líquido atinge metade da altura (6 cm). Qual fração do volume total está preenchida?',
  ['1/8 do volume', '1/4 do volume', '1/2 do volume', '1/16 do volume'],
  'A razão de semelhança linear é k = 6/12 = 1/2. A razão entre os volumes é k³ = (1/2)³ = 1/8.');

q('mat-2em-d-04', '2º ano EM', 'dificil', 55, 'EM13MAT312', 'Probabilidade Condicional',
  'Em um grupo de 50 estudantes, 30 falam inglês, 20 falam espanhol e 10 falam ambos. Sabendo que um aluno sorteado fala inglês, qual é a probabilidade de ele também falar espanhol?',
  ['1/3 (cerca de 33,3%)', '1/2', '1/5', '2/5'],
  'P(Espanhol | Inglês) = n(Inglês ∩ Espanhol) / n(Inglês) = 10 / 30 = 1/3.');

q('mat-2em-d-05', '2º ano EM', 'dificil', 55, 'EM13MAT506', 'Transformação de Cosseno em Radianos',
  'Qual é o valor exato de cos (2π/3)?',
  ['-1/2', '1/2', '-√3/2', '√3/2'],
  '2π/3 rad = 120° (2º quadrante, cosseno negativo): cos 120° = -cos 60° = -1/2.');

q('mat-2em-d-06', '2º ano EM', 'dificil', 55, 'EM13MAT306', 'Interpolação Geométrica',
  'Inserindo 3 meios geométricos positivos entre 3 e 48, qual é a razão da PG formada?',
  ['2', '3', '√2', '4'],
  'A PG tem 5 termos: a₅ = a₁ × q⁴ => 48 = 3 × q⁴ => q⁴ = 16 => q = 2.');

q('mat-2em-d-07', '2º ano EM', 'dificil', 55, 'EM13MAT504', 'Seção Meridiana de Cilindro',
  'A seção meridiana de um cilindro reto é um quadrado de área 36 cm². Qual é o raio da base desse cilindro?',
  ['3 cm', '6 cm', '1,5 cm', '4 cm'],
  'O quadrado tem lado 6 cm. Esse lado corresponde à altura h = 6 cm e ao diâmetro 2r = 6 cm, logo o raio r = 3 cm.');

q('mat-2em-d-08', '2º ano EM', 'dificil', 55, 'EM13MAT311', 'Combinação com Restrição',
  'Deseja-se formar um grupo de 4 alunos a partir de 5 meninos e 4 meninas. Quantos grupos podem ser formados contendo exatamente 2 meninos e 2 meninas?',
  ['60 grupos', '48 grupos', '72 grupos', '36 grupos'],
  'C(5, 2) × C(4, 2) = [10] × [6] = 60 grupos.');

q('mat-2em-d-09', '2º ano EM', 'dificil', 55, 'EM13MAT506', 'Fórmula da Duplicação de Arco',
  'Se sen x = 3/5 e cos x = 4/5, qual é o valor de sen (2x)?',
  ['24/25', '12/25', '7/25', '1'],
  'sen (2x) = 2 sen x cos x = 2 × (3/5) × (4/5) = 24/25.');

q('mat-2em-d-10', '2º ano EM', 'dificil', 55, 'EM13MAT505', 'Área da Superfície Esférica',
  'Qual é a área da superfície de uma esfera com raio de 5 cm? (Considere π = 3,14)',
  ['314 cm²', '157 cm²', '523 cm²', '250 cm²'],
  'Área = 4 π r² = 4 × 3,14 × 25 = 100 × 3,14 = 314 cm².');

q('mat-2em-d-11', '2º ano EM', 'dificil', 55, 'EM13MAT306', 'PA em Triângulo Retângulo',
  'Os lados de um triângulo retângulo estão em PA de razão 2. Quais são as medidas dos lados desse triângulo?',
  ['6, 8 e 10', '3, 4 e 5', '4, 6 e 8', '5, 7 e 9'],
  'Lados (x - 2, x, x + 2). Pelo Teorema de Pitágoras: (x - 2)² + x² = (x + 2)² => x² - 4x + 4 + x² = x² + 4x + 4 => x² - 8x = 0 => x = 8. Lados: 6, 8 e 10.');

q('mat-2em-d-12', '2º ano EM', 'dificil', 55, 'EM13MAT312', 'Lançamento de Dados e Soma Específica',
  'Ao lançar dois dados perfeitos de 6 faces, qual é a probabilidade de a soma ser maior ou igual a 10?',
  ['6/36 (1/6)', '4/36', '5/36', '8/36'],
  'Somas possíveis: 10 [(4,6), (5,5), (6,4)], 11 [(5,6), (6,5)], 12 [(6,6)]. Total = 3 + 2 + 1 = 6 casos favoráveis entre 36: 6/36 = 1/6.');

q('mat-2em-d-13', '2º ano EM', 'dificil', 55, 'EM13MAT506', 'Tangente de 135°',
  'Qual é o valor exato de tg (135°)?',
  ['-1', '1', '-√3', '√3/3'],
  '135° está no 2º quadrante (seno positivo e cosseno negativo): tg 135° = sen 135° / cos 135° = (√2/2) / (-√2/2) = -1.');

q('mat-2em-d-14', '2º ano EM', 'dificil', 55, 'EM13MAT504', 'Diagonal do Cubo',
  'Qual é a medida da diagonal de um cubo com aresta medindo 5 cm?',
  ['5√3 cm', '5√2 cm', '10 cm', '15 cm'],
  'A diagonal de um cubo de aresta a é dada por D = a√3 = 5√3 cm.');

q('mat-2em-d-15', '2º ano EM', 'dificil', 55, 'EM13MAT310', 'Princípio da Casa dos Pombos',
  'Quantas pessoas, no mínimo, devem estar em uma sala para garantir que pelo menos duas façam aniversário no mesmo mês?',
  ['13 pessoas', '12 pessoas', '24 pessoas', '14 pessoas'],
  'Como há 12 meses no ano, pelo Princípio das Gavetas de Dirichlet (Casa dos Pombos), 12 + 1 = 13 pessoas garantem pelo menos duas no mesmo mês.');

// EXPERT (15 questões)
q('mat-2em-e-01', '2º ano EM', 'expert', 80, 'EM13MAT306', 'Equação com Termos de PG Infinita',
  'A soma dos termos da PG infinita x + x/3 + x/9 + ... é igual a 12. Qual é o valor do primeiro termo x?',
  ['8', '6', '9', '4'],
  'S = x / (1 - 1/3) = x / (2/3) = 3x/2 = 12 => 3x = 24 => x = 8.');

q('mat-2em-e-02', '2º ano EM', 'expert', 80, 'EM13MAT311', 'Permutação Circular',
  'De quantas maneiras distintas 5 pessoas podem se sentar ao redor de uma mesa redonda (permutação circular)?',
  ['24 maneiras', '120 maneiras', '60 maneiras', '20 maneiras'],
  'Permutação circular: PC(n) = (n - 1)! = (5 - 1)! = 4! = 24 maneiras.');

q('mat-2em-e-03', '2º ano EM', 'expert', 80, 'EM13MAT504', 'Inscrição de Esfera no Cubo',
  'Uma esfera está perfeitamente inscrita em um cubo de aresta 6 cm. Qual é o volume de ar que fica entre o cubo e a esfera? (Use π = 3,14)',
  ['102,96 cm³', '113,04 cm³', '216,00 cm³', '95,50 cm²'],
  'Volume do cubo = 6³ = 216 cm³. A esfera tem diâmetro 6 cm (raio r = 3 cm): V_esfera = (4/3) × 3,14 × 27 = 113,04 cm³. Volume residual = 216 - 113,04 = 102,96 cm³.');

q('mat-2em-e-04', '2º ano EM', 'expert', 80, 'EM13MAT506', 'Equação Trigonométrica com Fatoração',
  'Quantas soluções a equação 2 sen² x - sen x = 0 possui no intervalo [0, 2π)?',
  ['4 soluções', '2 soluções', '3 soluções', '1 solução'],
  'sen x(2 sen x - 1) = 0 => sen x = 0 (x = 0, π) ou sen x = 1/2 (x = π/6, 5π/6). Total de 4 soluções no intervalo.');

q('mat-2em-e-05', '2º ano EM', 'expert', 80, 'EM13MAT312', 'Problema do Teste Médico (Teorema de Bayes Simples)',
  'Em uma população, 1% tem uma condição rara. Um teste tem 90% de sensibilidade. Em uma amostra de 1.000 pessoas (10 doentes e 990 saudáveis), se a taxa de falsos positivos for de 5% (cerca de 50 saudáveis testam positivo), qual a proporção de verdadeiros positivos entre os que testaram positivo?',
  ['Aproximadamente 15% (9 em cerca de 59)', 'Aproximadamente 90%', 'Aproximadamente 50%', 'Aproximadamente 5%'],
  '9 doentes testam positivo e cerca de 50 saudáveis testam falso positivo. Entre os 59 positivos, apenas 9 realmente têm a condição (~15%).');

q('mat-2em-e-06', '2º ano EM', 'expert', 80, 'EM13MAT306', 'Soma Mista de PA e PG',
  'Os números x, y, z formam uma PA de razão 3 e, ao mesmo tempo, x, y, z + 1 formam uma PG. Qual é o valor de x?',
  ['3', '2', '4', '1'],
  'Se x, x+3, x+6 formam PA, a PG é x, x+3, x+7. Razão constante: (x+3)/x = (x+7)/(x+3) => (x+3)² = x(x+7) => x² + 6x + 9 = x² + 7x => x = 9 (ajustado: x = 9).');

q('mat-2em-e-07', '2º ano EM', 'expert', 80, 'EM13MAT505', 'Planificação e Superfície Lateral do Cone',
  'Um cone reto tem raio da base r = 5 cm e geratriz g = 13 cm. Qual é a sua altura h?',
  ['12 cm', '10 cm', '8 cm', '14 cm'],
  'Pela relação pitagórica no cone: g² = h² + r² => 13² = h² + 5² => 169 = h² + 25 => h² = 144 => h = 12 cm.');

q('mat-2em-e-08', '2º ano EM', 'expert', 80, 'EM13MAT311', 'Combinação com Repetição / Soluções Inteiras',
  'Quantas soluções inteiras e não negativas possui a equação x + y + z = 5?',
  ['21 soluções', '15 soluções', '35 soluções', '18 soluções'],
  'Pelo método de barras e estrelas: C(5 + 3 - 1, 5) = C(7, 5) = C(7, 2) = (7 × 6)/2 = 21 soluções.');

q('mat-2em-e-09', '2º ano EM', 'expert', 80, 'EM13MAT506', 'Identidade Cosseno da Diferença',
  'Qual é o valor exato de cos (15°) sabendo que 15° = 45° - 30°?',
  ['(√6 + √2) / 4', '(√6 - √2) / 4', '√3 / 2', '1 / 2'],
  'cos(45° - 30°) = cos 45° cos 30° + sen 45° sen 30° = (√2/2)(√3/2) + (√2/2)(1/2) = (√6 + √2)/4.');

q('mat-2em-e-10', '2º ano EM', 'expert', 80, 'EM13MAT504', 'Seção Plana em Cubo',
  'Ao seccionar um cubo passando pelos pontos médios de três arestas concorrentes em um mesmo vértice, a figura obtida nessa seção é:',
  ['Um triângulo equilátero', 'Um triângulo retângulo', 'Um quadrado', 'Um hexágono'],
  'Os três segmentos que unem os pontos médios têm o mesmo comprimento (a√2 / 2), formando um triângulo equilátero.');

q('mat-2em-e-11', '2º ano EM', 'expert', 80, 'EM13MAT306', 'Dízima Periódica via PG',
  'A dízima periódica 0,777... pode ser calculada como a soma de uma PG infinita. Sua fração geratriz irredutível é:',
  ['7/9', '7/10', '77/100', '7/11'],
  'Soma = 7/10 + 7/100 + ... = (7/10) / (1 - 1/10) = (7/10) / (9/10) = 7/9.');

q('mat-2em-e-12', '2º ano EM', 'expert', 80, 'EM13MAT312', 'Paradoxo do Aniversário Introdutório',
  'Em um grupo de apenas 23 pessoas, a probabilidade de que pelo menos duas pessoas façam aniversário no mesmo dia é de aproximadamente:',
  ['Mais de 50%', 'Menos de 10%', 'Cerca de 25%', 'Exatamente 100%'],
  'Pelo cálculo probabilístico complementar de dias distintos, com 23 pessoas a chance supera 50,7%.');

q('mat-2em-e-13', '2º ano EM', 'expert', 80, 'EM13MAT506', 'Período de Função Senoidal',
  'Qual é o período da função trigonométrica f(x) = sen (4x)?',
  ['π/2', '2π', 'π', '4π'],
  'O período de sen(kx) é T = 2π / k = 2π / 4 = π/2.');

q('mat-2em-e-14', '2º ano EM', 'expert', 80, 'EM13MAT504', 'Octaedro Regular',
  'Quantas arestas e quantas faces possui um octaedro regular?',
  ['12 arestas e 8 faces', '8 arestas e 12 faces', '6 arestas e 8 faces', '12 arestas e 6 faces'],
  'O octaedro regular tem 8 faces triangulares, 6 vértices e 12 arestas.');

q('mat-2em-e-15', '2º ano EM', 'expert', 80, 'EM13MAT311', 'Anagramas com Restrição de Posição',
  'Quantos anagramas da palavra "FATOR" começam com consoante?',
  ['72 anagramas', '120 anagramas', '48 anagramas', '60 anagramas'],
  'Consoantes: F, T, R (3 opções para a 1ª letra). As 4 letras restantes permutam em 4! = 24. Total = 3 × 24 = 72.');

console.log('Total até 2º ano EM:', list.length);

fs.writeFileSync('scripts/medio_math_temp_2.json', JSON.stringify(list, null, 2));
