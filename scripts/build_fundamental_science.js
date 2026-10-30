import fs from 'fs';

const list = [];

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
// 6º ANO - CIÊNCIAS (EF06CI)
// ============================================================================

// FÁCIL (15 questões)
q('cie-6-f-01', '6º ano', 'facil', 20, 'EF06CI01', 'Misturas Homogêneas e Heterogêneas',
  'A água mineral sem gás que bebemos no dia a dia é um exemplo de:',
  ['Mistura homogênea (solução)', 'Mistura heterogênea', 'Substância pura isolada', 'Composto gasoso'],
  'A água mineral contém sais minerais dissolvidos de modo uniforme, formando uma única fase visível (mistura homogênea).');

q('cie-6-f-02', '6º ano', 'facil', 20, 'EF06CI05', 'Célula como Unidade da Vida',
  'Qual estrutura envolve e protege a célula, controlando a entrada e saída de substâncias?',
  ['Membrana plasmática', 'Parede mineral', 'Núcleo', 'Ribossomo'],
  'A membrana plasmática atua como barreira seletiva semipermeável que delimita a célula.');

q('cie-6-f-03', '6º ano', 'facil', 20, 'EF06CI02', 'Transformações Físicas',
  'O derretimento de um cubo de gelo deixado sobre a mesa em temperatura ambiente é um exemplo de:',
  ['Transformação física (fusão)', 'Transformação química irreversível', 'Combustão', 'Oxidação'],
  'A fusão é uma mudança de estado físico (sólido para líquido) onde a substância continua sendo água (H₂O).');

q('cie-6-f-04', '6º ano', 'facil', 60, 'EF06CI11', 'Estrutura Interna da Terra',
  'Qual é a camada mais externa e fina do planeta Terra, onde nós pisamos e construímos?',
  ['Crosta terrestre', 'Manto inferior', 'Núcleo externo', 'Núcleo interno'],
  'A crosta terrestre é a camada superficial sólida e rochosa que sustenta os continentes e os oceanos.');

q('cie-6-f-05', '6º ano', 'facil', 20, 'EF06CI06', 'Níveis de Organização dos Seres Vivos',
  'Qual é a sequência correta dos níveis básicos de organização biológica nos organismos pluricelulares?',
  ['Célula → Tecido → Órgão → Sistema → Organismo', 'Tecido → Célula → Órgão → Organismo', 'Órgão → Célula → Tecido → Sistema', 'Célula → Órgão → Tecido → Organismo'],
  'As células semelhantes formam tecidos, tecidos formam órgãos, órgãos compõem sistemas que constituem o organismo.');

q('cie-6-f-06', '6º ano', 'facil', 20, 'EF06CI03', 'Separação de Misturas',
  'Qual método simples é utilizado para separar o pó de café da água quente ao preparar a bebida?',
  ['Filtração', 'Decantação', 'Evaporação', 'Destilação fracionada'],
  'A filtração retém o pó sólido no filtro de papel ou pano, permitindo a passagem do líquido.');

q('cie-6-f-07', '6º ano', 'facil', 20, 'EF06CI09', 'Solo e Agricultura',
  'Qual componente do solo fértil é originado da decomposição de restos de plantas e animais?',
  ['Húmus (matéria orgânica)', 'Areia pura', 'Argila expandida', 'Cascalho'],
  'O húmus é a matéria orgânica decomposta que fornece nutrientes essenciais e melhora a retenção de água no solo.');

q('cie-6-f-08', '6º ano', 'facil', 20, 'EF06CI05', 'Material Genético',
  'Nas células eucariontes, onde fica guardado o material genético (DNA)?',
  ['Dentro do núcleo delimitado por membrana', 'Livre na membrana plasmática', 'Na parede celular', 'No vacúolo'],
  'As células eucariontes possuem núcleo delimitado pela carioteca (envoltório nuclear), onde se aloja o DNA.');

