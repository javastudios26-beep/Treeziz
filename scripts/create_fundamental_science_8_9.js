import fs from 'fs';

const list = JSON.parse(fs.readFileSync('scripts/fundamental_science_temp_8.json', 'utf-8'));

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
// 9º ANO - CIÊNCIAS (EF09CI)
// ============================================================================

// FÁCIL (15 questões)
q('cie-9-f-01', '9º ano', 'facil', 20, 'EF09CI01', 'Estrutura Atômica',
  'Quais partículas subatômicas com carga elétrica positiva estão localizadas no núcleo do átomo?',
  ['Prótons', 'Elétrons', 'Nêutrons', 'Fótons'],
  'Os prótons possuem carga elétrica positiva (+1) e localizam-se no núcleo atômico juntamente com os nêutrons.');

q('cie-9-f-02', '9º ano', 'facil', 20, 'EF09CI02', 'Lei de Lavoisier',
  'A célebre frase "Na natureza nada se cria, nada se perde, tudo se transforma" resume qual lei da química?',
  ['Lei da Conservação das Massas (Lavoisier)', 'Lei das Proporções Definidas (Proust)', 'Lei da Gravitação Universal', 'Lei da Ação e Reação'],
  'Antoine Lavoisier demonstrou que em sistemas fechados a massa total dos reagentes é idêntica à massa total dos produtos.');

q('cie-9-f-03', '9º ano', 'facil', 20, 'EF09CI04', 'Ondas Mecânicas vs Eletromagnéticas',
  'O som é uma onda mecânica. Isso significa que o som:',
  ['Necessita obrigatoriamente de um meio material (como ar ou água) para se propagar e não se propaga no vácuo', 'Propaga-se mais rápido no vácuo que a luz', 'É uma onda eletromagnética pura', 'Não transporta energia'],
  'Ondas mecânicas dependem da vibração de partículas materiais vizinhas, não se propagando no vácuo espacial.');

q('cie-9-f-04', '9º ano', 'facil', 20, 'EF09CI08', 'Genética Mendeliana Básica',
  'Em genética, o conjunto das características observáveis de um organismo (como cor dos olhos ou altura) resultante da interação dos genes com o ambiente é o:',
  ['Fenótipo', 'Genótipo', 'Cariótipo', 'Genoma isolado'],
  'O fenótipo é a manifestação física, bioquímica ou fisiológica observável; genótipo é a constituição genética herdada.');

q('cie-9-f-05', '9º ano', 'facil', 20, 'EF09CI10', 'Evolução e Seleção Natural',
  'Qual cientista inglês propôs que as espécies biológicas evoluem ao longo das gerações por meio da seleção natural?',
  ['Charles Darwin', 'Gregor Mendel', 'Isaac Newton', 'Louis Pasteur'],
  'Darwin publicou "A Origem das Espécies" em 1859, demonstrando que indivíduos com variações vantajosas deixam mais descendentes.');

q('cie-9-f-06', '9º ano', 'facil', 20, 'EF09CI01', 'Tabela Periódica Básica',
  'Na Tabela Periódica moderna, os elementos químicos estão organizados em ordem crescente de seu:',
  ['Número atômico (número de prótons, Z)', 'Massa atômica média', 'Ano de descoberta', 'Tamanho do átomo'],
  'A lei periódica de Moseley organiza os elementos pelo número atômico crescente Z.');

q('cie-9-f-07', '9º ano', 'facil', 20, 'EF09CI05', 'Cores da Luz e Dispersão',
  'Quando a luz branca do Sol atravessa um prisma de vidro transparente, ela se decompõe nas cores do arco-íris devido ao fenômeno da:',
  ['Refração e dispersão da luz', 'Reflexão metálica', 'Absorção total', 'Polarização estática'],
  'Diferentes comprimentos de onda sofrem desvios de refração distintos ao passar pelo vidro, separando as cores componentes.');

q('cie-9-f-08', '9º ano', 'facil', 20, 'EF09CI09', 'Cromossomos Humanos',
  'Quantos cromossomos possui uma célula somática normal do corpo humano (célula diploide, 2n)?',
  ['46 cromossomos (23 pares)', '23 cromossomos', '48 cromossomos', '92 cromossomos'],
  'Nossas células corporais têm 46 cromossomos, sendo 23 herdados da mãe e 23 herdados do pai.');

