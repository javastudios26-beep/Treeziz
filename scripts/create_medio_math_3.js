import fs from 'fs';

const list = JSON.parse(fs.readFileSync('scripts/medio_math_temp_2.json', 'utf-8'));

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
// 3º ANO ENSINO MÉDIO - MATEMÁTICA (EM13MAT)
// ============================================================================

// FÁCIL (15 questões)
q('mat-3em-f-01', '3º ano EM', 'facil', 20, 'EM13MAT501', 'Ponto Médio de Segmento',
  'Quais são as coordenadas do ponto médio M do segmento com extremos A(2, 4) e B(6, 8)?',
  ['M(4, 6)', 'M(8, 12)', 'M(3, 5)', 'M(4, 4)'],
  'Xm = (2 + 6)/2 = 4 e Ym = (4 + 8)/2 = 6. Logo M(4, 6).');

q('mat-3em-f-02', '3º ano EM', 'facil', 20, 'EM13MAT502', 'Equação Reduzida da Reta',
  'Na reta y = 3x - 2, qual é o coeficiente angular (declividade)?',
  ['3', '-2', '1', '2/3'],
  'Na forma y = mx + q, o coeficiente angular m é o número que multiplica x: m = 3.');

q('mat-3em-f-03', '3º ano EM', 'facil', 20, 'EM13MAT313', 'Matemática Financeira (Juros Simples)',
  'Qual é o juro simples produzido por um capital de R$ 1.000,00 aplicado a 2% ao mês durante 5 meses?',
  ['R$ 100,00', 'R$ 200,00', 'R$ 1.100,00', 'R$ 50,00'],
  'J = C × i × t = 1000 × 0,02 × 5 = R$ 100,00.');

q('mat-3em-f-04', '3º ano EM', 'facil', 20, 'EM13MAT503', 'Equação da Circunferência na Origem',
  'Qual é o raio da circunferência representada pela equação x² + y² = 25?',
  ['5', '25', '12,5', '10'],
  'A equação da circunferência centrada na origem é x² + y² = r². Como r² = 25, temos r = 5.');

q('mat-3em-f-05', '3º ano EM', 'facil', 20, 'EM13MAT501', 'Distância entre Dois Pontos',
  'Qual é a distância entre a origem (0, 0) e o ponto P(3, 4)?',
  ['5', '7', '1', '25'],
  'd = √(3² + 4²) = √(9 + 16) = √25 = 5.');

q('mat-3em-f-06', '3º ano EM', 'facil', 20, 'EM13MAT502', 'Retas Paralelas',
  'Duas retas no plano são paralelas se, e somente se, seus coeficientes angulares forem:',
  ['Iguais', 'Opostos e inversos', 'Iguais a zero', 'Ambos positivos'],
  'Retas paralelas possuem a mesma inclinação, portanto m₁ = m₂.');

q('mat-3em-f-07', '3º ano EM', 'facil', 20, 'EM13MAT313', 'Montante a Juros Simples',
  'Um capital de R$ 500,00 rendeu R$ 60,00 de juros. Qual foi o montante final resgatado?',
  ['R$ 560,00', 'R$ 600,00', 'R$ 530,00', 'R$ 440,00'],
  'Montante = Capital + Juros = 500 + 60 = R$ 560,00.');

q('mat-3em-f-08', '3º ano EM', 'facil', 20, 'EM13MAT203', 'Média Ponderada Simples',
  'Em um bimestre, a prova tem peso 3 e o trabalho peso 2. Se o aluno tirou 8 na prova e 7 no trabalho, qual foi sua média ponderada?',
  ['7,6', '7,5', '7,8', '8,0'],
  'Média = (8 × 3 + 7 × 2) / (3 + 2) = (24 + 14) / 5 = 38 / 5 = 7,6.');

q('mat-3em-f-09', '3º ano EM', 'facil', 20, 'EM13MAT502', 'Reta Horizontal',
  'A reta que passa por (0, 4) e (5, 4) tem equação:',
  ['y = 4', 'x = 4', 'y = x + 4', 'y = 0'],
  'Todos os pontos têm ordenada constante y = 4, sendo uma reta horizontal paralela ao eixo x.');

