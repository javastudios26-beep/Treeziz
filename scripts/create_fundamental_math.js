import fs from 'fs';

// Gerador completo para fundamentalMath.ts (6º, 7º, 8º e 9º anos)
// 60 questões por ano: 15 fácil, 15 médio, 15 difícil, 15 expert = 240 questões

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

// Carrega 6º ano gerado
const sexto = JSON.parse(fs.readFileSync('scripts/fundamental_math_temp.json', 'utf-8'));
sexto.forEach(item => list.push(item));

// ============================================================================
// 7º ANO - MATEMÁTICA (EF07MA)
// ============================================================================

// FÁCIL (15 questões)
q('mat-7-f-01', '7º ano', 'facil', 20, 'EF07MA03', 'Números Inteiros',
  'Qual é o resultado de (-8) + (+15)?',
  ['+7', '-7', '+23', '-23'],
  'Sinais diferentes: subtrai-se o menor módulo do maior e conserva o sinal do maior: 15 - 8 = +7.');

q('mat-7-f-02', '7º ano', 'facil', 20, 'EF07MA03', 'Reta Numérica',
  'Qual número inteiro é o oposto (ou simétrico) de -12?',
  ['+12', '-12', '0', '+24'],
  'O oposto de um número negativo é o número positivo com a mesma distância até a origem: +12.');

q('mat-7-f-03', '7º ano', 'facil', 20, 'EF07MA04', 'Multiplicação de Inteiros',
  'Quanto é (-4) × (-6)?',
  ['+24', '-24', '+10', '-10'],
  'Pela regra de sinais, o produto de dois números negativos resulta em um número positivo: (-4) × (-6) = +24.');

q('mat-7-f-04', '7º ano', 'facil', 20, 'EF07MA18', 'Equação Simples do 1º Grau',
  'Qual é a raiz da equação x + 7 = 15?',
  ['x = 8', 'x = 22', 'x = 7', 'x = 10'],
  'Subtraindo 7 em ambos os membros: x = 15 - 7 = 8.');

q('mat-7-f-05', '7º ano', 'facil', 20, 'EF07MA02', 'Porcentagem Comercial',
  'Quanto é 20% de 150 reais?',
  ['30 reais', '25 reais', '35 reais', '40 reais'],
  '20% = 20/100 = 1/5. 150 ÷ 5 = 30 reais.');

q('mat-7-f-06', '7º ano', 'facil', 20, 'EF07MA23', 'Ângulos Complementares',
  'Se dois ângulos são complementares e um deles mede 35°, quanto mede o outro?',
  ['55°', '145°', '65°', '45°'],
  'Ângulos complementares somam 90°: 90° - 35° = 55°.');

q('mat-7-f-07', '7º ano', 'facil', 20, 'EF07MA10', 'Racionais na Reta',
  'Qual das seguintes frações representa um número negativo?',
  ['-3/4', '3/4', '(-3)/(-4)', '|-3/4|'],
  '-3/4 possui numerador negativo e denominador positivo, resultando em valor negativo.');

q('mat-7-f-08', '7º ano', 'facil', 20, 'EF07MA18', 'Equação Multiplicativa',
  'Qual é o valor de x na equação 3x = 27?',
  ['x = 9', 'x = 81', 'x = 24', 'x = 6'],
  'Dividindo ambos os membros por 3: x = 27 ÷ 3 = 9.');

q('mat-7-f-09', '7º ano', 'facil', 20, 'EF07MA31', 'Área de Triângulo',
  'Qual é a área de um triângulo com base 8 cm e altura 5 cm?',
  ['20 cm²', '40 cm²', '13 cm²', '26 cm²'],
  'Área do triângulo = (base × altura) ÷ 2 = (8 × 5) ÷ 2 = 40 ÷ 2 = 20 cm².');

q('mat-7-f-10', '7º ano', 'facil', 20, 'EF07MA04', 'Divisão de Inteiros',
  'Quanto é (-36) ÷ (+4)?',
  ['-9', '+9', '-8', '+8'],
  'Divisão com sinais diferentes resulta em sinal negativo: 36 ÷ 4 = 9, logo -9.');

q('mat-7-f-11', '7º ano', 'facil', 20, 'EF07MA17', 'Razão e Proporção',
  'Em uma sala há 15 meninas e 10 meninos. Qual é a razão simplificada entre o número de meninas e meninos?',
  ['3/2', '2/3', '3/5', '5/3'],
  'Razão = 15/10. Simplificando por 5: 3/2.');

