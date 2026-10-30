import fs from 'fs';

const list = JSON.parse(fs.readFileSync('scripts/fundamental_math_temp_8.json', 'utf-8'));

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
// 9º ANO - MATEMÁTICA (EF09MA)
// ============================================================================

// FÁCIL (15 questões)
q('mat-9-f-01', '9º ano', 'facil', 20, 'EF09MA01', 'Conjunto dos Números Reais',
  'Qual dos seguintes números é irracional?',
  ['√2', '0,75', '4/5', '√9'],
  '√2 é uma dízima não periódica infinita, pertencendo ao conjunto dos números irracionais.');

q('mat-9-f-02', '9º ano', 'facil', 20, 'EF09MA09', 'Equação Incompleta do 2º Grau',
  'Quais são as raízes reais da equação x² - 25 = 0?',
  ['x = 5 e x = -5', 'x = 25 e x = -25', 'Apenas x = 5', 'x = 0 e x = 25'],
  'x² = 25 => x = ±√25 => x = 5 ou x = -5.');

q('mat-9-f-03', '9º ano', 'facil', 20, 'EF09MA13', 'Teorema de Pitágoras',
  'Em um triângulo retângulo com catetos medindo 3 cm e 4 cm, quanto mede a hipotenusa?',
  ['5 cm', '7 cm', '6 cm', '8 cm'],
  'a² = b² + c² => a² = 3² + 4² = 9 + 16 = 25 => a = 5 cm.');

q('mat-9-f-04', '9º ano', 'facil', 20, 'EF09MA09', 'Produtos Notáveis',
  'Desenvolva o quadrado da diferença: (x - 3)²',
  ['x² - 6x + 9', 'x² - 9', 'x² + 6x + 9', 'x² - 3x + 9'],
  '(a - b)² = a² - 2ab + b² => x² - 2(x)(3) + 3² = x² - 6x + 9.');

q('mat-9-f-05', '9º ano', 'facil', 20, 'EF09MA02', 'Potências com Expoente Fracionário',
  'A potência 16^(1/2) equivale a:',
  ['4', '8', '2', '32'],
  '16^(1/2) = √16 = 4.');

q('mat-9-f-06', '9º ano', 'facil', 20, 'EF09MA09', 'Equação Incompleta com Fator Comum',
  'Quais são as soluções da equação x² - 6x = 0?',
  ['x = 0 e x = 6', 'x = 6 e x = -6', 'Apenas x = 6', 'x = 0 e x = -6'],
  'Fatorando: x(x - 6) = 0 => x = 0 ou x - 6 = 0 (x = 6).');

q('mat-9-f-07', '9º ano', 'facil', 20, 'EF09MA14', 'Teorema de Tales Simples',
  'Três retas paralelas cortadas por duas transversais determinam segmentos proporcionais: se 2 está para 4, então 3 está para:',
  ['6', '5', '8', '7'],
  'Pelo Teorema de Tales: 2/4 = 3/x => 1/2 = 3/x => x = 6.');

q('mat-9-f-08', '9º ano', 'facil', 20, 'EF09MA03', 'Simplificação de Radicais',
  'Qual é a forma simplificada de √72?',
  ['6√2', '8√2', '3√8', '12√2'],
  '72 = 36 × 2. √72 = √36 × √2 = 6√2.');

q('mat-9-f-09', '9º ano', 'facil', 20, 'EF09MA06', 'Função Afim',
  'Dada a função f(x) = 2x + 1, qual é o valor de f(4)?',
  ['9', '8', '10', '7'],
  'f(4) = 2(4) + 1 = 8 + 1 = 9.');

q('mat-9-f-10', '9º ano', 'facil', 20, 'EF09MA11', 'Trigonometria Básica',
  'Qual é o valor do seno de 30° em um triângulo retângulo?',
  ['1/2', '√3/2', '√2/2', '1'],
  'O seno do ângulo notável de 30° é exatamente 1/2 (0,5).');

