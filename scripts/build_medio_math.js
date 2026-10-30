import fs from 'fs';

const list = [];

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
// 1º ANO ENSINO MÉDIO - MATEMÁTICA (EM13MAT)
// ============================================================================

// FÁCIL (15 questões)
q('mat-1em-f-01', '1º ano EM', 'facil', 20, 'EM13MAT101', 'Conjuntos Numéricos',
  'O número √2 pertence a qual conjunto numérico fundamental?',
  ['Números Irracionais', 'Números Racionais', 'Números Inteiros', 'Números Naturais'],
  '√2 é um decimal infinito e não periódico, pertencendo ao conjunto dos Números Irracionais (I).');

q('mat-1em-f-02', '1º ano EM', 'facil', 20, 'EM13MAT301', 'Conceito de Função',
  'Dada a função f(x) = 3x - 5, qual é o valor numérico de f(2)?',
  ['1', '6', '-1', '11'],
  'f(2) = 3(2) - 5 = 6 - 5 = 1.');

q('mat-1em-f-03', '1º ano EM', 'facil', 20, 'EM13MAT302', 'Coeficiente Linear',
  'Na função afim f(x) = 2x + 7, o coeficiente linear indica o ponto em que a reta intercepta o eixo y. Esse ponto é:',
  ['(0, 7)', '(7, 0)', '(0, 2)', '(2, 7)'],
  'Quando x = 0, f(0) = 7. O ponto de interseção com o eixo y é (0, 7).');

q('mat-1em-f-04', '1º ano EM', 'facil', 20, 'EM13MAT401', 'Inequação do 1º Grau',
  'Qual é a solução da inequação 2x + 4 > 10 no conjunto dos números reais?',
  ['x > 3', 'x > 7', 'x < 3', 'x ≥ 3'],
  '2x > 10 - 4 => 2x > 6 => x > 3.');

q('mat-1em-f-05', '1º ano EM', 'facil', 20, 'EM13MAT302', 'Raiz da Função Quadrática',
  'Quais são os zeros reais da função quadrática f(x) = x² - 9?',
  ['x = 3 e x = -3', 'x = 9 e x = -9', 'Apenas x = 3', 'x = 0 e x = 9'],
  'x² - 9 = 0 => x² = 9 => x = ±3.');

q('mat-1em-f-06', '1º ano EM', 'facil', 20, 'EM13MAT102', 'Intervalos Reais',
  'A notação [2, 5) representa todos os números reais x tais que:',
  ['2 ≤ x < 5', '2 < x ≤ 5', '2 ≤ x ≤ 5', '2 < x < 5'],
  'Colchete fechado em 2 inclui o extremo (≤ 2) e aberto em 5 exclui o extremo (< 5).');

q('mat-1em-f-07', '1º ano EM', 'facil', 20, 'EM13MAT303', 'Função Exponencial Básica',
  'Dada a função exponencial f(x) = 2ˣ, qual é o valor de f(4)?',
  ['16', '8', '32', '64'],
  'f(4) = 2⁴ = 16.');

q('mat-1em-f-08', '1º ano EM', 'facil', 20, 'EM13MAT304', 'Definição de Logaritmo',
  'Qual é o valor de log₂ 8?',
  ['3', '4', '2', '8'],
  'Por definição, 2³ = 8, logo log₂ 8 = 3.');

q('mat-1em-f-09', '1º ano EM', 'facil', 20, 'EM13MAT302', 'Concavidade da Parábola',
  'Na função quadrática f(x) = -2x² + 4x + 1, a parábola tem concavidade voltada para:',
  ['Baixo, pois o coeficiente a é negativo (a = -2)', 'Cima, pois a é negativo', 'Direita', 'Esquerda'],
  'Quando a < 0, a parábola tem a concavidade voltada para baixo e possui ponto de máximo.');

q('mat-1em-f-10', '1º ano EM', 'facil', 20, 'EM13MAT501', 'Trigonometria no Triângulo Retângulo',
  'Em um triângulo retângulo com ângulo de 30° e hipotenusa medindo 10 cm, quanto mede o cateto oposto?',
  ['5 cm', '5√3 cm', '10 cm', '2,5 cm'],
  'sen 30° = cateto oposto / hipotenusa => 1/2 = oposto / 10 => cateto oposto = 5 cm.');