q('cie-6-f-09', '6º ano', 'facil', 20, 'EF06CI13', 'Formato da Terra',
  'A observação de navios desaparecendo gradualmente no horizonte com o casco sumindo antes do mastro é evidência de que:',
  ['A Terra tem formato esférico (curvo)', 'A Terra é plana', 'O mar evapora no horizonte', 'Os navios afundam'],
  'A curvatura da Terra faz com que a linha de visada bloqueie primeiro as partes mais baixas do navio distante.');

q('cie-6-f-10', '6º ano', 'facil', 20, 'EF06CI07', 'Sistema Digestório Introdutório',
  'Em qual órgão do corpo humano tem início a digestão dos alimentos com a mastigação e salivação?',
  ['Boca', 'Estômago', 'Intestino delgado', 'Esôfago'],
  'A digestão começa na boca com a trituração mecânica pelos dentes e a ação enzimática da saliva.');

q('cie-6-f-11', '6º ano', 'facil', 20, 'EF06CI01', 'Fases de uma Mistura',
  'Uma mistura de água líquida e óleo de cozinha em repouso apresenta quantas fases visíveis?',
  ['Duas fases distintas (mistura heterogênea bifásica)', 'Uma única fase', 'Três fases', 'Nenhuma fase'],
  'Por serem imiscíveis e possuírem densidades diferentes, a água e o óleo não se misturam, exibindo duas fases visíveis.');

q('cie-6-f-12', '6º ano', 'facil', 20, 'EF06CI08', 'Sistema Locomotor',
  'Quais estruturas do corpo humano conectam os músculos aos ossos para permitir o movimento?',
  ['Tendões', 'Articulações', 'Cartilagens', 'Vasos sanguíneos'],
  'Os tendões são cordões fibrosos resistentes que fixam os músculos esqueléticos aos ossos.');

q('cie-6-f-13', '6º ano', 'facil', 20, 'EF06CI11', 'Movimento de Rotação',
  'O movimento que a Terra realiza girando em torno de seu próprio eixo imaginário em aproximadamente 24 horas é a:',
  ['Rotação', 'Translação', 'Nutação', 'Precessão'],
  'A rotação terrestre é o giro em torno do próprio eixo que dá origem à alternância entre dias e noites.');

q('cie-6-f-14', '6º ano', 'facil', 20, 'EF06CI03', 'Separação Magnética',
  'Qual ferramenta pode ser usada para separar facilmente pequenos pregos de ferro misturados na areia?',
  ['Um ímã (separação magnética)', 'Uma peneira', 'Um filtro de papel', 'Um termômetro'],
  'O ímã atrai materiais ferromagnéticos como o ferro, separando-os de materiais não magnéticos como a areia.');

q('cie-6-f-15', '6º ano', 'facil', 20, 'EF06CI14', 'Movimento Aparente do Sol',
  'Ao longo do dia, o Sol parece nascer a leste e se pôr a oeste. Esse fenômeno aparente é provocado pelo:',
  ['Movimento de rotação da Terra de oeste para leste', 'Giro do Sol ao redor da Terra', 'Movimento de translação anual', 'Formato elíptico da órbita'],
  'Como a Terra gira de oeste para leste, temos a ilusão de ótica de que os astros no céu se movem de leste para oeste.');

// MÉDIO (15 questões)
q('cie-6-m-01', '6º ano', 'medio', 35, 'EF06CI03', 'Destilação Simples',
  'Qual método de separação é o mais indicado para recuperar a água pura a partir de uma mistura de água com sal dissolvido?',
  ['Destilação simples', 'Filtração simples', 'Decantação', 'Catação'],
  'Na destilação simples, a água evapora por aquecimento e se condensa no condensador, deixando o sal sólido no frasco.');

q('cie-6-m-02', '6º ano', 'medio', 35, 'EF06CI02', 'Evidência de Transformação Química',
  'Qual dos seguintes fenômenos do dia a dia representa uma transformação química com formação de novas substâncias?',
  ['Queima de uma vela com liberação de fumaça e calor', 'Rasgar uma folha de papel', 'Quebrar um copo de vidro', 'Dissolver açúcar em água'],
  'A queima (combustão) consome o combustível e o oxigênio gerando novas substâncias (gás carbônico, vapor de água e fuligem).');