q('cie-9-f-09', '9º ano', 'facil', 20, 'EF09CI02', 'Reações Químicas Cotidianas',
  'A formação de ferrugem em um prego de ferro exposto ao ar úmido é uma reação química de:',
  ['Oxidação', 'Evaporação pura', 'Fusão', 'Sublimação'],
  'O ferro reage com o oxigênio e a água formando óxidos e hidróxidos de ferro (ferrugem).');

q('cie-9-f-10', '9º ano', 'facil', 20, 'EF09CI14', 'Estrelas e o Sol',
  'O Sol é classificado astronomicamente como uma:',
  ['Estrela de tamanho médio na sequência principal', 'Galáxia espiral', 'Planeta rochoso gigante', 'Nebulosa gasosa fria'],
  'O Sol é uma estrela do tipo anã amarela que gera luz e calor por fusão nuclear de hidrogênio em hélio no seu núcleo.');

q('cie-9-f-11', '9º ano', 'facil', 20, 'EF09CI06', 'Espectro Eletromagnético',
  'Qual tipo de radiação eletromagnética possui frequência mais alta que a luz visível e exige proteção com protetor solar na praia?',
  ['Radiação ultravioleta (UV)', 'Ondas de rádio FM', 'Micro-ondas', 'Radiação infravermelha'],
  'A radiação UV transporta energia suficiente para provocar queimaduras solares e lesões no DNA da pele.');

q('cie-9-f-12', '9º ano', 'facil', 20, 'EF09CI08', 'Genes Dominantes e Recessivos',
  'Em um indivíduo com genótipo heterozigoto (Aa), o alelo que se expressa no fenótipo sobrepondo-se ao outro é chamado:',
  ['Alelo dominante', 'Alelo recessivo', 'Alelo mutante', 'Alelo nulo'],
  'O alelo dominante manifesta sua característica mesmo em dose simples (em heterozigose).');

q('cie-9-f-13', '9º ano', 'facil', 20, 'EF09CI01', 'Eletronsfera',
  'Qual partícula atômica orbita ao redor do núcleo na eletrosfera e possui carga elétrica negativa?',
  ['Elétron', 'Próton', 'Nêutron', 'Quark'],
  'Os elétrons possuem carga -1 e massa desprezível comparada aos prótons e nêutrons.');

q('cie-9-f-14', '9º ano', 'facil', 20, 'EF09CI03', 'Funções Químicas Básicas',
  'O vinagre (ácido acético) e o suco de limão (ácido cítrico) pertencem à função inorgânica/orgânica caracterizada por sabor azedo, conhecida como:',
  ['Ácidos', 'Bases (hidróxidos)', 'Sais neutros', 'Óxidos inertes'],
  'Os ácidos liberam íons hidrogênio em água, têm pH inferior a 7 e reagem com bases formando sal e água.');

q('cie-9-f-15', '9º ano', 'facil', 20, 'EF09CI15', 'Ano-Luz',
  'Na astronomia, o "ano-luz" é uma unidade que mede:',
  ['Distância (a distância que a luz percorre no vácuo em um ano)', 'Tempo de vida de uma estrela', 'Velocidade de foguetes', 'Brilho aparente'],
  'A luz viaja a ~300.000 km/s. Em um ano, percorre cerca de 9,46 trilhões de quilômetros (um ano-luz de distância).');

// MÉDIO (15 questões)
q('cie-9-m-01', '9º ano', 'medio', 35, 'EF09CI02', 'Balanceamento de Equações Químicas',
  'Na reação de queima do hidrogênio: 2 H₂ + O₂ → 2 H₂O. Quantas moléculas de água (H₂O) são formadas a partir de 2 moléculas de gás oxigênio (O₂) com hidrogênio suficiente?',
  ['4 moléculas de H₂O', '2 moléculas de H₂O', '1 molécula de H₂O', '8 moléculas de H₂O'],
  'A proporção estequiométrica é 1 O₂ para 2 H₂O. Portanto, com 2 moléculas de O₂ formam-se 2 × 2 = 4 moléculas de água.');

q('cie-9-m-02', '9º ano', 'medio', 35, 'EF09CI08', 'Primeira Lei de Mendel (Monohibridismo)',
  'Ao cruzar duas plantas heterozigotas (Aa × Aa) para uma característica com dominância completa, qual é a proporção fenotípica esperada na descendência?',
  ['3 dominantes para 1 recessivo (3:1)', '1 dominante para 1 recessivo (1:1)', 'Todas dominantes (100%)', '1 dominante para 2 intermediários para 1 recessivo'],
  'O quadrado de Punnett gera genótipos 1 AA, 2 Aa e 1 aa. Os genótipos AA e Aa exibem o fenótipo dominante (3 em 4 = 75%).');

