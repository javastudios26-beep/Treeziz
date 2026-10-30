import { GradeType, DifficultyType } from '../index';
import { ProceduralQuestion } from './types';
import { balanceQuestionOptions, shuffleOptionsWithCorrect } from './optionBalancer';

// ============================================================================
// ESTRUTURA DO BANCO DE CONCEITOS CIENTÍFICOS VALIDADOS
// ============================================================================

interface ScienceConceptVariant {
  question: string;
  correct: string;
  distractors: string[];
  explanation: string;
}

interface ScienceConcept {
  id: string;
  topic: string;
  bnccSkill: string;
  variants: ScienceConceptVariant[];
}

function randChoice<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function formatOptions(correct: string, rawDistractors: string[]): { options: string[]; correctAnswer: number } {
  // Balanceia e calibra alternativas antes de formatar para evitar viés de tamanho
  const balanced = balanceQuestionOptions([correct, ...rawDistractors.slice(0, 3)], 0);
  const normCorrect = balanced.options[balanced.correctAnswer].trim();
  const distractors = balanced.options.filter((_, idx) => idx !== balanced.correctAnswer);

  const seen = new Set<string>([normCorrect.toLowerCase()]);
  const validDistractors: string[] = [];

  for (const d of distractors) {
    const trimmed = d.trim();
    const low = trimmed.toLowerCase();
    if (trimmed.length > 0 && !seen.has(low)) {
      seen.add(low);
      validDistractors.push(trimmed);
      if (validDistractors.length === 3) break;
    }
  }

  // Preenchimento de segurança se faltarem distratores únicos
  let rawIdx = 0;
  while (validDistractors.length < 3 && rawIdx < rawDistractors.length) {
    const rawTrim = rawDistractors[rawIdx++].trim();
    const low = rawTrim.toLowerCase();
    if (rawTrim.length > 0 && !seen.has(low)) {
      seen.add(low);
      validDistractors.push(rawTrim);
    }
  }

  const all = [normCorrect, validDistractors[0], validDistractors[1], validDistractors[2]];

  // Fisher-Yates shuffle para distribuição uniforme entre 0, 1, 2 e 3
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }

  return {
    options: all,
    correctAnswer: all.indexOf(normCorrect),
  };
}

function getXpForDifficulty(diff: DifficultyType): number {
  switch (diff) {
    case 'facil': return 20;
    case 'medio': return 35;
    case 'dificil': return 55;
    case 'expert': return 80;
  }
}

// ============================================================================
// CONCEITOS POR SÉRIE E DIFICULDADE (6º AO 3º EM)
// RIGOROSAMENTE BALANCEADOS: Sem viés de tamanho, estrutura ou vocabulário
// ============================================================================