q('mat-3em-f-10', '3º ano EM', 'facil', 20, 'EM13MAT503', 'Centro da Circunferência',
  'Quais são as coordenadas do centro da circunferência (x - 2)² + (y + 3)² = 16?',
  ['(2, -3)', '(-2, 3)', '(2, 3)', '(-2, -3)'],
  'Forma reduzida: (x - a)² + (y - b)² = r². Aqui a = 2 e b = -3, logo C(2, -3).');

q('mat-3em-f-11', '3º ano EM', 'facil', 20, 'EM13MAT314', 'Juros Compostos Introdutório',
  'Se aplicarmos R$ 1.000,00 a juros compostos de 10% ao mês por 2 meses, qual será o montante?',
  ['R$ 1.210,00', 'R$ 1.200,00', 'R$ 1.100,00', 'R$ 1.220,00'],
  'M = 1000 × (1,10)² = 1000 × 1,21 = R$ 1.210,00.');

q('mat-3em-f-12', '3º ano EM', 'facil', 20, 'EM13MAT204', 'Espaço Amostral e Eventos',
  'Qual é a probabilidade de um evento certo ocorrer?',
  ['1 (ou 100%)', '0', '0,5', 'Infinito'],
  'Por definição de axiomas de probabilidade, o evento certo tem probabilidade exatamente igual a 1 (100%).');

q('mat-3em-f-13', '3º ano EM', 'facil', 20, 'EM13MAT502', 'Equação Geral da Reta',
  'A equação reduzida y = 2x - 5 expressa na forma geral Ax + By + C = 0 é:',
  ['2x - y - 5 = 0', '2x + y - 5 = 0', 'x - 2y + 5 = 0', '2x - y + 5 = 0'],
  'Passando y para o segundo membro: 2x - y - 5 = 0.');

q('mat-3em-f-14', '3º ano EM', 'facil', 20, 'EM13MAT203', 'Amplitude e Desvio',
  'Dada a amostra {10, 12, 14, 16, 18}, qual é a amplitude dos dados?',
  ['8', '14', '4', '18'],
  'Amplitude = maior valor - menor valor = 18 - 10 = 8.');

q('mat-3em-f-15', '3º ano EM', 'facil', 20, 'EM13MAT501', 'Alinhamento de Três Pontos',
  'Se três pontos pertencem à mesma reta, dizemos que eles são:',
  ['Colineares', 'Concorrentes', 'Coplanares mas reversos', 'Paralelos'],
  'Pontos que pertencem a uma mesma linha reta são chamados de colineares.');

// MÉDIO (15 questões)
q('mat-3em-m-01', '3º ano EM', 'medio', 35, 'EM13MAT502', 'Retas Perpendiculares',
  'Qual é o coeficiente angular de uma reta perpendicular à reta r: y = 2x + 1?',
  ['-1/2', '2', '-2', '1/2'],
  'Retas perpendiculares satisfazem m₁ × m₂ = -1. Logo: m₂ = -1/2.');

q('mat-3em-m-02', '3º ano EM', 'medio', 35, 'EM13MAT503', 'Equação Reduzida da Circunferência',
  'Qual é a equação da circunferência com centro C(3, 4) e raio r = 2?',
  ['(x - 3)² + (y - 4)² = 4', '(x + 3)² + (y + 4)² = 4', '(x - 3)² + (y - 4)² = 2', 'x² + y² = 16'],
  '(x - a)² + (y - b)² = r² => (x - 3)² + (y - 4)² = 2² = 4.');

q('mat-3em-m-03', '3º ano EM', 'medio', 35, 'EM13MAT314', 'Juros Compostos e Fator de Correção',
  'Uma dívida de R$ 2.000,00 foi paga com 3 meses de atraso a uma taxa de juros compostos de 5% ao mês. Qual é a expressão correta do montante?',
  ['2000 × (1,05)³', '2000 × (1 + 0,15)', '2000 × (0,95)³', '2000 × 3 × 1,05'],
  'A fórmula do montante a juros compostos é M = C(1 + i)ᵗ, logo 2000 × (1,05)³.');

q('mat-3em-m-04', '3º ano EM', 'medio', 35, 'EM13MAT502', 'Equação da Reta Passando por Dois Pontos',
  'Qual é a equação da reta que passa pelos pontos A(1, 2) e B(3, 6)?',
  ['y = 2x', 'y = 2x + 1', 'y = 3x - 1', 'y = x + 1'],
  'm = (6 - 2)/(3 - 1) = 4/2 = 2. y - 2 = 2(x - 1) => y = 2x.');

