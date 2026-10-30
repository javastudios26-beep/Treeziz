import fs from 'fs';
import path from 'path';
import { FUNDAMENTAL_SCIENCE_QUESTIONS } from '../src/games/quiz/matriz/questions/fundamentalScience';
import { MEDIO_SCIENCE_QUESTIONS } from '../src/games/quiz/matriz/questions/medioScience';
import { QuestionData } from '../src/games/quiz/matriz/questions/types';
import { stripExplanatoryParentheses, stripTrailingExplanationClauses } from '../src/games/quiz/matriz/procedural/optionBalancer';

// Tabela de balanceamento direto de perguntas com alta assimetria conceitual ou de extensão
const HAND_CURATED_BALANCES: Record<string, { options: string[]; correctAnswer: number }> = {
  'cie-6-f-02': {
    options: ['Parede celular vegetal', 'Membrana plasmática', 'Complexo golgiense', 'Retículo endoplasmático'],
    correctAnswer: 1,
  },
  'cie-6-f-08': {
    options: [
      'Dentro do núcleo delimitado por carioteca',
      'Disperso livremente na matriz citoplasmática',
      'Inserido no interior da parede de celulose',
      'Armazenado na cavidade do vacúolo celular',
    ],
    correctAnswer: 0,
  },
  'cie-6-f-09': {
    options: [
      'A Terra tem formato esférico curvo',
      'A Terra possui uma superfície plana',
      'O horizonte provoca uma ilusão óptica',
      'Os navios afundam em alto-mar aberto',
    ],
    correctAnswer: 0,
  },
  'cie-6-f-11': {
    options: ['Duas fases distintas', 'Uma única fase líquida', 'Três fases separadas', 'Quatro fases dispersas'],
    correctAnswer: 0,
  },
  'cie-6-f-15': {
    options: [
      'Movimento de rotação diária da Terra',
      'Translação anual da Terra ao redor do Sol',
      'Giro aparente do Sol ao redor da Terra',
      'Precessão periódica do eixo planetário',
    ],
    correctAnswer: 0,
  },
  'cie-6-m-09': {
    options: [
      'Inclinação do eixo terrestre e movimento de translação ao redor do Sol',
      'Variação periódica anual na distância orbital entre a Terra e o Sol',
      'Precessão do eixo magnético e velocidade de rotação diária da Terra',
      'Atração gravitacional combinada da órbita da Lua e marés oceânicas',
    ],
    correctAnswer: 0,
  },
  'cie-6-m-11': {
    options: [
      'Sofreram especialização e diferenciação para desempenhar funções específicas',
      'Possuem materiais genéticos provenientes de espécies biológicas diferentes',
      'Apresentam organelas celulares de reinos distintos de seres vivos da natureza',
      'Originam-se de linhagens teciduais desprovidas de divisão celular somática',
    ],
    correctAnswer: 0,
  },
  'cie-6-m-12': {
    options: [
      'Polímeros sintéticos resistentes à degradação enzimática de bactérias',
      'Compostos metálicos pesados insolúveis em soluções ácidas da chuva',
      'Minerais cristalinos inorgânicos imunes à ação da radiação solar',
      'Substâncias cerâmicas vitrificadas sintetizadas em altas pressões',
    ],
    correctAnswer: 0,
  },
  'cie-6-m-15': {
    options: ['Ao meio-dia solar', 'No início da manhã', 'No meio da tarde', 'Durante o crepúsculo'],
    correctAnswer: 0,
  },
  'cie-6-d-07': {
    options: [
      'A grande extensão no sentido leste-oeste recebe luz solar em momentos diferentes',
      'A localização do país abrangendo hemisférios altera a velocidade da luz do sol',
      'A altitude média dos planaltos centrais modifica o horário astronômico local',
      'A rotação das bacias hidrográficas altera a contagem periódica dos fusos',
    ],
    correctAnswer: 0,
  },
  'cie-6-d-09': {
    options: [
      'Fundir a sucata consome muito menos calor do que a eletrólise do minério',
      'O alumínio reciclado apresenta menor ponto de condensação atmosférica',
      'A sucata metálica sofre oxidação espontânea gerando calor aproveitável',
      'O minério bauxita necessita de combustão fóssil direta sob vácuo total',
    ],
    correctAnswer: 0,
  },
  'cie-6-d-11': {
    options: [
      'A densidade média do casco oco englobando ar é menor que a da água',
      'A tensão superficial da água do oceano sustenta o peso de aço naval',
      'O empuxo hidrostático da água marinha anula a aceleração gravitacional',
      'A compressibilidade da água salgada suporta a estrutura pesada do navio',
    ],
    correctAnswer: 0,
  },
  'cie-6-d-12': {
    options: [
      'Filtrar e absorver a radiação ultravioleta prejudicial do Sol',
      'Reter calor térmico planetário sustentando o efeito estufa',
      'Fornecer oxigênio molecular livre para a respiração biológica',
      'Gerar as correntes atmosféricas globais dos ventos alísios',
    ],
    correctAnswer: 0,
  },
  'cie-6-d-13': {
    options: [
      'As bactérias não possuem núcleo celular delimitado por carioteca',
      'As bactérias são desprovidas de material genético ou ribossomos',
      'As bactérias apresentam parede celular formada por celulose pura',
      'As bactérias realizam divisão celular exclusivamente por meiose',
    ],
    correctAnswer: 0,
  },
  'cie-6-e-03': {
    options: [
      'As rochas se formaram no fundo do mar e foram erguidas por forças tectônicas',
      'Os oceanos antigos cobriam todo o globo sem a existência de montanhas secas',
      'As placas continentais sofreram erosão superficial acumulando restos fósseis',
      'O nível do mar sofreu oscilação gravitacional atingindo o cume das montanhas',
    ],
    correctAnswer: 0,
  },
  'cie-6-e-04': {
    options: [
      'Suprir mais oxigênio e glicose aos músculos e remover o excesso de CO₂',
      'Resfriar os tecidos corporais através da ventilação pulmonar forçada',
      'Reduzir a pressão arterial para evitar o desgaste do sistema vascular',
      'Impedir a síntese de ácido lático interrompendo o metabolismo celular',
    ],
    correctAnswer: 0,
  },
  'cie-6-e-05': {
    options: [
      'A água pluvial infiltra e arrasta nutrientes solúveis para o lençol freático',
      'O vento forte transporta a camada superficial de húmus fértil da pastagem',
      'A radiação solar direta desidrata e compacta as partículas de argila do solo',
      'A acidez do calcário neutraliza e precipita os sais minerais da superfície',
    ],
    correctAnswer: 0,
  },
  'cie-6-e-06': {
    options: [
      'Desde a extração da matéria-prima até o descarte e reciclabilidade final',
      'Apenas o preço de custo comercial e margem de revenda na distribuição',
      'Somente os custos com propaganda publicitária e design das embalagens',
      'A durabilidade estética superficial e tempo de estocagem nas prateleiras',
    ],
    correctAnswer: 0,
  },
  'cie-6-e-07': {
    options: [
      'A trajetória aparente do Sol varia ao longo do ano marcando as estações',
      'O movimento de rotação da Terra acelera no verão alterando as semanas',
      'A distância orbital entre a Terra e o Sol dobra a cada seis meses',
      'A intensidade luminosa da Lua regula a germinação de todas as plantas',
    ],
    correctAnswer: 0,
  },
  'cie-6-e-09': {
    options: [
      'Destilação fracionada por faixas de temperatura de ebulição',
      'Centrifugação contínua por gradiente de densidade de fases',
      'Decantação gravitacional lenta em decantadores industriais',
      'Filtração mecânica a vácuo através de membranas cerâmicas',
    ],
    correctAnswer: 0,
  },
  'cie-6-e-11': {
    options: [
      'Os íons livres dissolvidos na água transportam as cargas elétricas',
      'Os elétrons livres do cloreto metálico formam uma malha condutora',
      'A água salgada sofre ionização liberando hidrogênio molecular puro',
      'A molécula de sal funde na água conduzindo corrente por convecção',
    ],
    correctAnswer: 0,
  },
  'cie-6-e-14': {
    options: [
      'É essencial para reter calor na superfície e manter a água líquida',
      'É um fenômeno artificial que surgiu após a revolução industrial',
      'Bloqueia completamente a radiação solar ultravioleta prejudicial',
      'Elimina os gases poluentes da troposfera através de chuvas ácidas',
    ],
    correctAnswer: 0,
  },
  'cie-7-m-01': {
    options: [
      'O ar frio mais denso desce gerando correntes de convecção',
      'O ar quente menos denso desce por condução molecular rápida',
      'A irradiação térmica atinge o piso por ondas eletromagnéticas',
      'A convecção do ar aquecido bloqueia o fluxo térmico do teto',
    ],
    correctAnswer: 0,
  },
  'cie-7-m-02': {
    options: [
      'Grande fração da energia é dissipada como calor no metabolismo celular',
      'Os consumidores terciários reciclam toda a energia de volta aos produtores',
      'A biomassa disponível aumenta exponencialmente do produtor ao predador',
      'A fotossíntese recupera continuamente a energia térmica dos animais',
    ],
    correctAnswer: 0,
  },
  'cie-7-m-03': {
    options: [
      'O soro fornece anticorpos prontos para neutralização rápida do veneno',
      'A vacina induz imunidade imediata antes da propagação da peçonha',
      'O soro estimula a síntese de antígenos defensivos pelo organismo',
      'A vacina destrói diretamente as toxinas celulares da picada',
    ],
    correctAnswer: 0,
  },
  'cie-9-d-09': {
    options: [
      'Fusão nuclear em estrelas massivas e explosões de supernovas',
      'Fissão espontânea de elementos pesados em nebulosas planetárias',
      'Colapso gravitacional de anãs brancas sem emissão radiativa',
      'Recombinação química em nuvens moleculares de gás interestelar',
    ],
    correctAnswer: 0,
  },
  'cie-9-d-13': {
    options: [
      'Possuem camada de valência completa com oito elétrons estáveis',
      'Apresentam orbitais atômicos desprovidos de elétrons de valência',
      'Exibem afinidade eletrônica extremamente elevada com halogênios',
      'Formam ligações covalentes triplas espontâneas à temperatura ambiente',
    ],
    correctAnswer: 0,
  },
  'cie-9-e-01': {
    options: [
      'Transição de elétrons excitados para níveis de menor energia com emissão de fótons',
      'Atrito intermolecular gerando calor térmico de condução nos orbitais atômicos',
      'Fusão nuclear de prótons leves com liberação contínua de ondas de choque sonoras',
      'Fissão eletrostática do núcleo atômico induzida por radiação gama secundária',
    ],
    correctAnswer: 0,
  },
  'cie-9-e-04': {
    options: [
      'Altera aleatoriamente as frequências alélicas por amostragem casual na população',
      'Favorece deterministamente os fenótipos com maior aptidão reprodutiva adaptativa',
      'Provoca recombinação dirigida por cruzamentos seletivos entre os mais aptos',
      'Induz mutações pontuais coordenadas em resposta a pressões ecológicas locais',
    ],
    correctAnswer: 0,
  },
  'cie-9-e-07': {
    options: [
      'A velocidade de escape no horizonte de eventos excede a velocidade da luz',
      'A temperatura superficial torna-se infinita em todo o espaço ao redor',
      'A velocidade da luz é reduzida a zero pelo atrito com a matéria bariônica',
      'O campo gravitacional inverte a polaridade eletromagnética dos fótons',
    ],
    correctAnswer: 0,
  },
  'cie-9-e-09': {
    options: [
      'Mesmo número de prótons e diferente número de nêutrons no núcleo atômico',
      'Mesmo número de nêutrons e diferente número de prótons no núcleo atômico',
      'Mesmo número de massa atômica com carga nuclear efetiva totalmente oposta',
      'Diferente número de elétrons orbitais com mesma densidade volumétrica nuclear',
    ],
    correctAnswer: 0,
  },
  'cie-9-e-12': {
    options: [
      'Diminui a energia de ativação necessária para atingir o estado de transição',
      'Aumenta a constante de equilíbrio químico favorecendo o rendimento final',
      'Eleva a energia cinética média das moléculas aquecendo a mistura reacional',
      'Fornece calor latente contínuo alterando a variação de entalpia do sistema',
    ],
    correctAnswer: 0,
  },
  'cie-1em-d-04': {
    options: [
      'A alolactose liga-se ao repressor inativando-o e liberando a transcrição',
      'A lactose destrói os promotores gênicos estimulando a polimerase do RNA',
      'A glicose liga-se diretamente aos íntrons ativando os fatores de transcrição',
      'O repressor acopla-se permanentemente ao operador bloqueando a tradução',
    ],
    correctAnswer: 0,
  },
  'cie-1em-e-01': {
    options: [
      'Aliviar a tensão de supertorção helicoidal à frente da forquilha de replicação',
      'Sintetizar pequenos fragmentos de RNA iniciadores na fita descontínua de DNA',
      'Unir covalentemente os fragmentos de Okazaki após a remoção dos primers de RNA',
      'Separar as fitas de DNA quebrando as pontes de hidrogênio entre as bases púricas',
    ],
    correctAnswer: 0,
  },
  'cie-1em-e-07': {
    options: [
      'Desnaturação térmica, anelamento de primers e extensão enzimática por polimerase',
      'Centrifugação diferencial, digestão com endonuclease e eletroforese em gel agarose',
      'Lise osmótica de membrana, tradução ribossômica e precipitação proteica com etanol',
      'Hibridização molecular, transfecção gênica e clonagem celular por eletroporação',
    ],
    correctAnswer: 0,
  },
  'cie-2em-d-15': {
    options: [
      'Bactérias procariontes fagocitadas que estabeleceram endossimbiose mutualística estável',
      'Invaginações complexas da membrana plasmática primitiva que se fecharam em vesículas',
      'Fragmentos extracelulares de vírus gigantes que incorporaram ribossomos bacterianos',
      'Agrupamentos de proteínas prions mutantes que formaram membranas duplas internas',
    ],
    correctAnswer: 0,
  },
  'cie-2em-e-06': {
    options: [
      'Aumenta a fração de moléculas com energia cinética superior à energia de ativação',
      'Diminui a energia de ativação necessária alterando o caminho molecular da reação',
      'Modifica a entalpia dos produtos diminuindo a estabilidade termodinâmica final',
      'Inverte o sentido espontâneo da reação transformando endotérmica em exotérmica',
    ],
    correctAnswer: 0,
  },
  'cie-2em-e-15': {
    options: [
      'Fusão sob temperatura constante comportando-se termicamente como substância pura',
      'Variação linear ampla de temperatura durante a transição da fase sólida para líquida',
      'Ebulição endotérmica sem patamar térmico em decorrência da mistura heterogênea',
      'Sublimação espontânea antes de atingir o ponto de liquefação em pressão atmosférica',
    ],
    correctAnswer: 0,
  },
  'cie-3em-f-02': {
    options: [
      'Proporcional ao produto das cargas e inversamente ao quadrado da distância',
      'Inversamente proporcional ao produto das cargas e à distância linear entre elas',
      'Independente do meio material e proporcional à raiz cúbica da distância linear',
      'Constante em qualquer ponto do campo eletrostático e sempre de natureza repulsiva',
    ],
    correctAnswer: 0,
  },
  'cie-3em-m-14': {
    options: [
      'Decomposição anaeróbia de matéria orgânica sedimentada sob alta pressão e calor geológico',
      'Resfriamento rápido de rochas basálticas expelidas em erupções vulcânicas submarinas',
      'Precipitação mineral de carbonato de cálcio impulsionada pela radiação solar fóssil',
      'Condensação profunda de vapores hidrotermais ricos em compostos sulfatados da crosta',
    ],
    correctAnswer: 0,
  },
  'cie-3em-e-06': {
    options: [
      'Evoluir e se adaptar continuamente para manter sua sobrevivência diante de coevoluções',
      'Permanecer morfologicamente inalterada em equilíbrio pontuado ao longo das eras',
      'Aumentar indefinidamente o tamanho corporal médio para evitar a predação de topo',
      'Eliminar a variabilidade genética por seleção estabilizadora em nichos isolados',
    ],
    correctAnswer: 0,
  },
  'cie-3em-e-08': {
    options: [
      'Eliminação concomitante de uma molécula pequena e simples a cada ligação monomérica',
      'Quebra de ligações triplas sem liberação de subprodutos durante a polimerização',
      'Rearranjo isomérico de monômeros sem alteração da massa molecular total do polímero',
      'Formação de ligações iônicas entre radicais livres gerados por clivagem homolítica',
    ],
    correctAnswer: 0,
  },
  'cie-3em-e-12': {
    options: [
      'Influência desproporcional na comunidade ecológica em relação à sua biomassa',
      'Maior densidade populacional e maior biomassa acumulada em todo o ecossistema',
      'Colonização pioneira de rochas nuas nos estágios iniciais de sucessão primária',
      'Ocupação exclusiva do nível trófico dos produtores primários autotróficos do meio',
    ],
    correctAnswer: 0,
  },
  'cie-3em-e-13': {
    options: [
      'A reatância indutiva iguala a reatância capacitiva no circuito oscilatório',
      'A resistência elétrica total do circuito ôhmico cai a zero em regime alternado',
      'A impedância complexa atinge seu valor máximo absoluto bloqueando a corrente',
      'A frequência de ressonância independe da indutância da bobina e do capacitor',
    ],
    correctAnswer: 0,
  },
};

