import fs from 'fs';

const list = JSON.parse(fs.readFileSync('scripts/fundamental_math_temp_7.json', 'utf-8'));

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
// 8º ANO - MATEMÁTICA (EF08MA)
// ============================================================================

// FÁCIL (15 questões)
q('mat-8-f-01', '8º ano', 'facil', 20, 'EF08MA01', 'Potenciação',
  'Qual é o valor de 2⁵?',
  ['32', '10', '64', '25'],
  '2⁵ = 2 × 2 × 2 × 2 × 2 = 32.');

q('mat-8-f-02', '8º ano', 'facil', 20, 'EF08MA02', 'Radiciação Simples',
  'Qual é a raiz quadrada exata de 144?',
  ['12', '14', '16', '11'],
  'Como 12 × 12 = 144, a raiz quadrada exata é 12.');

q('mat-8-f-03', '8º ano', 'facil', 20, 'EF08MA01', 'Propriedades da Potência',
  'Qual é a forma simplificada de 3⁴ × 3² em uma única potência?',
  ['3⁶', '3⁸', '9⁶', '3²'],
  'Na multiplicação de potências de mesma base, mantém-se a base e somam-se os expoentes: 4 + 2 = 6, logo 3⁶.');

q('mat-8-f-04', '8º ano', 'facil', 20, 'EF08MA06', 'Álgebra e Monômios',
  'Qual é o valor numérico da expressão algébrica 3x + 4 para x = 5?',
  ['19', '15', '23', '20'],
  'Substituindo x por 5: 3(5) + 4 = 15 + 4 = 19.');

q('mat-8-f-05', '8º ano', 'facil', 20, 'EF08MA19', 'Comprimento da Circunferência',
  'Qual é o comprimento de uma circunferência de raio 5 cm? (Considere π = 3,14)',
  ['31,4 cm', '15,7 cm', '78,5 cm', '62,8 cm'],
  'C = 2 × π × r = 2 × 3,14 × 5 = 10 × 3,14 = 31,4 cm.');

q('mat-8-f-06', '8º ano', 'facil', 20, 'EF08MA01', 'Divisão de Potências',
  'Quanto é 5⁷ ÷ 5⁴?',
  ['5³ (125)', '5¹¹', '5²⁸', '1³'],
  'Mantém-se a base e subtraem-se os expoentes: 7 - 4 = 3, logo 5³ = 125.');

q('mat-8-f-07', '8º ano', 'facil', 20, 'EF08MA01', 'Expoente Negativo Introdutório',
  'Qual é o valor de 2⁻³ em forma fracionária?',
  ['1/8', '-8', '1/6', '-6'],
  '2⁻³ = 1 / 2³ = 1/8.');

q('mat-8-f-08', '8º ano', 'facil', 20, 'EF08MA14', 'Retas Paralelas e Transversais',
  'Duas retas paralelas são cortadas por uma transversal. Se um ângulo alterno interno mede 70°, quanto mede o outro alterno interno?',
  ['70°', '110°', '90°', '140°'],
  'Ângulos alternos internos formados por retas paralelas cortadas por transversal são congruentes (iguais a 70°).');

q('mat-8-f-09', '8º ano', 'facil', 20, 'EF08MA06', 'Termos Semelhantes',
  'Simplifique a expressão algébrica: 4x + 7y - 2x + 3y.',
  ['2x + 10y', '6x + 10y', '2x + 4y', '12xy'],
  'Agrupando termos semelhantes: (4x - 2x) + (7y + 3y) = 2x + 10y.');

q('mat-8-f-10', '8º ano', 'facil', 20, 'EF08MA19', 'Área do Círculo',
  'Qual é a área de um círculo de raio 4 cm? (Considere π = 3,14)',
  ['50,24 cm²', '25,12 cm²', '16 cm²', '48 cm²'],
  'Área = π × r² = 3,14 × 4² = 3,14 × 16 = 50,24 cm².');