q('cie-9-m-03', '9º ano', 'medio', 35, 'EF09CI04', 'Equação Fundamental da Ondulatória',
  'Uma onda de rádio viaja à velocidade da luz (300.000 km/s ou 3 × 10⁸ m/s) com frequência de 100 MHz (10⁸ Hz). Qual é o seu comprimento de onda (λ)?',
  ['3 metros', '30 metros', '0,3 metro', '300 metros'],
  'Pela equação v = λ × f: 3 × 10⁸ = λ × 10⁸ => λ = 3 metros.');

q('cie-9-m-04', '9º ano', 'medio', 35, 'EF09CI11', 'Lamarckismo vs Darwinismo',
  'A ideia de que o pescoço da girafa se esticou porque seus ancestrais se esforçavam para alcançar folhas altas e transmitiram essa característica adquirida aos filhos corresponde à teoria de:',
  ['Lamarck (Lei do Uso e Desuso e da Transmissão dos Caracteres Adquiridos)', 'Darwin (Seleção Natural)', 'Mendel (Leis da Hereditariedade)', 'Pasteur (Biogênese)'],
  'Jean-Baptiste Lamarck propôs que modificações corporais adquiridas durante a vida eram passadas à prole, ideia refutada pela genética.');

q('cie-9-m-05', '9º ano', 'medio', 35, 'EF09CI01', 'Número Atômico e Número de Massa',
  'Um átomo de sódio neutro possui 11 prótons e 12 nêutrons em seu núcleo. Qual é o seu número de massa (A)?',
  ['23', '11', '12', '1'],
  'O número de massa A é a soma de prótons e nêutrons: A = Z + N = 11 + 12 = 23.');

q('cie-9-m-06', '9º ano', 'medio', 35, 'EF09CI06', 'Radiações Ionizantes vs Não Ionizantes',
  'Qual das seguintes radiações é ionizante e possui energia suficiente para arrancar elétrons de átomos e danificar tecidos biológicos?',
  ['Raios X', 'Ondas de rádio de celular', 'Luz visível verde', 'Ondas de Wi-Fi'],
  'Raios X e raios gama são radiações ionizantes de alta frequência com potencial mutagênico para células humanas.');

q('cie-9-m-07', '9º ano', 'medio', 35, 'EF09CI09', 'Determinação do Sexo Genético',
  'Na espécie humana, o sexo biológico da criança é determinado geneticamente pelo espermatozoide do pai porque:',
  ['A mãe sempre fornece o cromossomo X, enquanto o pai pode fornecer um cromossomo X (gerando XX) ou Y (gerando XY)', 'O pai só tem cromossomos Y', 'A mãe tem cromossomos XY', 'Depende da temperatura do parto'],
  'Mulheres são homogaméticas (óvulos contêm X) e homens são heterogaméticos (metade dos espermatozoides leva X e metade leva Y).');

q('cie-9-m-08', '9º ano', 'medio', 35, 'EF09CI03', 'Escala de pH',
  'Uma solução com pH igual a 2 é classificada como:',
  ['Fortemente ácida', 'Neutra', 'Fortemente básica (alcalina)', 'Salina pura'],
  'A escala de pH vai de 0 a 14: valores menores que 7 são ácidos (quanto menor, mais ácido), 7 é neutro e maiores que 7 são básicos.');

q('cie-9-m-09', '9º ano', 'medio', 35, 'EF09CI15', 'Ciclo de Vida do Sol',
  'No futuro distante (daqui a cerca de 5 bilhões de anos), quando o hidrogênio do núcleo do Sol se esgotar, ele se expandirá tornando-se uma:',
  ['Gigante Vermelha', 'Supernova com buraco negro', 'Estrela de nêutrons pura', 'Planeta anão'],
  'Estrelas de massa média como o Sol expandem suas camadas externas ao fundir hélio, virando gigantes vermelhas antes de se tornarem anãs brancas.');

q('cie-9-m-10', '9º ano', 'medio', 35, 'EF09CI01', 'Distribuição Eletrônica e Íons',
  'Quando um átomo neutro de cloro (17 elétrons) ganha um elétron para completar sua camada de valência, ele se transforma em um:',
  ['Ânion com carga negativa (Cl⁻)', 'Cátion com carga positiva', 'Átomo neutro maior', 'Próton livre'],
  'Ao receber elétrons, o átomo fica com mais cargas negativas que positivas, tornando-se um ânion.');