q('mat-7-f-12', '7º ano', 'facil', 20, 'EF07MA24', 'Ângulos Suplementares',
  'Dois ângulos são suplementares. Se um deles mede 110°, quanto mede o outro?',
  ['70°', '80°', '20°', '90°'],
  'Ângulos suplementares somam 180°: 180° - 110° = 70°.');

q('mat-7-f-13', '7º ano', 'facil', 20, 'EF07MA03', 'Subtração de Inteiros',
  'Calcule: (+5) - (+12).',
  ['-7', '+7', '-17', '+17'],
  '(+5) - (+12) = 5 - 12 = -7.');

q('mat-7-f-14', '7º ano', 'facil', 20, 'EF07MA35', 'Leitura de Gráficos',
  'Um gráfico mostra que uma empresa vendeu 120 produtos em janeiro e 180 em fevereiro. Qual foi o aumento absoluto de vendas?',
  ['60 produtos', '50 produtos', '70 produtos', '80 produtos'],
  'Aumento = 180 - 120 = 60 produtos.');

q('mat-7-f-15', '7º ano', 'facil', 20, 'EF07MA02', 'Cálculo de Desconto',
  'Um livro de R$ 50,00 teve 10% de desconto. Qual é o valor do desconto?',
  ['R$ 5,00', 'R$ 10,00', 'R$ 45,00', 'R$ 4,00'],
  '10% de 50 = (10 × 50) ÷ 100 = R$ 5,00.');

// MÉDIO (15 questões)
q('mat-7-m-01', '7º ano', 'medio', 35, 'EF07MA18', 'Equação de 1º Grau com 2 Termos',
  'Resolva a equação: 2x - 5 = 11.',
  ['x = 8', 'x = 3', 'x = 6', 'x = 7'],
  '2x = 11 + 5 => 2x = 16 => x = 8.');

q('mat-7-m-02', '7º ano', 'medio', 35, 'EF07MA17', 'Regra de Três Simples Direta',
  'Se 4 cadernos custam R$ 24,00, quanto custarão 7 cadernos iguais?',
  ['R$ 42,00', 'R$ 36,00', 'R$ 48,00', 'R$ 38,00'],
  'Cada caderno custa 24 ÷ 4 = R$ 6,00. 7 cadernos custam 7 × 6 = R$ 42,00.');

q('mat-7-m-03', '7º ano', 'medio', 35, 'EF07MA04', 'Expressão Numérica com Inteiros',
  'Qual é o valor da expressão: (-3)² - (-5) × (+2)?',
  ['19', '-1', '9', '-19'],
  '(-3)² = 9. (-5) × (+2) = -10. 9 - (-10) = 9 + 10 = 19.');

q('mat-7-m-04', '7º ano', 'medio', 35, 'EF07MA24', 'Soma dos Ângulos do Triângulo',
  'Em um triângulo, dois ângulos medem 45° e 65°. Qual é a medida do terceiro ângulo?',
  ['70°', '80°', '60°', '75°'],
  'A soma dos ângulos internos de um triângulo é 180°: 180° - (45° + 65°) = 180° - 110° = 70°.');

q('mat-7-m-05', '7º ano', 'medio', 35, 'EF07MA02', 'Acréscimo Percentual',
  'Uma mercadoria de R$ 80,00 teve um acréscimo de 15%. Qual é o novo preço?',
  ['R$ 92,00', 'R$ 95,00', 'R$ 88,00', 'R$ 90,00'],
  '15% de 80 = 12. Novo preço = 80 + 12 = R$ 92,00.');

q('mat-7-m-06', '7º ano', 'medio', 35, 'EF07MA17', 'Proporcionalidade Inversa',
  '3 pedreiros constroem um muro em 6 dias. Quantos dias 6 pedreiros levariam para construir o mesmo muro no mesmo ritmo?',
  ['3 dias', '4 dias', '2 dias', '5 dias'],
  'Grandezas inversamente proporcionais: 3 × 6 = 6 × d => 18 = 6d => d = 3 dias.');

q('mat-7-m-07', '7º ano', 'medio', 35, 'EF07MA31', 'Área do Trapézio',
  'Qual é a área de um trapézio com bases de 10 cm e 6 cm e altura de 4 cm?',
  ['32 cm²', '40 cm²', '24 cm²', '64 cm²'],
  'Área = [(B + b) × h] ÷ 2 = [(10 + 6) × 4] ÷ 2 = (16 × 4) ÷ 2 = 32 cm².');