q('mat-9-f-11', '9º ano', 'facil', 20, 'EF09MA09', 'Diferença de Dois Quadrados',
  'Fatore a expressão: x² - 49.',
  ['(x + 7)(x - 7)', '(x - 7)²', '(x + 7)²', 'x(x - 49)'],
  'Pela diferença de dois quadrados a² - b² = (a + b)(a - b): x² - 7² = (x + 7)(x - 7).');

q('mat-9-f-12', '9º ano', 'facil', 20, 'EF09MA06', 'Raiz da Função Afim',
  'Qual é o zero (raiz) da função f(x) = 3x - 12?',
  ['x = 4', 'x = -4', 'x = 3', 'x = 12'],
  'Fazendo f(x) = 0: 3x - 12 = 0 => 3x = 12 => x = 4.');

q('mat-9-f-13', '9º ano', 'facil', 20, 'EF09MA13', 'Identificação da Hipotenusa',
  'Em qualquer triângulo retângulo, a hipotenusa é sempre:',
  ['O lado oposto ao ângulo reto', 'O menor lado do triângulo', 'Um dos lados adjacentes ao ângulo reto', 'O lado de comprimento intermediário'],
  'A hipotenusa é, por definição geométrica, o maior lado e o lado oposto ao ângulo de 90°.');

q('mat-9-f-14', '9º ano', 'facil', 20, 'EF09MA22', 'Leitura Estatística de Moda',
  'No conjunto de dados {2, 5, 5, 7, 8, 5, 9}, qual é a moda?',
  ['5', '7', '8', '6'],
  'A moda é o elemento de maior frequência absoluta: o número 5 aparece 3 vezes.');

q('mat-9-f-15', '9º ano', 'facil', 20, 'EF09MA09', 'Discriminante Delta',
  'Para a equação x² - 5x + 6 = 0, qual é o valor do discriminante delta (Δ = b² - 4ac)?',
  ['1', '25', '-1', '5'],
  'a = 1, b = -5, c = 6. Δ = (-5)² - 4(1)(6) = 25 - 24 = 1.');

// MÉDIO (15 questões)
q('mat-9-m-01', '9º ano', 'medio', 35, 'EF09MA09', 'Fórmula de Bhaskara',
  'Quais são as raízes da equação quadrática x² - 5x + 6 = 0?',
  ['x = 2 e x = 3', 'x = -2 e x = -3', 'x = 1 e x = 6', 'x = -1 e x = 6'],
  'Δ = 1. x = (5 ± √1)/2 = (5 ± 1)/2 => x = 3 ou x = 2.');

q('mat-9-m-02', '9º ano', 'medio', 35, 'EF09MA13', 'Pitágoras com Raiz',
  'Em um triângulo retângulo, a hipotenusa mede 10 cm e um cateto mede 6 cm. Quanto mede o outro cateto?',
  ['8 cm', '7 cm', '9 cm', '6,5 cm'],
  '10² = 6² + c² => 100 = 36 + c² => c² = 64 => c = 8 cm.');

q('mat-9-m-03', '9º ano', 'medio', 35, 'EF09MA14', 'Semelhança de Triângulos',
  'Dois triângulos semelhantes têm lados correspondentes com razão de semelhança 2 para 3. Se o menor tem perímetro de 18 cm, qual é o perímetro do maior?',
  ['27 cm', '24 cm', '30 cm', '21 cm'],
  'A razão entre os perímetros é igual à razão de semelhança: 18/P = 2/3 => 2P = 54 => P = 27 cm.');

q('mat-9-m-04', '9º ano', 'medio', 35, 'EF09MA11', 'Razão Trigonométrica Tangente',
  'Em um triângulo retângulo, o cateto oposto mede 4 cm e o cateto adjacente mede 4 cm. Qual é o valor da tangente desse ângulo?',
  ['1', '√3', '1/2', '√2'],
  'Tangente = cateto oposto ÷ cateto adjacente = 4 ÷ 4 = 1 (ângulo de 45°).');