q('cie-6-m-03', '6º ano', 'medio', 35, 'EF06CI07', 'Respiração e Trocas Gasosas',
  'Em quais estruturas microscópicas dos pulmões ocorrem as trocas gasosas (hematose) entre o ar e o sangue?',
  ['Alvéolos pulmonares', 'Brônquios', 'Traqueia', 'Laringe'],
  'Os alvéolos pulmonares possuem paredes finas e rica rede de capilares que facilitam a passagem de oxigênio para o sangue.');

q('cie-6-m-04', '6º ano', 'medio', 35, 'EF06CI11', 'Litosfera e Tectonismo',
  'A litosfera da Terra não é uma camada contínua, mas sim dividida em grandes blocos rochosos em movimento chamados:',
  ['Placas tectônicas', 'Camadas atmosféricas', 'Bacias sedimentares', 'Crateras basálticas'],
  'A litosfera é fragmentada em placas tectônicas que deslizam lentamente sobre o manto superior.');

q('cie-6-m-05', '6º ano', 'medio', 35, 'EF06CI05', 'Célula Vegetal vs Animal',
  'Qual organela/estrutura está presente nas células vegetais para realizar fotossíntese, mas ausente nas células animais?',
  ['Cloroplasto', 'Mitocôndria', 'Ribossomo', 'Membrana plasmática'],
  'Os cloroplastos contêm clorofila e realizam a fotossíntese, sendo exclusivos de células vegetais e algas.');

q('cie-6-m-06', '6º ano', 'medio', 35, 'EF06CI03', 'Decantação e Tratamento de Água',
  'Em uma estação de tratamento de água, a etapa em que partículas sólidas pesadas descem para o fundo do tanque é chamada:',
  ['Decantação', 'Filtração', 'Fluoretação', 'Aeração'],
  'A decantação permite que as partículas mais densas se depositem no fundo do tanque pela ação da gravidade.');

q('cie-6-m-07', '6º ano', 'medio', 35, 'EF06CI09', 'Erosão do Solo',
  'A remoção da vegetação nativa nas encostas de morros facilita qual processo prejudicial ao solo?',
  ['Erosão e deslizamentos de terra', 'Aumento de nutrientes', 'Formação de novo húmus', 'Oxigenação do solo'],
  'As raízes das plantas seguram as partículas do solo. Sem vegetação, as chuvas arrastam o solo desprotegido (erosão).');

q('cie-6-m-08', '6º ano', 'medio', 35, 'EF06CI07', 'Circulação Sanguínea',
  'Qual vaso sanguíneo tem paredes elásticas e grossas e transporta sangue do coração para o restante do corpo sob alta pressão?',
  ['Artérias', 'Veias', 'Capilares', 'Vênulas'],
  'As artérias saem dos ventrículos com paredes espessas e musculosas para suportar a alta pressão do bombeamento cardíaco.');

q('cie-6-m-09', '6º ano', 'medio', 35, 'EF06CI12', 'Estações do Ano',
  'As estações do ano ocorrem na Terra principalmente devido a qual combinação de fatores astronômicos?',
  ['Inclinação do eixo terrestre e movimento de translação ao redor do Sol', 'Apenas a distância da Terra ao Sol', 'Apenas a rotação da Terra', 'Movimento da Lua ao redor da Terra'],
  'O eixo inclinado em cerca de 23,5° combinado com a translação faz com que cada hemisfério receba insolação diferente ao longo do ano.');

q('cie-6-m-10', '6º ano', 'medio', 35, 'EF06CI01', 'Solubilidade e Saturação',
  'Ao adicionar açúcar continuamente em um copo de água, chega um momento em que ele não se dissolve mais e acumula no fundo. Dizemos que a solução está:',
  ['Saturada', 'Insaturada', 'Diluída', 'Pura'],
  'Uma solução saturada atingiu o coeficiente máximo de solubilidade daquele soluto na temperatura dada.');