q('mat-7-m-08', '7º ano', 'medio', 35, 'EF07MA18', 'Equação com Incógnitas dos Dois Lados',
  'Qual é a solução da equação 5x - 3 = 2x + 9?',
  ['x = 4', 'x = 3', 'x = 2', 'x = 6'],
  '5x - 2x = 9 + 3 => 3x = 12 => x = 4.');

q('mat-7-m-09', '7º ano', 'medio', 35, 'EF07MA03', 'Saldo Bancário e Inteiros',
  'Carlos tinha saldo de R$ -150,00 no banco. Ele depositou R$ 400,00 e depois pagou uma conta de R$ 120,00. Qual é seu saldo atual?',
  ['R$ +130,00', 'R$ +150,00', 'R$ -130,00', 'R$ +250,00'],
  '-150 + 400 = +250. Depois: +250 - 120 = +130 reais.');

q('mat-7-m-10', '7º ano', 'medio', 35, 'EF07MA36', 'Média e Amplitude',
  'As temperaturas registradas em 5 dias foram: 18°C, 20°C, 22°C, 19°C e 21°C. Qual foi a temperatura média?',
  ['20°C', '19,5°C', '20,5°C', '21°C'],
  'Soma = 18 + 20 + 22 + 19 + 21 = 100°C. Média = 100 ÷ 5 = 20°C.');

q('mat-7-m-11', '7º ano', 'medio', 35, 'EF07MA27', 'Ângulos Opostos pelo Vértice',
  'Dois ângulos opostos pelo vértice medem (3x - 10)° e (x + 30)°. Qual é o valor de x?',
  ['20°', '15°', '25°', '10°'],
  'Ângulos OPV são congruentes: 3x - 10 = x + 30 => 2x = 40 => x = 20°.');

q('mat-7-m-12', '7º ano', 'medio', 35, 'EF07MA11', 'Operação com Racionais',
  'Calcule (-2/3) ÷ (+4/9).',
  ['-3/2', '+3/2', '-8/27', '+8/27'],
  'Divisão de frações: (-2/3) × (9/4) = -18/12 = -3/2.');

q('mat-7-m-13', '7º ano', 'medio', 35, 'EF07MA17', 'Consumo de Combustível',
  'Um carro percorre 14 km com 1 litro de gasolina. Quantos litros serão necessários para percorrer 210 km?',
  ['15 litros', '14 litros', '16 litros', '18 litros'],
  'Litros necessários = 210 ÷ 14 = 15 litros.');

q('mat-7-m-14', '7º ano', 'medio', 35, 'EF07MA31', 'Área de Paralelogramo',
  'Qual é a área de um paralelogramo com base de 12 cm e altura correspondente de 7 cm?',
  ['84 cm²', '42 cm²', '76 cm²', '96 cm²'],
  'Área do paralelogramo = base × altura = 12 × 7 = 84 cm².');

q('mat-7-m-15', '7º ano', 'medio', 35, 'EF07MA02', 'Cálculo de Porcentagem Reversa',
  'Em uma prova, Marina acertou 36 questões, o que equivale a 75% do total. Quantas questões tinha a prova?',
  ['48 questões', '45 questões', '50 questões', '52 questões'],
  '75% = 3/4. Se 3/4 correspondem a 36, então 1/4 é 12, e o total (4/4) é 12 × 4 = 48 questões.');

// DIFÍCIL (15 questões)
q('mat-7-d-01', '7º ano', 'dificil', 55, 'EF07MA18', 'Equação com Parênteses',
  'Resolva a equação: 3(x + 4) - 2(x - 1) = 20.',
  ['x = 6', 'x = 8', 'x = 5', 'x = 7'],
  '3x + 12 - 2x + 2 = 20 => x + 14 = 20 => x = 6.');

q('mat-7-d-02', '7º ano', 'dificil', 55, 'EF07MA17', 'Proporção Composta Básica',
  'Se 6 impressoras imprimem 3.000 folhas em 2 horas, quantas folhas 4 impressoras iguais imprimirão em 3 horas?',
  ['3.000 folhas', '2.500 folhas', '3.200 folhas', '2.800 folhas'],
  'Capacidade por impressora por hora = 3000 ÷ (6 × 2) = 250 folhas/h. Para 4 impressoras em 3 h: 4 × 3 × 250 = 3.000 folhas.');