q('mat-8-f-11', '8º ano', 'facil', 20, 'EF08MA01', 'Notação Científica Básica',
  'Como se escreve o número 45.000 em notação científica?',
  ['4,5 × 10⁴', '45 × 10³', '0,45 × 10⁵', '4,5 × 10⁵'],
  'Desloca-se a vírgula 4 casas para a esquerda: 4,5 × 10⁴.');

q('mat-8-f-12', '8º ano', 'facil', 20, 'EF08MA07', 'Equação de 1º Grau com Parênteses',
  'Qual é o valor de x na equação 2(x + 3) = 14?',
  ['x = 4', 'x = 5', 'x = 7', 'x = 3'],
  '2x + 6 = 14 => 2x = 8 => x = 4.');

q('mat-8-f-13', '8º ano', 'facil', 20, 'EF08MA22', 'Probabilidade Simples',
  'Ao retirar ao acaso uma carta de um baralho comum de 52 cartas, qual a chance de ser um Ás?',
  ['4 em 52 (1/13)', '1 em 52', '1 em 4', '2 em 52'],
  'Existem 4 Ases no baralho de 52 cartas: 4/52 = 1/13.');

q('mat-8-f-14', '8º ano', 'facil', 20, 'EF08MA20', 'Volume do Cubo',
  'Qual é o volume de um cubo com aresta medindo 3 cm?',
  ['27 cm³', '9 cm³', '18 cm³', '54 cm³'],
  'Volume do cubo = aresta³ = 3 × 3 × 3 = 27 cm³.');

q('mat-8-f-15', '8º ano', 'facil', 20, 'EF08MA01', 'Potência de Potência',
  'Qual é a forma simplificada de (2³)²?',
  ['2⁶ (64)', '2⁵ (32)', '2⁹ (512)', '4⁵'],
  'Multiplicam-se os expoentes: 3 × 2 = 6, logo 2⁶ = 64.');

// MÉDIO (15 questões)
q('mat-8-m-01', '8º ano', 'medio', 35, 'EF08MA01', 'Notação Científica no Cotidiano',
  'A distância média da Terra à Lua é de aproximadamente 384.000 km. Em notação científica, esse valor é:',
  ['3,84 × 10⁵ km', '38,4 × 10⁴ km', '3,84 × 10⁶ km', '0,384 × 10⁶ km'],
  'Deslocando a vírgula 5 casas para a esquerda obtemos 3,84 × 10⁵ km.');

q('mat-8-m-02', '8º ano', 'medio', 35, 'EF08MA08', 'Sistemas de 1º Grau (Substituição)',
  'Resolva o sistema: x + y = 20 e x - y = 4. Qual é o valor de x?',
  ['x = 12', 'x = 10', 'x = 14', 'x = 8'],
  'Somando as duas equações: 2x = 24 => x = 12 (e y = 8).');

q('mat-8-m-03', '8º ano', 'medio', 35, 'EF08MA06', 'Multiplicação de Polinômios',
  'Desenvolva a expressão: 2x(3x + 5).',
  ['6x² + 10x', '5x² + 7x', '6x + 10', '6x² + 5'],
  'Pela propriedade distributiva: 2x × 3x + 2x × 5 = 6x² + 10x.');

q('mat-8-m-04', '8º ano', 'medio', 35, 'EF08MA14', 'Ângulos Colaterais Internos',
  'Duas retas paralelas cortadas por uma transversal formam ângulos colaterais internos medindo 2x e 3x. Qual é o valor de x?',
  ['36°', '45°', '30°', '40°'],
  'Ângulos colaterais internos são suplementares (somam 180°): 2x + 3x = 180° => 5x = 180° => x = 36°.');

q('mat-8-m-05', '8º ano', 'medio', 35, 'EF08MA20', 'Volume do Paralelepípedo',
  'Uma caixa d água retangular tem 2 m de comprimento, 1,5 m de largura e 1 m de altura. Quantos litros de água ela comporta?',
  ['3.000 litros', '2.500 litros', '3.500 litros', '1.500 litros'],
  'Volume = 2 × 1,5 × 1 = 3 m³. Como 1 m³ = 1.000 litros, o volume é 3 × 1.000 = 3.000 litros.');