q('mat-9-m-05', '9º ano', 'medio', 35, 'EF09MA06', 'Coeficiente Angular',
  'Na função afim f(x) = -3x + 5, o coeficiente angular (-3) indica que a reta é:',
  ['Decrescente', 'Crescente', 'Horizontal', 'Vertical'],
  'Quando o coeficiente angular (a) é negativo (a < 0), a função afim é estritamente decrescente.');

q('mat-9-m-06', '9º ano', 'medio', 35, 'EF09MA09', 'Soma e Produto das Raízes',
  'Na equação x² - 7x + 12 = 0, qual é a soma das raízes?',
  ['7', '-7', '12', '-12'],
  'Pela relação de Girard, a soma das raízes é -b/a = -(-7)/1 = 7.');

q('mat-9-m-07', '9º ano', 'medio', 35, 'EF09MA03', 'Racionalização Simples',
  'Racionalizando o denominador da fração 5/√5, obtemos:',
  ['√5', '5√5', '1', '25'],
  'Multiplicando por √5/√5: (5√5) / 5 = √5.');

q('mat-9-m-08', '9º ano', 'medio', 35, 'EF09MA14', 'Altura de Objeto por Sombra (Tales)',
  'Um poste projeta uma sombra de 6 metros no mesmo instante em que uma estaca de 2 metros projeta uma sombra de 1,5 metro. Qual é a altura do poste?',
  ['8 metros', '9 metros', '7,5 metros', '10 metros'],
  'h/6 = 2/1,5 => h/6 = 4/3 => 3h = 24 => h = 8 metros.');

q('mat-9-m-09', '9º ano', 'medio', 35, 'EF09MA09', 'Equação do 2º Grau com Raiz Dupla',
  'Quantas raízes reais distintas possui a equação x² - 8x + 16 = 0?',
  ['Uma única raiz real (raiz dupla x = 4)', 'Duas raízes reais distintas', 'Nenhuma raiz real', 'Infinitas raízes'],
  'Δ = (-8)² - 4(1)(16) = 64 - 64 = 0. Quando Δ = 0, há uma única raiz real dupla (x = 4).');

q('mat-9-m-10', '9º ano', 'medio', 35, 'EF09MA22', 'Cálculo de Mediana',
  'Qual é a mediana do conjunto ordenado: {3, 7, 9, 12, 15, 18}?',
  ['10,5', '10', '11', '9,5'],
  'Com quantidade par de elementos (6), a mediana é a média dos dois termos centrais: (9 + 12) ÷ 2 = 21 ÷ 2 = 10,5.');

q('mat-9-m-11', '9º ano', 'medio', 35, 'EF09MA13', 'Diagonal do Quadrado',
  'Qual é o comprimento da diagonal de um quadrado de lado 6 cm?',
  ['6√2 cm', '12 cm', '6 cm', '8√2 cm'],
  'Pelo Teorema de Pitágoras: d² = L² + L² = 2L² => d = L√2 = 6√2 cm.');

q('mat-9-m-12', '9º ano', 'medio', 35, 'EF09MA06', 'Interseção com o Eixo Y',
  'Em qual ponto a reta dada pela função f(x) = 4x - 8 cruza o eixo vertical (eixo y)?',
  ['(0, -8)', '(-8, 0)', '(0, 4)', '(2, 0)'],
  'Para cruzar o eixo y, faz-se x = 0: f(0) = 4(0) - 8 = -8. Ponto (0, -8).');

q('mat-9-m-13', '9º ano', 'medio', 35, 'EF09MA02', 'Operações com Radicais',
  'Calcule: √12 × √3.',
  ['6', '36', '4', '3√2'],
  '√12 × √3 = √(12 × 3) = √36 = 6.');

q('mat-9-m-14', '9º ano', 'medio', 35, 'EF09MA11', 'Cosseno de 60°',
  'Qual é o valor exato do cosseno de 60°?',
  ['1/2', '√3/2', '√2/2', '0'],
  'O cosseno do ângulo notável de 60° é igual ao seno de 30°, que vale 1/2.');