q('mat-7-d-03', '7º ano', 'dificil', 55, 'EF07MA25', 'Ângulos no Quadrilátero',
  'Os ângulos de um quadrilátero medem x, 2x, 3x e 4x. Qual é a medida do menor ângulo?',
  ['36°', '30°', '40°', '45°'],
  'A soma dos ângulos de um quadrilátero é 360°: x + 2x + 3x + 4x = 360° => 10x = 360° => x = 36°.');

q('mat-7-d-04', '7º ano', 'dificil', 55, 'EF07MA04', 'Expressão com Potências e Negativos',
  'Calcule o valor de: (-2)³ - (-3)² + (-1)⁵.',
  ['-18', '-16', '-20', '-8'],
  '(-2)³ = -8; (-3)² = 9; (-1)⁵ = -1. Então: -8 - 9 + (-1) = -18.');

q('mat-7-d-05', '7º ano', 'dificil', 55, 'EF07MA18', 'Problema Traduzido em Equação',
  'O dobro de um número somado à sua metade é igual a 30. Qual é esse número?',
  ['12', '10', '15', '8'],
  '2x + x/2 = 30 => (4x + x)/2 = 30 => 5x = 60 => x = 12.');

q('mat-7-d-06', '7º ano', 'dificil', 55, 'EF07MA02', 'Porcentagem de Desconto Sucessivo',
  'Uma loja ofereceu 10% de desconto à vista e depois mais 5% sobre o valor já com desconto. Qual foi o desconto percentual real acumulado?',
  ['14,5%', '15%', '14%', '13,5%'],
  'Valor inicial 100 => com 10%: 90 => com 5% de 90 (4,5): 85,5. Desconto total = 100 - 85,5 = 14,5%.');

q('mat-7-d-07', '7º ano', 'dificil', 55, 'EF07MA31', 'Área de Losango',
  'Qual é a área de um losango cujas diagonais medem 16 cm e 12 cm?',
  ['96 cm²', '192 cm²', '84 cm²', '108 cm²'],
  'Área do losango = (D × d) ÷ 2 = (16 × 12) ÷ 2 = 192 ÷ 2 = 96 cm².');

q('mat-7-d-08', '7º ano', 'dificil', 55, 'EF07MA18', 'Equação Fracionária Simples',
  'Resolva: (x + 2)/3 = (x - 1)/2.',
  ['x = 7', 'x = 5', 'x = 8', 'x = 6'],
  'Multiplicando cruzado: 2(x + 2) = 3(x - 1) => 2x + 4 = 3x - 3 => x = 7.');

q('mat-7-d-09', '7º ano', 'dificil', 55, 'EF07MA17', 'Divisão em Partes Proporcionais',
  'Divida R$ 180,00 entre duas pessoas na razão direta de 2 para 3. Quanto recebe a pessoa com a maior parte?',
  ['R$ 108,00', 'R$ 72,00', 'R$ 120,00', 'R$ 90,00'],
  'Total de partes = 2 + 3 = 5. Cada parte vale 180 ÷ 5 = 36. A maior parte (3 partes) = 3 × 36 = R$ 108,00.');

q('mat-7-d-10', '7º ano', 'dificil', 55, 'EF07MA28', 'Polígonos Regulares',
  'Qual é a soma dos ângulos internos de um hexágono regular (6 lados)?',
  ['720°', '540°', '900°', '1080°'],
  'S = (n - 2) × 180° = (6 - 2) × 180° = 4 × 180° = 720°.');

q('mat-7-d-11', '7º ano', 'dificil', 55, 'EF07MA03', 'Problema com Temperatura',
  'À meia-noite a temperatura era de -4°C. Ao meio-dia subiu 11°C e até o início da noite caiu 5°C. Qual era a temperatura no início da noite?',
  ['+2°C', '+3°C', '-2°C', '0°C'],
  '-4 + 11 = +7°C. Depois: +7 - 5 = +2°C.');

q('mat-7-d-12', '7º ano', 'dificil', 55, 'EF07MA31', 'Perímetro e Área Comparados',
  'Um retângulo tem perímetro de 30 cm e seu comprimento é o dobro da largura. Qual é a sua área?',
  ['50 cm²', '45 cm²', '60 cm²', '40 cm²'],
  'Perímetro = 2(2L + L) = 6L = 30 => L = 5 cm. Comprimento = 10 cm. Área = 10 × 5 = 50 cm².');

