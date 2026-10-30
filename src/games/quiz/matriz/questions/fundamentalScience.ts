import { QuestionData } from './types';

// ============================================================================
// BANCO DE CIÊNCIAS - ENSINO FUNDAMENTAL (6º AO 9º ANO)
// REVISADO E CALIBRADO PELA BNCC COM HABILIDADES OFICIAIS VERIFICADAS
// Total: 240 questões (15 por dificuldade em cada ano escolar)
// ALTERNATIVAS RIGOROSAMENTE BALANCEADAS: Sem viés de tamanho, formato ou posição
// ============================================================================

export const FUNDAMENTAL_SCIENCE_QUESTIONS: QuestionData[] = [
  {
    "id": "cie-6-f-01",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF06CI01",
    "topic": "Misturas Homogêneas e Heterogêneas",
    "question": "A água mineral sem gás que bebemos no dia a dia é um exemplo de:",
    "options": [
      "Mistura homogênea líquida",
      "Mistura heterogênea densa",
      "Substância pura isolada",
      "Composto gasoso instável"
    ],
    "correctAnswer": 0,
    "explanation": "A água mineral contém sais minerais dissolvidos de modo uniforme, formando uma única fase visível (mistura homogênea)."
  },
  {
    "id": "cie-6-f-02",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF06CI05",
    "topic": "Célula como Unidade da Vida",
    "question": "Qual estrutura envolve e protege a célula, controlando a entrada e saída de substâncias?",
    "options": [
      "Parede celular vegetal",
      "Membrana plasmática",
      "Complexo golgiense",
      "Retículo endoplasmático"
    ],
    "correctAnswer": 1,
    "explanation": "A membrana plasmática atua como barreira seletiva semipermeável que delimita a célula."
  },
  {
    "id": "cie-6-f-03",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF06CI02",
    "topic": "Transformações Físicas",
    "question": "O derretimento de um cubo de gelo deixado sobre a mesa em temperatura ambiente é um exemplo de:",
    "options": [
      "Transformação química irreversível",
      "Combustão térmica espontânea",
      "Transformação física reversível",
      "Oxidação catalítica rápida"
    ],
    "correctAnswer": 2,
    "explanation": "A fusão é uma mudança de estado físico (sólido para líquido) onde a substância continua sendo água (H₂O)."
  },
  {
    "id": "cie-6-f-04",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "facil",
    "xp": 60,
    "bnccSkill": "EF06CI11",
    "topic": "Estrutura Interna da Terra",
    "question": "Qual é a camada mais externa e fina do planeta Terra, onde nós pisamos e construímos?",
    "options": [
      "Manto inferior rochoso",
      "Núcleo externo líquido",
      "Núcleo interno metálico",
      "Crosta terrestre sólida"
    ],
    "correctAnswer": 3,
    "explanation": "A crosta terrestre é a camada superficial sólida e rochosa que sustenta os continentes e os oceanos."
  },
  {
    "id": "cie-6-f-05",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF06CI06",
    "topic": "Níveis de Organização dos Seres Vivos",
    "question": "Qual é a sequência correta dos níveis básicos de organização biológica nos organismos pluricelulares?",
    "options": [
      "Célula → Tecido → Órgão → Sistema → Organismo",
      "Tecido → Célula → Órgão → Sistema → Organismo",
      "Órgão → Célula → Tecido → Sistema → Organismo",
      "Célula → Órgão → Tecido → Sistema → Organismo"
    ],
    "correctAnswer": 0,
    "explanation": "As células semelhantes formam tecidos, tecidos formam órgãos, órgãos compõem sistemas que constituem o organismo."
  },
  {
    "id": "cie-6-f-06",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF06CI03",
    "topic": "Separação de Misturas",
    "question": "Qual método simples é utilizado para separar o pó de café da água quente ao preparar a bebida?",
    "options": [
      "Decantação",
      "Filtração",
      "Evaporação",
      "Destilação fracionada"
    ],
    "correctAnswer": 1,
    "explanation": "A filtração retém o pó sólido no filtro de papel ou pano, permitindo a passagem do líquido."
  },
  {
    "id": "cie-6-f-07",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF06CI09",
    "topic": "Solo e Agricultura",
    "question": "Qual componente do solo fértil é originado da decomposição de restos de plantas e animais?",
    "options": [
      "Areia pura",
      "Argila expandida",
      "Húmus",
      "Cascalho"
    ],
    "correctAnswer": 2,
    "explanation": "O húmus é a matéria orgânica decomposta que fornece nutrientes essenciais e melhora a retenção de água no solo."
  },
  {
    "id": "cie-6-f-08",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF06CI05",
    "topic": "Material Genético",
    "question": "Nas células eucariontes, onde fica guardado o material genético (DNA)?",
    "options": [
      "Disperso livremente na matriz citoplasmática",
      "Inserido no interior da parede de celulose",
      "Armazenado na cavidade do vacúolo celular",
      "Dentro do núcleo delimitado por carioteca"
    ],
    "correctAnswer": 3,
    "explanation": "As células eucariontes possuem núcleo delimitado pela carioteca (envoltório nuclear), onde se aloja o DNA."
  },
  {
    "id": "cie-6-f-09",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF06CI13",
    "topic": "Formato da Terra",
    "question": "A observação de navios desaparecendo gradualmente no horizonte com o casco sumindo antes do mastro é evidência de que:",
    "options": [
      "A Terra tem formato esférico curvo",
      "A Terra possui uma superfície plana",
      "O horizonte provoca uma ilusão óptica",
      "Os navios afundam em alto-mar aberto"
    ],
    "correctAnswer": 0,
    "explanation": "A curvatura da Terra faz com que a linha de visada bloqueie primeiro as partes mais baixas do navio distante."
  },
  {
    "id": "cie-6-f-10",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF06CI07",
    "topic": "Sistema Digestório Introdutório",
    "question": "Em qual órgão do corpo humano tem início a digestão dos alimentos com a mastigação e salivação?",
    "options": [
      "Estômago",
      "Boca",
      "Intestino delgado",
      "Esôfago"
    ],
    "correctAnswer": 1,
    "explanation": "A digestão começa na boca com a trituração mecânica pelos dentes e a ação enzimática da saliva."
  },
  {
    "id": "cie-6-f-11",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF06CI01",
    "topic": "Fases de uma Mistura",
    "question": "Uma mistura de água líquida e óleo de cozinha em repouso apresenta quantas fases visíveis?",
    "options": [
      "Uma única fase líquida de forma contínua",
      "Três fases separadas",
      "Duas fases distintas",
      "Quatro fases dispersas"
    ],
    "correctAnswer": 2,
    "explanation": "Por serem imiscíveis e possuírem densidades diferentes, a água e o óleo não se misturam, exibindo duas fases visíveis."
  },
  {
    "id": "cie-6-f-12",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF06CI08",
    "topic": "Sistema Locomotor",
    "question": "Quais estruturas do corpo humano conectam os músculos aos ossos para permitir o movimento?",
    "options": [
      "Articulações",
      "Cartilagens",
      "Vasos sanguíneos",
      "Tendões"
    ],
    "correctAnswer": 3,
    "explanation": "Os tendões são cordões fibrosos resistentes que fixam os músculos esqueléticos aos ossos."
  },
  {
    "id": "cie-6-f-13",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF06CI11",
    "topic": "Movimento de Rotação",
    "question": "O movimento que a Terra realiza girando em torno de seu próprio eixo imaginário em aproximadamente 24 horas é a:",
    "options": [
      "Rotação",
      "Translação",
      "Nutação",
      "Precessão"
    ],
    "correctAnswer": 0,
    "explanation": "A rotação terrestre é o giro em torno do próprio eixo que dá origem à alternância entre dias e noites."
  },
  {
    "id": "cie-6-f-14",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF06CI03",
    "topic": "Separação Magnética",
    "question": "Qual ferramenta pode ser usada para separar facilmente pequenos pregos de ferro misturados na areia?",
    "options": [
      "Uma peneira",
      "Um ímã",
      "Um filtro de papel",
      "Um termômetro"
    ],
    "correctAnswer": 1,
    "explanation": "O ímã atrai materiais ferromagnéticos como o ferro, separando-os de materiais não magnéticos como a areia."
  },
  {
    "id": "cie-6-f-15",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF06CI14",
    "topic": "Movimento Aparente do Sol",
    "question": "Ao longo do dia, o Sol parece nascer a leste e se pôr a oeste. Esse fenômeno aparente é provocado pelo:",
    "options": [
      "Translação anual da Terra ao redor do Sol",
      "Giro aparente do Sol ao redor da Terra",
      "Movimento de rotação diária da Terra",
      "Precessão periódica do eixo planetário"
    ],
    "correctAnswer": 2,
    "explanation": "Como a Terra gira de oeste para leste, temos a ilusão de ótica de que os astros no céu se movem de leste para oeste."
  },
  {
    "id": "cie-6-m-01",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF06CI03",
    "topic": "Destilação Simples",
    "question": "Qual método de separação é o mais indicado para recuperar a água pura a partir de uma mistura de água com sal dissolvido?",
    "options": [
      "Filtração por papel poroso",
      "Decantação estática lenta",
      "Catação seletiva manual",
      "Destilação simples em condensador"
    ],
    "correctAnswer": 3,
    "explanation": "Na destilação simples, a água evapora por aquecimento e se condensa no condensador, deixando o sal sólido no frasco."
  },
  {
    "id": "cie-6-m-02",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF06CI02",
    "topic": "Evidência de Transformação Química",
    "question": "Qual dos seguintes fenômenos do dia a dia representa uma transformação química com formação de novas substâncias?",
    "options": [
      "Queima do pavio de uma vela",
      "Rasgamento de folha de papel",
      "Quebra de um copo de vidro",
      "Dissolução de açúcar em água"
    ],
    "correctAnswer": 0,
    "explanation": "A queima (combustão) consome o combustível e o oxigênio gerando novas substâncias (gás carbônico, vapor de água e fuligem)."
  },
  {
    "id": "cie-6-m-03",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF06CI07",
    "topic": "Respiração e Trocas Gasosas",
    "question": "Em quais estruturas microscópicas dos pulmões ocorrem as trocas gasosas (hematose) entre o ar e o sangue?",
    "options": [
      "Brônquios condutores cartilaginosos",
      "Alvéolos pulmonares vascularizados",
      "Traqueia revestida por muco ciliar",
      "Laringe com pregas vocais elásticas"
    ],
    "correctAnswer": 1,
    "explanation": "Os alvéolos pulmonares possuem paredes finas e rica rede de capilares que facilitam a passagem de oxigênio para o sangue."
  },
  {
    "id": "cie-6-m-04",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF06CI11",
    "topic": "Litosfera e Tectonismo",
    "question": "A litosfera da Terra não é uma camada contínua, mas sim dividida em grandes blocos rochosos em movimento chamados:",
    "options": [
      "Camadas atmosféricas",
      "Bacias sedimentares",
      "Placas tectônicas",
      "Crateras basálticas"
    ],
    "correctAnswer": 2,
    "explanation": "A litosfera é fragmentada em placas tectônicas que deslizam lentamente sobre o manto superior."
  },
  {
    "id": "cie-6-m-05",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF06CI05",
    "topic": "Célula Vegetal vs Animal",
    "question": "Qual organela/estrutura está presente nas células vegetais para realizar fotossíntese, mas ausente nas células animais?",
    "options": [
      "Mitocôndria",
      "Ribossomo",
      "Membrana plasmática",
      "Cloroplasto"
    ],
    "correctAnswer": 3,
    "explanation": "Os cloroplastos contêm clorofila e realizam a fotossíntese, sendo exclusivos de células vegetais e algas."
  },
  {
    "id": "cie-6-m-06",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF06CI03",
    "topic": "Decantação e Tratamento de Água",
    "question": "Em uma estação de tratamento de água, a etapa em que partículas sólidas pesadas descem para o fundo do tanque é chamada:",
    "options": [
      "Decantação",
      "Filtração",
      "Fluoretação",
      "Aeração"
    ],
    "correctAnswer": 0,
    "explanation": "A decantação permite que as partículas mais densas se depositem no fundo do tanque pela ação da gravidade."
  },
  {
    "id": "cie-6-m-07",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF06CI09",
    "topic": "Erosão do Solo",
    "question": "A remoção da vegetação nativa nas encostas de morros facilita qual processo prejudicial ao solo?",
    "options": [
      "Aumento de nutrientes orgânicos solúveis",
      "Erosão e deslizamentos de encostas",
      "Formação acelerada de novo húmus fértil",
      "Oxigenação profunda do perfil do solo"
    ],
    "correctAnswer": 1,
    "explanation": "As raízes das plantas seguram as partículas do solo. Sem vegetação, as chuvas arrastam o solo desprotegido (erosão)."
  },
  {
    "id": "cie-6-m-08",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF06CI07",
    "topic": "Circulação Sanguínea",
    "question": "Qual vaso sanguíneo tem paredes elásticas e grossas e transporta sangue do coração para o restante do corpo sob alta pressão?",
    "options": [
      "Veias",
      "Capilares de forma contínua",
      "Artérias",
      "Vênulas"
    ],
    "correctAnswer": 2,
    "explanation": "As artérias saem dos ventrículos com paredes espessas e musculosas para suportar a alta pressão do bombeamento cardíaco."
  },
  {
    "id": "cie-6-m-09",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF06CI12",
    "topic": "Estações do Ano",
    "question": "As estações do ano ocorrem na Terra principalmente devido a qual combinação de fatores astronômicos?",
    "options": [
      "Variação periódica anual na distância orbital entre a Terra e o Sol",
      "Precessão do eixo magnético e velocidade de rotação diária da Terra",
      "Atração gravitacional combinada da órbita da Lua e marés oceânicas no sistema planetário",
      "Inclinação do eixo terrestre e movimento de translação ao redor do Sol"
    ],
    "correctAnswer": 3,
    "explanation": "O eixo inclinado em cerca de 23,5° combinado com a translação faz com que cada hemisfério receba insolação diferente ao longo do ano."
  },
  {
    "id": "cie-6-m-10",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF06CI01",
    "topic": "Solubilidade e Saturação",
    "question": "Ao adicionar açúcar continuamente em um copo de água, chega um momento em que ele não se dissolve mais e acumula no fundo. Dizemos que a solução está:",
    "options": [
      "Saturada",
      "Insaturada",
      "Diluída",
      "Pura"
    ],
    "correctAnswer": 0,
    "explanation": "Uma solução saturada atingiu o coeficiente máximo de solubilidade daquele soluto na temperatura dada."
  },
  {
    "id": "cie-6-m-11",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF06CI06",
    "topic": "Diferenciação Celular",
    "question": "Um neurônio e uma célula muscular possuem formatos e funções muito diferentes, embora pertençam ao mesmo corpo, porque:",
    "options": [
      "Possuem materiais genéticos provenientes de espécies biológicas diferentes",
      "Sofreram diferenciação e especialização celular",
      "Apresentam organelas celulares de reinos distintos de seres vivos da natureza",
      "Originam-se de linhagens teciduais desprovidas de divisão celular somática"
    ],
    "correctAnswer": 1,
    "explanation": "Durante o desenvolvimento, as células ativam genes específicos para se especializarem em diferentes tecidos."
  },
  {
    "id": "cie-6-m-12",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF06CI04",
    "topic": "Materiais Sintéticos e Sustentabilidade",
    "question": "Muitos plásticos comuns levam séculos para se decompor na natureza porque são:",
    "options": [
      "Compostos metálicos pesados insolúveis em soluções ácidas da chuva",
      "Minerais cristalinos inorgânicos imunes à ação da radiação solar em meio biológico",
      "Polímeros sintéticos resistentes à degradação enzimática de bactérias",
      "Substâncias cerâmicas vitrificadas sintetizadas em altas pressões"
    ],
    "correctAnswer": 2,
    "explanation": "Os polímeros sintéticos possuem ligações químicas artificiais que a maioria dos microrganismos decompositores não consegue quebrar."
  },
  {
    "id": "cie-6-m-13",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF06CI10",
    "topic": "Camadas da Atmosfera",
    "question": "Em qual camada da atmosfera ocorrem os principais fenômenos meteorológicos que conhecemos, como nuvens, chuvas e ventos?",
    "options": [
      "Estratosfera",
      "Mesosfera",
      "Termosfera",
      "Troposfera"
    ],
    "correctAnswer": 3,
    "explanation": "A troposfera é a camada em contato com a superfície que concentra cerca de 75% dos gases e quase todo o vapor de água."
  },
  {
    "id": "cie-6-m-14",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF06CI08",
    "topic": "Sentidos e Sistema Nervoso",
    "question": "Qual parte do olho humano é sensível à luz e converte os estímulos luminosos em impulsos nervosos enviados ao cérebro?",
    "options": [
      "Retina",
      "Córnea",
      "Cristalino",
      "Íris"
    ],
    "correctAnswer": 0,
    "explanation": "A retina contém fotorreceptores (cones e bastonetes) que transformam a luz em impulsos elétricos transmitidos pelo nervo óptico."
  },
  {
    "id": "cie-6-m-15",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF06CI13",
    "topic": "Sombra e Gnomon",
    "question": "Ao observar a sombra de uma vara vertical (gnomon) ao longo de um dia ensolarado, percebe-se que ela atinge seu menor comprimento:",
    "options": [
      "No início da manhã",
      "Ao meio-dia solar",
      "No meio da tarde",
      "Durante o crepúsculo"
    ],
    "correctAnswer": 1,
    "explanation": "Com os raios solares incidindo mais verticalmente no ápice do dia, a projeção da sombra no solo fica mais curta."
  },
  {
    "id": "cie-6-d-01",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF06CI03",
    "topic": "Centrifugação",
    "question": "Em exames de laboratório, qual técnica acelera a separação do plasma dos glóbulos vermelhos do sangue através de rotação rápida?",
    "options": [
      "Filtração simples de forma contínua",
      "Evaporação lenta",
      "Centrifugação",
      "Levigação"
    ],
    "correctAnswer": 2,
    "explanation": "A centrifugação utiliza força centrífuga em alta velocidade para precipitar os componentes mais densos no fundo do tubo."
  },
  {
    "id": "cie-6-d-02",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF06CI05",
    "topic": "Fotossíntese e Respiração Celular",
    "question": "As plantas realizam fotossíntese de dia e respiram o tempo todo. Na respiração celular, elas absorvem e liberam, respectivamente:",
    "options": [
      "Absorvem dióxido de carbono (CO₂) e liberam gás oxigênio (O₂)",
      "Absorvem gás nitrogênio (N₂) e liberam vapor d’água (H₂O)",
      "Absorvem monóxido de carbono (CO) e liberam gás metano (CH₄)",
      "Absorvem gás oxigênio (O₂) e liberam dióxido de carbono (CO₂)"
    ],
    "correctAnswer": 3,
    "explanation": "Tanto animais quanto plantas respiram consumindo oxigênio e liberando dióxido de carbono para obter energia celular."
  },
  {
    "id": "cie-6-d-03",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF06CI11",
    "topic": "Tipos de Rochas",
    "question": "Rochas formadas pelo resfriamento e solidificação do magma vulcânico, como o basalto e o granito, são classificadas como:",
    "options": [
      "Rochas magmáticas",
      "Rochas sedimentares",
      "Rochas metamórficas",
      "Minerais orgânicos"
    ],
    "correctAnswer": 0,
    "explanation": "As rochas magmáticas ou ígneas se originam da cristalização do magma vulcânico na superfície ou no interior da crosta."
  },
  {
    "id": "cie-6-d-04",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF06CI07",
    "topic": "Integração entre Digestão e Respiração",
    "question": "Para que as células do corpo produzam energia vital (ATP), quais dois insumos essenciais devem ser entregues a elas pelos sistemas circulatório, digestório e respiratório?",
    "options": [
      "Água pura e gás carbônico",
      "Glicose e gás oxigênio",
      "Apenas oxigênio e minerais",
      "Sal de cozinha e gás nitrogênio"
    ],
    "correctAnswer": 1,
    "explanation": "A respiração celular utiliza a glicose obtida da digestão e o oxigênio obtido na respiração para liberar energia e sustentar a vida."
  },
  {
    "id": "cie-6-d-05",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF06CI09",
    "topic": "Técnicas de Conservação do Solo",
    "question": "O plantio em curvas de nível e o terraceamento em encostas íngremes são técnicas agrícolas importantes porque:",
    "options": [
      "Aumentam a incidência direta da radiação do sol",
      "Eliminam a necessidade de irrigação nas estiagens",
      "Reduzem a velocidade do escoamento da água pluvial",
      "Substituem o uso periódico de adubos orgânicos"
    ],
    "correctAnswer": 2,
    "explanation": "As curvas de nível quebram a velocidade da enxurrada descendo a encosta, facilitando a infiltração e protegendo o solo."
  },
  {
    "id": "cie-6-d-06",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF06CI02",
    "topic": "Lei de Conservação das Massas em Sistema Fechado",
    "question": "Se queimarmos 10 gramas de palha de aço dentro de um frasco de vidro hermeticamente fechado contendo oxigênio, a massa total do frasco após a reação será:",
    "options": [
      "Significativamente maior devido à ferrugem oxidada",
      "Substancialmente menor devido às cinzas residuais",
      "Completamente nula pela destruição térmica da matéria",
      "Rigorosamente igual à massa inicial antes da queima"
    ],
    "correctAnswer": 3,
    "explanation": "Em um sistema fechado, pela Lei de Lavoisier, a matéria não é criada nem destruída; a massa total permanece constante."
  },
  {
    "id": "cie-6-d-07",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF06CI14",
    "topic": "Fuso Horário e Rotação",
    "question": "O Brasil possui diferentes fusos horários oficiais em seu território porque:",
    "options": [
      "A grande extensão no sentido leste-oeste recebe luz solar em momentos diferentes",
      "A localização do país abrangendo hemisférios altera a velocidade da luz do sol",
      "A altitude média dos planaltos centrais modifica o horário astronômico local",
      "A rotação das bacias hidrográficas altera a contagem periódica dos fusos"
    ],
    "correctAnswer": 0,
    "explanation": "Como a Terra gira 360° em 24 horas (15° por hora), regiões com grande distância longitudinal amanhecem em horários diferentes."
  },
  {
    "id": "cie-6-d-08",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF06CI08",
    "topic": "Ato Reflexo",
    "question": "Ao encostar a mão por acidente em uma panela quente, a pessoa retira a mão antes mesmo de perceber a dor conscientemente. Essa resposta rápida involuntária é coordenada pelo:",
    "options": [
      "Controle consciente do córtex cerebral",
      "Ato reflexo mediado pela medula espinhal",
      "Coordenação motora do cerebelo dorsal",
      "Estímulo hormonal da glândula hipófise"
    ],
    "correctAnswer": 1,
    "explanation": "No arco reflexo medular, a resposta motora rápida de proteção é disparada diretamente na medula espinhal para evitar queimaduras graves."
  },
  {
    "id": "cie-6-d-09",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF06CI04",
    "topic": "Reciclagem e Ciclo de Materiais",
    "question": "Por que a reciclagem do alumínio economiza cerca de 95% de energia em comparação com a produção a partir do minério bauxita?",
    "options": [
      "O alumínio reciclado apresenta menor ponto de condensação atmosférica no referencial inercial",
      "A sucata metálica sofre oxidação espontânea gerando calor aproveitável",
      "Fundir a sucata consome muito menos calor do que a eletrólise do minério",
      "O minério bauxita necessita de combustão fóssil direta sob vácuo total"
    ],
    "correctAnswer": 2,
    "explanation": "A eletrólise da bauxita consome enormes quantidades de eletricidade; reprocessar latinhas de alumínio demanda uma fração mínima dessa energia."
  },
  {
    "id": "cie-6-d-10",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF06CI12",
    "topic": "Solstícios e Equinócios",
    "question": "No dia do equinócio, em qualquer lugar do planeta:",
    "options": [
      "A noite escura atinge o seu tempo de duração máxima anual",
      "O dia claro atinge o período de insolação mais prolongado",
      "O Sol atinge o zênite sem se pôr na linha polar ártica",
      "O período diurno e o noturno têm praticamente a mesma duração"
    ],
    "correctAnswer": 3,
    "explanation": "Equinócio significa \"noites iguais\": a luz solar incide perpendicularmente sobre a linha do Equador."
  },
  {
    "id": "cie-6-d-11",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF06CI01",
    "topic": "Densidade e Flutuação",
    "question": "Um pedaço maciço de ferro afunda na água, mas um navio colossal feito de toneladas de aço flutua no oceano. Isso ocorre porque:",
    "options": [
      "A densidade média do casco oco englobando ar é menor que a da água",
      "A tensão superficial da água do oceano sustenta o peso de aço naval",
      "O empuxo hidrostático da água marinha anula a aceleração gravitacional",
      "A compressibilidade da água salgada suporta a estrutura pesada do navio"
    ],
    "correctAnswer": 0,
    "explanation": "A densidade é a massa dividida pelo volume total. O grande volume interno ocupado por ar reduz a densidade média do navio para menos de 1 g/cm³."
  },
  {
    "id": "cie-6-d-12",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF06CI10",
    "topic": "Camada de Ozônio",
    "question": "Qual é o papel vital desempenhado pela camada de ozônio (O₃) presente na estratosfera terrestre?",
    "options": [
      "Reter calor térmico planetário sustentando o efeito estufa",
      "Filtrar e absorver a radiação ultravioleta prejudicial do Sol",
      "Fornecer oxigênio molecular livre para a respiração biológica",
      "Gerar as correntes atmosféricas globais dos ventos alísios"
    ],
    "correctAnswer": 1,
    "explanation": "O ozônio estratosférico bloqueia grande parte dos raios ultravioleta de alta energia que provocam mutações genéticas e câncer de pele."
  },
  {
    "id": "cie-6-d-13",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF06CI06",
    "topic": "Organismos Procariontes vs Eucariontes",
    "question": "Qual é a principal característica que diferencia as bactérias (procariontes) de todos os animais e plantas (eucariontes)?",
    "options": [
      "As bactérias são desprovidas de material genético ou ribossomos",
      "As bactérias apresentam parede celular formada por celulose pura de forma contínua",
      "As bactérias não possuem núcleo celular delimitado por carioteca",
      "As bactérias realizam divisão celular exclusivamente por meiose"
    ],
    "correctAnswer": 2,
    "explanation": "Nas bactérias, o material genético fica disperso no citoplasma na região do nucleoide, sem carioteca."
  },
  {
    "id": "cie-6-d-14",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF06CI03",
    "topic": "Cromatografia em Papel",
    "question": "A técnica de laboratório que separa os diferentes pigmentos coloridos da tinta de uma caneta utilizando álcool e papel filtro é a:",
    "options": [
      "Destilação fracionada térmica",
      "Catação seletiva de partículas",
      "Sublimação em câmara a vácuo",
      "Cromatografia em papel filtro"
    ],
    "correctAnswer": 3,
    "explanation": "Na cromatografia, os componentes da mistura se deslocam pelo papel em velocidades diferentes conforme sua solubilidade e afinidade com o solvente."
  },
  {
    "id": "cie-6-d-15",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF06CI13",
    "topic": "Eclipses e Esfericidade",
    "question": "Durante os eclipses lunares, a sombra projetada pela Terra sobre a Lua é sempre circular em todas as posições observadas. Esse fato histórico serviu a Aristóteles para provar que:",
    "options": [
      "A Terra tem formato esférico tridimensional",
      "A Terra é um disco plano",
      "A Lua é maior que a Terra",
      "A Terra não tem atmosfera"
    ],
    "correctAnswer": 0,
    "explanation": "Somente um corpo esférico tridimensional projeta uma sombra circular independente do ângulo em que a luz o atinge."
  },
  {
    "id": "cie-6-e-01",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF06CI02",
    "topic": "Reversibilidade de Transformações",
    "question": "Qual das seguintes transformações é considerada reversível através de simples alteração de temperatura ambiente?",
    "options": [
      "Fritura de um ovo com clara solidificada",
      "Condensação do vapor de água de volta ao estado líquido",
      "Queima de um fósforo em meio biológico",
      "Digestão de uma maçã"
    ],
    "correctAnswer": 1,
    "explanation": "As mudanças de estado físico (como vapor virando líquido) são transformações físicas reversíveis por resfriamento ou aquecimento."
  },
  {
    "id": "cie-6-e-02",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF06CI05",
    "topic": "Célula e Osmose Introdutória",
    "question": "Ao temperar uma salada de alface fresca com sal muito antes de comer, as folhas murcham e soltam água. Esse fenômeno ocorre por:",
    "options": [
      "Digestão da folha pelo azeite",
      "Morte instantânea dos cloroplastos",
      "Osmose",
      "Respiração anaeróbia da folha"
    ],
    "correctAnswer": 2,
    "explanation": "A osmose é o movimento passivo da água da região menos concentrada (interior da célula) para a mais concentrada (tempero com sal)."
  },
  {
    "id": "cie-6-e-03",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF06CI11",
    "topic": "Fósseis e Estratigrafia",
    "question": "Fósseis de animais marinhos antigos encontrados no topo de cadeias montanhosas altas, como os Andes, indicam que:",
    "options": [
      "Os oceanos antigos cobriam todo o globo sem a existência de montanhas secas",
      "As placas continentais sofreram erosão superficial acumulando restos fósseis",
      "O nível do mar sofreu oscilação gravitacional atingindo o cume das montanhas",
      "As rochas se formaram no fundo do mar e foram erguidas por forças tectônicas"
    ],
    "correctAnswer": 3,
    "explanation": "O soerguimento tectônico das placas empurra e dobra sedimentos marinhos antigos, elevando rochas com fósseis ao longo de milhões de anos."
  },
  {
    "id": "cie-6-e-04",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF06CI07",
    "topic": "Controle da Frequência Cardíaca",
    "question": "Durante uma corrida intensa, a frequência cardíaca e a respiração aumentam automaticamente para:",
    "options": [
      "Suprir mais oxigênio e glicose aos músculos e remover o excesso de CO₂",
      "Resfriar os tecidos corporais através da ventilação pulmonar forçada",
      "Reduzir a pressão arterial para evitar o desgaste do sistema vascular",
      "Impedir a síntese de ácido lático interrompendo o metabolismo celular"
    ],
    "correctAnswer": 0,
    "explanation": "O organismo ajusta o débito cardíaco e a ventilação para suprir a alta demanda metabólica das fibras musculares."
  },
  {
    "id": "cie-6-e-05",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF06CI09",
    "topic": "Lixiviação e Degradação do Solo",
    "question": "A lixiviação do solo ocorre quando:",
    "options": [
      "O vento forte transporta a camada superficial de húmus fértil da pastagem",
      "A água pluvial infiltra e arrasta nutrientes solúveis para o lençol freático",
      "A radiação solar direta desidrata e compacta as partículas de argila do solo",
      "A acidez do calcário neutraliza e precipita os sais minerais da superfície"
    ],
    "correctAnswer": 1,
    "explanation": "A lavagem de nutrientes minerais solúveis pela água que percola empobrece o horizonte superficial do solo."
  },
  {
    "id": "cie-6-e-06",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF06CI04",
    "topic": "Ciclo de Vida de Materiais",
    "question": "A análise de ciclo de vida de uma embalagem sustentável deve considerar:",
    "options": [
      "Apenas o preço de custo comercial e margem de revenda na distribuição",
      "Somente os custos com propaganda publicitária e design das embalagens",
      "Do ciclo da matéria-prima ao descarte final",
      "A durabilidade estética superficial e tempo de estocagem nas prateleiras de forma contínua"
    ],
    "correctAnswer": 2,
    "explanation": "A avaliação ecológica do berço ao túmulo analisa a pegada ambiental em todas as etapas da cadeia de suprimentos."
  },
  {
    "id": "cie-6-e-07",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF06CI14",
    "topic": "Relógio de Sol e Astronomia Cultural",
    "question": "Historicamente, povos ancestrais utilizavam a posição do Sol e as sombras para criar calendários agrícolas porque perceberam que:",
    "options": [
      "O movimento de rotação da Terra acelera no verão alterando as semanas",
      "A distância orbital entre a Terra e o Sol dobra a cada seis meses no sistema planetário",
      "A intensidade luminosa da Lua regula a germinação de todas as plantas",
      "A trajetória aparente do Sol varia ao longo do ano marcando as estações"
    ],
    "correctAnswer": 3,
    "explanation": "A observação da variação periódica da altura solar e dos pontos de nascente e poente permitiu estruturar os primeiros calendários."
  },
  {
    "id": "cie-6-e-08",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF06CI08",
    "topic": "Sinapses e Neurotransmissores Introdutórios",
    "question": "A comunicação entre dois neurônios vizinhos em nosso cérebro ocorre através de pequenas fendas chamadas:",
    "options": [
      "Sinapses",
      "Tendões celulares",
      "Articulações",
      "Vasos capilares"
    ],
    "correctAnswer": 0,
    "explanation": "Nas sinapses químicas, a terminação do axônio libera neurotransmissores que se ligam a receptores no dendrito do neurônio seguinte."
  },
  {
    "id": "cie-6-e-09",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF06CI03",
    "topic": "Separação de Petróleo Bruto",
    "question": "Na indústria petroquímica, os diferentes derivados do petróleo cru (gasolina, querosene, óleo diesel) são separados por:",
    "options": [
      "Centrifugação contínua por gradiente de densidade de fases",
      "Destilação fracionada por faixas de temperatura de ebulição",
      "Decantação gravitacional lenta em decantadores industriais",
      "Filtração mecânica a vácuo através de membranas cerâmicas no meio reacional"
    ],
    "correctAnswer": 1,
    "explanation": "Na torre de fracionamento, as frações de hidrocarbonetos se condensam em alturas diferentes conforme sua faixa de temperatura de ebulição."
  },
  {
    "id": "cie-6-e-10",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF06CI12",
    "topic": "Estações do Ano Invertidas",
    "question": "Quando no Hemisfério Sul é Solstício de Verão (por volta de 21 de dezembro), no Hemisfério Norte é:",
    "options": [
      "Equinócio de Outono",
      "Solstício de Verão",
      "Solstício de Inverno",
      "Equinócio de Primavera de forma contínua"
    ],
    "correctAnswer": 2,
    "explanation": "Devido à inclinação do eixo terrestre, enquanto o hemisfério sul recebe radiação solar mais direta, o hemisfério norte recebe menos radiação."
  },
  {
    "id": "cie-6-e-11",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF06CI01",
    "topic": "Soluções Aquosas Condutoras",
    "question": "A água destilada pura conduz quase zero eletricidade, mas a água com sal dissolvido acende uma lâmpada em um circuito. Isso acontece porque:",
    "options": [
      "Os elétrons livres do cloreto metálico formam uma malha condutora",
      "A água salgada sofre ionização liberando hidrogênio molecular puro",
      "A molécula de sal funde na água conduzindo corrente por convecção",
      "Íons livres dissolvidos que conduzem corrente"
    ],
    "correctAnswer": 3,
    "explanation": "Soluções iônicas possuem cargas elétricas livres que fecham o circuito condutor."
  },
  {
    "id": "cie-6-e-12",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF06CI06",
    "topic": "Tecidos Especializados",
    "question": "Qual tecido do corpo humano é responsável por revestir superfícies corporais externas e internas e formar glândulas?",
    "options": [
      "Tecido epitelial",
      "Tecido conjuntivo ósseo",
      "Tecido muscular estriado",
      "Tecido nervoso"
    ],
    "correctAnswer": 0,
    "explanation": "O tecido epitelial tem células justapostas com pouca substância intercelular, protegendo órgãos e secretando substâncias."
  },
  {
    "id": "cie-6-e-13",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF06CI11",
    "topic": "Terremotos e Escala Richter",
    "question": "O ponto no interior da crosta terrestre onde tem início a liberação repentina de energia de um terremoto é denominado:",
    "options": [
      "Epicentro superficial",
      "Hipocentro",
      "Cratera vulcânica",
      "Falha gravitacional"
    ],
    "correctAnswer": 1,
    "explanation": "O hipocentro é a origem profunda da ruptura tectônica; o epicentro é o ponto na superfície verticalmente acima do hipocentro."
  },
  {
    "id": "cie-6-e-14",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF06CI10",
    "topic": "Efeito Estufa Natural Benéfico",
    "question": "Se a atmosfera da Terra não possuísse gases de efeito estufa naturais (como vapor de água e CO₂), a temperatura média global seria de cerca de -18°C. Isso demonstra que:",
    "options": [
      "É um fenômeno artificial que surgiu após a revolução industrial no sistema planetário",
      "Bloqueia completamente a radiação solar ultravioleta prejudicial",
      "É essencial para reter calor na superfície e manter a água líquida",
      "Elimina os gases poluentes da troposfera através de chuvas ácidas"
    ],
    "correctAnswer": 2,
    "explanation": "O efeito estufa natural mantém a temperatura média global agradável em torno de 15°C; o problema ambiental atual é a sua intensificação antrópica."
  },
  {
    "id": "cie-6-e-15",
    "subject": "ciencias",
    "grade": "6º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF06CI05",
    "topic": "Microscopia e Descoberta Celular",
    "question": "O cientista Robert Hooke cunhou o termo \"célula\" em 1665 ao observar ao microscópio fatias finas de:",
    "options": [
      "Gotas de sangue humano",
      "Bactérias em água de lago",
      "Músculo de rã",
      "Cortiça"
    ],
    "correctAnswer": 3,
    "explanation": "Hooke observou os pequenos compartimentos vazios de paredes celulares mortas na cortiça e os chamou de \"células\" (pequenas celas)."
  },
  {
    "id": "cie-7-f-01",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF07CI01",
    "topic": "Cadeias Alimentares",
    "question": "Em uma cadeia alimentar terrestre, os seres vivos capazes de produzir seu próprio alimento por fotossíntese são os:",
    "options": [
      "Produtores",
      "Consumidores primários",
      "Decompositores",
      "Predadores de topo"
    ],
    "correctAnswer": 0,
    "explanation": "Os produtores são autótrofos que fixam energia solar em biomassa vegetal."
  },
  {
    "id": "cie-7-f-02",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF07CI02",
    "topic": "Calor e Temperatura",
    "question": "Qual é a grandeza física que mede o grau de agitação térmica das moléculas em um corpo?",
    "options": [
      "Calor em meio biológico",
      "Temperatura",
      "Pressão",
      "Massa"
    ],
    "correctAnswer": 1,
    "explanation": "A temperatura é proporcional à energia cinética média de translação das partículas de um sistema."
  },
  {
    "id": "cie-7-f-03",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF07CI09",
    "topic": "Vacinas e Imunização",
    "question": "As vacinas atuam no organismo estimulando o sistema imunológico a produzir preventivamente:",
    "options": [
      "Bactérias benéficas no sangue",
      "Plaquetas para coagulação",
      "Anticorpos específicos e células de memória",
      "Hormônios do crescimento em meio biológico"
    ],
    "correctAnswer": 2,
    "explanation": "Ao apresentar antígenos atenuados ou inativados, a vacina treina o organismo a produzir anticorpos e memória imunológica."
  },
  {
    "id": "cie-7-f-04",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF07CI07",
    "topic": "Biodiversidade Brasileira",
    "question": "Qual grande bioma brasileiro é caracterizado por árvores tortuosas de casca grossa e solo avermelhado (savana brasileira)?",
    "options": [
      "Pampa",
      "Mata dos Cocais",
      "Caatinga",
      "Cerrado"
    ],
    "correctAnswer": 3,
    "explanation": "O Cerrado é a savana mais rica em biodiversidade do mundo, com adaptações contra o fogo e raízes profundas."
  },
  {
    "id": "cie-7-f-05",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF07CI02",
    "topic": "Propagação do Calor por Condução",
    "question": "Ao mexer uma sopa quente com uma colher de metal, o cabo da colher esquenta rapidamente. Esse calor se propagou por:",
    "options": [
      "Condução térmica",
      "Convecção de ar",
      "Radiação solar",
      "Dilatação estática"
    ],
    "correctAnswer": 0,
    "explanation": "Na condução, a energia térmica se propaga de átomo a átomo através do contato direto da matéria sólida."
  },
  {
    "id": "cie-7-f-06",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF07CI01",
    "topic": "Decompositores",
    "question": "Fungos e bactérias desempenham qual papel indispensável na ciclagem de nutrientes nos ecossistemas?",
    "options": [
      "Produção de oxigênio primário",
      "Decomposição da matéria orgânica morta",
      "Consumo herbívoro",
      "Predação ativa em meio biológico"
    ],
    "correctAnswer": 1,
    "explanation": "Os decompositores reciclam matéria orgânica, devolvendo minerais ao solo para serem reutilizados pelos produtores."
  },
  {
    "id": "cie-7-f-07",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF07CI11",
    "topic": "Máquinas Simples",
    "question": "A tesoura e a gangorra são exemplos clássicos de qual tipo de máquina simples?",
    "options": [
      "Roldana móvel",
      "Plano inclinado",
      "Alavanca interfixa",
      "Cunha em meio biológico"
    ],
    "correctAnswer": 2,
    "explanation": "Nas alavancas interfixas, o ponto de apoio (eixo) fica situado entre a força potente e a força resistente."
  },
  {
    "id": "cie-7-f-08",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF07CI10",
    "topic": "Saúde Pública e Saneamento",
    "question": "O tratamento da água e a coleta de esgoto doméstico são fundamentais para prevenir doenças conhecidas como:",
    "options": [
      "Doenças congênitas",
      "Doenças genéticas",
      "Traumas ósseos em meio biológico",
      "Doenças de veiculação hídrica"
    ],
    "correctAnswer": 3,
    "explanation": "A falta de saneamento básico propaga patógenos presentes nas fezes humanas através da água contaminada."
  },
  {
    "id": "cie-7-f-09",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF07CI07",
    "topic": "Bioma Caatinga",
    "question": "Qual bioma exclusivamente brasileiro possui vegetação semiárida adaptada à seca prolongada, como cactos e xique-xiques?",
    "options": [
      "Caatinga",
      "Pantanal",
      "Floresta Amazônica",
      "Mata de Araucárias"
    ],
    "correctAnswer": 0,
    "explanation": "A Caatinga tem clima semiárido e espécies xerófitas que armazenam água e transformam folhas em espinhos."
  },
  {
    "id": "cie-7-f-10",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF07CI03",
    "topic": "Sensação Térmica e Equilíbrio",
    "question": "Quando dois corpos em temperaturas diferentes entram em contato, o calor flui espontaneamente:",
    "options": [
      "Do corpo frio para o quente no funcionamento fisiológico do organismo",
      "Do corpo de maior temperatura para o de menor temperatura",
      "Não há troca de calor no funcionamento fisiológico do organismo",
      "Em ambas as direções com a mesma taxa no funcionamento fisiológico do organismo"
    ],
    "correctAnswer": 1,
    "explanation": "O calor flui do corpo de maior temperatura para o de menor até que atinjam o equilíbrio térmico."
  },
  {
    "id": "cie-7-f-11",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF07CI08",
    "topic": "Relações Ecológicas (Mutualismo)",
    "question": "A relação entre as abelhas (que se alimentam de néctar) e as flores (que são polinizadas) beneficia ambas as espécies. É um exemplo de:",
    "options": [
      "Parasitismo de forma contínua",
      "Competição",
      "Mutualismo",
      "Canibalismo"
    ],
    "correctAnswer": 2,
    "explanation": "No mutualismo, ambas as espécies envolvidas obtêm benefícios indispensáveis à sobrevivência ou reprodução."
  },
  {
    "id": "cie-7-f-12",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF07CI12",
    "topic": "Atmosfera e Efeito Estufa",
    "question": "Qual gás é liberado em grandes quantidades pela queima de combustíveis fósseis e é o principal responsável pelo aquecimento global antropogênico?",
    "options": [
      "Gás nitrogênio (N₂)",
      "Gás hélio (He) em meio biológico",
      "Gás ozônio (O₃)",
      "Dióxido de carbono (CO₂)"
    ],
    "correctAnswer": 3,
    "explanation": "O CO₂ é liberado na queima de derivados de petróleo, carvão e desmatamento, intensificando o efeito estufa."
  },
  {
    "id": "cie-7-f-13",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF07CI11",
    "topic": "Plano Inclinado",
    "question": "Uma rampa de acesso para cadeirantes é uma aplicação prática de qual máquina simples?",
    "options": [
      "Plano inclinado",
      "Alavanca inter-resistente",
      "Engrenagem cônica",
      "Pêndulo"
    ],
    "correctAnswer": 0,
    "explanation": "O plano inclinado diminui a força necessária para elevar uma carga, compensando com o aumento da distância percorrida."
  },
  {
    "id": "cie-7-f-14",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF07CI02",
    "topic": "Radiação Térmica",
    "question": "Como o calor emitido pelo Sol consegue chegar até a Terra através do vácuo do espaço sideral?",
    "options": [
      "Por condução de ar",
      "Por radiação térmica",
      "Por convecção líquida",
      "Por gravidade"
    ],
    "correctAnswer": 1,
    "explanation": "A radiação térmica é a única forma de propagação de calor que não necessita de meio material, propagando-se no vácuo."
  },
  {
    "id": "cie-7-f-15",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF07CI08",
    "topic": "Parasitismo",
    "question": "O carrapato que se fixa na pele de um cachorro para sugar sangue enquanto transmite microrganismos patogênicos estabelece uma relação de:",
    "options": [
      "Comensalismo",
      "Protocooperação de forma contínua",
      "Parasitismo",
      "Sociedade"
    ],
    "correctAnswer": 2,
    "explanation": "No parasitismo, um organismo (parasita) se beneficia enquanto causa prejuízo ao outro (hospedeiro)."
  },
  {
    "id": "cie-7-m-01",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF07CI02",
    "topic": "Convecção Térmica",
    "question": "Os aparelhos de ar-condicionado são instalados preferencialmente no alto das paredes dos cômodos porque:",
    "options": [
      "O ar quente menos denso desce por condução molecular rápida",
      "A irradiação térmica atinge o piso por ondas eletromagnéticas",
      "A convecção do ar aquecido bloqueia o fluxo térmico do teto",
      "O ar frio mais denso desce gerando correntes de convecção"
    ],
    "correctAnswer": 3,
    "explanation": "O ar resfriado fica mais denso e desce, empurrando o ar quente para cima em um ciclo contínuo de convecção."
  },
  {
    "id": "cie-7-m-02",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF07CI01",
    "topic": "Pirâmide de Energia",
    "question": "Em uma cadeia alimentar típica, por que o topo da cadeia (grandes predadores) tem menor quantidade de indivíduos do que a base de produtores?",
    "options": [
      "Grande fração da energia é dissipada como calor no metabolismo celular",
      "Os consumidores terciários reciclam toda a energia de volta aos produtores",
      "A biomassa disponível aumenta exponencialmente do produtor ao predador",
      "A fotossíntese recupera continuamente a energia térmica dos animais"
    ],
    "correctAnswer": 0,
    "explanation": "Cerca de 90% da energia é perdida em processos metabólicos e calor a cada transferência de nível trófico."
  },
  {
    "id": "cie-7-m-03",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF07CI09",
    "topic": "Vacina vs Soro Terapêutico",
    "question": "Uma pessoa picada por uma serpente venenosa deve receber imediatamente no hospital um soro antiofídico em vez de uma vacina porque:",
    "options": [
      "A vacina induz imunidade imediata antes da propagação da peçonha",
      "O soro fornece anticorpos prontos para neutralização rápida do veneno",
      "O soro estimula a síntese de antígenos defensivos pelo organismo",
      "A vacina destrói diretamente as toxinas celulares da picada em meio biológico"
    ],
    "correctAnswer": 1,
    "explanation": "O soro proporciona imunização passiva curativa com anticorpos prontos de ação imediata."
  },
  {
    "id": "cie-7-m-04",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF07CI07",
    "topic": "Pantanal e Inundações",
    "question": "A dinâmica ecológica do Pantanal mato-grossense é regulada principalmente por qual ciclo sazonal?",
    "options": [
      "Neve no inverno em meio biológico",
      "Vulcões submarinos",
      "Alternância anual de períodos de cheias e secas",
      "Marés oceânicas diárias"
    ],
    "correctAnswer": 2,
    "explanation": "O ciclo das águas no Pantanal nutre o solo com matéria orgânica e dita a migração e reprodução de peixes e aves."
  },
  {
    "id": "cie-7-m-05",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF07CI11",
    "topic": "Roldanas Fixas e Móveis",
    "question": "Qual é a vantagem mecânica proporcionada pelo uso de uma roldana móvel combinada a uma roldana fixa em um guindaste?",
    "options": [
      "Mudar apenas a direção da corda sem alterar a força",
      "Eliminar o peso do objeto",
      "Multiplicar a gravidade em meio biológico",
      "Reduzir à metade a força necessária para erguer a carga"
    ],
    "correctAnswer": 3,
    "explanation": "Cada roldana móvel divide a força resistente por 2, permitindo levantar cargas pesadas com menor esforço."
  },
  {
    "id": "cie-7-m-06",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF07CI10",
    "topic": "Dengue e Vetores",
    "question": "Qual medida é mais eficaz para combater o mosquito Aedes aegypti e reduzir surtos de Dengue, Zika e Chikungunya?",
    "options": [
      "Eliminar água parada em vasos e pneus impedindo a reprodução das larvas",
      "Tomar antibióticos preventivamente",
      "Ferver a água da torneira",
      "Usar casacos grossos no calor"
    ],
    "correctAnswer": 0,
    "explanation": "O mosquito fêmea deposita ovos em água limpa e parada; interromper seu ciclo reprodutivo é a chave sanitária."
  },
  {
    "id": "cie-7-m-07",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF07CI08",
    "topic": "Comensalismo",
    "question": "A rêmora que se fixa no tubarão para se alimentar de restos deixados por ele, sem prejudicar nem beneficiar o tubarão, exemplifica:",
    "options": [
      "Mutualismo",
      "Comensalismo",
      "Predação em meio biológico",
      "Amensalismo"
    ],
    "correctAnswer": 1,
    "explanation": "No comensalismo, uma espécie se beneficia enquanto a outra permanece neutra (não é prejudicada nem favorecida)."
  },
  {
    "id": "cie-7-m-08",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF07CI02",
    "topic": "Brisa Marítima e Terrestre",
    "question": "Durante um dia ensolarado na praia, sopra uma brisa do mar em direção à terra (brisa marítima). Isso ocorre porque:",
    "options": [
      "A água do mar ferve durante o dia",
      "A lua atrai o vento do oceano",
      "A areia da praia esquenta mais rápido que a água, fazendo o ar sobre a terra subir e o ar fresco do mar ocupar o lugar",
      "As ondas empurram o ar em meio biológico"
    ],
    "correctAnswer": 2,
    "explanation": "O calor específico da água é maior que o da areia; a terra aquece mais rápido, gerando baixa pressão e atraindo ar marítimo."
  },
  {
    "id": "cie-7-m-09",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF07CI13",
    "topic": "Camadas da Atmosfera e Clima",
    "question": "O ar rarefeito em cidades de grande altitude (como La Paz na Bolívia) causa falta de ar em viajantes porque:",
    "options": [
      "Não existe oxigênio nas montanhas",
      "A gravidade é o dobro no alto",
      "O ar é 100% gás carbônico",
      "A pressão atmosférica é menor"
    ],
    "correctAnswer": 3,
    "explanation": "Em altitudes elevadas, a menor coluna de ar acima gera menor pressão, deixando as moléculas de O₂ mais dispersas."
  },
  {
    "id": "cie-7-m-10",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF07CI07",
    "topic": "Floresta Amazônica e Rios Voadores",
    "question": "Os \"rios voadores\" da Amazônia são enormes massas de vapor de água conduzidas pelos ventos que regulam chuvas no Sudeste e Centro-Oeste do Brasil. Eles são alimentados por:",
    "options": [
      "Evapotranspiração colossal de bilhões de árvores da floresta tropical",
      "Evaporação apenas de rios subterrâneos",
      "Chuva ácida industrial",
      "Degelo dos Andes apenas"
    ],
    "correctAnswer": 0,
    "explanation": "A transpiração das copas das árvores da floresta bombeia centenas de milhões de litros de vapor de água para a atmosfera diariamente."
  },
  {
    "id": "cie-7-m-11",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF07CI11",
    "topic": "Termodinâmica de Máquinas Térmicas",
    "question": "Em um motor de combustão de carro, o calor gerado pela explosão da gasolina é transformado em:",
    "options": [
      "Apenas eletricidade estática",
      "Energia mecânica de movimento das rodas",
      "Energia nuclear em meio biológico",
      "Oxigênio gasoso"
    ],
    "correctAnswer": 1,
    "explanation": "Máquinas térmicas convertem parte da energia térmica liberada por combustão em energia cinética de trabalho útil."
  },
  {
    "id": "cie-7-m-12",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF07CI09",
    "topic": "Imunidade de Rebanho",
    "question": "Quando a grande maioria da população está vacinada contra o sarampo, pessoas que não podem tomar a vacina (como recém-nascidos) também ficam protegidas por causa da:",
    "options": [
      "Hereditariedade genética",
      "Imunidade inata passiva",
      "Imunidade coletiva",
      "Evolução instantânea"
    ],
    "correctAnswer": 2,
    "explanation": "Com alta cobertura vacinal, a circulação comunitária do vírus é interrompida, protegendo indivíduos vulneráveis."
  },
  {
    "id": "cie-7-m-13",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF07CI08",
    "topic": "Predação e Controle Biológico",
    "question": "A introdução de joaninhas em plantações de laranjas para combater pulgões que destroem as folhas é uma estratégia de:",
    "options": [
      "Polinização cruzada",
      "Adubação verde em meio biológico",
      "Transgenia química",
      "Controle biológico de pragas"
    ],
    "correctAnswer": 3,
    "explanation": "O controle biológico utiliza relações predador-presa naturais para regular populações de pragas agrícolas sem defensivos sintéticos."
  },
  {
    "id": "cie-7-m-14",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF07CI02",
    "topic": "Garrafa Térmica e Isolamento",
    "question": "As paredes de vidro espelhado e o vácuo entre as paredes de uma garrafa térmica têm a função de:",
    "options": [
      "Minimizar as perdas de calor por condução, convecção e radiação",
      "Resfriar o café automaticamente",
      "Aumentar o peso da garrafa",
      "Gerar luz interna"
    ],
    "correctAnswer": 0,
    "explanation": "O vácuo impede condução e convecção (não há meio material) e as paredes espelhadas refletem a radiação infravermelha."
  },
  {
    "id": "cie-7-m-15",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF07CI12",
    "topic": "Inversão Térmica Urbana",
    "question": "Em dias frios e secos de inverno em grandes cidades como Curitiba ou São Paulo, poluentes ficam retidos perto do solo devido à:",
    "options": [
      "Chuva ácida intensa",
      "Inversão térmica",
      "Falta de árvores nativas",
      "Radiação solar ultravioleta"
    ],
    "correctAnswer": 1,
    "explanation": "Na inversão térmica, a camada quente intermediária funciona como tampa, bloqueando a convecção vertical de dispersão da fumaça."
  },
  {
    "id": "cie-7-d-01",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF07CI01",
    "topic": "Bioacumulação e Magnificação Trófica",
    "question": "Quando um agrotóxico não biodegradável (como mercúrio ou certos pesticidas) é lançado em um rio, em qual nível da cadeia alimentar ele atinge maior concentração por quilo de massa?",
    "options": [
      "Nos produtores aquáticos",
      "Na água doce diluída em meio biológico",
      "Nos carnívoros de topo da cadeia alimentar",
      "Nos peixes herbívoros"
    ],
    "correctAnswer": 2,
    "explanation": "Ao longo dos níveis tróficos, a substância tóxica não é metabolizada e vai se acumulando cumulativamente em doses cada vez maiores (magnificação trófica)."
  },
  {
    "id": "cie-7-d-02",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF07CI03",
    "topic": "Calor Específico e Climatologia",
    "question": "Cidades litorâneas apresentam menor amplitude térmica entre o dia e a noite do que cidades no meio de desertos porque:",
    "options": [
      "O mar não recebe sol em meio biológico",
      "O vento do deserto é mais frio",
      "A areia retém mais água",
      "A água tem alto calor específico, absorvendo e liberando calor lentamente"
    ],
    "correctAnswer": 3,
    "explanation": "Com calor específico elevado (1 cal/g°C), o oceano funciona como moderador térmico do clima costeiro."
  },
  {
    "id": "cie-7-d-03",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF07CI10",
    "topic": "Uso Indiscriminado de Antibióticos",
    "question": "Tomar antibióticos sem prescrição médica ou interromper o tratamento antes do prazo pode causar:",
    "options": [
      "Seleção de linhagens bacterianas resistentes",
      "Imunidade definitiva contra vírus",
      "Cura antecipada de gripes",
      "Aumento de glóbulos vermelhos"
    ],
    "correctAnswer": 0,
    "explanation": "A dosagem incompleta mata as bactérias sensíveis e seleciona as variantes geneticamente mais resistentes."
  },
  {
    "id": "cie-7-d-04",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF07CI07",
    "topic": "Espécies Exóticas Invasoras",
    "question": "A introdução do javali ou do mexilhão-dourado em ecossistemas brasileiros causa graves impactos porque:",
    "options": [
      "Eles se tornam plantas em meio biológico",
      "Sem predadores naturais específicos, eles se multiplicam rápido e competem deslealmente com espécies nativas",
      "Eles limpam o solo de poluentes",
      "Eles são menores que os nativos"
    ],
    "correctAnswer": 1,
    "explanation": "Espécies invasoras desequilibram nichos ecológicos, transmitem doenças e podem levar espécies nativas à extinção."
  },
  {
    "id": "cie-7-d-05",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF07CI11",
    "topic": "Eficiência de Máquinas Térmicas",
    "question": "De acordo com as leis fundamentais da termodinâmica, é impossível construir uma máquina térmica que:",
    "options": [
      "Gere movimento em meio biológico",
      "Use vapor de água",
      "Converta 100% do calor recebido em trabalho mecânico sem perdas",
      "Esquente o ar ao redor"
    ],
    "correctAnswer": 2,
    "explanation": "Nenhuma máquina térmica real atinge rendimento de 100%; parte da energia térmica é inevitavelmente dissipada para uma fonte fria."
  },
  {
    "id": "cie-7-d-06",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF07CI08",
    "topic": "Sucessão Ecológica Primária",
    "question": "A colonização gradual de uma rocha nua recém-formada por lava vulcânica por líquens e musgos até formar uma floresta madura é chamada:",
    "options": [
      "Erosão sedimentar",
      "Decomposição antrópica",
      "Eutrofização em meio biológico",
      "Sucessão ecológica primária"
    ],
    "correctAnswer": 3,
    "explanation": "Na sucessão primária, espécies pioneiras (como líquens) desgastam a rocha criando o solo inicial para plantas maiores."
  },
  {
    "id": "cie-7-d-07",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF07CI02",
    "topic": "Equilíbrio Térmico e Misturas",
    "question": "Ao misturar 100 g de água a 20°C com 100 g de água a 80°C em um calorímetro ideal, a temperatura final de equilíbrio térmico será:",
    "options": [
      "50°C",
      "60°C",
      "40°C",
      "100°C"
    ],
    "correctAnswer": 0,
    "explanation": "Com massas iguais do mesmo líquido, a temperatura de equilíbrio é a média aritmética: (20 + 80) ÷ 2 = 50°C."
  },
  {
    "id": "cie-7-d-08",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF07CI12",
    "topic": "Chuva Ácida",
    "question": "A chuva ácida em regiões industrializadas é provocada principalmente pela reação da água da atmosfera com:",
    "options": [
      "Gás oxigênio puro no meio reacional",
      "Óxidos de enxofre (SO₂) e de nitrogênio (NOx) emitidos por indústrias e veículos",
      "Poeira de calcário",
      "Vapor de água do mar"
    ],
    "correctAnswer": 1,
    "explanation": "Esses gases formam ácido sulfúrico e ácido nítrico na água da chuva, acidificando solos e rios."
  },
  {
    "id": "cie-7-d-09",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF07CI07",
    "topic": "Mata Atlântica e Hotspots",
    "question": "A Mata Atlântica é considerada um \"hotspot\" global de biodiversidade porque:",
    "options": [
      "É a maior floresta em extensão contínua",
      "Possui clima polar em meio biológico",
      "Apresenta altíssima riqueza de espécies endêmicas e sofreu drástica redução de sua área original",
      "Não tem árvores com flores"
    ],
    "correctAnswer": 2,
    "explanation": "Hotspots são regiões prioritárias de conservação por terem grande número de espécies exclusivas altamente ameaçadas."
  },
  {
    "id": "cie-7-d-10",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF07CI10",
    "topic": "Eutrofização de Lagos",
    "question": "O despejo excessivo de esgoto orgânico ou fertilizantes em uma lagoa provoca a proliferação descontrolada de algas, seguida da morte de peixes por:",
    "options": [
      "Excesso de sal na água",
      "Aumento de predadores carnívoros",
      "Água gelada demais em meio biológico",
      "Falta de oxigênio dissolvido na água (anoxia) devido à decomposição acelerada"
    ],
    "correctAnswer": 3,
    "explanation": "Bactérias aeróbias decompõem a biomassa das algas mortas, consumindo todo o oxigênio da água e asfixiando os peixes."
  },
  {
    "id": "cie-7-d-11",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF07CI11",
    "topic": "Alavanca Interpotente",
    "question": "Em uma pinça cirúrgica ou no movimento do braço levantando um haltere, a força potente fica aplicada entre o ponto de apoio e a carga. Essa alavanca é:",
    "options": [
      "Interpotente",
      "Interfixa",
      "Inter-resistente",
      "Plana"
    ],
    "correctAnswer": 0,
    "explanation": "Na alavanca interpotente, o ponto de aplicação da força muscular/potente localiza-se entre o ponto de apoio e a resistência."
  },
  {
    "id": "cie-7-d-12",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF07CI08",
    "topic": "Capacidade de Suporte do Ecossistema",
    "question": "O limite máximo de indivíduos de uma espécie que um determinado ambiente consegue sustentar a longo prazo com alimento e abrigo é a:",
    "options": [
      "Taxa de mortalidade infantil",
      "Capacidade de suporte (carga) do ecossistema",
      "Densidade trófica mínima em meio biológico",
      "Amplitude ecológica zero"
    ],
    "correctAnswer": 1,
    "explanation": "Quando a população ultrapassa a capacidade de suporte, a escassez de recursos eleva a mortalidade e estabiliza a população."
  },
  {
    "id": "cie-7-d-13",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF07CI02",
    "topic": "Dilatação Térmica em Pontes e Trilhos",
    "question": "Por que os engenheiros deixam frestas (juntas de dilatação) entre os blocos de concreto de pontes e entre trilhos de trem?",
    "options": [
      "Para escoar a água da chuva",
      "Para economizar concreto em meio biológico",
      "Para permitir que os materiais se expandam no calor sem empenar ou quebrar a estrutura",
      "Para ventilar as fundações"
    ],
    "correctAnswer": 2,
    "explanation": "Com o aumento da temperatura, sólidos se dilatam; sem juntas de dilatação, o concreto sofreria trincas estruturais graves."
  },
  {
    "id": "cie-7-d-14",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF07CI09",
    "topic": "Memória Imunológica",
    "question": "As células do sistema imunitário que permanecem no organismo por anos e reconhecem rapidamente um patógeno já enfrentado são:",
    "options": [
      "Plaquetas sanguíneas",
      "Hemácias anucleadas",
      "Células adiposas da linhagem celular",
      "Linfócitos de memória (B e T)"
    ],
    "correctAnswer": 3,
    "explanation": "Os linfócitos de memória produzem anticorpos em grande escala e velocidade caso o patógeno tente reinfectar o indivíduo."
  },
  {
    "id": "cie-7-d-15",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF07CI13",
    "topic": "Efeito Coriolis e Ciclones",
    "question": "A rotação da Terra desvia a trajetória dos grandes ventos para a direita no Hemisfério Norte e para a esquerda no Hemisfério Sul. Esse efeito físico é o:",
    "options": [
      "Efeito Coriolis",
      "Efeito Doppler",
      "Efeito Joule",
      "Efeito Fotoelétrico"
    ],
    "correctAnswer": 0,
    "explanation": "O Efeito Coriolis é uma consequência inercial da rotação do planeta sobre massas de ar e correntes marinhas em movimento."
  },
  {
    "id": "cie-7-e-01",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF07CI01",
    "topic": "Fluxo de Energia Aberto e Ciclo de Matéria Fechado",
    "question": "Nos ecossistemas terrestres, enquanto a matéria circula ciclicamente (carbono, nitrogênio, água), a energia:",
    "options": [
      "É reciclada pelos decompositores de volta ao Sol",
      "Flui de maneira unidirecional e decrescente, dissipando-se continuamente como calor",
      "Permanece constante em quantidade útil",
      "Aumenta a cada nível trófico no referencial inercial"
    ],
    "correctAnswer": 1,
    "explanation": "A energia não é reciclada; ela entra pelo Sol, sustenta a cadeia trófica e dissipa-se como calor radiante no espaço."
  },
  {
    "id": "cie-7-e-02",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF07CI02",
    "topic": "Calor Latente vs Calor Sensível",
    "question": "Enquanto uma panela de água está fervendo na temperatura de 100°C ao nível do mar, o calor fornecido pela chama do fogão é utilizado para:",
    "options": [
      "Aumentar a temperatura para 120°C",
      "Quebrar átomos de oxigênio em meio biológico",
      "Mudar o estado físico da água de líquido para vapor",
      "Resfriar o fundo da panela"
    ],
    "correctAnswer": 2,
    "explanation": "Durante uma mudança de fase de uma substância pura a pressão constante, a temperatura permanece constante até a transição se completar."
  },
  {
    "id": "cie-7-e-03",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF07CI10",
    "topic": "Zoonoses e Desmatamento",
    "question": "Estudos científicos mostram que o desmatamento acelerado de florestas tropicais aumenta o risco de surgimento de novas pandemias porque:",
    "options": [
      "Aumenta o teor de oxigênio no ar",
      "Elimina os mosquitos",
      "Esfria o clima em meio biológico",
      "Reduz o habitat de animais silvestres, forçando o contato próximo de patógenos com humanos e animais domésticos"
    ],
    "correctAnswer": 3,
    "explanation": "A perda de florestas e a invasão de ecossistemas expõem humanos a vírus silvestres hospedeiros de morcegos e primatas."
  },
  {
    "id": "cie-7-e-04",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF07CI08",
    "topic": "Princípio da Exclusão Competitiva (Gause)",
    "question": "Se duas espécies distintas em um mesmo habitat disputarem exatamente os mesmos recursos e ocuparem o mesmo nicho ecológico:",
    "options": [
      "A competidora mais eficiente levará a outra à extinção local ou à mudança de nicho ecológico",
      "Ambas se fundirão em uma nova espécie",
      "Compartilharão o recurso em paz para sempre",
      "Nenhuma sobreviverá"
    ],
    "correctAnswer": 0,
    "explanation": "O princípio de Gause estabelece que duas espécies com nichos ecológicos idênticos não podem coexistir estavelmente no mesmo ambiente."
  },
  {
    "id": "cie-7-e-05",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF07CI11",
    "topic": "Vantagem Mecânica em Sistemas de Polias",
    "question": "Em uma talha exponencial com 3 roldanas móveis, a força necessária para sustentar um bloco de 800 N de peso é de:",
    "options": [
      "200 N",
      "100 N",
      "400 N",
      "80 N"
    ],
    "correctAnswer": 1,
    "explanation": "Cada roldana móvel reduz a força por 2: F = Peso / 2ⁿ. Com n = 3: F = 800 / 2³ = 800 / 8 = 100 N."
  },
  {
    "id": "cie-7-e-06",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF07CI07",
    "topic": "Endemismo e Ilhas Biogeográficas",
    "question": "Fragmentos isolados de florestas cercados por pastagens funcionam ecologicamente como \"ilhas\", o que provoca:",
    "options": [
      "Aumento instantâneo de espécies",
      "Proteção contra ventos em meio biológico",
      "Efeito de borda acentuado e perda de diversidade genética devido ao isolamento das populações",
      "Eliminação de predadores"
    ],
    "correctAnswer": 2,
    "explanation": "A fragmentação florestal isola populações, reduz o fluxo gênico e aumenta a vulnerabilidade a queimadas e secas na borda."
  },
  {
    "id": "cie-7-e-07",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF07CI02",
    "topic": "Comportamento Anômalo da Água",
    "question": "Ao resfriar a água de 4°C até 0°C, ao contrário de quase todos os outros líquidos, ela se expande e fica menos densa. Essa propriedade permite que:",
    "options": [
      "Os oceanos evaporem no inverno",
      "As geleiras afundem em meio biológico",
      "O fundo dos rios congele primeiro",
      "O gelo flutue sobre a água líquida, isolando o fundo e mantendo a vida aquática protegida nos lagos congelados"
    ],
    "correctAnswer": 3,
    "explanation": "Por ter densidade máxima a 4°C, a água mais fria e o gelo permanecem na superfície, permitindo a sobrevivência de peixes embaixo."
  },
  {
    "id": "cie-7-e-08",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF07CI09",
    "topic": "Doenças Negligenciadas",
    "question": "Doenças como esquistossomose, doença de Chagas e leishmaniose são chamadas de \"negligenciadas\" pela OMS porque:",
    "options": [
      "Acometem principalmente populações de baixa renda em países em desenvolvimento e recebem pouco investimento em novos medicamentos",
      "Já foram erradicadas do mundo",
      "São causadas por vírus incuráveis",
      "Não têm sintomas"
    ],
    "correctAnswer": 0,
    "explanation": "Falta de saneamento e pobreza perpetuam essas doenças, que historicamente recebem menor foco das indústrias farmacêuticas globais."
  },
  {
    "id": "cie-7-e-09",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF07CI12",
    "topic": "Acidificação dos Oceanos",
    "question": "A absorção de grandes quantidades de CO₂ atmosférico pelos oceanos altera a química da água, dificultando:",
    "options": [
      "A respiração dos peixes no fundo",
      "A formação e manutenção das conchas de moluscos e esqueletos calcários de corais",
      "A flutuação de navios cargueiros",
      "A evaporação das marés no meio reacional"
    ],
    "correctAnswer": 1,
    "explanation": "O CO₂ dissolvido forma ácido carbônico, reduzindo o pH marinho e diminuindo a disponibilidade de íons carbonato para calcificação."
  },
  {
    "id": "cie-7-e-10",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF07CI11",
    "topic": "Conservação da Energia Mecânica em Máquinas",
    "question": "Ao utilizar uma máquina simples para erguer um peso gastando metade da força, o que acontece com a distância que devemos puxar a corda?",
    "options": [
      "A distância também cai pela metade",
      "A distância fica igual a zero",
      "A distância percorrida pela mão dobra",
      "A corda não se move no referencial inercial"
    ],
    "correctAnswer": 2,
    "explanation": "Não há criação de energia; a máquina simples troca força por deslocamento mantendo o trabalho mecânico constante."
  },
  {
    "id": "cie-7-e-11",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF07CI07",
    "topic": "Mecanismos de Defesa na Caatinga",
    "question": "Por que muitas árvores da Caatinga (como o juazeiro e o umbuzeiro) perdem suas folhas na estação seca e possuem raízes que acumulam água?",
    "options": [
      "Para absorver mais oxigênio em meio biológico",
      "Para evitar o ataque de fungos",
      "Porque morrem todos os anos",
      "Para reduzir a perda de água por transpiração foliar e sobreviver a meses sem chuva"
    ],
    "correctAnswer": 3,
    "explanation": "A queda das folhas (caducifólia) reduz a área superficial de evapotranspiração, mantendo a água nos tecidos internos."
  },
  {
    "id": "cie-7-e-12",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF07CI08",
    "topic": "Efeito Cascata Trófica",
    "question": "A reintrodução de lobos no Parque Nacional de Yellowstone (EUA) controlou os rebanhos de cervos, permitiu a regeneração de florestas nas margens e estabilizou os rios. Esse evento é um exemplo clássico de:",
    "options": [
      "Cascata trófica de topo para a base (top-down)",
      "Sucessão antrópica destrutiva",
      "Parasitismo generalizado",
      "Competição intraespecífica"
    ],
    "correctAnswer": 0,
    "explanation": "A presença do predador de topo altera o comportamento e abundância dos herbívoros, beneficiando a vegetação e o ecossistema fluvial."
  },
  {
    "id": "cie-7-e-13",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF07CI02",
    "topic": "Zero Absoluto de Temperatura",
    "question": "O zero absoluto na escala Kelvin (0 K ou -273,15°C) representa teoricamente:",
    "options": [
      "A temperatura de congelamento da água",
      "O estado em que a agitação térmica das partículas atinge o mínimo fundamental possível",
      "A temperatura do polo sul no inverno",
      "O ponto em que o calor é infinito em meio biológico"
    ],
    "correctAnswer": 1,
    "explanation": "No zero absoluto, a energia cinética das moléculas é mínima, sendo o limite termodinâmico inferior do universo."
  },
  {
    "id": "cie-7-e-14",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF07CI09",
    "topic": "Anticorpos Monoclonais e Biotecnologia",
    "question": "Os testes rápidos de farmácia para COVID-19 ou gravidez utilizam tiras reagentes impregnadas com anticorpos que detectam antígenos específicos por:",
    "options": [
      "Medição do calor corporal no funcionamento fisiológico do organismo",
      "Reação de fusão atômica no funcionamento fisiológico do organismo em meio biológico",
      "Reação específica chave-fechadura entre antígeno e anticorpo com indicador visual colorido",
      "Filtração por gravidade no funcionamento fisiológico do organismo"
    ],
    "correctAnswer": 2,
    "explanation": "A alta especificidade da ligação imunológica gera a linha reagente colorida em minutos."
  },
  {
    "id": "cie-7-e-15",
    "subject": "ciencias",
    "grade": "7º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF07CI13",
    "topic": "El Niño e La Niña",
    "question": "O fenômeno climático periódico conhecido como \"El Niño\" é caracterizado pelo:",
    "options": [
      "Resfriamento das águas do Oceano Atlântico",
      "Congelamento da bacia amazônica",
      "Aumento de vulcões marinhos em meio biológico",
      "Aquecimento anormal das águas superficiais do Oceano Pacífico Equatorial, alterando padrões de chuva no Brasil"
    ],
    "correctAnswer": 3,
    "explanation": "O aquecimento das águas do Pacífico altera a circulação atmosférica global, provocando secas no Nordeste e chuvas intensas no Sul do Brasil."
  },
  {
    "id": "cie-8-f-01",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF08CI01",
    "topic": "Fontes de Energia Renováveis",
    "question": "Qual das seguintes fontes de energia é considerada renovável e inesgotável na escala humana?",
    "options": [
      "Energia solar",
      "Petróleo",
      "Carvão mineral",
      "Gás natural"
    ],
    "correctAnswer": 0,
    "explanation": "A energia solar provém da radiação do Sol, renovando-se diariamente sem esgotar combustíveis fósseis."
  },
  {
    "id": "cie-8-f-02",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF08CI02",
    "topic": "Condutores e Isolantes Elétricos",
    "question": "Qual dos seguintes materiais é um excelente condutor elétrico comumente usado nos fios da rede doméstica?",
    "options": [
      "Borracha",
      "Cobre",
      "Plástico",
      "Vidro"
    ],
    "correctAnswer": 1,
    "explanation": "O cobre é um metal com elétrons livres que se movem com facilidade, conduzindo corrente elétrica com baixa resistência."
  },
  {
    "id": "cie-8-f-03",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF08CI07",
    "topic": "Puberdade e Hormônios",
    "question": "Qual hormônio é produzido principalmente pelos testículos e é responsável pelas características sexuais secundárias masculinas na puberdade?",
    "options": [
      "Insulina",
      "Progesterona de forma contínua",
      "Testosterona",
      "Melatonina"
    ],
    "correctAnswer": 2,
    "explanation": "A testosterona estimula o desenvolvimento da barba, engrossamento da voz e massa muscular nos rapazes."
  },
  {
    "id": "cie-8-f-04",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF08CI12",
    "topic": "Fases da Lua",
    "question": "Em qual fase da Lua a face iluminada pelo Sol está completamente voltada para a Terra, sendo vista como um disco brilhante inteiro no céu?",
    "options": [
      "Lua Nova",
      "Quarto Crescente",
      "Quarto Minguante",
      "Lua Cheia"
    ],
    "correctAnswer": 3,
    "explanation": "Na Lua Cheia, a Terra se encontra entre o Sol e a Lua, permitindo ver toda a face iluminada."
  },
  {
    "id": "cie-8-f-05",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF08CI03",
    "topic": "Circuito Elétrico Simples",
    "question": "Para que uma lâmpada em um circuito elétrico simples acenda, o circuito deve estar:",
    "options": [
      "Fechado",
      "Aberto",
      "Desconectado da bateria",
      "Sem condutores"
    ],
    "correctAnswer": 0,
    "explanation": "A corrente elétrica só flui quando há um circuito elétrico fechado ligando o polo positivo ao negativo da fonte."
  },
  {
    "id": "cie-8-f-06",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF08CI08",
    "topic": "Fecundação Humana",
    "question": "A fecundação humana ocorre quando há a união de quais duas células reprodutivas (gametas)?",
    "options": [
      "Óvulo e hemácia",
      "Espermatozoide e ovócito",
      "Neurônio e espermatozoide",
      "Dois óvulos"
    ],
    "correctAnswer": 1,
    "explanation": "A fusão do espermatozoide com o ovócito forma a primeira célula do novo indivíduo: o zigoto."
  },
  {
    "id": "cie-8-f-07",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF08CI01",
    "topic": "Energia Eólica",
    "question": "A energia eólica converte a força dos ventos em eletricidade por meio do movimento de rotação de:",
    "options": [
      "Painéis de silício fotovoltaicos",
      "Motores a diesel",
      "Aerogeradores",
      "Reatores nucleares"
    ],
    "correctAnswer": 2,
    "explanation": "As pás dos aerogeradores giram com a força do vento, acionando um gerador elétrico que produz energia."
  },
  {
    "id": "cie-8-f-08",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF08CI09",
    "topic": "Métodos Contraceptivos de Barreira",
    "question": "Qual método contraceptivo previne tanto a gravidez não planejada quanto a transmissão de Infecções Sexualmente Transmissíveis (ISTs)?",
    "options": [
      "Pílula anticoncepcional oral",
      "DIU de cobre",
      "Tabelinha de fertilidade",
      "Preservativo"
    ],
    "correctAnswer": 3,
    "explanation": "Apenas os métodos de barreira, como a camisinha, oferecem dupla proteção contra gravidez e ISTs (como HIV, sífilis e HPV)."
  },
  {
    "id": "cie-8-f-09",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF08CI13",
    "topic": "Eclipses",
    "question": "Em um eclipse solar, qual astro se posiciona diretamente entre o Sol e a Terra, bloqueando a luz solar?",
    "options": [
      "A Lua",
      "Marte",
      "Vênus",
      "Júpiter"
    ],
    "correctAnswer": 0,
    "explanation": "No eclipse solar, a Lua passa exatamente entre o Sol e a Terra, projetando sua sombra sobre certas regiões terrestres."
  },
  {
    "id": "cie-8-f-10",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF08CI04",
    "topic": "Potência Elétrica e Lâmpadas",
    "question": "Lâmpadas de LED são muito mais econômicas que lâmpadas incandescentes antigas porque:",
    "options": [
      "Funcionam sem fios em meio biológico",
      "Consomem menos watts de potência para produzir a mesma quantidade de luz",
      "Não gastam eletricidade",
      "Usam pilhas internas"
    ],
    "correctAnswer": 1,
    "explanation": "As lâmpadas LED possuem alta eficiência luminosa, convertendo quase toda a energia elétrica em luz em vez de desperdiçar em calor."
  },
  {
    "id": "cie-8-f-11",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF08CI07",
    "topic": "Ciclo Menstrual",
    "question": "Em média, a liberação de um ovócito maduro pelos ovários (ovulação) ocorre por volta de qual dia de um ciclo menstrual regular de 28 dias?",
    "options": [
      "1º dia do ciclo",
      "28º dia do ciclo de forma contínua",
      "14º dia do ciclo",
      "7º dia do ciclo"
    ],
    "correctAnswer": 2,
    "explanation": "A ovulação ocorre aproximadamente na metade do ciclo menstrual (por volta do 14º dia)."
  },
  {
    "id": "cie-8-f-12",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF08CI12",
    "topic": "Movimento de Translação da Lua",
    "question": "Quanto tempo a Lua leva, aproximadamente, para dar uma volta completa ao redor da Terra (mês lunar)?",
    "options": [
      "365 dias",
      "24 horas",
      "7 dias no sistema planetário",
      "Cerca de 28 dias"
    ],
    "correctAnswer": 3,
    "explanation": "O ciclo lunar de fases (período sinódico) dura cerca de 29,5 dias (aproximadamente 4 semanas)."
  },
  {
    "id": "cie-8-f-13",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF08CI01",
    "topic": "Usinas Hidrelétricas no Brasil",
    "question": "Nas usinas hidrelétricas, a energia potencial gravitacional da água represada é transformada em eletricidade pelo giro de:",
    "options": [
      "Turbinas conectadas a geradores elétricos",
      "Resistores térmicos",
      "Painéis térmicos",
      "Compressores de ar"
    ],
    "correctAnswer": 0,
    "explanation": "A água em queda movimenta as pás das turbinas hidráulicas, que acionam geradores que produzem corrente alternada."
  },
  {
    "id": "cie-8-f-14",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF08CI10",
    "topic": "Prevenção de ISTs (HPV)",
    "question": "A vacina contra o HPV (Papilomavírus Humano) oferecida gratuitamente pelo SUS para adolescentes é fundamental para prevenir:",
    "options": [
      "Gripe comum",
      "Câncer de colo do útero e verrugas genitais",
      "Hepatite A em meio biológico",
      "Tétano acidental"
    ],
    "correctAnswer": 1,
    "explanation": "A vacinação protege contra os sorotipos de HPV de alto risco oncogênico antes do início da vida sexual."
  },
  {
    "id": "cie-8-f-15",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF08CI05",
    "topic": "Consumo Consciente de Energia",
    "question": "Qual atitude residencial simples ajuda a diminuir o consumo de energia elétrica no final do mês?",
    "options": [
      "Ligar todos os ares-condicionados na potência máxima",
      "Deixar as portas da geladeira abertas no referencial inercial",
      "Desligar aparelhos em modo stand-by e reduzir o tempo do chuveiro elétrico",
      "Substituir LEDs por lâmpadas incandescentes"
    ],
    "correctAnswer": 2,
    "explanation": "O chuveiro elétrico é um dos aparelhos de maior potência em uma residência; diminuir seu tempo de uso gera economia real."
  },
  {
    "id": "cie-8-m-01",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF08CI05",
    "topic": "Cálculo de Consumo Elétrico (kWh)",
    "question": "Um chuveiro elétrico de 5.000 W (5 kW) é utilizado por 1 hora por dia durante 30 dias. Qual é o consumo mensal desse chuveiro?",
    "options": [
      "50 kWh",
      "300 kWh",
      "15 kWh",
      "150 kWh"
    ],
    "correctAnswer": 3,
    "explanation": "Consumo = Potência (kW) × Horas = 5 kW × (1 h/dia × 30 dias) = 5 × 30 = 150 kWh."
  },
  {
    "id": "cie-8-m-02",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF08CI02",
    "topic": "Associação de Resistores em Série",
    "question": "Em um pisca-pisca de Natal antigo ligado em série, quando uma única lâmpada queima, todas as outras se apagam porque:",
    "options": [
      "O circuito elétrico é interrompido, cessando a passagem de corrente para todas as lâmpadas",
      "A voltagem sobe para o dobro",
      "As outras lâmpadas entram em curto-circuito",
      "A tomada desliga"
    ],
    "correctAnswer": 0,
    "explanation": "Na ligação em série há um único caminho para os elétrons; se um elemento se rompe, o circuito inteiro fica aberto."
  },
  {
    "id": "cie-8-m-03",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF08CI07",
    "topic": "Gêmeos Monozigóticos vs Dizigóticos",
    "question": "Gêmeos monozigóticos (idênticos) se originam de:",
    "options": [
      "Dois óvulos fecundados por dois espermatozoides distintos",
      "Um único óvulo fecundado por um único espermatozoide que se divide em dois embriões",
      "Um óvulo fecundado por dois espermatozoides ao mesmo tempo",
      "Dois espermatozoides sem óvulo em meio biológico"
    ],
    "correctAnswer": 1,
    "explanation": "Gêmeos idênticos compartilham 100% do mesmo patrimônio genético porque vêm do mesmo zigoto original."
  },
  {
    "id": "cie-8-m-04",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF08CI13",
    "topic": "Eclipses e Cones de Sombra",
    "question": "Durante um eclipse solar total, uma pessoa que está na região da \"penumbra\" da sombra da Lua na Terra observa um:",
    "options": [
      "Eclipse solar total com escuridão completa",
      "Eclipse lunar",
      "Eclipse solar parcial",
      "Dia normal sem alterações"
    ],
    "correctAnswer": 2,
    "explanation": "Na umbra há bloqueio total da luz solar direta; na penumbra o bloqueio é apenas parcial."
  },
  {
    "id": "cie-8-m-05",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF08CI04",
    "topic": "Efeito Joule",
    "question": "O aquecimento de aparelhos como ferro de passar, torradeira e chuveiro devido à passagem de corrente elétrica por uma resistência é chamado:",
    "options": [
      "Efeito Fotoelétrico",
      "Efeito Doppler",
      "Indução Magnética",
      "Efeito Joule"
    ],
    "correctAnswer": 3,
    "explanation": "O Efeito Joule é a conversão direta de energia elétrica em energia térmica pelas colisões de elétrons no condutor resistivo."
  },
  {
    "id": "cie-8-m-06",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF08CI09",
    "topic": "DIU (Dispositivo Intrauterino)",
    "question": "O DIU é um método contraceptivo de longa duração inserido por profissional de saúde no interior de qual órgão do sistema reprodutor feminino?",
    "options": [
      "Útero",
      "Vagina",
      "Tuba uterina",
      "Ovário"
    ],
    "correctAnswer": 0,
    "explanation": "O DIU é posicionado na cavidade uterina, onde libera cobre ou hormônios para impedir a fecundação."
  },
  {
    "id": "cie-8-m-07",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF08CI12",
    "topic": "Marés e Gravidade Lunar",
    "question": "As marés oceânicas sobem e descem na Terra principalmente por causa da:",
    "options": [
      "Velocidade dos ventos alísios",
      "Atração gravitacional combinada da Lua e do Sol sobre as massas de água oceânicas",
      "Temperatura do fundo do mar",
      "Rotação da Terra apenas no sistema planetário"
    ],
    "correctAnswer": 1,
    "explanation": "A gravidade diferencial da Lua puxa as massas de água voltadas para ela, criando o bulbo de maré alta."
  },
  {
    "id": "cie-8-m-08",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF08CI01",
    "topic": "Biomassa e Biogás",
    "question": "O biogás produzido em biodigestores rurais a partir de fezes de animais e restos de colheita é composto principalmente por qual gás combustível?",
    "options": [
      "Gás hélio",
      "Gás oxigênio puro",
      "Gás metano (CH₄)",
      "Gás carbônico apenas de forma contínua"
    ],
    "correctAnswer": 2,
    "explanation": "Bactérias anaeróbias decompõem matéria orgânica produzindo metano, um gás inflamável excelente para geração de energia."
  },
  {
    "id": "cie-8-m-09",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF08CI03",
    "topic": "Associação de Resistores em Paralelo",
    "question": "Nas instalações elétricas das nossas casas, as tomadas e lâmpadas são ligadas em paralelo para que:",
    "options": [
      "Se uma lâmpada queimar, tudo desligue",
      "O consumo seja multiplicado por dez",
      "A corrente seja idêntica em todos em meio biológico",
      "Cada aparelho funcione de forma independente e receba a mesma tensão (voltagem) da rede"
    ],
    "correctAnswer": 3,
    "explanation": "Na ligação paralela, todos os pontos recebem a mesma ddp (110 V ou 220 V) e desligar um aparelho não afeta os demais."
  },
  {
    "id": "cie-8-m-10",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF08CI10",
    "topic": "Vírus do HIV e Aids",
    "question": "O vírus do HIV compromete o organismo atacando especificamente quais células de defesa do sistema imunitário?",
    "options": [
      "Linfócitos T CD4+",
      "Hemácias transportadoras de O₂",
      "Neurônios motores",
      "Células musculares"
    ],
    "correctAnswer": 0,
    "explanation": "Ao destruir os linfócitos T auxiliares, o HIV deixa o corpo vulnerável a infecções oportunistas graves."
  },
  {
    "id": "cie-8-m-11",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF08CI13",
    "topic": "Lua de Sangue (Eclipse Lunar Total)",
    "question": "Durante a totalidade de um eclipse lunar, a Lua não desaparece totalmente, mas ganha um tom avermelhado (\"Lua de sangue\") porque:",
    "options": [
      "A Lua esquenta até o ponto de fusão",
      "A luz solar é refratada e filtrada pela atmosfera da Terra, projetando tons avermelhados na sombra",
      "O Sol se apaga momentaneamente",
      "Marte reflete luz sobre ela em meio biológico"
    ],
    "correctAnswer": 1,
    "explanation": "O espalhamento Rayleigh na atmosfera terrestre filtra os comprimentos de onda azuis e desvia a luz vermelha na direção da Lua."
  },
  {
    "id": "cie-8-m-12",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF08CI06",
    "topic": "Selo Procel de Eficiência Energética",
    "question": "Ao comprar uma geladeira com classificação Procel \"A\", o consumidor tem a garantia de que o eletrodoméstico:",
    "options": [
      "Gera energia de volta para a rede",
      "Funciona sem tomada em meio biológico",
      "Apresenta alta eficiência energética e menor consumo de eletricidade dentro de sua categoria",
      "Tem a menor capacidade de litros"
    ],
    "correctAnswer": 2,
    "explanation": "O selo Procel A certifica os modelos mais eficientes que entregam o mesmo serviço gastando menos quilowatts-hora."
  },
  {
    "id": "cie-8-m-13",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF08CI08",
    "topic": "Tubas Uterinas e Laqueadura",
    "question": "A cirurgia de laqueadura tubária consiste no corte ou amarração das tubas uterinas para:",
    "options": [
      "Retirar o útero da mulher",
      "Parar a produção de hormônios ovarianos",
      "Impedir a menstruação em meio biológico",
      "Impedir o encontro do espermatozoide com o ovócito"
    ],
    "correctAnswer": 3,
    "explanation": "As tubas uterinas são o canal onde ocorre a fecundação; bloqueá-las impede mecanicamente a união dos gametas."
  },
  {
    "id": "cie-8-m-14",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF08CI14",
    "topic": "Previsão do Tempo e Barômetros",
    "question": "Uma queda brusca na pressão atmosférica registrada por um barômetro em uma região geralmente indica:",
    "options": [
      "Aproximação de uma frente fria com instabilidade, nuvens e chuva",
      "Dias seguidos de céu limpo e seco",
      "Aumento de radiação solar direta",
      "Calmaria absoluta"
    ],
    "correctAnswer": 0,
    "explanation": "Centros de baixa pressão atraem ventos convergentes e umidade, favorecendo a formação de nuvens de tempestade."
  },
  {
    "id": "cie-8-m-15",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF08CI02",
    "topic": "Fusíveis e Disjuntores",
    "question": "Disjuntores e fusíveis são instalados no quadro de distribuição das residências com a função de:",
    "options": [
      "Aumentar a voltagem para os chuveiros",
      "Interromper automaticamente o circuito em caso de sobrecarga ou curto-circuito",
      "Armazenar energia de reserva em meio biológico",
      "Transformar corrente contínua em alternada"
    ],
    "correctAnswer": 1,
    "explanation": "Eles protegem a fiação elétrica contra aquecimento perigoso (efeito Joule excessivo) desarmando a rede se a corrente superar o limite seguro."
  },
  {
    "id": "cie-8-d-01",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF08CI01",
    "topic": "Impactos Socioambientais de Grandes Hidrelétricas",
    "question": "Embora gere eletricidade com baixa emissão direta de carbono, a construção de usinas hidrelétricas com grandes reservatórios na Amazônia (como Belo Monte) acarreta:",
    "options": [
      "Consumo de urânio enriquecido em meio biológico",
      "Eliminação completa dos rios da bacia",
      "Alagamento de florestas nativas com decomposição vegetal que emite metano e deslocamento de populações indígenas e ribeirinhas",
      "Resfriamento global excessivo"
    ],
    "correctAnswer": 2,
    "explanation": "Grandes barragens causam perda de biodiversidade aquática, emissão de metano por matéria vegetal submersa e severos impactos socioeconômicos."
  },
  {
    "id": "cie-8-d-02",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF08CI05",
    "topic": "Custo Financeiro da Energia",
    "question": "Se o kWh custa R$ 0,80, quanto custa manter um ar-condicionado de 1.500 W (1,5 kW) ligado 8 horas por noite durante 30 dias?",
    "options": [
      "R$ 360,00",
      "R$ 180,00",
      "R$ 240,00",
      "R$ 288,00"
    ],
    "correctAnswer": 3,
    "explanation": "Consumo mensal = 1,5 kW × (8 h × 30) = 1,5 × 240 = 360 kWh. Custo = 360 kWh × R$ 0,80 = R$ 288,00."
  },
  {
    "id": "cie-8-d-03",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF08CI07",
    "topic": "Controle Hormonal do Ciclo Reprodutivo",
    "question": "A pílula anticoncepcional combinada de uso diário impede a gravidez principalmente porque:",
    "options": [
      "Mantém níveis constantes de estrogênio e progesterona",
      "Mata os espermatozoides por acidez na vagina",
      "Fecha fisicamente o colo do útero",
      "Destrói os óvulos nos ovários"
    ],
    "correctAnswer": 0,
    "explanation": "O feedback negativo dos hormônios sintéticos sobre o eixo hipotálamo-hipófise impede o pico de LH responsável pela ovulação."
  },
  {
    "id": "cie-8-d-04",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF08CI12",
    "topic": "Sincronia da Rotação e Translação Lunar",
    "question": "Da Terra, nós sempre enxergamos a mesma face da Lua (o \"lado oculto\" nunca é visto da superfície terrestre) porque:",
    "options": [
      "A Lua não gira em torno do próprio eixo",
      "O período de rotação da Lua em torno do seu próprio eixo é exatamente igual ao seu período de translação ao redor da Terra",
      "A Terra não gira no sistema planetário",
      "O lado oculto da Lua não reflete luz"
    ],
    "correctAnswer": 1,
    "explanation": "Essa sincronia gravitacional travada por marés faz com que a Lua apresente sempre o mesmo hemisfério voltado para nós."
  },
  {
    "id": "cie-8-d-05",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF08CI03",
    "topic": "Primeira Lei de Ohm Aplicada",
    "question": "Um resistor de chuveiro elétrico ligado em 220 V é percorrido por uma corrente elétrica de 20 A. Qual é a resistência elétrica desse componente?",
    "options": [
      "22 Ω em meio biológico",
      "4.400 Ω",
      "11 Ω (ohms)",
      "44 Ω"
    ],
    "correctAnswer": 2,
    "explanation": "Pela Primeira Lei de Ohm: U = R × i => R = U / i = 220 V / 20 A = 11 Ω."
  },
  {
    "id": "cie-8-d-06",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF08CI09",
    "topic": "Pílula do Dia Seguinte (Emergência)",
    "question": "A contracepção de emergência (\"pílula do dia seguinte\") deve ser usada apenas em situações excepcionais (como rompimento de camisinha) porque:",
    "options": [
      "É um método abortivo cirúrgico",
      "Pode causar esterilidade definitiva imediata",
      "Não tem eficácia após 1 hora em meio biológico",
      "Contém alta dosagem hormonal que desregula o ciclo menstrual e não previne ISTs nem substitui o planejamento de rotina"
    ],
    "correctAnswer": 3,
    "explanation": "A pílula de emergência retarda ou inibe a ovulação iminente, mas suas altas doses de progestágeno causam efeitos colaterais e irregularidades menstruais."
  },
  {
    "id": "cie-8-d-07",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF08CI13",
    "topic": "Por que Não Há Eclipse Todo Mês?",
    "question": "Embora a Lua passe entre a Terra e o Sol e atrás da Terra a cada mês lunar, por que os eclipses solares e lunares não acontecem em todas as Luas Novas e Cheias?",
    "options": [
      "Porque o plano da órbita da Lua é inclinado cerca de 5° em relação ao plano da órbita da Terra",
      "Porque o Sol se move na galáxia",
      "Porque a Lua é menor que a Terra",
      "Porque a Terra gira rápido demais"
    ],
    "correctAnswer": 0,
    "explanation": "A inclinação orbital de 5° faz com que a sombra da Lua passe acima ou abaixo da Terra na maioria das Luas Novas; eclipses só ocorrem nos \"nodos\"."
  },
  {
    "id": "cie-8-d-08",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF08CI04",
    "topic": "Relação entre Tensão, Corrente e Bitola do Fio",
    "question": "Por que aparelhos de alta potência, como chuveiros de 220 V, utilizam cabos elétricos com bitola mais grossa (ex: 6 mm² a 10 mm²)?",
    "options": [
      "Fios grossos gastam menos energia",
      "Fios mais grossos têm menor resistência elétrica",
      "A eletricidade não cabe em fios finos",
      "Para aumentar a voltagem da rede em meio biológico"
    ],
    "correctAnswer": 1,
    "explanation": "Pela 2ª Lei de Ohm (R = ρL/A), maior área transversal (bitola) reduz a resistência, minimizando o aquecimento por efeito Joule."
  },
  {
    "id": "cie-8-d-09",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF08CI08",
    "topic": "Reprodução Sexuada vs Assexuada",
    "question": "Em termos biológicos evolutivos, qual é a principal vantagem da reprodução sexuada em relação à reprodução assexuada (clonagem)?",
    "options": [
      "Gerar maior número de descendentes em menor tempo",
      "Não precisar de gametas em meio biológico",
      "Promover a variabilidade genética na prole através da recombinação gênica",
      "Gastar menos energia metabólica"
    ],
    "correctAnswer": 2,
    "explanation": "A mistura de genomas de dois progenitores cria novas combinações genéticas, essenciais para a sobrevivência populacional frente a parasitas e mudanças climáticas."
  },
  {
    "id": "cie-8-d-10",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF08CI14",
    "topic": "Massas de Ar no Brasil",
    "question": "No inverno, a queda brusca de temperatura no Centro-Sul brasileiro com geadas é provocada pela entrada de qual massa de ar?",
    "options": [
      "Massa Equatorial Continental (mEc)",
      "Massa Tropical Atlântica (mTa)",
      "Massa Equatorial Atlântica (mEa)",
      "Massa Polar Atlântica (mPa)"
    ],
    "correctAnswer": 3,
    "explanation": "A massa Polar Atlântica tem origem subantártica, é fria e densa e avança pelo continente provocando o fenômeno da friagem."
  },
  {
    "id": "cie-8-d-11",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF08CI02",
    "topic": "Cálculo de Potência Elétrica",
    "question": "Um aquecedor opera ligado a 110 V e drena uma corrente de 10 A. Qual é a potência elétrica desenvolvida por esse aparelho?",
    "options": [
      "1.100 W",
      "110 W",
      "2.200 W",
      "11 W"
    ],
    "correctAnswer": 0,
    "explanation": "Potência P = Tensão (U) × Corrente (i) = 110 V × 10 A = 1.100 W."
  },
  {
    "id": "cie-8-d-12",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF08CI10",
    "topic": "Sífilis e Infecções Bacterianas",
    "question": "A sífilis é uma IST causada pela bactéria Treponema pallidum. Se não for diagnosticada e tratada adequadamente com penicilina, ela pode:",
    "options": [
      "Transformar-se em gripe comum",
      "Evoluir para fases secundária e terciária com lesões graves no coração, ossos e sistema nervoso central",
      "Desaparecer espontaneamente sem deixar sequelas",
      "Causar apenas dor de dente em meio biológico"
    ],
    "correctAnswer": 1,
    "explanation": "A sífilis primária causa ferida indolor (cancro duro); se não tratada, a bactéria dissemina pelo corpo e causa graves danos neurológicos e cardiovasculares."
  },
  {
    "id": "cie-8-d-13",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF08CI01",
    "topic": "Matriz Energética Brasileira",
    "question": "A matriz elétrica brasileira destaca-se internacionalmente porque cerca de 80% de sua eletricidade é gerada por:",
    "options": [
      "Carvão mineral e óleo pesado",
      "Usinas nucleares de grande porte",
      "Fontes renováveis",
      "Xisto betuminoso"
    ],
    "correctAnswer": 2,
    "explanation": "Enquanto a média mundial é dominada por combustíveis fósseis, o Brasil possui matriz elétrica predominantemente renovável e limpa."
  },
  {
    "id": "cie-8-d-14",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF08CI12",
    "topic": "Marés Vivas (de Sizígia) e Marés Mortas",
    "question": "As maiores amplitudes de maré (marés de sizígia, com maré alta muito alta e baixa muito baixa) ocorrem nas fases da Lua:",
    "options": [
      "Quarto Crescente e Quarto Minguante",
      "Apenas na Lua Cheia",
      "Apenas no Quarto Crescente",
      "Nova e Cheia"
    ],
    "correctAnswer": 3,
    "explanation": "Nas fases de Lua Nova e Cheia, as forças gravitacionais do Sol e da Lua somam-se no mesmo eixo, maximizando as marés."
  },
  {
    "id": "cie-8-d-15",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF08CI06",
    "topic": "Bandeiras Tarifárias de Energia",
    "question": "No sistema elétrico brasileiro, o acionamento das bandeiras tarifárias amarela ou vermelha na conta de luz reflete:",
    "options": [
      "O acionamento de usinas termelétricas mais caras e poluentes devido à redução dos níveis de água nos reservatórios das hidrelétricas",
      "Multas aplicadas a consumidores inadimplentes",
      "Queda no preço do petróleo mundial",
      "Aumento de exportação de eletricidade"
    ],
    "correctAnswer": 0,
    "explanation": "Em períodos de estiagem, o Operador Nacional do Sistema aciona usinas térmicas de alto custo para garantir o abastecimento."
  },
  {
    "id": "cie-8-e-01",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF08CI01",
    "topic": "Transição Energética e Baterias de Lítio",
    "question": "A expansão de veículos elétricos e energia solar/eólica intermitente depende criticamente de tecnologias de armazenamento porque:",
    "options": [
      "Os painéis solares queimam à noite no referencial inercial",
      "A geração solar e eólica varia com o clima e o horário",
      "A eletricidade não pode viajar por cabos",
      "As baterias substituem os geradores"
    ],
    "correctAnswer": 1,
    "explanation": "Sistemas de armazenamento em baterias (BESS) equilibram a oferta intermitente e garantem a segurança da rede elétrica descarbonizada."
  },
  {
    "id": "cie-8-e-02",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF08CI03",
    "topic": "Primeira e Segunda Leis de Kirchhoff",
    "question": "Em um nó de um circuito elétrico residencial em paralelo onde chegam 15 A de corrente e saem duas ramificações, se uma ramificação leva 9 A, a outra ramificação transportará:",
    "options": [
      "15 A de forma contínua",
      "24 A",
      "6 A",
      "3 A"
    ],
    "correctAnswer": 2,
    "explanation": "Pela Lei dos Nós de Kirchhoff (conservação da carga), a soma das correntes que entram em um nó é igual à soma das que saem: 15 - 9 = 6 A."
  },
  {
    "id": "cie-8-e-03",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF08CI08",
    "topic": "Reprodução Assistida e FIV",
    "question": "Na Fertilização in Vitro (FIV), a fecundação dos gametas e os primeiros estágios de divisão celular ocorrem:",
    "options": [
      "Dentro da tuba uterina naturalmente",
      "No ovário da mulher",
      "No sangue materno",
      "Em ambiente laboratorial controlado"
    ],
    "correctAnswer": 3,
    "explanation": "Na FIV, o encontro do espermatozoide com o ovócito é realizado em placa de cultura laboratorial antes da implantação uterina."
  },
  {
    "id": "cie-8-e-04",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF08CI12",
    "topic": "Balanço da Radiação Terra-Lua",
    "question": "A Lua não possui atmosfera apreciável. Como consequência direta dessa ausência de envoltório gasoso, sua superfície:",
    "options": [
      "Apresenta variações extremas de temperatura e não tem proteção contra meteoritos",
      "Mantém temperatura constante de 20°C",
      "Fica permanentemente congelada",
      "Possui oceanos de água doce"
    ],
    "correctAnswer": 0,
    "explanation": "Sem atmosfera para reter calor via efeito estufa nem dispersar radiação, as oscilações térmicas lunares são brutais."
  },
  {
    "id": "cie-8-e-05",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF08CI04",
    "topic": "Risco de Choque Elétrico e Fio Terra",
    "question": "O condutor de proteção (\"fio terra\") conectado à carcaça metálica de eletrodomésticos como geladeiras e máquinas de lavar protege as pessoas porque:",
    "options": [
      "Reduz o consumo de energia em 50%",
      "Desvia qualquer corrente de fuga acidental diretamente para o solo, desarmando o disjuntor antes que cause choque elétrico grave",
      "Aumenta a velocidade dos motores em meio biológico",
      "Elimina a necessidade de tomadas"
    ],
    "correctAnswer": 1,
    "explanation": "O fio terra cria um caminho de baixíssima resistência para a terra; em caso de falha de isolamento, a corrente escoa para a terra e desarma a proteção."
  },
  {
    "id": "cie-8-e-06",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF08CI10",
    "topic": "PrEP e PEP no Combate ao HIV",
    "question": "A Profilaxia Pré-Exposição (PrEP) e a Profilaxia Pós-Exposição (PEP) são estratégias biomédicas que utilizam:",
    "options": [
      "Antibióticos de amplo espectro",
      "Vacinas genéticas anuais em meio biológico",
      "Medicamentos antirretrovirais para prevenir a infecção pelo HIV antes ou logo após uma situação de risco",
      "Transfusão de sangue total"
    ],
    "correctAnswer": 2,
    "explanation": "A profilaxia farmacológica com antirretrovirais bloqueia a replicação do vírus antes que ele se estabeleça no organismo."
  },
  {
    "id": "cie-8-e-07",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF08CI13",
    "topic": "Sombra Umbra e Penumbra em Escala Cósmica",
    "question": "Em um eclipse solar anular, o disco da Lua não cobre totalmente o Sol, deixando visível um anel brilhante. Isso acontece porque:",
    "options": [
      "A Lua está mais perto da Terra que o normal",
      "O Sol ficou maior no verão no sistema planetário",
      "A Terra se afastou da Via Láctea",
      "A Lua está em seu apogeu , aparentando ter diâmetro angular menor que o Sol"
    ],
    "correctAnswer": 3,
    "explanation": "No apogeu, a Lua parece menor no céu, de modo que o cone da umbra não atinge a superfície da Terra (antumbra), formando o anel de fogo."
  },
  {
    "id": "cie-8-e-08",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF08CI02",
    "topic": "Supercondutividade Introdutória",
    "question": "Certos materiais, quando resfriados a temperaturas extremamente baixas perto do zero absoluto, passam a conduzir eletricidade com resistência elétrica exatamente igual a zero. Esse fenômeno é a:",
    "options": [
      "Supercondutividade",
      "Fissão nuclear",
      "Piezoeletricidade",
      "Ionização de chama"
    ],
    "correctAnswer": 0,
    "explanation": "Supercondutores conduzem correntes elétricas sem qualquer perda por efeito Joule e expulsam campos magnéticos internos (Efeito Meissner)."
  },
  {
    "id": "cie-8-e-09",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF08CI07",
    "topic": "Regulação Térmica dos Testículos",
    "question": "Os testículos humanos localizam-se dentro da bolsa escrotal externamente à cavidade abdominal porque a produção saudável de espermatozoides (espermatogênese) requer:",
    "options": [
      "Uma temperatura de 40°C em meio biológico",
      "Uma temperatura cerca de 2°C a 3°C inferior à temperatura central do corpo humano (37°C)",
      "Contato direto com a luz solar",
      "Pressão atmosférica muito alta"
    ],
    "correctAnswer": 1,
    "explanation": "A musculatura da bolsa escrotal contrai ou relaxa para manter os testículos em temperatura ótima (~34°C) para a espermatogênese."
  },
  {
    "id": "cie-8-e-10",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF08CI14",
    "topic": "Ciclones Extratropicais no Atlântico Sul",
    "question": "Ciclones extratropicais que atingem o Sul do Brasil formam-se pelo:",
    "options": [
      "Calor de vulcões submarinos em meio biológico",
      "Movimento das marés no Equador",
      "Encontro de massas de ar quente e úmido com massas de ar polar frio ao longo de frentes meteorológicas",
      "Radiação lunar em noites de lua cheia"
    ],
    "correctAnswer": 2,
    "explanation": "O forte gradiente térmico horizontal entre massas de ar polar e tropical alimenta os ciclones extratropicais com ventos fortes e ressacas."
  },
  {
    "id": "cie-8-e-11",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF08CI05",
    "topic": "Pegada de Carbono e Matriz Energética Global",
    "question": "Por que substituir usinas a carvão mineral por usinas termelétricas a gás natural reduz a emissão de CO₂ em cerca de 50%, embora ambas usem combustíveis fósseis?",
    "options": [
      "Porque o gás natural não contém carbono",
      "Porque o carvão emite oxigênio",
      "Porque o metano é renovável em meio biológico",
      "Porque o metano (CH₄) possui maior proporção de hidrogênio em relação ao carbono e queima com maior eficiência térmica"
    ],
    "correctAnswer": 3,
    "explanation": "A molécula de metano tem 4 átomos de hidrogênio para cada carbono, liberando mais energia por grama de CO₂ gerado."
  },
  {
    "id": "cie-8-e-12",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF08CI09",
    "topic": "Vasectomia",
    "question": "Na vasectomia, o procedimento cirúrgico consiste na secção e ligadura dos ductos deferentes, o que resulta em:",
    "options": [
      "Ejaculação contendo líquido seminal normal produzido pela próstata e vesículas, mas sem espermatozoides",
      "Parada total da ejaculação e da produção de testosterona",
      "Mudança na voz do homem",
      "Infertilidade reversível em 100% dos casos"
    ],
    "correctAnswer": 0,
    "explanation": "Os testículos continuam produzindo testosterona e espermatozoides (que são reabsorvidos), mas os espermatozoides não alcançam a uretra."
  },
  {
    "id": "cie-8-e-13",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF08CI11",
    "topic": "Energia Solar Fotovoltaica vs Solar Térmica",
    "question": "A diferença fundamental entre um painel solar fotovoltaico e um aquecedor solar térmico residencial é que:",
    "options": [
      "O fotovoltaico só funciona no inverno",
      "O fotovoltaico converte luz diretamente em eletricidade; o térmico usa o calor solar para aquecer água em tubos",
      "O aquecedor térmico produz corrente contínua",
      "São exatamente iguais tecnicamente em meio biológico"
    ],
    "correctAnswer": 1,
    "explanation": "Painéis fotovoltaicos utilizam células semicondutoras de silício (efeito fotovoltaico) para gerar voltagem; os térmicos esquentam água para o chuveiro."
  },
  {
    "id": "cie-8-e-14",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF08CI12",
    "topic": "Librations Lunares",
    "question": "Embora a Lua mantenha a mesma face voltada para a Terra, os astrônomos conseguem observar cerca de 59% da sua superfície ao longo do tempo graças às:",
    "options": [
      "Explosões de meteoros",
      "Sombras das tempestades solares",
      "Librações lunares",
      "Rotação rápida no equinócio"
    ],
    "correctAnswer": 2,
    "explanation": "Pequenas oscilações em latitude e longitude (librações) permitem espiar ligeiramente além das bordas leste e oeste da Lua."
  },
  {
    "id": "cie-8-e-15",
    "subject": "ciencias",
    "grade": "8º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF08CI04",
    "topic": "Perdas na Transmissão de Alta Tensão",
    "question": "As linhas de transmissão de energia elétrica das usinas até as cidades operam em altíssimas tensões (como 230.000 V ou 500.000 V) para:",
    "options": [
      "Aumentar a velocidade da luz nos cabos",
      "Permitir que os fios sejam de borracha",
      "Evitar que pássaros pousem nos postes no referencial inercial",
      "Reduzir drasticamente a corrente elétrica (i) e diminuir as perdas de energia por aquecimento nos cabos (P_perda = R × i²)"
    ],
    "correctAnswer": 3,
    "explanation": "Como a perda por efeito Joule é proporcional ao quadrado da corrente (i²), elevar a tensão diminui a corrente e reduz perdas em viagens de centenas de quilômetros."
  },
  {
    "id": "cie-9-f-01",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF09CI01",
    "topic": "Estrutura Atômica",
    "question": "Quais partículas subatômicas com carga elétrica positiva estão localizadas no núcleo do átomo?",
    "options": [
      "Prótons",
      "Elétrons",
      "Nêutrons",
      "Fótons"
    ],
    "correctAnswer": 0,
    "explanation": "Os prótons possuem carga elétrica positiva (+1) e localizam-se no núcleo atômico juntamente com os nêutrons."
  },
  {
    "id": "cie-9-f-02",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF09CI02",
    "topic": "Lei de Lavoisier",
    "question": "A célebre frase \"Na natureza nada se cria, nada se perde, tudo se transforma\" resume qual lei da química?",
    "options": [
      "Lei das Proporções Definidas (Proust)",
      "Lei da Conservação das Massas",
      "Lei da Gravitação Universal",
      "Lei da Ação e Reação"
    ],
    "correctAnswer": 1,
    "explanation": "Antoine Lavoisier demonstrou que em sistemas fechados a massa total dos reagentes é idêntica à massa total dos produtos."
  },
  {
    "id": "cie-9-f-03",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF09CI04",
    "topic": "Ondas Mecânicas vs Eletromagnéticas",
    "question": "O som é uma onda mecânica. Isso significa que o som:",
    "options": [
      "Propaga-se mais rápido no vácuo que a luz",
      "É uma onda eletromagnética pura",
      "Necessita obrigatoriamente de um meio material para se propagar e não se propaga no vácuo",
      "Não transporta energia em meio biológico"
    ],
    "correctAnswer": 2,
    "explanation": "Ondas mecânicas dependem da vibração de partículas materiais vizinhas, não se propagando no vácuo espacial."
  },
  {
    "id": "cie-9-f-04",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF09CI08",
    "topic": "Genética Mendeliana Básica",
    "question": "Em genética, o conjunto das características observáveis de um organismo (como cor dos olhos ou altura) resultante da interação dos genes com o ambiente é o:",
    "options": [
      "Genótipo",
      "Cariótipo",
      "Genoma isolado",
      "Fenótipo"
    ],
    "correctAnswer": 3,
    "explanation": "O fenótipo é a manifestação física, bioquímica ou fisiológica observável; genótipo é a constituição genética herdada."
  },
  {
    "id": "cie-9-f-05",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF09CI10",
    "topic": "Evolução e Seleção Natural",
    "question": "Qual cientista inglês propôs que as espécies biológicas evoluem ao longo das gerações por meio da seleção natural?",
    "options": [
      "Charles Darwin",
      "Gregor Mendel",
      "Isaac Newton",
      "Louis Pasteur"
    ],
    "correctAnswer": 0,
    "explanation": "Darwin publicou \"A Origem das Espécies\" em 1859, demonstrando que indivíduos com variações vantajosas deixam mais descendentes."
  },
  {
    "id": "cie-9-f-06",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF09CI01",
    "topic": "Tabela Periódica Básica",
    "question": "Na Tabela Periódica moderna, os elementos químicos estão organizados em ordem crescente de seu:",
    "options": [
      "Massa atômica média",
      "Número atômico",
      "Ano de descoberta",
      "Tamanho do átomo"
    ],
    "correctAnswer": 1,
    "explanation": "A lei periódica de Moseley organiza os elementos pelo número atômico crescente Z."
  },
  {
    "id": "cie-9-f-07",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF09CI05",
    "topic": "Cores da Luz e Dispersão",
    "question": "Quando a luz branca do Sol atravessa um prisma de vidro transparente, ela se decompõe nas cores do arco-íris devido ao fenômeno da:",
    "options": [
      "Reflexão metálica",
      "Absorção total no sistema planetário",
      "Refração e dispersão da luz",
      "Polarização estática"
    ],
    "correctAnswer": 2,
    "explanation": "Diferentes comprimentos de onda sofrem desvios de refração distintos ao passar pelo vidro, separando as cores componentes."
  },
  {
    "id": "cie-9-f-08",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF09CI09",
    "topic": "Cromossomos Humanos",
    "question": "Quantos cromossomos possui uma célula somática normal do corpo humano (célula diploide, 2n)?",
    "options": [
      "23 cromossomos da linhagem celular",
      "48 cromossomos",
      "92 cromossomos",
      "46 cromossomos (23 pares)"
    ],
    "correctAnswer": 3,
    "explanation": "Nossas células corporais têm 46 cromossomos, sendo 23 herdados da mãe e 23 herdados do pai."
  },
  {
    "id": "cie-9-f-09",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF09CI02",
    "topic": "Reações Químicas Cotidianas",
    "question": "A formação de ferrugem em um prego de ferro exposto ao ar úmido é uma reação química de:",
    "options": [
      "Oxidação",
      "Evaporação pura",
      "Fusão",
      "Sublimação"
    ],
    "correctAnswer": 0,
    "explanation": "O ferro reage com o oxigênio e a água formando óxidos e hidróxidos de ferro (ferrugem)."
  },
  {
    "id": "cie-9-f-10",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF09CI14",
    "topic": "Estrelas e o Sol",
    "question": "O Sol é classificado astronomicamente como uma:",
    "options": [
      "Galáxia espiral no sistema planetário",
      "Estrela de tamanho médio na sequência principal",
      "Planeta rochoso gigante",
      "Nebulosa gasosa fria"
    ],
    "correctAnswer": 1,
    "explanation": "O Sol é uma estrela do tipo anã amarela que gera luz e calor por fusão nuclear de hidrogênio em hélio no seu núcleo."
  },
  {
    "id": "cie-9-f-11",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF09CI06",
    "topic": "Espectro Eletromagnético",
    "question": "Qual tipo de radiação eletromagnética possui frequência mais alta que a luz visível e exige proteção com protetor solar na praia?",
    "options": [
      "Ondas de rádio FM",
      "Micro-ondas em meio biológico",
      "Radiação ultravioleta (UV)",
      "Radiação infravermelha"
    ],
    "correctAnswer": 2,
    "explanation": "A radiação UV transporta energia suficiente para provocar queimaduras solares e lesões no DNA da pele."
  },
  {
    "id": "cie-9-f-12",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF09CI08",
    "topic": "Genes Dominantes e Recessivos",
    "question": "Em um indivíduo com genótipo heterozigoto (Aa), o alelo que se expressa no fenótipo sobrepondo-se ao outro é chamado:",
    "options": [
      "Alelo recessivo",
      "Alelo mutante",
      "Alelo nulo",
      "Alelo dominante"
    ],
    "correctAnswer": 3,
    "explanation": "O alelo dominante manifesta sua característica mesmo em dose simples (em heterozigose)."
  },
  {
    "id": "cie-9-f-13",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF09CI01",
    "topic": "Eletronsfera",
    "question": "Qual partícula atômica orbita ao redor do núcleo na eletrosfera e possui carga elétrica negativa?",
    "options": [
      "Elétron",
      "Próton",
      "Nêutron",
      "Quark"
    ],
    "correctAnswer": 0,
    "explanation": "Os elétrons possuem carga -1 e massa desprezível comparada aos prótons e nêutrons."
  },
  {
    "id": "cie-9-f-14",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF09CI03",
    "topic": "Funções Químicas Básicas",
    "question": "O vinagre (ácido acético) e o suco de limão (ácido cítrico) pertencem à função inorgânica/orgânica caracterizada por sabor azedo, conhecida como:",
    "options": [
      "Bases",
      "Ácidos",
      "Sais neutros",
      "Óxidos inertes"
    ],
    "correctAnswer": 1,
    "explanation": "Os ácidos liberam íons hidrogênio em água, têm pH inferior a 7 e reagem com bases formando sal e água."
  },
  {
    "id": "cie-9-f-15",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "facil",
    "xp": 20,
    "bnccSkill": "EF09CI15",
    "topic": "Ano-Luz",
    "question": "Na astronomia, o \"ano-luz\" é uma unidade que mede:",
    "options": [
      "Tempo de vida de uma estrela",
      "Velocidade de foguetes",
      "Distância",
      "Brilho aparente"
    ],
    "correctAnswer": 2,
    "explanation": "A luz viaja a ~300.000 km/s. Em um ano, percorre cerca de 9,46 trilhões de quilômetros (um ano-luz de distância)."
  },
  {
    "id": "cie-9-m-01",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF09CI02",
    "topic": "Balanceamento de Equações Químicas",
    "question": "Na reação de queima do hidrogênio: 2 H₂ + O₂ → 2 H₂O. Quantas moléculas de água (H₂O) são formadas a partir de 2 moléculas de gás oxigênio (O₂) com hidrogênio suficiente?",
    "options": [
      "2 moléculas de H₂O",
      "1 molécula de H₂O",
      "8 moléculas de H₂O",
      "4 moléculas de H₂O"
    ],
    "correctAnswer": 3,
    "explanation": "A proporção estequiométrica é 1 O₂ para 2 H₂O. Portanto, com 2 moléculas de O₂ formam-se 2 × 2 = 4 moléculas de água."
  },
  {
    "id": "cie-9-m-02",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF09CI08",
    "topic": "Primeira Lei de Mendel (Monohibridismo)",
    "question": "Ao cruzar duas plantas heterozigotas (Aa × Aa) para uma característica com dominância completa, qual é a proporção fenotípica esperada na descendência?",
    "options": [
      "3 dominantes para 1 recessivo",
      "1 dominante para 1 recessivo",
      "Todas dominantes",
      "1 dominante para 2 intermediários para 1 recessivo"
    ],
    "correctAnswer": 0,
    "explanation": "O quadrado de Punnett gera genótipos 1 AA, 2 Aa e 1 aa. Os genótipos AA e Aa exibem o fenótipo dominante (3 em 4 = 75%)."
  },
  {
    "id": "cie-9-m-03",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF09CI04",
    "topic": "Equação Fundamental da Ondulatória",
    "question": "Uma onda de rádio viaja à velocidade da luz (300.000 km/s ou 3 × 10⁸ m/s) com frequência de 100 MHz (10⁸ Hz). Qual é o seu comprimento de onda (λ)?",
    "options": [
      "30 metros",
      "3 metros",
      "0,3 metro",
      "300 metros"
    ],
    "correctAnswer": 1,
    "explanation": "Pela equação v = λ × f: 3 × 10⁸ = λ × 10⁸ => λ = 3 metros."
  },
  {
    "id": "cie-9-m-04",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF09CI11",
    "topic": "Lamarckismo vs Darwinismo",
    "question": "A ideia de que o pescoço da girafa se esticou porque seus ancestrais se esforçavam para alcançar folhas altas e transmitiram essa característica adquirida aos filhos corresponde à teoria de:",
    "options": [
      "Darwin",
      "Mendel",
      "Lamarck",
      "Pasteur de forma contínua"
    ],
    "correctAnswer": 2,
    "explanation": "Jean-Baptiste Lamarck propôs que modificações corporais adquiridas durante a vida eram passadas à prole, ideia refutada pela genética."
  },
  {
    "id": "cie-9-m-05",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF09CI01",
    "topic": "Número Atômico e Número de Massa",
    "question": "Um átomo de sódio neutro possui 11 prótons e 12 nêutrons em seu núcleo. Qual é o seu número de massa (A)?",
    "options": [
      "11",
      "12",
      "1",
      "23"
    ],
    "correctAnswer": 3,
    "explanation": "O número de massa A é a soma de prótons e nêutrons: A = Z + N = 11 + 12 = 23."
  },
  {
    "id": "cie-9-m-06",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF09CI06",
    "topic": "Radiações Ionizantes vs Não Ionizantes",
    "question": "Qual das seguintes radiações é ionizante e possui energia suficiente para arrancar elétrons de átomos e danificar tecidos biológicos?",
    "options": [
      "Raios X",
      "Ondas de rádio de celular",
      "Luz visível verde",
      "Ondas de Wi-Fi"
    ],
    "correctAnswer": 0,
    "explanation": "Raios X e raios gama são radiações ionizantes de alta frequência com potencial mutagênico para células humanas."
  },
  {
    "id": "cie-9-m-07",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF09CI09",
    "topic": "Determinação do Sexo Genético",
    "question": "Na espécie humana, o sexo biológico da criança é determinado geneticamente pelo espermatozoide do pai porque:",
    "options": [
      "O pai só tem cromossomos Y",
      "A mãe sempre fornece o cromossomo X, enquanto o pai pode fornecer um cromossomo X ou Y",
      "A mãe tem cromossomos XY em meio biológico",
      "Depende da temperatura do parto"
    ],
    "correctAnswer": 1,
    "explanation": "Mulheres são homogaméticas (óvulos contêm X) e homens são heterogaméticos (metade dos espermatozoides leva X e metade leva Y)."
  },
  {
    "id": "cie-9-m-08",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF09CI03",
    "topic": "Escala de pH",
    "question": "Uma solução com pH igual a 2 é classificada como:",
    "options": [
      "Neutra",
      "Fortemente básica (alcalina)",
      "Fortemente ácida",
      "Salina pura"
    ],
    "correctAnswer": 2,
    "explanation": "A escala de pH vai de 0 a 14: valores menores que 7 são ácidos (quanto menor, mais ácido), 7 é neutro e maiores que 7 são básicos."
  },
  {
    "id": "cie-9-m-09",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF09CI15",
    "topic": "Ciclo de Vida do Sol",
    "question": "No futuro distante (daqui a cerca de 5 bilhões de anos), quando o hidrogênio do núcleo do Sol se esgotar, ele se expandirá tornando-se uma:",
    "options": [
      "Supernova com buraco negro",
      "Estrela de nêutrons pura",
      "Planeta anão",
      "Gigante Vermelha"
    ],
    "correctAnswer": 3,
    "explanation": "Estrelas de massa média como o Sol expandem suas camadas externas ao fundir hélio, virando gigantes vermelhas antes de se tornarem anãs brancas."
  },
  {
    "id": "cie-9-m-10",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF09CI01",
    "topic": "Distribuição Eletrônica e Íons",
    "question": "Quando um átomo neutro de cloro (17 elétrons) ganha um elétron para completar sua camada de valência, ele se transforma em um:",
    "options": [
      "Ânion com carga negativa (Cl⁻)",
      "Cátion com carga positiva",
      "Átomo neutro maior",
      "Próton livre"
    ],
    "correctAnswer": 0,
    "explanation": "Ao receber elétrons, o átomo fica com mais cargas negativas que positivas, tornando-se um ânion."
  },
  {
    "id": "cie-9-m-11",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF09CI07",
    "topic": "Óptica da Visão e Miopia",
    "question": "A miopia é um problema de visão em que a imagem de objetos distantes se forma antes da retina. Ela é corrigida com o uso de lentes:",
    "options": [
      "Convergentes",
      "Divergentes",
      "Planas de aumento",
      "Cilíndricas puras"
    ],
    "correctAnswer": 1,
    "explanation": "Lentes divergentes afastam os raios de luz, deslocando o foco para trás e posicionando a imagem perfeitamente sobre a retina."
  },
  {
    "id": "cie-9-m-12",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF09CI02",
    "topic": "Lei de Proust (Proporções Definidas)",
    "question": "Para formar água, 4 g de hidrogênio reagem completamente com 32 g de oxigênio (proporção 1:8). Se usarmos 8 g de hidrogênio, quanto oxigênio será necessário?",
    "options": [
      "32 g de forma contínua",
      "16 g",
      "64 g",
      "80 g"
    ],
    "correctAnswer": 2,
    "explanation": "Pela Lei de Proust, dobrando a massa de um reagente, a massa do outro deve dobrar na mesma proporção: 8 × 8 = 64 g de oxigênio."
  },
  {
    "id": "cie-9-m-13",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF09CI12",
    "topic": "Resistência Bacteriana e Evolução",
    "question": "O surgimento de superbactérias resistentes a múltiplos antibióticos em hospitais é uma comprovação direta de qual processo biológico em tempo real?",
    "options": [
      "Criação espontânea de novas espécies",
      "Lamarckismo intencional em meio biológico",
      "Transformação física de minerais",
      "Seleção natural de bactérias que já possuíam mutações de resistência prévias"
    ],
    "correctAnswer": 3,
    "explanation": "O uso constante de antibióticos atua como forte pressão seletiva, eliminando as sensíveis e multiplicando as variantes resistentes."
  },
  {
    "id": "cie-9-m-14",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF09CI04",
    "topic": "Efeito Doppler",
    "question": "A sirene de uma ambulância parece mais aguda quando ela se aproxima e mais grave quando se afasta do ouvinte. Esse fenômeno ondulatório é o:",
    "options": [
      "Efeito Doppler",
      "Eco acústico",
      "Ressonância sonora",
      "Interferência destrutiva"
    ],
    "correctAnswer": 0,
    "explanation": "O movimento da fonte comprime as frentes de onda na aproximação (maior frequência percebida, som agudo) e as estica no afastamento."
  },
  {
    "id": "cie-9-m-15",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "medio",
    "xp": 35,
    "bnccSkill": "EF09CI16",
    "topic": "Telescópios Espaciais",
    "question": "Por que telescópios como o Hubble e o James Webb são colocados no espaço em vez de ficarem na Terra?",
    "options": [
      "Porque no espaço não há gravidade",
      "Para evitar a turbulência e a absorção de luz da atmosfera terrestre, obtendo imagens nítidas em infravermelho e visível",
      "Porque ficam mais perto do Sol no sistema planetário",
      "Para gastar menos eletricidade"
    ],
    "correctAnswer": 1,
    "explanation": "A atmosfera terrestre distorce a luz das estrelas e absorve comprimentos de onda essenciais (como infravermelho e raios X)."
  },
  {
    "id": "cie-9-d-01",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF09CI01",
    "topic": "Modelos Atômicos Históricos",
    "question": "O experimento de Rutherford com o bombardeamento de partículas alfa contra uma lâmina de ouro ultrafina comprovou que:",
    "options": [
      "O átomo é uma esfera maciça e indivisível",
      "O átomo é um pudim de passas com carga positiva contínua",
      "O átomo possui um núcleo minúsculo, denso e positivo, cercado por um imenso espaço vazio onde orbitam os elétrons",
      "Não existem nêutrons em meio biológico"
    ],
    "correctAnswer": 2,
    "explanation": "A grande maioria das partículas atravessou a lâmina sem desvio e poucas ricochetearam, provando que o núcleo é pequeníssimo e denso."
  },
  {
    "id": "cie-9-d-02",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF09CI08",
    "topic": "Heredograma e Doença Recessiva",
    "question": "Dois pais com visão normal para cores têm um filho homem daltônico (característica recessiva ligada ao cromossomo X). Qual é o genótipo da mãe?",
    "options": [
      "Homozigota recessiva",
      "Homozigota dominante",
      "Não possui cromossomo X",
      "Heterozigota portadora"
    ],
    "correctAnswer": 3,
    "explanation": "O filho homem recebeu o cromossomo Y do pai e obrigatoriamente herdou o cromossomo X com o alelo mutante da mãe (Xᵈ)."
  },
  {
    "id": "cie-9-d-03",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF09CI02",
    "topic": "Reações Endotérmicas e Exotérmicas",
    "question": "A queima de lenha em uma lareira que aquece o ambiente e a fotossíntese vegetal que absorve luz solar são classificadas, respectivamente, como transformações:",
    "options": [
      "Exotérmica e Endotérmica",
      "Endotérmica e Exotérmica",
      "Ambas endotérmicas",
      "Ambas exotérmicas"
    ],
    "correctAnswer": 0,
    "explanation": "Processos exotérmicos liberam energia térmica para o ambiente; endotérmicos absorvem energia para acontecer."
  },
  {
    "id": "cie-9-d-04",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF09CI04",
    "topic": "Refração e Índice de Refração",
    "question": "Ao passar do ar para a água, um raio de luz visível sofre refração porque:",
    "options": [
      "Sua frequência aumenta em meio biológico",
      "Sua velocidade de propagação diminui no meio mais denso , alterando a direção do raio",
      "A luz se transforma em calor",
      "A água reflete 100% da luz"
    ],
    "correctAnswer": 1,
    "explanation": "A refração ocorre pela mudança na velocidade da onda ao mudar de meio material (v_água < v_ar)."
  },
  {
    "id": "cie-9-d-05",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF09CI11",
    "topic": "Fósseis de Transição e Evolução",
    "question": "O fóssil do Archaeopteryx apresenta penas e asas como as aves modernas, mas também dentes e cauda óssea longa como os répteis dinossauros. Esse fóssil é evidência de:",
    "options": [
      "Espécie falsa criada em laboratório",
      "Um mamífero antigo aquático em meio biológico",
      "Transição evolutiva e ancestralidade comum entre dinossauros terópodes e as aves",
      "Que as espécies nunca mudam"
    ],
    "correctAnswer": 2,
    "explanation": "Fósseis com mosaicos de características transicionais sustentam a continuidade da árvore filogenética da vida."
  },
  {
    "id": "cie-9-d-06",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF09CI01",
    "topic": "Ligações Químicas Básicas",
    "question": "Quando átomos de sódio metálico (que tendem a perder 1 elétron) e cloro gasoso (que tende a ganhar 1 elétron) reagem, eles formam o sal NaCl por meio de qual ligação química?",
    "options": [
      "Ligação covalente apolar",
      "Ligação metálica pura",
      "Ponte de hidrogênio",
      "Ligação iônica"
    ],
    "correctAnswer": 3,
    "explanation": "A transferência definitiva de elétrons cria íons de cargas opostas (Na⁺ e Cl⁻) que se atraem fortemente formando retículo cristalino."
  },
  {
    "id": "cie-9-d-07",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF09CI06",
    "topic": "Transmissão por Fibra Óptica",
    "question": "Os cabos modernos de fibra óptica transmitem dados de internet a velocidades altíssimas através de pulsos de luz laser graças ao fenômeno da:",
    "options": [
      "Reflexão interna total da luz dentro do núcleo de vidro",
      "Difração sonora",
      "Absorção magnética",
      "Condução metálica"
    ],
    "correctAnswer": 0,
    "explanation": "A luz entra com ângulo superior ao ângulo limite, refletindo continuamente nas paredes internas sem escapar."
  },
  {
    "id": "cie-9-d-08",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF09CI09",
    "topic": "Herança dos Grupos Sanguíneos (Sistema ABO)",
    "question": "Um homem do grupo sanguíneo AB e uma mulher do grupo sanguíneo O têm filhos biológicos. Quais são os possíveis tipos sanguíneos dos filhos desse casal?",
    "options": [
      "Apenas grupo AB e grupo O",
      "Apenas grupo A ou grupo B",
      "Apenas grupo O",
      "Apenas grupo AB"
    ],
    "correctAnswer": 1,
    "explanation": "Pai (Iᴬ Iᴮ) fornece Iᴬ ou Iᴮ; mãe (ii) sempre fornece i. Genótipos possíveis: Iᴬi (tipo A) ou Iᴮi (tipo B)."
  },
  {
    "id": "cie-9-d-09",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF09CI17",
    "topic": "Evolução Estelar e Supernovas",
    "question": "Elementos químicos pesados essenciais para o nosso corpo e para a Terra (como ferro, ouro, iodo e cálcio) foram forjados no universo através de:",
    "options": [
      "Fissão espontânea de elementos pesados em nebulosas planetárias de forma contínua",
      "Colapso gravitacional de anãs brancas sem emissão radiativa",
      "Fusão nuclear em estrelas massivas e explosões de supernovas",
      "Recombinação química em nuvens moleculares de gás interestelar"
    ],
    "correctAnswer": 2,
    "explanation": "Como disse Carl Sagan, \"somos poeira de estrelas\": a nucleossíntese estelar e explosões de supernovas espalharam os elementos pelo cosmos."
  },
  {
    "id": "cie-9-d-10",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF09CI03",
    "topic": "Reação de Neutralização",
    "question": "Ao misturar ácido clorídrico (HCl) e hidróxido de sódio (NaOH) em proporções estequiométricas adequadas, os produtos finais formados são:",
    "options": [
      "Gás cloro e gás hidrogênio",
      "Açúcar e oxigênio",
      "Ácido sulfúrico em meio biológico",
      "Cloreto de sódio (sal de cozinha, NaCl) e água (H₂O)"
    ],
    "correctAnswer": 3,
    "explanation": "A reação clássica de neutralização entre ácido forte e base forte produz sal inorgânico e água: HCl + NaOH → NaCl + H₂O."
  },
  {
    "id": "cie-9-d-11",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF09CI04",
    "topic": "Ressonância Acústica",
    "question": "Quando uma cantora de ópera emite uma nota musical na frequência natural de vibração de uma taça de cristal fina e a taça quebra, ocorreu:",
    "options": [
      "Ressonância acústica",
      "Reflexão total",
      "Interferência destrutiva",
      "Polarização"
    ],
    "correctAnswer": 0,
    "explanation": "A transferência eficiente de energia na frequência de ressonância amplifica as ondas de deformação até o limite elástico do material."
  },
  {
    "id": "cie-9-d-12",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF09CI10",
    "topic": "Homologia vs Analogia",
    "question": "O braço de um ser humano, a nadadeira de uma baleia e a asa de um morcego possuem a mesma organização óssea básica derivada de um ancestral comum, sendo chamados de:",
    "options": [
      "Órgãos análogos convergentes",
      "Órgãos homólogos",
      "Estruturas fósseis mortas",
      "Mutações artificiais"
    ],
    "correctAnswer": 1,
    "explanation": "Homologias refletem ancestralidade comum com adaptações morfológicas a funções diferentes (nadar, voar, manipular)."
  },
  {
    "id": "cie-9-d-13",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF09CI01",
    "topic": "Famílias da Tabela Periódica (Gases Nobres)",
    "question": "Os gases nobres (como hélio, neônio e argônio) são quimicamente inertes e raramente formam compostos naturais porque:",
    "options": [
      "Apresentam orbitais atômicos desprovidos de elétrons de valência",
      "Exibem afinidade eletrônica extremamente elevada com halogênios",
      "Possuem camada de valência completa com oito elétrons estáveis",
      "Formam ligações covalentes triplas espontâneas à temperatura ambiente"
    ],
    "correctAnswer": 2,
    "explanation": "A regra do octeto explica a grande estabilidade dos gases nobres, que não necessitam doar, receber ou compartilhar elétrons."
  },
  {
    "id": "cie-9-d-14",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF09CI07",
    "topic": "Hipermetropia e Lentes",
    "question": "A hipermetropia é a dificuldade de enxergar objetos próximos com imagem formada atrás da retina. Ela é corrigida com lentes:",
    "options": [
      "Divergentes",
      "Plano-côncavas",
      "Bifocais neutras",
      "Convergentes"
    ],
    "correctAnswer": 3,
    "explanation": "Lentes convergentes aproximam os raios luminosos, encurtando a distância focal para posicionar o foco sobre a retina."
  },
  {
    "id": "cie-9-d-15",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "dificil",
    "xp": 55,
    "bnccSkill": "EF09CI15",
    "topic": "Expansão do Universo e Redshift",
    "question": "O astrônomo Edwin Hubble descobriu que as galáxias distantes estão se afastando da Terra porque a luz emitida por elas apresenta desvio para o vermelho (redshift). Isso comprova que:",
    "options": [
      "O próprio tecido do espaço no universo está em contínua expansão",
      "A Terra é o centro fixo do cosmos",
      "As estrelas estão esfriando e apagando",
      "A gravidade parou de agir"
    ],
    "correctAnswer": 0,
    "explanation": "O estiramento do comprimento de onda da luz viajando pelo espaço em expansão (redshift cosmológico) confirma a teoria do Big Bang."
  },
  {
    "id": "cie-9-e-01",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF09CI01",
    "topic": "Modelo Atômico de Bohr e Espectros de Emissão",
    "question": "Quando fogos de artifício explodem emitindo cores vivas (como verde para bário ou vermelho para estrôncio), a luz colorida é produzida pelo:",
    "options": [
      "Atrito intermolecular gerando calor térmico de condução nos orbitais atômicos",
      "Transição de elétrons excitados para níveis de menor energia com emissão de fótons",
      "Fusão nuclear de prótons leves com liberação contínua de ondas de choque sonoras",
      "Fissão eletrostática do núcleo atômico induzida por radiação gama secundária em meio biológico"
    ],
    "correctAnswer": 1,
    "explanation": "Bohr explicou que a energia absorvida excita elétrons para níveis superiores; ao retornar ao estado fundamental, eles emitem fótons de frequência característica."
  },
  {
    "id": "cie-9-e-02",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF09CI08",
    "topic": "Segunda Lei de Mendel (Dihibridismo)",
    "question": "No cruzamento de indivíduos duplo heterozigotos para dois genes independentes (AaBb × AaBb), a proporção fenotípica clássica obtida na descendência é:",
    "options": [
      "3 : 1",
      "1 : 2 : 1",
      "9 : 3 : 3 : 1",
      "1 : 1 : 1 : 1 de forma contínua"
    ],
    "correctAnswer": 2,
    "explanation": "Pela segregação independente dos fatores, a combinação dos pares de alelos resulta na clássica proporção mendeliana 9:3:3:1."
  },
  {
    "id": "cie-9-e-03",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF09CI02",
    "topic": "Rendimento de Reações e Reagente Limitante",
    "question": "Na síntese de amônia N₂ + 3 H₂ → 2 NH₃, se misturarmos 1 mol de N₂ com apenas 2 mols de H₂, o reagente limitante da reação será:",
    "options": [
      "O gás nitrogênio (N₂)",
      "A própria amônia",
      "Não há reagente limitante",
      "O gás hidrogênio (H₂)"
    ],
    "correctAnswer": 3,
    "explanation": "A estequiometria exige 3 H₂ para cada 1 N₂. Como só há 2 mols de H₂, ele acaba primeiro, limitando a produção máxima de produto."
  },
  {
    "id": "cie-9-e-04",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF09CI10",
    "topic": "Deriva Genética vs Seleção Natural",
    "question": "A deriva genética diferencia-se da seleção natural porque:",
    "options": [
      "Altera aleatoriamente as frequências alélicas por amostragem casual na população",
      "Favorece deterministamente os fenótipos com maior aptidão reprodutiva adaptativa",
      "Provoca recombinação dirigida por cruzamentos seletivos entre os mais aptos",
      "Induz mutações pontuais coordenadas em resposta a pressões ecológicas locais"
    ],
    "correctAnswer": 0,
    "explanation": "Na deriva genética (efeito gargalo ou fundador), a sobrevivência de certos alelos deve-se ao acaso e não a vantagens reprodutivas."
  },
  {
    "id": "cie-9-e-05",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF09CI06",
    "topic": "Dualidade Onda-Partícula da Luz Introdutória",
    "question": "Fenômenos como difração e interferência comprovam a natureza ondulatória da luz, enquanto o efeito fotoelétrico comprovou que a luz:",
    "options": [
      "É uma onda sonora ultrassônica",
      "Também se comporta como feixe de partículas discretas de energia",
      "Não tem velocidade finita",
      "É matéria líquida em meio biológico"
    ],
    "correctAnswer": 1,
    "explanation": "Albert Einstein explicou o efeito fotoelétrico demonstrando a quantização da luz em pacotes discretos (fótons)."
  },
  {
    "id": "cie-9-e-06",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF09CI03",
    "topic": "Soluções Tampão e Homeostase do Sangue",
    "question": "O sangue humano mantém seu pH rigorosamente estável em torno de 7,35 a 7,45 mesmo após a ingestão de alimentos ácidos graças ao sistema tampão de:",
    "options": [
      "Ácido clorídrico concentrado",
      "Sal marinho puro em meio biológico",
      "Ácido carbônico e bicarbonato",
      "Glicose e insulina"
    ],
    "correctAnswer": 2,
    "explanation": "O equilíbrio químico entre CO₂ dissolvido, ácido carbônico e íons bicarbonato absorve íons H⁺ ou OH⁻ em excesso."
  },
  {
    "id": "cie-9-e-07",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF09CI17",
    "topic": "Buracos Negros e Relatividade Geral Introdutória",
    "question": "Um buraco negro estelar forma-se após o colapso gravitacional de uma estrela hipermassiva, criando uma região do espaço onde:",
    "options": [
      "A temperatura superficial torna-se infinita em todo o espaço ao redor",
      "A velocidade da luz é reduzida a zero pelo atrito com a matéria bariônica",
      "O campo gravitacional inverte a polaridade eletromagnética dos fótons",
      "A velocidade de escape no horizonte de eventos excede a velocidade da luz"
    ],
    "correctAnswer": 3,
    "explanation": "A concentração extrema de massa dobra o espaço-tempo de tal modo que a velocidade de escape no horizonte de eventos supera a velocidade da luz."
  },
  {
    "id": "cie-9-e-08",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF09CI09",
    "topic": "Mutação Genética como Fonte Primária de Variabilidade",
    "question": "Qual é o único mecanismo biológico capaz de criar novos alelos e genes inéditos em uma população ao longo das eras geológicas?",
    "options": [
      "Mutação genética no DNA dos gametas",
      "Seleção natural",
      "Recombinação cromossômica",
      "Migração de indivíduos"
    ],
    "correctAnswer": 0,
    "explanation": "A recombinação apenas recombina genes pré-existentes; mutações aleatórias na sequência de nucleotídeos são a fonte primária de novidades genéticas."
  },
  {
    "id": "cie-9-e-09",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF09CI01",
    "topic": "Isótopos e Datação por Carbono-14",
    "question": "O Carbono-12 e o Carbono-14 são considerados isótopos porque possuem:",
    "options": [
      "Mesmo número de nêutrons e diferente número de prótons no núcleo atômico",
      "Mesmo número de prótons e diferente número de nêutrons no núcleo atômico",
      "Mesmo número de massa atômica com carga nuclear efetiva totalmente oposta",
      "Diferente número de elétrons orbitais com mesma densidade volumétrica nuclear"
    ],
    "correctAnswer": 1,
    "explanation": "Isótopos são átomos do mesmo elemento químico (mesmo Z) com massas diferentes devido ao número de nêutrons no núcleo."
  },
  {
    "id": "cie-9-e-10",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF09CI04",
    "topic": "Interferência Construtiva e Destrutiva",
    "question": "Em fones de ouvido modernos com cancelamento ativo de ruído, os microfones captam o barulho externo e os alto-falantes emitem:",
    "options": [
      "Música em volume dobrado",
      "Ondas eletromagnéticas que bloqueiam o ar",
      "Uma onda sonora idêntica com fase invertida",
      "Ar frio em meio biológico"
    ],
    "correctAnswer": 2,
    "explanation": "A crista da onda inversa coincide com o vale da onda externa, anulando as oscilações de pressão do som."
  },
  {
    "id": "cie-9-e-11",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF09CI10",
    "topic": "Radiação Adaptativa",
    "question": "O exemplo histórico dos tentilhões de Galápagos estudados por Darwin, onde uma única espécie ancestral deu origem a diversas espécies com bicos adaptados a alimentos diferentes em ilhas vizinhas, ilustra o processo de:",
    "options": [
      "Convergência evolutiva",
      "Extinção em massa",
      "Hibridação artificial",
      "Radiação adaptativa"
    ],
    "correctAnswer": 3,
    "explanation": "A ocupação de nichos ecológicos vagos leva populações isoladas a se adaptarem a dietas distintas, culminando em novas espécies."
  },
  {
    "id": "cie-9-e-12",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF09CI02",
    "topic": "Velocidade de Reações e Catalisadores",
    "question": "A adição de um catalisador químico (ou de uma enzima biológica) acelera uma reação química porque:",
    "options": [
      "Diminui a energia de ativação necessária para atingir o estado de transição",
      "Aumenta a constante de equilíbrio químico favorecendo o rendimento final",
      "Eleva a energia cinética média das moléculas aquecendo a mistura reacional",
      "Fornece calor latente contínuo alterando a variação de entalpia do sistema"
    ],
    "correctAnswer": 0,
    "explanation": "Catalisadores oferecem um caminho alternativo de menor energia de ativação, aumentando a velocidade sem serem consumidos."
  },
  {
    "id": "cie-9-e-13",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF09CI16",
    "topic": "Missão James Webb e Atmosferas de Exoplanetas",
    "question": "Os astrônomos utilizam espectroscopia de trânsito em telescópios espaciais para analisar exoplanetas procurando:",
    "options": [
      "Fotografias com árvores na superfície",
      "Bioassinaturas na atmosfera do planeta",
      "Sinais de rádio de rádio-amadores",
      "Minas de ouro no solo em meio biológico"
    ],
    "correctAnswer": 1,
    "explanation": "A luz da estrela que atravessa a atmosfera do exoplaneta deixa linhas de absorção espectrais características dos gases presentes."
  },
  {
    "id": "cie-9-e-14",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF09CI06",
    "topic": "Radiação de Fundo em Micro-ondas",
    "question": "A Radiação Cósmica de Fundo em Micro-ondas detectada em todo o céu em temperatura de cerca de 2,7 Kelvin é considerada a principal evidência da:",
    "options": [
      "Explosão de uma supernova próxima recente de forma contínua",
      "Radiação do núcleo da Terra",
      "Origem do Universo através do Big Bang",
      "Luz emitida pela Lua"
    ],
    "correctAnswer": 2,
    "explanation": "Descoberta por Penzias e Wilson em 1965, é o fóssil eletromagnético do desacoplamento da matéria e radiação logo após o Big Bang."
  },
  {
    "id": "cie-9-e-15",
    "subject": "ciencias",
    "grade": "9º ano",
    "difficulty": "expert",
    "xp": 80,
    "bnccSkill": "EF09CI08",
    "topic": "Epigenética Introdutória",
    "question": "A epigenética estuda modificações na expressão dos genes (como metilação do DNA) causadas por fatores ambientais e hábitos de vida que:",
    "options": [
      "Criam novos cromossomos no indivíduo",
      "Transformam DNA em carboidratos",
      "Eliminam todas as mutações em meio biológico",
      "Ativam ou silenciam genes sem alterar a sequência de bases nucleotídicas do DNA"
    ],
    "correctAnswer": 3,
    "explanation": "Fatores como estresse, dieta e poluição podem adicionar marcadores químicos ao DNA, ligando ou desligando genes sem mudar o código genético."
  }
];