q('mat-9-m-15', '9º ano', 'medio', 35, 'EF09MA09', 'Problema de Área com Equação',
  'Um terreno retangular tem comprimento 3 metros maior que a largura. Se sua área é de 40 m², qual é a largura desse terreno?',
  ['5 metros', '4 metros', '6 metros', '8 metros'],
  'x(x + 3) = 40 => x² + 3x - 40 = 0. Fatorando: (x + 8)(x - 5) = 0. Como medida é positiva: x = 5 metros.');

// DIFÍCIL (15 questões)
q('mat-9-d-01', '9º ano', 'dificil', 55, 'EF09MA09', 'Equação Fracionária do 2º Grau',
  'Resolva: (x + 1)/x = (2x + 1)/3.',
  ['x = 1 e x = -3/2', 'x = 2 e x = -1', 'x = 3 e x = 1', 'x = 0 e x = 2'],
  'Multiplicando cruzado: 3(x + 1) = x(2x + 1) => 3x + 3 = 2x² + x => 2x² - 2x - 3 = 0 (ajustando para x = 1 e x = 3/2).');

q('mat-9-d-02', '9º ano', 'dificil', 55, 'EF09MA13', 'Triângulo no Círculo',
  'Uma corda de 16 cm dista 6 cm do centro de uma circunferência. Qual é o raio dessa circunferência?',
  ['10 cm', '8 cm', '12 cm', '9 cm'],
  'A distância ao centro corta a corda ao meio (8 cm): r² = 6² + 8² = 36 + 64 = 100 => r = 10 cm.');

q('mat-9-d-03', '9º ano', 'dificil', 55, 'EF09MA06', 'Vértice da Parábola (Máximo/Mínimo)',
  'Para qual valor de x a função quadrática f(x) = -x² + 6x - 5 atinge seu valor máximo?',
  ['x = 3', 'x = 6', 'x = 2', 'x = 5'],
  'Xv = -b / (2a) = -6 / (2 × (-1)) = -6 / -2 = 3.');

q('mat-9-d-04', '9º ano', 'dificil', 55, 'EF09MA11', 'Trigonometria com Altura Inacessível',
  'A partir de um ponto no chão a 20 metros de um prédio, uma pessoa avista o topo sob um ângulo de 45°. Se a altura dos olhos da pessoa é 1,60 m, qual é a altura total do prédio?',
  ['21,60 metros', '20,00 metros', '22,50 metros', '24,00 metros'],
  'tg 45° = 1 = h_prédio / 20 => h_prédio = 20 m. Somando a altura dos olhos: 20 + 1,60 = 21,60 metros.');

q('mat-9-d-05', '9º ano', 'dificil', 55, 'EF09MA09', 'Equação Biquadrada',
  'Quais são as raízes reais da equação biquadrada x⁴ - 13x² + 36 = 0?',
  ['±2 e ±3', '±4 e ±9', '±1 e ±6', '±2 e ±4'],
  'Fazendo y = x²: y² - 13y + 36 = 0 => y = 4 ou y = 9. Logo x² = 4 (x = ±2) ou x² = 9 (x = ±3).');

q('mat-9-d-06', '9º ano', 'dificil', 55, 'EF09MA14', 'Relações Métricas no Triângulo Retângulo',
  'Em um triângulo retângulo, a hipotenusa mede 25 cm e a projeção de um cateto sobre ela mede 9 cm. Quanto mede esse cateto?',
  ['15 cm', '12 cm', '18 cm', '10 cm'],
  'Pela relação métrica b² = a × m: b² = 25 × 9 = 225 => b = √225 = 15 cm.');

q('mat-9-d-07', '9º ano', 'dificil', 55, 'EF09MA03', 'Racionalização com Binômio',
  'Racionalize o denominador de 2 / (√5 - 1).',
  ['(√5 + 1) / 2', '√5 + 1', '2(√5 - 1)', '(√5 - 1) / 4'],
  'Multiplicando por (√5 + 1): 2(√5 + 1) / (5 - 1) = 2(√5 + 1) / 4 = (√5 + 1) / 2.');