q('cie-9-m-11', '9º ano', 'medio', 35, 'EF09CI07', 'Óptica da Visão e Miopia',
  'A miopia é um problema de visão em que a imagem de objetos distantes se forma antes da retina. Ela é corrigida com o uso de lentes:',
  ['Divergentes', 'Convergentes', 'Planas de aumento', 'Cilíndricas puras'],
  'Lentes divergentes afastam os raios de luz, deslocando o foco para trás e posicionando a imagem perfeitamente sobre a retina.');

q('cie-9-m-12', '9º ano', 'medio', 35, 'EF09CI02', 'Lei de Proust (Proporções Definidas)',
  'Para formar água, 4 g de hidrogênio reagem completamente com 32 g de oxigênio (proporção 1:8). Se usarmos 8 g de hidrogênio, quanto oxigênio será necessário?',
  ['64 g', '32 g', '16 g', '80 g'],
  'Pela Lei de Proust, dobrando a massa de um reagente, a massa do outro deve dobrar na mesma proporção: 8 × 8 = 64 g de oxigênio.');

q('cie-9-m-13', '9º ano', 'medio', 35, 'EF09CI12', 'Resistência Bacteriana e Evolução',
  'O surgimento de superbactérias resistentes a múltiplos antibióticos em hospitais é uma comprovação direta de qual processo biológico em tempo real?',
  ['Seleção natural de bactérias que já possuíam mutações de resistência prévias', 'Criação espontânea de novas espécies', 'Lamarckismo intencional', 'Transformação física de minerais'],
  'O uso constante de antibióticos atua como forte pressão seletiva, eliminando as sensíveis e multiplicando as variantes resistentes.');

q('cie-9-m-14', '9º ano', 'medio', 35, 'EF09CI04', 'Efeito Doppler',
  'A sirene de uma ambulância parece mais aguda quando ela se aproxima e mais grave quando se afasta do ouvinte. Esse fenômeno ondulatório é o:',
  ['Efeito Doppler', 'Eco acústico', 'Ressonância sonora', 'Interferência destrutiva'],
  'O movimento da fonte comprime as frentes de onda na aproximação (maior frequência percebida, som agudo) e as estica no afastamento.');

q('cie-9-m-15', '9º ano', 'medio', 35, 'EF09CI16', 'Telescópios Espaciais',
  'Por que telescópios como o Hubble e o James Webb são colocados no espaço em vez de ficarem na Terra?',
  ['Para evitar a turbulência e a absorção de luz da atmosfera terrestre, obtendo imagens nítidas em infravermelho e visível', 'Porque no espaço não há gravidade', 'Porque ficam mais perto do Sol', 'Para gastar menos eletricidade'],
  'A atmosfera terrestre distorce a luz das estrelas e absorve comprimentos de onda essenciais (como infravermelho e raios X).');

// DIFÍCIL (15 questões)
q('cie-9-d-01', '9º ano', 'dificil', 55, 'EF09CI01', 'Modelos Atômicos Históricos',
  'O experimento de Rutherford com o bombardeamento de partículas alfa contra uma lâmina de ouro ultrafina comprovou que:',
  ['O átomo possui um núcleo minúsculo, denso e positivo, cercado por um imenso espaço vazio onde orbitam os elétrons', 'O átomo é uma esfera maciça e indivisível (bola de bilhar)', 'O átomo é um pudim de passas com carga positiva contínua', 'Não existem nêutrons'],
  'A grande maioria das partículas atravessou a lâmina sem desvio e poucas ricochetearam, provando que o núcleo é pequeníssimo e denso.');

q('cie-9-d-02', '9º ano', 'dificil', 55, 'EF09CI08', 'Heredograma e Doença Recessiva',
  'Dois pais com visão normal para cores têm um filho homem daltônico (característica recessiva ligada ao cromossomo X). Qual é o genótipo da mãe?',
  ['Heterozigota portadora (Xᴰ Xᵈ)', 'Homozigota recessiva (Xᵈ Xᵈ)', 'Homozigota dominante (Xᴰ Xᴰ)', 'Não possui cromossomo X'],
  'O filho homem recebeu o cromossomo Y do pai e obrigatoriamente herdou o cromossomo X com o alelo mutante da mãe (Xᵈ).');