q('mat-3em-m-05', '3º ano EM', 'medio', 35, 'EM13MAT203', 'Desvio Padrão Conceitual',
  'O desvio padrão de um conjunto de dados mede:',
  ['A dispersão ou variabilidade dos dados em relação à média', 'Apenas a média geométrica dos valores', 'O valor mais frequente da amostra', 'A diferença entre os dois maiores valores'],
  'O desvio padrão quantifica o quanto os dados se afastam, em média, da média aritmética.');

q('mat-3em-m-06', '3º ano EM', 'medio', 35, 'EM13MAT501', 'Área de Triângulo no Plano Cartesiano',
  'Qual é a área do triângulo com vértices nos pontos A(0, 0), B(4, 0) e C(0, 3)?',
  ['6', '12', '7', '5'],
  'O triângulo tem base 4 no eixo x e altura 3 no eixo y: Área = (4 × 3)/2 = 6.');

q('mat-3em-m-07', '3º ano EM', 'medio', 35, 'EM13MAT313', 'Taxa Efetiva e Inflação Introdutória',
  'Se a inflação acumulada no ano foi de 6% e um investimento rendeu 10% no mesmo período, o ganho real foi:',
  ['Positivo (superior à inflação)', 'Negativo', 'Nulo', 'Exatamente 16%'],
  'Como o rendimento nominal (10%) superou a taxa de inflação (6%), houve ganho real de poder de compra.');

q('mat-3em-m-08', '3º ano EM', 'medio', 35, 'EM13MAT503', 'Posição de Ponto em Relação à Circunferência',
  'O ponto P(1, 2) em relação à circunferência x² + y² = 9 está:',
  ['No interior da circunferência', 'Sobre a circunferência', 'No exterior da circunferência', 'No centro'],
  '1² + 2² = 1 + 4 = 5. Como 5 < 9 (r²), a distância ao centro é menor que o raio, logo está no interior.');

q('mat-3em-m-09', '3º ano EM', 'medio', 35, 'EM13MAT502', 'Interseção de Reta com o Eixo X',
  'Qual é a raiz (interseção com eixo x) da reta 3x - 6 = y?',
  ['(2, 0)', '(-2, 0)', '(0, -6)', '(3, 0)'],
  'Fazendo y = 0: 3x - 6 = 0 => 3x = 6 => x = 2. Ponto (2, 0).');

q('mat-3em-m-10', '3º ano EM', 'medio', 35, 'EM13MAT204', 'Probabilidade com Eventos Simultâneos',
  'Lançando dois dados, qual é a probabilidade de ambos apresentarem números primos (2, 3 ou 5)?',
  ['9/36 (1/4)', '1/2', '1/3', '1/6'],
  'Primos em cada dado: 3 opções (2, 3, 5). Total conjunto: 3 × 3 = 9 casos favoráveis entre 36: 9/36 = 1/4.');

q('mat-3em-m-11', '3º ano EM', 'medio', 35, 'EM13MAT314', 'Equivalência de Taxas Simples',
  'Uma taxa de juros simples de 24% ao ano equivale a qual taxa mensal?',
  ['2% ao mês', '1% ao mês', '3% ao mês', '12% ao mês'],
  'Em juros simples, as taxas são diretamente proporcionais ao tempo: 24% ÷ 12 = 2% ao mês.');

q('mat-3em-m-12', '3º ano EM', 'medio', 35, 'EM13MAT502', 'Reta Bissetriz dos Quadrantes Ímpares',
  'Qual é a equação da reta bissetriz que divide ao meio os 1º e 3º quadrantes?',
  ['y = x', 'y = -x', 'y = 2x', 'x + y = 0'],
  'Os pontos dessa bissetriz têm abscissa e ordenada idênticas: y = x.');

q('mat-3em-m-13', '3º ano EM', 'medio', 35, 'EM13MAT503', 'Raio a partir da Equação Geral',
  'A equação x² + y² - 4x = 0 representa uma circunferência com centro e raio:',
  ['Centro (2, 0) e raio 2', 'Centro (0, 2) e raio 4', 'Centro (-2, 0) e raio 2', 'Centro (4, 0) e raio 16'],
  'Completando quadrados: (x - 2)² - 4 + y² = 0 => (x - 2)² + y² = 4 = 2². Centro (2, 0) e raio r = 2.');