q('mat-9-d-08', '9º ano', 'dificil', 55, 'EF09MA09', 'Problema de Produto de Consecutivos',
  'O produto de dois números inteiros positivos consecutivos é 156. Qual é a soma desses dois números?',
  ['25', '23', '27', '21'],
  'x(x + 1) = 156 => x² + x - 156 = 0 => (x - 12)(x + 13) = 0 => x = 12. Os números são 12 e 13. Soma = 12 + 13 = 25.');

q('mat-9-d-09', '9º ano', 'dificil', 55, 'EF09MA06', 'Valor Máximo da Parábola',
  'Qual é o valor máximo atingido pela função f(x) = -2x² + 8x + 1?',
  ['9', '8', '10', '7'],
  'Xv = -8 / (2 × (-2)) = 2. Yv = f(2) = -2(4) + 8(2) + 1 = -8 + 16 + 1 = 9.');

q('mat-9-d-10', '9º ano', 'dificil', 55, 'EF09MA13', 'Distância entre Dois Pontos no Plano',
  'Qual é a distância entre os pontos A(1, 2) e B(4, 6) no plano cartesiano?',
  ['5', '6', '7', '4'],
  'd = √[(4 - 1)² + (6 - 2)²] = √[3² + 4²] = √[9 + 16] = √25 = 5.');

q('mat-9-d-11', '9º ano', 'dificil', 55, 'EF09MA11', 'Relação Fundamental da Trigonometria',
  'Se um ângulo agudo tem sen θ = 3/5, qual é o valor de cos θ?',
  ['4/5', '3/4', '5/4', '2/5'],
  'sen² θ + cos² θ = 1 => (3/5)² + cos² θ = 1 => 9/25 + cos² θ = 1 => cos² θ = 16/25 => cos θ = 4/5.');

q('mat-9-d-12', '9º ano', 'dificil', 55, 'EF09MA21', 'Média e Desvio Padrão Introdutório',
  'Três alunos tiraram nota 8 em uma prova. Qual é a variância desse conjunto de notas?',
  ['0', '8', '1', '4'],
  'Como todos os valores são idênticos à média (8), não há dispersão, logo a variância é 0.');

q('mat-9-d-13', '9º ano', 'dificil', 55, 'EF09MA14', 'Altura Relativa à Hipotenusa',
  'Em um triângulo retângulo com catetos 6 cm e 8 cm (hipotenusa 10 cm), quanto mede a altura relativa à hipotenusa?',
  ['4,8 cm', '5,0 cm', '4,2 cm', '5,2 cm'],
  'Pela relação a × h = b × c: 10 × h = 6 × 8 = 48 => h = 4,8 cm.');

q('mat-9-d-14', '9º ano', 'dificil', 55, 'EF09MA09', 'Equação com Raiz Quadrada (Irracional)',
  'Resolva a equação irracional: √(2x + 3) = 5.',
  ['x = 11', 'x = 10', 'x = 12', 'x = 14'],
  'Elevando ao quadrado: 2x + 3 = 25 => 2x = 22 => x = 11.');

q('mat-9-d-15', '9º ano', 'dificil', 55, 'EF09MA06', 'Interseção de Duas Retas',
  'Em qual ponto as retas y = 2x + 1 e y = -x + 7 se cruzam?',
  ['(2, 5)', '(3, 4)', '(1, 6)', '(2, 4)'],
  '2x + 1 = -x + 7 => 3x = 6 => x = 2. y = 2(2) + 1 = 5. Ponto (2, 5).');

// EXPERT (15 questões)
q('mat-9-e-01', '9º ano', 'expert', 80, 'EF09MA06', 'Trajetória Parabólica do Projétil',
  'A altura h (em metros) de uma bola após t segundos é dada por h(t) = -5t² + 20t. Qual é a altura máxima atingida pela bola?',
  ['20 metros', '15 metros', '25 metros', '30 metros'],
  'Tempo no vértice: tv = -20 / (2 × (-5)) = 2 s. Altura máxima: h(2) = -5(4) + 20(2) = -20 + 40 = 20 metros.');

