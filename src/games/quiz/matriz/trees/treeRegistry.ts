/**
 * REGISTRO CENTRAL DAS ÁRVORES DA MATRIZ DO CONHECIMENTO | TYPECLICKER MATRIX
 *
 * Ponto único da verdade (Single Source of Truth) para os metadados,
 * referências visuais, anatomia, raridade e assets de todas as 27 árvores do jogo.
 *
 * Padrão canônico de assets:
 * - Imagens públicas estáticas: /assets/trees/<id>.jpg (derivado de IDs estáveis)
 * - Imagens em desenvolvimento/fallback: /src/assets/images/...
 * - Árvores sem asset gerado: imageUrl = undefined (renderizam placeholder procedural estilizado)
 */

import { StudentRpgClass } from '../../../../types/gamePlugin';

export type TreeRarity = 'COMUM' | 'RARO' | 'ÉPICO' | 'LENDÁRIO' | 'YGGDRASIL';

export type TreeIconType =
  | 'sprout'
  | 'bonsai'
  | 'fern'
  | 'oak'
  | 'willow'
  | 'pine'
  | 'baobab'
  | 'sakura'
  | 'sequoia'
  | 'singularity'
  | 'hyper'
  | 'yggdrasil';

export interface TreeItem {
  id: string;
  name: string;
  rarity: TreeRarity;
  description: string;
  concept: string;
  accentColor: string;
  iconType: TreeIconType;
  compatibleClass?: StudentRpgClass;
  imageUrl?: string;
  fallbackImageUrl?: string;
  hasRealAsset: boolean;
  keyVisualFeatures: string[];
}

/**
 * CADASTRO CENTRAL CANÔNICO DE TODAS AS 27 ÁRVORES DO SISTEMA
 */