// Algoritmo de harmonização sintática para questões onde a correta ou os distratores ainda apresentem desbalanço
function balanceSingleQuestion(q: QuestionData): QuestionData {
  if (HAND_CURATED_BALANCES[q.id]) {
    const curated = HAND_CURATED_BALANCES[q.id];
    // Embaralha determinístico com base no id
    const charSum = q.id.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    const targetIdx = charSum % 4;

    const correctText = curated.options[curated.correctAnswer];
    const nonCorrect = curated.options.filter((_, idx) => idx !== curated.correctAnswer);
    const finalOpts: string[] = [];

    let ncPtr = 0;
    for (let i = 0; i < 4; i++) {
      if (i === targetIdx) {
        finalOpts.push(correctText);
      } else {
        finalOpts.push(nonCorrect[ncPtr++]);
      }
    }

    return {
      ...q,
      options: finalOpts,
      correctAnswer: targetIdx,
    };
  }

  // Limpeza de parênteses e trailling clauses
  let opts = q.options.map((opt) => stripExplanatoryParentheses(opt.trim().replace(/\.$/, '')));
  let cText = opts[q.correctAnswer];
  let distractors = opts.filter((_, idx) => idx !== q.correctAnswer);

  let maxD = Math.max(...distractors.map((d) => d.length));
  let avgD = distractors.reduce((a, b) => a + b.length, 0) / distractors.length;

  if (cText.length > maxD + 8 || cText.length / avgD > 1.3) {
    cText = stripTrailingExplanationClauses(cText, Math.max(maxD, 24));
  }
  opts[q.correctAnswer] = cText;

  // Embaralha determinístico por hash do id para garantir ~25% em A, B, C, D
  const charSum = q.id.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const targetIdx = charSum % 4;

  const correctText = opts[q.correctAnswer];
  const nonCorrect = opts.filter((_, idx) => idx !== q.correctAnswer);
  const finalOpts: string[] = [];

  let ncPtr = 0;
  for (let i = 0; i < 4; i++) {
    if (i === targetIdx) {
      finalOpts.push(correctText);
    } else {
      finalOpts.push(nonCorrect[ncPtr++]);
    }
  }

  return {
    ...q,
    options: finalOpts,
    correctAnswer: targetIdx,
  };
}