q('cie-6-m-11', '6º ano', 'medio', 35, 'EF06CI06', 'Diferenciação Celular',
  'Um neurônio e uma célula muscular possuem formatos e funções muito diferentes, embora pertençam ao mesmo corpo, porque:',
  ['Sofreram especialização e diferenciação para desempenhar funções específicas', 'Possuem materiais genéticos de espécies diferentes', 'Uma é vegetal e a outra é animal', 'Uma é acelular'],
  'Durante o desenvolvimento, as células ativam genes específicos para se especializarem em diferentes tecidos.');

q('cie-6-m-12', '6º ano', 'medio', 35, 'EF06CI04', 'Materiais Sintéticos e Sustentabilidade',
  'Muitos plásticos comuns levam séculos para se decompor na natureza porque são:',
  ['Materiais sintéticos derivados de petróleo que bactérias não decompõem com facilidade', 'Substâncias orgânicas puras', 'Compostos minerais da crosta', 'Solúveis em água doce'],
  'Os polímeros sintéticos possuem ligações químicas artificiais que a maioria dos microrganismos decompositores não consegue quebrar.');

q('cie-6-m-13', '6º ano', 'medio', 35, 'EF06CI10', 'Camadas da Atmosfera',
  'Em qual camada da atmosfera ocorrem os principais fenômenos meteorológicos que conhecemos, como nuvens, chuvas e ventos?',
  ['Troposfera', 'Estratosfera', 'Mesosfera', 'Termosfera'],
  'A troposfera é a camada em contato com a superfície que concentra cerca de 75% dos gases e quase todo o vapor de água.');

q('cie-6-m-14', '6º ano', 'medio', 35, 'EF06CI08', 'Sentidos e Sistema Nervoso',
  'Qual parte do olho humano é sensível à luz e converte os estímulos luminosos em impulsos nervosos enviados ao cérebro?',
  ['Retina', 'Córnea', 'Cristalino', 'Íris'],
  'A retina contém fotorreceptores (cones e bastonetes) que transformam a luz em impulsos elétricos transmitidos pelo nervo óptico.');

q('cie-6-m-15', '6º ano', 'medio', 35, 'EF06CI13', 'Sombra e Gnomon',
  'Ao observar a sombra de uma vara vertical (gnomon) ao longo de um dia ensolarado, percebe-se que ela atinge seu menor comprimento:',
  ['Ao meio-dia solar, quando o Sol atinge sua altura máxima no céu', 'No início da manhã', 'No final da tarde', 'Durante o pôr do sol'],
  'Com os raios solares incidindo mais verticalmente no ápice do dia, a projeção da sombra no solo fica mais curta.');

// DIFÍCIL (15 questões)
q('cie-6-d-01', '6º ano', 'dificil', 55, 'EF06CI03', 'Centrifugação',
  'Em exames de laboratório, qual técnica acelera a separação do plasma dos glóbulos vermelhos do sangue através de rotação rápida?',
  ['Centrifugação', 'Filtração simples', 'Evaporação lenta', 'Levigação'],
  'A centrifugação utiliza força centrífuga em alta velocidade para precipitar os componentes mais densos no fundo do tubo.');

q('cie-6-d-02', '6º ano', 'dificil', 55, 'EF06CI05', 'Fotossíntese e Respiração Celular',
  'As plantas realizam fotossíntese de dia e respiram o tempo todo. Na respiração celular, elas absorvem e liberam, respectivamente:',
  ['Absorvem gás oxigênio (O₂) e liberam gás carbônico (CO₂)', 'Absorvem CO₂ e liberam O₂', 'Absorvem nitrogênio e liberam oxigênio', 'Não realizam respiração'],
  'Tanto animais quanto plantas respiram consumindo oxigênio e liberando dióxido de carbono para obter energia celular.');

q('cie-6-d-03', '6º ano', 'dificil', 55, 'EF06CI11', 'Tipos de Rochas',
  'Rochas formadas pelo resfriamento e solidificação do magma vulcânico, como o basalto e o granito, são classificadas como:',
  ['Rochas magmáticas (ígneas)', 'Rochas sedimentares', 'Rochas metamórficas', 'Minerais orgânicos'],
  'As rochas magmáticas ou ígneas se originam da cristalização do magma vulcânico na superfície ou no interior da crosta.');