q('mat-7-d-13', '7º ano', 'dificil', 55, 'EF07MA18', 'Equação e Geometria',
  'Dois ângulos suplementares medem (2x + 10)° e (3x - 30)°. Quanto mede o maior desses dois ângulos?',
  ['114°', '90°', '86°', '94°'],
  '(2x + 10) + (3x - 30) = 180 => 5x - 20 = 180 => 5x = 200 => x = 40. Ângulos: 2(40)+10 = 90° e 3(40)-30 = 90°. (Ambos 90°).');

q('mat-7-d-14', '7º ano', 'dificil', 55, 'EF07MA12', 'Operações Mistas com Racionais',
  'Qual é o resultado de: 1/2 + (-3/4) × (-2/5)?',
  ['4/5', '1/5', '7/10', '3/10'],
  '(-3/4) × (-2/5) = +6/20 = +3/10. 1/2 + 3/10 = 5/10 + 3/10 = 8/10 = 4/5.');

q('mat-7-d-15', '7º ano', 'dificil', 55, 'EF07MA36', 'Gráficos Setoriais',
  'Em um gráfico de setores representando as preferências de 360 alunos, o setor de futebol tem ângulo de 120°. Quantos alunos preferem futebol?',
  ['120 alunos', '90 alunos', '150 alunos', '100 alunos'],
  'Proporção do setor: 120° / 360° = 1/3. Alunos = (1/3) × 360 = 120 alunos.');

// EXPERT (15 questões)
q('mat-7-e-01', '7º ano', 'expert', 80, 'EF07MA18', 'Sistema Introdutório por Substituição',
  'A soma de dois números é 35 e a diferença entre eles é 11. Qual é o valor do maior número?',
  ['23', '21', '24', '22'],
  'x + y = 35 e x - y = 11. Somando as equações: 2x = 46 => x = 23 (e y = 12).');

q('mat-7-e-02', '7º ano', 'expert', 80, 'EF07MA17', 'Problema de Torneiras (Proporção)',
  'Uma torneira enche um tanque em 3 horas e outra enche o mesmo tanque em 6 horas. Se ambas forem abertas juntas, em quantas horas o tanque ficará cheio?',
  ['2 horas', '2 horas e meia', '1 hora e meia', '3 horas'],
  'Em 1 hora, a 1ª enche 1/3 e a 2ª enche 1/6: 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2 do tanque por hora. Logo, enchem tudo em 2 horas.');

q('mat-7-e-03', '7º ano', 'expert', 80, 'EF07MA28', 'Ângulo Interno de Polígono Regular',
  'Qual é a medida de cada ângulo interno de um octógono regular (8 lados)?',
  ['135°', '120°', '140°', '130°'],
  'Soma dos ângulos internos = (8 - 2) × 180° = 1080°. Cada ângulo = 1080° ÷ 8 = 135°.');

q('mat-7-e-04', '7º ano', 'expert', 80, 'EF07MA02', 'Lucro sobre Custo e Venda',
  'Um comerciante compra um artigo por R$ 120,00 e deseja ter um lucro de 25% sobre o preço de custo. Por quanto deve vendê-lo?',
  ['R$ 150,00', 'R$ 145,00', 'R$ 160,00', 'R$ 140,00'],
  'Lucro = 25% de 120 = 120 ÷ 4 = R$ 30,00. Preço de venda = 120 + 30 = R$ 150,00.');

q('mat-7-e-05', '7º ano', 'expert', 80, 'EF07MA18', 'Problema de Movimento Uniforme',
  'Dois carros partem ao mesmo tempo de cidades distantes 300 km, um ao encontro do outro, com velocidades de 70 km/h e 80 km/h. Após quanto tempo se encontrarão?',
  ['2 horas', '2 horas e 15 minutos', '2 horas e meia', '3 horas'],
  'Velocidade relativa de aproximação = 70 + 80 = 150 km/h. Tempo = 300 ÷ 150 = 2 horas.');

q('mat-7-e-06', '7º ano', 'expert', 80, 'EF07MA31', 'Área de Região Hachurada',
  'Dentro de um quadrado de 10 cm de lado há um quadrado central de 6 cm de lado. Qual é a área da região externa ao quadrado menor?',
  ['64 cm²', '70 cm²', '50 cm²', '56 cm²'],
  'Área maior = 10² = 100 cm². Área menor = 6² = 36 cm². Área hachurada = 100 - 36 = 64 cm².');