q('mat-1em-f-11', '1º ano EM', 'facil', 20, 'EM13MAT301', 'Domínio de Função Racional',
  'Qual é o domínio da função f(x) = 1 / (x - 4) no conjunto dos números reais?',
  ['Todos os reais com exceção de x = 4 (R - {4})', 'Todos os reais positivos', 'Apenas x = 4', 'R - {0}'],
  'O denominador não pode ser zero: x - 4 ≠ 0 => x ≠ 4.');

q('mat-1em-f-12', '1º ano EM', 'facil', 20, 'EM13MAT101', 'Interseção de Conjuntos',
  'Se A = {1, 2, 3, 4} e B = {3, 4, 5, 6}, qual é o conjunto A ∩ B?',
  ['{3, 4}', '{1, 2, 3, 4, 5, 6}', '{1, 2}', '{5, 6}'],
  'A interseção é formada pelos elementos comuns a ambos os conjuntos: {3, 4}.');

q('mat-1em-f-13', '1º ano EM', 'facil', 20, 'EM13MAT302', 'Vértice Xv',
  'Qual é o x do vértice da parábola y = x² - 6x + 8?',
  ['3', '-3', '6', '4'],
  'Xv = -b / (2a) = -(-6) / (2 × 1) = 6 / 2 = 3.');

q('mat-1em-f-14', '1º ano EM', 'facil', 20, 'EM13MAT202', 'Média Aritmética de Dados',
  'Em uma pesquisa escolar, as idades coletadas foram: 15, 16, 16, 17. Qual é a média de idade?',
  ['16 anos', '15,5 anos', '16,5 anos', '17 anos'],
  'Média = (15 + 16 + 16 + 17) ÷ 4 = 64 ÷ 4 = 16 anos.');

q('mat-1em-f-15', '1º ano EM', 'facil', 20, 'EM13MAT304', 'Logaritmo na Base 10',
  'Qual é o valor de log₁₀ 100?',
  ['2', '10', '1', '100'],
  '10² = 100, logo log₁₀ 100 = 2.');

// MÉDIO (15 questões)
q('mat-1em-m-01', '1º ano EM', 'medio', 35, 'EM13MAT302', 'Coordenadas do Vértice',
  'Quais são as coordenadas completas do vértice (Xv, Yv) da função f(x) = x² - 4x + 3?',
  ['(2, -1)', '(2, 1)', '(-2, -1)', '(1, 0)'],
  'Xv = -(-4)/2 = 2. Yv = f(2) = 2² - 4(2) + 3 = 4 - 8 + 3 = -1. Vértice: (2, -1).');

q('mat-1em-m-02', '1º ano EM', 'medio', 35, 'EM13MAT303', 'Crescimento de População de Bactérias',
  'Uma colônia de bactérias dobra de tamanho a cada hora. Se inicialmente havia 500 bactérias, quantas haverá após 4 horas?',
  ['8.000 bactérias', '4.000 bactérias', '2.000 bactérias', '16.000 bactérias'],
  'N(t) = 500 × 2ᵗ. Para t = 4: N(4) = 500 × 2⁴ = 500 × 16 = 8.000 bactérias.');

q('mat-1em-m-03', '1º ano EM', 'medio', 35, 'EM13MAT401', 'Inequação Produto',
  'Qual é o conjunto solução da inequação (x - 2)(x - 5) < 0 nos reais?',
  ['2 < x < 5', 'x < 2 ou x > 5', 'x > 5', 'x ≤ 2'],
  'As raízes são 2 e 5. A parábola correspondente tem a concavidade para cima, sendo negativa entre as raízes: 2 < x < 5.');

q('mat-1em-m-04', '1º ano EM', 'medio', 35, 'EM13MAT304', 'Propriedades dos Logaritmos',
  'Sabendo que log 2 ≈ 0,30 e log 3 ≈ 0,48, qual é o valor aproximado de log 6?',
  ['0,78', '0,18', '0,96', '0,60'],
  'Pela propriedade log(a × b) = log a + log b: log 6 = log(2 × 3) = log 2 + log 3 ≈ 0,30 + 0,48 = 0,78.');