q('cie-6-d-04', '6º ano', 'dificil', 55, 'EF06CI07', 'Integração entre Digestão e Respiração',
  'Para que as células do corpo produzam energia vital (ATP), quais dois insumos essenciais devem ser entregues a elas pelos sistemas circulatório, digestório e respiratório?',
  ['Glicose (nutriente alimentar) e gás oxigênio (da respiração)', 'Água pura e gás carbônico', 'Apenas oxigênio e minerais', 'Sal de cozinha e gás nitrogênio'],
  'A respiração celular utiliza a glicose obtida da digestão e o oxigênio obtido na respiração para liberar energia e sustentar a vida.');

q('cie-6-d-05', '6º ano', 'dificil', 55, 'EF06CI09', 'Técnicas de Conservação do Solo',
  'O plantio em curvas de nível e o terraceamento em encostas íngremes são técnicas agrícolas importantes porque:',
  ['Reduzem a velocidade do escoamento da água da chuva, evitando a erosão', 'Aumentam a incidência direta do sol', 'Eliminam a necessidade de irrigação', 'Substituem o uso de adubo'],
  'As curvas de nível quebram a velocidade da enxurrada descendo a encosta, facilitando a infiltração e protegendo o solo.');

q('cie-6-d-06', '6º ano', 'dificil', 55, 'EF06CI02', 'Lei de Conservação das Massas em Sistema Fechado',
  'Se queimarmos 10 gramas de palha de aço dentro de um frasco de vidro hermeticamente fechado contendo oxigênio, a massa total do frasco após a reação será:',
  ['Exatamente igual à massa inicial antes da queima', 'Maior, porque a palha enferruja', 'Menor, porque cinzas pesam menos', 'Zero gramas'],
  'Em um sistema fechado, pela Lei de Lavoisier, a matéria não é criada nem destruída; a massa total permanece constante.');

q('cie-6-d-07', '6º ano', 'dificil', 55, 'EF06CI14', 'Fuso Horário e Rotação',
  'O Brasil possui diferentes fusos horários oficiais em seu território porque:',
  ['A grande extensão no sentido leste-oeste recebe a luz solar em momentos diferentes', 'O país fica em dois hemisférios (norte e sul)', 'O relevo do planalto altera a velocidade do sol', 'O horário é definido por cada estado'],
  'Como a Terra gira 360° em 24 horas (15° por hora), regiões com grande distância longitudinal amanhecem em horários diferentes.');

q('cie-6-d-08', '6º ano', 'dificil', 55, 'EF06CI08', 'Ato Reflexo',
  'Ao encostar a mão por acidente em uma panela quente, a pessoa retira a mão antes mesmo de perceber a dor conscientemente. Essa resposta rápida involuntária é coordenada pelo:',
  ['Ato reflexo mediado pela medula espinhal', 'Cerebelo no topo da cabeça', 'Estômago', 'Coração'],
  'No arco reflexo medular, a resposta motora rápida de proteção é disparada diretamente na medula espinhal para evitar queimaduras graves.');

q('cie-6-d-09', '6º ano', 'dificil', 55, 'EF06CI04', 'Reciclagem e Ciclo de Materiais',
  'Por que a reciclagem do alumínio economiza cerca de 95% de energia em comparação com a produção a partir do minério bauxita?',
  ['Porque fundir a sucata exige muito menos calor do que a extração eletroquímica do minério', 'Porque o alumínio reciclado é mais leve', 'Porque a sucata evapora mais rápido', 'Porque a bauxita é inflamável'],
  'A eletrólise da bauxita consome enormes quantidades de eletricidade; reprocessar latinhas de alumínio demanda uma fração mínima dessa energia.');