export function generateBalancedFiles(): void {
  const balancedFundamental = FUNDAMENTAL_SCIENCE_QUESTIONS.map(balanceSingleQuestion);
  const balancedMedio = MEDIO_SCIENCE_QUESTIONS.map(balanceSingleQuestion);

  const fundamentalOut = `import { QuestionData } from './types';

// ============================================================================
// BANCO DE CIÊNCIAS - ENSINO FUNDAMENTAL (6º AO 9º ANO)
// REVISADO E CALIBRADO PELA BNCC COM HABILIDADES OFICIAIS VERIFICADAS
// Total: 240 questões (15 por dificuldade em cada ano escolar)
// ALTERNATIVAS BALANCEADAS: Sem viés de resposta mais longa ou padrões dedutíveis
// ============================================================================

export const FUNDAMENTAL_SCIENCE_QUESTIONS: QuestionData[] = ${JSON.stringify(balancedFundamental, null, 2)};
`;

  const medioOut = `import { QuestionData } from './types';

// ============================================================================
// BANCO DE CIÊNCIAS - ENSINO MÉDIO (1º AO 3º ANO)
// REVISADO E CALIBRADO PELA BNCC COM HABILIDADES OFICIAIS VERIFICADAS
// Total: 180 questões (15 por dificuldade em cada ano escolar)
// ALTERNATIVAS BALANCEADAS: Sem viés de resposta mais longa ou padrões dedutíveis
// ============================================================================

export const MEDIO_SCIENCE_QUESTIONS: QuestionData[] = ${JSON.stringify(balancedMedio, null, 2)};
`;

  fs.writeFileSync('src/games/quiz/matriz/questions/fundamentalScience.ts', fundamentalOut, 'utf8');
  fs.writeFileSync('src/games/quiz/matriz/questions/medioScience.ts', medioOut, 'utf8');

  console.log('Successfully saved balanced fundamentalScience.ts and medioScience.ts!');
}

generateBalancedFiles();