q('mat-1em-m-05', '1º ano EM', 'medio', 35, 'EM13MAT501', 'Trigonometria com Cosseno e Tangente',
  'Um observador a 30 metros de um mastro vertical avista seu topo sob um ângulo de 60°. Qual é a altura do mastro? (Considere tg 60° = √3)',
  ['30√3 metros', '15√3 metros', '60 metros', '30 metros'],
  'tg 60° = h / 30 => √3 = h / 30 => h = 30√3 metros.');

q('mat-1em-m-06', '1º ano EM', 'medio', 35, 'EM13MAT302', 'Modelagem de Trajetória',
  'Um projétil tem altura h(t) = -t² + 8t (em metros, com t em segundos). Em que instante ele volta a tocar o solo?',
  ['t = 8 s', 't = 4 s', 't = 16 s', 't = 2 s'],
  '-t² + 8t = 0 => t(-t + 8) = 0. Toca o solo no lançamento (t = 0) e na volta em t = 8 segundos.');

q('mat-1em-m-07', '1º ano EM', 'medio', 35, 'EM13MAT303', 'Equação Exponencial Simples',
  'Qual é a solução da equação 3^(2x - 1) = 27?',
  ['x = 2', 'x = 1', 'x = 3', 'x = 4'],
  '27 = 3³. Logo: 2x - 1 = 3 => 2x = 4 => x = 2.');

q('mat-1em-m-08', '1º ano EM', 'medio', 35, 'EM13MAT301', 'Função Composta',
  'Dadas f(x) = 2x + 3 e g(x) = x - 1, determine f(g(4)).',
  ['9', '7', '11', '8'],
  'g(4) = 4 - 1 = 3. Então f(g(4)) = f(3) = 2(3) + 3 = 6 + 3 = 9.');

q('mat-1em-m-09', '1º ano EM', 'medio', 35, 'EM13MAT304', 'Logaritmo do Quociente',
  'Calcule log₅ (125 / 25).',
  ['1', '2', '3', '5'],
  '125 / 25 = 5. Como 5¹ = 5, temos log₅ 5 = 1 (ou log₅ 125 - log₅ 25 = 3 - 2 = 1).');

q('mat-1em-m-10', '1º ano EM', 'medio', 35, 'EM13MAT202', 'Interpretação de Gráfico de Dispersão',
  'Em um gráfico de dispersão que relaciona tempo diário de leitura e desempenho escolar, pontos alinhados inclinados para cima indicam:',
  ['Correlação linear positiva', 'Correlação linear negativa', 'Ausência de correlação', 'Correlação nula'],
  'Quando o aumento de uma variável é acompanhado pelo aumento da outra, há correlação linear positiva.');

q('mat-1em-m-11', '1º ano EM', 'medio', 35, 'EM13MAT302', 'Cálculo de Lucro com Função Quadrática',
  'Uma fábrica tem receita R(x) = 100x e custo C(x) = x² + 20x. Para qual quantidade produzida x o lucro L(x) = R(x) - C(x) é máximo?',
  ['x = 40', 'x = 50', 'x = 30', 'x = 60'],
  'L(x) = 100x - (x² + 20x) = -x² + 80x. Xv = -80 / (2 × (-1)) = 40 unidades.');

q('mat-1em-m-12', '1º ano EM', 'medio', 35, 'EM13MAT101', 'Subconjuntos e Potência',
  'Quantos subconjuntos possui um conjunto com 4 elementos distintos?',
  ['16 subconjuntos', '8 subconjuntos', '12 subconjuntos', '4 subconjuntos'],
  'O número de subconjuntos de um conjunto com n elementos é 2ⁿ: 2⁴ = 16 subconjuntos.');

q('mat-1em-m-13', '1º ano EM', 'medio', 35, 'EM13MAT501', 'Relação Fundamental Trigonométrica',
  'Se em um triângulo retângulo o seno de um ângulo agudo é 0,6 (3/5), qual é a tangente desse ângulo?',
  ['0,75 (3/4)', '0,8 (4/5)', '1,33', '0,5'],
  'cos θ = √(1 - 0,6²) = √(1 - 0,36) = √0,64 = 0,8. tg θ = sen θ / cos θ = 0,6 / 0,8 = 0,75.');