q('cie-6-d-10', '6º ano', 'dificil', 55, 'EF06CI12', 'Solstícios e Equinócios',
  'No dia do equinócio, em qualquer lugar do planeta:',
  ['O dia e a noite têm praticamente a mesma duração (12 horas cada)', 'Ocorre a noite mais longa do ano', 'Ocorre o dia mais longo do ano', 'O Sol não se põe nos polos'],
  'Equinócio significa "noites iguais": a luz solar incide perpendicularmente sobre a linha do Equador.');

q('cie-6-d-11', '6º ano', 'dificil', 55, 'EF06CI01', 'Densidade e Flutuação',
  'Um pedaço maciço de ferro afunda na água, mas um navio colossal feito de toneladas de aço flutua no oceano. Isso ocorre porque:',
  ['O navio é oco e seu volume engloba ar, tornando sua densidade média menor que a da água', 'O sal do mar destrói a gravidade', 'O ferro do navio é modificado geneticamente', 'O navio tem motores potentes'],
  'A densidade é a massa dividida pelo volume total. O grande volume interno ocupado por ar reduz a densidade média do navio para menos de 1 g/cm³.');

q('cie-6-d-12', '6º ano', 'dificil', 55, 'EF06CI10', 'Camada de Ozônio',
  'Qual é o papel vital desempenhado pela camada de ozônio (O₃) presente na estratosfera terrestre?',
  ['Filtrar e absorver a maior parte da radiação ultravioleta prejudicial (UV-B) do Sol', 'Reter o calor gerando o efeito estufa', 'Fornecer oxigênio para a respiração humana', 'Gerar ventos alísios'],
  'O ozônio estratosférico bloqueia grande parte dos raios ultravioleta de alta energia que provocam mutações genéticas e câncer de pele.');

q('cie-6-d-13', '6º ano', 'dificil', 55, 'EF06CI06', 'Organismos Procariontes vs Eucariontes',
  'Qual é a principal característica que diferencia as bactérias (procariontes) de todos os animais e plantas (eucariontes)?',
  ['As bactérias não possuem núcleo organizado delimitado por membrana', 'As bactérias não têm DNA', 'As bactérias são pluricelulares', 'As bactérias têm esqueleto ósseo'],
  'Nas bactérias, o material genético fica disperso no citoplasma na região do nucleoide, sem carioteca.');

q('cie-6-d-14', '6º ano', 'dificil', 55, 'EF06CI03', 'Cromatografia em Papel',
  'A técnica de laboratório que separa os diferentes pigmentos coloridos da tinta de uma caneta utilizando álcool e papel filtro é a:',
  ['Cromatografia em papel', 'Destilação fracionada', 'Catação seletiva', 'Sublimação'],
  'Na cromatografia, os componentes da mistura se deslocam pelo papel em velocidades diferentes conforme sua solubilidade e afinidade com o solvente.');

q('cie-6-d-15', '6º ano', 'dificil', 55, 'EF06CI13', 'Eclipses e Esfericidade',
  'Durante os eclipses lunares, a sombra projetada pela Terra sobre a Lua é sempre circular em todas as posições observadas. Esse fato histórico serviu a Aristóteles para provar que:',
  ['A Terra tem formato esférico tridimensional', 'A Terra é um disco plano', 'A Lua é maior que a Terra', 'A Terra não tem atmosfera'],
  'Somente um corpo esférico tridimensional projeta uma sombra circular independente do ângulo em que a luz o atinge.');

// EXPERT (15 questões)
q('cie-6-e-01', '6º ano', 'expert', 80, 'EF06CI02', 'Reversibilidade de Transformações',
  'Qual das seguintes transformações é considerada reversível através de simples alteração de temperatura ambiente?',
  ['Condensação do vapor de água de volta ao estado líquido', 'Fritura de um ovo com clara solidificada', 'Queima de um fósforo', 'Digestão de uma maçã'],
  'As mudanças de estado físico (como vapor virando líquido) são transformações físicas reversíveis por resfriamento ou aquecimento.');