export const TREE_DATABASE: TreeItem[] = [
  // =========================================================================
  // --- COMUM (10 árvores) ---
  // =========================================================================
  {
    id: 'tree-c1',
    name: 'Broto de Silício',
    rarity: 'COMUM',
    description: 'Pequeno organismo cibernético vegetal adaptado aos canais de dados da Matriz.',
    concept: 'Brotamento vegetal com pequenas placas de silício translúcido verde integradas ao caule fino.',
    accentColor: '#00A878',
    iconType: 'sprout',
    imageUrl: '/assets/trees/tree-c1.jpg',
    fallbackImageUrl: '/src/assets/images/tree_silicon_sprout_1792690110025.jpg',
    hasRealAsset: true,
    keyVisualFeatures: ['Caule verde suave', 'Placas de silício geométricas', 'Raízes finas como filamentos', 'Brilho discreto'],
  },
  {
    id: 'tree-c2',
    name: 'Bonsai Binário',
    rarity: 'COMUM',
    description: 'Cultivado através de instruções lógicas elementares e ramos de bits estáveis.',
    concept: 'Pequeno bonsai estilizado cujas folhas formam agrupamentos em blocos quadrados lembrando bits (0 e 1).',
    accentColor: '#00FF88',
    iconType: 'bonsai',
    imageUrl: '/assets/trees/tree-c2.jpg',
    fallbackImageUrl: '/src/assets/images/tree_binary_bonsai_1793276561725.jpg',
    hasRealAsset: true,
    keyVisualFeatures: ['Tronco sinuoso compacto', 'Copas esféricas em blocos', 'Folhas com pequenos caracteres binários'],
  },
  {
    id: 'tree-c3',
    name: 'Samambaia Algorítmica',
    rarity: 'COMUM',
    description: 'Folhagens fractais que reproduzem sequências matemáticas puras.',
    concept: 'Frondes recurvadas com ramificações fractais repetidas, silhueta elegante em leque verde-esmeralda.',
    accentColor: '#087EA4',
    iconType: 'fern',
    hasRealAsset: false,
    keyVisualFeatures: ['Frondes fractais', 'Estrutura geométrica recursiva', 'Verde ciano profundo'],
  },
  {
    id: 'tree-c4',
    name: 'Muda de Fibonacci',
    rarity: 'COMUM',
    description: 'Cresce em espiral perfeita seguindo proporções áureas de dados vitais.',
    concept: 'Broto espiralado ascendente seguindo a espiral de ouro geométrica com folhas ordenadas em phi.',
    accentColor: '#2DD4BF',
    iconType: 'sprout',
    hasRealAsset: false,
    keyVisualFeatures: ['Espiral áurea pura', 'Brotos em nós ordenados', 'Tons turquesa e menta'],
  },
  {
    id: 'tree-c5',
    name: 'Arbusto de Cobre',
    rarity: 'COMUM',
    description: 'Ramificações condutoras que canalizam correntes de baixa voltagem da rede.',
    concept: 'Arbusto com galhos em tons de cobre metálico avermelhado e folhas ovais com veios metálicos.',
    accentColor: '#EA580C',
    iconType: 'bonsai',
    hasRealAsset: false,
    keyVisualFeatures: ['Galhos metálicos cobreados', 'Pátina verde sutil', 'Copas densas e arredondadas'],
  },
  {
    id: 'tree-c6',
    name: 'Cipreste de Silício',
    rarity: 'COMUM',
    description: 'Ereto e focado, filtra impurezas nos canais lógicos de baixa voltagem.',
    concept: 'Silhueta colunar estreita e vertical típica de cipreste, com agulhas finas de cristal de silício.',
    accentColor: '#10B981',
    iconType: 'pine',
    hasRealAsset: false,
    keyVisualFeatures: ['Silhueta vertical estreita', 'Tronco reto esguio', 'Textura em escamas geométricas'],
  },
  {
    id: 'tree-c7',
    name: 'Musgo Matricial',
    rarity: 'COMUM',
    description: 'Tapete vegetal que processa pequenas operações lógicas em nanoescala.',
    concept: 'Pequena base vegetal bulbosa com coxins de musgo aveludado e nós de processamento integrados.',
    accentColor: '#059669',
    iconType: 'fern',
    hasRealAsset: false,
    keyVisualFeatures: ['Almofadas de musgo macio', 'Micro-ramos condutores', 'Tons verdes terrosos e menta'],
  },
  {
    id: 'tree-c8',
    name: 'Bambu de Fibra Óptica',
    rarity: 'COMUM',
    description: 'Colmos transparentes que transmitem pulsos de luz entre nós escolares.',
    concept: 'Colmos ocos segmentados com pontas brilhantes que conduzem luz azulada em pulsos suaves.',
    accentColor: '#34D399',
    iconType: 'pine',
    hasRealAsset: false,
    keyVisualFeatures: ['Nós de colmo cilíndricos', 'Pontas de folhas luminosas', 'Silhueta esguia e vertical'],
  },
  {
    id: 'tree-c9',
    name: 'Líquon Quântico',
    rarity: 'COMUM',
    description: 'Simbiose vegetal-digital que limpa resíduos de memória volátil da rede.',
    concept: 'Casca rugosa revestida por placas de líquen verde-azulado com formas orgânicas irregulares.',
    accentColor: '#065F46',
    iconType: 'sprout',
    hasRealAsset: false,
    keyVisualFeatures: ['Placas de líquen incrustadas', 'Tronco nodoso compacto', 'Bordas de cores contrastantes'],
  },
  {
    id: 'tree-c10',
    name: 'Videira Hexadecimal',
    rarity: 'COMUM',
    description: 'Trepadeira de barramentos que conecta circuitos com seiva eletrolítica estável.',
    concept: 'Caule trançado flexível com folhas hexagonais estilizadas e gavinha encaracolada condutora.',
    accentColor: '#0D9488',
    iconType: 'fern',
    hasRealAsset: false,
    keyVisualFeatures: ['Folhas hexagonais facetadas', 'Gavinha condutora', 'Verde azulado vítreo'],
  },

  // =========================================================================
  // --- RARO (8 árvores) ---
  // =========================================================================
  {
    id: 'tree-r1',
    name: 'Carvalho Quântico',
    rarity: 'RARO',
    description: 'Suas raízes existem em superposição quântica, captando energia de múltiplos nós.',
    concept: 'Carvalho vigoroso com copa assimétrica em camadas, folhas de cristal azul e nós de superposição.',
    accentColor: '#087EA4',
    iconType: 'oak',
    compatibleClass: 'warrior',
    imageUrl: '/assets/trees/tree-r1.jpg',
    fallbackImageUrl: '/src/assets/images/tree_quantum_oak_1792690109451.jpg',
    hasRealAsset: true,
    keyVisualFeatures: ['Tronco retorcido com veios azuis', 'Folhas cristalizadas ciano', 'Raízes com nós em superposição', 'Partículas orbitantes'],
  },
  {
    id: 'tree-r2',
    name: 'Salgueiro de Fótons',
    rarity: 'RARO',
    description: 'Emite cascatas de luz direcionada, inspirando arqueiros e mentes velozes.',
    concept: 'Salgueiro com galhos pendentes longos formados por filamentos de luz amarela e ciano.',
    accentColor: '#38BDF8',
    iconType: 'willow',
    compatibleClass: 'archer',
    imageUrl: '/assets/trees/tree-r2.jpg',
    fallbackImageUrl: '/src/assets/images/tree_photon_willow_1793276563263.jpg',
    hasRealAsset: true,
    keyVisualFeatures: ['Ramos pendentes em cascata', 'Filamentos de luz contínuos', 'Raízes arqueadas sobre o solo'],
  },
  {
    id: 'tree-r3',
    name: 'Pinheiro Criptográfico',
    rarity: 'RARO',
    description: 'Estrutura geométrica impenetrável que armazena teoremas ancestrais.',
    concept: 'Conífera cônica dividida em andares poligonais com chaves de criptografia e agulhas de obsidiana.',
    accentColor: '#0284C7',
    iconType: 'pine',
    compatibleClass: 'mage',
    imageUrl: '/assets/trees/tree-r3.jpg',
    fallbackImageUrl: '/src/assets/images/tree_crypto_pine_1793276564673.jpg',
    hasRealAsset: true,
    keyVisualFeatures: ['Andares cônicos angulares', 'Símbolos de cifragem na casca', 'Azul cobalto e grafite'],
  },
  {
    id: 'tree-r4',
    name: 'Álamo Eletrostático',
    rarity: 'RARO',
    description: 'Vibra com cargas estáticas que aceleram a velocidade de digitação do estudante.',
    concept: 'Copa pontiaguda e galhos ascendentes com folhas que crepitam pequenas faíscas estáticas azuis.',
    accentColor: '#60A5FA',
    iconType: 'oak',
    compatibleClass: 'archer',
    hasRealAsset: false,
    keyVisualFeatures: ['Silhueta em chama ascendente', 'Faíscas eletrostáticas na copa', 'Galhos estreitos convergentes'],
  },
  {
    id: 'tree-r5',
    name: 'Jacarandá Cibernético',
    rarity: 'RARO',
    description: 'Floresce em tons violeta digital quando fórmulas complexas são solucionadas.',
    concept: 'Copa ampla em nuvem lilás e violeta com flores geométricas que caem em chuva de pétalas digitais.',
    accentColor: '#818CF8',
    iconType: 'willow',
    compatibleClass: 'mage',
    hasRealAsset: false,
    keyVisualFeatures: ['Nuvem de flores lilás', 'Tronco trançado escuro', 'Pétalas flutuantes luminosas'],
  },
  {
    id: 'tree-r6',
    name: 'Ipê Supercondutor',
    rarity: 'RARO',
    description: 'Flores amarelas brilhantes com resistência nula à propagação de conhecimento.',
    concept: 'Ipê majestoso de copa densa amarelo-ouro radiante com ramos condutores de resistência zero.',
    accentColor: '#F59E0B',
    iconType: 'oak',
    compatibleClass: 'warrior',
    hasRealAsset: false,
    keyVisualFeatures: ['Copa amarelo-dourada viva', 'Tronco com linhas supercondutoras', 'Pétalas radiantes caindo'],
  },
  {
    id: 'tree-r7',
    name: 'Bétula Holográfica',
    rarity: 'RARO',
    description: 'Casca branca pura com marcas iridescentes que projetam hologramas de fórmulas.',
    concept: 'Tronco esbelto branco-prateado com marcas negras que projetam hologramas geométricos suaves.',
    accentColor: '#22D3EE',
    iconType: 'pine',
    compatibleClass: 'mage',
    hasRealAsset: false,
    keyVisualFeatures: ['Tronco branco com anéis escuros', 'Folhagem holográfica translúcida', 'Projeções flutuantes'],
  },
  {
    id: 'tree-r8',
    name: 'Olmo de Grafite',
    rarity: 'RARO',
    description: 'Ramos condutores de alta resistência que blindam os canais de raciocínio lógico.',
    concept: 'Olmo com tronco cinza-chumbo grafite e folhas com reflexos prateados de alta durabilidade.',
    accentColor: '#64748B',
    iconType: 'oak',
    compatibleClass: 'warrior',
    hasRealAsset: false,
    keyVisualFeatures: ['Madeira cinza-grafite espessa', 'Folhas com brilho prateado', 'Raízes robustas e firmes'],
  },

  // =========================================================================
  // --- ÉPICO (5 árvores) ---
  // =========================================================================
  {
    id: 'tree-e1',
    name: 'Baobá Nanoestruturado',
    rarity: 'ÉPICO',
    description: 'Tronco colossal reforçado por nanocarbono, sustentando dados milenares.',
    concept: 'Baobá de proporções imensas com tronco bojudo de nanotubos e copa com veios de luz roxa.',
    accentColor: '#A855F7',
    iconType: 'baobab',
    compatibleClass: 'warrior',
    imageUrl: '/assets/trees/tree-e1.jpg',
    fallbackImageUrl: '/src/assets/images/tree_nano_baobab_1793276565881.jpg',
    hasRealAsset: true,
    keyVisualFeatures: ['Tronco colossal arredondado', 'Mosaico de nanocarbono', 'Copas horizontais com runas arcanas'],
  },
  {
    id: 'tree-e2',
    name: 'Cerejeira de Plasma',
    rarity: 'ÉPICO',
    description: 'Pétalas de plasma ionizado que reagem ao fluxo eletromagnético do saber.',
    concept: 'Cerejeira japonesa mística com tronco retorcido de obsidiana e pétalas de plasma magenta/rosa luminosas.',
    accentColor: '#EC4899',
    iconType: 'sakura',
    compatibleClass: 'archer',
    imageUrl: '/assets/trees/tree-e2.jpg',
    fallbackImageUrl: '/src/assets/images/tree_plasma_cherry_1792690125450.jpg',
    hasRealAsset: true,
    keyVisualFeatures: ['Tronco de obsidiana retorcido', 'Pétalas de plasma magenta vivo', 'Arcos elétricos suaves', 'Aura rosa ionizada'],
  },
  {
    id: 'tree-e3',
    name: 'Sequoia de Grafeno',
    rarity: 'ÉPICO',
    description: 'Altura monumental com condutividade perfeita de conhecimento arcano e científico.',
    concept: 'Sequoia monumental altíssima com tronco de anéis de grafeno preto e anéis de condutividade anil.',
    accentColor: '#818CF8',
    iconType: 'sequoia',
    compatibleClass: 'mage',
    hasRealAsset: false,
    keyVisualFeatures: ['Estatura monumental imponente', 'Placas de grafeno reflexivas', 'Linhas de alta voltagem azuis'],
  },
  {
    id: 'tree-e4',
    name: 'Magnólia da Relatividade',
    rarity: 'ÉPICO',
    description: 'Distorce suavemente o tempo ao redor de sua copa através de campos gravitacionais.',
    concept: 'Grandes flores de magnólia translúcidas cujas pétalas curvam o espaço e a luz ao redor.',
    accentColor: '#C084FC',
    iconType: 'sakura',
    compatibleClass: 'mage',
    hasRealAsset: false,
    keyVisualFeatures: ['Flores de magnólia violeta abertas', 'Ondas gravitacionais desenhadas', 'Luz refratada em arco-íris'],
  },
  {
    id: 'tree-e5',
    name: 'Cedro de Matéria Escura',
    rarity: 'ÉPICO',
    description: 'Absorve partículas invisíveis do cosmos para nutrir raízes cósmicas impenetráveis.',
    concept: 'Cedro piramidal esculpido em matéria escura densa com veios violeta pulsantes e absorção de luz.',
    accentColor: '#9333EA',
    iconType: 'pine',
    compatibleClass: 'warrior',
    hasRealAsset: false,
    keyVisualFeatures: ['Silhueta de cedro imponente', 'Casca escura que absorve luz', 'Veios roxos incandescentes'],
  },

  // =========================================================================
  // --- LENDÁRIO (3 árvores) ---
  // =========================================================================
  {
    id: 'tree-l1',
    name: 'Árvore da Singularidade',
    rarity: 'LENDÁRIO',
    description: 'Dobra o continuum espaço-temporal com gravidade e foco intelectivo absoluto.',
    concept: 'Tronco monumental torcido ao redor de um núcleo de buraco negro estelar com anéis de acreção dourados.',
    accentColor: '#F59E0B',
    iconType: 'singularity',
    imageUrl: '/assets/trees/tree-l1.jpg',
    fallbackImageUrl: '/src/assets/images/tree_singularity_1792690125341.jpg',
    hasRealAsset: true,
    keyVisualFeatures: ['Núcleo de singularidade cósmica', 'Anéis de acreção dourados', 'Raízes formando órbitas', 'Madeira estelar estriada'],
  },
  {
    id: 'tree-l2',
    name: 'Hiperárvore Cósmica',
    rarity: 'LENDÁRIO',
    description: 'Suas copas se estendem pelas órbitas estelares, conectando galáxias e fórmulas.',
    concept: 'Copa monumental que abriga nebulosas multicoloridas e constelações em seus ramos dourados.',
    accentColor: '#F43F5E',
    iconType: 'hyper',
    imageUrl: '/assets/trees/tree-l2.jpg',
    fallbackImageUrl: '/src/assets/images/tree_hyper_cosmic_1793276567816.jpg',
    hasRealAsset: true,
    keyVisualFeatures: ['Galhos estelares bifurcados', 'Nebulosas magenta e púrpura', 'Estrelas pontuais na folhagem'],
  },
  {
    id: 'tree-l3',
    name: 'Titã da Matriz Neural',
    rarity: 'LENDÁRIO',
    description: 'Uma consciência vegetal viva que sintetiza toda a ciência e matemática da rede.',
    concept: 'Tronco colossal ancestral interconectado com sinapses luminosas esmeralda e ouro.',
    accentColor: '#10B981',
    iconType: 'oak',
    imageUrl: '/assets/trees/tree-l3.jpg',
    fallbackImageUrl: '/src/assets/images/tree_neural_titan_1793276568292.jpg',
    hasRealAsset: true,
    keyVisualFeatures: ['Tronco colossal com sinapses neurais', 'Nódulos de sabedoria brilhantes', 'Raízes interconectadas em rede'],
  },

  // =========================================================================
  // --- YGGDRASIL (1 árvore - ÁPICE ABSOLUTO) ---
  // =========================================================================
  {
    id: 'tree-y1',
    name: 'Yggdrasil - A Matriz dos Mundos',
    rarity: 'YGGDRASIL',
    description: 'A árvore cósmica primordial cujos ramos entrelaçam a ciência, a matemática e o cosmos.',
    concept: 'O eixo monumental do universo, com copas de glicínias astrais pendentes violeta e ciano, tronco cósmico trançado e raízes primordiais.',
    accentColor: '#A855F7',
    iconType: 'yggdrasil',
    imageUrl: '/assets/trees/tree-y1.jpg',
    fallbackImageUrl: '/src/assets/images/yggdrasil_tree_1790986916956.jpg',
    hasRealAsset: true,
    keyVisualFeatures: [
      'Copa colossal em cascata de glicínias astrais',
      'Tronco trançado monumental sustentando realidades',
      'Raízes que penetram o cosmos',
      'Runas primordiais esculpidas',
      'Veios de energia viva pulsante',
      'Presença soberana suprema',
    ],
  },
];