q('mat-1em-m-14', '1º ano EM', 'medio', 35, 'EM13MAT303', 'Decaimento Exponencial',
  'Uma substância radioativa tem meia-vida de 10 anos. Se havia 80 g inicialmente, quanto restará após 30 anos?',
  ['10 g', '20 g', '5 g', '40 g'],
  'Passaram-se 3 meias-vidas (30 ÷ 10 = 3): 80 ÷ 2³ = 80 ÷ 8 = 10 g.');

q('mat-1em-m-15', '1º ano EM', 'medio', 35, 'EM13MAT304', 'Logaritmo da Potência',
  'Simplifique: log₂ (4⁵).',
  ['10', '20', '8', '5'],
  'log₂ (4⁵) = 5 × log₂ 4 = 5 × 2 = 10 (pois 2¹⁰ = 1024 = 4⁵).');

// DIFÍCIL (15 questões)
q('mat-1em-d-01', '1º ano EM', 'dificil', 55, 'EM13MAT302', 'Área Máxima com Função Quadrática',
  'Um fazendeiro dispõe de 40 metros de cerca para cercar uma horta retangular aproveitando um muro já existente como um dos lados. Qual é a área máxima que ele pode cercar?',
  ['200 m²', '100 m²', '400 m²', '150 m²'],
  'Cerca nos lados x, x e comprimento (40 - 2x). Área A(x) = x(40 - 2x) = -2x² + 40x. Xv = -40 / (-4) = 10 m. Área máxima = 10 × 20 = 200 m².');

q('mat-1em-d-02', '1º ano EM', 'dificil', 55, 'EM13MAT303', 'Equação Exponencial com Mudança de Base',
  'Resolva a equação exponencial: 4ˣ - 3 × 2ˣ - 4 = 0.',
  ['x = 2', 'x = 4', 'x = 1', 'x = 3'],
  'Fazendo y = 2ˣ: y² - 3y - 4 = 0 => (y - 4)(y + 1) = 0. Como 2ˣ > 0, temos y = 4 => 2ˣ = 4 => x = 2.');

q('mat-1em-d-03', '1º ano EM', 'dificil', 55, 'EM13MAT304', 'Equação Logarítmica',
  'Resolva nos reais: log₂ (x + 3) + log₂ (x - 3) = 4.',
  ['x = 5', 'x = -5', 'x = 4', 'x = 6'],
  'log₂ [(x + 3)(x - 3)] = 4 => x² - 9 = 2⁴ = 16 => x² = 25. Pela condição de existência x > 3, logo x = 5.');

q('mat-1em-d-04', '1º ano EM', 'dificil', 55, 'EM13MAT301', 'Função Inversa',
  'Qual é a lei da função inversa f⁻¹(x) da função afim bijetora f(x) = (2x + 1) / 3?',
  ['f⁻¹(x) = (3x - 1) / 2', 'f⁻¹(x) = (3x + 1) / 2', 'f⁻¹(x) = 2x - 3', 'f⁻¹(x) = (2x - 1) / 3'],
  'Trocando variáveis: y = (2x + 1)/3 => 3y = 2x + 1 => 2x = 3y - 1 => x = (3y - 1)/2. f⁻¹(x) = (3x - 1)/2.');

q('mat-1em-d-05', '1º ano EM', 'dificil', 55, 'EM13MAT501', 'Lei dos Cossenos Introdutória',
  'Em um triângulo, dois lados medem 5 cm e 8 cm e formam entre si um ângulo de 60°. Quanto mede o terceiro lado?',
  ['7 cm', '6 cm', '8 cm', '√39 cm'],
  'Pela Lei dos Cossenos: a² = 5² + 8² - 2(5)(8) cos 60° = 25 + 64 - 80(0,5) = 89 - 40 = 49 => a = 7 cm.');

q('mat-1em-d-06', '1º ano EM', 'dificil', 55, 'EM13MAT302', 'Inequação do 2º Grau com Parênteses',
  'Para quais valores reais de x a função f(x) = -x² + 2x + 8 é estritamente positiva (f(x) > 0)?',
  ['-2 < x < 4', 'x < -2 ou x > 4', 'x > 4', '-4 < x < 2'],
  'Raízes de -x² + 2x + 8 = 0: x = -2 e x = 4. A parábola tem concavidade para baixo, logo é positiva entre as raízes: -2 < x < 4.');