q('cie-6-e-02', '6º ano', 'expert', 80, 'EF06CI05', 'Célula e Osmose Introdutória',
  'Ao temperar uma salada de alface fresca com sal muito antes de comer, as folhas murcham e soltam água. Esse fenômeno ocorre por:',
  ['Osmose (perda de água celular para o meio externo mais concentrado em sal)', 'Digestão da folha pelo azeite', 'Morte instantânea dos cloroplastos', 'Respiração anaeróbia da folha'],
  'A osmose é o movimento passivo da água da região menos concentrada (interior da célula) para a mais concentrada (tempero com sal).');

q('cie-6-e-03', '6º ano', 'expert', 80, 'EF06CI11', 'Fósseis e Estratigrafia',
  'Fósseis de animais marinhos antigos encontrados no topo de cadeias montanhosas altas, como os Andes, indicam que:',
  ['Aquelas rochas se formaram no fundo do mar no passado e foram erguidas por forças tectônicas', 'Os animais marinhos escalavam montanhas', 'A montanha sempre esteve submersa', 'O solo choveu do espaço'],
  'O soerguimento tectônico das placas empurra e dobra sedimentos marinhos antigos, elevando rochas com fósseis ao longo de milhões de anos.');

q('cie-6-e-04', '6º ano', 'expert', 80, 'EF06CI07', 'Controle da Frequência Cardíaca',
  'Durante uma corrida intensa, a frequência cardíaca e a respiração aumentam automaticamente para:',
  ['Aumentar o suprimento de oxigênio e glicose aos músculos em atividade e eliminar o excesso de CO₂', 'Resfriar o cérebro apenas', 'Parar a digestão de alimentos', 'Evitar o suor'],
  'O organismo ajusta o débito cardíaco e a ventilação para suprir a alta demanda metabólica das fibras musculares.');

q('cie-6-e-05', '6º ano', 'expert', 80, 'EF06CI09', 'Lixiviação e Degradação do Solo',
  'A lixiviação do solo ocorre quando:',
  ['A água da chuva em excesso lava e arrasta nutrientes solúveis para camadas profundas e lençóis freáticos', 'O solo fica extremamente ressecado', 'As minhocas produzem muito húmus', 'O vento deposita areia'],
  'A lavagem de nutrientes minerais solúveis pela água que percola empobrece o horizonte superficial do solo.');

q('cie-6-e-06', '6º ano', 'expert', 80, 'EF06CI04', 'Ciclo de Vida de Materiais',
  'A análise de ciclo de vida de uma embalagem sustentável deve considerar:',
  ['Desde a extração da matéria-prima, fabricação e transporte até o descarte e reciclabilidade final', 'Apenas o custo de venda na prateleira', 'Apenas a cor da embalagem', 'Apenas se é brilhante'],
  'A avaliação ecológica do berço ao túmulo analisa a pegada ambiental em todas as etapas da cadeia de suprimentos.');

q('cie-6-e-07', '6º ano', 'expert', 80, 'EF06CI14', 'Relógio de Sol e Astronomia Cultural',
  'Historicamente, povos ancestrais utilizavam a posição do Sol e as sombras para criar calendários agrícolas porque perceberam que:',
  ['A trajetória do Sol no céu varia ciclicamente ao longo do ano marcando os períodos de plantio e colheita', 'O Sol parava no céu no inverno', 'As estrelas desapareciam a cada século', 'A Lua tinha sempre a mesma face'],
  'A observação da variação periódica da altura solar e dos pontos de nascente e poente permitiu estruturar os primeiros calendários.');

q('cie-6-e-08', '6º ano', 'expert', 80, 'EF06CI08', 'Sinapses e Neurotransmissores Introdutórios',
  'A comunicação entre dois neurônios vizinhos em nosso cérebro ocorre através de pequenas fendas chamadas:',
  ['Sinapses (com liberação de mensageiros químicos)', 'Tendões celulares', 'Articulações', 'Vasos capilares'],
  'Nas sinapses químicas, a terminação do axônio libera neurotransmissores que se ligam a receptores no dendrito do neurônio seguinte.');