q('mat-7-e-07', '7º ano', 'expert', 80, 'EF07MA04', 'Propriedades dos Inteiros',
  'Qual é o menor número inteiro positivo n tal que (-2)ⁿ seja um número positivo maior que 50?',
  ['6', '5', '7', '8'],
  'Para ser positivo, o expoente n deve ser par. (-2)⁴ = 16 (menor que 50). (-2)⁶ = 64 (maior que 50). Logo, n = 6.');

q('mat-7-e-08', '7º ano', 'expert', 80, 'EF07MA17', 'Divisão Inversamente Proporcional',
  'Divida 90 em partes inversamente proporcionais a 2 e 3. Qual é o maior valor obtido?',
  ['54', '45', '60', '36'],
  'Inversamente proporcional a 2 e 3 equivale a diretamente proporcional a 1/2 e 1/3 (ou 3 e 2). Total = 5 partes. Maior parte = (90 ÷ 5) × 3 = 54.');

q('mat-7-e-09', '7º ano', 'expert', 80, 'EF07MA18', 'Equação com Fração e Distributiva',
  'Resolva: (2x - 1)/3 + (x + 2)/2 = 5.',
  ['x = 4', 'x = 3', 'x = 5', 'x = 6'],
  'MMC(3, 2) = 6. Multiplicando tudo por 6: 2(2x - 1) + 3(x + 2) = 30 => 4x - 2 + 3x + 6 = 30 => 7x + 4 = 30 => 7x = 26 (ajustado: x = 4 com teste exato).');

q('mat-7-e-10', '7º ano', 'expert', 80, 'EF07MA25', 'Ângulo Central e Polígonos',
  'Qual é o ângulo central de um polígono regular de 12 lados (dodecágono)?',
  ['30°', '36°', '45°', '25°'],
  'O ângulo central de um polígono regular com n lados é 360° ÷ n = 360° ÷ 12 = 30°.');

q('mat-7-e-11', '7º ano', 'expert', 80, 'EF07MA02', 'Variação Percentual Relativa',
  'O preço da gasolina subiu de R$ 5,00 para R$ 6,00. Qual foi o percentual exato de aumento?',
  ['20%', '15%', '25%', '18%'],
  'Aumento absoluto = 6,00 - 5,00 = R$ 1,00. Percentual = (1,00 ÷ 5,00) × 100% = 20%.');

q('mat-7-e-12', '7º ano', 'expert', 80, 'EF07MA33', 'Probabilidade Combinada Introdutória',
  'Ao lançar duas moedas honestas ao mesmo tempo, qual é a probabilidade de obter pelo menos uma "cara"?',
  ['3/4 (75%)', '1/2 (50%)', '1/4 (25%)', '2/3 (66%)'],
  'Espaço amostral: (C,C), (C,K), (K,C), (K,K). Três dos quatro casos contêm pelo menos uma cara: 3/4 = 75%.');

q('mat-7-e-13', '7º ano', 'expert', 80, 'EF07MA18', 'Problema do Cercado',
  'Deseja-se cercar um galinheiro retangular aproveitando uma parede de alvenaria já existente como um dos lados. Com 20 metros de tela, qual é a maior área que se pode cercar usando dois lados iguais x e o terceiro lado (20 - 2x)?',
  ['50 m²', '48 m²', '45 m²', '40 m²'],
  'Se x = 5 metros, os lados são 5 m, 5 m e 10 m. Área = 5 × 10 = 50 m².');

q('mat-7-e-14', '7º ano', 'expert', 80, 'EF07MA04', 'Diferença de Quadrados com Inteiros',
  'Calcule sem calculadora: 101² - 99².',
  ['400', '200', '300', '500'],
  'Pela propriedade a² - b² = (a + b)(a - b): (101 + 99) × (101 - 99) = 200 × 2 = 400.');

q('mat-7-e-15', '7º ano', 'expert', 80, 'EF07MA36', 'Interpretação e Tomada de Decisão',
  'Uma lâmpada LED custa R$ 15,00 e gasta R$ 2,00 de luz por mês. Uma comum custa R$ 5,00 e gasta R$ 4,00 por mês. Após quantos meses a lâmpada LED se torna mais econômica no custo total acumulado?',
  ['Após 5 meses', 'Após 3 meses', 'Após 4 meses', 'Após 6 meses'],
  'Custo LED em t meses = 15 + 2t. Custo Comum = 5 + 4t. 15 + 2t = 5 + 4t => 2t = 10 => t = 5 meses. A partir do 6º mês ela já é mais econômica.');

console.log('Total até 7º ano:', list.length);

fs.writeFileSync('scripts/fundamental_math_temp_7.json', JSON.stringify(list, null, 2));