q('mat-1em-d-07', '1º ano EM', 'dificil', 55, 'EM13MAT304', 'Mudança de Base nos Logaritmos',
  'Expresse log₃ 5 em função de log 3 e log 5 na base 10.',
  ['log 5 / log 3', 'log 3 / log 5', 'log 5 - log 3', 'log 15'],
  'Pela regra de mudança de base: log_b a = (log_c a) / (log_c b), logo log₃ 5 = log 5 / log 3.');

q('mat-1em-d-08', '1º ano EM', 'dificil', 55, 'EM13MAT401', 'Sistema de Inequações',
  'Quais números inteiros satisfazem simultaneamente: 2x - 1 ≥ 3 e x + 4 < 9?',
  ['{2, 3, 4}', '{2, 3, 4, 5}', '{3, 4}', '{1, 2, 3, 4}'],
  '2x ≥ 4 => x ≥ 2. x < 5. Interseção nos inteiros: 2, 3 e 4.');

q('mat-1em-d-09', '1º ano EM', 'dificil', 55, 'EM13MAT303', 'Juros Compostos e Exponencial',
  'Um capital de R$ 1.000,00 foi aplicado a juros compostos de 10% ao ano. Qual é o montante após 3 anos?',
  ['R$ 1.331,00', 'R$ 1.300,00', 'R$ 1.350,00', 'R$ 1.250,00'],
  'M = C × (1 + i)ᵗ = 1000 × (1,10)³ = 1000 × 1,331 = R$ 1.331,00.');

q('mat-1em-d-10', '1º ano EM', 'dificil', 55, 'EM13MAT102', 'Operações com Intervalos',
  'Se A = [1, 5] e B = (3, 8), qual é o intervalo A - B (elementos em A que não estão em B)?',
  ['[1, 3]', '[1, 3)', '(3, 5]', '[5, 8)'],
  'Os números em A que não estão em B vão de 1 até 3 inclusive (já que 3 não pertence ao aberto de B): [1, 3].');

q('mat-1em-d-11', '1º ano EM', 'dificil', 55, 'EM13MAT501', 'Lei dos Senos Introdutória',
  'Em um triângulo ABC, o ângulo A mede 30° e o lado oposto a ele mede 6 cm. Qual é o raio da circunferência circunscrita a esse triângulo?',
  ['6 cm', '12 cm', '3 cm', '8 cm'],
  'Pela Lei dos Senos: a / sen A = 2R => 6 / sen 30° = 2R => 6 / 0,5 = 2R => 12 = 2R => R = 6 cm.');

q('mat-1em-d-12', '1º ano EM', 'dificil', 55, 'EM13MAT302', 'Distância entre Zeros da Parábola',
  'Qual é a distância horizontal entre os zeros da função quadrática f(x) = x² - 8x + 12?',
  ['4 unidades', '2 unidades', '6 unidades', '8 unidades'],
  'Raízes: x = 2 e x = 6. Distância = 6 - 2 = 4 unidades.');

q('mat-1em-d-13', '1º ano EM', 'dificil', 55, 'EM13MAT304', 'Propriedades Algébricas de Log',
  'Se log x = 2 e log y = 3, qual é o valor de log (x³ / y)?',
  ['3', '6', '1', '2'],
  'log (x³ / y) = 3 log x - log y = 3(2) - 3 = 6 - 3 = 3.');

q('mat-1em-d-14', '1º ano EM', 'dificil', 55, 'EM13MAT202', 'Interpretação de Mediana e Média',
  'Em uma empresa, 9 estagiários ganham R$ 1.000,00 e o diretor ganha R$ 21.000,00. Qual medida melhor representa o salário típico dos funcionários?',
  ['A mediana (R$ 1.000,00), pois não é distorcida pelo valor discrepante', 'A média (R$ 3.000,00)', 'A amplitude', 'O desvio padrão'],
  'Em distribuições com valores discrepantes (outliers), a mediana é a medida de tendência central mais robusta e representativa.');

q('mat-1em-d-15', '1º ano EM', 'dificil', 55, 'EM13MAT301', 'Taxa de Variação Média',
  'Qual é a taxa de variação média da função f(x) = x² no intervalo [1, 4]?',
  ['5', '4', '3', '6'],
  'Taxa de variação média = [f(4) - f(1)] / (4 - 1) = (16 - 1) / 3 = 15 / 3 = 5.');