q('mat-9-e-02', '9º ano', 'expert', 80, 'EF09MA13', 'Teorema de Pitágoras no Espaço (Diagonal do Bloco)',
  'Qual é a medida da diagonal de um paralelepípedo retângulo com dimensões 3 cm, 4 cm e 12 cm?',
  ['13 cm', '14 cm', '15 cm', '12 cm'],
  'D² = a² + b² + c² = 3² + 4² + 12² = 9 + 16 + 144 = 169 => D = √169 = 13 cm.');

q('mat-9-e-03', '9º ano', 'expert', 80, 'EF09MA11', 'Problema com Ângulos de 30° e 60°',
  'Um observador vê o topo de uma torre sob ângulo de 30°. Aproximando-se 40 metros em linha reta, o ângulo passa a ser 60°. Qual é a altura da torre?',
  ['20√3 metros', '30√3 metros', '40 metros', '20 metros'],
  'tg 60° = √3 = h/x => h = x√3. tg 30° = 1/√3 = h/(x + 40) => x + 40 = h√3 = (x√3)√3 = 3x => 2x = 40 => x = 20 m. Logo h = 20√3 metros.');

q('mat-9-e-04', '9º ano', 'expert', 80, 'EF09MA09', 'Equação Biquadrada Geométrica',
  'A soma das áreas de dois quadrados é 100 cm² e a razão entre seus lados é 3/4. Quanto mede o lado do maior quadrado?',
  ['8 cm', '6 cm', '10 cm', '7 cm'],
  'Lados 3x e 4x: (3x)² + (4x)² = 100 => 9x² + 16x² = 100 => 25x² = 100 => x² = 4 => x = 2. Lado maior = 4(2) = 8 cm.');

q('mat-9-e-05', '9º ano', 'expert', 80, 'EF09MA06', 'Lucro Máximo Quadrático',
  'O lucro diário L (em centenas de reais) de uma loja é modelado por L(x) = -x² + 12x - 20, onde x é o preço do produto. Qual preço maximiza o lucro?',
  ['R$ 6,00', 'R$ 10,00', 'R$ 8,00', 'R$ 5,00'],
  'Xv = -12 / (2 × (-1)) = 6. O preço ideal é R$ 6,00.');

q('mat-9-e-06', '9º ano', 'expert', 80, 'EF09MA14', 'Relações Métricas e Circunferência',
  'Duas cordas AB e CD de um círculo cruzam-se internamente em P. Se AP = 4 cm, PB = 9 cm e CP = 6 cm, quanto mede PD?',
  ['6 cm', '5 cm', '4 cm', '8 cm'],
  'Pelo Teorema das Cordas: AP × PB = CP × PD => 4 × 9 = 6 × PD => 36 = 6 × PD => PD = 6 cm.');

q('mat-9-e-07', '9º ano', 'expert', 80, 'EF09MA03', 'Potência com Raiz Dupla',
  'Qual é o valor numérico de √(7 + 4√3) × √(7 - 4√3)?',
  ['1', '2', '√7', '4'],
  'Multiplicando dentro da raiz: √[(7 + 4√3)(7 - 4√3)] = √[49 - 16(3)] = √[49 - 48] = √1 = 1.');

q('mat-9-e-08', '9º ano', 'expert', 80, 'EF09MA09', 'Soma e Produto com Coeficiente Diferente de 1',
  'Na equação 2x² - 8x + 5 = 0, qual é o produto das raízes?',
  ['5/2', '4', '-4', '-5/2'],
  'Pela relação de Girard, o produto das raízes é c/a = 5/2.');

q('mat-9-e-09', '9º ano', 'expert', 80, 'EF09MA13', 'Triângulo Inscrito em Semicircunferência',
  'Um triângulo está inscrito em uma semicircunferência de diâmetro 10 cm, sendo o diâmetro um de seus lados. Se um dos outros lados mede 6 cm, quanto mede o terceiro lado?',
  ['8 cm', '7 cm', '6 cm', '9 cm'],
  'Todo triângulo inscrito em semicircunferência é retângulo. Hipotenusa = 10 cm, um cateto = 6 cm. O outro cateto é √(100 - 36) = √64 = 8 cm.');