q('mat-3em-m-14', '3º ano EM', 'medio', 35, 'EM13MAT203', 'Interpretação de Gráfico Boxplot',
  'Em um diagrama de caixa (boxplot), a linha central dentro do retângulo representa:',
  ['A mediana da distribuição', 'A média aritmética simples', 'O valor máximo', 'O desvio padrão'],
  'A linha interior ao boxplot marca exatamente a mediana (Q2 / segundo quartil) do conjunto.');

q('mat-3em-m-15', '3º ano EM', 'medio', 35, 'EM13MAT313', 'Desconto Racional Simples',
  'Um título com valor nominal de R$ 1.100,00 foi resgatado um mês antes do vencimento com taxa de 10% ao mês. Qual foi seu valor atual?',
  ['R$ 1.000,00', 'R$ 990,00', 'R$ 1.050,00', 'R$ 900,00'],
  'Valor Atual × (1 + 0,10) = 1100 => Valor Atual = 1100 / 1,10 = R$ 1.000,00.');

// DIFÍCIL (15 questões)
q('mat-3em-d-01', '3º ano EM', 'dificil', 55, 'EM13MAT502', 'Distância de Ponto a Reta',
  'Qual é a distância do ponto P(0, 0) à reta de equação 3x + 4y - 15 = 0?',
  ['3 unidades', '5 unidades', '15 unidades', '4 unidades'],
  'd = |3(0) + 4(0) - 15| / √(3² + 4²) = |-15| / 5 = 15 / 5 = 3 unidades.');

q('mat-3em-d-02', '3º ano EM', 'dificil', 55, 'EM13MAT503', 'Posição Relativa de Reta e Circunferência',
  'A reta y = 3 em relação à circunferência x² + y² = 25 é:',
  ['Secante, interceptando a circunferência em 2 pontos', 'Tangente em 1 ponto', 'Exterior', 'Passa pelo centro'],
  'Substituindo y = 3: x² + 9 = 25 => x² = 16 => x = ±4. Intercepta nos pontos (4, 3) e (-4, 3), sendo secante.');

q('mat-3em-d-03', '3º ano EM', 'dificil', 55, 'EM13MAT314', 'Amortização e Parcelamento',
  'Um eletrodoméstico de R$ 1.200,00 foi financiado em duas parcelas mensais iguais pelo sistema Price sem entrada. Se a taxa for 0%, cada parcela seria R$ 600,00. Com taxa de 2% a.m., o valor de cada parcela será:',
  ['Maior que R$ 600,00 para cobrir os juros do saldo devedor', 'Exatamente R$ 600,00', 'Menor que R$ 600,00', 'R$ 610,00 fixo'],
  'Havendo taxa de juros sobre o saldo financiado, as parcelas incorporam os juros, ficando superiores a R$ 600,00.');

q('mat-3em-d-04', '3º ano EM', 'dificil', 55, 'EM13MAT502', 'Área de Quadrilátero no Plano',
  'Qual é a área do retângulo com vértices A(1, 1), B(5, 1), C(5, 4) e D(1, 4)?',
  ['12 unidades²', '16 unidades²', '10 unidades²', '14 unidades²'],
  'Base = 5 - 1 = 4. Altura = 4 - 1 = 3. Área = 4 × 3 = 12 unidades².');

q('mat-3em-d-05', '3º ano EM', 'dificil', 55, 'EM13MAT204', 'Probabilidade em Árvore de Decisão',
  'Uma fábrica tem duas máquinas: a máquina A faz 60% das peças (com 2% de defeito) e a máquina B faz 40% (com 5% de defeito). Qual é a probabilidade total de uma peça qualquer ser defeituosa?',
  ['3,2%', '3,5%', '2,8%', '4,0%'],
  'P(Defeito) = (0,60 × 0,02) + (0,40 × 0,05) = 0,012 + 0,020 = 0,032 = 3,2%.');

q('mat-3em-d-06', '3º ano EM', 'dificil', 55, 'EM13MAT503', 'Reta Tangente à Circunferência',
  'A reta x = 5 é tangente à circunferência x² + y² = 25 no ponto:',
  ['(5, 0)', '(0, 5)', '(5, 5)', '(-5, 0)'],
  'Para x = 5: 5² + y² = 25 => y² = 0 => y = 0. Ponto único de contato (5, 0).');