// EXPERT (15 questões)
q('mat-1em-e-01', '1º ano EM', 'expert', 80, 'EM13MAT302', 'Otimização com Custo e Receita',
  'Uma empresa modela o custo C(x) = 2x² - 12x + 50 para produzir x mil peças. Qual é o custo mínimo de produção?',
  ['R$ 32 mil', 'R$ 50 mil', 'R$ 28 mil', 'R$ 36 mil'],
  'Xv = -(-12) / (2 × 2) = 12 / 4 = 3. Custo mínimo = C(3) = 2(9) - 12(3) + 50 = 18 - 36 + 50 = R$ 32 mil.');

q('mat-1em-e-02', '1º ano EM', 'expert', 80, 'EM13MAT304', 'Escala Richter e Logaritmos',
  'A magnitude de um terremoto é calculada por M = (2/3) log (E / E₀). Se um terremoto tem magnitude 6 e outro magnitude 4, a energia liberada pelo primeiro é quantas vezes maior?',
  ['1.000 vezes maior', '100 vezes maior', '10.000 vezes maior', '30 vezes maior'],
  'ΔM = 2 = (2/3) log(E₁/E₂) => log(E₁/E₂) = 3 => E₁/E₂ = 10³ = 1.000 vezes.');

q('mat-1em-e-03', '1º ano EM', 'expert', 80, 'EM13MAT303', 'Meia-Vida e Tempo Contínuo',
  'A massa de um medicamento no sangue decai segundo M(t) = 80 × (1/2)^(t/4), com t em horas. Após quantas horas restarão apenas 5 mg?',
  ['16 horas', '12 horas', '20 horas', '8 horas'],
  '5 = 80 × (1/2)^(t/4) => 5/80 = 1/16 = (1/2)⁴ = (1/2)^(t/4) => t/4 = 4 => t = 16 horas.');

q('mat-1em-e-04', '1º ano EM', 'expert', 80, 'EM13MAT501', 'Problema do Triângulo Acutângulo',
  'Em um triângulo com lados 7 cm, 8 cm e 9 cm, o cosseno do maior ângulo é:',
  ['2/7', '1/3', '5/14', '3/8'],
  'O maior ângulo opõe-se ao maior lado (9): 9² = 7² + 8² - 2(7)(8) cos θ => 81 = 49 + 64 - 112 cos θ => 112 cos θ = 113 - 81 = 32 => cos θ = 32/112 = 2/7.');

q('mat-1em-e-05', '1º ano EM', 'expert', 80, 'EM13MAT301', 'Composição Sucessiva',
  'Se f(x) = 2x + 1 e g(x) = 3x - 2, qual é a raiz da equação f(g(x)) = 15?',
  ['x = 3', 'x = 2', 'x = 4', 'x = 5'],
  'f(g(x)) = 2(3x - 2) + 1 = 6x - 4 + 1 = 6x - 3. 6x - 3 = 15 => 6x = 18 => x = 3.');

q('mat-1em-e-06', '1º ano EM', 'expert', 80, 'EM13MAT302', 'Parábola Tangente ao Eixo X',
  'Para qual valor positivo de k a função f(x) = x² - kx + 9 possui exatamente uma raiz real (tangencia o eixo x)?',
  ['k = 6', 'k = 3', 'k = 9', 'k = 18'],
  'Para tangenciar o eixo x, Δ deve ser 0: Δ = k² - 4(1)(9) = k² - 36 = 0 => k = 6.');

q('mat-1em-e-07', '1º ano EM', 'expert', 80, 'EM13MAT304', 'Sistema de Logaritmos',
  'Resolva o sistema: x + y = 20 e log₂ x - log₂ y = 2. Qual é o valor de x?',
  ['x = 16', 'x = 12', 'x = 15', 'x = 18'],
  'log₂ (x/y) = 2 => x/y = 4 => x = 4y. 4y + y = 20 => 5y = 20 => y = 4 e x = 16.');