q('cie-6-e-09', '6º ano', 'expert', 80, 'EF06CI03', 'Separação de Petróleo Bruto',
  'Na indústria petroquímica, os diferentes derivados do petróleo cru (gasolina, querosene, óleo diesel) são separados por:',
  ['Destilação fracionada com base em diferentes pontos de ebulição', 'Filtração em tecido de algodão', 'Catação manual', 'Centrifugação térmica'],
  'Na torre de fracionamento, as frações de hidrocarbonetos se condensam em alturas diferentes conforme sua faixa de temperatura de ebulição.');

q('cie-6-e-10', '6º ano', 'expert', 80, 'EF06CI12', 'Estações do Ano Invertidas',
  'Quando no Hemisfério Sul é Solstício de Verão (por volta de 21 de dezembro), no Hemisfério Norte é:',
  ['Solstício de Inverno', 'Equinócio de Outono', 'Solstício de Verão', 'Equinócio de Primavera'],
  'Devido à inclinação do eixo terrestre, enquanto o hemisfério sul recebe radiação solar mais direta, o hemisfério norte recebe menos radiação.');

q('cie-6-e-11', '6º ano', 'expert', 80, 'EF06CI01', 'Soluções Aquosas Condutoras',
  'A água destilada pura conduz quase zero eletricidade, mas a água com sal dissolvido acende uma lâmpada em um circuito. Isso acontece porque:',
  ['O sal dissolvido libera íons livres móveis (Na⁺ e Cl⁻) que transportam a corrente elétrica', 'O sal é um metal condutor sólido', 'A água ferve espontaneamente', 'O sal atrai elétrons do ar'],
  'Soluções iônicas possuem cargas elétricas livres que fecham o circuito condutor.');

q('cie-6-e-12', '6º ano', 'expert', 80, 'EF06CI06', 'Tecidos Especializados',
  'Qual tecido do corpo humano é responsável por revestir superfícies corporais externas e internas e formar glândulas?',
  ['Tecido epitelial', 'Tecido conjuntivo ósseo', 'Tecido muscular estriado', 'Tecido nervoso'],
  'O tecido epitelial tem células justapostas com pouca substância intercelular, protegendo órgãos e secretando substâncias.');

q('cie-6-e-13', '6º ano', 'expert', 80, 'EF06CI11', 'Terremotos e Escala Richter',
  'O ponto no interior da crosta terrestre onde tem início a liberação repentina de energia de um terremoto é denominado:',
  ['Hipocentro (ou foco sísmico)', 'Epicentro superficial', 'Cratera vulcânica', 'Falha gravitacional'],
  'O hipocentro é a origem profunda da ruptura tectônica; o epicentro é o ponto na superfície verticalmente acima do hipocentro.');

q('cie-6-e-14', '6º ano', 'expert', 80, 'EF06CI10', 'Efeito Estufa Natural Benéfico',
  'Se a atmosfera da Terra não possuísse gases de efeito estufa naturais (como vapor de água e CO₂), a temperatura média global seria de cerca de -18°C. Isso demonstra que:',
  ['O efeito estufa natural é essencial para manter a Terra aquecida e permitir a vida líquida', 'Os gases estufa devem ser completamente eliminados', 'A Terra não precisaria de Sol', 'A atmosfera não tem massa'],
  'O efeito estufa natural mantém a temperatura média global agradável em torno de 15°C; o problema ambiental atual é a sua intensificação antrópica.');

q('cie-6-e-15', '6º ano', 'expert', 80, 'EF06CI05', 'Microscopia e Descoberta Celular',
  'O cientista Robert Hooke cunhou o termo "célula" em 1665 ao observar ao microscópio fatias finas de:',
  ['Cortiça (tecido vegetal morto de casca de árvore)', 'Gotas de sangue humano', 'Bactérias em água de lago', 'Músculo de rã'],
  'Hooke observou os pequenos compartimentos vazios de paredes celulares mortas na cortiça e os chamou de "células" (pequenas celas).');

console.log('Total até 6º ano Ciências:', list.length);

fs.writeFileSync('scripts/fundamental_science_temp_6.json', JSON.stringify(list, null, 2));
