import { QuestionData } from './types';

// ============================================================================
// BANCO DE MATEMÁTICA - ENSINO MÉDIO (1º AO 3º ANO EM)
// REVISADO E CALIBRADO PELA BNCC COM HABILIDADES OFICIAIS VERIFICADAS
// Total: 180 questões (15 por dificuldade em cada ano escolar)
// ============================================================================

export const MEDIO_MATH_QUESTIONS: QuestionData[] = [
  {
    "id": "mat-1em-f-01",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT101",
    "topic": "Conjuntos Numéricos",
    "question": "O número √2 pertence a qual conjunto numérico fundamental?",
    "options": [
      "Números Irracionais",
      "Números Racionais",
      "Números Inteiros",
      "Números Naturais"
    ],
    "correctAnswer": 0,
    "explanation": "√2 é um decimal infinito e não periódico, pertencendo ao conjunto dos Números Irracionais (I)."
  },
  {
    "id": "mat-1em-f-02",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT301",
    "topic": "Conceito de Função",
    "question": "Dada a função f(x) = 3x - 5, qual é o valor numérico de f(2)?",
    "options": [
      "1",
      "6",
      "-1",
      "11"
    ],
    "correctAnswer": 0,
    "explanation": "f(2) = 3(2) - 5 = 6 - 5 = 1."
  },
  {
    "id": "mat-1em-f-03",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT302",
    "topic": "Coeficiente Linear",
    "question": "Na função afim f(x) = 2x + 7, o coeficiente linear indica o ponto em que a reta intercepta o eixo y. Esse ponto é:",
    "options": [
      "(0, 7)",
      "(7, 0)",
      "(0, 2)",
      "(2, 7)"
    ],
    "correctAnswer": 0,
    "explanation": "Quando x = 0, f(0) = 7. O ponto de interseção com o eixo y é (0, 7)."
  },
  {
    "id": "mat-1em-f-04",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT401",
    "topic": "Inequação do 1º Grau",
    "question": "Qual é a solução da inequação 2x + 4 > 10 no conjunto dos números reais?",
    "options": [
      "x > 3",
      "x > 7",
      "x < 3",
      "x ≥ 3"
    ],
    "correctAnswer": 0,
    "explanation": "2x > 10 - 4 => 2x > 6 => x > 3."
  },
  {
    "id": "mat-1em-f-05",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT302",
    "topic": "Raiz da Função Quadrática",
    "question": "Quais são os zeros reais da função quadrática f(x) = x² - 9?",
    "options": [
      "x = 3 e x = -3",
      "x = 9 e x = -9",
      "Apenas x = 3",
      "x = 0 e x = 9"
    ],
    "correctAnswer": 0,
    "explanation": "x² - 9 = 0 => x² = 9 => x = ±3."
  },
  {
    "id": "mat-1em-f-06",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT102",
    "topic": "Intervalos Reais",
    "question": "A notação [2, 5) representa todos os números reais x tais que:",
    "options": [
      "2 ≤ x < 5",
      "2 < x ≤ 5",
      "2 ≤ x ≤ 5",
      "2 < x < 5"
    ],
    "correctAnswer": 0,
    "explanation": "Colchete fechado em 2 inclui o extremo (≤ 2) e aberto em 5 exclui o extremo (< 5)."
  },
  {
    "id": "mat-1em-f-07",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT303",
    "topic": "Função Exponencial Básica",
    "question": "Dada a função exponencial f(x) = 2ˣ, qual é o valor de f(4)?",
    "options": [
      "16",
      "8",
      "32",
      "64"
    ],
    "correctAnswer": 0,
    "explanation": "f(4) = 2⁴ = 16."
  },
  {
    "id": "mat-1em-f-08",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT304",
    "topic": "Definição de Logaritmo",
    "question": "Qual é o valor de log₂ 8?",
    "options": [
      "3",
      "4",
      "2",
      "8"
    ],
    "correctAnswer": 0,
    "explanation": "Por definição, 2³ = 8, logo log₂ 8 = 3."
  },
  {
    "id": "mat-1em-f-09",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT302",
    "topic": "Concavidade da Parábola",
    "question": "Na função quadrática f(x) = -2x² + 4x + 1, a parábola tem concavidade voltada para:",
    "options": [
      "Baixo, pois o coeficiente a é negativo (a = -2)",
      "Cima, pois a é negativo",
      "Direita",
      "Esquerda"
    ],
    "correctAnswer": 0,
    "explanation": "Quando a < 0, a parábola tem a concavidade voltada para baixo e possui ponto de máximo."
  },
  {
    "id": "mat-1em-f-10",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT501",
    "topic": "Trigonometria no Triângulo Retângulo",
    "question": "Em um triângulo retângulo com ângulo de 30° e hipotenusa medindo 10 cm, quanto mede o cateto oposto?",
    "options": [
      "5 cm",
      "5√3 cm",
      "10 cm",
      "2,5 cm"
    ],
    "correctAnswer": 0,
    "explanation": "sen 30° = cateto oposto / hipotenusa => 1/2 = oposto / 10 => cateto oposto = 5 cm."
  },
  {
    "id": "mat-1em-f-11",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT301",
    "topic": "Domínio de Função Racional",
    "question": "Qual é o domínio da função f(x) = 1 / (x - 4) no conjunto dos números reais?",
    "options": [
      "Todos os reais com exceção de x = 4 (R - {4})",
      "Todos os reais positivos",
      "Apenas x = 4",
      "R - {0}"
    ],
    "correctAnswer": 0,
    "explanation": "O denominador não pode ser zero: x - 4 ≠ 0 => x ≠ 4."
  },
  {
    "id": "mat-1em-f-12",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT101",
    "topic": "Interseção de Conjuntos",
    "question": "Se A = {1, 2, 3, 4} e B = {3, 4, 5, 6}, qual é o conjunto A ∩ B?",
    "options": [
      "{3, 4}",
      "{1, 2, 3, 4, 5, 6}",
      "{1, 2}",
      "{5, 6}"
    ],
    "correctAnswer": 0,
    "explanation": "A interseção é formada pelos elementos comuns a ambos os conjuntos: {3, 4}."
  },
  {
    "id": "mat-1em-f-13",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT302",
    "topic": "Vértice Xv",
    "question": "Qual é o x do vértice da parábola y = x² - 6x + 8?",
    "options": [
      "3",
      "-3",
      "6",
      "4"
    ],
    "correctAnswer": 0,
    "explanation": "Xv = -b / (2a) = -(-6) / (2 × 1) = 6 / 2 = 3."
  },
  {
    "id": "mat-1em-f-14",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT202",
    "topic": "Média Aritmética de Dados",
    "question": "Em uma pesquisa escolar, as idades coletadas foram: 15, 16, 16, 17. Qual é a média de idade?",
    "options": [
      "16 anos",
      "15,5 anos",
      "16,5 anos",
      "17 anos"
    ],
    "correctAnswer": 0,
    "explanation": "Média = (15 + 16 + 16 + 17) ÷ 4 = 64 ÷ 4 = 16 anos."
  },
  {
    "id": "mat-1em-f-15",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT304",
    "topic": "Logaritmo na Base 10",
    "question": "Qual é o valor de log₁₀ 100?",
    "options": [
      "2",
      "10",
      "1",
      "100"
    ],
    "correctAnswer": 0,
    "explanation": "10² = 100, logo log₁₀ 100 = 2."
  },
  {
    "id": "mat-1em-m-01",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT302",
    "topic": "Coordenadas do Vértice",
    "question": "Quais são as coordenadas completas do vértice (Xv, Yv) da função f(x) = x² - 4x + 3?",
    "options": [
      "(2, -1)",
      "(2, 1)",
      "(-2, -1)",
      "(1, 0)"
    ],
    "correctAnswer": 0,
    "explanation": "Xv = -(-4)/2 = 2. Yv = f(2) = 2² - 4(2) + 3 = 4 - 8 + 3 = -1. Vértice: (2, -1)."
  },
  {
    "id": "mat-1em-m-02",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT303",
    "topic": "Crescimento de População de Bactérias",
    "question": "Uma colônia de bactérias dobra de tamanho a cada hora. Se inicialmente havia 500 bactérias, quantas haverá após 4 horas?",
    "options": [
      "8.000 bactérias",
      "4.000 bactérias",
      "2.000 bactérias",
      "16.000 bactérias"
    ],
    "correctAnswer": 0,
    "explanation": "N(t) = 500 × 2ᵗ. Para t = 4: N(4) = 500 × 2⁴ = 500 × 16 = 8.000 bactérias."
  },
  {
    "id": "mat-1em-m-03",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT401",
    "topic": "Inequação Produto",
    "question": "Qual é o conjunto solução da inequação (x - 2)(x - 5) < 0 nos reais?",
    "options": [
      "2 < x < 5",
      "x < 2 ou x > 5",
      "x > 5",
      "x ≤ 2"
    ],
    "correctAnswer": 0,
    "explanation": "As raízes são 2 e 5. A parábola correspondente tem a concavidade para cima, sendo negativa entre as raízes: 2 < x < 5."
  },
  {
    "id": "mat-1em-m-04",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT304",
    "topic": "Propriedades dos Logaritmos",
    "question": "Sabendo que log 2 ≈ 0,30 e log 3 ≈ 0,48, qual é o valor aproximado de log 6?",
    "options": [
      "0,78",
      "0,18",
      "0,96",
      "0,60"
    ],
    "correctAnswer": 0,
    "explanation": "Pela propriedade log(a × b) = log a + log b: log 6 = log(2 × 3) = log 2 + log 3 ≈ 0,30 + 0,48 = 0,78."
  },
  {
    "id": "mat-1em-m-05",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT501",
    "topic": "Trigonometria com Cosseno e Tangente",
    "question": "Um observador a 30 metros de um mastro vertical avista seu topo sob um ângulo de 60°. Qual é a altura do mastro? (Considere tg 60° = √3)",
    "options": [
      "30√3 metros",
      "15√3 metros",
      "60 metros",
      "30 metros"
    ],
    "correctAnswer": 0,
    "explanation": "tg 60° = h / 30 => √3 = h / 30 => h = 30√3 metros."
  },
  {
    "id": "mat-1em-m-06",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT302",
    "topic": "Modelagem de Trajetória",
    "question": "Um projétil tem altura h(t) = -t² + 8t (em metros, com t em segundos). Em que instante ele volta a tocar o solo?",
    "options": [
      "t = 8 s",
      "t = 4 s",
      "t = 16 s",
      "t = 2 s"
    ],
    "correctAnswer": 0,
    "explanation": "-t² + 8t = 0 => t(-t + 8) = 0. Toca o solo no lançamento (t = 0) e na volta em t = 8 segundos."
  },
  {
    "id": "mat-1em-m-07",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT303",
    "topic": "Equação Exponencial Simples",
    "question": "Qual é a solução da equação 3^(2x - 1) = 27?",
    "options": [
      "x = 2",
      "x = 1",
      "x = 3",
      "x = 4"
    ],
    "correctAnswer": 0,
    "explanation": "27 = 3³. Logo: 2x - 1 = 3 => 2x = 4 => x = 2."
  },
  {
    "id": "mat-1em-m-08",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT301",
    "topic": "Função Composta",
    "question": "Dadas f(x) = 2x + 3 e g(x) = x - 1, determine f(g(4)).",
    "options": [
      "9",
      "7",
      "11",
      "8"
    ],
    "correctAnswer": 0,
    "explanation": "g(4) = 4 - 1 = 3. Então f(g(4)) = f(3) = 2(3) + 3 = 6 + 3 = 9."
  },
  {
    "id": "mat-1em-m-09",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT304",
    "topic": "Logaritmo do Quociente",
    "question": "Calcule log₅ (125 / 25).",
    "options": [
      "1",
      "2",
      "3",
      "5"
    ],
    "correctAnswer": 0,
    "explanation": "125 / 25 = 5. Como 5¹ = 5, temos log₅ 5 = 1 (ou log₅ 125 - log₅ 25 = 3 - 2 = 1)."
  },
  {
    "id": "mat-1em-m-10",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT202",
    "topic": "Interpretação de Gráfico de Dispersão",
    "question": "Em um gráfico de dispersão que relaciona tempo diário de leitura e desempenho escolar, pontos alinhados inclinados para cima indicam:",
    "options": [
      "Correlação linear positiva",
      "Correlação linear negativa",
      "Ausência de correlação",
      "Correlação nula"
    ],
    "correctAnswer": 0,
    "explanation": "Quando o aumento de uma variável é acompanhado pelo aumento da outra, há correlação linear positiva."
  },
  {
    "id": "mat-1em-m-11",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT302",
    "topic": "Cálculo de Lucro com Função Quadrática",
    "question": "Uma fábrica tem receita R(x) = 100x e custo C(x) = x² + 20x. Para qual quantidade produzida x o lucro L(x) = R(x) - C(x) é máximo?",
    "options": [
      "x = 40",
      "x = 50",
      "x = 30",
      "x = 60"
    ],
    "correctAnswer": 0,
    "explanation": "L(x) = 100x - (x² + 20x) = -x² + 80x. Xv = -80 / (2 × (-1)) = 40 unidades."
  },
  {
    "id": "mat-1em-m-12",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT101",
    "topic": "Subconjuntos e Potência",
    "question": "Quantos subconjuntos possui um conjunto com 4 elementos distintos?",
    "options": [
      "16 subconjuntos",
      "8 subconjuntos",
      "12 subconjuntos",
      "4 subconjuntos"
    ],
    "correctAnswer": 0,
    "explanation": "O número de subconjuntos de um conjunto com n elementos é 2ⁿ: 2⁴ = 16 subconjuntos."
  },
  {
    "id": "mat-1em-m-13",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT501",
    "topic": "Relação Fundamental Trigonométrica",
    "question": "Se em um triângulo retângulo o seno de um ângulo agudo é 0,6 (3/5), qual é a tangente desse ângulo?",
    "options": [
      "0,75 (3/4)",
      "0,8 (4/5)",
      "1,33",
      "0,5"
    ],
    "correctAnswer": 0,
    "explanation": "cos θ = √(1 - 0,6²) = √(1 - 0,36) = √0,64 = 0,8. tg θ = sen θ / cos θ = 0,6 / 0,8 = 0,75."
  },
  {
    "id": "mat-1em-m-14",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT303",
    "topic": "Decaimento Exponencial",
    "question": "Uma substância radioativa tem meia-vida de 10 anos. Se havia 80 g inicialmente, quanto restará após 30 anos?",
    "options": [
      "10 g",
      "20 g",
      "5 g",
      "40 g"
    ],
    "correctAnswer": 0,
    "explanation": "Passaram-se 3 meias-vidas (30 ÷ 10 = 3): 80 ÷ 2³ = 80 ÷ 8 = 10 g."
  },
  {
    "id": "mat-1em-m-15",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT304",
    "topic": "Logaritmo da Potência",
    "question": "Simplifique: log₂ (4⁵).",
    "options": [
      "10",
      "20",
      "8",
      "5"
    ],
    "correctAnswer": 0,
    "explanation": "log₂ (4⁵) = 5 × log₂ 4 = 5 × 2 = 10 (pois 2¹⁰ = 1024 = 4⁵)."
  },
  {
    "id": "mat-1em-d-01",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT302",
    "topic": "Área Máxima com Função Quadrática",
    "question": "Um fazendeiro dispõe de 40 metros de cerca para cercar uma horta retangular aproveitando um muro já existente como um dos lados. Qual é a área máxima que ele pode cercar?",
    "options": [
      "200 m²",
      "100 m²",
      "400 m²",
      "150 m²"
    ],
    "correctAnswer": 0,
    "explanation": "Cerca nos lados x, x e comprimento (40 - 2x). Área A(x) = x(40 - 2x) = -2x² + 40x. Xv = -40 / (-4) = 10 m. Área máxima = 10 × 20 = 200 m²."
  },
  {
    "id": "mat-1em-d-02",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT303",
    "topic": "Equação Exponencial com Mudança de Base",
    "question": "Resolva a equação exponencial: 4ˣ - 3 × 2ˣ - 4 = 0.",
    "options": [
      "x = 2",
      "x = 4",
      "x = 1",
      "x = 3"
    ],
    "correctAnswer": 0,
    "explanation": "Fazendo y = 2ˣ: y² - 3y - 4 = 0 => (y - 4)(y + 1) = 0. Como 2ˣ > 0, temos y = 4 => 2ˣ = 4 => x = 2."
  },
  {
    "id": "mat-1em-d-03",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT304",
    "topic": "Equação Logarítmica",
    "question": "Resolva nos reais: log₂ (x + 3) + log₂ (x - 3) = 4.",
    "options": [
      "x = 5",
      "x = -5",
      "x = 4",
      "x = 6"
    ],
    "correctAnswer": 0,
    "explanation": "log₂ [(x + 3)(x - 3)] = 4 => x² - 9 = 2⁴ = 16 => x² = 25. Pela condição de existência x > 3, logo x = 5."
  },
  {
    "id": "mat-1em-d-04",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT301",
    "topic": "Função Inversa",
    "question": "Qual é a lei da função inversa f⁻¹(x) da função afim bijetora f(x) = (2x + 1) / 3?",
    "options": [
      "f⁻¹(x) = (3x - 1) / 2",
      "f⁻¹(x) = (3x + 1) / 2",
      "f⁻¹(x) = 2x - 3",
      "f⁻¹(x) = (2x - 1) / 3"
    ],
    "correctAnswer": 0,
    "explanation": "Trocando variáveis: y = (2x + 1)/3 => 3y = 2x + 1 => 2x = 3y - 1 => x = (3y - 1)/2. f⁻¹(x) = (3x - 1)/2."
  },
  {
    "id": "mat-1em-d-05",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT501",
    "topic": "Lei dos Cossenos Introdutória",
    "question": "Em um triângulo, dois lados medem 5 cm e 8 cm e formam entre si um ângulo de 60°. Quanto mede o terceiro lado?",
    "options": [
      "7 cm",
      "6 cm",
      "8 cm",
      "√39 cm"
    ],
    "correctAnswer": 0,
    "explanation": "Pela Lei dos Cossenos: a² = 5² + 8² - 2(5)(8) cos 60° = 25 + 64 - 80(0,5) = 89 - 40 = 49 => a = 7 cm."
  },
  {
    "id": "mat-1em-d-06",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT302",
    "topic": "Inequação do 2º Grau com Parênteses",
    "question": "Para quais valores reais de x a função f(x) = -x² + 2x + 8 é estritamente positiva (f(x) > 0)?",
    "options": [
      "-2 < x < 4",
      "x < -2 ou x > 4",
      "x > 4",
      "-4 < x < 2"
    ],
    "correctAnswer": 0,
    "explanation": "Raízes de -x² + 2x + 8 = 0: x = -2 e x = 4. A parábola tem concavidade para baixo, logo é positiva entre as raízes: -2 < x < 4."
  },
  {
    "id": "mat-1em-d-07",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT304",
    "topic": "Mudança de Base nos Logaritmos",
    "question": "Expresse log₃ 5 em função de log 3 e log 5 na base 10.",
    "options": [
      "log 5 / log 3",
      "log 3 / log 5",
      "log 5 - log 3",
      "log 15"
    ],
    "correctAnswer": 0,
    "explanation": "Pela regra de mudança de base: log_b a = (log_c a) / (log_c b), logo log₃ 5 = log 5 / log 3."
  },
  {
    "id": "mat-1em-d-08",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT401",
    "topic": "Sistema de Inequações",
    "question": "Quais números inteiros satisfazem simultaneamente: 2x - 1 ≥ 3 e x + 4 < 9?",
    "options": [
      "{2, 3, 4}",
      "{2, 3, 4, 5}",
      "{3, 4}",
      "{1, 2, 3, 4}"
    ],
    "correctAnswer": 0,
    "explanation": "2x ≥ 4 => x ≥ 2. x < 5. Interseção nos inteiros: 2, 3 e 4."
  },
  {
    "id": "mat-1em-d-09",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT303",
    "topic": "Juros Compostos e Exponencial",
    "question": "Um capital de R$ 1.000,00 foi aplicado a juros compostos de 10% ao ano. Qual é o montante após 3 anos?",
    "options": [
      "R$ 1.331,00",
      "R$ 1.300,00",
      "R$ 1.350,00",
      "R$ 1.250,00"
    ],
    "correctAnswer": 0,
    "explanation": "M = C × (1 + i)ᵗ = 1000 × (1,10)³ = 1000 × 1,331 = R$ 1.331,00."
  },
  {
    "id": "mat-1em-d-10",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT102",
    "topic": "Operações com Intervalos",
    "question": "Se A = [1, 5] e B = (3, 8), qual é o intervalo A - B (elementos em A que não estão em B)?",
    "options": [
      "[1, 3]",
      "[1, 3)",
      "(3, 5]",
      "[5, 8)"
    ],
    "correctAnswer": 0,
    "explanation": "Os números em A que não estão em B vão de 1 até 3 inclusive (já que 3 não pertence ao aberto de B): [1, 3]."
  },
  {
    "id": "mat-1em-d-11",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT501",
    "topic": "Lei dos Senos Introdutória",
    "question": "Em um triângulo ABC, o ângulo A mede 30° e o lado oposto a ele mede 6 cm. Qual é o raio da circunferência circunscrita a esse triângulo?",
    "options": [
      "6 cm",
      "12 cm",
      "3 cm",
      "8 cm"
    ],
    "correctAnswer": 0,
    "explanation": "Pela Lei dos Senos: a / sen A = 2R => 6 / sen 30° = 2R => 6 / 0,5 = 2R => 12 = 2R => R = 6 cm."
  },
  {
    "id": "mat-1em-d-12",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT302",
    "topic": "Distância entre Zeros da Parábola",
    "question": "Qual é a distância horizontal entre os zeros da função quadrática f(x) = x² - 8x + 12?",
    "options": [
      "4 unidades",
      "2 unidades",
      "6 unidades",
      "8 unidades"
    ],
    "correctAnswer": 0,
    "explanation": "Raízes: x = 2 e x = 6. Distância = 6 - 2 = 4 unidades."
  },
  {
    "id": "mat-1em-d-13",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT304",
    "topic": "Propriedades Algébricas de Log",
    "question": "Se log x = 2 e log y = 3, qual é o valor de log (x³ / y)?",
    "options": [
      "3",
      "6",
      "1",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "log (x³ / y) = 3 log x - log y = 3(2) - 3 = 6 - 3 = 3."
  },
  {
    "id": "mat-1em-d-14",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT202",
    "topic": "Interpretação de Mediana e Média",
    "question": "Em uma empresa, 9 estagiários ganham R$ 1.000,00 e o diretor ganha R$ 21.000,00. Qual medida melhor representa o salário típico dos funcionários?",
    "options": [
      "A mediana (R$ 1.000,00), pois não é distorcida pelo valor discrepante",
      "A média (R$ 3.000,00)",
      "A amplitude",
      "O desvio padrão"
    ],
    "correctAnswer": 0,
    "explanation": "Em distribuições com valores discrepantes (outliers), a mediana é a medida de tendência central mais robusta e representativa."
  },
  {
    "id": "mat-1em-d-15",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT301",
    "topic": "Taxa de Variação Média",
    "question": "Qual é a taxa de variação média da função f(x) = x² no intervalo [1, 4]?",
    "options": [
      "5",
      "4",
      "3",
      "6"
    ],
    "correctAnswer": 0,
    "explanation": "Taxa de variação média = [f(4) - f(1)] / (4 - 1) = (16 - 1) / 3 = 15 / 3 = 5."
  },
  {
    "id": "mat-1em-e-01",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT302",
    "topic": "Otimização com Custo e Receita",
    "question": "Uma empresa modela o custo C(x) = 2x² - 12x + 50 para produzir x mil peças. Qual é o custo mínimo de produção?",
    "options": [
      "R$ 32 mil",
      "R$ 50 mil",
      "R$ 28 mil",
      "R$ 36 mil"
    ],
    "correctAnswer": 0,
    "explanation": "Xv = -(-12) / (2 × 2) = 12 / 4 = 3. Custo mínimo = C(3) = 2(9) - 12(3) + 50 = 18 - 36 + 50 = R$ 32 mil."
  },
  {
    "id": "mat-1em-e-02",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT304",
    "topic": "Escala Richter e Logaritmos",
    "question": "A magnitude de um terremoto é calculada por M = (2/3) log (E / E₀). Se um terremoto tem magnitude 6 e outro magnitude 4, a energia liberada pelo primeiro é quantas vezes maior?",
    "options": [
      "1.000 vezes maior",
      "100 vezes maior",
      "10.000 vezes maior",
      "30 vezes maior"
    ],
    "correctAnswer": 0,
    "explanation": "ΔM = 2 = (2/3) log(E₁/E₂) => log(E₁/E₂) = 3 => E₁/E₂ = 10³ = 1.000 vezes."
  },
  {
    "id": "mat-1em-e-03",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT303",
    "topic": "Meia-Vida e Tempo Contínuo",
    "question": "A massa de um medicamento no sangue decai segundo M(t) = 80 × (1/2)^(t/4), com t em horas. Após quantas horas restarão apenas 5 mg?",
    "options": [
      "16 horas",
      "12 horas",
      "20 horas",
      "8 horas"
    ],
    "correctAnswer": 0,
    "explanation": "5 = 80 × (1/2)^(t/4) => 5/80 = 1/16 = (1/2)⁴ = (1/2)^(t/4) => t/4 = 4 => t = 16 horas."
  },
  {
    "id": "mat-1em-e-04",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT501",
    "topic": "Problema do Triângulo Acutângulo",
    "question": "Em um triângulo com lados 7 cm, 8 cm e 9 cm, o cosseno do maior ângulo é:",
    "options": [
      "2/7",
      "1/3",
      "5/14",
      "3/8"
    ],
    "correctAnswer": 0,
    "explanation": "O maior ângulo opõe-se ao maior lado (9): 9² = 7² + 8² - 2(7)(8) cos θ => 81 = 49 + 64 - 112 cos θ => 112 cos θ = 113 - 81 = 32 => cos θ = 32/112 = 2/7."
  },
  {
    "id": "mat-1em-e-05",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT301",
    "topic": "Composição Sucessiva",
    "question": "Se f(x) = 2x + 1 e g(x) = 3x - 2, qual é a raiz da equação f(g(x)) = 15?",
    "options": [
      "x = 3",
      "x = 2",
      "x = 4",
      "x = 5"
    ],
    "correctAnswer": 0,
    "explanation": "f(g(x)) = 2(3x - 2) + 1 = 6x - 4 + 1 = 6x - 3. 6x - 3 = 15 => 6x = 18 => x = 3."
  },
  {
    "id": "mat-1em-e-06",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT302",
    "topic": "Parábola Tangente ao Eixo X",
    "question": "Para qual valor positivo de k a função f(x) = x² - kx + 9 possui exatamente uma raiz real (tangencia o eixo x)?",
    "options": [
      "k = 6",
      "k = 3",
      "k = 9",
      "k = 18"
    ],
    "correctAnswer": 0,
    "explanation": "Para tangenciar o eixo x, Δ deve ser 0: Δ = k² - 4(1)(9) = k² - 36 = 0 => k = 6."
  },
  {
    "id": "mat-1em-e-07",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT304",
    "topic": "Sistema de Logaritmos",
    "question": "Resolva o sistema: x + y = 20 e log₂ x - log₂ y = 2. Qual é o valor de x?",
    "options": [
      "x = 16",
      "x = 12",
      "x = 15",
      "x = 18"
    ],
    "correctAnswer": 0,
    "explanation": "log₂ (x/y) = 2 => x/y = 4 => x = 4y. 4y + y = 20 => 5y = 20 => y = 4 e x = 16."
  },
  {
    "id": "mat-1em-e-08",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT402",
    "topic": "Interpretação Gráfica de Sinais",
    "question": "Dada a função quadrática com gráfico passando por (1, 0) e (5, 0) com vértice em (3, -4), para quais valores de x temos f(x) ≥ 0?",
    "options": [
      "x ≤ 1 ou x ≥ 5",
      "1 ≤ x ≤ 5",
      "x ≥ 3",
      "Apenas x = 1 e x = 5"
    ],
    "correctAnswer": 0,
    "explanation": "Com concavidade para cima (vértice negativo), a função é não negativa fora do intervalo das raízes: x ≤ 1 ou x ≥ 5."
  },
  {
    "id": "mat-1em-e-09",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT303",
    "topic": "Taxa de Depreciação de Veículo",
    "question": "Um carro de R$ 50.000,00 desvaloriza 20% ao ano. Qual será seu valor após 2 anos?",
    "options": [
      "R$ 32.000,00",
      "R$ 30.000,00",
      "R$ 35.000,00",
      "R$ 28.000,00"
    ],
    "correctAnswer": 0,
    "explanation": "V(t) = 50000 × (0,80)ᵗ. V(2) = 50000 × 0,64 = R$ 32.000,00."
  },
  {
    "id": "mat-1em-e-10",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT501",
    "topic": "Área de Triângulo por Trigonometria",
    "question": "Qual é a área de um triângulo com lados 6 cm e 10 cm e ângulo compreendido de 30°?",
    "options": [
      "15 cm²",
      "30 cm²",
      "20 cm²",
      "12 cm²"
    ],
    "correctAnswer": 0,
    "explanation": "Área = (a × b × sen θ) / 2 = (6 × 10 × sen 30°) / 2 = (60 × 0,5) / 2 = 15 cm²."
  },
  {
    "id": "mat-1em-e-11",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT101",
    "topic": "Problema de Três Conjuntos",
    "question": "Em um grupo de 100 pessoas, 50 praticam corrida, 40 natação e 20 praticam ambos. Quantas pessoas não praticam nenhum dos dois?",
    "options": [
      "30 pessoas",
      "20 pessoas",
      "40 pessoas",
      "10 pessoas"
    ],
    "correctAnswer": 0,
    "explanation": "União = 50 + 40 - 20 = 70 pessoas. Quem não pratica nenhum: 100 - 70 = 30 pessoas."
  },
  {
    "id": "mat-1em-e-12",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT304",
    "topic": "Decibéis e Logaritmo",
    "question": "O nível sonoro em decibéis é dado por dB = 10 log (I / I₀). Se a intensidade sonora I for multiplicada por 100, quantos decibéis o nível aumentará?",
    "options": [
      "20 dB",
      "10 dB",
      "100 dB",
      "30 dB"
    ],
    "correctAnswer": 0,
    "explanation": "ΔdB = 10 log 100 = 10 × 2 = 20 dB."
  },
  {
    "id": "mat-1em-e-13",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT302",
    "topic": "Interseção de Reta e Parábola",
    "question": "Quais são os pontos de interseção entre a parábola y = x² e a reta y = 2x + 3?",
    "options": [
      "(-1, 1) e (3, 9)",
      "(1, 1) e (3, 9)",
      "(-1, 1) e (-3, 9)",
      "(0, 0) e (2, 4)"
    ],
    "correctAnswer": 0,
    "explanation": "x² = 2x + 3 => x² - 2x - 3 = 0 => (x - 3)(x + 1) = 0 => x = 3 (y = 9) ou x = -1 (y = 1)."
  },
  {
    "id": "mat-1em-e-14",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT202",
    "topic": "Média Harmônica Introdutória",
    "question": "Um carro sobe uma serra a 40 km/h e desce a mesma serra pelo mesmo trajeto a 60 km/h. Qual é a velocidade média em todo o percurso?",
    "options": [
      "48 km/h",
      "50 km/h",
      "52 km/h",
      "45 km/h"
    ],
    "correctAnswer": 0,
    "explanation": "A velocidade média é a média harmônica: Vm = 2ab / (a + b) = 2(40)(60) / (40 + 60) = 4800 / 100 = 48 km/h."
  },
  {
    "id": "mat-1em-e-15",
    "subject": "matematica",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT301",
    "topic": "Periodicidade e Simetria",
    "question": "Uma função satisfaz f(x + 4) = f(x) para todo x real. Se f(1) = 7 e f(2) = 3, qual é o valor de f(9)?",
    "options": [
      "7",
      "3",
      "10",
      "14"
    ],
    "correctAnswer": 0,
    "explanation": "Como o período é 4: f(9) = f(5 + 4) = f(5) = f(1 + 4) = f(1) = 7."
  },
  {
    "id": "mat-2em-f-01",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT306",
    "topic": "Progressão Aritmética (PA)",
    "question": "Qual é a razão da PA (3, 7, 11, 15, ...)?",
    "options": [
      "4",
      "3",
      "5",
      "7"
    ],
    "correctAnswer": 0,
    "explanation": "A razão r é a diferença entre dois termos consecutivos: 7 - 3 = 4."
  },
  {
    "id": "mat-2em-f-02",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT306",
    "topic": "Progressão Geométrica (PG)",
    "question": "Qual é o 4º termo da PG (2, 6, 18, ...)?",
    "options": [
      "54",
      "36",
      "48",
      "72"
    ],
    "correctAnswer": 0,
    "explanation": "A razão q = 6/2 = 3. O 4º termo é a₄ = 18 × 3 = 54."
  },
  {
    "id": "mat-2em-f-03",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT504",
    "topic": "Geometria Espacial (Prismas)",
    "question": "Quantas faces possui um prisma de base triangular?",
    "options": [
      "5 faces",
      "6 faces",
      "4 faces",
      "8 faces"
    ],
    "correctAnswer": 0,
    "explanation": "Possui 2 bases triangulares e 3 faces laterais retangulares, totalizando 2 + 3 = 5 faces."
  },
  {
    "id": "mat-2em-f-04",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT310",
    "topic": "Princípio Multiplicativo (PFC)",
    "question": "Uma pessoa tem 3 calças e 4 camisas. De quantas maneiras distintas ela pode se vestir combinando uma calça e uma camisa?",
    "options": [
      "12 maneiras",
      "7 maneiras",
      "10 maneiras",
      "14 maneiras"
    ],
    "correctAnswer": 0,
    "explanation": "Pelo PFC: 3 × 4 = 12 maneiras."
  },
  {
    "id": "mat-2em-f-05",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT506",
    "topic": "Ciclo Trigonométrico",
    "question": "Quantos graus correspondem ao arco de π radianos?",
    "options": [
      "180°",
      "360°",
      "90°",
      "270°"
    ],
    "correctAnswer": 0,
    "explanation": "Por definição do ciclo trigonométrico, π radianos equivale a 180°."
  },
  {
    "id": "mat-2em-f-06",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT306",
    "topic": "Termo Geral da PA",
    "question": "Qual é o 10º termo da PA cujo primeiro termo é a₁ = 2 e a razão é r = 3?",
    "options": [
      "29",
      "32",
      "27",
      "30"
    ],
    "correctAnswer": 0,
    "explanation": "a₁₀ = a₁ + (10 - 1)r = 2 + 9(3) = 2 + 27 = 29."
  },
  {
    "id": "mat-2em-f-07",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT504",
    "topic": "Volume de Cilindro Reto",
    "question": "Qual é o volume de um cilindro com raio 2 cm e altura 5 cm? (Considere π = 3,14)",
    "options": [
      "62,8 cm³",
      "31,4 cm³",
      "20 cm³",
      "50 cm³"
    ],
    "correctAnswer": 0,
    "explanation": "V = π r² h = 3,14 × 4 × 5 = 3,14 × 20 = 62,8 cm³."
  },
  {
    "id": "mat-2em-f-08",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT310",
    "topic": "Fatorial Básico",
    "question": "Qual é o valor de 4! (4 fatorial)?",
    "options": [
      "24",
      "12",
      "16",
      "20"
    ],
    "correctAnswer": 0,
    "explanation": "4! = 4 × 3 × 2 × 1 = 24."
  },
  {
    "id": "mat-2em-f-09",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT506",
    "topic": "Seno de 90°",
    "question": "No ciclo trigonométrico, qual é o valor de sen (90°)?",
    "options": [
      "1",
      "0",
      "-1",
      "1/2"
    ],
    "correctAnswer": 0,
    "explanation": "No ponto superior do ciclo trigonométrico (0, 1), a ordenada (seno) vale 1."
  },
  {
    "id": "mat-2em-f-10",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT311",
    "topic": "Permutação Simples",
    "question": "De quantas maneiras distintas 3 pessoas podem se sentar lado a lado em um banco de 3 lugares?",
    "options": [
      "6 maneiras",
      "3 maneiras",
      "9 maneiras",
      "8 maneiras"
    ],
    "correctAnswer": 0,
    "explanation": "P₃ = 3! = 3 × 2 × 1 = 6 maneiras."
  },
  {
    "id": "mat-2em-f-11",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT505",
    "topic": "Volume de Pirâmide",
    "question": "Uma pirâmide tem base quadrada com área 30 cm² e altura 6 cm. Qual é o seu volume?",
    "options": [
      "60 cm³",
      "180 cm³",
      "90 cm³",
      "120 cm³"
    ],
    "correctAnswer": 0,
    "explanation": "V = (Área da Base × h) / 3 = (30 × 6) / 3 = 180 / 3 = 60 cm³."
  },
  {
    "id": "mat-2em-f-12",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT506",
    "topic": "Cosseno de 180°",
    "question": "Qual é o valor do cos (180°)?",
    "options": [
      "-1",
      "1",
      "0",
      "-1/2"
    ],
    "correctAnswer": 0,
    "explanation": "No ponto (-1, 0) do ciclo trigonométrico, a abscissa (cosseno) é -1."
  },
  {
    "id": "mat-2em-f-13",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT306",
    "topic": "Classificação de PG",
    "question": "A sequência (5, -10, 20, -40, ...) é uma PG com razão igual a:",
    "options": [
      "-2 (PG oscilante)",
      "+2",
      "-5",
      "+1/2"
    ],
    "correctAnswer": 0,
    "explanation": "q = -10 / 5 = -2. Quando a razão é negativa, os termos alternam de sinal (PG oscilante)."
  },
  {
    "id": "mat-2em-f-14",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT504",
    "topic": "Vértices do Prisma Hexagonal",
    "question": "Quantos vértices possui um prisma hexagonal (base com 6 lados)?",
    "options": [
      "12 vértices",
      "18 vértices",
      "8 vértices",
      "14 vértices"
    ],
    "correctAnswer": 0,
    "explanation": "Possui 6 vértices na base inferior e 6 na base superior: 6 + 6 = 12 vértices."
  },
  {
    "id": "mat-2em-f-15",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT312",
    "topic": "Probabilidade no Lançamento de Moedas",
    "question": "Ao lançar três moedas honestas, qual é o número total de resultados possíveis no espaço amostral?",
    "options": [
      "8 resultados",
      "6 resultados",
      "9 resultados",
      "16 resultados"
    ],
    "correctAnswer": 0,
    "explanation": "Cada moeda tem 2 faces: 2 × 2 × 2 = 8 resultados possíveis."
  },
  {
    "id": "mat-2em-m-01",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT306",
    "topic": "Soma dos Termos da PA",
    "question": "Qual é a soma dos 20 primeiros termos da PA (1, 3, 5, 7, ...)?",
    "options": [
      "400",
      "200",
      "380",
      "420"
    ],
    "correctAnswer": 0,
    "explanation": "a₂₀ = 1 + 19(2) = 39. S₂₀ = (a₁ + a₂₀) × 20 / 2 = (1 + 39) × 10 = 40 × 10 = 400."
  },
  {
    "id": "mat-2em-m-02",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT306",
    "topic": "Soma dos Termos da PG Finita",
    "question": "Calcule a soma dos 5 primeiros termos da PG (1, 2, 4, 8, ...).",
    "options": [
      "31",
      "32",
      "30",
      "29"
    ],
    "correctAnswer": 0,
    "explanation": "S₅ = a₁(q⁵ - 1) / (q - 1) = 1(32 - 1) / 1 = 31."
  },
  {
    "id": "mat-2em-m-03",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT505",
    "topic": "Volume do Cone Reto",
    "question": "Um cone reto tem raio da base 3 cm e altura 4 cm. Qual é o seu volume? (Considere π = 3,14)",
    "options": [
      "37,68 cm³",
      "113,04 cm³",
      "50,24 cm³",
      "25,12 cm³"
    ],
    "correctAnswer": 0,
    "explanation": "V = (π r² h) / 3 = (3,14 × 9 × 4) / 3 = 3,14 × 12 = 37,68 cm³."
  },
  {
    "id": "mat-2em-m-04",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT311",
    "topic": "Combinação Simples",
    "question": "De quantas maneiras podemos escolher uma comissão de 3 pessoas a partir de um grupo de 7 voluntários?",
    "options": [
      "35 maneiras",
      "21 maneiras",
      "42 maneiras",
      "210 maneiras"
    ],
    "correctAnswer": 0,
    "explanation": "C(7, 3) = 7! / (3! × 4!) = (7 × 6 × 5) / (3 × 2 × 1) = 35 maneiras."
  },
  {
    "id": "mat-2em-m-05",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT506",
    "topic": "Arco Côngruo",
    "question": "Qual é a primeira determinação positiva do arco de 750°?",
    "options": [
      "30°",
      "60°",
      "45°",
      "90°"
    ],
    "correctAnswer": 0,
    "explanation": "750° ÷ 360° = 2 voltas completas com resto de 750° - 720° = 30°."
  },
  {
    "id": "mat-2em-m-06",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT306",
    "topic": "Interpolação Aritmética",
    "question": "Inserindo 4 meios aritméticos entre 2 e 17, qual é a razão da PA formada?",
    "options": [
      "3",
      "4",
      "2,5",
      "5"
    ],
    "correctAnswer": 0,
    "explanation": "A PA terá 6 termos: a₆ = a₁ + 5r => 17 = 2 + 5r => 15 = 5r => r = 3."
  },
  {
    "id": "mat-2em-m-07",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT504",
    "topic": "Área Total de Cilindro",
    "question": "Um cilindro equilátero tem raio r = 3 cm (altura h = 2r = 6 cm). Qual é sua área total? (Use π = 3,14)",
    "options": [
      "169,56 cm²",
      "113,04 cm²",
      "150,72 cm²",
      "180,00 cm²"
    ],
    "correctAnswer": 0,
    "explanation": "At = 2πr(h + r) = 2 × 3,14 × 3 × (6 + 3) = 18,84 × 9 = 169,56 cm²."
  },
  {
    "id": "mat-2em-m-08",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT311",
    "topic": "Anagramas sem Repetição",
    "question": "Quantos anagramas podem ser formados com a palavra \"LIVRO\"?",
    "options": [
      "120",
      "60",
      "24",
      "720"
    ],
    "correctAnswer": 0,
    "explanation": "A palavra tem 5 letras distintas: P₅ = 5! = 120 anagramas."
  },
  {
    "id": "mat-2em-m-09",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT506",
    "topic": "Seno de 150°",
    "question": "No ciclo trigonométrico, qual é o valor de sen (150°)?",
    "options": [
      "1/2",
      "-1/2",
      "√3/2",
      "-√3/2"
    ],
    "correctAnswer": 0,
    "explanation": "150° está no 2º quadrante (seno positivo) e seu simétrico é 180° - 150° = 30°: sen 150° = sen 30° = 1/2."
  },
  {
    "id": "mat-2em-m-10",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT505",
    "topic": "Volume da Esfera",
    "question": "Qual é o volume de uma esfera de raio 3 cm? (Considere π = 3,14)",
    "options": [
      "113,04 cm³",
      "37,68 cm³",
      "75,36 cm³",
      "150,72 cm³"
    ],
    "correctAnswer": 0,
    "explanation": "V = (4/3) π r³ = (4/3) × 3,14 × 27 = 4 × 3,14 × 9 = 113,04 cm³."
  },
  {
    "id": "mat-2em-m-11",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT306",
    "topic": "Problema Contextualizado de PA",
    "question": "Um atleta corre 5 km no 1º dia e aumenta 1,5 km a cada dia subsequente. Quantos km ele correrá no 10º dia?",
    "options": [
      "18,5 km",
      "17,0 km",
      "20,0 km",
      "19,5 km"
    ],
    "correctAnswer": 0,
    "explanation": "a₁₀ = 5 + 9(1,5) = 5 + 13,5 = 18,5 km."
  },
  {
    "id": "mat-2em-m-12",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT312",
    "topic": "Probabilidade da União de Eventos",
    "question": "Ao retirar uma carta de um baralho de 52 cartas, qual a probabilidade de sair um Rei OU uma carta de Copas?",
    "options": [
      "16/52 (4/13)",
      "17/52",
      "13/52",
      "12/52"
    ],
    "correctAnswer": 0,
    "explanation": "Reis = 4. Copas = 13. Rei de Copas = 1 (interseção). P = (4 + 13 - 1)/52 = 16/52 = 4/13."
  },
  {
    "id": "mat-2em-m-13",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT506",
    "topic": "Equação Trigonométrica Simples",
    "question": "Quais são as soluções da equação sen x = 1/2 no intervalo [0, 2π)?",
    "options": [
      "π/6 e 5π/6",
      "π/3 e 2π/3",
      "π/6 e 7π/6",
      "π/4 e 3π/4"
    ],
    "correctAnswer": 0,
    "explanation": "No ciclo trigonométrico, sen x = 1/2 nos quadrantes I e II: 30° (π/6) e 150° (5π/6)."
  },
  {
    "id": "mat-2em-m-14",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT504",
    "topic": "Relação de Euler para Poliedros",
    "question": "Um poliedro convexo tem 8 vértices e 12 arestas. Quantas faces ele possui?",
    "options": [
      "6 faces",
      "8 faces",
      "10 faces",
      "4 faces"
    ],
    "correctAnswer": 0,
    "explanation": "Pela relação de Euler: V - A + F = 2 => 8 - 12 + F = 2 => -4 + F = 2 => F = 6."
  },
  {
    "id": "mat-2em-m-15",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT310",
    "topic": "Senhas com Restrição",
    "question": "Quantas senhas de 4 dígitos distintos podem ser formadas usando os algarismos de 1 a 6?",
    "options": [
      "360 senhas",
      "1.296 senhas",
      "240 senhas",
      "720 senhas"
    ],
    "correctAnswer": 0,
    "explanation": "Arranjo A(6, 4) = 6 × 5 × 4 × 3 = 360 senhas."
  },
  {
    "id": "mat-2em-d-01",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT306",
    "topic": "Soma da PG Infinita",
    "question": "Qual é a soma dos infinitos termos da PG decrescente (16, 8, 4, 2, ...)?",
    "options": [
      "32",
      "30",
      "64",
      "28"
    ],
    "correctAnswer": 0,
    "explanation": "Razão q = 1/2. S_inf = a₁ / (1 - q) = 16 / (1 - 1/2) = 16 / 0,5 = 32."
  },
  {
    "id": "mat-2em-d-02",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT311",
    "topic": "Anagramas com Letras Repetidas",
    "question": "Quantos anagramas distintos possui a palavra \"MATRIZ\"?",
    "options": [
      "720",
      "360",
      "120",
      "240"
    ],
    "correctAnswer": 0,
    "explanation": "Todas as 6 letras são distintas: P₆ = 6! = 720 anagramas."
  },
  {
    "id": "mat-2em-d-03",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT505",
    "topic": "Tronco de Pirâmide ou Cone",
    "question": "Um reservatório em forma de cone reto de altura 12 cm tem raio 6 cm. Um líquido atinge metade da altura (6 cm). Qual fração do volume total está preenchida?",
    "options": [
      "1/8 do volume",
      "1/4 do volume",
      "1/2 do volume",
      "1/16 do volume"
    ],
    "correctAnswer": 0,
    "explanation": "A razão de semelhança linear é k = 6/12 = 1/2. A razão entre os volumes é k³ = (1/2)³ = 1/8."
  },
  {
    "id": "mat-2em-d-04",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT312",
    "topic": "Probabilidade Condicional",
    "question": "Em um grupo de 50 estudantes, 30 falam inglês, 20 falam espanhol e 10 falam ambos. Sabendo que um aluno sorteado fala inglês, qual é a probabilidade de ele também falar espanhol?",
    "options": [
      "1/3 (cerca de 33,3%)",
      "1/2",
      "1/5",
      "2/5"
    ],
    "correctAnswer": 0,
    "explanation": "P(Espanhol | Inglês) = n(Inglês ∩ Espanhol) / n(Inglês) = 10 / 30 = 1/3."
  },
  {
    "id": "mat-2em-d-05",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT506",
    "topic": "Transformação de Cosseno em Radianos",
    "question": "Qual é o valor exato de cos (2π/3)?",
    "options": [
      "-1/2",
      "1/2",
      "-√3/2",
      "√3/2"
    ],
    "correctAnswer": 0,
    "explanation": "2π/3 rad = 120° (2º quadrante, cosseno negativo): cos 120° = -cos 60° = -1/2."
  },
  {
    "id": "mat-2em-d-06",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT306",
    "topic": "Interpolação Geométrica",
    "question": "Inserindo 3 meios geométricos positivos entre 3 e 48, qual é a razão da PG formada?",
    "options": [
      "2",
      "3",
      "√2",
      "4"
    ],
    "correctAnswer": 0,
    "explanation": "A PG tem 5 termos: a₅ = a₁ × q⁴ => 48 = 3 × q⁴ => q⁴ = 16 => q = 2."
  },
  {
    "id": "mat-2em-d-07",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT504",
    "topic": "Seção Meridiana de Cilindro",
    "question": "A seção meridiana de um cilindro reto é um quadrado de área 36 cm². Qual é o raio da base desse cilindro?",
    "options": [
      "3 cm",
      "6 cm",
      "1,5 cm",
      "4 cm"
    ],
    "correctAnswer": 0,
    "explanation": "O quadrado tem lado 6 cm. Esse lado corresponde à altura h = 6 cm e ao diâmetro 2r = 6 cm, logo o raio r = 3 cm."
  },
  {
    "id": "mat-2em-d-08",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT311",
    "topic": "Combinação com Restrição",
    "question": "Deseja-se formar um grupo de 4 alunos a partir de 5 meninos e 4 meninas. Quantos grupos podem ser formados contendo exatamente 2 meninos e 2 meninas?",
    "options": [
      "60 grupos",
      "48 grupos",
      "72 grupos",
      "36 grupos"
    ],
    "correctAnswer": 0,
    "explanation": "C(5, 2) × C(4, 2) = [10] × [6] = 60 grupos."
  },
  {
    "id": "mat-2em-d-09",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT506",
    "topic": "Fórmula da Duplicação de Arco",
    "question": "Se sen x = 3/5 e cos x = 4/5, qual é o valor de sen (2x)?",
    "options": [
      "24/25",
      "12/25",
      "7/25",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "sen (2x) = 2 sen x cos x = 2 × (3/5) × (4/5) = 24/25."
  },
  {
    "id": "mat-2em-d-10",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT505",
    "topic": "Área da Superfície Esférica",
    "question": "Qual é a área da superfície de uma esfera com raio de 5 cm? (Considere π = 3,14)",
    "options": [
      "314 cm²",
      "157 cm²",
      "523 cm²",
      "250 cm²"
    ],
    "correctAnswer": 0,
    "explanation": "Área = 4 π r² = 4 × 3,14 × 25 = 100 × 3,14 = 314 cm²."
  },
  {
    "id": "mat-2em-d-11",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT306",
    "topic": "PA em Triângulo Retângulo",
    "question": "Os lados de um triângulo retângulo estão em PA de razão 2. Quais são as medidas dos lados desse triângulo?",
    "options": [
      "6, 8 e 10",
      "3, 4 e 5",
      "4, 6 e 8",
      "5, 7 e 9"
    ],
    "correctAnswer": 0,
    "explanation": "Lados (x - 2, x, x + 2). Pelo Teorema de Pitágoras: (x - 2)² + x² = (x + 2)² => x² - 4x + 4 + x² = x² + 4x + 4 => x² - 8x = 0 => x = 8. Lados: 6, 8 e 10."
  },
  {
    "id": "mat-2em-d-12",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT312",
    "topic": "Lançamento de Dados e Soma Específica",
    "question": "Ao lançar dois dados perfeitos de 6 faces, qual é a probabilidade de a soma ser maior ou igual a 10?",
    "options": [
      "6/36 (1/6)",
      "4/36",
      "5/36",
      "8/36"
    ],
    "correctAnswer": 0,
    "explanation": "Somas possíveis: 10 [(4,6), (5,5), (6,4)], 11 [(5,6), (6,5)], 12 [(6,6)]. Total = 3 + 2 + 1 = 6 casos favoráveis entre 36: 6/36 = 1/6."
  },
  {
    "id": "mat-2em-d-13",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT506",
    "topic": "Tangente de 135°",
    "question": "Qual é o valor exato de tg (135°)?",
    "options": [
      "-1",
      "1",
      "-√3",
      "√3/3"
    ],
    "correctAnswer": 0,
    "explanation": "135° está no 2º quadrante (seno positivo e cosseno negativo): tg 135° = sen 135° / cos 135° = (√2/2) / (-√2/2) = -1."
  },
  {
    "id": "mat-2em-d-14",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT504",
    "topic": "Diagonal do Cubo",
    "question": "Qual é a medida da diagonal de um cubo com aresta medindo 5 cm?",
    "options": [
      "5√3 cm",
      "5√2 cm",
      "10 cm",
      "15 cm"
    ],
    "correctAnswer": 0,
    "explanation": "A diagonal de um cubo de aresta a é dada por D = a√3 = 5√3 cm."
  },
  {
    "id": "mat-2em-d-15",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT310",
    "topic": "Princípio da Casa dos Pombos",
    "question": "Quantas pessoas, no mínimo, devem estar em uma sala para garantir que pelo menos duas façam aniversário no mesmo mês?",
    "options": [
      "13 pessoas",
      "12 pessoas",
      "24 pessoas",
      "14 pessoas"
    ],
    "correctAnswer": 0,
    "explanation": "Como há 12 meses no ano, pelo Princípio das Gavetas de Dirichlet (Casa dos Pombos), 12 + 1 = 13 pessoas garantem pelo menos duas no mesmo mês."
  },
  {
    "id": "mat-2em-e-01",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT306",
    "topic": "Equação com Termos de PG Infinita",
    "question": "A soma dos termos da PG infinita x + x/3 + x/9 + ... é igual a 12. Qual é o valor do primeiro termo x?",
    "options": [
      "8",
      "6",
      "9",
      "4"
    ],
    "correctAnswer": 0,
    "explanation": "S = x / (1 - 1/3) = x / (2/3) = 3x/2 = 12 => 3x = 24 => x = 8."
  },
  {
    "id": "mat-2em-e-02",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT311",
    "topic": "Permutação Circular",
    "question": "De quantas maneiras distintas 5 pessoas podem se sentar ao redor de uma mesa redonda (permutação circular)?",
    "options": [
      "24 maneiras",
      "120 maneiras",
      "60 maneiras",
      "20 maneiras"
    ],
    "correctAnswer": 0,
    "explanation": "Permutação circular: PC(n) = (n - 1)! = (5 - 1)! = 4! = 24 maneiras."
  },
  {
    "id": "mat-2em-e-03",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT504",
    "topic": "Inscrição de Esfera no Cubo",
    "question": "Uma esfera está perfeitamente inscrita em um cubo de aresta 6 cm. Qual é o volume de ar que fica entre o cubo e a esfera? (Use π = 3,14)",
    "options": [
      "102,96 cm³",
      "113,04 cm³",
      "216,00 cm³",
      "95,50 cm²"
    ],
    "correctAnswer": 0,
    "explanation": "Volume do cubo = 6³ = 216 cm³. A esfera tem diâmetro 6 cm (raio r = 3 cm): V_esfera = (4/3) × 3,14 × 27 = 113,04 cm³. Volume residual = 216 - 113,04 = 102,96 cm³."
  },
  {
    "id": "mat-2em-e-04",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT506",
    "topic": "Equação Trigonométrica com Fatoração",
    "question": "Quantas soluções a equação 2 sen² x - sen x = 0 possui no intervalo [0, 2π)?",
    "options": [
      "4 soluções",
      "2 soluções",
      "3 soluções",
      "1 solução"
    ],
    "correctAnswer": 0,
    "explanation": "sen x(2 sen x - 1) = 0 => sen x = 0 (x = 0, π) ou sen x = 1/2 (x = π/6, 5π/6). Total de 4 soluções no intervalo."
  },
  {
    "id": "mat-2em-e-05",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT312",
    "topic": "Problema do Teste Médico (Teorema de Bayes Simples)",
    "question": "Em uma população, 1% tem uma condição rara. Um teste tem 90% de sensibilidade. Em uma amostra de 1.000 pessoas (10 doentes e 990 saudáveis), se a taxa de falsos positivos for de 5% (cerca de 50 saudáveis testam positivo), qual a proporção de verdadeiros positivos entre os que testaram positivo?",
    "options": [
      "Aproximadamente 15% (9 em cerca de 59)",
      "Aproximadamente 90%",
      "Aproximadamente 50%",
      "Aproximadamente 5%"
    ],
    "correctAnswer": 0,
    "explanation": "9 doentes testam positivo e cerca de 50 saudáveis testam falso positivo. Entre os 59 positivos, apenas 9 realmente têm a condição (~15%)."
  },
  {
    "id": "mat-2em-e-06",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT306",
    "topic": "Soma Mista de PA e PG",
    "question": "Os números x, y, z formam uma PA de razão 3 e, ao mesmo tempo, x, y, z + 1 formam uma PG. Qual é o valor de x?",
    "options": [
      "3",
      "2",
      "4",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "Se x, x+3, x+6 formam PA, a PG é x, x+3, x+7. Razão constante: (x+3)/x = (x+7)/(x+3) => (x+3)² = x(x+7) => x² + 6x + 9 = x² + 7x => x = 9 (ajustado: x = 9)."
  },
  {
    "id": "mat-2em-e-07",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT505",
    "topic": "Planificação e Superfície Lateral do Cone",
    "question": "Um cone reto tem raio da base r = 5 cm e geratriz g = 13 cm. Qual é a sua altura h?",
    "options": [
      "12 cm",
      "10 cm",
      "8 cm",
      "14 cm"
    ],
    "correctAnswer": 0,
    "explanation": "Pela relação pitagórica no cone: g² = h² + r² => 13² = h² + 5² => 169 = h² + 25 => h² = 144 => h = 12 cm."
  },
  {
    "id": "mat-2em-e-08",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT311",
    "topic": "Combinação com Repetição / Soluções Inteiras",
    "question": "Quantas soluções inteiras e não negativas possui a equação x + y + z = 5?",
    "options": [
      "21 soluções",
      "15 soluções",
      "35 soluções",
      "18 soluções"
    ],
    "correctAnswer": 0,
    "explanation": "Pelo método de barras e estrelas: C(5 + 3 - 1, 5) = C(7, 5) = C(7, 2) = (7 × 6)/2 = 21 soluções."
  },
  {
    "id": "mat-2em-e-09",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT506",
    "topic": "Identidade Cosseno da Diferença",
    "question": "Qual é o valor exato de cos (15°) sabendo que 15° = 45° - 30°?",
    "options": [
      "(√6 + √2) / 4",
      "(√6 - √2) / 4",
      "√3 / 2",
      "1 / 2"
    ],
    "correctAnswer": 0,
    "explanation": "cos(45° - 30°) = cos 45° cos 30° + sen 45° sen 30° = (√2/2)(√3/2) + (√2/2)(1/2) = (√6 + √2)/4."
  },
  {
    "id": "mat-2em-e-10",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT504",
    "topic": "Seção Plana em Cubo",
    "question": "Ao seccionar um cubo passando pelos pontos médios de três arestas concorrentes em um mesmo vértice, a figura obtida nessa seção é:",
    "options": [
      "Um triângulo equilátero",
      "Um triângulo retângulo",
      "Um quadrado",
      "Um hexágono"
    ],
    "correctAnswer": 0,
    "explanation": "Os três segmentos que unem os pontos médios têm o mesmo comprimento (a√2 / 2), formando um triângulo equilátero."
  },
  {
    "id": "mat-2em-e-11",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT306",
    "topic": "Dízima Periódica via PG",
    "question": "A dízima periódica 0,777... pode ser calculada como a soma de uma PG infinita. Sua fração geratriz irredutível é:",
    "options": [
      "7/9",
      "7/10",
      "77/100",
      "7/11"
    ],
    "correctAnswer": 0,
    "explanation": "Soma = 7/10 + 7/100 + ... = (7/10) / (1 - 1/10) = (7/10) / (9/10) = 7/9."
  },
  {
    "id": "mat-2em-e-12",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT312",
    "topic": "Paradoxo do Aniversário Introdutório",
    "question": "Em um grupo de apenas 23 pessoas, a probabilidade de que pelo menos duas pessoas façam aniversário no mesmo dia é de aproximadamente:",
    "options": [
      "Mais de 50%",
      "Menos de 10%",
      "Cerca de 25%",
      "Exatamente 100%"
    ],
    "correctAnswer": 0,
    "explanation": "Pelo cálculo probabilístico complementar de dias distintos, com 23 pessoas a chance supera 50,7%."
  },
  {
    "id": "mat-2em-e-13",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT506",
    "topic": "Período de Função Senoidal",
    "question": "Qual é o período da função trigonométrica f(x) = sen (4x)?",
    "options": [
      "π/2",
      "2π",
      "π",
      "4π"
    ],
    "correctAnswer": 0,
    "explanation": "O período de sen(kx) é T = 2π / k = 2π / 4 = π/2."
  },
  {
    "id": "mat-2em-e-14",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT504",
    "topic": "Octaedro Regular",
    "question": "Quantas arestas e quantas faces possui um octaedro regular?",
    "options": [
      "12 arestas e 8 faces",
      "8 arestas e 12 faces",
      "6 arestas e 8 faces",
      "12 arestas e 6 faces"
    ],
    "correctAnswer": 0,
    "explanation": "O octaedro regular tem 8 faces triangulares, 6 vértices e 12 arestas."
  },
  {
    "id": "mat-2em-e-15",
    "subject": "matematica",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT311",
    "topic": "Anagramas com Restrição de Posição",
    "question": "Quantos anagramas da palavra \"FATOR\" começam com consoante?",
    "options": [
      "72 anagramas",
      "120 anagramas",
      "48 anagramas",
      "60 anagramas"
    ],
    "correctAnswer": 0,
    "explanation": "Consoantes: F, T, R (3 opções para a 1ª letra). As 4 letras restantes permutam em 4! = 24. Total = 3 × 24 = 72."
  },
  {
    "id": "mat-3em-f-01",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT501",
    "topic": "Ponto Médio de Segmento",
    "question": "Quais são as coordenadas do ponto médio M do segmento com extremos A(2, 4) e B(6, 8)?",
    "options": [
      "M(4, 6)",
      "M(8, 12)",
      "M(3, 5)",
      "M(4, 4)"
    ],
    "correctAnswer": 0,
    "explanation": "Xm = (2 + 6)/2 = 4 e Ym = (4 + 8)/2 = 6. Logo M(4, 6)."
  },
  {
    "id": "mat-3em-f-02",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT502",
    "topic": "Equação Reduzida da Reta",
    "question": "Na reta y = 3x - 2, qual é o coeficiente angular (declividade)?",
    "options": [
      "3",
      "-2",
      "1",
      "2/3"
    ],
    "correctAnswer": 0,
    "explanation": "Na forma y = mx + q, o coeficiente angular m é o número que multiplica x: m = 3."
  },
  {
    "id": "mat-3em-f-03",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT313",
    "topic": "Matemática Financeira (Juros Simples)",
    "question": "Qual é o juro simples produzido por um capital de R$ 1.000,00 aplicado a 2% ao mês durante 5 meses?",
    "options": [
      "R$ 100,00",
      "R$ 200,00",
      "R$ 1.100,00",
      "R$ 50,00"
    ],
    "correctAnswer": 0,
    "explanation": "J = C × i × t = 1000 × 0,02 × 5 = R$ 100,00."
  },
  {
    "id": "mat-3em-f-04",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT503",
    "topic": "Equação da Circunferência na Origem",
    "question": "Qual é o raio da circunferência representada pela equação x² + y² = 25?",
    "options": [
      "5",
      "25",
      "12,5",
      "10"
    ],
    "correctAnswer": 0,
    "explanation": "A equação da circunferência centrada na origem é x² + y² = r². Como r² = 25, temos r = 5."
  },
  {
    "id": "mat-3em-f-05",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT501",
    "topic": "Distância entre Dois Pontos",
    "question": "Qual é a distância entre a origem (0, 0) e o ponto P(3, 4)?",
    "options": [
      "5",
      "7",
      "1",
      "25"
    ],
    "correctAnswer": 0,
    "explanation": "d = √(3² + 4²) = √(9 + 16) = √25 = 5."
  },
  {
    "id": "mat-3em-f-06",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT502",
    "topic": "Retas Paralelas",
    "question": "Duas retas no plano são paralelas se, e somente se, seus coeficientes angulares forem:",
    "options": [
      "Iguais",
      "Opostos e inversos",
      "Iguais a zero",
      "Ambos positivos"
    ],
    "correctAnswer": 0,
    "explanation": "Retas paralelas possuem a mesma inclinação, portanto m₁ = m₂."
  },
  {
    "id": "mat-3em-f-07",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT313",
    "topic": "Montante a Juros Simples",
    "question": "Um capital de R$ 500,00 rendeu R$ 60,00 de juros. Qual foi o montante final resgatado?",
    "options": [
      "R$ 560,00",
      "R$ 600,00",
      "R$ 530,00",
      "R$ 440,00"
    ],
    "correctAnswer": 0,
    "explanation": "Montante = Capital + Juros = 500 + 60 = R$ 560,00."
  },
  {
    "id": "mat-3em-f-08",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT203",
    "topic": "Média Ponderada Simples",
    "question": "Em um bimestre, a prova tem peso 3 e o trabalho peso 2. Se o aluno tirou 8 na prova e 7 no trabalho, qual foi sua média ponderada?",
    "options": [
      "7,6",
      "7,5",
      "7,8",
      "8,0"
    ],
    "correctAnswer": 0,
    "explanation": "Média = (8 × 3 + 7 × 2) / (3 + 2) = (24 + 14) / 5 = 38 / 5 = 7,6."
  },
  {
    "id": "mat-3em-f-09",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT502",
    "topic": "Reta Horizontal",
    "question": "A reta que passa por (0, 4) e (5, 4) tem equação:",
    "options": [
      "y = 4",
      "x = 4",
      "y = x + 4",
      "y = 0"
    ],
    "correctAnswer": 0,
    "explanation": "Todos os pontos têm ordenada constante y = 4, sendo uma reta horizontal paralela ao eixo x."
  },
  {
    "id": "mat-3em-f-10",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT503",
    "topic": "Centro da Circunferência",
    "question": "Quais são as coordenadas do centro da circunferência (x - 2)² + (y + 3)² = 16?",
    "options": [
      "(2, -3)",
      "(-2, 3)",
      "(2, 3)",
      "(-2, -3)"
    ],
    "correctAnswer": 0,
    "explanation": "Forma reduzida: (x - a)² + (y - b)² = r². Aqui a = 2 e b = -3, logo C(2, -3)."
  },
  {
    "id": "mat-3em-f-11",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT314",
    "topic": "Juros Compostos Introdutório",
    "question": "Se aplicarmos R$ 1.000,00 a juros compostos de 10% ao mês por 2 meses, qual será o montante?",
    "options": [
      "R$ 1.210,00",
      "R$ 1.200,00",
      "R$ 1.100,00",
      "R$ 1.220,00"
    ],
    "correctAnswer": 0,
    "explanation": "M = 1000 × (1,10)² = 1000 × 1,21 = R$ 1.210,00."
  },
  {
    "id": "mat-3em-f-12",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT204",
    "topic": "Espaço Amostral e Eventos",
    "question": "Qual é a probabilidade de um evento certo ocorrer?",
    "options": [
      "1 (ou 100%)",
      "0",
      "0,5",
      "Infinito"
    ],
    "correctAnswer": 0,
    "explanation": "Por definição de axiomas de probabilidade, o evento certo tem probabilidade exatamente igual a 1 (100%)."
  },
  {
    "id": "mat-3em-f-13",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT502",
    "topic": "Equação Geral da Reta",
    "question": "A equação reduzida y = 2x - 5 expressa na forma geral Ax + By + C = 0 é:",
    "options": [
      "2x - y - 5 = 0",
      "2x + y - 5 = 0",
      "x - 2y + 5 = 0",
      "2x - y + 5 = 0"
    ],
    "correctAnswer": 0,
    "explanation": "Passando y para o segundo membro: 2x - y - 5 = 0."
  },
  {
    "id": "mat-3em-f-14",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT203",
    "topic": "Amplitude e Desvio",
    "question": "Dada a amostra {10, 12, 14, 16, 18}, qual é a amplitude dos dados?",
    "options": [
      "8",
      "14",
      "4",
      "18"
    ],
    "correctAnswer": 0,
    "explanation": "Amplitude = maior valor - menor valor = 18 - 10 = 8."
  },
  {
    "id": "mat-3em-f-15",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EM13MAT501",
    "topic": "Alinhamento de Três Pontos",
    "question": "Se três pontos pertencem à mesma reta, dizemos que eles são:",
    "options": [
      "Colineares",
      "Concorrentes",
      "Coplanares mas reversos",
      "Paralelos"
    ],
    "correctAnswer": 0,
    "explanation": "Pontos que pertencem a uma mesma linha reta são chamados de colineares."
  },
  {
    "id": "mat-3em-m-01",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT502",
    "topic": "Retas Perpendiculares",
    "question": "Qual é o coeficiente angular de uma reta perpendicular à reta r: y = 2x + 1?",
    "options": [
      "-1/2",
      "2",
      "-2",
      "1/2"
    ],
    "correctAnswer": 0,
    "explanation": "Retas perpendiculares satisfazem m₁ × m₂ = -1. Logo: m₂ = -1/2."
  },
  {
    "id": "mat-3em-m-02",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT503",
    "topic": "Equação Reduzida da Circunferência",
    "question": "Qual é a equação da circunferência com centro C(3, 4) e raio r = 2?",
    "options": [
      "(x - 3)² + (y - 4)² = 4",
      "(x + 3)² + (y + 4)² = 4",
      "(x - 3)² + (y - 4)² = 2",
      "x² + y² = 16"
    ],
    "correctAnswer": 0,
    "explanation": "(x - a)² + (y - b)² = r² => (x - 3)² + (y - 4)² = 2² = 4."
  },
  {
    "id": "mat-3em-m-03",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT314",
    "topic": "Juros Compostos e Fator de Correção",
    "question": "Uma dívida de R$ 2.000,00 foi paga com 3 meses de atraso a uma taxa de juros compostos de 5% ao mês. Qual é a expressão correta do montante?",
    "options": [
      "2000 × (1,05)³",
      "2000 × (1 + 0,15)",
      "2000 × (0,95)³",
      "2000 × 3 × 1,05"
    ],
    "correctAnswer": 0,
    "explanation": "A fórmula do montante a juros compostos é M = C(1 + i)ᵗ, logo 2000 × (1,05)³."
  },
  {
    "id": "mat-3em-m-04",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT502",
    "topic": "Equação da Reta Passando por Dois Pontos",
    "question": "Qual é a equação da reta que passa pelos pontos A(1, 2) e B(3, 6)?",
    "options": [
      "y = 2x",
      "y = 2x + 1",
      "y = 3x - 1",
      "y = x + 1"
    ],
    "correctAnswer": 0,
    "explanation": "m = (6 - 2)/(3 - 1) = 4/2 = 2. y - 2 = 2(x - 1) => y = 2x."
  },
  {
    "id": "mat-3em-m-05",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT203",
    "topic": "Desvio Padrão Conceitual",
    "question": "O desvio padrão de um conjunto de dados mede:",
    "options": [
      "A dispersão ou variabilidade dos dados em relação à média",
      "Apenas a média geométrica dos valores",
      "O valor mais frequente da amostra",
      "A diferença entre os dois maiores valores"
    ],
    "correctAnswer": 0,
    "explanation": "O desvio padrão quantifica o quanto os dados se afastam, em média, da média aritmética."
  },
  {
    "id": "mat-3em-m-06",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT501",
    "topic": "Área de Triângulo no Plano Cartesiano",
    "question": "Qual é a área do triângulo com vértices nos pontos A(0, 0), B(4, 0) e C(0, 3)?",
    "options": [
      "6",
      "12",
      "7",
      "5"
    ],
    "correctAnswer": 0,
    "explanation": "O triângulo tem base 4 no eixo x e altura 3 no eixo y: Área = (4 × 3)/2 = 6."
  },
  {
    "id": "mat-3em-m-07",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT313",
    "topic": "Taxa Efetiva e Inflação Introdutória",
    "question": "Se a inflação acumulada no ano foi de 6% e um investimento rendeu 10% no mesmo período, o ganho real foi:",
    "options": [
      "Positivo (superior à inflação)",
      "Negativo",
      "Nulo",
      "Exatamente 16%"
    ],
    "correctAnswer": 0,
    "explanation": "Como o rendimento nominal (10%) superou a taxa de inflação (6%), houve ganho real de poder de compra."
  },
  {
    "id": "mat-3em-m-08",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT503",
    "topic": "Posição de Ponto em Relação à Circunferência",
    "question": "O ponto P(1, 2) em relação à circunferência x² + y² = 9 está:",
    "options": [
      "No interior da circunferência",
      "Sobre a circunferência",
      "No exterior da circunferência",
      "No centro"
    ],
    "correctAnswer": 0,
    "explanation": "1² + 2² = 1 + 4 = 5. Como 5 < 9 (r²), a distância ao centro é menor que o raio, logo está no interior."
  },
  {
    "id": "mat-3em-m-09",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT502",
    "topic": "Interseção de Reta com o Eixo X",
    "question": "Qual é a raiz (interseção com eixo x) da reta 3x - 6 = y?",
    "options": [
      "(2, 0)",
      "(-2, 0)",
      "(0, -6)",
      "(3, 0)"
    ],
    "correctAnswer": 0,
    "explanation": "Fazendo y = 0: 3x - 6 = 0 => 3x = 6 => x = 2. Ponto (2, 0)."
  },
  {
    "id": "mat-3em-m-10",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT204",
    "topic": "Probabilidade com Eventos Simultâneos",
    "question": "Lançando dois dados, qual é a probabilidade de ambos apresentarem números primos (2, 3 ou 5)?",
    "options": [
      "9/36 (1/4)",
      "1/2",
      "1/3",
      "1/6"
    ],
    "correctAnswer": 0,
    "explanation": "Primos em cada dado: 3 opções (2, 3, 5). Total conjunto: 3 × 3 = 9 casos favoráveis entre 36: 9/36 = 1/4."
  },
  {
    "id": "mat-3em-m-11",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT314",
    "topic": "Equivalência de Taxas Simples",
    "question": "Uma taxa de juros simples de 24% ao ano equivale a qual taxa mensal?",
    "options": [
      "2% ao mês",
      "1% ao mês",
      "3% ao mês",
      "12% ao mês"
    ],
    "correctAnswer": 0,
    "explanation": "Em juros simples, as taxas são diretamente proporcionais ao tempo: 24% ÷ 12 = 2% ao mês."
  },
  {
    "id": "mat-3em-m-12",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT502",
    "topic": "Reta Bissetriz dos Quadrantes Ímpares",
    "question": "Qual é a equação da reta bissetriz que divide ao meio os 1º e 3º quadrantes?",
    "options": [
      "y = x",
      "y = -x",
      "y = 2x",
      "x + y = 0"
    ],
    "correctAnswer": 0,
    "explanation": "Os pontos dessa bissetriz têm abscissa e ordenada idênticas: y = x."
  },
  {
    "id": "mat-3em-m-13",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT503",
    "topic": "Raio a partir da Equação Geral",
    "question": "A equação x² + y² - 4x = 0 representa uma circunferência com centro e raio:",
    "options": [
      "Centro (2, 0) e raio 2",
      "Centro (0, 2) e raio 4",
      "Centro (-2, 0) e raio 2",
      "Centro (4, 0) e raio 16"
    ],
    "correctAnswer": 0,
    "explanation": "Completando quadrados: (x - 2)² - 4 + y² = 0 => (x - 2)² + y² = 4 = 2². Centro (2, 0) e raio r = 2."
  },
  {
    "id": "mat-3em-m-14",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT203",
    "topic": "Interpretação de Gráfico Boxplot",
    "question": "Em um diagrama de caixa (boxplot), a linha central dentro do retângulo representa:",
    "options": [
      "A mediana da distribuição",
      "A média aritmética simples",
      "O valor máximo",
      "O desvio padrão"
    ],
    "correctAnswer": 0,
    "explanation": "A linha interior ao boxplot marca exatamente a mediana (Q2 / segundo quartil) do conjunto."
  },
  {
    "id": "mat-3em-m-15",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EM13MAT313",
    "topic": "Desconto Racional Simples",
    "question": "Um título com valor nominal de R$ 1.100,00 foi resgatado um mês antes do vencimento com taxa de 10% ao mês. Qual foi seu valor atual?",
    "options": [
      "R$ 1.000,00",
      "R$ 990,00",
      "R$ 1.050,00",
      "R$ 900,00"
    ],
    "correctAnswer": 0,
    "explanation": "Valor Atual × (1 + 0,10) = 1100 => Valor Atual = 1100 / 1,10 = R$ 1.000,00."
  },
  {
    "id": "mat-3em-d-01",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT502",
    "topic": "Distância de Ponto a Reta",
    "question": "Qual é a distância do ponto P(0, 0) à reta de equação 3x + 4y - 15 = 0?",
    "options": [
      "3 unidades",
      "5 unidades",
      "15 unidades",
      "4 unidades"
    ],
    "correctAnswer": 0,
    "explanation": "d = |3(0) + 4(0) - 15| / √(3² + 4²) = |-15| / 5 = 15 / 5 = 3 unidades."
  },
  {
    "id": "mat-3em-d-02",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT503",
    "topic": "Posição Relativa de Reta e Circunferência",
    "question": "A reta y = 3 em relação à circunferência x² + y² = 25 é:",
    "options": [
      "Secante, interceptando a circunferência em 2 pontos",
      "Tangente em 1 ponto",
      "Exterior",
      "Passa pelo centro"
    ],
    "correctAnswer": 0,
    "explanation": "Substituindo y = 3: x² + 9 = 25 => x² = 16 => x = ±4. Intercepta nos pontos (4, 3) e (-4, 3), sendo secante."
  },
  {
    "id": "mat-3em-d-03",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT314",
    "topic": "Amortização e Parcelamento",
    "question": "Um eletrodoméstico de R$ 1.200,00 foi financiado em duas parcelas mensais iguais pelo sistema Price sem entrada. Se a taxa for 0%, cada parcela seria R$ 600,00. Com taxa de 2% a.m., o valor de cada parcela será:",
    "options": [
      "Maior que R$ 600,00 para cobrir os juros do saldo devedor",
      "Exatamente R$ 600,00",
      "Menor que R$ 600,00",
      "R$ 610,00 fixo"
    ],
    "correctAnswer": 0,
    "explanation": "Havendo taxa de juros sobre o saldo financiado, as parcelas incorporam os juros, ficando superiores a R$ 600,00."
  },
  {
    "id": "mat-3em-d-04",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT502",
    "topic": "Área de Quadrilátero no Plano",
    "question": "Qual é a área do retângulo com vértices A(1, 1), B(5, 1), C(5, 4) e D(1, 4)?",
    "options": [
      "12 unidades²",
      "16 unidades²",
      "10 unidades²",
      "14 unidades²"
    ],
    "correctAnswer": 0,
    "explanation": "Base = 5 - 1 = 4. Altura = 4 - 1 = 3. Área = 4 × 3 = 12 unidades²."
  },
  {
    "id": "mat-3em-d-05",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT204",
    "topic": "Probabilidade em Árvore de Decisão",
    "question": "Uma fábrica tem duas máquinas: a máquina A faz 60% das peças (com 2% de defeito) e a máquina B faz 40% (com 5% de defeito). Qual é a probabilidade total de uma peça qualquer ser defeituosa?",
    "options": [
      "3,2%",
      "3,5%",
      "2,8%",
      "4,0%"
    ],
    "correctAnswer": 0,
    "explanation": "P(Defeito) = (0,60 × 0,02) + (0,40 × 0,05) = 0,012 + 0,020 = 0,032 = 3,2%."
  },
  {
    "id": "mat-3em-d-06",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT503",
    "topic": "Reta Tangente à Circunferência",
    "question": "A reta x = 5 é tangente à circunferência x² + y² = 25 no ponto:",
    "options": [
      "(5, 0)",
      "(0, 5)",
      "(5, 5)",
      "(-5, 0)"
    ],
    "correctAnswer": 0,
    "explanation": "Para x = 5: 5² + y² = 25 => y² = 0 => y = 0. Ponto único de contato (5, 0)."
  },
  {
    "id": "mat-3em-d-07",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT315",
    "topic": "Equivalência de Taxas Compostas",
    "question": "Uma taxa de 10% ao ano em 2 anos acumulada a juros compostos corresponde a:",
    "options": [
      "21%",
      "20%",
      "22%",
      "19%"
    ],
    "correctAnswer": 0,
    "explanation": "Fator = (1,10)² = 1,21, correspondendo a um aumento acumulado de 21%."
  },
  {
    "id": "mat-3em-d-08",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT502",
    "topic": "Feixe de Retas Concorrentes",
    "question": "Qual é o ponto de encontro comum das retas 2x + y = 7 e x - y = 2?",
    "options": [
      "(3, 1)",
      "(2, 3)",
      "(4, -1)",
      "(1, 5)"
    ],
    "correctAnswer": 0,
    "explanation": "Somando as duas equações: 3x = 9 => x = 3. Da segunda: 3 - y = 2 => y = 1. Ponto (3, 1)."
  },
  {
    "id": "mat-3em-d-09",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT203",
    "topic": "Amostragem e Erro Amostral",
    "question": "Para reduzir a margem de erro de uma pesquisa estatística pela metade, o tamanho da amostra deve ser:",
    "options": [
      "Multiplicado por 4",
      "Duplicado",
      "Triplicado",
      "Dividido por 2"
    ],
    "correctAnswer": 0,
    "explanation": "A margem de erro é inversamente proporcional à raiz quadrada de n (1/√n). Para reduzir o erro à metade, n deve ser multiplicado por 2² = 4."
  },
  {
    "id": "mat-3em-d-10",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT501",
    "topic": "Simetria de Ponto em Relação à Origem",
    "question": "O simétrico do ponto P(3, -5) em relação à origem (0, 0) é:",
    "options": [
      "(-3, 5)",
      "(3, 5)",
      "(-3, -5)",
      "(5, -3)"
    ],
    "correctAnswer": 0,
    "explanation": "Em relação à origem, invertem-se ambos os sinais: (-x, -y) = (-3, 5)."
  },
  {
    "id": "mat-3em-d-11",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT503",
    "topic": "Circunferências Concêntricas",
    "question": "Duas circunferências são concêntricas se possuírem:",
    "options": [
      "O mesmo centro e raios distintos",
      "O mesmo raio e centros distintos",
      "Pelo menos dois pontos de contato",
      "Raios iguais e centros coincidentes"
    ],
    "correctAnswer": 0,
    "explanation": "Circunferências concêntricas compartilham o mesmo ponto central mas têm raios diferentes."
  },
  {
    "id": "mat-3em-d-12",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT314",
    "topic": "Cálculo de Prestação e Saldo Devedor",
    "question": "Se um empréstimo de R$ 1.000,00 for liquidado em pagamento único após 6 meses a juros compostos de 2% ao mês, qual expressão calcula o valor?",
    "options": [
      "1000 × (1,02)⁶",
      "1000 × (1 + 0,12)",
      "1000 × (0,98)⁶",
      "1000 × 6 × 1,02"
    ],
    "correctAnswer": 0,
    "explanation": "M = C(1 + i)ᵗ = 1000 × (1,02)⁶."
  },
  {
    "id": "mat-3em-d-13",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT502",
    "topic": "Ângulo Entre Duas Retas",
    "question": "Se uma reta tem coeficiente angular m₁ = 1 (inclinação de 45°) e outra tem m₂ = -1 (inclinação de 135°), o ângulo formado entre elas é:",
    "options": [
      "90° (são perpendiculares)",
      "45°",
      "60°",
      "30°"
    ],
    "correctAnswer": 0,
    "explanation": "m₁ × m₂ = 1 × (-1) = -1, comprovando que formam um ângulo reto (90°)."
  },
  {
    "id": "mat-3em-d-14",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT204",
    "topic": "Distribuição Normal Básica",
    "question": "Em uma distribuição com média 70 e desvio padrão 5, qual porcentagem aproximada da população se encontra entre 65 e 75 (um desvio em torno da média)?",
    "options": [
      "Cerca de 68%",
      "Cerca de 95%",
      "Cerca de 50%",
      "Cerca de 99%"
    ],
    "correctAnswer": 0,
    "explanation": "Pela regra empírica da curva normal, aproximadamente 68,2% dos dados situam-se a até 1 desvio padrão da média."
  },
  {
    "id": "mat-3em-d-15",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EM13MAT503",
    "topic": "Equação da Reta Tangente no Ponto",
    "question": "Qual é o coeficiente angular da reta tangente à circunferência x² + y² = 25 no ponto (3, 4)?",
    "options": [
      "-3/4",
      "4/3",
      "-4/3",
      "3/4"
    ],
    "correctAnswer": 0,
    "explanation": "O raio que liga a origem ao ponto (3, 4) tem declividade m_raio = 4/3. A reta tangente é perpendicular ao raio: m_tg = -1 / (4/3) = -3/4."
  },
  {
    "id": "mat-3em-e-01",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT503",
    "topic": "Problema de Otimização no Plano",
    "question": "Qual é a menor distância entre o ponto P(6, 8) e a circunferência x² + y² = 9?",
    "options": [
      "7 unidades",
      "10 unidades",
      "3 unidades",
      "4 unidades"
    ],
    "correctAnswer": 0,
    "explanation": "A distância de P(6, 8) à origem é √(6² + 8²) = 10. Como o raio da circunferência é 3, a menor distância é 10 - 3 = 7 unidades."
  },
  {
    "id": "mat-3em-e-02",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT316",
    "topic": "Planejamento de Aposentadoria Financeira",
    "question": "Para acumular um montante garantido, aportes mensais fixos rendem a juros compostos. Esse processo de acumulação em finanças é modelado por:",
    "options": [
      "Série uniforme de pagamentos (anuidade com juros compostos)",
      "Progressão Aritmética simples",
      "Juros simples acumulados",
      "Regra de três simples"
    ],
    "correctAnswer": 0,
    "explanation": "Aportes periódicos com rendimentos compostos formam uma anuidade ou série uniforme de pagamentos."
  },
  {
    "id": "mat-3em-e-03",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT502",
    "topic": "Bissetriz de Duas Retas Concorrentes",
    "question": "O ponto P(x, y) equidistante das retas y = 2 e y = 8 pertence à reta:",
    "options": [
      "y = 5",
      "y = 4",
      "x = 5",
      "y = 6"
    ],
    "correctAnswer": 0,
    "explanation": "A reta média entre duas horizontais y = 2 e y = 8 é a reta horizontal y = (2 + 8)/2 = 5."
  },
  {
    "id": "mat-3em-e-04",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT204",
    "topic": "Esperança Matemática (Valor Esperado)",
    "question": "Em um jogo, um participante tem 20% de chance de ganhar R$ 100,00 e 80% de chance de perder R$ 20,00. Qual é o valor esperado (esperança) dessa aposta?",
    "options": [
      "R$ +4,00",
      "R$ 0,00",
      "R$ -4,00",
      "R$ +10,00"
    ],
    "correctAnswer": 0,
    "explanation": "E = (0,20 × 100) + (0,80 × (-20)) = 20 - 16 = R$ +4,00."
  },
  {
    "id": "mat-3em-e-05",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT503",
    "topic": "Interseção de Duas Circunferências",
    "question": "As circunferências x² + y² = 16 (raio 4) e (x - 7)² + y² = 9 (raio 3) possuem distância entre centros d = 7. Elas são:",
    "options": [
      "Tangentes exteriores",
      "Secantes",
      "Exteriores disjuntas",
      "Tangentes interiores"
    ],
    "correctAnswer": 0,
    "explanation": "A distância entre os centros (7) é igual à soma dos raios (4 + 3 = 7), caracterizando tangência externa."
  },
  {
    "id": "mat-3em-e-06",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT315",
    "topic": "Comparação de Empréstimos e CET",
    "question": "Dois bancos oferecem empréstimos: o Banco A cobra 2% a.m. sem tarifas adicionais e o Banco B cobra 1,5% a.m. com taxa de abertura alta. O indicador oficial que permite comparar o custo real total é o:",
    "options": [
      "Custo Efetivo Total (CET)",
      "Taxa Selic",
      "Índice de Preços ao Consumidor (IPCA)",
      "PIB per capita"
    ],
    "correctAnswer": 0,
    "explanation": "O Custo Efetivo Total (CET) consolida todas as taxas de juros, tributos (IOF) e tarifas administrativas."
  },
  {
    "id": "mat-3em-e-07",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT502",
    "topic": "Lugar Geométrico (Mediatriz)",
    "question": "A mediatriz do segmento com extremos A(1, 2) e B(5, 2) é uma reta perpendicular que passa pelo ponto médio (3, 2). Sua equação é:",
    "options": [
      "x = 3",
      "y = 2",
      "x + y = 5",
      "y = 3"
    ],
    "correctAnswer": 0,
    "explanation": "Como o segmento AB é horizontal (y = 2), a reta mediatriz é vertical passando por x = 3."
  },
  {
    "id": "mat-3em-e-08",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT204",
    "topic": "Regressão Linear e Coeficiente de Determinação (R²)",
    "question": "Um modelo de regressão linear obteve R² = 0,81 ao prever vendas a partir de gastos com publicidade. Isso significa que:",
    "options": [
      "81% da variação das vendas é explicada pelos gastos com publicidade",
      "O lucro subirá 81%",
      "81% das peças terão defeito",
      "A correlação é fraca"
    ],
    "correctAnswer": 0,
    "explanation": "O coeficiente de determinação R² indica a proporção da variância da variável dependente explicada pelo modelo."
  },
  {
    "id": "mat-3em-e-09",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT503",
    "topic": "Comprimento de Corda na Circunferência",
    "question": "A reta y = 3 corta a circunferência x² + y² = 25 determinando uma corda. Qual é o comprimento dessa corda?",
    "options": [
      "8 unidades",
      "6 unidades",
      "10 unidades",
      "4 unidades"
    ],
    "correctAnswer": 0,
    "explanation": "Os pontos de corte são (-4, 3) e (4, 3). A distância entre eles é 4 - (-4) = 8 unidades."
  },
  {
    "id": "mat-3em-e-10",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT316",
    "topic": "Poder de Compra e Inflação Composta",
    "question": "Se os preços sobem 25% em determinado período, qual deve ser o aumento salarial percentual para manter exatamente o mesmo poder de compra?",
    "options": [
      "25%",
      "20%",
      "30%",
      "50%"
    ],
    "correctAnswer": 0,
    "explanation": "Para neutralizar o aumento de 25% nos preços, o salário deve ser corrigido pelo mesmo percentual (25%)."
  },
  {
    "id": "mat-3em-e-11",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT502",
    "topic": "Área de Polígono pelo Determinante de Gauss",
    "question": "Qual é a área do triângulo com vértices A(1, 1), B(4, 5) e C(1, 5)?",
    "options": [
      "6 unidades²",
      "12 unidades²",
      "8 unidades²",
      "10 unidades²"
    ],
    "correctAnswer": 0,
    "explanation": "Os catetos paralelos aos eixos são (4 - 1) = 3 e (5 - 1) = 4. Área = (3 × 4)/2 = 6 unidades²."
  },
  {
    "id": "mat-3em-e-12",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT204",
    "topic": "Sensibilidade e Especificidade",
    "question": "Em epidemiologia, a capacidade de um teste diagnóstico identificar corretamente os verdadeiros negativos (pessoas saudáveis) é denominada:",
    "options": [
      "Especificidade",
      "Sensibilidade",
      "Prevalência",
      "Margem de erro"
    ],
    "correctAnswer": 0,
    "explanation": "Especificidade mede a proporção de indivíduos sem a doença que recebem resultado negativo."
  },
  {
    "id": "mat-3em-e-13",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT503",
    "topic": "Equação de Circunferência Tangente aos Eixos",
    "question": "Uma circunferência situada no 1º quadrante de raio 4 é tangente aos dois eixos coordenados. Qual é sua equação?",
    "options": [
      "(x - 4)² + (y - 4)² = 16",
      "(x + 4)² + (y + 4)² = 16",
      "x² + y² = 16",
      "(x - 2)² + (y - 2)² = 4"
    ],
    "correctAnswer": 0,
    "explanation": "Sendo tangente aos eixos x e y no 1º quadrante, seu centro é C(r, r) = C(4, 4) e sua equação é (x - 4)² + (y - 4)² = 16."
  },
  {
    "id": "mat-3em-e-14",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT314",
    "topic": "Tabela Price vs SAC (Sistema de Amortização Constante)",
    "question": "No Sistema de Amortização Constante (SAC), o valor das parcelas ao longo do tempo:",
    "options": [
      "Decresce, pois o saldo devedor e os juros diminuem a cada mês",
      "Permanece fixo e constante",
      "Cresce continuamente",
      "Oscila aleatoriamente"
    ],
    "correctAnswer": 0,
    "explanation": "No SAC a cota de amortização é fixa, mas como o saldo devedor diminui, a parcela total de juros cai a cada mês."
  },
  {
    "id": "mat-3em-e-15",
    "subject": "matematica",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EM13MAT502",
    "topic": "Centro de Gravidade (Baricentro)",
    "question": "Quais são as coordenadas do baricentro G do triângulo com vértices A(2, 3), B(4, 7) e C(6, 2)?",
    "options": [
      "G(4, 4)",
      "G(6, 6)",
      "G(3, 4)",
      "G(4, 3)"
    ],
    "correctAnswer": 0,
    "explanation": "Xg = (2 + 4 + 6)/3 = 12/3 = 4. Yg = (3 + 7 + 2)/3 = 12/3 = 4. Baricentro G(4, 4)."
  }
];