q('mat-1em-e-08', '1º ano EM', 'expert', 80, 'EM13MAT402', 'Interpretação Gráfica de Sinais',
  'Dada a função quadrática com gráfico passando por (1, 0) e (5, 0) com vértice em (3, -4), para quais valores de x temos f(x) ≥ 0?',
  ['x ≤ 1 ou x ≥ 5', '1 ≤ x ≤ 5', 'x ≥ 3', 'Apenas x = 1 e x = 5'],
  'Com concavidade para cima (vértice negativo), a função é não negativa fora do intervalo das raízes: x ≤ 1 ou x ≥ 5.');

q('mat-1em-e-09', '1º ano EM', 'expert', 80, 'EM13MAT303', 'Taxa de Depreciação de Veículo',
  'Um carro de R$ 50.000,00 desvaloriza 20% ao ano. Qual será seu valor após 2 anos?',
  ['R$ 32.000,00', 'R$ 30.000,00', 'R$ 35.000,00', 'R$ 28.000,00'],
  'V(t) = 50000 × (0,80)ᵗ. V(2) = 50000 × 0,64 = R$ 32.000,00.');

q('mat-1em-e-10', '1º ano EM', 'expert', 80, 'EM13MAT501', 'Área de Triângulo por Trigonometria',
  'Qual é a área de um triângulo com lados 6 cm e 10 cm e ângulo compreendido de 30°?',
  ['15 cm²', '30 cm²', '20 cm²', '12 cm²'],
  'Área = (a × b × sen θ) / 2 = (6 × 10 × sen 30°) / 2 = (60 × 0,5) / 2 = 15 cm².');

q('mat-1em-e-11', '1º ano EM', 'expert', 80, 'EM13MAT101', 'Problema de Três Conjuntos',
  'Em um grupo de 100 pessoas, 50 praticam corrida, 40 natação e 20 praticam ambos. Quantas pessoas não praticam nenhum dos dois?',
  ['30 pessoas', '20 pessoas', '40 pessoas', '10 pessoas'],
  'União = 50 + 40 - 20 = 70 pessoas. Quem não pratica nenhum: 100 - 70 = 30 pessoas.');

q('mat-1em-e-12', '1º ano EM', 'expert', 80, 'EM13MAT304', 'Decibéis e Logaritmo',
  'O nível sonoro em decibéis é dado por dB = 10 log (I / I₀). Se a intensidade sonora I for multiplicada por 100, quantos decibéis o nível aumentará?',
  ['20 dB', '10 dB', '100 dB', '30 dB'],
  'ΔdB = 10 log 100 = 10 × 2 = 20 dB.');

q('mat-1em-e-13', '1º ano EM', 'expert', 80, 'EM13MAT302', 'Interseção de Reta e Parábola',
  'Quais são os pontos de interseção entre a parábola y = x² e a reta y = 2x + 3?',
  ['(-1, 1) e (3, 9)', '(1, 1) e (3, 9)', '(-1, 1) e (-3, 9)', '(0, 0) e (2, 4)'],
  'x² = 2x + 3 => x² - 2x - 3 = 0 => (x - 3)(x + 1) = 0 => x = 3 (y = 9) ou x = -1 (y = 1).');

q('mat-1em-e-14', '1º ano EM', 'expert', 80, 'EM13MAT202', 'Média Harmônica Introdutória',
  'Um carro sobe uma serra a 40 km/h e desce a mesma serra pelo mesmo trajeto a 60 km/h. Qual é a velocidade média em todo o percurso?',
  ['48 km/h', '50 km/h', '52 km/h', '45 km/h'],
  'A velocidade média é a média harmônica: Vm = 2ab / (a + b) = 2(40)(60) / (40 + 60) = 4800 / 100 = 48 km/h.');

q('mat-1em-e-15', '1º ano EM', 'expert', 80, 'EM13MAT301', 'Periodicidade e Simetria',
  'Uma função satisfaz f(x + 4) = f(x) para todo x real. Se f(1) = 7 e f(2) = 3, qual é o valor de f(9)?',
  ['7', '3', '10', '14'],
  'Como o período é 4: f(9) = f(5 + 4) = f(5) = f(1 + 4) = f(1) = 7.');

console.log('Total até 1º ano EM:', list.length);

fs.writeFileSync('scripts/medio_math_temp_1.json', JSON.stringify(list, null, 2));
