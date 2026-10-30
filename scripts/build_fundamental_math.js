import fs from 'fs';

// Script para gerar as 240 questões de Matemática Fundamental (6º ao 9º ano)
// Calibradas pela BNCC com habilidades oficiais e dificuldades rebalanceadas.

const questions = [];

function add(id, grade, diff, xp, bncc, topic, question, options, explanation) {
  questions.push({
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
// 6º ANO - MATEMÁTICA (EF06MA)
// ============================================================================

// FÁCIL (15 questões) - 1 etapa, vocabulário direto, conceitos fundamentais
add('mat-6-f-01', '6º ano', 'facil', 20, 'EF06MA01', 'Números Naturais',
  'Qual é o valor posicional do algarismo 7 no número 4.752?',
  ['700', '70', '7', '7.000'],
  'No número 4.752, o 7 ocupa a ordem das centenas, logo seu valor posicional é 7 × 100 = 700.');

add('mat-6-f-02', '6º ano', 'facil', 20, 'EF06MA07', 'Frações',
  'Qual é a fração irredutível equivalente a 15/20?',
  ['3/4', '2/3', '5/6', '1/2'],
  'Dividindo numerador e denominador por 5 (MDC): 15 ÷ 5 = 3 e 20 ÷ 5 = 4, obtendo a fração 3/4.');

add('mat-6-f-03', '6º ano', 'facil', 20, 'EF06MA08', 'Operações com Decimais',
  'Quanto é 4,5 + 2,35?',
  ['6,85', '6,40', '6,80', '7,15'],
  'Alinhando as vírgulas: 4,50 + 2,35 = 6,85.');

add('mat-6-f-04', '6º ano', 'facil', 20, 'EF06MA04', 'Múltiplos e Divisores',
  'Qual dos seguintes números é múltiplo comum de 3 e 5?',
  ['15', '12', '20', '25'],
  '15 é divisível tanto por 3 (15 ÷ 3 = 5) quanto por 5 (15 ÷ 5 = 3).');

add('mat-6-f-05', '6º ano', 'facil', 20, 'EF06MA17', 'Geometria Plana',
  'Qual é o perímetro de um retângulo de lados 6 cm e 4 cm?',
  ['20 cm', '24 cm', '10 cm', '16 cm'],
  'Perímetro = 6 + 6 + 4 + 4 = 20 cm.');

add('mat-6-f-06', '6º ano', 'facil', 20, 'EF06MA09', 'Frações e Decimais',
  'Qual número decimal representa a fração 1/2?',
  ['0,5', '0,2', '0,05', '0,25'],
  'Dividindo o numerador pelo denominador: 1 ÷ 2 = 0,5.');

add('mat-6-f-07', '6º ano', 'facil', 20, 'EF06MA08', 'Subtração Decimal',
  'Quanto é 10 - 3,4?',
  ['6,6', '7,6', '6,4', '7,4'],
  '10,0 - 3,4 = 6,6.');

add('mat-6-f-08', '6º ano', 'facil', 20, 'EF06MA16', 'Figuras Geométricas Espaciais',
  'Quantos vértices possui um cubo?',
  ['8', '6', '12', '4'],
  'O cubo tem 6 faces quadradas, 12 arestas e 8 vértices.');

add('mat-6-f-09', '6º ano', 'facil', 20, 'EF06MA13', 'Porcentagem Básica',
  'Quanto é 50% de 80 reais?',
  ['40 reais', '20 reais', '50 reais', '60 reais'],
  '50% representa a metade: 80 ÷ 2 = 40 reais.');

add('mat-6-f-10', '6º ano', 'facil', 20, 'EF06MA24', 'Medidas de Comprimento',
  'Quantos centímetros há em 3 metros?',
  ['300 cm', '30 cm', '3.000 cm', '150 cm'],
  '1 metro equivale a 100 centímetros, logo 3 metros equivalem a 3 × 100 = 300 cm.');

add('mat-6-f-11', '6º ano', 'facil', 20, 'EF06MA03', 'Operações Fundamentais',
  'Qual é o produto de 25 × 4?',
  ['100', '90', '120', '105'],
  '25 × 4 = 100.');

add('mat-6-f-12', '6º ano', 'facil', 20, 'EF06MA07', 'Adição de Frações',
  'Quanto é 2/7 + 3/7?',
  ['5/7', '5/14', '6/7', '1/7'],
  'Com denominadores iguais, somam-se os numeradores: (2 + 3)/7 = 5/7.');

add('mat-6-f-13', '6º ano', 'facil', 20, 'EF06MA19', 'Área de Quadrado',
  'Qual é a área de um quadrado de lado 5 cm?',
  ['25 cm²', '20 cm²', '10 cm²', '15 cm²'],
  'Área do quadrado = lado × lado = 5 × 5 = 25 cm².');

add('mat-6-f-14', '6º ano', 'facil', 20, 'EF06MA02', 'Sucessor e Antecessor',
  'Qual é o sucessor natural do número 999?',
  ['1.000', '998', '1.001', '990'],
  'O sucessor de um número natural é obtido somando 1: 999 + 1 = 1.000.');

add('mat-6-f-15', '6º ano', 'facil', 20, 'EF06MA30', 'Probabilidade Introdutória',
  'Ao lançar uma moeda comum, qual é a chance teórica de sair "cara"?',
  ['1 em 2 (50%)', '1 em 4 (25%)', '2 em 3 (66%)', '1 em 1 (100%)'],
  'A moeda tem 2 lados possíveis e igualmente prováveis, logo a chance é 1 em 2 (50%).');

// MÉDIO (15 questões) - 2 etapas, situações-problema familiares
add('mat-6-m-01', '6º ano', 'medio', 35, 'EF06MA04', 'MMC',
  'Dois ônibus saem juntos do terminal. A linha A sai a cada 12 minutos e a linha B a cada 18 minutos. Após quantos minutos sairão juntos novamente?',
  ['36 minutos', '24 minutos', '48 minutos', '30 minutos'],
  'Calculando o MMC(12, 18): múltiplos de 12 (12, 24, 36...) e de 18 (18, 36...). O menor múltiplo comum é 36.');

add('mat-6-m-02', '6º ano', 'medio', 35, 'EF06MA13', 'Porcentagem Comercial',
  'Uma camiseta de 60 reais teve um desconto de 25%. Quanto o cliente pagou por ela?',
  ['45 reais', '40 reais', '50 reais', '48 reais'],
  '25% de 60 = 60 ÷ 4 = 15 reais de desconto. Preço final = 60 - 15 = 45 reais.');

add('mat-6-m-03', '6º ano', 'medio', 35, 'EF06MA08', 'Situação com Decimais',
  'Lucas comprou 3 cadernos de R$ 4,50 cada e pagou com uma nota de R$ 20,00. Quanto recebeu de troco?',
  ['R$ 6,50', 'R$ 5,50', 'R$ 7,00', 'R$ 6,00'],
  'Custo total = 3 × 4,50 = R$ 13,50. Troco = 20,00 - 13,50 = R$ 6,50.');

add('mat-6-m-04', '6º ano', 'medio', 35, 'EF06MA19', 'Área de Retângulo',
  'Uma sala retangular tem 5 metros de comprimento e 4 metros de largura. Quantos metros quadrados de piso são necessários?',
  ['20 m²', '18 m²', '24 m²', '10 m²'],
  'Área = comprimento × largura = 5 × 4 = 20 m².');

add('mat-6-m-05', '6º ano', 'medio', 35, 'EF06MA07', 'Fração de Quantidade',
  'Em uma turma com 32 alunos, 3/4 praticam esportes. Quantos alunos praticam esportes?',
  ['24 alunos', '20 alunos', '28 alunos', '18 alunos'],
  '3/4 de 32 = (32 ÷ 4) × 3 = 8 × 3 = 24 alunos.');

add('mat-6-m-06', '6º ano', 'medio', 35, 'EF06MA05', 'MDC',
  'Deseja-se cortar duas fitas de 24 cm e 36 cm no maior tamanho possível sem sobras. Qual o comprimento de cada pedaço?',
  ['12 cm', '6 cm', '8 cm', '18 cm'],
  'O maior divisor comum entre 24 e 36 é o MDC(24, 36) = 12 cm.');

add('mat-6-m-07', '6º ano', 'medio', 35, 'EF06MA24', 'Conversão de Medidas',
  'Uma garrafa contém 1,5 litro de suco. Quantos copos de 250 mililitros podem ser enchidos completamente?',
  ['6 copos', '5 copos', '8 copos', '4 copos'],
  '1,5 L = 1.500 mL. Dividindo por 250 mL: 1.500 ÷ 250 = 6 copos.');

add('mat-6-m-08', '6º ano', 'medio', 35, 'EF06MA31', 'Estatística e Gráficos',
  'As notas de Sofia em 4 trabalhos foram 7, 8, 8 e 9. Qual foi a média aritmética das notas?',
  ['8,0', '7,5', '8,5', '8,2'],
  'Soma das notas = 7 + 8 + 8 + 9 = 32. Dividindo por 4: 32 ÷ 4 = 8,0.');

add('mat-6-m-09', '6º ano', 'medio', 35, 'EF06MA08', 'Multiplicação Decimal',
  'Um pacote de biscoitos custa R$ 2,75. Quanto custam 4 pacotes iguais?',
  ['R$ 11,00', 'R$ 10,50', 'R$ 11,50', 'R$ 10,00'],
  '2,75 × 4 = 11,00 reais.');

add('mat-6-m-10', '6º ano', 'medio', 35, 'EF06MA03', 'Divisão Inteira',
  'Ao dividir 87 bombons igualmente entre 4 amigos, quantos bombons sobram?',
  ['3 bombons', '1 bombom', '2 bombons', '0 bombons'],
  '87 ÷ 4 = 21 com resto 3 (pois 21 × 4 = 84 e 87 - 84 = 3).');

add('mat-6-m-11', '6º ano', 'medio', 35, 'EF06MA18', 'Classificação de Ângulos',
  'Um ângulo que mede 120° é classificado como:',
  ['Obtuso', 'Agudo', 'Reto', 'Raso'],
  'Ângulos maiores que 90° e menores que 180° são classificados como obtusos.');

add('mat-6-m-12', '6º ano', 'medio', 35, 'EF06MA09', 'Comparação de Decimais',
  'Qual dos seguintes números decimais é o maior?',
  ['0,75', '0,705', '0,09', '0,699'],
  'Comparando as casas decimais: 0,750 > 0,705 > 0,699 > 0,09.');

add('mat-6-m-13', '6º ano', 'medio', 35, 'EF06MA25', 'Perímetro e Cerca',
  'Um terreno quadrado de 15 metros de lado será cercado com 3 voltas de arame. Quantos metros de arame serão necessários?',
  ['180 metros', '60 metros', '120 metros', '225 metros'],
  'Perímetro de 1 volta = 4 × 15 = 60 metros. Com 3 voltas: 60 × 3 = 180 metros.');

add('mat-6-m-14', '6º ano', 'medio', 35, 'EF06MA13', 'Porcentagem Simples',
  'Em um estádio com 500 pessoas, 10% são crianças. Quantas crianças estão no estádio?',
  ['50 crianças', '25 crianças', '100 crianças', '75 crianças'],
  '10% de 500 = 500 ÷ 10 = 50 crianças.');

add('mat-6-m-15', '6º ano', 'medio', 35, 'EF06MA30', 'Probabilidade com Dados',
  'Ao lançar um dado comum de 6 faces, qual é a probabilidade de obter um número par?',
  ['3 em 6 (1/2)', '2 em 6 (1/3)', '1 em 6', '4 em 6 (2/3)'],
  'As faces pares são 2, 4 e 6 (3 casos favoráveis entre 6 possíveis): 3/6 = 1/2.');

// DIFÍCIL (15 questões) - 2 a 3 etapas, integração de conceitos
add('mat-6-d-01', '6º ano', 'dificil', 55, 'EF06MA07', 'Operações Mistas com Frações',
  'Calcule: 2/3 + 1/4 - 1/6.',
  ['3/4', '5/6', '7/12', '2/3'],
  'MMC(3, 4, 6) = 12. Convertendo: 8/12 + 3/12 - 2/12 = 9/12 = 3/4.');

add('mat-6-d-02', '6º ano', 'dificil', 55, 'EF06MA19', 'Área de Figura Composta',
  'Uma horta em forma de "L" é formada por dois retângulos: um de 4 m × 3 m e outro de 2 m × 2 m. Qual é a área total da horta?',
  ['16 m²', '14 m²', '18 m²', '12 m²'],
  'Área 1 = 4 × 3 = 12 m². Área 2 = 2 × 2 = 4 m². Área total = 12 + 4 = 16 m².');

add('mat-6-d-03', '6º ano', 'dificil', 55, 'EF06MA08', 'Problema com Decimais',
  'Um ciclista percorreu 12,8 km pela manhã e 8,45 km à tarde. Se sua meta do dia era de 25 km, quanto ainda falta pedalar?',
  ['3,75 km', '4,25 km', '3,55 km', '4,75 km'],
  'Total percorrido = 12,80 + 8,45 = 21,25 km. Restante = 25,00 - 21,25 = 3,75 km.');

add('mat-6-d-04', '6º ano', 'dificil', 55, 'EF06MA13', 'Aumento Percentual',
  'O ingresso do cinema custava R$ 20,00 e sofreu um reajuste de 15%. Qual é o novo preço do ingresso?',
  ['R$ 23,00', 'R$ 22,50', 'R$ 23,50', 'R$ 24,00'],
  '15% de 20 = (15 × 20) ÷ 100 = 3 reais. Novo preço = 20 + 3 = R$ 23,00.');

add('mat-6-d-05', '6º ano', 'dificil', 55, 'EF06MA03', 'Problema das Quatro Operações',
  'Uma caixa contém 15 pacotes com 12 lápis cada. Se esses lápis forem redistribuídos igualmente em 9 caixas menores, quantos lápis terá cada caixa?',
  ['20 lápis', '18 lápis', '22 lápis', '15 lápis'],
  'Total de lápis = 15 × 12 = 180 lápis. Dividindo por 9 caixas: 180 ÷ 9 = 20 lápis por caixa.');

add('mat-6-d-06', '6º ano', 'dificil', 55, 'EF06MA24', 'Medidas de Massa',
  'Um comerciante comprou 2,5 kg de café e quer embalar em saquinhos de 125 gramas. Quantos saquinhos ele conseguirá fazer?',
  ['20 saquinhos', '15 saquinhos', '25 saquinhos', '18 saquinhos'],
  '2,5 kg = 2.500 g. Dividindo por 125 g: 2.500 ÷ 125 = 20 saquinhos.');

add('mat-6-d-07', '6º ano', 'dificil', 55, 'EF06MA06', 'Números Primos',
  'Qual é a soma dos números primos compreendidos entre 10 e 20?',
  ['60', '58', '56', '62'],
  'Os primos entre 10 e 20 são 11, 13, 17 e 19. A soma é: 11 + 13 + 17 + 19 = 60.');

add('mat-6-d-08', '6º ano', 'dificil', 55, 'EF06MA10', 'Multiplicação de Frações',
  'Calcule: (3/5) de (5/6) de 60.',
  ['30', '25', '35', '20'],
  '(3/5) × (5/6) = 15/30 = 1/2. Metade de 60 é 60 ÷ 2 = 30.');

add('mat-6-d-09', '6º ano', 'dificil', 55, 'EF06MA29', 'Interpretação de Tabelas',
  'Em uma pesquisa sobre transporte escolar, 18 alunos vão a pé, 24 de ônibus e 8 de bicicleta. Qual porcentagem dos alunos usa ônibus?',
  ['48%', '40%', '50%', '45%'],
  'Total de alunos = 18 + 24 + 8 = 50 alunos. Proporção de ônibus = 24/50 = 48/100 = 48%.');

add('mat-6-d-10', '6º ano', 'dificil', 55, 'EF06MA17', 'Perímetro e Álgebra Introdutória',
  'Um triângulo equilátero tem perímetro de 36 cm. Qual é a medida de cada um dos seus lados?',
  ['12 cm', '10 cm', '9 cm', '14 cm'],
  'Um triângulo equilátero tem 3 lados congruentes: 36 ÷ 3 = 12 cm.');

add('mat-6-d-11', '6º ano', 'dificil', 55, 'EF06MA12', 'Divisão com Decimais',
  'Quanto é 7,5 ÷ 0,25?',
  ['30', '25', '35', '20'],
  'Multiplicando ambos por 100: 750 ÷ 25 = 30.');

add('mat-6-d-12', '6º ano', 'dificil', 55, 'EF06MA05', 'MDC e Divisibilidade',
  'Qual é o maior número de alunos que pode ser organizado em grupos iguais sem sobras a partir de 48 meninas e 72 meninos?',
  ['24 alunos', '12 alunos', '18 alunos', '16 alunos'],
  'O número de grupos corresponde ao MDC(48, 72) = 24 alunos.');

add('mat-6-d-13', '6º ano', 'dificil', 55, 'EF06MA32', 'Média Ponderada Simples',
  'Em um jogo, Pedro marcou 15 pontos na 1ª fase, 20 na 2ª e 25 na 3ª. Qual a pontuação média por fase?',
  ['20 pontos', '18 pontos', '22 pontos', '21 pontos'],
  'Média = (15 + 20 + 25) ÷ 3 = 60 ÷ 3 = 20 pontos.');

add('mat-6-d-14', '6º ano', 'dificil', 55, 'EF06MA19', 'Comparação de Áreas',
  'Um retângulo de 8 cm por 2 cm tem a mesma área de um quadrado. Qual é o lado desse quadrado?',
  ['4 cm', '5 cm', '6 cm', '3 cm'],
  'Área do retângulo = 8 × 2 = 16 cm². O quadrado de mesma área tem lado L² = 16 => L = 4 cm.');

add('mat-6-d-15', '6º ano', 'dificil', 55, 'EF06MA30', 'Probabilidade em Urna',
  'Uma urna tem 4 bolas azuis, 3 vermelhas e 5 amarelas. Qual é a chance de retirar uma bola azul?',
  ['4 em 12 (1/3)', '3 em 12 (1/4)', '5 em 12', '1 em 2'],
  'Total de bolas = 4 + 3 + 5 = 12. Bolas azuis = 4. Probabilidade = 4/12 = 1/3.');

// EXPERT (15 questões) - Desafios de raciocínio profundo sem conteúdo fora do ano
add('mat-6-e-01', '6º ano', 'expert', 80, 'EF06MA03', 'Expressões com Parênteses',
  'Resolva a expressão: 50 - [3 × (8 + 2) - 10] ÷ 2.',
  ['40', '35', '45', '30'],
  '(8 + 2) = 10; 3 × 10 = 30; 30 - 10 = 20; 20 ÷ 2 = 10; 50 - 10 = 40.');

add('mat-6-e-02', '6º ano', 'expert', 80, 'EF06MA14', 'Sequências Numéricas',
  'Observe a sequência: 3, 7, 11, 15, 19... Qual é o 10º termo dessa sequência?',
  ['39', '35', '41', '37'],
  'A sequência soma 4 a cada termo (razão 4). O 10º termo é: 3 + 4 × (10 - 1) = 3 + 36 = 39.');

add('mat-6-e-03', '6º ano', 'expert', 80, 'EF06MA07', 'Problema com Frações Restantes',
  'Ana gastou 1/3 do seu salário com aluguel e 2/5 do restante com alimentação. Que fração do salário total sobrou para outras despesas?',
  ['2/5', '1/2', '4/15', '7/15'],
  'Após o aluguel sobram 1 - 1/3 = 2/3. Gasto com alimentação: 2/5 × 2/3 = 4/15. Sobra: 2/3 - 4/15 = 10/15 - 4/15 = 6/15 = 2/5.');

add('mat-6-e-04', '6º ano', 'expert', 80, 'EF06MA04', 'Múltiplos no Calendário',
  'Três amigos correm na pista. O 1º dá uma volta em 4 minutos, o 2º em 6 minutos e o 3º em 10 minutos. Se saírem juntos, após quantas horas se encontrarão no ponto de partida pela primeira vez?',
  ['1 hora', '2 horas', '1 hora e meia', '45 minutos'],
  'MMC(4, 6, 10): 4 = 2², 6 = 2×3, 10 = 2×5. MMC = 2² × 3 × 5 = 60 minutos, que é exatamente 1 hora.');

add('mat-6-e-05', '6º ano', 'expert', 80, 'EF06MA19', 'Área com Moldura',
  'Um quadro retangular mede 20 cm por 15 cm. Ele recebe uma moldura de 2 cm de largura ao redor de todas as bordas. Qual é a área total externa incluindo a moldura?',
  ['456 cm²', '400 cm²', '480 cm²', '420 cm²'],
  'Comprimento externo = 20 + 2 + 2 = 24 cm. Largura externa = 15 + 2 + 2 = 19 cm. Área total = 24 × 19 = 456 cm².');

add('mat-6-e-06', '6º ano', 'expert', 80, 'EF06MA13', 'Descontos Sucessivos Básicos',
  'Um produto de R$ 100,00 teve um desconto de 10% e, no mês seguinte, outro desconto de 10% sobre o novo valor. Qual foi o preço final?',
  ['R$ 81,00', 'R$ 80,00', 'R$ 82,00', 'R$ 85,00'],
  'Após o 1º desconto: 100 - 10 = R$ 90,00. 10% de 90 = R$ 9,00. Preço final: 90 - 9 = R$ 81,00.');

add('mat-6-e-07', '6º ano', 'expert', 80, 'EF06MA24', 'Velocidade e Tempo Introdutório',
  'Um trem percorre 180 km em 3 horas com velocidade constante. Quanto tempo ele levará para percorrer 300 km na mesma velocidade?',
  ['5 horas', '4 horas', '6 horas', '4 horas e meia'],
  'Velocidade = 180 ÷ 3 = 60 km/h. Para 300 km: 300 ÷ 60 = 5 horas.');

add('mat-6-e-08', '6º ano', 'expert', 80, 'EF06MA02', 'Lógica de Numeração',
  'Quantas vezes o algarismo 5 aparece ao escrevermos todos os números inteiros de 1 a 100?',
  ['20 vezes', '19 vezes', '10 vezes', '21 vezes'],
  'Nas unidades (5, 15, 25... 95): 10 vezes. Nas dezenas (50, 51... 59): 10 vezes (o 55 conta 1 na unidade e 1 na dezena). Total = 20 vezes.');

add('mat-6-e-09', '6º ano', 'expert', 80, 'EF06MA05', 'MDC e Partilha Exata',
  'Um agricultor colheu 72 maçãs e 108 laranjas. Ele quer montar cestas idênticas com o maior número possível de frutas sem sobras. Quantas frutas terá cada cesta?',
  ['5 frutas (2 maçãs e 3 laranjas)', '6 frutas', '4 frutas', '7 frutas'],
  'MDC(72, 108) = 36 cestas. Cada cesta terá 72÷36 = 2 maçãs e 108÷36 = 3 laranjas. Total por cesta = 2 + 3 = 5 frutas.');

add('mat-6-e-10', '6º ano', 'expert', 80, 'EF06MA21', 'Volume de Bloco Retangular',
  'Um aquário tem 50 cm de comprimento, 30 cm de largura e 20 cm de altura. Quantos litros de água ele comporta quando totalmente cheio?',
  ['30 litros', '25 litros', '35 litros', '40 litros'],
  'Volume = 50 × 30 × 20 = 30.000 cm³. Como 1.000 cm³ = 1 litro, temos 30.000 ÷ 1.000 = 30 litros.');

add('mat-6-e-11', '6º ano', 'expert', 80, 'EF06MA08', 'Média de Preços',
  'Mariana comprou 2 livros a R$ 25,00 cada e 3 livros a R$ 30,00 cada. Qual foi o preço médio de cada livro?',
  ['R$ 28,00', 'R$ 27,50', 'R$ 28,50', 'R$ 27,00'],
  'Gasto total = (2 × 25) + (3 × 30) = 50 + 90 = R$ 140,00. Total de livros = 5. Média = 140 ÷ 5 = R$ 28,00.');

add('mat-6-e-12', '6º ano', 'expert', 80, 'EF06MA17', 'Composição de Figuras',
  'Dois quadrados idênticos de lado 6 cm são unidos lado a lado formando um retângulo. Qual é o perímetro desse novo retângulo?',
  ['36 cm', '48 cm', '30 cm', '40 cm'],
  'O retângulo tem lados 12 cm e 6 cm. Perímetro = 2 × (12 + 6) = 2 × 18 = 36 cm.');

add('mat-6-e-13', '6º ano', 'expert', 80, 'EF06MA15', 'Contagem e Combinações Simples',
  'Para um lanche, pode-se escolher 1 entre 3 tipos de sucos e 1 entre 4 tipos de sanduíches. Quantas combinações diferentes de lanche são possíveis?',
  ['12 combinações', '7 combinações', '10 combinações', '16 combinações'],
  'Pelo princípio multiplicativo: 3 tipos de suco × 4 tipos de sanduíche = 12 combinações.');

add('mat-6-e-14', '6º ano', 'expert', 80, 'EF06MA03', 'Problema das Idades',
  'A soma das idades de um pai e seu filho é 48 anos. O pai tem o triplo da idade do filho. Qual é a idade do filho?',
  ['12 anos', '10 anos', '14 anos', '16 anos'],
  'Pai = 3 × Filho. Pai + Filho = 4 × Filho = 48 anos. Filho = 48 ÷ 4 = 12 anos.');

add('mat-6-e-15', '6º ano', 'expert', 80, 'EF06MA33', 'Interpretação e Análise Crítica',
  'Em um teste de 20 questões, ganham-se 5 pontos por acerto e perdem-se 2 pontos por erro. Se um aluno respondeu todas e fez 72 pontos, quantas questões ele acertou?',
  ['16 questões', '15 questões', '17 questões', '14 questões'],
  'Se acertou A e errou (20 - A): 5A - 2(20 - A) = 72 => 5A - 40 + 2A = 72 => 7A = 112 => A = 16.');

console.log('Total 6º ano geradas:', questions.length);

// Escreve módulo parcial ou continua com 7º, 8º e 9º ano
fs.writeFileSync('scripts/fundamental_math_temp.json', JSON.stringify(questions, null, 2));