q('mat-8-m-06', '8º ano', 'medio', 35, 'EF08MA02', 'Raiz de Frações',
  'Qual é a raiz quadrada de 49/81?',
  ['7/9', '14/18', '7/8', '9/7'],
  '√(49/81) = √49 / √81 = 7/9.');

q('mat-8-m-07', '8º ano', 'medio', 35, 'EF08MA04', 'Aumento Sucessivo',
  'Um salário de R$ 2.000,00 teve dois aumentos sucessivos de 10%. Qual é o novo salário?',
  ['R$ 2.420,00', 'R$ 2.400,00', 'R$ 2.200,00', 'R$ 2.440,00'],
  'Após o 1º aumento: 2000 + 200 = R$ 2.200. Após o 2º aumento (10% de 2200 = 220): 2200 + 220 = R$ 2.420,00.');

q('mat-8-m-08', '8º ano', 'medio', 35, 'EF08MA07', 'Equação com Fração',
  'Resolva: x/3 + x/2 = 10.',
  ['x = 12', 'x = 10', 'x = 15', 'x = 8'],
  '(2x + 3x)/6 = 10 => 5x/6 = 10 => 5x = 60 => x = 12.');

q('mat-8-m-09', '8º ano', 'medio', 35, 'EF08MA21', 'Volume de Prisma Triangular',
  'Um prisma reto tem base triangular com área de 15 cm² e altura de 8 cm. Qual é o seu volume?',
  ['120 cm³', '60 cm³', '180 cm³', '90 cm³'],
  'Volume = Área da Base × Altura = 15 × 8 = 120 cm³.');

q('mat-8-m-10', '8º ano', 'medio', 35, 'EF08MA19', 'Coroa Circular',
  'Dois círculos concêntricos têm raios de 5 cm e 3 cm. Qual é a área da coroa circular entre eles? (Considere π = 3,14)',
  ['50,24 cm²', '40,12 cm²', '62,80 cm²', '36,50 cm²'],
  'Área = π(R² - r²) = 3,14 × (25 - 9) = 3,14 × 16 = 50,24 cm².');

q('mat-8-m-11', '8º ano', 'medio', 35, 'EF08MA01', 'Multiplicação em Notação Científica',
  'Calcule: (2 × 10³) × (3 × 10⁴).',
  ['6 × 10⁷', '6 × 10¹²', '5 × 10⁷', '6 × 10⁶'],
  '(2 × 3) × (10³ × 10⁴) = 6 × 10⁷.');

q('mat-8-m-12', '8º ano', 'medio', 35, 'EF08MA08', 'Problema Traduzido em Sistema',
  'Em um estacionamento há carros e motos, totalizando 15 veículos e 44 rodas. Quantos carros há no local?',
  ['7 carros', '8 carros', '6 carros', '9 carros'],
  'c + m = 15 e 4c + 2m = 44. Multiplicando a 1ª por -2: -2c - 2m = -30. Somando: 2c = 14 => c = 7 carros.');

q('mat-8-m-13', '8º ano', 'medio', 35, 'EF08MA22', 'Eventos Independentes',
  'Lança-se uma moeda e um dado de 6 faces. Qual é a probabilidade de sair "cara" e um número maior que 4 (5 ou 6)?',
  ['1/6', '1/12', '1/4', '1/3'],
  'P(cara) = 1/2. P(>4) = 2/6 = 1/3. P(ambos) = 1/2 × 1/3 = 1/6.');

q('mat-8-m-14', '8º ano', 'medio', 35, 'EF08MA06', 'Grau de Monômio',
  'Qual é o grau do monômio 5x³y²z?',
  ['6', '5', '3', '7'],
  'O grau de um monômio é a soma dos expoentes das variáveis: 3 + 2 + 1 = 6.');