const SCIENCE_KNOWLEDGE_BASE: Record<GradeType, Record<DifficultyType, ScienceConcept[]>> = {
  // --------------------------------------------------------------------------
  // 6º ANO
  // --------------------------------------------------------------------------
  '6º ano': {
    facil: [
      {
        id: 'cie6-f-celula',
        topic: 'Citologia Básica',
        bnccSkill: 'EF06CI05',
        variants: [
          {
            question: 'Qual organela citoplasmática é responsável pela respiração celular aeróbia e produção de ATP na célula eucariótica?',
            correct: 'Mitocôndria oxidativa',
            distractors: ['Complexo golgiense', 'Retículo rugoso', 'Lisossomo digestivo'],
            explanation: 'A mitocôndria oxida nutrientes e produz ATP (adenosina trifosfato) para sustentar o metabolismo celular.',
          },
          {
            question: 'Em uma análise ao microscópio óptico, qual estrutura reveste e delimita externamente a célula animal?',
            correct: 'Membrana plasmática',
            distractors: ['Parede celulósica', 'Carioteca nuclear', 'Matriz citosólica'],
            explanation: 'A membrana plasmática é a bicamada lipoproteica que envolve todas as células animais vivas.',
          },
        ],
      },
      {
        id: 'cie6-f-mistura',
        topic: 'Misturas e Fases',
        bnccSkill: 'EF06CI01',
        variants: [
          {
            question: 'A mistura uniforme de água mineral e cloreto de sódio totalmente dissolvido apresenta quantas fases visíveis?',
            correct: 'Apenas uma fase uniforme',
            distractors: ['Duas fases distintas', 'Três fases separadas', 'Quatro fases dispersas'],
            explanation: 'Soluções homogêneas são monofásicas, apresentando aspecto uniforme em toda a sua extensão.',
          },
          {
            question: 'A água potável com açúcar totalmente dissolvido em temperatura ambiente é classificada quimicamente como:',
            correct: 'Mistura homogênea líquida',
            distractors: ['Mistura heterogênea densa', 'Substância pura simples', 'Suspensão coloidal turva'],
            explanation: 'Quando o soluto é completamente dissolvido pelo solvente líquido, forma-se uma mistura homogênea.',
          },
        ],
      },
      {
        id: 'cie6-f-terra',
        topic: 'Camadas da Terra',
        bnccSkill: 'EF06CI11',
        variants: [
          {
            question: 'Qual é a camada mais superficial e rochosa da estrutura sólida do planeta Terra?',
            correct: 'Crosta terrestre rochosa',
            distractors: ['Núcleo externo líquido', 'Manto inferior pastoso', 'Astenosfera profunda'],
            explanation: 'A crosta terrestre é a camada externa rígida composta por rochas e minerais onde habitam os seres vivos.',
          },
        ],
      },
      {
        id: 'cie6-f-fotossintese',
        topic: 'Fotossíntese e Energia',
        bnccSkill: 'EF06CI06',
        variants: [
          {
            question: 'O processo autotrófico vegetal que converte água e gás carbônico em glicose sob a luz solar é a:',
            correct: 'Fotossíntese clorofiliana',
            distractors: ['Fermentação alcoólica', 'Transpiração estomática', 'Quimiossíntese mineral'],
            explanation: 'A fotossíntese ocorre nos cloroplastos com auxílio da clorofila, gerando matéria orgânica e oxigênio.',
          },
        ],
      },
    ],
    medio: [
      {
        id: 'cie6-m-separacao',
        topic: 'Separação de Misturas',
        bnccSkill: 'EF06CI03',
        variants: [
          {
            question: 'Qual método físico de separação é o mais indicado para recuperar a água líquida pura de uma solução salina?',
            correct: 'Destilação simples em condensador',
            distractors: ['Filtração mecânica por papel', 'Decantação estática por gravidade', 'Centrifugação manual de bancada'],
            explanation: 'A destilação simples separa líquidos de sólidos dissolvidos com base na grande diferença de pontos de ebulição.',
          },
        ],
      },
      {
        id: 'cie6-m-rochas',
        topic: 'Tipos de Rochas',
        bnccSkill: 'EF06CI12',
        variants: [
          {
            question: 'As rochas formadas diretamente pela solidificação e resfriamento do magma vulcânico são classificadas como:',
            correct: 'Rochas magmáticas ou ígneas',
            distractors: ['Rochas sedimentares estratificadas', 'Rochas metamórficas dobradas', 'Rochas bioclásticas marinhas'],
            explanation: 'O resfriamento do magma origina rochas magmáticas, tais como basalto vulcânico e granito plutônico.',
          },
        ],
      },
      {
        id: 'cie6-m-sistemas',
        topic: 'Organização Biológica',
        bnccSkill: 'EF06CI07',
        variants: [
          {
            question: 'Na hierarquia biológica dos organismos pluricelulares, a sequência correta de complexidade crescente é:',
            correct: 'Célula → Tecido → Órgão → Sistema',
            distractors: ['Tecido → Célula → Sistema → Órgão', 'Órgão → Sistema → Tecido → Célula', 'Sistema → Órgão → Célula → Tecido'],
            explanation: 'Células organizam-se em tecidos; tecidos compõem órgãos; órgãos coordenados formam sistemas corporais.',
          },
        ],
      },
    ],
    dificil: [
      {
        id: 'cie6-d-atmosfera',
        topic: 'Composição Atmosférica',
        bnccSkill: 'EF06CI13',
        variants: [
          {
            question: 'Qual gás é o componente mais abundante da atmosfera seca da Terra, constituindo cerca de 78% do volume?',
            correct: 'Gás nitrogênio diatômico',
            distractors: ['Gás oxigênio molecular', 'Dióxido de carbono gasoso', 'Vapor d’água saturado'],
            explanation: 'O gás nitrogênio (N₂) perfaz cerca de 78% do volume do ar atmosférico seco.',
          },
        ],
      },
      {
        id: 'cie6-d-decompositores',
        topic: 'Cadeias e Decomposição',
        bnccSkill: 'EF06CI04',
        variants: [
          {
            question: 'Em ecossistemas continentais, qual é o papel desempenhado conjuntamente por bactérias e fungos decompositores?',
            correct: 'Reciclagem de nutrientes minerais',
            distractors: ['Produção primária fotossintética', 'Predação seletiva de topo', 'Polinização cruzada de flores'],
            explanation: 'Decompositores mineralizam compostos orgânicos mortos, devolvendo elementos químicos essenciais ao ciclo ecológico.',
          },
        ],
      },
    ],
    expert: [
      {
        id: 'cie6-e-estratosfera',
        topic: 'Dinâmica da Atmosfera',
        bnccSkill: 'EF06CI14',
        variants: [
          {
            question: 'Em qual camada da atmosfera terrestre se concentra o manto de ozônio protetor contra a radiação ultravioleta?',
            correct: 'Estratosfera atmosférica',
            distractors: ['Troposfera turbulenta', 'Termosfera ionizada', 'Mesosfera intermediária'],
            explanation: 'A camada de ozônio (O₃) concentra-se na estratosfera, retendo fótons UV de alta energia solar.',
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 7º ANO
  // --------------------------------------------------------------------------
  '7º ano': {
    facil: [
      {
        id: 'cie7-f-procarionte',
        topic: 'Células e Reinos',
        bnccSkill: 'EF07CI09',
        variants: [
          {
            question: 'Organismos unicelulares desprovidos de membrana carioteca delimitando o núcleo são classificados como:',
            correct: 'Organismos procariontes',
            distractors: ['Organismos eucariontes', 'Protozoários ciliados', 'Metazoários complexos'],
            explanation: 'Procariontes (como bactérias) mantêm seu cromossomo circular disperso no citoplasma no nucleoide.',
          },
        ],
      },
      {
        id: 'cie7-f-caatinga',
        topic: 'Biomas Brasileiros',
        bnccSkill: 'EF07CI07',
        variants: [
          {
            question: 'Qual bioma típico do semiárido brasileiro abriga vegetação xerófita adaptada a longos períodos de estiagem?',
            correct: 'Bioma da Caatinga',
            distractors: ['Floresta Amazônica', 'Mata dos Cocais', 'Pantanal mato-grossense'],
            explanation: 'A Caatinga é um bioma exclusivamente brasileiro caracterizado por cactos e arbustos caducifólios xerófitos.',
          },
        ],
      },
    ],
    medio: [
      {
        id: 'cie7-m-irradiacao',
        topic: 'Propagação Térmica',
        bnccSkill: 'EF07CI02',
        variants: [
          {
            question: 'O mecanismo de transmissão de calor que se propaga através do vácuo espacial por ondas eletromagnéticas é a:',
            correct: 'Irradiação térmica infravermelha',
            distractors: ['Condução mecânica intermolecular', 'Convecção hidrodinâmica forçada', 'Calefação espontânea de contato'],
            explanation: 'A irradiação térmica transporta energia por ondas eletromagnéticas sem necessitar de suporte material.',
          },
        ],
      },
      {
        id: 'cie7-m-moluscos',
        topic: 'Filos de Invertebrados',
        bnccSkill: 'EF07CI10',
        variants: [
          {
            question: 'Caracóis terrestres, polvos marinhos e mexilhões pertencem taxonomicamente a qual filo do reino animal?',
            correct: 'Filo dos Moluscos',
            distractors: ['Filo dos Artrópodes', 'Filo dos Anelídeos', 'Filo dos Cnidários'],
            explanation: 'Moluscos apresentam corpo mole desprovido de esqueleto interno rígido, muitos com concha calcária secretada pelo manto.',
          },
        ],
      },
    ],
    dificil: [
      {
        id: 'cie7-d-termodinamica',
        topic: 'Termodinâmica Básica',
        bnccSkill: 'EF07CI03',
        variants: [
          {
            question: 'O princípio físico da Conservação da Energia aplicado a máquinas térmicas determina expressamente que:',
            correct: 'A energia total do sistema permanece constante',
            distractors: ['O calor sempre se dissipa de forma instantânea', 'A energia é continuamente gerada pelo trabalho', 'O rendimento térmico do motor é de cem por cento'],
            explanation: 'Pela 1ª Lei da Termodinâmica, a energia não se cria nem se aniquila; transforma-se entre calor, trabalho e energia interna.',
          },
        ],
      },
    ],
    expert: [
      {
        id: 'cie7-e-arboviroses',
        topic: 'Saúde e Vetores',
        bnccSkill: 'EF07CI11',
        variants: [
          {
            question: 'Qual vetor biológico transmite os vírus patogênicos causadores de Dengue, Zika e Chikungunya entre humanos?',
            correct: 'Fêmea do mosquito Aedes aegypti',
            distractors: ['Mosquito vetor Anopheles darlingi', 'Mosca hematófaga Stomoxys calcitrans', 'Percevejo barbeiro Triatoma infestans'],
            explanation: 'Apenas as fêmeas hematófagas do Aedes aegypti realizam a transmissão biológica dessas arboviroses urbanas.',
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 8º ANO
  // --------------------------------------------------------------------------
  '8º ano': {
    facil: [
      {
        id: 'cie8-f-circulatorio',
        topic: 'Fisiologia Humana',
        bnccSkill: 'EF08CI08',
        variants: [
          {
            question: 'Qual sistema biológico humano é responsável por impulsionar e circular o sangue oxigenado pelos tecidos corporais?',
            correct: 'Sistema Cardiovascular',
            distractors: ['Sistema Linfático', 'Sistema Digestório', 'Sistema Tegumentar'],
            explanation: 'O coração, artérias, veias e capilares formam a rede cardiovascular encarregada do fluxo sanguíneo contínuo.',
          },
        ],
      },
      {
        id: 'cie8-f-corrente',
        topic: 'Grandezas Elétricas',
        bnccSkill: 'EF08CI02',
        variants: [
          {
            question: 'O deslocamento ordenado de cargas elétricas livres em um condutor metálico submetido a uma tensão elétrica é a:',
            correct: 'Corrente elétrica contínua',
            distractors: ['Resistência ôhmica interna', 'Capacitância eletrostática', 'Indutância magnética pura'],
            explanation: 'A corrente elétrica consiste no fluxo ordenado de portadores de carga em virtude de uma diferença de potencial.',
          },
        ],
      },
    ],
    medio: [
      {
        id: 'cie8-m-ohm',
        topic: 'Circuitos e Leis de Ohm',
        bnccSkill: 'EF08CI03',
        variants: [
          {
            question: 'De acordo com a Primeira Lei de Ohm para condutores lineares mantidos a temperatura constante, a tensão (V) é igual a:',
            correct: 'Produto da resistência pela corrente',
            distractors: ['Razão da resistência pela corrente', 'Soma da corrente com a resistência', 'Quadrado da corrente pela condutância'],
            explanation: 'A Primeira Lei de Ohm estabelece a equação fundamental V = R × I para condutores ôhmicos.',
          },
        ],
      },
      {
        id: 'cie8-m-insulina',
        topic: 'Sistema Endócrino',
        bnccSkill: 'EF08CI07',
        variants: [
          {
            question: 'Qual glândula do corpo humano secreta o hormônio peptídico insulina para reduzir a taxa de glicose circulante?',
            correct: 'Glândula pancreática',
            distractors: ['Glândula tireóidea', 'Glândula suprarrenal', 'Glândula hipofisária'],
            explanation: 'As células beta das ilhotas de Langerhans no pâncreas endócrino sintetizam e liberam o hormônio insulina.',
          },
        ],
      },
    ],
    dificil: [
      {
        id: 'cie8-d-energia-kwh',
        topic: 'Potência e Consumo Elétrico',
        bnccSkill: 'EF08CI05',
        variants: [
          {
            question: 'A unidade de energia elétrica habitualmente faturada pelas concessionárias residenciais nas contas de luz é o:',
            correct: 'Quilowatt-hora de consumo',
            distractors: ['Volt-ampère de potência', 'Ampère-hora de corrente', 'Joule por segundo elétrico'],
            explanation: '1 kWh equivale ao consumo sustentado de 1.000 watts durante 1 hora (correspondente a 3,6 × 10⁶ joules).',
          },
        ],
      },
    ],
    expert: [
      {
        id: 'cie8-e-meiose',
        topic: 'Divisão Celular e Gametas',
        bnccSkill: 'EF08CI09',
        variants: [
          {
            question: 'Qual processo de divisão celular reducional origina quatro células filhas haploides a partir de uma célula mãe diploide?',
            correct: 'Divisão celular por meiose',
            distractors: ['Divisão somática por mitose', 'Reprodução por esporulação', 'Duplicação por fissão binária'],
            explanation: 'A meiose é a divisão reducional responsável pela produção de gametas haploides em organismos diploides.',
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 9º ANO
  // --------------------------------------------------------------------------
  '9º ano': {
    facil: [
      {
        id: 'cie9-f-eletron',
        topic: 'Estrutura Atômica',
        bnccSkill: 'EF09CI03',
        variants: [
          {
            question: 'Qual partícula subatômica fundamental possui carga elétrica negativa e se distribui na eletrosfera ao redor do núcleo?',
            correct: 'Partícula do elétron',
            distractors: ['Partícula do próton', 'Partícula do nêutron', 'Partícula alfa pesada'],
            explanation: 'O elétron possui carga elementar negativa e orbita o núcleo atômico formado por prótons e nêutrons.',
          },
        ],
      },
      {
        id: 'cie9-f-onda',
        topic: 'Fenômenos Ondulatórios',
        bnccSkill: 'EF09CI04',
        variants: [
          {
            question: 'As ondas sonoras que necessitam de um meio físico material elástico para se propagarem são classificadas como:',
            correct: 'Ondas mecânicas longitudinais',
            distractors: ['Ondas eletromagnéticas planas', 'Ondas gravitacionais puras', 'Ondas térmicas radiativas'],
            explanation: 'O som propaga-se por compressão e rarefação de matéria física elástica e é incapaz de viajar pelo vácuo.',
          },
        ],
      },
    ],
    medio: [
      {
        id: 'cie9-m-inercia',
        topic: 'Dinâmica de Newton',
        bnccSkill: 'EF09CI09',
        variants: [
          {
            question: 'A propriedade inerente à massa de manter sua velocidade vetorial constante quando a resultante de forças externas é nula é a:',
            correct: 'Inércia da massa material',
            distractors: ['Gravitação newtoniana mútua', 'Aceleração centrípeta pura', 'Força restauradora elástica'],
            explanation: 'A 1ª Lei de Newton (Lei da Inércia) afirma que um corpo em repouso ou MRU preserva seu movimento sem força resultante.',
          },
        ],
      },
      {
        id: 'cie9-m-genotipo',
        topic: 'Princípios da Genética',
        bnccSkill: 'EF09CI08',
        variants: [
          {
            question: 'O conjunto genético total formado pelos alelos herdados por um organismo para determinado lócus cromossômico é o:',
            correct: 'Genótipo hereditário',
            distractors: ['Fenótipo mensurável', 'Cariótipo condensado', 'Epigenoma induzido'],
            explanation: 'O genótipo é a constituição gênica herdada dos progenitores, em contraste com o fenótipo observável.',
          },
        ],
      },
    ],
    dificil: [
      {
        id: 'cie9-d-lavoisier',
        topic: 'Leis Ponderais Químicas',
        bnccSkill: 'EF09CI02',
        variants: [
          {
            question: 'Em um sistema químico fechado e isolado, a Lei da Conservação das Massas enunciada por Lavoisier estabelece que:',
            correct: 'A massa dos reagentes iguala a dos produtos',
            distractors: ['A massa total diminui durante a combustão', 'O volume gasoso sempre duplica na reação', 'A energia é eliminada sem conservação'],
            explanation: 'Em recipientes hermeticamente fechados, a massa total antes e depois da transformação química permanece invariável.',
          },
        ],
      },
    ],
    expert: [
      {
        id: 'cie9-e-torricelli',
        topic: 'Mecânica e Cinemática',
        bnccSkill: 'EF09CI09',
        variants: [
          {
            question: 'Qual equação da cinemática escalar calcula a velocidade final de um corpo acelerado sem utilizar a variável temporal?',
            correct: 'Equação clássica de Torricelli',
            distractors: ['Função horária do espaço escalar', 'Função horária da aceleração linear', 'Equação da quantidade de movimento'],
            explanation: 'A equação de Torricelli (v² = v₀² + 2aΔs) deduz a velocidade final em função da aceleração e do deslocamento.',
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 1º ANO ENSINO MÉDIO
  // --------------------------------------------------------------------------
  '1º ano EM': {
    facil: [
      {
        id: 'em1-f-segunda-lei',
        topic: 'Dinâmica Clássica',
        bnccSkill: 'EM13CNT101',
        variants: [
          {
            question: 'A Segunda Lei de Newton expressa a relação quantitativa entre a força resultante aplicada e a aceleração adquirida por:',
            correct: 'F = m × a',
            distractors: ['F = m / a', 'F = a / m', 'F = m × a²'],
            explanation: 'A força resultante exercida sobre um corpo de massa constante produz aceleração retilínea proporcional: F = m × a.',
          },
        ],
      },
    ],
    medio: [
      {
        id: 'em1-m-gravitacional',
        topic: 'Energia Mecânica',
        bnccSkill: 'EM13CNT101',
        variants: [
          {
            question: 'A energia armazenada por um corpo devido à sua altitude em relação a um referencial no campo gravitacional terrestre é a:',
            correct: 'Energia potencial gravitacional',
            distractors: ['Energia cinética translacional', 'Energia potencial eletrostática', 'Energia térmica dissipativa'],
            explanation: 'A energia potencial gravitacional é calculada pelo produto da massa, aceleração gravitacional e altura (E_pg = m·g·h).',
          },
        ],
      },
    ],
    dificil: [
      {
        id: 'em1-d-atrito',
        topic: 'Forças de Atrito',
        bnccSkill: 'EM13CNT204',
        variants: [
          {
            question: 'A força dissipativa que atua no plano de contato entre superfícies sólidas opondo-se à tendência de escorregamento relativo é a:',
            correct: 'Força de atrito estático ou cinético',
            distractors: ['Força centrípeta de trajetória curva', 'Força de empuxo hidrostático vertical', 'Força elástica restauradora de Hooke'],
            explanation: 'A força de atrito (Fat = μ·N) atua tangencialmente à interface interfacial em sentido oposto ao movimento relativo.',
          },
        ],
      },
    ],
    expert: [
      {
        id: 'em1-e-isobarica',
        topic: 'Termodinâmica dos Gases',
        bnccSkill: 'EM13CNT102',
        variants: [
          {
            question: 'Em uma transformação termodinâmica isobárica de gás ideal, a razão matemática entre o volume e a temperatura absoluta é:',
            correct: 'Constante em todo o processo térmico',
            distractors: ['Inversamente proporcional à densidade', 'Nula quando atinge o equilíbrio dinâmico', 'Variável conforme a pressão externa flutua'],
            explanation: 'Pela Lei de Charles, mantendo-se a pressão constante, volume e temperatura absoluta variam em proporção direta (V/T = constante).',
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 2º ANO ENSINO MÉDIO
  // --------------------------------------------------------------------------
  '2º ano EM': {
    facil: [
      {
        id: 'em2-f-solucoes',
        topic: 'Físico-Química de Soluções',
        bnccSkill: 'EM13CNT103',
        variants: [
          {
            question: 'Em uma solução química homogênea composta por soluto e solvente, a substância que é dissolvida e dispersada é o:',
            correct: 'Soluto disperso',
            distractors: ['Solvente aquoso', 'Precipitado sólido', 'Coloide suspenso'],
            explanation: 'O soluto é a substância que sofre dispersão e solvatação na massa do solvente líquido ou gasoso.',
          },
        ],
      },
    ],
    medio: [
      {
        id: 'em2-m-refracao',
        topic: 'Óptica Ondulatória',
        bnccSkill: 'EM13CNT301',
        variants: [
          {
            question: 'A alteração na velocidade e comprimento de onda da luz ao penetrar em um meio transparente de índice de refração distinto é a:',
            correct: 'Refração luminosa ondulatória',
            distractors: ['Reflexão especular geométrica', 'Difração em fenda delgada', 'Polarização por birrefringência'],
            explanation: 'A refração da luz decorre da modificação na velocidade de propagação luminosa regida pela Lei de Snell-Descartes.',
          },
        ],
      },
    ],
    dificil: [
      {
        id: 'em2-d-catalisador',
        topic: 'Cinética Química',
        bnccSkill: 'EM13CNT205',
        variants: [
          {
            question: 'Qual substância química eleva expressivamente a velocidade de uma reação ao diminuir sua energia de ativação sem ser consumida?',
            correct: 'Agente catalisador de reação',
            distractors: ['Solvente polar desnaturante', 'Inibidor alostérico irreversível', 'Quelante iônico de coordenação'],
            explanation: 'O catalisador abre um caminho reacional mecanístico alternativo com menor barreira de energia de ativação (Ea).',
          },
        ],
      },
    ],
    expert: [
      {
        id: 'em2-e-entalpia',
        topic: 'Termoquímica',
        bnccSkill: 'EM13CNT205',
        variants: [
          {
            question: 'Uma reação química termoquímica que libera calor para as vizinhanças e apresenta variação de entalpia negativa (ΔH < 0) é a:',
            correct: 'Transformação exotérmica',
            distractors: ['Transformação endotérmica', 'Transformação atérmica pura', 'Transformação adiabática nula'],
            explanation: 'Em processos exotérmicos, a entalpia dos produtos é inferior à dos reagentes, dissipando energia térmica para o meio.',
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 3º ANO ENSINO MÉDIO
  // --------------------------------------------------------------------------
  '3º ano EM': {
    facil: [
      {
        id: 'em3-f-eletrostatica',
        topic: 'Interações Eletrostáticas',
        bnccSkill: 'EM13CNT306',
        variants: [
          {
            question: 'Duas cargas elétricas puntiformes que possuem sinais algébricos iguais sofrem mutuamente no espaço uma força eletrostática de:',
            correct: 'Repulsão eletrostática mútua',
            distractors: ['Atração intermolecular forte', 'Neutralização iônica total', 'Indução magnética polarizada'],
            explanation: 'Pela Lei de Coulomb, cargas elétricas de sinais coincidentes repelem-se, e cargas de sinais opostos atraem-se.',
          },
        ],
      },
    ],
    medio: [
      {
        id: 'em3-m-hidrocarbonetos',
        topic: 'Química Orgânica Estrutural',
        bnccSkill: 'EM13CNT303',
        variants: [
          {
            question: 'A classe de compostos orgânicos moleculares formados exclusivamente por átomos dos elementos carbono e hidrogênio é a dos:',
            correct: 'Compostos hidrocarbonetos',
            distractors: ['Álcoois alifáticos monovalentes', 'Ésteres carboxílicos voláteis', 'Haletos aromáticos condensados'],
            explanation: 'Hidrocarbonetos compreendem alcanos, alcenos, alcinos, alcadienos, ciclanos e arenos formados somente por carbono e hidrogênio.',
          },
        ],
      },
    ],
    dificil: [
      {
        id: 'em3-d-faraday',
        topic: 'Indução Eletromagnética',
        bnccSkill: 'EM13CNT306',
        variants: [
          {
            question: 'A lei física que estabelece que a força eletromotriz induzida em uma espira é dada pela taxa de variação do fluxo magnético é a:',
            correct: 'Lei da indução de Faraday-Lenz',
            distractors: ['Lei da gravitação de Newton', 'Lei da ação e reação de corpos', 'Lei do efeito Joule resistivo'],
            explanation: 'A Lei de Faraday-Neumann-Lenz define que ε = -dΦ/dt, indicando que a fem induzida opõe-se à variação do fluxo magnético.',
          },
        ],
      },
    ],
    expert: [
      {
        id: 'em3-e-bases-dna',
        topic: 'Biologia Molecular do DNA',
        bnccSkill: 'EM13CNT303',
        variants: [
          {
            question: 'Na dupla hélice canônica do DNA, de acordo com as regras de pareamento de Chargaff, a base púrica adenina pareia exclusivamente com a:',
            correct: 'Base pirimídica timina',
            distractors: ['Base pirimídica citosina', 'Base pirimídica uracila', 'Base púrica guanina'],
            explanation: 'No DNA helicoidal, a adenina pareia com a timina por duas ligações de hidrogênio (A=T) e a guanina com a citosina por três (G≡C).',
          },
        ],
      },
    ],
  },
};

// ============================================================================
// PONTO DE ENTRADA PRINCIPAL PARA CIÊNCIAS PROCEDURAL
// ============================================================================

export function generateProceduralScienceQuestion(
  grade: GradeType,
  difficulty: DifficultyType,
  recentSignatures: Set<string> = new Set()
): ProceduralQuestion {
  const xp = getXpForDifficulty(difficulty);
  const gradeConcepts = SCIENCE_KNOWLEDGE_BASE[grade]?.[difficulty] || SCIENCE_KNOWLEDGE_BASE['6º ano']['facil'];

  let attempts = 0;
  while (attempts < 20) {
    attempts++;
    const concept = randChoice(gradeConcepts);
    const variantIndex = Math.floor(Math.random() * concept.variants.length);
    const variant = concept.variants[variantIndex];
    const signature = `cie:${grade}:${difficulty}:${concept.id}:v${variantIndex}:${variant.correct}`;

    if (!recentSignatures.has(signature) || attempts >= 18) {
      const { options, correctAnswer } = formatOptions(variant.correct, variant.distractors);
      const uid = `proc-cie-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`;

      return {
        id: uid,
        subject: 'ciencias',
        grade,
        difficulty,
        question: variant.question,
        options,
        correctAnswer,
        explanation: variant.explanation,
        xp,
        bnccSkill: concept.bnccSkill,
        topic: concept.topic,
        isProcedural: true,
        signature,
      };
    }
  }

  // Fallback seguro
  const fallbackConcept = gradeConcepts[0];
  const fallbackVariant = fallbackConcept.variants[0];
  const { options, correctAnswer } = formatOptions(fallbackVariant.correct, fallbackVariant.distractors);

  return {
    id: `proc-cie-fallback-${Date.now().toString(36)}`,
    subject: 'ciencias',
    grade,
    difficulty,
    question: fallbackVariant.question,
    options,
    correctAnswer,
    explanation: fallbackVariant.explanation,
    xp,
    bnccSkill: fallbackConcept.bnccSkill,
    topic: fallbackConcept.topic,
    isProcedural: true,
    signature: `cie:${grade}:${difficulty}:${fallbackConcept.id}:v0:${fallbackVariant.correct}`,
  };
}