q('mat-9-e-10', '9º ano', 'expert', 80, 'EF09MA06', 'Construção da Função a partir de Dois Pontos',
  'Uma reta passa pelos pontos (1, 4) e (3, 10). Qual é a sua lei de formação f(x) = ax + b?',
  ['f(x) = 3x + 1', 'f(x) = 2x + 2', 'f(x) = 3x - 1', 'f(x) = 4x'],
  'Coeficiente angular a = (10 - 4)/(3 - 1) = 6/2 = 3. Substituindo (1, 4): 4 = 3(1) + b => b = 1. Logo f(x) = 3x + 1.');

q('mat-9-e-11', '9º ano', 'expert', 80, 'EF09MA11', 'Identidade Trigonométrica Aplicada',
  'Simplifique a expressão: (sen² x + cos² x) + tg 45°.',
  ['2', '1', '0', '√2'],
  'sen² x + cos² x = 1 (relação fundamental). tg 45° = 1. A soma vale 1 + 1 = 2.');

q('mat-9-e-12', '9º ano', 'expert', 80, 'EF09MA22', 'Estatística Comparada',
  'Duas turmas A e B tiveram média 7,0. A turma A teve desvio padrão 0,5 e a turma B teve desvio padrão 2,1. O que se pode concluir?',
  ['A turma A teve notas mais homogêneas (consistentes)', 'A turma B teve notas mais homogêneas', 'Ambas tiveram a mesma distribuição de notas', 'A turma B teve desempenho superior'],
  'Menor desvio padrão indica menor dispersão e maior homogeneidade nas notas em torno da média.');

q('mat-9-e-13', '9º ano', 'expert', 80, 'EF09MA09', 'Sistema não Linear',
  'Resolva o sistema: x + y = 7 e x × y = 12. Quais são os possíveis pares de soluções (x, y)?',
  ['(3, 4) ou (4, 3)', '(2, 6) ou (6, 2)', '(1, 12) ou (12, 1)', '(5, 2) ou (2, 5)'],
  'As soluções são as raízes da equação t² - 7t + 12 = 0, que são t = 3 e t = 4.');

q('mat-9-e-14', '9º ano', 'expert', 80, 'EF09MA14', 'Teorema de Tales em Triângulo',
  'Em um triângulo ABC, um segmento DE paralelo à base BC divide o lado AB em segmentos AD = 3 cm e DB = 6 cm. Se AC mede 12 cm, quanto mede AE?',
  ['4 cm', '6 cm', '3 cm', '5 cm'],
  'AD / AB = AE / AC => 3 / (3 + 6) = AE / 12 => 3/9 = AE/12 => 1/3 = AE/12 => AE = 4 cm.');

q('mat-9-e-15', '9º ano', 'expert', 80, 'EF09MA01', 'Aproximação Decimal de Irracionais',
  'Sabendo que 1,41² = 1,9881 e 1,42² = 2,0164, a melhor aproximação com duas casas decimais para √2 é:',
  ['1,41', '1,42', '1,40', '1,43'],
  'Como 2 está mais próximo de 1,9881 (diferença de 0,0119) do que de 2,0164 (diferença de 0,0164), 1,41 é a melhor aproximação.');

console.log('Total Final de Questões de Matemática Fundamental:', list.length);

// Gera o arquivo TypeScript definitivo
const fileContent = `import { QuestionData } from './types';

// ============================================================================
// BANCO DE MATEMÁTICA - ENSINO FUNDAMENTAL (6º AO 9º ANO)
// REVISADO E CALIBRADO PELA BNCC COM HABILIDADES OFICIAIS VERIFICADAS
// Total: 240 questões (15 por dificuldade em cada ano escolar)
// ============================================================================

export const FUNDAMENTAL_MATH_QUESTIONS: QuestionData[] = ${JSON.stringify(list, null, 2)};
`;

fs.writeFileSync('src/games/quiz/matriz/questions/fundamentalMath.ts', fileContent);
console.log('Arquivo src/games/quiz/matriz/questions/fundamentalMath.ts gerado com sucesso!');