q('mat-3em-d-07', '3º ano EM', 'dificil', 55, 'EM13MAT315', 'Equivalência de Taxas Compostas',
  'Uma taxa de 10% ao ano em 2 anos acumulada a juros compostos corresponde a:',
  ['21%', '20%', '22%', '19%'],
  'Fator = (1,10)² = 1,21, correspondendo a um aumento acumulado de 21%.');

q('mat-3em-d-08', '3º ano EM', 'dificil', 55, 'EM13MAT502', 'Feixe de Retas Concorrentes',
  'Qual é o ponto de encontro comum das retas 2x + y = 7 e x - y = 2?',
  ['(3, 1)', '(2, 3)', '(4, -1)', '(1, 5)'],
  'Somando as duas equações: 3x = 9 => x = 3. Da segunda: 3 - y = 2 => y = 1. Ponto (3, 1).');

q('mat-3em-d-09', '3º ano EM', 'dificil', 55, 'EM13MAT203', 'Amostragem e Erro Amostral',
  'Para reduzir a margem de erro de uma pesquisa estatística pela metade, o tamanho da amostra deve ser:',
  ['Multiplicado por 4', 'Duplicado', 'Triplicado', 'Dividido por 2'],
  'A margem de erro é inversamente proporcional à raiz quadrada de n (1/√n). Para reduzir o erro à metade, n deve ser multiplicado por 2² = 4.');

q('mat-3em-d-10', '3º ano EM', 'dificil', 55, 'EM13MAT501', 'Simetria de Ponto em Relação à Origem',
  'O simétrico do ponto P(3, -5) em relação à origem (0, 0) é:',
  ['(-3, 5)', '(3, 5)', '(-3, -5)', '(5, -3)'],
  'Em relação à origem, invertem-se ambos os sinais: (-x, -y) = (-3, 5).');

q('mat-3em-d-11', '3º ano EM', 'dificil', 55, 'EM13MAT503', 'Circunferências Concêntricas',
  'Duas circunferências são concêntricas se possuírem:',
  ['O mesmo centro e raios distintos', 'O mesmo raio e centros distintos', 'Pelo menos dois pontos de contato', 'Raios iguais e centros coincidentes'],
  'Circunferências concêntricas compartilham o mesmo ponto central mas têm raios diferentes.');

q('mat-3em-d-12', '3º ano EM', 'dificil', 55, 'EM13MAT314', 'Cálculo de Prestação e Saldo Devedor',
  'Se um empréstimo de R$ 1.000,00 for liquidado em pagamento único após 6 meses a juros compostos de 2% ao mês, qual expressão calcula o valor?',
  ['1000 × (1,02)⁶', '1000 × (1 + 0,12)', '1000 × (0,98)⁶', '1000 × 6 × 1,02'],
  'M = C(1 + i)ᵗ = 1000 × (1,02)⁶.');

q('mat-3em-d-13', '3º ano EM', 'dificil', 55, 'EM13MAT502', 'Ângulo Entre Duas Retas',
  'Se uma reta tem coeficiente angular m₁ = 1 (inclinação de 45°) e outra tem m₂ = -1 (inclinação de 135°), o ângulo formado entre elas é:',
  ['90° (são perpendiculares)', '45°', '60°', '30°'],
  'm₁ × m₂ = 1 × (-1) = -1, comprovando que formam um ângulo reto (90°).');

q('mat-3em-d-14', '3º ano EM', 'dificil', 55, 'EM13MAT204', 'Distribuição Normal Básica',
  'Em uma distribuição com média 70 e desvio padrão 5, qual porcentagem aproximada da população se encontra entre 65 e 75 (um desvio em torno da média)?',
  ['Cerca de 68%', 'Cerca de 95%', 'Cerca de 50%', 'Cerca de 99%'],
  'Pela regra empírica da curva normal, aproximadamente 68,2% dos dados situam-se a até 1 desvio padrão da média.');

q('mat-3em-d-15', '3º ano EM', 'dificil', 55, 'EM13MAT503', 'Equação da Reta Tangente no Ponto',
  'Qual é o coeficiente angular da reta tangente à circunferência x² + y² = 25 no ponto (3, 4)?',
  ['-3/4', '4/3', '-4/3', '3/4'],
  'O raio que liga a origem ao ponto (3, 4) tem declividade m_raio = 4/3. A reta tangente é perpendicular ao raio: m_tg = -1 / (4/3) = -3/4.');