/**
 * Funções de Acesso e Consulta ao Registro Central
 */

export function getTreeById(id: string): TreeItem {
  const tree = TREE_DATABASE.find((t) => t.id === id);
  return tree || TREE_DATABASE[0];
}

export function getAllTrees(): TreeItem[] {
  return TREE_DATABASE;
}

export function getTreesByRarity(rarity: TreeRarity): TreeItem[] {
  return TREE_DATABASE.filter((t) => t.rarity === rarity);
}

export function getEquippedTree(id?: string): TreeItem {
  if (!id) return TREE_DATABASE[0];
  return getTreeById(id);
}

export function getTreeAuditStats(): {
  total: number;
  withArtwork: number;
  pendingArtwork: number;
  byRarity: Record<TreeRarity, { total: number; withArtwork: number }>;
} {
  const total = TREE_DATABASE.length;
  const withArtwork = TREE_DATABASE.filter((t) => t.hasRealAsset).length;
  const pendingArtwork = total - withArtwork;

  const rarities: TreeRarity[] = ['COMUM', 'RARO', 'ÉPICO', 'LENDÁRIO', 'YGGDRASIL'];
  const byRarity = {} as Record<TreeRarity, { total: number; withArtwork: number }>;

  for (const r of rarities) {
    const list = getTreesByRarity(r);
    byRarity[r] = {
      total: list.length,
      withArtwork: list.filter((t) => t.hasRealAsset).length,
    };
  }

  return { total, withArtwork, pendingArtwork, byRarity };
}