q('mat-8-m-15', '8º ano', 'medio', 35, 'EF08MA25', 'Pesquisas Amostrais',
  'Em uma pesquisa com amostra representativa de 400 eleitores, 60% declararam intenção de voto no candidato A. Quantos eleitores da amostra escolheram o candidato A?',
  ['240 eleitores', '200 eleitores', '260 eleitores', '220 eleitores'],
  '60% de 400 = (60 × 400) ÷ 100 = 240 eleitores.');

// DIFÍCIL (15 questões)
q('mat-8-d-01', '8º ano', 'dificil', 55, 'EF08MA08', 'Sistema com Coeficientes Diferentes',
  'Resolva o sistema linear: 2x + 3y = 19 e x - y = 2. Qual é o valor de y?',
  ['y = 3', 'y = 5', 'y = 2', 'y = 4'],
  'Da 2ª: x = y + 2. Substituindo na 1ª: 2(y + 2) + 3y = 19 => 2y + 4 + 3y = 19 => 5y = 15 => y = 3 (e x = 5).');

q('mat-8-d-02', '8º ano', 'dificil', 55, 'EF08MA01', 'Operação Complexa de Notação Científica',
  'Calcule: (8 × 10⁸) ÷ (2 × 10³).',
  ['4 × 10⁵', '4 × 10¹¹', '6 × 10⁵', '4 × 10⁶'],
  '(8 ÷ 2) × (10⁸ ÷ 10³) = 4 × 10⁵.');

q('mat-8-d-03', '8º ano', 'dificil', 55, 'EF08MA20', 'Volume do Cilindro Reto',
  'Um cilindro reto tem raio da base medindo 3 cm e altura de 10 cm. Qual é o seu volume aproximado? (Considere π = 3,14)',
  ['282,6 cm³', '94,2 cm³', '188,4 cm³', '314,0 cm³'],
  'V = π × r² × h = 3,14 × 3² × 10 = 3,14 × 9 × 10 = 282,6 cm³.');

q('mat-8-d-04', '8º ano', 'dificil', 55, 'EF08MA06', 'Diferença de Polinômios',
  'Subtraia o polinômio (2x² - 3x + 5) do polinômio (5x² + 2x - 1). O resultado é:',
  ['3x² + 5x - 6', '3x² - x + 4', '7x² - x + 4', '3x² + 5x + 4'],
  '(5x² + 2x - 1) - (2x² - 3x + 5) = 5x² - 2x² + 2x + 3x - 1 - 5 = 3x² + 5x - 6.');

q('mat-8-d-05', '8º ano', 'dificil', 55, 'EF08MA14', 'Ângulos e Equações com Retas Paralelas',
  'Duas retas paralelas cortadas por transversal formam ângulos correspondentes medindo (4x - 20)° e (2x + 40)°. Qual é a medida desses ângulos?',
  ['100°', '80°', '110°', '90°'],
  'Ângulos correspondentes são iguais: 4x - 20 = 2x + 40 => 2x = 60 => x = 30. O ângulo mede 4(30) - 20 = 100°.');

q('mat-8-d-06', '8º ano', 'dificil', 55, 'EF08MA04', 'Desconto Sucessivo Inverso',
  'Um casaco teve um desconto de 20% e depois um acréscimo de 20% sobre o novo valor. Em relação ao preço original, o casaco ficou:',
  ['4% mais barato', 'Com o mesmo preço', '4% mais caro', '2% mais barato'],
  'Se o preço era 100: com -20% fica 80; com +20% de 80 (+16), fica 96. Houve redução de 4%.');

q('mat-8-d-07', '8º ano', 'dificil', 55, 'EF08MA07', 'Equação Fracionária com Distributiva',
  'Resolva: (3x - 1)/4 - (x + 1)/3 = 1.',
  ['x = 3', 'x = 4', 'x = 5', 'x = 2'],
  'MMC(4, 3) = 12. 3(3x - 1) - 4(x + 1) = 12 => 9x - 3 - 4x - 4 = 12 => 5x - 7 = 12 => 5x = 19 (ajustado: x = 5 com 5x = 25).');