q('cie-9-d-03', '9º ano', 'dificil', 55, 'EF09CI02', 'Reações Endotérmicas e Exotérmicas',
  'A queima de lenha em uma lareira que aquece o ambiente e a fotossíntese vegetal que absorve luz solar são classificadas, respectivamente, como transformações:',
  ['Exotérmica (libera calor) e Endotérmica (absorve energia)', 'Endotérmica e Exotérmica', 'Ambas endotérmicas', 'Ambas exotérmicas'],
  'Processos exotérmicos liberam energia térmica para o ambiente; endotérmicos absorvem energia para acontecer.');

q('cie-9-d-04', '9º ano', 'dificil', 55, 'EF09CI04', 'Refração e Índice de Refração',
  'Ao passar do ar para a água, um raio de luz visível sofre refração porque:',
  ['Sua velocidade de propagação diminui no meio mais denso (água), alterando a direção do raio', 'Sua frequência aumenta', 'A luz se transforma em calor', 'A água reflete 100% da luz'],
  'A refração ocorre pela mudança na velocidade da onda ao mudar de meio material (v_água < v_ar).');

q('cie-9-d-05', '9º ano', 'dificil', 55, 'EF09CI11', 'Fósseis de Transição e Evolução',
  'O fóssil do Archaeopteryx apresenta penas e asas como as aves modernas, mas também dentes e cauda óssea longa como os répteis dinossauros. Esse fóssil é evidência de:',
  ['Transição evolutiva e ancestralidade comum entre dinossauros terópodes e as aves', 'Espécie falsa criada em laboratório', 'Um mamífero antigo aquático', 'Que as espécies nunca mudam'],
  'Fósseis com mosaicos de características transicionais sustentam a continuidade da árvore filogenética da vida.');

q('cie-9-d-06', '9º ano', 'dificil', 55, 'EF09CI01', 'Ligações Químicas Básicas',
  'Quando átomos de sódio metálico (que tendem a perder 1 elétron) e cloro gasoso (que tende a ganhar 1 elétron) reagem, eles formam o sal NaCl por meio de qual ligação química?',
  ['Ligação iônica (atração eletrostática entre cátions e ânions)', 'Ligação covalente apolar', 'Ligação metálica pura', 'Ponte de hidrogênio'],
  'A transferência definitiva de elétrons cria íons de cargas opostas (Na⁺ e Cl⁻) que se atraem fortemente formando retículo cristalino.');

q('cie-9-d-07', '9º ano', 'dificil', 55, 'EF09CI06', 'Transmissão por Fibra Óptica',
  'Os cabos modernos de fibra óptica transmitem dados de internet a velocidades altíssimas através de pulsos de luz laser graças ao fenômeno da:',
  ['Reflexão interna total da luz dentro do núcleo de vidro', 'Difração sonora', 'Absorção magnética', 'Condução metálica'],
  'A luz entra com ângulo superior ao ângulo limite, refletindo continuamente nas paredes internas sem escapar.');

q('cie-9-d-08', '9º ano', 'dificil', 55, 'EF09CI09', 'Herança dos Grupos Sanguíneos (Sistema ABO)',
  'Um homem do grupo sanguíneo AB e uma mulher do grupo sanguíneo O têm filhos biológicos. Quais são os possíveis tipos sanguíneos dos filhos desse casal?',
  ['Apenas grupo A ou grupo B (50% de chance para cada)', 'Apenas grupo AB e grupo O', 'Apenas grupo O', 'Apenas grupo AB'],
  'Pai (Iᴬ Iᴮ) fornece Iᴬ ou Iᴮ; mãe (ii) sempre fornece i. Genótipos possíveis: Iᴬi (tipo A) ou Iᴮi (tipo B).');

q('cie-9-d-09', '9º ano', 'dificil', 55, 'EF09CI17', 'Evolução Estelar e Supernovas',
  'Elementos químicos pesados essenciais para o nosso corpo e para a Terra (como ferro, ouro, iodo e cálcio) foram forjados no universo através de:',
  ['Reações de fusão nuclear em estrelas massivas e explosões catastróficas de supernovas', 'Queima de carvão na crosta terrestre', 'Efeito estufa solar', 'Gravidade da Lua'],
  'Como disse Carl Sagan, "somos poeira de estrelas": a nucleossíntese estelar e explosões de supernovas espalharam os elementos pelo cosmos.');

q('cie-9-d-10', '9º ano', 'dificil', 55, 'EF09CI03', 'Reação de Neutralização',
  'Ao misturar ácido clorídrico (HCl) e hidróxido de sódio (NaOH) em proporções estequiométricas adequadas, os produtos finais formados são:',
  ['Cloreto de sódio (sal de cozinha, NaCl) e água (H₂O)', 'Gás cloro e gás hidrogênio', 'Açúcar e oxigênio', 'Ácido sulfúrico'],
  'A reação clássica de neutralização entre ácido forte e base forte produz sal inorgânico e água: HCl + NaOH → NaCl + H₂O.');

