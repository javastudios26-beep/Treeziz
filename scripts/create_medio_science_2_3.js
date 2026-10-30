import fs from 'fs';

const list = JSON.parse(fs.readFileSync('scripts/medio_science_temp_1.json', 'utf-8'));

function q(id, grade, diff, xp, bncc, topic, question, options, explanation) {
  list.push({
    id,
    subject: 'ciencias',
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
// 2º ANO ENSINO MÉDIO - CIÊNCIAS DA NATUREZA (EM13CNT)
// ============================================================================

// FÁCIL (15 questões)
q('cie-2em-f-01', '2º ano EM', 'facil', 20, 'EM13CNT103', 'Escalas Termométricas',
  'A temperatura de congelamento da água na escala Celsius (0°C) corresponde a qual valor na escala Kelvin?',
  ['273,15 K', '0 K', '100 K', '373,15 K'],
  'T(K) = T(°C) + 273,15. Portanto, 0°C = 273,15 K.');

q('cie-2em-f-02', '2º ano EM', 'facil', 20, 'EM13CNT207', 'Velocidade de Reações Químicas',
  'Por que guardamos alimentos perecíveis dentro da geladeira?',
  ['A menor temperatura reduz a agitação térmica das moléculas, diminuindo a velocidade das reações químicas e a proliferação bacteriana', 'O frio mata todas as bactérias instantaneamente', 'O frio cria oxigênio no alimento', 'Para congelar o ar interno'],
  'A redução da temperatura diminui a energia cinética das moléculas e a frequência de colisões efetivas, retardando a decomposição.');

q('cie-2em-f-03', '2º ano EM', 'facil', 20, 'EM13CNT306', 'Estrutura Molecular do DNA',
  'Na dupla hélice do DNA, a base nitrogenada Adenina (A) emparelha-se especificamente com qual base através de pontes de hidrogênio?',
  ['Timina (T)', 'Citosina (C)', 'Guanina (G)', 'Uracila (U)'],
  'Pela regra de emparelhamento de bases de Chargaff no DNA: A liga-se a T (duas pontes de hidrogênio) e C liga-se a G (três pontes).');

q('cie-2em-f-04', '2º ano EM', 'facil', 20, 'EM13CNT103', 'Reflexão da Luz e Espelhos Planos',
  'A imagem de um objeto formada em um espelho plano comum é sempre:',
  ['Virtual, direita e do mesmo tamanho que o objeto', 'Real e invertida', 'Menor e real', 'Maior e invertida'],
  'Em espelhos planos, a imagem é simétrica em relação ao plano do espelho, mantendo o tamanho e orientação vertical.');

q('cie-2em-f-05', '2º ano EM', 'facil', 20, 'EM13CNT207', 'Superfície de Contato e Reatividade',
  'Um comprimido efervescente triturado em pó dissolve-se muito mais rápido na água do que o comprimido inteiro porque:',
  ['O pó possui maior superfície de contato exposta à água, aumentando o número de colisões entre os reagentes', 'O pó fica mais frio', 'O pó tem menor massa', 'O pó não reage quimicamente'],
  'Maior área superficial de contato permite maior número de colisões moleculares por segundo, acelerando a velocidade da reação.');

q('cie-2em-f-06', '2º ano EM', 'facil', 20, 'EM13CNT306', 'Diferença entre DNA e RNA',
  'Qual base nitrogenada é exclusiva da molécula de RNA, substituindo a timina (T) encontrada no DNA?',
  ['Uracila (U)', 'Guanina (G)', 'Citosina (C)', 'Adenina (A)'],
  'O RNA possui uracila (U) no lugar de timina e ribose no lugar de desoxirribose.');

q('cie-2em-f-07', '2º ano EM', 'facil', 20, 'EM13CNT103', 'Calor Sensível Básico',
  'A quantidade de calor necessária para elevar a temperatura de uma substância sem alterar seu estado físico é chamada:',
  ['Calor sensível (Q = m c ΔT)', 'Calor latente de fusão', 'Entalpia de combustão', 'Trabalho mecânico'],
  'O calor sensível provoca variação de temperatura no corpo em uma única fase física.');

q('cie-2em-f-08', '2º ano EM', 'facil', 20, 'EM13CNT208', 'Princípio de Le Chatelier Simples',
  'Quando um sistema químico em equilíbrio sofre uma perturbação externa (como alteração de temperatura ou pressão), o equilíbrio:',
  ['Desloca-se no sentido que tende a minimizar a perturbação aplicada', 'Destrói todos os reagentes', 'Para de reagir para sempre', 'Permanece inalterado'],
  'O Princípio de Le Chatelier estabelece que o sistema reage em oposição à perturbação imposta.');

q('cie-2em-f-09', '2º ano EM', 'facil', 20, 'EM13CNT307', 'Código Genético e Trincas (Códons)',
  'Quantos nucleotídeos (trinca de bases) compõem um códon no RNA mensageiro responsável por especificar um aminoácido?',
  ['3 nucleotídeos', '4 nucleotídeos', '2 nucleotídeos', '1 nucleotídeo'],
  'O código genético é baseado em trincas de bases nitrogenadas (códons de 3 nucleotídeos).');

q('cie-2em-f-10', '2º ano EM', 'facil', 20, 'EM13CNT105', 'Leis da Reflexão da Luz',
  'Na reflexão regular da luz sobre uma superfície polida, o ângulo de incidência (i) em relação à reta normal é:',
  ['Exatamente igual ao ângulo de reflexão (r)', 'O dobro do ângulo de reflexão', 'Sempre de 90°', 'Menor que a reflexão'],
  'Pela 1ª Lei da Reflexão: o raio incidente, o raio refletido e a normal pertencem ao mesmo plano e os ângulos são iguais (i = r).');

q('cie-2em-f-11', '2º ano EM', 'facil', 20, 'EM13CNT207', 'Catalisador Químico',
  'O catalisador é uma substância que acelera uma reação química porque:',
  ['Reduz a energia de ativação do processo sem ser consumido na reação', 'Aumenta a massa final do produto', 'Aquece a mistura espontaneamente', 'Altera a constante de equilíbrio'],
  'O catalisador cria uma rota alternativa com menor barreira de energia de ativação, sendo recuperado intacto ao final.');

q('cie-2em-f-12', '2º ano EM', 'facil', 20, 'EM13CNT306', 'Transcrição Gênica',
  'O processo no qual a sequência de DNA de um gene é lida no núcleo para sintetizar uma molécula de RNA mensageiro é a:',
  ['Transcrição', 'Tradução', 'Replicação', 'Mutação'],
  'A enzima RNA polimerase copia o filamento molde de DNA produzindo o pré-RNA mensageiro.');

q('cie-2em-f-13', '2º ano EM', 'facil', 20, 'EM13CNT103', 'Primeira Lei da Termodinâmica',
  'A Primeira Lei da Termodinâmica (ΔU = Q - W) é uma aplicação direta do princípio da:',
  ['Conservação da energia', 'Inércia mecânica', 'Ação e reação', 'Entropia máxima'],
  'A energia não é criada nem destruída: o calor fornecido ao gás converte-se em trabalho mecânico e variação de sua energia interna.');

q('cie-2em-f-14', '2º ano EM', 'facil', 20, 'EM13CNT208', 'Equilíbrio Químico Dinâmico',
  'Dizemos que uma reação reversível atingiu o estado de equilíbrio químico quando:',
  ['A velocidade da reação direta se iguala à velocidade da reação inversa e as concentrações permanecem constantes', 'Todos os reagentes foram consumidos', 'A reação para completamente de ocorrer', 'A temperatura chega a zero'],
  'O equilíbrio é dinâmico: as moléculas continuam reagindo em ambos os sentidos com a mesma velocidade microscópica.');

q('cie-2em-f-15', '2º ano EM', 'facil', 20, 'EM13CNT307', 'Tradução no Citoplasma',
  'A síntese de proteínas (tradução) ocorre no citoplasma da célula com a participação fundamental de quais estruturas?',
  ['Ribossomos e RNA transportador (RNAt)', 'Mitocôndrias e carioteca', 'Lisossomos e centríolos', 'Parede celular e vacúolo'],
  'O ribossomo posiciona o RNAm e o RNAt traz o aminoácido correspondente a cada códon.');

// MÉDIO (15 questões)
q('cie-2em-m-01', '2º ano EM', 'medio', 35, 'EM13CNT103', 'Calorimetria e Calor Específico',
  'Para aquecer 500 g de água líquida (calor específico c = 1,0 cal/g°C) de 20°C até 70°C, quantas calorias de calor sensível são necessárias?',
  ['25.000 cal (25 kcal)', '50.000 cal', '10.000 cal', '35.000 cal'],
  'Q = m × c × ΔT = 500 g × 1 cal/g°C × (70 - 20)°C = 500 × 50 = 25.000 calorias.');

q('cie-2em-m-02', '2º ano EM', 'medio', 35, 'EM13CNT207', 'Fatores Cinéticos e Teoria das Colisões',
  'De acordo com a Teoria das Colisões, para que uma reação química ocorra após o choque entre moléculas é obrigatório que:',
  ['A colisão ocorra com geometria espacial favorável e energia igual ou superior à energia de ativação', 'As moléculas estejam paradas', 'Não haja solvente líquido', 'Os reagentes sejam sempre gases'],
  'Apenas colisões energeticamente eficazes e orientadas superam a barreira de ativação e rompem ligações antigas.');

q('cie-2em-m-03', '2º ano EM', 'medio', 35, 'EM13CNT306', 'Replicação Semiconservativa do DNA',
  'A duplicação do DNA é semiconservativa porque cada nova molécula de DNA formada é composta por:',
  ['Um filamento original da molécula-mãe e um filamento recém-sintetizado', 'Dois filamentos inteiramente novos', 'Dois filamentos de RNA', 'Apenas pedaços desorganizados'],
  'Meselson e Stahl comprovaram que cada fita parental atua como molde na síntese da nova fita complementar.');

q('cie-2em-m-04', '2º ano EM', 'medio', 35, 'EM13CNT105', 'Espelhos Côncavos e Imagens Reais',
  'Em um espelho côncavo esférico, quando um objeto é posicionado antes do centro de curvatura (além de C), a imagem formada é:',
  ['Real, invertida e menor que o objeto', 'Virtual, direita e maior', 'Real, direita e igual', 'Virtual e invertida'],
  'Os raios convergentes se cruzam na frente do espelho entre o centro e o foco, formando imagem real e reduzida.');

q('cie-2em-m-05', '2º ano EM', 'medio', 35, 'EM13CNT208', 'Deslocamento do Equilíbrio por Temperatura',
  'Na reação exotérmica de síntese de amônia: N₂ + 3 H₂ ⇌ 2 NH₃ + calor. Se aumentarmos a temperatura do sistema, o equilíbrio:',
  ['Desloca-se para a esquerda (favorecendo os reagentes)', 'Desloca-se para a direita (produz mais amônia)', 'Permanece inalterado', 'Aumenta a constante de equilíbrio'],
  'O aumento de temperatura favorece o sentido endotérmico (consumo de calor), deslocando a reação para a esquerda.');

q('cie-2em-m-06', '2º ano EM', 'medio', 35, 'EM13CNT307', 'Código Genético Degenerado (Redundante)',
  'Dizer que o código genético é "degenerado" (ou redundante) significa biologicamente que:',
  ['Diferentes códons podem codificar o mesmo aminoácido', 'Um mesmo códon codifica vários aminoácidos ao mesmo tempo', 'O código tem falhas que causam doenças sempre', 'O DNA é instável'],
  'Como existem 61 códons para apenas 20 aminoácidos, a maioria dos aminoácidos é codificada por mais de um códon sinônimo.');

q('cie-2em-m-07', '2º ano EM', 'medio', 35, 'EM13CNT103', 'Trabalho em Transformação Isobárica',
  'Um gás ideal sofre expansão sob pressão constante de 100.000 Pa (10⁵ N/m²), passando de um volume de 0,02 m³ para 0,05 m³. Qual foi o trabalho mecânico realizado pelo gás?',
  ['3.000 J (3 kJ)', '5.000 J', '1.500 J', '10.000 J'],
  'W = P × ΔV = 100.000 × (0,05 - 0,02) = 100.000 × 0,03 = 3.000 J.');

q('cie-2em-m-08', '2º ano EM', 'medio', 35, 'EM13CNT207', 'Complexo Ativado',
  'Em um diagrama de energia de uma reação química, o ponto de maior energia potencial no topo da curva corresponde ao:',
  ['Complexo ativado (estado de transição)', 'Produto final mais estável', 'Reagente em repouso', 'Catalisador inerte'],
  'O complexo ativado é um estado intermediário instável e transitório de máxima energia onde ligações estão sendo formadas e rompidas.');

q('cie-2em-m-09', '2º ano EM', 'medio', 35, 'EM13CNT306', 'Mutações de Ponto (Substituição, Inserção e Deleção)',
  'A anemia falciforme é causada por uma mutação pontual no gene da hemoglobina na qual a troca de um único nucleotídeo (A por T) resulta na substituição de:',
  ['Ácido glutâmico por valina na cadeia polipeptídica da hemoglobina', 'Glicose por lipídio', 'DNA por RNA', 'Ferro por cobre'],
  'A troca de um único aminoácido altera a conformação espacial da hemoglobina em baixas tensões de oxigênio, deformando as hemácias.');

q('cie-2em-m-10', '2º ano EM', 'medio', 35, 'EM13CNT105', 'Lei de Snell-Descartes da Refração',
  'Um raio de luz passa do ar (n = 1) para o vidro (n = 1,5). Ao entrar no vidro, o raio refratado:',
  ['Aproxima-se da reta normal e sua velocidade diminui', 'Afasta-se da reta normal e acelera', 'Não sofre nenhum desvio', 'Volta para trás'],
  'Ao passar para um meio mais refringente (maior índice n), a velocidade diminui e o raio se aproxima da normal.');

q('cie-2em-m-11', '2º ano EM', 'medio', 35, 'EM13CNT208', 'Constante de Equilíbrio Kc',
  'Para a reação aA + bB ⇌ cC + dD em fase gasosa/aquosa, a expressão da constante de equilíbrio Kc é dada por:',
  ['[C]ᶜ [D]ᵈ / ([A]ᵃ [B]ᵇ)', '[A]ᵃ [B]ᵇ / ([C]ᶜ [D]ᵈ)', '[C] + [D] - ([A] + [B])', '[C] × [D]'],
  'A lei de ação das massas expressa a constante como a razão entre as concentrações dos produtos e reagentes elevadas a seus coeficientes estequiométricos.');

q('cie-2em-m-12', '2º ano EM', 'medio', 35, 'EM13CNT307', 'Universalidade do Código Genético',
  'O código genético é praticamente universal em todos os seres vivos da Terra (bactérias, plantas e humanos compartilham os mesmos códons). Isso permitiu à biotecnologia moderna:',
  ['Inserir o gene da insulina humana em bactérias para que elas produzam insulina idêntica à humana', 'Clonar dinossauros de rocha', 'Criar plantas que não precisam de luz', 'Modificar as leis da física'],
  'Como o mecanismo de tradução é idêntico em quase todos os seres vivos, genes recombinantes podem ser expressos em microrganismos transgênicos.');

q('cie-2em-m-13', '2º ano EM', 'medio', 35, 'EM13CNT103', 'Calor Latente de Fusão do Gelo',
  'Quantas calorias são necessárias para derreter completamente 100 g de gelo a 0°C transformando-o em água líquida a 0°C? (Calor latente de fusão L = 80 cal/g)',
  ['8.000 cal (8 kcal)', '800 cal', '80.000 cal', '1.000 cal'],
  'Q = m × L = 100 g × 80 cal/g = 8.000 calorias.');

q('cie-2em-m-14', '2º ano EM', 'medio', 35, 'EM13CNT207', 'Lei da Velocidade (Cinética Química)',
  'Para a reação elementar 2 A + B → C, qual é a expressão da lei de velocidade?',
  ['v = k [A]² [B]', 'v = k [A] [B]', 'v = k [A]² [B]²', 'v = k [C] / [A]²'],
  'Para reações elementares em uma única etapa, os expoentes da lei da velocidade coincidem com os coeficientes estequiométricos dos reagentes.');

q('cie-2em-m-15', '2º ano EM', 'medio', 35, 'EM13CNT306', 'Enzimas de Restrição e Eletroforese',
  'Em testes de paternidade por DNA ("fingerprinting"), enzimas de restrição cortam o DNA em pontos específicos e os fragmentos são separados por tamanho através de:',
  ['Eletroforese em gel sob campo elétrico', 'Destilação fracionada', 'Filtração em algodão', 'Centrifugação térmica simples'],
  'Os fragmentos de DNA carregados negativamente migram para o polo positivo; os menores correm mais rápido pelo gel, criando o padrão de bandas característico.');

// DIFÍCIL (15 questões)
q('cie-2em-d-01', '2º ano EM', 'dificil', 55, 'EM13CNT103', 'Segunda Lei da Termodinâmica e Entropia',
  'A Segunda Lei da Termodinâmica afirma que em qualquer processo espontâneo que ocorre no universo isolado:',
  ['A entropia total do sistema sempre aumenta (ou permanece constante em processos reversíveis)', 'A energia total desaparece', 'O calor flui espontaneamente do corpo frio para o quente', 'O rendimento pode ser 100%'],
  'Processos espontâneos aumentam a desordem molecular estatística (entropia global) do universo.');

q('cie-2em-d-02', '2º ano EM', 'dificil', 55, 'EM13CNT208', 'Deslocamento por Pressão',
  'Na reação gasosa em equilíbrio: 2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g). Ao aumentar a pressão total do recipiente mantendo a temperatura constante, o equilíbrio:',
  ['Desloca-se para a direita (sentido do menor número de mols gasosos: 2 mols contra 3 mols)', 'Desloca-se para a esquerda', 'Não se altera', 'Elimina os catalisadores'],
  'O aumento de pressão favorece o lado com menor volume molar gasoso (lado dos produtos com 2 mols vs reagentes com 3 mols).');

q('cie-2em-d-03', '2º ano EM', 'dificil', 55, 'EM13CNT306', 'Processamento do RNA (Splicing)',
  'Em células eucariontes, o pré-RNA mensageiro sofre "splicing" antes de sair para o citoplasma, processo que consiste na:',
  ['Remoção dos íntrons (regiões não codificantes) e união dos éxons codificantes', 'Adição de aminoácidos diretamente no núcleo', 'Duplicação do DNA molde', 'Destruição das pontes de hidrogênio'],
  'O splicing alternativo permite que um único gene produza diferentes variantes proteicas funcionais nos tecidos.');

q('cie-2em-d-04', '2º ano EM', 'dificil', 55, 'EM13CNT105', 'Lentes Delgadas e Equação de Gauss',
  'Um objeto real é colocado a 30 cm de uma lente convergente de distância focal f = 20 cm. A que distância da lente (p) sua imagem real será formada?',
  ['60 cm', '40 cm', '50 cm', '30 cm'],
  'Pela Equação de Gauss: 1/f = 1/p + 1/p => 1/20 = 1/30 + 1/p => 1/p = 1/20 - 1/30 = (3 - 2)/60 = 1/60 => p = 60 cm.');

q('cie-2em-d-05', '2º ano EM', 'dificil', 55, 'EM13CNT207', 'Energia de Ativação e Gráfico de Arrhenius',
  'A equação de Arrhenius demonstra que a constante de velocidade k de uma reação química cresce exponencialmente com:',
  ['O aumento da temperatura absoluta e a diminuição da energia de ativação', 'O aumento da pressão apenas', 'A diminuição da temperatura', 'A redução do volume'],
  'Temperatura mais alta aumenta a fração de moléculas com energia cinética superior à barreira de ativação.');

q('cie-2em-d-06', '2º ano EM', 'dificil', 55, 'EM13CNT307', 'Mutação por Deslocamento de Leitura (Frameshift)',
  'Uma mutação que insere ou deleta um único par de nucleotídeos (não múltiplo de 3) na sequência codificante de um gene costuma ser muito mais danosa que uma substituição porque:',
  ['Altera toda a grade de leitura dos códons subsequentes, modificando todos os aminoácidos seguintes e gerando códons de parada prematuros', 'Impede a divisão celular inteira', 'Duplica a proteína', 'Não altera os aminoácidos'],
  'O deslocamento da pauta de leitura altera a tradução de toda a sequência restante da proteína.');

q('cie-2em-d-07', '2º ano EM', 'dificil', 55, 'EM13CNT103', 'Ciclo de Carnot e Rendimento Máximo Teórico',
  'Uma máquina térmica opera segundo o Ciclo de Carnot entre uma fonte quente a 500 K e uma fonte fria a 300 K. Qual é o rendimento máximo teórico dessa máquina?',
  ['40%', '60%', '20%', '50%'],
  'Rendimento de Carnot = 1 - (T_fria / T_quente) = 1 - (300 / 500) = 1 - 0,60 = 0,40 = 40%.');

q('cie-2em-d-08', '2º ano EM', 'dificil', 55, 'EM13CNT208', 'Produto de Solubilidade (Kps)',
  'Ao misturar soluções contendo íons que podem formar um precipitado insolúvel, a formação do sólido só ocorre quando:',
  ['O produto iônico [A⁺][B⁻] supera o produto de solubilidade Kps da substância', 'O produto iônico for menor que o Kps', 'A temperatura for zero', 'A reação for ácida'],
  'Quando a solução se torna supersaturada (Q > Kps), ocorre precipitação do sal insolúvel até restaurar o equilíbrio.');

q('cie-2em-d-09', '2º ano EM', 'dificil', 55, 'EM13CNT306', 'Telômeros e Envelhecimento Celular',
  'Os telômeros são sequências repetitivas de DNA nas extremidades dos cromossomos lineares que:',
  ['Protegem o DNA da degradação e encurtam-se a cada divisão celular, atuando como um relógio biológico de senescência', 'Codificam a insulina', 'Conectam os centríolos', 'São destruídos no nascimento'],
  'O limite de Hayflick associa o encurtamento progressivo dos telômeros ao envelhecimento e parada de divisão das células somáticas.');

q('cie-2em-d-10', '2º ano EM', 'dificil', 55, 'EM13CNT105', 'Ângulo Limite e Fibra Óptica',
  'Para que ocorra reflexão interna total da luz em uma fibra óptica com núcleo e casca, a luz deve:',
  ['Propagar-se do meio mais refringente (núcleo) para o menos refringente (casca) com ângulo de incidência maior que o ângulo limite', 'Viajar do menos para o mais refringente', 'Entrar com ângulo de 0°', 'Ter frequência ultrassônica'],
  'A reflexão total só é possível quando a luz incide do meio mais denso para o menos denso com i > L (sen L = n_menor / n_maior).');

q('cie-2em-d-11', '2º ano EM', 'dificil', 55, 'EM13CNT207', 'Catálise Homogênea vs Heterogênea',
  'No conversor catalítico do escapamento dos carros, gases poluentes (CO e NOx) passam por metais sólidos nobres (platina e paládio) que catalisam sua transformação em CO₂ e N₂. Essa catálise é:',
  ['Heterogênea (reagentes gasosos e catalisador sólido em fases distintas)', 'Homogênea pura', 'Biológica enzimática', 'Eletrostática simples'],
  'Na catálise heterogênea, o catalisador e os reagentes encontram-se em fases de agregação física diferentes.');

q('cie-2em-d-12', '2º ano EM', 'dificil', 55, 'EM13CNT307', 'Operon Lac em Bactérias (Regulação Gênica)',
  'Em bactérias Escherichia coli, a transcrição dos genes que degradam a lactose (Operon Lac) só é ativada quando:',
  ['A lactose está presente no meio e atua como indutor inativando o repressor proteico', 'Não há glicose nem lactose', 'A bactéria morre', 'A temperatura é de 100°C'],
  'Jacob e Monod elucidaram o modelo do operon: o indutor alolactose liga-se ao repressor, liberando o promotor para transcrição.');

q('cie-2em-d-13', '2º ano EM', 'dificil', 55, 'EM13CNT103', 'Transformação Adiabática de Gases',
  'Em uma expansão adiabática rápida (sem troca de calor com o meio externo, Q = 0), a temperatura de um gás ideal:',
  ['Diminui, pois o gás realiza trabalho mecânico às custas de sua própria energia interna (ΔU = -W)', 'Aumenta bruscamente', 'Permanece constante', 'Fica infinita'],
  'Ao expandir sem receber calor, o trabalho positivo do gás drena energia interna, provocando resfriamento térmico.');

q('cie-2em-d-14', '2º ano EM', 'dificil', 55, 'EM13CNT208', 'Efeito do Íon Comum',
  'Ao adicionar cloreto de sódio sólido (NaCl) a uma solução saturada de cloreto de prata (AgCl), a solubilidade do AgCl:',
  ['Diminui, ocorrendo precipitação adicional devido ao excesso de íons cloreto (Cl⁻) em comum', 'Aumenta significativamente', 'Não se altera', 'Dobra de valor'],
  'O íon comum (Cl⁻) desloca o equilíbrio de dissolução no sentido do sólido insolúvel por Le Chatelier.');

q('cie-2em-d-15', '2º ano EM', 'dificil', 55, 'EM13CNT306', 'Epigenética e Metilação do DNA',
  'A adição de grupos metila (-CH₃) às citosinas do DNA na região promotora de um gene costuma provocar:',
  ['O silenciamento (desativação) da transcrição desse gene', 'A mutação permanente da sequência de bases', 'A duplicação imediata do gene', 'A destruição do cromossomo'],
  'A hipermetilação condensa a cromatina e impede a ligação de fatores de transcrição, reprimindo a expressão gênica.');

// EXPERT (15 questões)
q('cie-2em-e-01', '2º ano EM', 'expert', 80, 'EM13CNT103', 'Relação de Mayer e Calor Molar de Gases',
  'Para um gás ideal monoatômico, a diferença entre a capacidade térmica molar a pressão constante (Cp) e a volume constante (Cv) é:',
  ['Igual à constante universal dos gases R (Cp - Cv = R)', 'Igual a zero', 'Igual a 2R', 'Independente da temperatura'],
  'A relação de Mayer (Cp - Cv = R) reflete o trabalho mecânico de expansão adicional realizado a pressão constante.');

q('cie-2em-e-02', '2º ano EM', 'expert', 80, 'EM13CNT208', 'Equilíbrio Químico em Altas Altitudes',
  'Pessoas que viajam para altitudes muito elevadas produzem mais hemoglobina ao longo de semanas. Em termos bioquímicos, o organismo adapta-se à:',
  ['Menor pressão parcial de O₂, que deslocava o equilíbrio da oxiemoglobina para a esquerda, estimulando a liberação de eritropoietina (EPO)', 'Falta de oxigênio no cérebro apenas', 'Maior quantidade de gás carbônico no sangue', 'Gravidade baixa'],
  'O estresse hipóxico estimula a secreção renal de EPO para aumentar a contagem de hemácias e restaurar o transporte de oxigênio.');

q('cie-2em-e-03', '2º ano EM', 'expert', 80, 'EM13CNT306', 'CRISPR-Cas9 e Edição Genômica',
  'O sistema biotecnológico CRISPR-Cas9, premiado com o Nobel de Química em 2020, revolucionou a ciência porque permite:',
  ['Editar com precisão cirúrgica sequências específicas de DNA em células vivas usando um RNA guia e a endonuclease Cas9', 'Clonar seres humanos em massa', 'Eliminar todas as bactérias do planeta', 'Mudar a cor dos ossos'],
  'Doudna e Charpentier adaptaram o sistema imune antiviral de bactérias para criar uma ferramenta versátil de edição gênica programável.');

q('cie-2em-e-04', '2º ano EM', 'expert', 80, 'EM13CNT105', 'Aberração Cromática em Lentes',
  'A aberração cromática em lentes de vidro de microscópios e telescópios ocorre porque:',
  ['O índice de refração do vidro varia sutilmente com o comprimento de onda da luz, focalizando diferentes cores em pontos distintos', 'As lentes são opacas', 'A luz viaja em linha curva', 'O vidro quebra'],
  'A dispersão da luz branca dentro do material da lente faz com que a luz azul convirja mais perto do que a luz vermelha.');

q('cie-2em-e-05', '2º ano EM', 'expert', 80, 'EM13CNT207', 'Mecanismo de Reação e Etapa Determinante',
  'Em uma reação química que ocorre em múltiplas etapas sucessivas, a lei de velocidade experimental global é governada pela:',
  ['Etapa mais lenta do mecanismo (gargalo cinético da reação)', 'Etapa mais rápida', 'Primeira etapa sempre', 'Média de todas as etapas'],
  'A taxa geral de formação de produtos não pode ser superior à velocidade de sua etapa mais lenta (etapa determinante da velocidade).');

q('cie-2em-e-06', '2º ano EM', 'expert', 80, 'EM13CNT307', 'Ribozimas e Mundo do RNA',
  'A hipótese do "Mundo do RNA" na origem da vida propõe que o RNA foi a primeira molécula informacional autorreplicante porque certas moléculas de RNA (ribozimas):',
  ['Possuem tanto a capacidade de armazenar informação genética quanto de atuar como catalisadores químicos (enzimas)', 'São feitas de lipídios', 'Não sofrem mutações', 'Podem viver no espaço sem matéria'],
  'A descoberta de ribozimas com atividade catalítica resolveu o dilema do "ovo e da galinha" entre DNA e proteínas na abiogênese.');

q('cie-2em-e-07', '2º ano EM', 'expert', 80, 'EM13CNT103', 'Entropia Estatística de Boltzmann',
  'A famosa fórmula de Boltzmann S = k ln W gravada em sua lápide relaciona a grandeza termodinâmica macroscópica entropia (S) com:',
  ['O número de microestados microscópicos possíveis (W) acessíveis pelas partículas do sistema', 'A velocidade média das moléculas', 'O peso atômico', 'A pressão máxima'],
  'A termodinâmica estatística demonstrou que a entropia mede a probabilidade de configuração estatística da matéria.');

q('cie-2em-e-08', '2º ano EM', 'expert', 80, 'EM13CNT208', 'Processo Haber-Bosch e Otimização Industrial',
  'Na produção industrial de fertilizantes pelo Processo Haber-Bosch (N₂ + 3 H₂ ⇌ 2 NH₃), utiliza-se temperatura intermediária (~450°C) com catalisador de ferro porque:',
  ['Embora temperaturas baixas favoreçam o equilíbrio exotérmico, temperaturas moderadas com catalisador garantem velocidade economicamente viável', 'A reação para abaixo de 500°C', 'O ferro congela a amônia', 'Para evitar que o nitrogênio exploda'],
  'O processo é um compromisso clássico entre rendimento de equilíbrio termodinâmico e velocidade cinética de produção industrial.');

q('cie-2em-e-09', '2º ano EM', 'expert', 80, 'EM13CNT306', 'PCR (Reação em Cadeia da Polimerase)',
  'A técnica de PCR utiliza ciclos repetidos de desnaturação térmica (95°C), anelamento de primers e extensão pela enzima Taq polimerase para:',
  ['Amplificar exponencialmente milhões de cópias de um fragmento específico de DNA a partir de amostras mínimas', 'Destruir vírus bacterianos', 'Sintetizar glicose pura', 'Sequenciar proteínas'],
  'Kary Mullis desenvolveu a PCR utilizando a DNA polimerase termorresistente da bactéria Thermus aquaticus.');

q('cie-2em-e-10', '2º ano EM', 'expert', 80, 'EM13CNT105', 'Microscopia de Fluorescência e Resolução Óptica',
  'O Limite de Difração de Abbe impõe que a resolução máxima de microscópios ópticos convencionais não pode ser inferior a cerca de metade do comprimento de onda da luz (~200 nm). Isso ocorre devido à:',
  ['Difração das ondas luminosas ao passar pelas aberturas das lentes objetivas', 'Reflexão total no espelho', 'Absorção de luz pelas células', 'Gravidade sobre os fótons'],
  'A difração espalha a luz de pontos pontuais em discos de Airy, limitando a separação resolúvel de estruturas menores que ~200 nm.');

q('cie-2em-e-11', '2º ano EM', 'expert', 80, 'EM13CNT207', 'Catálise Enzimática e Modelo de Michaelis-Menten',
  'Em reações catalisadas por enzimas biológicas, quando a concentração de substrato atinge valores muito elevados, a velocidade da reação atinge um teto máximo (Vmax) porque:',
  ['Todos os sítios ativos das moléculas enzimáticas disponíveis ficam saturados pelo substrato', 'A enzima é destruída pela água', 'A reação para de produzir energia', 'O substrato vira veneno'],
  'Na saturação enzimática, a taxa é limitada pela velocidade intrínseca de catálise da enzima (k_cat) e não mais pelo encontro de substratos.');

q('cie-2em-e-12', '2º ano EM', 'expert', 80, 'EM13CNT307', 'RNA de Interferência (RNAi)',
  'O mecanismo celular de RNA de interferência (microRNAs e siRNAs) regula a expressão gênica pós-transcricional através de:',
  ['Emparelhamento complementar com moléculas de RNAm alvo, levando à sua degradação ou bloqueio de tradução', 'Mutação definitiva do cromossomo', 'Transporte de aminoácidos para o núcleo', 'Produção de calor'],
  'O RNAi silencia genes específicos regulando o desenvolvimento e atuando como defesa celular contra vírus.');

q('cie-2em-e-13', '2º ano EM', 'expert', 80, 'EM13CNT103', 'Ciclo de Otto em Motores a Quatro Tempos',
  'No motor a quatro tempos de um automóvel comum (Ciclo de Otto), as quatro etapas do ciclo ocorrem na sequência correta de:',
  ['Admissão → Compressão → Combustão (expansão) → Escape', 'Compressão → Admissão → Escape → Combustão', 'Combustão → Compressão → Admissão → Escape', 'Escape → Combustão → Admissão → Compressão'],
  'O pistão admite a mistura ar-combustível, comprime-a, a vela dispara a queima gerando trabalho útil de expansão e expulsa os gases no escape.');

q('cie-2em-e-14', '2º ano EM', 'expert', 80, 'EM13CNT208', 'Autoprotólise da Água e Produto Iônico Kw',
  'A 25°C, o produto iônico da água líquida pura é Kw = [H⁺][OH⁻] = 1,0 × 10⁻¹⁴. Em água neutra, a concentração de íons H⁺ é de:',
  ['1,0 × 10⁻⁷ mol/L (resultando em pH = 7)', '1,0 × 10⁻¹⁴ mol/L', '1,0 mol/L', '0 mol/L'],
  'Em meio neutro [H⁺] = [OH⁻] = √(10⁻¹⁴) = 10⁻⁷ mol/L, o que define a referência neutra de pH = -log(10⁻⁷) = 7.');

q('cie-2em-e-15', '2º ano EM', 'expert', 80, 'EM13CNT306', 'Transposons (Genes Saltadores)',
  'Barbara McClintock descobriu no milho os "transposons" (elementos genéticos móveis), sequências de DNA que:',
  ['Possuem a capacidade de mudar de posição física dentro do genoma, podendo ativar ou inativar genes vizinhos', 'São pedaços de vírus que destroem a planta', 'Não contêm bases nitrogenadas', 'Ficam sempre no mesmo cromossomo'],
  'Elementos de transposição promovem rearranjos cromossômicos e plasticidade evolutiva no genoma eucarioto.');

console.log('Total até 2º ano EM Ciências:', list.length);

fs.writeFileSync('scripts/medio_science_temp_2.json', JSON.stringify(list, null, 2));