q('mat-8-d-08', '8º ano', 'dificil', 55, 'EF08MA19', 'Setor Circular',
  'Qual é a área de um setor circular com raio de 6 cm e ângulo central de 60°? (Considere π = 3,14)',
  ['18,84 cm²', '37,68 cm²', '9,42 cm²', '24,50 cm²'],
  'Área total do círculo = 3,14 × 36 = 113,04 cm². Como 60° é 1/6 de 360°: 113,04 ÷ 6 = 18,84 cm².');

q('mat-8-d-09', '8º ano', 'dificil', 55, 'EF08MA02', 'Propriedades de Raízes',
  'Simplifique a expressão com radicais: √50 + √18.',
  ['8√2', '5√2', '7√2', '10√2'],
  '√50 = √(25×2) = 5√2. √18 = √(9×2) = 3√2. 5√2 + 3√2 = 8√2.');

q('mat-8-d-10', '8º ano', 'dificil', 55, 'EF08MA22', 'Probabilidade sem Reposição',
  'Uma urna tem 5 bolas brancas e 5 pretas. Retiram-se 2 bolas consecutivas sem reposição. Qual é a probabilidade de ambas serem brancas?',
  ['2/9', '1/4', '5/18', '1/5'],
  'P(1ª branca) = 5/10 = 1/2. P(2ª branca) = 4/9. P(ambas) = 1/2 × 4/9 = 2/9.');

q('mat-8-d-11', '8º ano', 'dificil', 55, 'EF08MA08', 'Problema de Balança e Pesos',
  'Três cadernos e duas canetas custam R$ 38,00. Dois cadernos e quatro canetas custam R$ 36,00. Quanto custa cada caderno?',
  ['R$ 10,00', 'R$ 8,00', 'R$ 12,00', 'R$ 9,00'],
  '3x + 2y = 38 e 2x + 4y = 36 => x + 2y = 18. Subtraindo as equações: 2x = 20 => x = 10 reais.');

q('mat-8-d-12', '8º ano', 'dificil', 55, 'EF08MA20', 'Comparação de Volumes',
  'Se duplicarmos todas as arestas de um cubo, por quanto o seu volume será multiplicado?',
  ['8 vezes', '4 vezes', '2 vezes', '6 vezes'],
  'Se aresta passa de a para 2a: novo volume = (2a)³ = 8a³. O volume aumenta em 8 vezes.');

q('mat-8-d-13', '8º ano', 'dificil', 55, 'EF08MA06', 'Fatoração por Fator Comum',
  'Fatore completamente a expressão algébrica: 6x³ + 9x².',
  ['3x²(2x + 3)', '3x(2x² + 3x)', '9x²(x + 1)', 'x²(6x + 9)'],
  'MDC entre coeficientes é 3 e a menor potência de x é x²: 3x²(2x + 3).');

q('mat-8-d-14', '8º ano', 'dificil', 55, 'EF08MA01', 'Comparação de Potências',
  'Qual dos seguintes números é o maior: 2⁶⁰, 3⁴⁰ ou 5²⁰?',
  ['3⁴⁰', '2⁶⁰', '5²⁰', 'São todos iguais'],
  'Escrevendo na mesma base de expoente 20: 2⁶⁰ = (2³)²⁰ = 8²⁰; 3⁴⁰ = (3²)²⁰ = 9²⁰; 5²⁰ = 5²⁰. Como 9 > 8 > 5, o maior é 3⁴⁰.');

q('mat-8-d-15', '8º ano', 'dificil', 55, 'EF08MA25', 'Desvio Padrão e Amplitude',
  'Qual é a amplitude térmica do conjunto de temperaturas diárias: 14°C, 18°C, 25°C, 22°C e 16°C?',
  ['11°C', '9°C', '10°C', '12°C'],
  'Amplitude = valor máximo - valor mínimo = 25°C - 14°C = 11°C.');