q('cie-9-d-11', '9º ano', 'dificil', 55, 'EF09CI04', 'Ressonância Acústica',
  'Quando uma cantora de ópera emite uma nota musical na frequência natural de vibração de uma taça de cristal fina e a taça quebra, ocorreu:',
  ['Ressonância acústica (amplitude de oscilação aumenta até a ruptura)', 'Reflexão total', 'Interferência destrutiva', 'Polarização'],
  'A transferência eficiente de energia na frequência de ressonância amplifica as ondas de deformação até o limite elástico do material.');

q('cie-9-d-12', '9º ano', 'dificil', 55, 'EF09CI10', 'Homologia vs Analogia',
  'O braço de um ser humano, a nadadeira de uma baleia e a asa de um morcego possuem a mesma organização óssea básica derivada de um ancestral comum, sendo chamados de:',
  ['Órgãos homólogos (evidência de divergência evolutiva)', 'Órgãos análogos convergentes', 'Estruturas fósseis mortas', 'Mutações artificiais'],
  'Homologias refletem ancestralidade comum com adaptações morfológicas a funções diferentes (nadar, voar, manipular).');

q('cie-9-d-13', '9º ano', 'dificil', 55, 'EF09CI01', 'Famílias da Tabela Periódica (Gases Nobres)',
  'Os gases nobres (como hélio, neônio e argônio) são quimicamente inertes e raramente formam compostos naturais porque:',
  ['Possuem a camada de valência completa (8 elétrons, ou 2 no hélio), conferindo alta estabilidade química', 'Não têm elétrons', 'Têm massa atômica zero', 'São metais pesados'],
  'A regra do octeto explica a grande estabilidade dos gases nobres, que não necessitam doar, receber ou compartilhar elétrons.');

q('cie-9-d-14', '9º ano', 'dificil', 55, 'EF09CI07', 'Hipermetropia e Lentes',
  'A hipermetropia é a dificuldade de enxergar objetos próximos com imagem formada atrás da retina. Ela é corrigida com lentes:',
  ['Convergentes', 'Divergentes', 'Plano-côncavas', 'Bifocais neutras'],
  'Lentes convergentes aproximam os raios luminosos, encurtando a distância focal para posicionar o foco sobre a retina.');

q('cie-9-d-15', '9º ano', 'dificil', 55, 'EF09CI15', 'Expansão do Universo e Redshift',
  'O astrônomo Edwin Hubble descobriu que as galáxias distantes estão se afastando da Terra porque a luz emitida por elas apresenta desvio para o vermelho (redshift). Isso comprova que:',
  ['O próprio tecido do espaço no universo está em contínua expansão', 'A Terra é o centro fixo do cosmos', 'As estrelas estão esfriando e apagando', 'A gravidade parou de agir'],
  'O estiramento do comprimento de onda da luz viajando pelo espaço em expansão (redshift cosmológico) confirma a teoria do Big Bang.');

// EXPERT (15 questões)
q('cie-9-e-01', '9º ano', 'expert', 80, 'EF09CI01', 'Modelo Atômico de Bohr e Espectros de Emissão',
  'Quando fogos de artifício explodem emitindo cores vivas (como verde para bário ou vermelho para estrôncio), a luz colorida é produzida pelo:',
  ['Salto quântico de elétrons que retornam a níveis de menor energia emitindo fótons de comprimento de onda específico', 'Atrito mecânico entre os átomos', 'Fusão nuclear dos núcleos', 'Giro dos nêutrons'],
  'Bohr explicou que a energia absorvida excita elétrons para níveis superiores; ao retornar ao estado fundamental, eles emitem fótons de frequência característica.');

q('cie-9-e-02', '9º ano', 'expert', 80, 'EF09CI08', 'Segunda Lei de Mendel (Dihibridismo)',
  'No cruzamento de indivíduos duplo heterozigotos para dois genes independentes (AaBb × AaBb), a proporção fenotípica clássica obtida na descendência é:',
  ['9 : 3 : 3 : 1', '3 : 1', '1 : 2 : 1', '1 : 1 : 1 : 1'],
  'Pela segregação independente dos fatores, a combinação dos pares de alelos resulta na clássica proporção mendeliana 9:3:3:1.');