// EXPERT (15 questões)
q('mat-3em-e-01', '3º ano EM', 'expert', 80, 'EM13MAT503', 'Problema de Otimização no Plano',
  'Qual é a menor distância entre o ponto P(6, 8) e a circunferência x² + y² = 9?',
  ['7 unidades', '10 unidades', '3 unidades', '4 unidades'],
  'A distância de P(6, 8) à origem é √(6² + 8²) = 10. Como o raio da circunferência é 3, a menor distância é 10 - 3 = 7 unidades.');

q('mat-3em-e-02', '3º ano EM', 'expert', 80, 'EM13MAT316', 'Planejamento de Aposentadoria Financeira',
  'Para acumular um montante garantido, aportes mensais fixos rendem a juros compostos. Esse processo de acumulação em finanças é modelado por:',
  ['Série uniforme de pagamentos (anuidade com juros compostos)', 'Progressão Aritmética simples', 'Juros simples acumulados', 'Regra de três simples'],
  'Aportes periódicos com rendimentos compostos formam uma anuidade ou série uniforme de pagamentos.');

q('mat-3em-e-03', '3º ano EM', 'expert', 80, 'EM13MAT502', 'Bissetriz de Duas Retas Concorrentes',
  'O ponto P(x, y) equidistante das retas y = 2 e y = 8 pertence à reta:',
  ['y = 5', 'y = 4', 'x = 5', 'y = 6'],
  'A reta média entre duas horizontais y = 2 e y = 8 é a reta horizontal y = (2 + 8)/2 = 5.');

q('mat-3em-e-04', '3º ano EM', 'expert', 80, 'EM13MAT204', 'Esperança Matemática (Valor Esperado)',
  'Em um jogo, um participante tem 20% de chance de ganhar R$ 100,00 e 80% de chance de perder R$ 20,00. Qual é o valor esperado (esperança) dessa aposta?',
  ['R$ +4,00', 'R$ 0,00', 'R$ -4,00', 'R$ +10,00'],
  'E = (0,20 × 100) + (0,80 × (-20)) = 20 - 16 = R$ +4,00.');

q('mat-3em-e-05', '3º ano EM', 'expert', 80, 'EM13MAT503', 'Interseção de Duas Circunferências',
  'As circunferências x² + y² = 16 (raio 4) e (x - 7)² + y² = 9 (raio 3) possuem distância entre centros d = 7. Elas são:',
  ['Tangentes exteriores', 'Secantes', 'Exteriores disjuntas', 'Tangentes interiores'],
  'A distância entre os centros (7) é igual à soma dos raios (4 + 3 = 7), caracterizando tangência externa.');

q('mat-3em-e-06', '3º ano EM', 'expert', 80, 'EM13MAT315', 'Comparação de Empréstimos e CET',
  'Dois bancos oferecem empréstimos: o Banco A cobra 2% a.m. sem tarifas adicionais e o Banco B cobra 1,5% a.m. com taxa de abertura alta. O indicador oficial que permite comparar o custo real total é o:',
  ['Custo Efetivo Total (CET)', 'Taxa Selic', 'Índice de Preços ao Consumidor (IPCA)', 'PIB per capita'],
  'O Custo Efetivo Total (CET) consolida todas as taxas de juros, tributos (IOF) e tarifas administrativas.');

q('mat-3em-e-07', '3º ano EM', 'expert', 80, 'EM13MAT502', 'Lugar Geométrico (Mediatriz)',
  'A mediatriz do segmento com extremos A(1, 2) e B(5, 2) é uma reta perpendicular que passa pelo ponto médio (3, 2). Sua equação é:',
  ['x = 3', 'y = 2', 'x + y = 5', 'y = 3'],
  'Como o segmento AB é horizontal (y = 2), a reta mediatriz é vertical passando por x = 3.');

q('mat-3em-e-08', '3º ano EM', 'expert', 80, 'EM13MAT204', 'Regressão Linear e Coeficiente de Determinação (R²)',
  'Um modelo de regressão linear obteve R² = 0,81 ao prever vendas a partir de gastos com publicidade. Isso significa que:',
  ['81% da variação das vendas é explicada pelos gastos com publicidade', 'O lucro subirá 81%', '81% das peças terão defeito', 'A correlação é fraca'],
  'O coeficiente de determinação R² indica a proporção da variância da variável dependente explicada pelo modelo.');