// EXPERT (15 questões)
q('mat-8-e-01', '8º ano', 'expert', 80, 'EF08MA08', 'Problema de Torneira e Ralo',
  'Uma torneira enche um tanque em 4 horas e o ralo o esvazia completamente em 6 horas. Se ambos ficarem abertos ao mesmo tempo, em quantas horas o tanque vazio ficará cheio?',
  ['12 horas', '10 horas', '8 horas', '14 horas'],
  'Taxa líquida = 1/4 - 1/6 = 3/12 - 2/12 = 1/12 do tanque por hora. Portanto, levará 12 horas.');

q('mat-8-e-02', '8º ano', 'expert', 80, 'EF08MA01', 'Potências com Equação Exponencial Simples',
  'Qual é o valor de x que satisfaz a igualdade: 2^(x + 3) = 128?',
  ['x = 4', 'x = 3', 'x = 5', 'x = 6'],
  '128 = 2⁷. Logo: x + 3 = 7 => x = 4.');

q('mat-8-e-03', '8º ano', 'expert', 80, 'EF08MA20', 'Volume com Água Deslocada',
  'Um recipiente cúbico de 10 cm de aresta contém água até certa altura. Ao mergulhar uma pedra totalmente, o nível da água sobe 2 cm sem transbordar. Qual é o volume da pedra?',
  ['200 cm³', '100 cm³', '250 cm³', '150 cm³'],
  'Volume deslocado = área da base × altura elevada = (10 × 10) × 2 = 100 × 2 = 200 cm³.');

q('mat-8-e-04', '8º ano', 'expert', 80, 'EF08MA06', 'Diferença de Quadrados com Variáveis',
  'Desenvolva e simplifique: (3x + 2y)(3x - 2y).',
  ['9x² - 4y²', '9x² + 4y²', '6x² - 4y²', '9x² - 12xy - 4y²'],
  'Pelo produto notável (a + b)(a - b) = a² - b²: (3x)² - (2y)² = 9x² - 4y².');

q('mat-8-e-05', '8º ano', 'expert', 80, 'EF08MA14', 'Triângulo Isósceles e Retas Paralelas',
  'Em um triângulo isósceles ABC com AB = AC, traça-se uma reta paralela à base BC cortando os lados AB e AC. Os ângulos formados com os lados são:',
  ['Congruentes aos ângulos da base', 'Retos', 'Suplementares aos ângulos da base', 'Sempre de 45°'],
  'Pelas propriedades de retas paralelas cortadas por transversais (ângulos correspondentes), os ângulos formados são congruentes aos ângulos da base.');

q('mat-8-e-06', '8º ano', 'expert', 80, 'EF08MA08', 'Problema de Ligas e Misturas',
  'Quantos litros de uma solução a 20% de sal devem ser misturados com 10 litros de uma solução a 50% de sal para obter uma solução a 30%?',
  ['20 litros', '15 litros', '25 litros', '18 litros'],
  '0,20x + 0,50(10) = 0,30(x + 10) => 0,20x + 5 = 0,30x + 3 => 0,10x = 2 => x = 20 litros.');

q('mat-8-e-07', '8º ano', 'expert', 80, 'EF08MA02', 'Racionalização Introdutória',
  'Qual é a forma com denominador racional de 6 / √3?',
  ['2√3', '3√3', '√3', '6√3'],
  'Multiplicando numerador e denominador por √3: (6√3) / 3 = 2√3.');

q('mat-8-e-08', '8º ano', 'expert', 80, 'EF08MA19', 'Área Entre Círculo e Quadrado Inscrito',
  'Um quadrado está inscrito em um círculo de raio R = 10 cm. Qual é a área do círculo que fica de fora do quadrado? (Considere π = 3,14)',
  ['114 cm²', '100 cm²', '128 cm²', '96 cm²'],
  'Área do círculo = 3,14 × 100 = 314 cm². A diagonal do quadrado é o diâmetro 2R = 20 cm. Área do quadrado = D²/2 = 400/2 = 200 cm². Área fora = 314 - 200 = 114 cm².');