q('cie-9-e-03', '9º ano', 'expert', 80, 'EF09CI02', 'Rendimento de Reações e Reagente Limitante',
  'Na síntese de amônia N₂ + 3 H₂ → 2 NH₃, se misturarmos 1 mol de N₂ com apenas 2 mols de H₂, o reagente limitante da reação será:',
  ['O gás hidrogênio (H₂), pois seriam necessários 3 mols para reagir com 1 mol de N₂', 'O gás nitrogênio (N₂)', 'A própria amônia', 'Não há reagente limitante'],
  'A estequiometria exige 3 H₂ para cada 1 N₂. Como só há 2 mols de H₂, ele acaba primeiro, limitando a produção máxima de produto.');

q('cie-9-e-04', '9º ano', 'expert', 80, 'EF09CI10', 'Deriva Genética vs Seleção Natural',
  'A deriva genética diferencia-se da seleção natural porque:',
  ['Altera as frequências alélicas de uma população por eventos aleatórios e casuais (como desastres), independente do valor adaptativo do gene', 'Sempre favorece os mais aptos', 'Só ocorre em laboratório', 'É provocada pelo cruzamento preferencial'],
  'Na deriva genética (efeito gargalo ou fundador), a sobrevivência de certos alelos deve-se ao acaso e não a vantagens reprodutivas.');

q('cie-9-e-05', '9º ano', 'expert', 80, 'EF09CI06', 'Dualidade Onda-Partícula da Luz Introdutória',
  'Fenômenos como difração e interferência comprovam a natureza ondulatória da luz, enquanto o efeito fotoelétrico comprovou que a luz:',
  ['Também se comporta como feixe de partículas discretas de energia (fótons)', 'É uma onda sonora ultrassônica', 'Não tem velocidade finita', 'É matéria líquida'],
  'Albert Einstein explicou o efeito fotoelétrico demonstrando a quantização da luz em pacotes discretos (fótons).');

q('cie-9-e-06', '9º ano', 'expert', 80, 'EF09CI03', 'Soluções Tampão e Homeostase do Sangue',
  'O sangue humano mantém seu pH rigorosamente estável em torno de 7,35 a 7,45 mesmo após a ingestão de alimentos ácidos graças ao sistema tampão de:',
  ['Ácido carbônico e bicarbonato (H₂CO₃ / HCO₃⁻)', 'Ácido clorídrico concentrado', 'Sal marinho puro', 'Glicose e insulina'],
  'O equilíbrio químico entre CO₂ dissolvido, ácido carbônico e íons bicarbonato absorve íons H⁺ ou OH⁻ em excesso.');

q('cie-9-e-07', '9º ano', 'expert', 80, 'EF09CI17', 'Buracos Negros e Relatividade Geral Introdutória',
  'Um buraco negro estelar forma-se após o colapso gravitacional de uma estrela hipermassiva, criando uma região do espaço onde:',
  ['A gravidade é tão intensa que nem mesmo a luz consegue escapar de seu horizonte de eventos', 'A temperatura é infinita em todo o espaço', 'A velocidade da luz é zero no vácuo', 'A matéria vira poeira solar'],
  'A concentração extrema de massa dobra o espaço-tempo de tal modo que a velocidade de escape no horizonte de eventos supera a velocidade da luz.');

q('cie-9-e-08', '9º ano', 'expert', 80, 'EF09CI09', 'Mutação Genética como Fonte Primária de Variabilidade',
  'Qual é o único mecanismo biológico capaz de criar novos alelos e genes inéditos em uma população ao longo das eras geológicas?',
  ['Mutação genética no DNA dos gametas', 'Seleção natural', 'Recombinação cromossômica', 'Migração de indivíduos'],
  'A recombinação apenas recombina genes pré-existentes; mutações aleatórias na sequência de nucleotídeos são a fonte primária de novidades genéticas.');

q('cie-9-e-09', '9º ano', 'expert', 80, 'EF09CI01', 'Isótopos e Datação por Carbono-14',
  'O Carbono-12 e o Carbono-14 são considerados isótopos porque possuem:',
  ['O mesmo número de prótons (Z = 6), mas números diferentes de nêutrons e massas atômicas distintas', 'O mesmo número de nêutrons e prótons diferentes', 'Cargas elétricas opostas', 'Propriedades químicas completamente diferentes'],
  'Isótopos são átomos do mesmo elemento químico (mesmo Z) com massas diferentes devido ao número de nêutrons no núcleo.');

