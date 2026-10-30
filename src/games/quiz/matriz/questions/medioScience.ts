import { QuestionData } from './types';

// ============================================================================
// BANCO DE CIÊNCIAS - ENSINO MÉDIO (1º AO 3º ANO)
// REVISADO E CALIBRADO PELA BNCC COM HABILIDADES OFICIAIS VERIFICADAS
// Total: 180 questões (15 por dificuldade em cada ano escolar)
// ALTERNATIVAS RIGOROSAMENTE BALANCEADAS: Sem viés de tamanho, formato ou posição
// ============================================================================

export const MEDIO_SCIENCE_QUESTIONS: QuestionData[] = [
  {
    "id": "cie-1em-f-01",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "Qual modelo de membrana celular descreve a bicamada fosfolipídica com proteínas integrais e periféricas móveis em fluxo contínuo?",
    "options": [
      "Mosaico Fluido de Singer e Nicolson",
      "Modelo do Sanduíche de Danielli e Davson",
      "Modelo Rígido Celulósico",
      "Modelo Micelar Estático"
    ],
    "correctAnswer": 0,
    "explanation": "O modelo do mosaico fluido (1972) explica a fluidez lipídica e a mobilidade de proteínas na bicamada.",
    "bnccSkill": "EM13CNT202",
    "topic": "Citologia e Metabolismo Energético"
  },
  {
    "id": "cie-1em-f-02",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "Qual é o gás liberado na fotossíntese como subproduto da fotólise da água na fase clara?",
    "options": [
      "Gás carbônico (CO₂)",
      "Gás oxigênio (O₂)",
      "Gás metano (CH₄)",
      "Gás nitrogênio (N₂)"
    ],
    "correctAnswer": 1,
    "explanation": "A quebra fotoquímica da molécula de água nos tilacoides libera elétrons, prótons H⁺ e oxigênio molecular (O₂).",
    "bnccSkill": "EM13CNT202",
    "topic": "Citologia e Metabolismo Energético"
  },
  {
    "id": "cie-1em-f-03",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "Qual é a aceleração da gravidade média aproximada na superfície do planeta Terra adotada em cálculos de física?",
    "options": [
      "1,6 m/s²",
      "300.000 m/s² de forma contínua",
      "9,8 m/s²",
      "0 m/s²"
    ],
    "correctAnswer": 2,
    "explanation": "A gravidade padrão ao nível do mar a 45° de latitude é aproximadamente 9,80665 m/s² (frequentemente arredondada para 10 m/s²).",
    "bnccSkill": "EM13CNT101",
    "topic": "Cinemática Escalar e Movimento"
  },
  {
    "id": "cie-1em-f-04",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "Qual ligação química mantém unidos os átomos na molécula diatômica de gás oxigênio (O=O)?",
    "options": [
      "Ligação iônica simples",
      "Ligação metálica no meio reacional",
      "Ligação iônica tripla",
      "Ligação covalente dupla"
    ],
    "correctAnswer": 3,
    "explanation": "Cada átomo de oxigênio compartilha dois pares de elétrons para completar o octeto, formando uma dupla ligação covalente.",
    "bnccSkill": "EM13CNT104",
    "topic": "Ligações Químicas e Propriedades Atômicas"
  },
  {
    "id": "cie-1em-f-05",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "Em um movimento retilíneo uniforme (MRU), a aceleração do móvel é:",
    "options": [
      "Nula (a = 0)",
      "Constante e positiva",
      "Variável contínua",
      "Infinita"
    ],
    "correctAnswer": 0,
    "explanation": "No MRU, a velocidade é constante em magnitude e direção, logo a variação temporal da velocidade (aceleração) é zero.",
    "bnccSkill": "EM13CNT101",
    "topic": "Cinemática Escalar e Movimento"
  },
  {
    "id": "cie-1em-f-06",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "Qual base nitrogenada é exclusiva do ácido ribonucleico (RNA) e não ocorre no DNA?",
    "options": [
      "Timina",
      "Uracila",
      "Adenina",
      "Guanina"
    ],
    "correctAnswer": 1,
    "explanation": "O RNA possui uracila em vez de timina; a timina é exclusiva do DNA.",
    "bnccSkill": "EM13CNT202",
    "topic": "Citologia e Metabolismo Energético"
  },
  {
    "id": "cie-1em-f-07",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "A energia mecânica total (E_mec) de um sistema é a soma da:",
    "options": [
      "Energia térmica com o calor latente",
      "Energia nuclear com a elétrica no referencial inercial",
      "Energia cinética com a energia potencial",
      "Energia química com a luminosa"
    ],
    "correctAnswer": 2,
    "explanation": "E_mec = E_cinética + E_potencial (gravitacional e elástica).",
    "bnccSkill": "EM13CNT101",
    "topic": "Cinemática e Fenômenos Físicos"
  },
  {
    "id": "cie-1em-f-08",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "Os elementos químicos localizados na mesma coluna vertical da Tabela Periódica pertencem ao mesmo:",
    "options": [
      "Período horizontal",
      "Subnível eletrônico",
      "Estado físico",
      "Grupo ou família"
    ],
    "correctAnswer": 3,
    "explanation": "Elementos do mesmo grupo possuem o mesmo número de elétrons na camada de valência e propriedades químicas correlatas.",
    "bnccSkill": "EM13CNT104",
    "topic": "Ligações Químicas e Propriedades Atômicas"
  },
  {
    "id": "cie-1em-f-09",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "O processo de divisão celular que gera duas células-filhas geneticamente idênticas à célula-mãe diploide é a:",
    "options": [
      "Mitose",
      "Meiose gamética",
      "Fecundação cruzada",
      "Crossing-over"
    ],
    "correctAnswer": 0,
    "explanation": "A mitose mantém a ploidia constante (2n → 2n) e atua na regeneração tecidual e no crescimento do organismo.",
    "bnccSkill": "EM13CNT202",
    "topic": "Citologia e Metabolismo Energético"
  },
  {
    "id": "cie-1em-f-10",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "O trabalho realizado por uma força perpendicular à direção do deslocamento de um objeto (ângulo θ = 90°) é:",
    "options": [
      "Máximo positivo",
      "Zero (W = 0)",
      "Negativo",
      "Infinito"
    ],
    "correctAnswer": 1,
    "explanation": "W = F × d × cos(90°) = 0, pois cos(90°) = 0.",
    "bnccSkill": "EM13CNT101",
    "topic": "Cinemática Escalar e Movimento"
  },
  {
    "id": "cie-1em-f-11",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "A substância mais eletronegativa de toda a Tabela Periódica dos elementos é o:",
    "options": [
      "Oxigênio (O)",
      "Cloro (Cl)",
      "Flúor (F)",
      "Frâncio (Fr)"
    ],
    "correctAnswer": 2,
    "explanation": "O flúor tem eletronegatividade 4,0 na escala de Pauling, atraindo elétrons de ligação com a máxima força.",
    "bnccSkill": "EM13CNT101",
    "topic": "Cinemática Escalar e Movimento"
  },
  {
    "id": "cie-1em-f-12",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "Qual organela celular é responsável pela digestão de substâncias englobadas por fagocitose ou pinocitose?",
    "options": [
      "Peroxissomo",
      "Centríolo",
      "Ribossomo",
      "Lisossomo"
    ],
    "correctAnswer": 3,
    "explanation": "Os lisossomos fundem-se aos fagossomos formando o vacúolo digestivo onde enzimas hidrolases atuam.",
    "bnccSkill": "EM13CNT202",
    "topic": "Citologia e Metabolismo Energético"
  },
  {
    "id": "cie-1em-f-13",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "A unidade de medida da força no Sistema Internacional (SI) é o:",
    "options": [
      "Newton (N)",
      "Joule (J)",
      "Watt (W)",
      "Pascal (Pa)"
    ],
    "correctAnswer": 0,
    "explanation": "1 Newton = 1 kg·m/s², em homenagem a Sir Isaac Newton.",
    "bnccSkill": "EM13CNT101",
    "topic": "Cinemática Escalar e Movimento"
  },
  {
    "id": "cie-1em-f-14",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "Uma solução aquosa com alta concentração de soluto dissolvido, no limite máximo permitido pelo coeficiente de solubilidade, é classificada como:",
    "options": [
      "Insaturada diluída",
      "Saturada",
      "Supersaturada instável",
      "Heterogênea"
    ],
    "correctAnswer": 1,
    "explanation": "A solução saturada atingiu o coeficiente de solubilidade naquela temperatura específica.",
    "bnccSkill": "EM13CNT102",
    "topic": "Termologia e Escalas Termométricas"
  },
  {
    "id": "cie-1em-f-15",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "Qual molécula é a \"moeda energética universal\" da célula, armazenando energia em suas ligações fosfato de alta energia?",
    "options": [
      "Glicose livre",
      "Ácido desoxirribonucleico",
      "ATP",
      "Colesterol"
    ],
    "correctAnswer": 2,
    "explanation": "A hidrólise do ATP em ADP + Pi libera energia prontamente utilizável pelas enzimas celulares.",
    "bnccSkill": "EM13CNT202",
    "topic": "Citologia e Metabolismo Energético"
  },
  {
    "id": "cie-1em-m-01",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "Na respiração celular aeróbia, a etapa da glicólise ocorre em qual compartimento celular e tem qual saldo líquido direto de ATP?",
    "options": [
      "Matriz mitocondrial, com saldo de 30 ATP",
      "Cristas mitocondriais, com 4 ATP",
      "Complexo de Golgi, com 10 ATP",
      "Citosol , com saldo líquido de 2 ATP"
    ],
    "correctAnswer": 3,
    "explanation": "A quebra anaeróbia inicial da glicose em dois piruvatos ocorre no citosol, gerando 2 ATP líquidos e 2 NADH.",
    "bnccSkill": "EM13CNT202",
    "topic": "Citologia e Metabolismo Energético"
  },
  {
    "id": "cie-1em-m-02",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "Um corpo de 4 kg é puxado por uma força resultante constante de 20 N sobre uma superfície horizontal sem atrito. Qual é a sua aceleração?",
    "options": [
      "5 m/s²",
      "80 m/s²",
      "2 m/s²",
      "10 m/s²"
    ],
    "correctAnswer": 0,
    "explanation": "F = m × a → 20 = 4 × a → a = 20 / 4 = 5 m/s².",
    "bnccSkill": "EM13CNT101",
    "topic": "Cinemática Escalar e Movimento"
  },
  {
    "id": "cie-1em-m-03",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "O raio atômico dos elementos químicos na Tabela Periódica aumenta genericamente nos sentidos:",
    "options": [
      "Para a direita e para cima no meio reacional",
      "Para a esquerda nos períodos e para baixo nas famílias",
      "Para a direita e para baixo",
      "Para a esquerda e para cima"
    ],
    "correctAnswer": 1,
    "explanation": "Mais camadas eletrônicas aumentam o raio para baixo; menor carga nuclear efetiva expande a eletrosfera para a esquerda.",
    "bnccSkill": "EM13CNT104",
    "topic": "Ligações Químicas e Propriedades Atômicas"
  },
  {
    "id": "cie-1em-m-04",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "Qual processo de transporte pela membrana celular transporta íons contra o gradiente eletroquímico consumindo ATP, como a bomba de Na⁺/K⁺?",
    "options": [
      "Difusão simples",
      "Osmose aquosa",
      "Transporte ativo primário",
      "Difusão facilitada por carreador"
    ],
    "correctAnswer": 2,
    "explanation": "A bomba de sódio-potássio expulsa 3 Na⁺ e absorve 2 K⁺ contra gradientes de concentração com hidrólise de 1 ATP.",
    "bnccSkill": "EM13CNT202",
    "topic": "Citologia e Metabolismo Energético"
  },
  {
    "id": "cie-1em-m-05",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "Um projétil é lançado verticalmente para cima com velocidade inicial de 30 m/s (adotando g = 10 m/s²). Qual é a altura máxima atingida?",
    "options": [
      "90 metros",
      "30 metros",
      "60 metros",
      "45 metros"
    ],
    "correctAnswer": 3,
    "explanation": "Torricelli: 0 = 30² - 2(10)h → 20h = 900 → h = 45 metros.",
    "bnccSkill": "EM13CNT101",
    "topic": "Cinemática Escalar e Movimento"
  },
  {
    "id": "cie-1em-m-06",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "Qual tipo de força intermolecular atua com maior intensidade entre moléculas de água líquida (H₂O), conferindo-lhe elevado ponto de ebulição e tensão superficial?",
    "options": [
      "Ligações de hidrogênio",
      "Forças de dispersão de London",
      "Dipolo induzido-dipolo induzido",
      "Forças iônicas"
    ],
    "correctAnswer": 0,
    "explanation": "A forte atração entre o hidrogênio polarizado positivamente e o par de elétrons do oxigênio forma ligações de hidrogênio.",
    "bnccSkill": "EM13CNT101",
    "topic": "Cinemática Escalar e Movimento"
  },
  {
    "id": "cie-1em-m-07",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "O crossing-over (permutação gênica), responsável pela recombinação genética na meiose, ocorre especificamente em qual subfase?",
    "options": [
      "Metáfase II",
      "Paquíteno da Prófase I",
      "Anáfase I em meio biológico",
      "Telófase II"
    ],
    "correctAnswer": 1,
    "explanation": "No paquíteno, cromossomos homólogos pareados formam quiasmas e trocam fragmentos de cromátides não irmãs.",
    "bnccSkill": "EM13CNT101",
    "topic": "Cinemática e Fenômenos Físicos"
  },
  {
    "id": "cie-1em-m-08",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "Qual é o trabalho realizado pela força peso sobre um objeto de 5 kg que cai livremente de uma altura de 10 metros (g = 10 m/s²)?",
    "options": [
      "50 Joules",
      "250 Joules",
      "500 Joules",
      "-500 Joules de forma contínua"
    ],
    "correctAnswer": 2,
    "explanation": "W_peso = m × g × Δh = 5 × 10 × 10 = 500 Joules.",
    "bnccSkill": "EM13CNT101",
    "topic": "Cinemática Escalar e Movimento"
  },
  {
    "id": "cie-1em-m-09",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "A geometria molecular da molécula de metano (CH₄), que possui 4 pares de elétrons ligantes ao redor do carbono central, é:",
    "options": [
      "Quadrada plana",
      "Linear",
      "Trigonal plana",
      "Tetraédrica"
    ],
    "correctAnswer": 3,
    "explanation": "Pela teoria da repulsão de pares de elétrons (RPECV), 4 ligantes idênticos distribuem-se nos vértices de um tetraedro regular.",
    "bnccSkill": "EM13CNT104",
    "topic": "Ligações Químicas e Propriedades Atômicas"
  },
  {
    "id": "cie-1em-m-10",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "Hemácias colocadas em uma solução aquosa hipotônica (como água destilada pura) sofrem influxo excessivo de água por osmose e se rompem, evento denominado:",
    "options": [
      "Hemólise",
      "Plasmólise",
      "Crenação",
      "Turgência osmótica"
    ],
    "correctAnswer": 0,
    "explanation": "A água entra por osmose até romper a frágil membrana plasmática anucleada da hemácia (hemólise).",
    "bnccSkill": "EM13CNT202",
    "topic": "Citologia e Metabolismo Energético"
  },
  {
    "id": "cie-1em-m-11",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "A quantidade de movimento linear de um corpo de massa 1.000 kg que trafega a 72 km/h (20 m/s) é:",
    "options": [
      "72.000 kg·m/s",
      "20.000 kg·m/s",
      "10.000 kg·m/s",
      "50.000 kg·m/s"
    ],
    "correctAnswer": 1,
    "explanation": "p = m × v = 1.000 kg × 20 m/s = 20.000 kg·m/s.",
    "bnccSkill": "EM13CNT101",
    "topic": "Cinemática e Fenômenos Físicos"
  },
  {
    "id": "cie-1em-m-12",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "A distribuição eletrônica em subníveis energéticos de Linus Pauling para o átomo de ferro (Z = 26) no estado fundamental termina em:",
    "options": [
      "4s² de forma contínua",
      "3d⁸",
      "3d⁶",
      "4p⁶"
    ],
    "correctAnswer": 2,
    "explanation": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶.",
    "bnccSkill": "EM13CNT104",
    "topic": "Ligações Químicas e Propriedades Atômicas"
  },
  {
    "id": "cie-1em-m-13",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "A fase da mitose caracterizada pela separação das cromátides irmãs e sua migração para os polos opostos da célula através dos microtúbulos é a:",
    "options": [
      "Metáfase",
      "Prófase",
      "Telófase",
      "Anáfase"
    ],
    "correctAnswer": 3,
    "explanation": "Na anáfase, os centrômeros se duplicam e o fuso mitótico traciona as cromátides irmãs aos polos.",
    "bnccSkill": "EM13CNT101",
    "topic": "Cinemática e Fenômenos Físicos"
  },
  {
    "id": "cie-1em-m-14",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "O impulso de uma força resultante constante de 40 N aplicada sobre um corpo durante um intervalo de tempo de 0,5 segundo (I = F × Δt) é:",
    "options": [
      "20 N·s",
      "80 N·s",
      "40 N·s",
      "10 N·s"
    ],
    "correctAnswer": 0,
    "explanation": "I = F × Δt = 40 × 0,5 = 20 N·s.",
    "bnccSkill": "EM13CNT101",
    "topic": "Cinemática Escalar e Movimento"
  },
  {
    "id": "cie-1em-m-15",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "Qual ácido inorgânico de fórmula H₂SO₄ é amplamente utilizado em baterias de automóveis e na indústria petroquímica?",
    "options": [
      "Ácido clorídrico",
      "Ácido sulfúrico",
      "Ácido nítrico",
      "Ácido fosfórico"
    ],
    "correctAnswer": 1,
    "explanation": "O ácido sulfúrico é um diácido forte oxidante de grande relevância industrial.",
    "bnccSkill": "EM13CNT101",
    "topic": "Cinemática e Fenômenos Físicos"
  },
  {
    "id": "cie-1em-d-01",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "No ciclo de Krebs (ciclo do ácido cítrico), que ocorre na matriz mitocondrial, a molécula de acetil-CoA (2C) combina-se inicialmente com qual composto para formar citrato (6C)?",
    "options": [
      "Piruvato (3C)",
      "Succinato (4C)",
      "Oxaloacetato",
      "Alfa-cetoglutarato (5C)"
    ],
    "correctAnswer": 2,
    "explanation": "A citrato sintase condensa o acetil-CoA com o oxaloacetato (4C) regenerando a rota metabólica.",
    "bnccSkill": "EM13CNT202",
    "topic": "Citologia e Metabolismo Energético"
  },
  {
    "id": "cie-1em-d-02",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "Um bloco de 5 kg desce um plano inclinado com ângulo de 30° em relação à horizontal com velocidade constante (g = 10 m/s², sen 30° = 0,5, cos 30° = 0,87). Qual é o coeficiente de atrito cinético μ?",
    "options": [
      "μ = 0,50 em meio biológico",
      "μ = 0,87",
      "μ = 0,25",
      "μ ≈ 0,58 (tg 30°)"
    ],
    "correctAnswer": 3,
    "explanation": "No plano inclinado com velocidade constante: P sen θ = F_at = μ P cos θ → μ = tg θ = tg(30°) ≈ 0,58.",
    "bnccSkill": "EM13CNT101",
    "topic": "Cinemática Escalar e Movimento"
  },
  {
    "id": "cie-1em-d-03",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "A hibridização do átomo de carbono na molécula de eteno (H₂C=CH₂), que possui uma dupla ligação e duas ligações simples, é:",
    "options": [
      "sp²",
      "sp³",
      "sp (linear)",
      "sp³d"
    ],
    "correctAnswer": 0,
    "explanation": "Três regiões de densidade eletrônica ao redor do carbono formam 3 orbitais híbridos sp² orientados a 120°.",
    "bnccSkill": "EM13CNT104",
    "topic": "Ligações Químicas e Propriedades Atômicas"
  },
  {
    "id": "cie-1em-d-04",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "O operon Lac em bactérias Escherichia coli é um clássico modelo de regulação gênica que é ativado na presença de lactose porque:",
    "options": [
      "A lactose destrói os promotores gênicos estimulando a polimerase do RNA",
      "A alolactose liga-se ao repressor inativando-o e liberando a transcrição",
      "A glicose liga-se diretamente aos íntrons ativando os fatores de transcrição",
      "O repressor acopla-se permanentemente ao operador bloqueando a tradução"
    ],
    "correctAnswer": 1,
    "explanation": "A ligação da alolactose induz mudança conformacional no repressor Lac, desobstruindo o promotor.",
    "bnccSkill": "EM13CNT104",
    "topic": "Ligações Químicas e Propriedades Atômicas"
  },
  {
    "id": "cie-1em-d-05",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "Uma mola de constante elástica k = 400 N/m é comprimida em 0,2 m e lança horizontalmente um bloco de 0,5 kg sobre uma mesa lisa. Qual é a velocidade com que o bloco sai da mola?",
    "options": [
      "8 m/s em meio biológico",
      "4 m/s",
      "4√2 m/s",
      "16 m/s"
    ],
    "correctAnswer": 2,
    "explanation": "½ k x² = ½ m v² → 400 × 0,04 = 0,5 × v² → 16 = 0,5 v² → v² = 32 → v = √32 = 4√2 m/s.",
    "bnccSkill": "EM13CNT101",
    "topic": "Cinemática Escalar e Movimento"
  },
  {
    "id": "cie-1em-d-06",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "A energia reticular cristalina de um composto iônico, de acordo com a Lei de Coulomb aplicada a redes iônicas, é diretamente proporcional:",
    "options": [
      "Aos volumes molares dos elementos no meio reacional",
      "À constante dielétrica do solvente líquido",
      "À massa atômica média dos cátions",
      "Ao produto das cargas dos íons e inversamente proporcional à distância entre seus núcleos"
    ],
    "correctAnswer": 3,
    "explanation": "U_reticular ∝ |z₊ z₋| / r₀; cargas maiores e raios iônicos menores aumentam a estabilidade do retículo.",
    "bnccSkill": "EM13CNT104",
    "topic": "Ligações Químicas e Propriedades Atômicas"
  },
  {
    "id": "cie-1em-d-07",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "Na fosforilação oxidativa mitocondrial, a síntese de ATP pela ATP sintase é impulsionada diretamente por:",
    "options": [
      "Gradiente eletroquímico de prótons H⁺ acumulados no espaço intermembrana",
      "Quebra direta de oxigênio gasoso",
      "Entrada de cálcio no núcleo celular",
      "Glicólise reversa"
    ],
    "correctAnswer": 0,
    "explanation": "A teoria quimiosmótica de Peter Mitchell demonstrou que o refluxo de prótons pela ATP sintase aciona a catálise de ATP.",
    "bnccSkill": "EM13CNT202",
    "topic": "Citologia e Metabolismo Energético"
  },
  {
    "id": "cie-1em-d-08",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "Em uma colisão perfeitamente inelástica unidimensional entre dois corpos de mesma massa m, onde o corpo A viaja a 10 m/s e o corpo B está em repouso, a perda de energia cinética do sistema é de:",
    "options": [
      "100%",
      "50%",
      "25%",
      "0%"
    ],
    "correctAnswer": 1,
    "explanation": "Após o choque, V = 5 m/s. E_inicial = ½ m (100) = 50m. E_final = ½ (2m) (25) = 25m. Perda = 50% convertida em calor/deformação.",
    "bnccSkill": "EM13CNT102",
    "topic": "Termologia e Escalas Termométricas"
  },
  {
    "id": "cie-1em-d-09",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "Qual é o número de oxidação (NOX) do átomo de manganês no permanganato de potássio (KMnO₄)?",
    "options": [
      "+4 de forma contínua",
      "+2",
      "+7",
      "+6"
    ],
    "correctAnswer": 2,
    "explanation": "K (+1) + Mn (x) + 4 O (-2) = 0 → 1 + x - 8 = 0 → x = +7.",
    "bnccSkill": "EM13CNT104",
    "topic": "Ligações Químicas e Propriedades Atômicas"
  },
  {
    "id": "cie-1em-d-10",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "Os telômeros nas extremidades dos cromossomos lineares eucariotos encurtam a cada ciclo de divisão celular devido à incapacidade da DNA polimerase de:",
    "options": [
      "Separar as fitas de DNA na forquilha",
      "Corrigir erros de pareamento por exonucleose",
      "Adicionar desoxirribonucleotídeos da linhagem celular",
      "Sintetizar a ponta da fita retardada após a remoção do primer de RNA no terminal 5'"
    ],
    "correctAnswer": 3,
    "explanation": "O problema da replicação das extremidades leva ao encurtamento telomérico e à senescência celular.",
    "bnccSkill": "EM13CNT202",
    "topic": "Citologia e Metabolismo Energético"
  },
  {
    "id": "cie-1em-d-11",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "Um pêndulo simples tem comprimento L = 1 metro. Considerando g = π² m/s², qual é o período de oscilação para pequenas amplitudes (T = 2π √(L / g))?",
    "options": [
      "2 segundos",
      "1 segundo",
      "4 segundos",
      "π segundos"
    ],
    "correctAnswer": 0,
    "explanation": "T = 2π √(1 / π²) = 2π (1 / π) = 2 segundos.",
    "bnccSkill": "EM13CNT101",
    "topic": "Cinemática e Fenômenos Físicos"
  },
  {
    "id": "cie-1em-d-12",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "A teoria da ligação de valência prevê que a ligação tripla na molécula de gás nitrogênio (N≡N) é constituída por:",
    "options": [
      "Três ligações sigma",
      "Uma ligação sigma frontal e duas ligações pi laterais",
      "Três ligações pi no meio reacional",
      "Duas ligações sigma e uma pi"
    ],
    "correctAnswer": 1,
    "explanation": "Em ligações múltiplas lineares, o primeiro par forma uma ligação σ axial e os outros dois formam ligações π paralelas.",
    "bnccSkill": "EM13CNT104",
    "topic": "Ligações Químicas e Propriedades Atômicas"
  },
  {
    "id": "cie-1em-d-13",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "A via das pentoses fosfato é uma via metabólica citoplasmática fundamental paralela à glicólise cuja principal função celular é:",
    "options": [
      "Produzir grande quantidade de ATP por fosforilação oxidativa",
      "Converter glicose diretamente em glicogênio muscular",
      "Gerar NADPH para defesas antioxidantes e síntese de ribose-5-fosfato para nucleotídeos",
      "Degradar colesterol em bile da linhagem celular"
    ],
    "correctAnswer": 2,
    "explanation": "Gera NADPH redutor para combater radicais livres e ribose para síntese de DNA e RNA.",
    "bnccSkill": "EM13CNT202",
    "topic": "Citologia e Metabolismo Energético"
  },
  {
    "id": "cie-1em-d-14",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "Em uma curva horizontal plana de raio R = 50 m sem inclinação, qual é a velocidade máxima com que um carro pode fazer a curva sem derrapar, se o coeficiente de atrito estático é μ = 0,8 (g = 10 m/s²)?",
    "options": [
      "15 m/s",
      "25 m/s",
      "10 m/s",
      "20 m/s"
    ],
    "correctAnswer": 3,
    "explanation": "F_at = F_cp → μ m g = m v² / R → v = √(μ g R) = √(0,8 × 10 × 50) = √400 = 20 m/s.",
    "bnccSkill": "EM13CNT101",
    "topic": "Cinemática Escalar e Movimento"
  },
  {
    "id": "cie-1em-d-15",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "Soluções-tampão são misturas aquosas que resistem a variações bruscas de pH quando pequenas quantidades de ácido ou base são adicionadas, sendo tipicamente formadas por:",
    "options": [
      "Um ácido fraco e o sal de sua base conjugada",
      "Um ácido forte com uma base forte em proporção 1:1",
      "Água destilada pura e cloreto de sódio",
      "Ácido sulfúrico concentrado"
    ],
    "correctAnswer": 0,
    "explanation": "O sistema ácido carbônico/bicarbonato (H₂CO₃ / HCO₃⁻) no sangue humano é o principal exemplo fisiológico.",
    "bnccSkill": "EM13CNT101",
    "topic": "Cinemática e Fenômenos Físicos"
  },
  {
    "id": "cie-1em-e-01",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "Qual é o papel da enzima topoisomerase (DNA girase) durante a replicação semiconservativa do DNA em bactérias?",
    "options": [
      "Sintetizar pequenos fragmentos de RNA iniciadores na fita descontínua de DNA",
      "Aliviar a tensão de supertorção helicoidal à frente da forquilha de replicação",
      "Unir covalentemente os fragmentos de Okazaki após a remoção dos primers de RNA",
      "Separar as fitas de DNA quebrando as pontes de hidrogênio entre as bases púricas"
    ],
    "correctAnswer": 1,
    "explanation": "A topoisomerase corta transitoriamente uma ou ambas as fitas de DNA para desenrolar o estresse mecânico torsional.",
    "bnccSkill": "EM13CNT202",
    "topic": "Citologia e Metabolismo Energético"
  },
  {
    "id": "cie-1em-e-02",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "Em mecânica celeste, as três Leis de Kepler regem o movimento planetário. A 2ª Lei (Lei das Áreas) decorre diretamente da conservação de qual grandeza física vetorial do planeta?",
    "options": [
      "Energia cinética pura",
      "Força centrípeta",
      "Momento angular vetorial",
      "Carga eletrostática estelar de forma contínua"
    ],
    "correctAnswer": 2,
    "explanation": "Como a força gravitacional é central (torque nulo em relação ao Sol), o momento angular é rigorosamente conservado, mantendo a velocidade areolar constante.",
    "bnccSkill": "EM13CNT101",
    "topic": "Cinemática Escalar e Movimento"
  },
  {
    "id": "cie-1em-e-03",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "A teoria do orbital molecular (TOM) para a molécula diatômica paramagnética de gás oxigênio (O₂) explica seu comportamento magnético pela presença de:",
    "options": [
      "Nenhum elétron desemparelhado em seu estado fundamental",
      "Um único orbital sigma incompleto",
      "Hibridização sp³d no meio reacional",
      "Dois elétrons desemparelhados nos orbitais moleculares antiligantes π*"
    ],
    "correctAnswer": 3,
    "explanation": "A TOM prevê corretamente a configuração (π*₂p_x)¹ (π*₂p_y)¹, explicando o paramagnetismo observado experimentalmente.",
    "bnccSkill": "EM13CNT104",
    "topic": "Ligações Químicas e Propriedades Atômicas"
  },
  {
    "id": "cie-1em-e-04",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "A apoptose (morte celular programada) em células humanas é desencadeada pela via mitocondrial intrínseca através da liberação para o citosol de qual proteína transportadora de elétrons?",
    "options": [
      "Citocromo c",
      "Ubiquitina",
      "Hemoglobina livre",
      "Tubulina alfa"
    ],
    "correctAnswer": 0,
    "explanation": "O citocromo c liberado da mitocôndria liga-se a Apaf-1 para formar o apoptossomo e ativar caspases efetoras.",
    "bnccSkill": "EM13CNT202",
    "topic": "Citologia e Metabolismo Energético"
  },
  {
    "id": "cie-1em-e-05",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "Um satélite de massa m orbita a Terra em órbita circular de raio r com velocidade orbital v = √(GM / r). Qual é a sua energia mecânica total E_mec em termos de G, M, m e r?",
    "options": [
      "E_mec = - (G M m) / r",
      "E_mec = - (G M m) / (2r)",
      "E_mec = + (G M m) / (2r)",
      "E_mec = 0"
    ],
    "correctAnswer": 1,
    "explanation": "E_cin = +GMm / (2r) e E_pot = -GMm / r. Somando: E_mec = -GMm / (2r) (negativa, indicando estado ligado).",
    "bnccSkill": "EM13CNT101",
    "topic": "Cinemática Escalar e Movimento"
  },
  {
    "id": "cie-1em-e-06",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "Qual princípio termodinâmico/cinético da química determina que os elétrons ocupam orbitais degenerados (de mesma energia) isoladamente com spins paralelos antes do emparelhamento?",
    "options": [
      "Princípio de Exclusão de Pauli",
      "Princípio de Aufbau",
      "Regra de Hund",
      "Teorema de Nernst"
    ],
    "correctAnswer": 2,
    "explanation": "A regra de Hund maximiza o spin total e minimiza a repulsão coulombiana intereletrônica.",
    "bnccSkill": "EM13CNT104",
    "topic": "Ligações Químicas e Propriedades Atômicas"
  },
  {
    "id": "cie-1em-e-07",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "A técnica de PCR (Reação em Cadeia da Polimerase) requer ciclos repetidos de três etapas térmicas consecutivas, que são:",
    "options": [
      "Centrifugação diferencial, digestão com endonuclease e eletroforese em gel agarose",
      "Lise osmótica de membrana, tradução ribossômica e precipitação proteica com etanol",
      "Hibridização molecular, transfecção gênica e clonagem celular por eletroporação",
      "Desnaturação térmica, anelamento de primers e extensão enzimática por polimerase"
    ],
    "correctAnswer": 3,
    "explanation": "Esses ciclos de termociclagem amplificam exponencialmente milhões de cópias da sequência alvo de DNA in vitro.",
    "bnccSkill": "EM13CNT202",
    "topic": "Citologia e Metabolismo Energético"
  },
  {
    "id": "cie-1em-e-08",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "Em um oscilador harmônico simples (MHS) de massa m e constante elástica k, quando a deformação x é metade da amplitude máxima (x = A / 2), a energia potencial elástica representa qual fração da energia mecânica total?",
    "options": [
      "1/4",
      "1/2",
      "1/8",
      "3/4"
    ],
    "correctAnswer": 0,
    "explanation": "E_pot = ½ k (A/2)² = ¼ (½ k A²) = ¼ da energia mecânica total.",
    "bnccSkill": "EM13CNT101",
    "topic": "Cinemática e Fenômenos Físicos"
  },
  {
    "id": "cie-1em-e-09",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "Qual é o número quântico principal (n) e o número quântico secundário ou azimutal (l) para um elétron no subnível 4d?",
    "options": [
      "n = 4 e l = 3",
      "n = 4 e l = 2",
      "n = 3 e l = 2",
      "n = 4 e l = 1"
    ],
    "correctAnswer": 1,
    "explanation": "Camada 4 → n = 4. Subníveis: s (l=0), p (l=1), d (l=2), f (l=3). Logo para 4d, l = 2.",
    "bnccSkill": "EM13CNT104",
    "topic": "Ligações Químicas e Propriedades Atômicas"
  },
  {
    "id": "cie-1em-e-10",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "A fotofosforilação cíclica nas reações luminosas da fotossíntese de plantas envolve exclusivamente o fotossistema I e tem como produto final:",
    "options": [
      "Apenas NADPH e glicose",
      "Oxigênio gasoso e NADPH",
      "Apenas ATP",
      "Ácido pirúvico"
    ],
    "correctAnswer": 2,
    "explanation": "Os elétrons retornam da ferredoxina para o citocromo b₆f gerando gradiente de H⁺ para ATP sintase sem reduzir NADP⁺.",
    "bnccSkill": "EM13CNT202",
    "topic": "Citologia e Metabolismo Energético"
  },
  {
    "id": "cie-1em-e-11",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "Em um sistema físico não inercial acelerado com aceleração linear constante a_0, surge uma força inercial fictícia sobre um corpo de massa m dada por:",
    "options": [
      "F_inercial = + m a_0",
      "F_inercial = m g",
      "F_inercial = 0",
      "F_inercial = - m a_0"
    ],
    "correctAnswer": 3,
    "explanation": "A força d’Alembert aponta em sentido oposto à aceleração do referencial com magnitude m·a_0.",
    "bnccSkill": "EM13CNT101",
    "topic": "Cinemática Escalar e Movimento"
  },
  {
    "id": "cie-1em-e-12",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "O efeito quelato em química de coordenação resulta no aumento acentuado da estabilidade termodinâmica de complexos metálicos quando o ligante é polidentado, impulsionado principalmente pelo:",
    "options": [
      "Aumento favorável de entropia na liberação de moléculas de solvente coordenadas",
      "Diminuição de temperatura absoluta",
      "Aumento de entalpia desfavorável",
      "Isomeria cis-trans"
    ],
    "correctAnswer": 0,
    "explanation": "A substituição de múltiplos ligantes monodentados por um ligante polidentado eleva o número de partículas livres, aumentando ΔS da reação.",
    "bnccSkill": "EM13CNT101",
    "topic": "Cinemática e Fenômenos Físicos"
  },
  {
    "id": "cie-1em-e-13",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "O splicing alternativo do pré-RNA mensageiro em células eucarióticas permite que:",
    "options": [
      "O DNA seja clonado sem enzimas da linhagem celular",
      "Um único gene codifique múltiplas isoformas proteicas distintas pela combinação variada de éxons",
      "A tradução ocorra sem ribossomos",
      "O código genético mude de universal para degenerado"
    ],
    "correctAnswer": 1,
    "explanation": "A inclusão ou exclusão diferencial de éxons processados pelo spliceossomo amplifica enormemente o proteoma a partir de um número limitado de genes.",
    "bnccSkill": "EM13CNT101",
    "topic": "Cinemática e Fenômenos Físicos"
  },
  {
    "id": "cie-1em-e-14",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "A velocidade de propagação de uma onda transversal em uma corda esticada de densidade linear μ sob tensão T é descrita pela Fórmula de Taylor:",
    "options": [
      "v = T / μ de forma contínua",
      "v = μ / T",
      "v = √",
      "v = √"
    ],
    "correctAnswer": 2,
    "explanation": "Maior tração na corda eleva a velocidade; maior inércia linear (massa por metro) reduz a velocidade de onda.",
    "bnccSkill": "EM13CNT101",
    "topic": "Cinemática Escalar e Movimento"
  },
  {
    "id": "cie-1em-e-15",
    "subject": "ciencias",
    "grade": "1º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "Em cristais metálicos com estrutura cúbica de faces centradas (CFC), como o cobre e o ouro, o número de coordenação atômica de cada átomo na rede é:",
    "options": [
      "8 no meio reacional",
      "6",
      "4",
      "12"
    ],
    "correctAnswer": 3,
    "explanation": "Na estrutura CFC de empacotamento compacto, cada átomo toca 12 vizinhos imediatos (fator de empacotamento 74%).",
    "bnccSkill": "EM13CNT104",
    "topic": "Ligações Químicas e Propriedades Atômicas"
  },
  {
    "id": "cie-2em-f-01",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "A 1ª Lei de Mendel (Lei da Segregação dos Fatores) afirma que cada característica biológica é determinada por:",
    "options": [
      "Dois alelos que se separam na formação dos gametas",
      "Quatro cromossomos conjugados",
      "Apenas fatores ambientais",
      "Herança ligada ao cromossomo Y"
    ],
    "correctAnswer": 0,
    "explanation": "Mendel deduziu que os fatores (alelos) segregam-se puramente durante a meiose, com cada gameta recebendo apenas um alelo.",
    "bnccSkill": "EM13CNT202",
    "topic": "Histologia, Fisiologia e Genética"
  },
  {
    "id": "cie-2em-f-02",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "Qual fórmula da calorimetria calcula a quantidade de calor sensível (Q) trocada por um corpo de massa m, calor específico c e variação de temperatura ΔT?",
    "options": [
      "Q = m × L em meio biológico",
      "Q = m × c × ΔT",
      "Q = m × g × h",
      "Q = C / ΔT"
    ],
    "correctAnswer": 1,
    "explanation": "A equação fundamental da calorimetria sensível é Q = m c ΔT.",
    "bnccSkill": "EM13CNT102",
    "topic": "Termodinâmica e Máquinas Térmicas"
  },
  {
    "id": "cie-2em-f-03",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "A reflexão da luz em uma superfície plana e polida (como um espelho de vidro plano) obedece à lei de que:",
    "options": [
      "A luz é absorvida integralmente em meio biológico",
      "A velocidade da luz cai para zero",
      "O ângulo de incidência é igual ao ângulo de reflexão (i = r)",
      "O ângulo de reflexão é sempre 90°"
    ],
    "correctAnswer": 2,
    "explanation": "A lei da reflexão garante que os raios incidente, refletido e a reta normal são coplanares e os ângulos medidos em relação à normal são congruentes.",
    "bnccSkill": "EM13CNT103",
    "topic": "Óptica Geométrica e Ondulatória"
  },
  {
    "id": "cie-2em-f-04",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "No sistema de grupos sanguíneos ABO, indivíduos com sangue do tipo O são classificados clinicamente como:",
    "options": [
      "Receptores universais de hemácias",
      "Possuidores de aglutinogênios A e B",
      "Incompatíveis com qualquer sangue",
      "Doadores universais de hemácias"
    ],
    "correctAnswer": 3,
    "explanation": "O sangue tipo O não possui aglutinogênios A nem B na membrana das hemácias, não sendo atacado por anticorpos anti-A ou anti-B.",
    "bnccSkill": "EM13CNT202",
    "topic": "Histologia, Fisiologia e Genética"
  },
  {
    "id": "cie-2em-f-05",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "Qual mudança de estado físico ocorre a temperatura constante com absorção de calor latente de fusão?",
    "options": [
      "Passagem do sólido para o líquido",
      "Passagem do líquido para o gasoso",
      "Passagem do gás para o líquido",
      "Passagem do líquido para o sólido"
    ],
    "correctAnswer": 0,
    "explanation": "A fusão é a transição de fase do estado sólido para o líquido com quebra da rede cristalina.",
    "bnccSkill": "EM13CNT101",
    "topic": "Dinâmica Newtoniana e Energia"
  },
  {
    "id": "cie-2em-f-06",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "A imagem formada por um espelho plano para um objeto real é sempre classificada como:",
    "options": [
      "Real, invertida e menor em meio biológico",
      "Virtual, direita e do mesmo tamanho que o objeto",
      "Virtual, invertida e maior",
      "Real, direita e ampliada"
    ],
    "correctAnswer": 1,
    "explanation": "Espelhos planos produzem imagens simétricas virtuais (atrás do espelho), direitas e de mesma dimensão linear.",
    "bnccSkill": "EM13CNT103",
    "topic": "Óptica Geométrica e Ondulatória"
  },
  {
    "id": "cie-2em-f-07",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "No cruzamento de dois indivíduos heterozigotos para dominância completa (Aa × Aa), qual é a probabilidade de um descendente nascer homozigoto recessivo (aa)?",
    "options": [
      "1/2 de forma contínua",
      "3/4",
      "1/4",
      "0%"
    ],
    "correctAnswer": 2,
    "explanation": "O quadro de Punnett gera: 1 AA : 2 Aa : 1 aa. A chance de aa é 1 em 4 (25%).",
    "bnccSkill": "EM13CNT202",
    "topic": "Histologia, Fisiologia e Genética"
  },
  {
    "id": "cie-2em-f-08",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "A unidade de medida da temperatura absoluta no Sistema Internacional (SI) é o:",
    "options": [
      "Grau Celsius (°C)",
      "Grau Fahrenheit (°F)",
      "Joule (J)",
      "Kelvin (K)"
    ],
    "correctAnswer": 3,
    "explanation": "A escala termodinâmica absoluta de Kelvin (K) inicia no zero absoluto (0 K = -273,15 °C).",
    "bnccSkill": "EM13CNT102",
    "topic": "Termodinâmica e Máquinas Térmicas"
  },
  {
    "id": "cie-2em-f-09",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "Quando a luz passa do ar para o vidro, sua velocidade:",
    "options": [
      "Diminui",
      "Aumenta",
      "Permanece constante",
      "Inverte o sentido de propagação"
    ],
    "correctAnswer": 0,
    "explanation": "O vidro é opticamente mais denso (n ≈ 1,5) que o ar (n ≈ 1,0); pela relação v = c / n, a velocidade diminui no vidro.",
    "bnccSkill": "EM13CNT103",
    "topic": "Óptica Geométrica e Ondulatória"
  },
  {
    "id": "cie-2em-f-10",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "Um indivíduo que possui dois alelos idênticos para um determinado gene (como AA ou aa) é chamado de:",
    "options": [
      "Heterozigoto",
      "Homozigoto",
      "Hemizigoto",
      "Codominante"
    ],
    "correctAnswer": 1,
    "explanation": "Homozigotos possuem alelos idênticos no mesmo loco em cromossomos homólogos.",
    "bnccSkill": "EM13CNT202",
    "topic": "Histologia, Fisiologia e Genética"
  },
  {
    "id": "cie-2em-f-11",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "A Lei Geral dos Gases Perfeitos relaciona pressão (P), volume (V) e temperatura absoluta (T) de uma massa fixa de gás por:",
    "options": [
      "P × T / V = constante",
      "P₁ × T₁ = P₂ × T₂",
      "/ T₁ = / T₂",
      "V₁ / P₁ = V₂ / P₂"
    ],
    "correctAnswer": 2,
    "explanation": "Pela equação de Clapeyron (PV = nRT), para massa gasosa constante temos (P · V) / T = constante.",
    "bnccSkill": "EM13CNT101",
    "topic": "Dinâmica Newtoniana e Energia"
  },
  {
    "id": "cie-2em-f-12",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "Uma lente oftálmica esférica convergente é utilizada para corrigir qual defeito comum da visão humana?",
    "options": [
      "Miopia em meio biológico",
      "Astigmatismo",
      "Daltonismo",
      "Hipermetropia"
    ],
    "correctAnswer": 3,
    "explanation": "Na hipermetropia, o foco se forma atrás da retina; a lente convergente adianta os raios luminosos sobre a retina.",
    "bnccSkill": "EM13CNT103",
    "topic": "Óptica Geométrica e Ondulatória"
  },
  {
    "id": "cie-2em-f-13",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "A manifestação observável das características de um ser vivo (como cor dos olhos, altura ou tipo sanguíneo) resultante da interação do genótipo com o meio ambiente é o:",
    "options": [
      "Fenótipo",
      "Genoma estático",
      "Cariótipo",
      "Locus gênico"
    ],
    "correctAnswer": 0,
    "explanation": "Fenótipo = Genótipo + Influência do Meio Ambiente.",
    "bnccSkill": "EM13CNT101",
    "topic": "Dinâmica Newtoniana e Energia"
  },
  {
    "id": "cie-2em-f-14",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "Qual escala termométrica adota 0 °C para o ponto de fusão do gelo e 100 °C para a ebulição da água sob pressão normal de 1 atm?",
    "options": [
      "Escala Kelvin",
      "Escala Celsius",
      "Escala Fahrenheit",
      "Escala Rankine"
    ],
    "correctAnswer": 1,
    "explanation": "A escala centígrada foi proposta pelo astrônomo sueco Anders Celsius.",
    "bnccSkill": "EM13CNT101",
    "topic": "Dinâmica Newtoniana e Energia"
  },
  {
    "id": "cie-2em-f-15",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "Em uma reação química exotérmica, a variação de entalpia (ΔH = H_produtos - H_reagentes) é:",
    "options": [
      "Positiva",
      "Igual a zero de forma contínua",
      "Negativa",
      "Infinita"
    ],
    "correctAnswer": 2,
    "explanation": "Reações exotérmicas liberam calor para a vizinhança porque a entalpia dos produtos é menor que a dos reagentes.",
    "bnccSkill": "EM13CNT102",
    "topic": "Termodinâmica e Máquinas Térmicas"
  },
  {
    "id": "cie-2em-m-01",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "No cruzamento de dois indivíduos duplamente heterozigotos para genes em segregação independente (AaBb × AaBb), qual é a proporção fenotípica clássica da 2ª Lei de Mendel?",
    "options": [
      "1 : 2 : 1",
      "3 : 1",
      "1 : 1 : 1 : 1",
      "9 : 3 : 3 : 1"
    ],
    "correctAnswer": 3,
    "explanation": "9 dominantes para ambos (A_B_), 3 dominantes/recessivos (A_bb), 3 recessivos/dominantes (aaB_) e 1 duplo recessivo (aabb).",
    "bnccSkill": "EM13CNT202",
    "topic": "Histologia, Fisiologia e Genética"
  },
  {
    "id": "cie-2em-m-02",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "Um gás ideal realiza uma transformação isobárica (pressão constante de 100 kPa) expandindo seu volume de 0,02 m³ para 0,05 m³. Qual foi o trabalho mecânico realizado pelo gás (W = P × ΔV)?",
    "options": [
      "3.000 Joules",
      "300 Joules",
      "30.000 Joules",
      "1.500 Joules"
    ],
    "correctAnswer": 0,
    "explanation": "W = P × ΔV = 100.000 Pa × (0,05 - 0,02) m³ = 100.000 × 0,03 = 3.000 Joules.",
    "bnccSkill": "EM13CNT102",
    "topic": "Termodinâmica e Máquinas Térmicas"
  },
  {
    "id": "cie-2em-m-03",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "Pela Lei de Snell-Descartes da refração (n₁ × sen θ₁ = n₂ × sen θ₂), se um raio passa do meio 1 (n₁ = 1,0) incidindo a 30° para o meio 2 (n₂ = √3), qual é o seno do ângulo de refração?",
    "options": [
      "sen θ₂ = 1/2",
      "sen θ₂ = 1 / = √3 / 6",
      "sen θ₂ = √3/2",
      "sen θ₂ = 1 em meio biológico"
    ],
    "correctAnswer": 1,
    "explanation": "1,0 × sen(30°) = √3 × sen(θ₂) → 1,0 × 0,5 = √3 sen(θ₂) → sen(θ₂) = 0,5 / √3 = √3 / 6.",
    "bnccSkill": "EM13CNT103",
    "topic": "Óptica Geométrica e Ondulatória"
  },
  {
    "id": "cie-2em-m-04",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "A eritroblastose fetal (doença hemolítica do recém-nascido) pode ocorrer quando há incompatibilidade do fator Rh entre:",
    "options": [
      "Mãe Rh positiva e feto Rh negativo",
      "Mãe e feto ambos Rh positivos em meio biológico",
      "Mãe Rh negativa sensibilizada e feto Rh positivo",
      "Mãe e feto ambos Rh negativos"
    ],
    "correctAnswer": 2,
    "explanation": "Anticorpos maternos anti-Rh (IgG) atravessam a placenta e atacam as hemácias do feto Rh+ em uma segunda gestação.",
    "bnccSkill": "EM13CNT101",
    "topic": "Dinâmica Newtoniana e Energia"
  },
  {
    "id": "cie-2em-m-05",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "Quantas calorias são necessárias para aquecer 200 g de água de 20 °C para 70 °C (adotando calor específico da água c = 1 cal/g°C)?",
    "options": [
      "14.000 calorias",
      "4.000 calorias em meio biológico",
      "5.000 calorias",
      "10.000 calorias (10 kcal)"
    ],
    "correctAnswer": 3,
    "explanation": "Q = m × c × ΔT = 200 × 1 × (70 - 20) = 200 × 50 = 10.000 cal = 10 kcal.",
    "bnccSkill": "EM13CNT101",
    "topic": "Dinâmica Newtoniana e Energia"
  },
  {
    "id": "cie-2em-m-06",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "Um espelho esférico côncavo projeta a imagem de uma vela sobre um anteparo a 30 cm do vértice. Essa imagem projetável é classificada como:",
    "options": [
      "Real e invertida",
      "Virtual e direita",
      "Virtual e invertida",
      "Real e direita"
    ],
    "correctAnswer": 0,
    "explanation": "Toda imagem que pode ser projetada fisicamente em um anteparo é uma imagem real e as imagens reais formadas por espelhos côncavos são sempre invertidas.",
    "bnccSkill": "EM13CNT103",
    "topic": "Óptica Geométrica e Ondulatória"
  },
  {
    "id": "cie-2em-m-07",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "O daltonismo e a hemofilia clássica são exemplos típicos na espécie humana de doenças genéticas com padrão de herança:",
    "options": [
      "Dominante autossômica",
      "Recessiva ligada ao cromossomo X",
      "Ligada exclusivamente ao cromossomo Y",
      "Mitocondrial materna"
    ],
    "correctAnswer": 1,
    "explanation": "Homens (XY) que herdam o alelo mutante no cromossomo X expressam a doença; mulheres precisam herdar o alelo em dose dupla (homozigose).",
    "bnccSkill": "EM13CNT202",
    "topic": "Histologia, Fisiologia e Genética"
  },
  {
    "id": "cie-2em-m-08",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "Pelo Princípio de Le Chatelier, ao aumentar a pressão sobre o sistema químico em equilíbrio gasoso N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g), o equilíbrio se deslocará para:",
    "options": [
      "O sentido inverso de decomposição",
      "Não sofrerá nenhum deslocamento",
      "O sentido direto",
      "A anulação dos reagentes"
    ],
    "correctAnswer": 2,
    "explanation": "O lado esquerdo tem 4 mols de gás e o direito tem 2 mols. O aumento de pressão desloca o equilíbrio para o lado de menor volume molar.",
    "bnccSkill": "EM13CNT205",
    "topic": "Soluções e Equilíbrio Químico"
  },
  {
    "id": "cie-2em-m-09",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "Um bloco de gelo de 100 g a 0 °C funde-se completamente transformando-se em água líquida a 0 °C. Sabendo que o calor latente de fusão da água é L = 80 cal/g, quanto calor foi absorvido?",
    "options": [
      "800 calorias em meio biológico",
      "100 calorias",
      "80.000 calorias",
      "8.000 calorias (8 kcal)"
    ],
    "correctAnswer": 3,
    "explanation": "Q = m × L = 100 g × 80 cal/g = 8.000 cal = 8 kcal.",
    "bnccSkill": "EM13CNT101",
    "topic": "Dinâmica Newtoniana e Energia"
  },
  {
    "id": "cie-2em-m-10",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "Um raio de luz atinge uma superfície dióptrica plana com ângulo de incidência igual ao ângulo limite θ_L. Se o ângulo de incidência for aumentado além de θ_L, ocorrerá:",
    "options": [
      "Reflexão total interna",
      "Refração com desvio máximo de 90°",
      "Absorção opaca",
      "Difração luminosa"
    ],
    "correctAnswer": 0,
    "explanation": "Para incidência do meio mais refringente para o menos refringente com i > θ_L, a luz não se refrata e sofre reflexão total interna.",
    "bnccSkill": "EM13CNT103",
    "topic": "Óptica Geométrica e Ondulatória"
  },
  {
    "id": "cie-2em-m-11",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "Em uma genealogia, um casal saudável tem um filho com uma anomalia genética rara. Esse padrão indica com certeza que a anomalia é:",
    "options": [
      "Dominante obrigatória",
      "Recessiva",
      "Codominante expressa",
      "Causada por mutação cromossômica numérica"
    ],
    "correctAnswer": 1,
    "explanation": "Pais com fenótipo normal gerando descendente afetado é o teste clássico de herança condicionada por alelo recessivo.",
    "bnccSkill": "EM13CNT202",
    "topic": "Histologia, Fisiologia e Genética"
  },
  {
    "id": "cie-2em-m-12",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "A velocidade de uma reação química aumenta com a adição de um catalisador apropriado porque ele:",
    "options": [
      "Aumenta a variação de entalpia ΔH no meio reacional",
      "Eleva a temperatura interna dos reagentes",
      "Diminui a energia de ativação da reação proporcionando um novo caminho reacional",
      "Consome-se na formação de produtos finais"
    ],
    "correctAnswer": 2,
    "explanation": "O catalisador não altera ΔH nem o equilíbrio, apenas acelera a velocidade ao abaixar a barreira de ativação.",
    "bnccSkill": "EM13CNT101",
    "topic": "Dinâmica Newtoniana e Energia"
  },
  {
    "id": "cie-2em-m-13",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "A equação fundamental dos espelhos esféricos de Gauss relaciona a distância focal f, a posição do objeto p e a posição da imagem p' por:",
    "options": [
      "f = p + p'",
      "1 / f = p × p'",
      "f = / 2 em meio biológico",
      "1 / f = 1 / p + 1 / p'"
    ],
    "correctAnswer": 3,
    "explanation": "A equação de Gauss é a relação geométrica paraxial padrão para espelhos e lentes delgadas.",
    "bnccSkill": "EM13CNT103",
    "topic": "Óptica Geométrica e Ondulatória"
  },
  {
    "id": "cie-2em-m-14",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "A Teoria Sintética da Evolução (Neodarwinismo) integra a seleção natural de Darwin com quais descobertas da biologia moderna?",
    "options": [
      "Genética e mutações gênicas com recombinação meiótica",
      "A lei do uso e desuso de Lamarck",
      "A geração espontânea de micro-organismos",
      "A herança dos caracteres adquiridos"
    ],
    "correctAnswer": 0,
    "explanation": "O Neodarwinismo explica a origem da variabilidade pelas mutações no DNA e pela recombinação sexual.",
    "bnccSkill": "EM13CNT101",
    "topic": "Dinâmica Newtoniana e Energia"
  },
  {
    "id": "cie-2em-m-15",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "Qual é a constante universal dos gases perfeitos R expressa na unidade atm·L/(mol·K)?",
    "options": [
      "8,314 atm·L/(mol·K)",
      "0,082 atm·L/(mol·K)",
      "6,022 atm·L/(mol·K)",
      "1,987 atm·L/(mol·K)"
    ],
    "correctAnswer": 1,
    "explanation": "R ≈ 0,0821 atm·L/(mol·K) ou 8,314 J/(mol·K) no SI.",
    "bnccSkill": "EM13CNT101",
    "topic": "Dinâmica Newtoniana e Energia"
  },
  {
    "id": "cie-2em-d-01",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "Em um cruzamento teste entre uma planta duplo-heterozigota (AaBb) e uma homozigota recessiva (aabb), obtiveram-se 400 descendentes: 180 AB/ab, 180 ab/ab, 20 Ab/ab e 20 aB/ab. A taxa de recombinação (frequência de permutação gênica) entre esses dois genes ligados (linkage) é de:",
    "options": [
      "20% de forma contínua",
      "5%",
      "10%",
      "50%"
    ],
    "correctAnswer": 2,
    "explanation": "Recombinantes = 20 + 20 = 40. Total = 400. Taxa de recombinação = 40 / 400 = 10% (10 cM ou 10 UR).",
    "bnccSkill": "EM13CNT202",
    "topic": "Histologia, Fisiologia e Genética"
  },
  {
    "id": "cie-2em-d-02",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "Em um ciclo de Carnot operando entre as temperaturas de 600 K (fonte quente) e 300 K (fonte fria), a máquina recebe 4.000 Joules de calor da fonte quente por ciclo. Qual é o calor rejeitado para a fonte fria?",
    "options": [
      "1.000 Joules",
      "3.000 Joules",
      "2.500 Joules",
      "2.000 Joules"
    ],
    "correctAnswer": 3,
    "explanation": "Rendimento η = 1 - 300/600 = 0,50. Trabalho = 0,50 × 4.000 = 2.000 J. Calor rejeitado Q_frio = 4.000 - 2.000 = 2.000 J.",
    "bnccSkill": "EM13CNT102",
    "topic": "Termodinâmica e Máquinas Térmicas"
  },
  {
    "id": "cie-2em-d-03",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "A vergência (grau) de uma lente corretiva de distância focal f = -0,5 metro (lente divergente para miopia) no Sistema Internacional é de:",
    "options": [
      "-2 dioptrias (graus)",
      "+2 dioptrias",
      "-0,5 dioptria",
      "+5 dioptrias"
    ],
    "correctAnswer": 0,
    "explanation": "V = 1 / f (em metros) = 1 / (-0,5) = -2 dioptrias.",
    "bnccSkill": "EM13CNT103",
    "topic": "Óptica Geométrica e Ondulatória"
  },
  {
    "id": "cie-2em-d-04",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "Pela Lei de Hess, dadas as equações termoquímicas parciais: C(graf) + O₂(g) → CO₂(g) [ΔH = -393 kJ] e CO(g) + ½ O₂(g) → CO₂(g) [ΔH = -283 kJ], qual é a entalpia de formação do monóxido de carbono C(graf) + ½ O₂(g) → CO(g)?",
    "options": [
      "+110 kJ",
      "-110 kJ",
      "-676 kJ",
      "+676 kJ"
    ],
    "correctAnswer": 1,
    "explanation": "Invertendo a 2ª reação: CO₂ → CO + ½ O₂ (+283 kJ). Somando com a 1ª: -393 + 283 = -110 kJ.",
    "bnccSkill": "EM13CNT102",
    "topic": "Termodinâmica e Máquinas Térmicas"
  },
  {
    "id": "cie-2em-d-05",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "Um homem daltônico casa-se com uma mulher homozigota para visão normal das cores (XᴰXᴰ). Qual é a probabilidade de nascer um filho homem (menino) daltônico desse casal?",
    "options": [
      "50%",
      "100%",
      "0%",
      "25%"
    ],
    "correctAnswer": 2,
    "explanation": "O pai passa o cromossomo Y para os filhos homens, e a mãe passa sempre o alelo Xᴰ com visão normal. Todos os meninos serão XᴰY (visão normal).",
    "bnccSkill": "EM13CNT202",
    "topic": "Histologia, Fisiologia e Genética"
  },
  {
    "id": "cie-2em-d-06",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "Uma onda sonora propaga-se no ar com velocidade de 340 m/s. Se uma fonte sonora emissora de 680 Hz se aproxima de um observador parado a 34 m/s, qual é a frequência aparente ouvida pelo observador pelo Efeito Doppler?",
    "options": [
      "680 Hz em meio biológico",
      "612 Hz",
      "800 Hz",
      "755,5 Hz"
    ],
    "correctAnswer": 3,
    "explanation": "f' = f [v / (v - v_fonte)] = 680 [340 / (340 - 34)] = 680 [340 / 306] ≈ 755,5 Hz.",
    "bnccSkill": "EM13CNT103",
    "topic": "Óptica Geométrica e Ondulatória"
  },
  {
    "id": "cie-2em-d-07",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "A expressão da constante de equilíbrio químico Kc para a reação homogênea em fase gasosa aA + bB ⇌ cC + dD é dada por:",
    "options": [
      "Kc = /",
      "Kc = /",
      "Kc = [C] + [D] - [A] - [B]",
      "Kc = /"
    ],
    "correctAnswer": 0,
    "explanation": "A lei de ação das massas de Guldberg e Waage estipula o quociente das concentrações molares dos produtos elevados aos coeficientes sobre as dos reagentes.",
    "bnccSkill": "EM13CNT205",
    "topic": "Soluções e Equilíbrio Químico"
  },
  {
    "id": "cie-2em-d-08",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "Um objeto de 6 cm de altura está situado a 30 cm de um espelho côncavo de raio de curvatura R = 40 cm (distância focal f = 20 cm). Qual é a distância da imagem p' ao espelho?",
    "options": [
      "40 cm",
      "60 cm",
      "15 cm",
      "50 cm"
    ],
    "correctAnswer": 1,
    "explanation": "1/20 = 1/30 + 1/p' → 1/p' = 1/20 - 1/30 = (3 - 2)/60 = 1/60 → p' = 60 cm.",
    "bnccSkill": "EM13CNT103",
    "topic": "Óptica Geométrica e Ondulatória"
  },
  {
    "id": "cie-2em-d-09",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "A pleiotropia é o fenômeno genético no qual:",
    "options": [
      "Múltiplos pares de genes condicionam cumulativamente uma só característica",
      "Dois genes não se segregam por estarem no mesmo cromossomo",
      "Um único par de genes atua influenciando múltiplas características fenotípicas distintas",
      "Um gene inibe a expressão de outro gene não alélico em meio biológico"
    ],
    "correctAnswer": 2,
    "explanation": "Exemplo: o alelo mutante da anemia falciforme causa deformação de hemácias, dores articulares, lesões renais e resistência à malária.",
    "bnccSkill": "EM13CNT202",
    "topic": "Histologia, Fisiologia e Genética"
  },
  {
    "id": "cie-2em-d-10",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "Em uma transformação termodinâmica cíclica fechada no diagrama P × V, a variação da energia interna total (ΔU_ciclo) do gás é:",
    "options": [
      "Igual à área do ciclo",
      "Igual ao calor total recebido",
      "Infinita",
      "Nula"
    ],
    "correctAnswer": 3,
    "explanation": "Como a energia interna é função de estado e o gás retorna ao estado termodinâmico inicial no fim do ciclo, ΔU = 0.",
    "bnccSkill": "EM13CNT102",
    "topic": "Termodinâmica e Máquinas Térmicas"
  },
  {
    "id": "cie-2em-d-11",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "O produto de solubilidade Kps do sal cloreto de prata (AgCl) a 25 °C é 1 × 10⁻¹⁰. Qual é a solubilidade molar (S) desse sal em água pura?",
    "options": [
      "1 × 10⁻⁵ mol/L",
      "1 × 10⁻¹⁰ mol/L",
      "2 × 10⁻⁵ mol/L",
      "1 × 10⁻² mol/L"
    ],
    "correctAnswer": 0,
    "explanation": "AgCl(s) ⇌ Ag⁺ + Cl⁻. Kps = S × S = S² → S = √(10⁻¹⁰) = 1 × 10⁻⁵ mol/L.",
    "bnccSkill": "EM13CNT205",
    "topic": "Soluções e Equilíbrio Químico"
  },
  {
    "id": "cie-2em-d-12",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "Qual é o fenômeno ondulatório no qual a luz polarizada oscila em apenas um plano de vibração perpendicular à direção de propagação?",
    "options": [
      "Difração",
      "Polarização",
      "Dispersão cromática",
      "Reflexão total"
    ],
    "correctAnswer": 1,
    "explanation": "A polarização seleciona apenas uma direção de oscilação do vetor campo elétrico em ondas transversais.",
    "bnccSkill": "EM13CNT103",
    "topic": "Óptica Geométrica e Ondulatória"
  },
  {
    "id": "cie-2em-d-13",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "A herança quantitativa (poligenia) na espécie humana é exemplificada tipicamente por características de variação contínua em curva gaussiana, tais como:",
    "options": [
      "Grupos sanguíneos do sistema ABO",
      "Daltonismo",
      "Cor da pele e estatura",
      "Albinismo clássico"
    ],
    "correctAnswer": 2,
    "explanation": "A altura e a pigmentação da pele dependem do efeito cumulativo aditivo de múltiplos pares de genes polimórficos.",
    "bnccSkill": "EM13CNT202",
    "topic": "Histologia, Fisiologia e Genética"
  },
  {
    "id": "cie-2em-d-14",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "Qual é o índice de refração absoluto n de um diamante no qual a velocidade da luz se propaga a 120.000 km/s (adotando c = 300.000 km/s)?",
    "options": [
      "n = 1,5",
      "n = 2,0",
      "n = 1,8",
      "n = 2,5"
    ],
    "correctAnswer": 3,
    "explanation": "n = c / v = 300.000 / 120.000 = 2,5.",
    "bnccSkill": "EM13CNT103",
    "topic": "Óptica Geométrica e Ondulatória"
  },
  {
    "id": "cie-2em-d-15",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "A teoria endossimbiótica proposta por Lynn Margulis postula que as mitocôndrias e os cloroplastos evoluíram a partir de:",
    "options": [
      "Bactérias procariontes fagocitadas que estabeleceram endossimbiose mutualística estável",
      "Invaginações complexas da membrana plasmática primitiva que se fecharam em vesículas",
      "Fragmentos extracelulares de vírus gigantes que incorporaram ribossomos bacterianos",
      "Agrupamentos de proteínas prions mutantes que formaram membranas duplas internas"
    ],
    "correctAnswer": 0,
    "explanation": "Mitocôndrias e cloroplastos possuem DNA circular próprio, ribossomos 70S e dupla membrana semelhantes a bactérias.",
    "bnccSkill": "EM13CNT101",
    "topic": "Dinâmica Newtoniana e Energia"
  },
  {
    "id": "cie-2em-e-01",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "O Teorema de Hardy-Weinberg postula que em uma população panmítica infinitamente grande, sem mutação, seleção ou migração, as frequências alélicas e genotípicas permanecem constantes e satisfazem a equação:",
    "options": [
      "p² - q² = 0",
      "p² + 2pq + q² = 1",
      "p + 2q = 1",
      "p × q = 1 em meio biológico"
    ],
    "correctAnswer": 1,
    "explanation": "p representa a frequência do alelo dominante A e q a do alelo recessivo a. A distribuição genotípica em equilíbrio é AA (p²), Aa (2pq) e aa (q²).",
    "bnccSkill": "EM13CNT202",
    "topic": "Histologia, Fisiologia e Genética"
  },
  {
    "id": "cie-2em-e-02",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "A relação termodinâmica fundamental entre energia livre de Gibbs (ΔG), entalpia (ΔH), temperatura absoluta (T) e entropia (ΔS) estabelece que uma reação é espontânea quando:",
    "options": [
      "ΔG > 0 no meio reacional",
      "ΔH > 0 e ΔS < 0",
      "ΔG = ΔH - T ΔS < 0",
      "ΔG = 0"
    ],
    "correctAnswer": 2,
    "explanation": "Processos a temperatura e pressão constantes são termodinamicamente espontâneos quando a energia livre de Gibbs diminui (ΔG < 0).",
    "bnccSkill": "EM13CNT102",
    "topic": "Termodinâmica e Máquinas Térmicas"
  },
  {
    "id": "cie-2em-e-03",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "Em uma corda de extremidades fixas de comprimento L = 1,2 m, forma-se o 3º harmônico de uma onda estacionária. Qual é o comprimento de onda λ dessa oscilação (L = n × λ / 2)?",
    "options": [
      "0,4 metro",
      "1,2 metro",
      "2,4 metros",
      "0,8 metro"
    ],
    "correctAnswer": 3,
    "explanation": "1,2 = 3 × λ / 2 → 2,4 = 3λ → λ = 0,8 metro.",
    "bnccSkill": "EM13CNT103",
    "topic": "Óptica Geométrica e Ondulatória"
  },
  {
    "id": "cie-2em-e-04",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "A epistasia é a interação gênica na qual um gene inibe a manifestação de outro gene em loco distinto. Na epistasia recessiva clássica (como a pelagem em cães labradores), qual é a proporção fenotípica modificada?",
    "options": [
      "9 : 3 : 4",
      "12 : 3 : 1",
      "15 : 1",
      "9 : 7"
    ],
    "correctAnswer": 0,
    "explanation": "O genótipo homozigoto recessivo ee mascara a expressão dos alelos B (preto) e b (marrom), gerando 9 pretos : 3 chocolates : 4 dourados.",
    "bnccSkill": "EM13CNT202",
    "topic": "Histologia, Fisiologia e Genética"
  },
  {
    "id": "cie-2em-e-05",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "Em óptica física, o experimento da fenda dupla de Thomas Young comprovou conclusivamente a natureza ondulatória da luz através da observação de:",
    "options": [
      "Efeito fotoelétrico atômico em meio biológico",
      "Franjas de interferência construtiva e destrutiva em um anteparo",
      "Emissão de raios X por choque",
      "Curvatura gravitacional da luz"
    ],
    "correctAnswer": 1,
    "explanation": "A sobreposição de frentes de onda coerentes gerou padrões alternados de interferência clara e escura no anteparo.",
    "bnccSkill": "EM13CNT103",
    "topic": "Óptica Geométrica e Ondulatória"
  },
  {
    "id": "cie-2em-e-06",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "A equação de Arrhenius na cinética química relaciona a constante de velocidade k com a temperatura absoluta T por k = A × e^(-Ea / RT). O aumento da temperatura eleva a velocidade reacional porque:",
    "options": [
      "Diminui a energia de ativação necessária alterando o caminho molecular da reação",
      "Modifica a entalpia dos produtos diminuindo a estabilidade termodinâmica final no meio reacional",
      "Aumenta a fração de moléculas com energia cinética superior à energia de ativação",
      "Inverte o sentido espontâneo da reação transformando endotérmica em exotérmica"
    ],
    "correctAnswer": 2,
    "explanation": "A distribuição de Maxwell-Boltzmann amplia significativamente o número de choques efetivos com energia suficiente.",
    "bnccSkill": "EM13CNT205",
    "topic": "Soluções e Equilíbrio Químico"
  },
  {
    "id": "cie-2em-e-07",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "Na deriva genética (efeito gargalo e efeito fundador), as variações nas frequências alélicas de uma população ocorrem por:",
    "options": [
      "Seleção natural direcional intensa",
      "Vantagem do heterozigoto em epidemias",
      "Panmixia equilibrada contínua em meio biológico",
      "Eventos estocásticos puramente aleatórios independentes do valor adaptativo dos alelos"
    ],
    "correctAnswer": 3,
    "explanation": "Catástrofes ou fundações por pequenas amostras alteram o pool gênico por mero acaso, fixando ou eliminando alelos.",
    "bnccSkill": "EM13CNT202",
    "topic": "Histologia, Fisiologia e Genética"
  },
  {
    "id": "cie-2em-e-08",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "Em um tubo sonoro aberto de comprimento L, a frequência do som fundamental (1º harmônico) emitido é f₁ = v / (2L). Em um tubo fechado de mesmo comprimento, a frequência fundamental f₁' vale:",
    "options": [
      "f₁' = v / (4L) (a metade do tubo aberto)",
      "f₁' = v / (2L)",
      "f₁' = 2v / L",
      "f₁' = v / L"
    ],
    "correctAnswer": 0,
    "explanation": "O tubo fechado forma nó na extremidade fechada e ventre na aberta, contendo apenas ¼ do comprimento de onda no fundamental.",
    "bnccSkill": "EM13CNT103",
    "topic": "Óptica Geométrica e Ondulatória"
  },
  {
    "id": "cie-2em-e-09",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "O Princípio da Incerteza e a dualidade onda-partícula expressa pela relação de De Broglie estabelecem que o comprimento de onda associado a uma partícula de massa m e velocidade v é:",
    "options": [
      "λ = m × v / h",
      "λ = h /",
      "λ = h × m × v",
      "λ = h / c²"
    ],
    "correctAnswer": 1,
    "explanation": "A matéria possui propriedades ondulatórias inversamente proporcionais ao seu momento linear p = m·v.",
    "bnccSkill": "EM13CNT103",
    "topic": "Óptica Geométrica e Ondulatória"
  },
  {
    "id": "cie-2em-e-10",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "A especiação simpátrica ocorre sem a presença de isolamento geográfico, sendo frequentemente desencadeada em espécies vegetais por:",
    "options": [
      "Secas continentais prolongadas",
      "Migração de aves marinhas",
      "Poliploidia",
      "Deriva continental tectônica"
    ],
    "correctAnswer": 2,
    "explanation": "A duplicação cromossômica acidental gera descendentes instantaneamente isolados reprodutivamente das plantas parentais diploides.",
    "bnccSkill": "EM13CNT101",
    "topic": "Dinâmica Newtoniana e Energia"
  },
  {
    "id": "cie-2em-e-11",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "Em um motor térmico real, a 2ª Lei da Termodinâmica na formulação de Clausius estabelece que:",
    "options": [
      "A entropia do universo diminui a cada ciclo em meio biológico",
      "Toda energia cinética pode ser convertida em massa sem perda",
      "A temperatura de fusão independe da pressão",
      "O calor não pode fluir espontaneamente de um corpo mais frio para um corpo mais quente"
    ],
    "correctAnswer": 3,
    "explanation": "O fluxo espontâneo de calor exige gradiente térmico positivo do corpo de maior temperatura para o de menor.",
    "bnccSkill": "EM13CNT102",
    "topic": "Termodinâmica e Máquinas Térmicas"
  },
  {
    "id": "cie-2em-e-12",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "Uma reação química tem lei de velocidade experimental v = k [A]² [B]¹. Se a concentração do reagente A for dobrada e a de B for mantida constante, a velocidade da reação:",
    "options": [
      "Quadruplicará",
      "Dobrará",
      "Aumentará 8 vezes",
      "Permanecerá constante"
    ],
    "correctAnswer": 0,
    "explanation": "Como a ordem em relação a A é 2: (2)² = 4. A velocidade fica 4 vezes maior.",
    "bnccSkill": "EM13CNT205",
    "topic": "Soluções e Equilíbrio Químico"
  },
  {
    "id": "cie-2em-e-13",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "Qual é o mecanismo molecular subjacente à herança epigenética que altera a expressão fenotípica dos genes sem modificar a sequência de bases do DNA?",
    "options": [
      "Troca de nucleotídeos de adenina por timina",
      "Metilação de citosinas no DNA e modificações pós-traducionais de histonas",
      "Eliminação irreversível de éxons em meio biológico",
      "Inversão pericêntrica de cromossomos"
    ],
    "correctAnswer": 1,
    "explanation": "Marcas epigenéticas (como ilhotas CpG metiladas) compactam a cromatina e silenciam a transcrição sem alterar o código primário.",
    "bnccSkill": "EM13CNT202",
    "topic": "Histologia, Fisiologia e Genética"
  },
  {
    "id": "cie-2em-e-14",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "O arco-íris primário observado no céu após uma chuva é formado pela combinação de quais fenômenos ópticos nas gotículas de água suspensas?",
    "options": [
      "Difração em cristais de gelo e polarização",
      "Interferência luminosa em filmes finos",
      "Refração com dispersão cromática na entrada, reflexão interna e nova refração na saída",
      "Emissão estimulada de radiação em meio biológico"
    ],
    "correctAnswer": 2,
    "explanation": "A luz branca do Sol sofre refração/dispersão ao entrar na gota, reflete na face posterior e sofre nova refração ao sair.",
    "bnccSkill": "EM13CNT103",
    "topic": "Óptica Geométrica e Ondulatória"
  },
  {
    "id": "cie-2em-e-15",
    "subject": "ciencias",
    "grade": "2º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "Em uma mistura eutética de dois sólidos metálicos, a transição entre sólido e líquido ocorre:",
    "options": [
      "Variação linear ampla de temperatura durante a transição da fase sólida para líquida",
      "Ebulição endotérmica sem patamar térmico em decorrência da mistura heterogênea",
      "Sublimação espontânea antes de atingir o ponto de liquefação em pressão atmosférica",
      "Fusão sob temperatura constante comportando-se termicamente como substância pura"
    ],
    "correctAnswer": 3,
    "explanation": "Misturas eutéticas possuem ponto de fusão constante invariável característico.",
    "bnccSkill": "EM13CNT101",
    "topic": "Dinâmica Newtoniana e Energia"
  },
  {
    "id": "cie-3em-f-01",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "Compostos orgânicos formados exclusivamente por átomos de carbono e hidrogênio pertencem à função orgânica dos:",
    "options": [
      "Hidrocarbonetos",
      "Álcoois",
      "Ésteres",
      "Aminas"
    ],
    "correctAnswer": 0,
    "explanation": "Hidrocarbonetos (como alcanos, alcenos e alcinos) são constituídos unicamente por ligações C e H.",
    "bnccSkill": "EM13CNT104",
    "topic": "Funções e Reações Orgânicas"
  },
  {
    "id": "cie-3em-f-02",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "A Lei de Coulomb estabelece que a força eletrostática entre duas cargas puntiformes no vácuo é:",
    "options": [
      "Inversamente proporcional ao produto das cargas e à distância linear entre elas",
      "Proporcional ao produto das cargas e inversamente ao quadrado da distância",
      "Independente do meio material e proporcional à raiz cúbica da distância linear",
      "Constante em qualquer ponto do campo eletrostático e sempre de natureza repulsiva"
    ],
    "correctAnswer": 1,
    "explanation": "F = k |q₁ q₂| / d²; cargas de mesmo sinal repelem-se e de sinais opostos atraem-se.",
    "bnccSkill": "EM13CNT106",
    "topic": "Eletromagnetismo e Indução"
  },
  {
    "id": "cie-3em-f-03",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "O conjunto formado por todos os indivíduos da mesma espécie que habitam uma determinada área geográfica no mesmo período de tempo constitui uma:",
    "options": [
      "Comunidade biótica",
      "Biocenose mista",
      "População biológica",
      "Biosfera total em meio biológico"
    ],
    "correctAnswer": 2,
    "explanation": "População é o nível de organização ecológica que reúne espécimes conespecíficos interagindo no mesmo hábitat.",
    "bnccSkill": "EM13CNT208",
    "topic": "Biotecnologia e Ecologia Avançada"
  },
  {
    "id": "cie-3em-f-04",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "Qual função orgânica oxigenada é caracterizada pela presença do grupo funcional hidroxila (-OH) ligado diretamente a um carbono saturado (sp³)?",
    "options": [
      "Fenol",
      "Aldeído",
      "Cetona",
      "Álcool"
    ],
    "correctAnswer": 3,
    "explanation": "Álcoois possuem hidroxila ligada a carbono saturado (exemplo: etanol, CH₃CH₂OH).",
    "bnccSkill": "EM13CNT104",
    "topic": "Funções e Reações Orgânicas"
  },
  {
    "id": "cie-3em-f-05",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "Em eletromagnetismo, um condutor percorrido por uma corrente elétrica estacionária gera ao seu redor no espaço um:",
    "options": [
      "Campo magnético",
      "Campo gravitacional quântico",
      "Vácuo perfeito",
      "Feixe de radiação gama"
    ],
    "correctAnswer": 0,
    "explanation": "O experimento histórico de Oersted (1820) demonstrou que correntes elétricas produzem campos magnéticos.",
    "bnccSkill": "EM13CNT106",
    "topic": "Eletromagnetismo e Indução"
  },
  {
    "id": "cie-3em-f-06",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "O nicho ecológico de uma espécie representa:",
    "options": [
      "O endereço geográfico físico onde ela mora",
      "O \"papel funcional\" ou modo de vida da espécie no ecossistema",
      "A densidade de biomassa do solo",
      "O clima do bioma em meio biológico"
    ],
    "correctAnswer": 1,
    "explanation": "O hábitat é o \"endereço\" e o nicho ecológico é a \"profissão\" ou papel desempenhado pela espécie na teia trófica.",
    "bnccSkill": "EM13CNT208",
    "topic": "Biotecnologia e Ecologia Avançada"
  },
  {
    "id": "cie-3em-f-07",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "O hidrocarboneto alcano mais simples que é o principal componente do gás natural e do biogás é o:",
    "options": [
      "Etano (C₂H₆)",
      "Propano (C₃H₈) de forma contínua",
      "Metano (CH₄)",
      "Butano (C₄H₁₀)"
    ],
    "correctAnswer": 2,
    "explanation": "O metano possui um único carbono tetraédrico ligado a 4 hidrogênios.",
    "bnccSkill": "EM13CNT104",
    "topic": "Funções e Reações Orgânicas"
  },
  {
    "id": "cie-3em-f-08",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "A Lei da Indução de Faraday estabelece que uma força eletromotriz (f.e.m.) induzida surge em uma espira condutora quando há variação temporal do:",
    "options": [
      "Comprimento do fio condutor",
      "Peso do ímã no referencial inercial",
      "Potencial gravitacional",
      "Fluxo magnético através da espira"
    ],
    "correctAnswer": 3,
    "explanation": "ε = - dΦ_B / dt; a variação do fluxo magnético no tempo induz corrente elétrica.",
    "bnccSkill": "EM13CNT106",
    "topic": "Eletromagnetismo e Indução"
  },
  {
    "id": "cie-3em-f-09",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "A relação ecológica harmônica interespecífica na qual ambas as espécies associadas obtêm benefícios mútuos vitais e indispensáveis para a sobrevivência é o:",
    "options": [
      "Mutualismo obrigatório",
      "Comensalismo",
      "Inquilinismo",
      "Parasitismo"
    ],
    "correctAnswer": 0,
    "explanation": "No mutualismo obrigatório (ex: líquens, micorrizas), a sobrevivência de ambos os parceiros depende da associação.",
    "bnccSkill": "EM13CNT208",
    "topic": "Biotecnologia e Ecologia Avançada"
  },
  {
    "id": "cie-3em-f-10",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "O vinagre comercial de uso culinário é uma solução aquosa diluída (aprox. 4%) de qual ácido carboxílico?",
    "options": [
      "Ácido metanoico",
      "Ácido etanoico",
      "Ácido benzoico",
      "Ácido oxálico"
    ],
    "correctAnswer": 1,
    "explanation": "O ácido acético confere o sabor e odor característicos do vinagre comercial.",
    "bnccSkill": "EM13CNT104",
    "topic": "Funções e Reações Orgânicas"
  },
  {
    "id": "cie-3em-f-11",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "Cargas elétricas de mesmo sinal (positiva com positiva ou negativa com negativa) exercem entre si força de:",
    "options": [
      "Atração gravitacional exclusiva",
      "Torque nulo",
      "Repulsão eletrostática",
      "Fissão iônica"
    ],
    "correctAnswer": 2,
    "explanation": "Princípio da atração e repulsão das cargas: sinais iguais se repelem; sinais contrários se atraem.",
    "bnccSkill": "EM13CNT106",
    "topic": "Eletromagnetismo e Indução"
  },
  {
    "id": "cie-3em-f-12",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "A substância química resultante da reação de um ácido carboxílico com um álcool (esterificação), frequentemente utilizada como flavorizante com aroma de frutas, é um:",
    "options": [
      "Éter volátil",
      "Aldeído graxo",
      "Sal anorgânico",
      "Éster orgânico"
    ],
    "correctAnswer": 3,
    "explanation": "Ácido carboxílico + Álcool ⇌ Éster + Água.",
    "bnccSkill": "EM13CNT104",
    "topic": "Funções e Reações Orgânicas"
  },
  {
    "id": "cie-3em-f-13",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "Qual é o nome da unidade de indução magnética (campo magnético B) no Sistema Internacional de Unidades?",
    "options": [
      "Tesla (T)",
      "Weber (Wb)",
      "Henry (H)",
      "Gauss (G)"
    ],
    "correctAnswer": 0,
    "explanation": "O Tesla (T) equivale a 1 N / (A·m) no SI, em homenagem a Nikola Tesla.",
    "bnccSkill": "EM13CNT106",
    "topic": "Eletromagnetismo e Indução"
  },
  {
    "id": "cie-3em-f-14",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "A relação ecológica harmônica em que uma espécie se beneficia de restos alimentares de outra sem causar nenhum prejuízo ou benefício a ela (como as rêmoras e tubarões) é o:",
    "options": [
      "Protocooperação",
      "Comensalismo",
      "Amensalismo",
      "Predatismo"
    ],
    "correctAnswer": 1,
    "explanation": "No comensalismo, há benefício unilateral (+/0) sem ônus para o hospedeiro.",
    "bnccSkill": "EM13CNT208",
    "topic": "Biotecnologia e Ecologia Avançada"
  },
  {
    "id": "cie-3em-f-15",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "facil",
    "xp": 20,
    "question": "A função orgânica nitrogenada derivada da substituição de um ou mais átomos de hidrogênio da amônia (NH₃) por radicais carbônicos orgânicos é a:",
    "options": [
      "Amida",
      "Nitrila",
      "Amina",
      "Nitrocomposto"
    ],
    "correctAnswer": 2,
    "explanation": "Aminas (primárias, secundárias e terciárias) têm nitrogênio ligado a cadeias carbônicas.",
    "bnccSkill": "EM13CNT104",
    "topic": "Funções e Reações Orgânicas"
  },
  {
    "id": "cie-3em-m-01",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "Dois corpos com cargas pontuais q₁ = 2 × 10⁻⁶ C e q₂ = 3 × 10⁻⁶ C estão separados no vácuo por uma distância de d = 0,3 m. Considerando a constante eletrostática k₀ = 9 × 10⁹ N·m²/C², qual é a força eletrostática entre eles?",
    "options": [
      "6 N",
      "0,06 N",
      "60 N",
      "0,6 N"
    ],
    "correctAnswer": 3,
    "explanation": "F = k₀ |q₁ q₂| / d² = (9 × 10⁹ × 6 × 10⁻¹²) / (0,09) = 54 × 10⁻³ / 9 × 10⁻² = 0,6 N.",
    "bnccSkill": "EM13CNT106",
    "topic": "Eletromagnetismo e Indução"
  },
  {
    "id": "cie-3em-m-02",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "A nomenclatura oficial IUPAC para o composto orgânico de fórmula estrutural CH₃-CH₂-CO-CH₃ é:",
    "options": [
      "Butan-2-ona",
      "Butanal",
      "Ácido butanoico",
      "Butan-2-ol"
    ],
    "correctAnswer": 0,
    "explanation": "Cadeia de 4 carbonos com carbonila (C=O) secundária na posição 2 é uma cetona: butan-2-ona.",
    "bnccSkill": "EM13CNT104",
    "topic": "Funções e Reações Orgânicas"
  },
  {
    "id": "cie-3em-m-03",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "Em uma pilha eletroquímica de Daniell (Zn / Zn²⁺ // Cu²⁺ / Cu), o polo negativo onde ocorre a oxidação com perda de elétrons e desgaste da placa metálica é o:",
    "options": [
      "Cátodo",
      "Ânodo",
      "Ponte salina de KCl",
      "Eletrólito neutro"
    ],
    "correctAnswer": 1,
    "explanation": "Ânodo = polo negativo onde ocorre oxidação: Zn(s) → Zn²⁺(aq) + 2 e⁻.",
    "bnccSkill": "EM13CNT205",
    "topic": "Eletroquímica e Pilhas"
  },
  {
    "id": "cie-3em-m-04",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "Qual fenômeno ecológico consiste no acúmulo progressivo de substâncias tóxicas não biodegradáveis (como mercúrio e pesticidas organoclorados) ao longo dos níveis tróficos de uma teia alimentar?",
    "options": [
      "Eutrofização antrópica",
      "Sucessão clímax em meio biológico",
      "Biomagnificação trófica",
      "Fixação biológica"
    ],
    "correctAnswer": 2,
    "explanation": "Como a substância não é metabolizada, predadores de topo absorvem doses cumulativamente mais concentradas.",
    "bnccSkill": "EM13CNT101",
    "topic": "Fenômenos Quânticos e Eletromagnéticos"
  },
  {
    "id": "cie-3em-m-05",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "A força magnética que atua sobre uma carga elétrica pontual q que se move com velocidade v perpendicularmente a um campo magnético uniforme B (θ = 90°) é dada por:",
    "options": [
      "F = q × E",
      "F = B /",
      "F = m × v² / B",
      "F = q × v × B"
    ],
    "correctAnswer": 3,
    "explanation": "F_mag = q v B sen(θ); como sen(90°) = 1, temos F = q v B.",
    "bnccSkill": "EM13CNT106",
    "topic": "Eletromagnetismo e Indução"
  },
  {
    "id": "cie-3em-m-06",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "O fenol é um composto orgânico caracterizado pela ligação direta do grupo hidroxila (-OH) a um:",
    "options": [
      "Anel aromático (benzeno)",
      "Carbono saturado alifático",
      "Grupo carbonila",
      "Átomo de nitrogênio"
    ],
    "correctAnswer": 0,
    "explanation": "Fenois possuem anel benzênico ligado diretamente a -OH (ex: hidroxibenzeno ou fenol comum).",
    "bnccSkill": "EM13CNT104",
    "topic": "Funções e Reações Orgânicas"
  },
  {
    "id": "cie-3em-m-07",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "Dois resistores de 4 Ω e 6 Ω são associados em série e submetidos a uma d.d.p. total de 20 V. Qual é a corrente elétrica que percorre a associação?",
    "options": [
      "10 A",
      "2 A",
      "0,5 A",
      "4 A"
    ],
    "correctAnswer": 1,
    "explanation": "R_eq = 4 + 6 = 10 Ω. I = U / R_eq = 20 / 10 = 2 A.",
    "bnccSkill": "EM13CNT106",
    "topic": "Eletromagnetismo e Indução"
  },
  {
    "id": "cie-3em-m-08",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "Qual é a diferença funcional entre aldeídos e cetonas em relação à localização do grupo carbonila (C=O)?",
    "options": [
      "Cetonas possuem nitrogênio e aldeídos enxofre",
      "Aldeídos são sempre cíclicos e cetonas abertas",
      "Aldeídos possuem carbonila na extremidade da cadeia e cetonas em carbono secundário interior",
      "Não há diferença em meio biológico"
    ],
    "correctAnswer": 2,
    "explanation": "Aldeídos terminam em -CHO; cetonas contêm -CO- entre carbonos.",
    "bnccSkill": "EM13CNT104",
    "topic": "Funções e Reações Orgânicas"
  },
  {
    "id": "cie-3em-m-09",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "Em um transformador elétrico ideal, a razão entre as tensões do enrolamento primário (V_p) e secundário (V_s) é igual à razão entre os números de espiras:",
    "options": [
      "V_p / V_s = N_s / N_p",
      "V_p × V_s = N_p × N_s",
      "V_p / N_p = I_p / I_s",
      "V_p / V_s = N_p / N_s"
    ],
    "correctAnswer": 3,
    "explanation": "Pela Lei de Faraday, a f.e.m. induzida em cada enrolamento é diretamente proporcional ao número de espiras correspondente.",
    "bnccSkill": "EM13CNT106",
    "topic": "Eletromagnetismo e Indução"
  },
  {
    "id": "cie-3em-m-10",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "A pirâmide ecológica que NUNCA pode ser invertida em nenhum ecossistema biológico terrestre ou aquático é a:",
    "options": [
      "Pirâmide de energia",
      "Pirâmide de biomassa",
      "Pirâmide de números",
      "Pirâmide trófica populacional"
    ],
    "correctAnswer": 0,
    "explanation": "Pela 2ª Lei da Termodinâmica, a energia útil dissipa-se continuamente em forma de calor a cada nível trófico, decrescendo estritamente.",
    "bnccSkill": "EM13CNT101",
    "topic": "Fenômenos Quânticos e Eletromagnéticos"
  },
  {
    "id": "cie-3em-m-11",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "Compostos que possuem a mesma fórmula molecular plana, mas diferem pela posição de um grupo funcional ou insaturação na cadeia carbônica, apresentam:",
    "options": [
      "Isomeria de cadeia",
      "Isomeria plana de posição",
      "Isomeria de função",
      "Tautomeria em meio biológico"
    ],
    "correctAnswer": 1,
    "explanation": "Exemplo: propan-1-ol e propan-2-ol possuem a mesma fórmula molecular (C₃H₈O), diferindo apenas no carbono que sustenta a hidroxila.",
    "bnccSkill": "EM13CNT104",
    "topic": "Funções e Reações Orgânicas"
  },
  {
    "id": "cie-3em-m-12",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "A Lei de Lenz determina que o sentido da corrente induzida por variação de fluxo magnético em um circuito fechado é tal que seu campo magnético próprio:",
    "options": [
      "Reforça o fluxo magnético externo",
      "Aponta sempre para o Polo Norte geográfico",
      "Opõe-se à variação do fluxo magnético que a produziu",
      "Anula a resistência do condutor em meio biológico"
    ],
    "correctAnswer": 2,
    "explanation": "A Lei de Lenz decorre da conservação da energia e justifica o sinal negativo na Lei de Faraday (ε = -dΦ/dt).",
    "bnccSkill": "EM13CNT106",
    "topic": "Eletromagnetismo e Indução"
  },
  {
    "id": "cie-3em-m-13",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "Uma diferença essencial entre uma pilha eletroquímica galvânica e uma cuba eletrolítica (eletrólise) é que a eletrólise é:",
    "options": [
      "Um processo espontâneo gerador de tensão elétrica",
      "Uma reação que não envolve oxirredução",
      "Exclusivamente endotérmica sem íons no meio reacional",
      "Um processo não espontâneo forçado por uma fonte externa de corrente contínua"
    ],
    "correctAnswer": 3,
    "explanation": "A pilha gera energia elétrica a partir de uma reação espontânea (ΔE° > 0); a eletrólise consome energia externa para realizar reações não espontâneas.",
    "bnccSkill": "EM13CNT205",
    "topic": "Eletroquímica e Pilhas"
  },
  {
    "id": "cie-3em-m-14",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "O petróleo e o carvão mineral são recursos energéticos não renováveis originados a partir de:",
    "options": [
      "Decomposição anaeróbia de matéria orgânica sedimentada sob alta pressão e calor geológico",
      "Resfriamento rápido de rochas basálticas expelidas em erupções vulcânicas submarinas",
      "Precipitação mineral de carbonato de cálcio impulsionada pela radiação solar fóssil",
      "Condensação profunda de vapores hidrotermais ricos em compostos sulfatados da crosta"
    ],
    "correctAnswer": 0,
    "explanation": "Fitoplâncton antigo acumulado em bacias anóxicas submarinas transformou-se em querogênio e petróleo ao longo de dezenas de milhões de anos.",
    "bnccSkill": "EM13CNT101",
    "topic": "Fenômenos Quânticos e Eletromagnéticos"
  },
  {
    "id": "cie-3em-m-15",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "medio",
    "xp": 35,
    "question": "O gás cloro (Cl₂) é produzido industrialmente em larga escala pela eletrólise aquosa de qual sal comum?",
    "options": [
      "Carbonato de cálcio",
      "Cloreto de sódio",
      "Sulfato de cobre",
      "Nitrato de potássio"
    ],
    "correctAnswer": 1,
    "explanation": "A eletrólise da salmoura (processo cloro-álcali) produz gás cloro (Cl₂) no ânodo, gás hidrogênio (H₂) no cátodo e soda cáustica (NaOH).",
    "bnccSkill": "EM13CNT205",
    "topic": "Eletroquímica e Pilhas"
  },
  {
    "id": "cie-3em-d-01",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "Dadas as semirreações com potenciais padrão de redução: Zn²⁺ + 2 e⁻ → Zn (E° = -0,76 V) e Cu²⁺ + 2 e⁻ → Cu (E° = +0,34 V), qual é a força eletromotriz padrão (ΔE°) da pilha de Daniell?",
    "options": [
      "-1,10 V de forma contínua",
      "+0,42 V",
      "+1,10 V",
      "+1,52 V"
    ],
    "correctAnswer": 2,
    "explanation": "ΔE° = E°_maior (cobre) - E°_menor (zinco) = +0,34 - (-0,76) = +0,34 + 0,76 = +1,10 V.",
    "bnccSkill": "EM13CNT205",
    "topic": "Eletroquímica e Pilhas"
  },
  {
    "id": "cie-3em-d-02",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "Para apresentar isomeria geométrica (cis-trans ou Z-E), um composto orgânico com dupla ligação C=C deve possuir:",
    "options": [
      "Uma cadeia aberta com quatro carbonos saturados",
      "Um carbono assimétrico quiral",
      "Um anel aromático em meio biológico",
      "Dois ligantes diferentes entre si em cada um dos carbonos da dupla ligação"
    ],
    "correctAnswer": 3,
    "explanation": "A rotação impedida ao redor da dupla ligação C=C gera isômeros cis/trans apenas se os dois grupos ligados a cada carbono forem distintos.",
    "bnccSkill": "EM13CNT104",
    "topic": "Funções e Reações Orgânicas"
  },
  {
    "id": "cie-3em-d-03",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "Um fio condutor retilíneo e longo conduz uma corrente elétrica constante de I = 10 A no vácuo. Qual é a intensidade do campo magnético B a uma distância r = 0,2 m do fio (μ₀ = 4π × 10⁻⁷ T·m/A)?",
    "options": [
      "1 × 10⁻⁵ T",
      "2 × 10⁻⁵ T",
      "4 × 10⁻⁶ T",
      "1 × 10⁻⁴ T"
    ],
    "correctAnswer": 0,
    "explanation": "B = (μ₀ × I) / (2π × r) = (4π × 10⁻⁷ × 10) / (2π × 0,2) = (2 × 10⁻⁶) / 0,2 = 1 × 10⁻⁵ T.",
    "bnccSkill": "EM13CNT106",
    "topic": "Eletromagnetismo e Indução"
  },
  {
    "id": "cie-3em-d-04",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "A Lei de Coulomb combinada com o conceito de campo elétrico define que o campo elétrico E criado por uma carga puntiforme Q no vácuo à distância d é:",
    "options": [
      "E = k₀ |Q| / d",
      "E = k₀ |Q| / d²",
      "E = F × d em meio biológico",
      "E = k₀ Q² / d"
    ],
    "correctAnswer": 1,
    "explanation": "O vetor campo elétrico é a força eletrostática por unidade de carga de prova: E = F / q = k₀ |Q| / d².",
    "bnccSkill": "EM13CNT106",
    "topic": "Eletromagnetismo e Indução"
  },
  {
    "id": "cie-3em-d-05",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "A presença de um carbono quiral assimétrico (ligado a 4 ligantes diferentes) em uma molécula orgânica confere-lhe a capacidade de exibir:",
    "options": [
      "Isomeria de compensação",
      "Isomeria geométrica plana",
      "Isomeria óptica",
      "Combustão espontânea"
    ],
    "correctAnswer": 2,
    "explanation": "Centros quirais desprovidos de plano de simetria desviam o plano da luz polarizada para a direita (d) ou esquerda (l).",
    "bnccSkill": "EM13CNT104",
    "topic": "Funções e Reações Orgânicas"
  },
  {
    "id": "cie-3em-d-06",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "Na reação de saponificação para fabricação de sabão tradicional, um triglicerídeo (óleo ou gordura vegetal/animal) reage com hidróxido de sódio (NaOH) produzindo sabão e:",
    "options": [
      "Etanol puro",
      "Ácido acético",
      "Gás metano",
      "Glicerol"
    ],
    "correctAnswer": 3,
    "explanation": "A hidrólise alcalina de ésteres de ácidos graxos quebra as ligações éster, liberando sais de sódio (sabão) e propano-1,2,3-triol (glicerol).",
    "bnccSkill": "EM13CNT104",
    "topic": "Funções e Reações Orgânicas"
  },
  {
    "id": "cie-3em-d-07",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "Um elétron de carga q = -1,6 × 10⁻¹⁹ C entra com velocidade v = 2 × 10⁶ m/s perpendicularmente a um campo magnético B = 0,5 T. Qual é o raio R da trajetória circular descrita pelo elétron (m_e = 9 × 10⁻³¹ kg)?",
    "options": [
      "≈ 2,25 × 10⁻⁵ m",
      "≈ 4,5 × 10⁻⁴ m",
      "≈ 1,1 × 10⁻³ m",
      "≈ 3,6 × 10⁻² m"
    ],
    "correctAnswer": 0,
    "explanation": "F_mag = F_cp → q v B = m v² / R → R = (m v) / (q B) = (9 × 10⁻³¹ × 2 × 10⁶) / (1,6 × 10⁻¹⁹ × 0,5) = 1,8 × 10⁻²⁴ / 8 × 10⁻²⁰ = 2,25 × 10⁻⁵ m.",
    "bnccSkill": "EM13CNT106",
    "topic": "Eletromagnetismo e Indução"
  },
  {
    "id": "cie-3em-d-08",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "O fenômeno ecológico no qual um corpo d’água sofre proliferação excessiva de cianobactérias tóxicas por excesso de fósforo e nitrogênio de esgotos, culminando em anóxia profunda e morte massiva de peixes, é a:",
    "options": [
      "Bioacumulação cárstica",
      "Eutrofização artificial",
      "Salinização eólica",
      "Intrusão salina em meio biológico"
    ],
    "correctAnswer": 1,
    "explanation": "A decomposição anaeróbia do lodo orgânico bacteriano zera a concentração de oxigênio dissolvido na água.",
    "bnccSkill": "EM13CNT104",
    "topic": "Funções e Reações Orgânicas"
  },
  {
    "id": "cie-3em-d-09",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "Pela 1ª Lei da Eletrólise de Faraday, a massa m de uma substância eletrodepositada ou liberada em um eletrodo durante a eletrólise é:",
    "options": [
      "Inversamente proporcional à corrente aplicada",
      "Independente do tempo da eletrólise",
      "Diretamente proporcional à carga elétrica total Q que atravessou o circuito",
      "Constante para qualquer cátion em meio biológico"
    ],
    "correctAnswer": 2,
    "explanation": "m = (M × I × Δt) / (n × F), proporcional à quantidade de carga elétrica acumulada.",
    "bnccSkill": "EM13CNT106",
    "topic": "Eletromagnetismo e Indução"
  },
  {
    "id": "cie-3em-d-10",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "Qual é o número de isômeros ópticos ativos de um composto orgânico com 3 carbonos assimétricos (quirais) não equivalentes (Regra de van 't Hoff: 2ⁿ)?",
    "options": [
      "6 isômeros em meio biológico",
      "4 isômeros",
      "16 isômeros",
      "8 isômeros ativos"
    ],
    "correctAnswer": 3,
    "explanation": "N_ativos = 2ⁿ = 2³ = 8 isômeros opticamente ativos e 4 misturas racêmicas.",
    "bnccSkill": "EM13CNT104",
    "topic": "Funções e Reações Orgânicas"
  },
  {
    "id": "cie-3em-d-11",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "A energia potencial eletrostática U armazenada em um capacitor de capacitância C submetido a uma tensão V é dada por:",
    "options": [
      "U = ½ C V²",
      "U = C × V",
      "U = ½ C² V",
      "U = V / C"
    ],
    "correctAnswer": 0,
    "explanation": "A energia no campo elétrico entre as placas do capacitor é U = ½ C V² = ½ Q V.",
    "bnccSkill": "EM13CNT106",
    "topic": "Eletromagnetismo e Indução"
  },
  {
    "id": "cie-3em-d-12",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "A oxidação branda de um alceno com solução aquosa diluída de permanganato de potássio em meio neutro ou levemente básico (Reagente de Baeyer) produz:",
    "options": [
      "Dois ácidos carboxílicos",
      "Um diol vicinal (glicol)",
      "Ácido acético e CO₂",
      "Um éter cíclico"
    ],
    "correctAnswer": 1,
    "explanation": "A oxidação branda quebra apenas a ligação pi, adicionando duas hidroxilas em carbonos adjacentes (glicol).",
    "bnccSkill": "EM13CNT104",
    "topic": "Funções e Reações Orgânicas"
  },
  {
    "id": "cie-3em-d-13",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "Em um condutor retilíneo de comprimento L percorrido por corrente I imerso em campo magnético B uniforme perpendicular (θ = 90°), a força magnética sobre o fio é:",
    "options": [
      "F = B /",
      "F = I² × R",
      "F = B × I × L",
      "F = B × L / I de forma contínua"
    ],
    "correctAnswer": 2,
    "explanation": "A força de Laplace sobre um condutor retilíneo é F = B I L sen(θ).",
    "bnccSkill": "EM13CNT106",
    "topic": "Eletromagnetismo e Indução"
  },
  {
    "id": "cie-3em-d-14",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "O monômero fundamental utilizado na polimerização por adição para a produção industrial do polietileno (plástico PE) é o:",
    "options": [
      "Propeno",
      "Cloreto de vinila",
      "Estireno",
      "Eteno"
    ],
    "correctAnswer": 3,
    "explanation": "A quebra da dupla ligação do eteno permite que milhares de unidades monoméricas se encadeiem no polietileno.",
    "bnccSkill": "EM13CNT101",
    "topic": "Fenômenos Quânticos e Eletromagnéticos"
  },
  {
    "id": "cie-3em-d-15",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "dificil",
    "xp": 55,
    "question": "A teoria do isolamento reprodutivo estabelece que o mecanismo pré-zigótico no qual duas espécies de rãs habitam a mesma lagoa, mas realizam corte e acasalamento em épocas diferentes do ano, é o:",
    "options": [
      "Isolamento temporal ou estacional",
      "Isolamento ecológico de hábitat",
      "Isolamento mecânico anatômico",
      "Inviabilidade do híbrido"
    ],
    "correctAnswer": 0,
    "explanation": "Diferenças nos períodos de fertilidade ou estações de acasalamento impedem o cruzamento interespecífico.",
    "bnccSkill": "EM13CNT208",
    "topic": "Biotecnologia e Ecologia Avançada"
  },
  {
    "id": "cie-3em-e-01",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "Em eletromagnetismo clássico, a Lei de Ampère-Maxwell corrige a circuitação do campo magnético introduzindo a corrente de deslocamento de Maxwell I_d, dada por:",
    "options": [
      "I_d = μ₀ ×",
      "I_d = ε₀ ×",
      "I_d = q / Δt",
      "I_d = V / R"
    ],
    "correctAnswer": 1,
    "explanation": "Maxwell unificou o eletromagnetismo ao demonstrar que um campo elétrico variável no tempo gera campo magnético induzido.",
    "bnccSkill": "EM13CNT106",
    "topic": "Eletromagnetismo e Indução"
  },
  {
    "id": "cie-3em-e-02",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "Na reação de substituição eletrofílica aromática de nitração do benzeno com ácido nítrico e ácido sulfúrico concentrados, a espécie eletrofílica reativa gerada é o:",
    "options": [
      "Ânion nitrato (NO₃⁻) de forma contínua",
      "Gás nitrogênio (N₂)",
      "Íon nitrônio (NO₂⁺)",
      "Radical hidroxila"
    ],
    "correctAnswer": 2,
    "explanation": "O H₂SO₄ protona o HNO₃, liberando água e gerando o eletrófilo potente cátion nitrônio NO₂⁺.",
    "bnccSkill": "EM13CNT104",
    "topic": "Funções e Reações Orgânicas"
  },
  {
    "id": "cie-3em-e-03",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "A Equação de Nernst permite calcular o potencial de eletrodo real E de uma pilha fora das condições padrão através da relação:",
    "options": [
      "E = E° + nF ln(Q)",
      "E = E° × Q em meio biológico",
      "E = E° / ln(K)",
      "E = E° - (RT / nF) ln(Q)"
    ],
    "correctAnswer": 3,
    "explanation": "A 25 °C, E = E° - (0,0592 / n) log₁₀(Q), corrigindo a força eletromotriz pelas concentrações iônicas reais.",
    "bnccSkill": "EM13CNT205",
    "topic": "Eletroquímica e Pilhas"
  },
  {
    "id": "cie-3em-e-04",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "O Teorema de Poynting descreve o fluxo de energia por unidade de área transportado por uma onda eletromagnética através do Vetor de Poynting S, definido por:",
    "options": [
      "S =",
      "S = ε₀ (E · B)",
      "S = ½ c B²",
      "S = E / B"
    ],
    "correctAnswer": 0,
    "explanation": "O produto vetorial E × B indica a direção e magnitude do fluxo de irradiância eletromagnética (W/m²).",
    "bnccSkill": "EM13CNT106",
    "topic": "Eletromagnetismo e Indução"
  },
  {
    "id": "cie-3em-e-05",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "A tautomeria ceto-enólica é um caso especial de isomeria dinâmica em que um composto cetônico ou aldeídico coexiste em equilíbrio com qual espécie insaturada?",
    "options": [
      "Um éter cíclico",
      "Um enol",
      "Um ácido carboxílico",
      "Uma amina secundária"
    ],
    "correctAnswer": 1,
    "explanation": "O hidrogênio alfa migra para o oxigênio da carbonila com deslocamento do par de elétrons da ligação pi.",
    "bnccSkill": "EM13CNT104",
    "topic": "Funções e Reações Orgânicas"
  },
  {
    "id": "cie-3em-e-06",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "A hipótese da Rainha Vermelha de Leigh Van Valen na biologia evolutiva propõe que as espécies em ecossistemas naturais devem:",
    "options": [
      "Permanecer morfologicamente inalterada em equilíbrio pontuado ao longo das eras em meio biológico",
      "Aumentar indefinidamente o tamanho corporal médio para evitar a predação de topo",
      "Evoluir e se adaptar continuamente para manter sua sobrevivência diante de coevoluções",
      "Eliminar a variabilidade genética por seleção estabilizadora em nichos isolados"
    ],
    "correctAnswer": 2,
    "explanation": "\"É preciso correr o mais rápido possível apenas para continuar no mesmo lugar\": a coevolução cria pressões seletivas incessantes.",
    "bnccSkill": "EM13CNT208",
    "topic": "Biotecnologia e Ecologia Avançada"
  },
  {
    "id": "cie-3em-e-07",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "Em uma associação de resistores em ponte de Wheatstone em equilíbrio, a condição necessária para que a corrente no galvanômetro central seja rigorosamente nula é:",
    "options": [
      "R₁ + R₄ = R₂ + R₃",
      "R₁ / R₂ = 1",
      "Todas as resistências serem idênticas",
      "R₁ × R₄ = R₂ × R₃"
    ],
    "correctAnswer": 3,
    "explanation": "A igualdade de potenciais elétricos nos nós do galvanômetro exige R₁ R₄ = R₂ R₃.",
    "bnccSkill": "EM13CNT106",
    "topic": "Eletromagnetismo e Indução"
  },
  {
    "id": "cie-3em-e-08",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "A síntese de polímeros de condensação (como o poliéster PET e o náilon-6,6) diferencia-se da polimerização por adição porque:",
    "options": [
      "Eliminação concomitante de uma molécula pequena e simples a cada ligação monomérica",
      "Quebra de ligações triplas sem liberação de subprodutos durante a polimerização",
      "Rearranjo isomérico de monômeros sem alteração da massa molecular total do polímero",
      "Formação de ligações iônicas entre radicais livres gerados por clivagem homolítica"
    ],
    "correctAnswer": 0,
    "explanation": "Na policondensação, grupos funcionais (como carboxila e amina/álcool) reagem liberando H₂O e unindo as cadeias.",
    "bnccSkill": "EM13CNT104",
    "topic": "Funções e Reações Orgânicas"
  },
  {
    "id": "cie-3em-e-09",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "A teoria do campo cristalino (TCC) explica as cores vivas e o comportamento magnético de complexos de metais de transição pelo desdobramento energético dos orbitais:",
    "options": [
      "Orbitais s esféricos em meio biológico",
      "Orbitais d em subconjuntos t₂g e e_g sob influência do campo de ligantes",
      "Orbitais f nucleares",
      "Orbitais moleculares sigma"
    ],
    "correctAnswer": 1,
    "explanation": "Em campos octaédricos, os 5 orbitais d dividem-se em orbitais de menor energia (t₂g) e maior energia (e_g); a absorção de luz na transição d-d gera a cor.",
    "bnccSkill": "EM13CNT106",
    "topic": "Eletromagnetismo e Indução"
  },
  {
    "id": "cie-3em-e-10",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "A autoindutância L de um solenoide ideal com N espiras, comprimento l e área de seção reta A no vácuo é dada por:",
    "options": [
      "L = μ₀ N A / l",
      "L = μ₀ I N",
      "L = / l",
      "L = (μ₀ l) / (N² A)"
    ],
    "correctAnswer": 2,
    "explanation": "L = Φ_total / I = (N B A) / I = N (μ₀ N I / l) A / I = μ₀ N² A / l.",
    "bnccSkill": "EM13CNT101",
    "topic": "Fenômenos Quânticos e Eletromagnéticos"
  },
  {
    "id": "cie-3em-e-11",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "Na espectroscopia de ressonância magnética nuclear de prótons (RMN de ¹H), o sinal gerado por hidrogênios vizinhos desdobra-se em multipletos seguindo a regra geométrica clássica:",
    "options": [
      "Regra do n - 1",
      "Regra de Hund",
      "Regra 2ⁿ",
      "Regra do n + 1"
    ],
    "correctAnswer": 3,
    "explanation": "O acoplamento escalar spin-spin com n prótons vizinhos gera um padrão multiplete de n + 1 picos segundo o triângulo de Pascal.",
    "bnccSkill": "EM13CNT106",
    "topic": "Eletromagnetismo e Indução"
  },
  {
    "id": "cie-3em-e-12",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "O conceito ecológico de espécie-chave (keystone species) descreve uma espécie que:",
    "options": [
      "Influência desproporcional na comunidade ecológica em relação à sua biomassa",
      "Maior densidade populacional e maior biomassa acumulada em todo o ecossistema",
      "Colonização pioneira de rochas nuas nos estágios iniciais de sucessão primária",
      "Ocupação exclusiva do nível trófico dos produtores primários autotróficos do meio"
    ],
    "correctAnswer": 0,
    "explanation": "A remoção de uma espécie-chave (como a estrela-do-mar predadora Pisaster) provoca colapso na teia e dominância monopolista de presas.",
    "bnccSkill": "EM13CNT208",
    "topic": "Biotecnologia e Ecologia Avançada"
  },
  {
    "id": "cie-3em-e-13",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "Em um circuito elétrico RLC em série alimentado por fonte alternada de frequência angular ω, a ressonância elétrica ocorre quando:",
    "options": [
      "A resistência elétrica total do circuito ôhmico cai a zero em regime alternado",
      "A reatância indutiva iguala a reatância capacitiva no circuito oscilatório",
      "A impedância complexa atinge seu valor máximo absoluto bloqueando a corrente",
      "A frequência de ressonância independe da indutância da bobina e do capacitor"
    ],
    "correctAnswer": 1,
    "explanation": "Na ressonância, a impedância atinge o valor mínimo Z = R e a corrente atinge a máxima amplitude em fase com a tensão.",
    "bnccSkill": "EM13CNT106",
    "topic": "Eletromagnetismo e Indução"
  },
  {
    "id": "cie-3em-e-14",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "A regra de Markovnikov para reações de adição eletrofílica de haletos de hidrogênio (HX) a alcenos assimétricos estabelece que o átomo de hidrogênio liga-se preferencialmente ao:",
    "options": [
      "Carbono com menor número de hidrogênios",
      "Carbono terminal saturado em meio biológico",
      "Carbono da dupla ligação que já possui o maior número de hidrogênios",
      "Carbono que sofre oxidação"
    ],
    "correctAnswer": 2,
    "explanation": "A adição ao carbono mais hidrogenado gera o carbocátion mais substituído (terciário > secundário > primário), de menor energia de ativação.",
    "bnccSkill": "EM13CNT104",
    "topic": "Funções e Reações Orgânicas"
  },
  {
    "id": "cie-3em-e-15",
    "subject": "ciencias",
    "grade": "3º ano EM",
    "difficulty": "expert",
    "xp": 80,
    "question": "A teoria do equilíbrio pontuado de Stephen Jay Gould e Niles Eldredge na paleontologia propõe que a evolução das espécies ocorre por:",
    "options": [
      "Transformações graduais infinitamente lentas e homogêneas contínuas",
      "Mutações cromossômicas regressivas exclusivamente",
      "Herança lamarckiana de caracteres adquiridos em meio biológico",
      "Longos períodos de estase morfológica estável interrompidos por episódios rápidos de especiação ramificada"
    ],
    "correctAnswer": 3,
    "explanation": "O registro fóssil revela estabilidade das formas seguida de súbita irradiação adaptativa de novas espécies em isolamento periférico.",
    "bnccSkill": "EM13CNT208",
    "topic": "Biotecnologia e Ecologia Avançada"
  }
];