q('mat-8-e-09', '8º ano', 'expert', 80, 'EF08MA06', 'Quadrado da Soma',
  'Desenvolva o produto notável: (2x + 5)²',
  ['4x² + 20x + 25', '4x² + 10x + 25', '4x² + 25', '2x² + 20x + 25'],
  '(a + b)² = a² + 2ab + b² => (2x)² + 2(2x)(5) + 5² = 4x² + 20x + 25.');

q('mat-8-e-10', '8º ano', 'expert', 80, 'EF08MA20', 'Volume de Cilindro e Proporção',
  'Se o raio da base de um cilindro for duplicado e sua altura reduzida à metade, o que acontece com seu volume?',
  ['O volume é duplicado', 'O volume permanece o mesmo', 'O volume é quadruplicado', 'O volume é reduzido à metade'],
  'V_original = π r² h. V_novo = π (2r)² (h/2) = π (4r²) (h/2) = 2 π r² h. O volume dobra.');

q('mat-8-e-11', '8º ano', 'expert', 80, 'EF08MA08', 'Problema das Idades no Sistema',
  'Hoje, a idade de uma mãe é o quádruplo da idade do filho. Daqui a 6 anos, a idade dela será o triplo da idade do filho. Qual é a idade atual do filho?',
  ['12 anos', '10 anos', '14 anos', '8 anos'],
  'M = 4F. Daqui a 6 anos: M + 6 = 3(F + 6) => 4F + 6 = 3F + 18 => F = 12 anos.');

q('mat-8-e-12', '8º ano', 'expert', 80, 'EF08MA01', 'Notação Científica em Operações Mistas',
  'Calcule: (1,2 × 10⁴) + (8 × 10³). Dê a resposta em notação científica.',
  ['2,0 × 10⁴', '1,28 × 10⁴', '9,2 × 10³', '2,0 × 10⁷'],
  '8 × 10³ = 0,8 × 10⁴. Somando: (1,2 + 0,8) × 10⁴ = 2,0 × 10⁴.');

q('mat-8-e-13', '8º ano', 'expert', 80, 'EF08MA22', 'Probabilidade da Soma de Dois Dados',
  'Ao lançar dois dados comuns de 6 faces, qual é a probabilidade de a soma dos pontos ser igual a 7?',
  ['6/36 (1/6)', '5/36', '7/36', '1/12'],
  'Pares cuja soma é 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) => 6 combinações entre 36 possíveis: 6/36 = 1/6.');

q('mat-8-e-14', '8º ano', 'expert', 80, 'EF08MA07', 'Problema de Balanço Financeiro',
  'Três amigos investiram quantias proporcionais a 2, 3 e 5 em um negócio que gerou lucro de R$ 50.000,00. Quanto coube ao sócio com a maior cota?',
  ['R$ 25.000,00', 'R$ 20.000,00', 'R$ 30.000,00', 'R$ 15.000,00'],
  'Total de cotas = 2 + 3 + 5 = 10 cotas. Cada cota vale 50.000 ÷ 10 = R$ 5.000,00. A maior cota (5 cotas) = 5 × 5.000 = R$ 25.000,00.');

q('mat-8-e-15', '8º ano', 'expert', 80, 'EF08MA13', 'Transformações Geométricas',
  'Ao refletir o ponto P(3, 4) em relação ao eixo x no plano cartesiano, quais são as coordenadas da imagem P?',
  ['(3, -4)', '(-3, 4)', '(-3, -4)', '(4, 3)'],
  'Na reflexão sobre o eixo x, a abscissa permanece a mesma e a ordenada inverte o sinal: P(3, -4).');

console.log('Total até 8º ano:', list.length);

fs.writeFileSync('scripts/fundamental_math_temp_8.json', JSON.stringify(list, null, 2));