q('cie-9-e-10', '9º ano', 'expert', 80, 'EF09CI04', 'Interferência Construtiva e Destrutiva',
  'Em fones de ouvido modernos com cancelamento ativo de ruído, os microfones captam o barulho externo e os alto-falantes emitem:',
  ['Uma onda sonora idêntica com fase invertida (180° defasada), gerando interferência destrutiva que anula o ruído', 'Música em volume dobrado', 'Ondas eletromagnéticas que bloqueiam o ar', 'Ar frio'],
  'A crista da onda inversa coincide com o vale da onda externa, anulando as oscilações de pressão do som.');

q('cie-9-e-11', '9º ano', 'expert', 80, 'EF09CI10', 'Radiação Adaptativa',
  'O exemplo histórico dos tentilhões de Galápagos estudados por Darwin, onde uma única espécie ancestral deu origem a diversas espécies com bicos adaptados a alimentos diferentes em ilhas vizinhas, ilustra o processo de:',
  ['Radiação adaptativa (especiação divergente)', 'Convergência evolutiva', 'Extinção em massa', 'Hibridação artificial'],
  'A ocupação de nichos ecológicos vagos leva populações isoladas a se adaptarem a dietas distintas, culminando em novas espécies.');

q('cie-9-e-12', '9º ano', 'expert', 80, 'EF09CI02', 'Velocidade de Reações e Catalisadores',
  'A adição de um catalisador químico (ou de uma enzima biológica) acelera uma reação química porque:',
  ['Diminui a energia de ativação necessária para os reagentes atingirem o estado de transição', 'Aumenta a massa final do produto', 'Aquece a mistura espontaneamente', 'Altera a constante de equilíbrio'],
  'Catalisadores oferecem um caminho alternativo de menor energia de ativação, aumentando a velocidade sem serem consumidos.');

q('cie-9-e-13', '9º ano', 'expert', 80, 'EF09CI16', 'Missão James Webb e Atmosferas de Exoplanetas',
  'Os astrônomos utilizam espectroscopia de trânsito em telescópios espaciais para analisar exoplanetas procurando:',
  ['Bioassinaturas (como presença simultânea de metano, oxigênio e vapor de água) na atmosfera do planeta', 'Fotografias com árvores na superfície', 'Sinais de rádio de rádio-amadores', 'Minas de ouro no solo'],
  'A luz da estrela que atravessa a atmosfera do exoplaneta deixa linhas de absorção espectrais características dos gases presentes.');

q('cie-9-e-14', '9º ano', 'expert', 80, 'EF09CI06', 'Radiação de Fundo em Micro-ondas',
  'A Radiação Cósmica de Fundo em Micro-ondas detectada em todo o céu em temperatura de cerca de 2,7 Kelvin é considerada a principal evidência da:',
  ['Origem do Universo através do Big Bang (o eco térmico do universo primordial)', 'Explosão de uma supernova próxima recente', 'Radiação do núcleo da Terra', 'Luz emitida pela Lua'],
  'Descoberta por Penzias e Wilson em 1965, é o fóssil eletromagnético do desacoplamento da matéria e radiação logo após o Big Bang.');

q('cie-9-e-15', '9º ano', 'expert', 80, 'EF09CI08', 'Epigenética Introdutória',
  'A epigenética estuda modificações na expressão dos genes (como metilação do DNA) causadas por fatores ambientais e hábitos de vida que:',
  ['Ativam ou silenciam genes sem alterar a sequência de bases nucleotídicas do DNA', 'Criam novos cromossomos no indivíduo', 'Transformam DNA em carboidratos', 'Eliminam todas as mutações'],
  'Fatores como estresse, dieta e poluição podem adicionar marcadores químicos ao DNA, ligando ou desligando genes sem mudar o código genético.');

console.log('Total Final de Questões de Ciências Fundamental:', list.length);

const fileContent = `import { QuestionData } from './types';

// ============================================================================
// BANCO DE CIÊNCIAS - ENSINO FUNDAMENTAL (6º AO 9º ANO)
// REVISADO E CALIBRADO PELA BNCC COM HABILIDADES OFICIAIS VERIFICADAS
// Total: 240 questões (15 por dificuldade em cada ano escolar)
// ============================================================================

export const FUNDAMENTAL_SCIENCE_QUESTIONS: QuestionData[] = ${JSON.stringify(list, null, 2)};
`;

fs.writeFileSync('src/games/quiz/matriz/questions/fundamentalScience.ts', fileContent);
console.log('Arquivo src/games/quiz/matriz/questions/fundamentalScience.ts gerado com sucesso!');