q('mat-3em-e-09', '3º ano EM', 'expert', 80, 'EM13MAT503', 'Comprimento de Corda na Circunferência',
  'A reta y = 3 corta a circunferência x² + y² = 25 determinando uma corda. Qual é o comprimento dessa corda?',
  ['8 unidades', '6 unidades', '10 unidades', '4 unidades'],
  'Os pontos de corte são (-4, 3) e (4, 3). A distância entre eles é 4 - (-4) = 8 unidades.');

q('mat-3em-e-10', '3º ano EM', 'expert', 80, 'EM13MAT316', 'Poder de Compra e Inflação Composta',
  'Se os preços sobem 25% em determinado período, qual deve ser o aumento salarial percentual para manter exatamente o mesmo poder de compra?',
  ['25%', '20%', '30%', '50%'],
  'Para neutralizar o aumento de 25% nos preços, o salário deve ser corrigido pelo mesmo percentual (25%).');

q('mat-3em-e-11', '3º ano EM', 'expert', 80, 'EM13MAT502', 'Área de Polígono pelo Determinante de Gauss',
  'Qual é a área do triângulo com vértices A(1, 1), B(4, 5) e C(1, 5)?',
  ['6 unidades²', '12 unidades²', '8 unidades²', '10 unidades²'],
  'Os catetos paralelos aos eixos são (4 - 1) = 3 e (5 - 1) = 4. Área = (3 × 4)/2 = 6 unidades².');

q('mat-3em-e-12', '3º ano EM', 'expert', 80, 'EM13MAT204', 'Sensibilidade e Especificidade',
  'Em epidemiologia, a capacidade de um teste diagnóstico identificar corretamente os verdadeiros negativos (pessoas saudáveis) é denominada:',
  ['Especificidade', 'Sensibilidade', 'Prevalência', 'Margem de erro'],
  'Especificidade mede a proporção de indivíduos sem a doença que recebem resultado negativo.');

q('mat-3em-e-13', '3º ano EM', 'expert', 80, 'EM13MAT503', 'Equação de Circunferência Tangente aos Eixos',
  'Uma circunferência situada no 1º quadrante de raio 4 é tangente aos dois eixos coordenados. Qual é sua equação?',
  ['(x - 4)² + (y - 4)² = 16', '(x + 4)² + (y + 4)² = 16', 'x² + y² = 16', '(x - 2)² + (y - 2)² = 4'],
  'Sendo tangente aos eixos x e y no 1º quadrante, seu centro é C(r, r) = C(4, 4) e sua equação é (x - 4)² + (y - 4)² = 16.');

q('mat-3em-e-14', '3º ano EM', 'expert', 80, 'EM13MAT314', 'Tabela Price vs SAC (Sistema de Amortização Constante)',
  'No Sistema de Amortização Constante (SAC), o valor das parcelas ao longo do tempo:',
  ['Decresce, pois o saldo devedor e os juros diminuem a cada mês', 'Permanece fixo e constante', 'Cresce continuamente', 'Oscila aleatoriamente'],
  'No SAC a cota de amortização é fixa, mas como o saldo devedor diminui, a parcela total de juros cai a cada mês.');

q('mat-3em-e-15', '3º ano EM', 'expert', 80, 'EM13MAT502', 'Centro de Gravidade (Baricentro)',
  'Quais são as coordenadas do baricentro G do triângulo com vértices A(2, 3), B(4, 7) e C(6, 2)?',
  ['G(4, 4)', 'G(6, 6)', 'G(3, 4)', 'G(4, 3)'],
  'Xg = (2 + 4 + 6)/3 = 12/3 = 4. Yg = (3 + 7 + 2)/3 = 12/3 = 4. Baricentro G(4, 4).');

console.log('Total Final de Questões de Matemática Médio:', list.length);

const fileContent = `import { QuestionData } from './types';

// ============================================================================
// BANCO DE MATEMÁTICA - ENSINO MÉDIO (1º AO 3º ANO EM)
// REVISADO E CALIBRADO PELA BNCC COM HABILIDADES OFICIAIS VERIFICADAS
// Total: 180 questões (15 por dificuldade em cada ano escolar)
// ============================================================================

export const MEDIO_MATH_QUESTIONS: QuestionData[] = ${JSON.stringify(list, null, 2)};
`;

fs.writeFileSync('src/games/quiz/matriz/questions/medioMath.ts', fileContent);
console.log('Arquivo src/games/quiz/matriz/questions/medioMath.ts gerado com sucesso!');
