/**
 * GERADOR DE PROMPTS DE ÁRVORES MÍSTICAS POR RARIDADE | TYPECLICKER MATRIX
 *
 * Transforma o PROMPT MESTRE em um gerador procedural e visual de árvores,
 * no qual o nome de cada árvore influencia diretamente:
 * - O design anatômico (copa, tronco, galhos, raízes)
 * - A paleta de cores dominante e secundária
 * - A silhueta e complexidade geométrica
 * - Os efeitos mágicos e materiais fantásticos
 * - A hierarquia de imponência (Comum -> Raro -> Épico -> Lendário -> Yggdrasil como Ápice Absoluto)
 */

import { TREE_DATABASE, TreeItem, TreeRarity } from '../trees/treeRegistry';

export type { TreeRarity };
export type TreePresetInfo = TreeItem;

export interface TreePromptParams {
  name: string;
  rarity: TreeRarity;
  themeConcept?: string;
  preferredPalette?: string;
}

export interface GeneratedTreePrompt {
  masterPrompt: string;
  compactImagePrompt: string;
  rarityRules: {
    title: string;
    identity: string;
    silhouette: string;
    materials: string;
    magicLevel: string;
    limits: string;
  };
  recommendedPalette: string[];
}

/**
 * DIRETRIZES DA DIREÇÃO ARTÍSTICA GLOBAL
 */
export const ART_STYLE_SPECIFICATION = {
  styleName: 'Neo-Brutalista / Flat Cartunesco Vibrante (Asset 2D Colecionável)',
  contours: 'Contornos escuros e grossos (#0F172A e #1E293B) com divisões internas que definem anatomia e musculatura vegetal.',
  shading: 'Cel shading nítido em blocos, com áreas de luz e sombra bem definidas; sem degradês fotográficos suaves e sem texturas realistas.',
  background: 'Fundo branco puro (#FFFFFF) para isolamento total do asset como sprite de jogo.',
  composition: 'Árvore isolada de corpo inteiro, centralizada, vista de frente em perspectiva ligeiramente tridimensional, mostrando copa completa, tronco e raízes visíveis sem cortes.',
  prohibitions: 'Sem personagens, sem chão elaborado/cenário, sem construções, sem molduras, sem textos escritos e sem HUD.',
  hierarchySummary: 'Comum (compacta e sutil) → Raro (assimétrica e mágica) → Épico (sobrenatural e plasmática) → Lendário (monumental e cósmica) → Yggdrasil (ápice supremo dos mundos).',
};

/**
 * HIERARQUIA VISUAL E REGRAS POR RARIDADE
 */
export const RARITY_VISUAL_HIERARCHY: Record<
  TreeRarity,
  {
    title: string;
    identity: string;
    silhouette: string;
    materials: string;
    magicLevel: string;
    limits: string;
    recommendedPalette: string[];
    powerTier: string;
  }
> = {
  COMUM: {
    title: 'Comum — Natureza simples e encantamento discreto',
    identity: 'Uma árvore natural, simpática e relativamente simples, com um toque mágico sutil. Não parece malfeita ou genérica: seu nome dita sua anatomia vegetal específica.',
    silhouette: 'Compacta, geométrica, tronco simples com poucas torções e raízes discretas com anatomia clara.',
    materials: 'Folhagens definidas, madeira suave, pequenos detalhes condutores ou orgânicos inspirados no nome.',
    magicLevel: 'Mínimo: raros pontos luminosos ou micro-partículas sutis ao redor das folhas.',
    limits: 'Sem grandes auras, runas luminosas extensas, múltiplos anéis mágicos ou efeitos de energia exuberantes.',
    recommendedPalette: ['#10B981', '#00A878', '#00FF88', '#2DD4BF', '#0F172A'],
    powerTier: 'Tier 1 / Básico Harmônico',
  },
  RARO: {
    title: 'Raro — Natureza aprimorada e magia perceptível',
    identity: 'Uma árvore especial, claramente diferente das comuns, com características mágicas visíveis e materiais que reforçam a identidade do nome.',
    silhouette: 'Mais elaborada, copa assimétrica ou em camadas distintas, tronco com torções e raízes ornamentais.',
    materials: 'Folhas cristalizadas, veios translúcidos, flores com formas próprias ou nós condutores.',
    magicLevel: 'Moderado: marcas mágicas localizadas, pequenas runas, feixes de luz direcionados e partículas orbitando.',
    limits: 'Efeitos mágicos localizados, sem uma aura gigantesca que domine a composição.',
    recommendedPalette: ['#087EA4', '#38BDF8', '#0EA5E9', '#0284C7', '#0F172A'],
    powerTier: 'Tier 2 / Aprimorado Elementar',
  },
  ÉPICO: {
    title: 'Épico — Poder mágico intenso e anatomia extraordinária',
    identity: 'Claramente sobrenatural, com desenho marcante e detalhes mágicos integrados à sua anatomia vegetal. Transmite energia pulsante.',
    silhouette: 'Copa multicamada dramática, tronco colossal retorcido, ramificações complexas e raízes expressivas.',
    materials: 'Plasma ionizado, grafeno condutor, veios brilhantes, casca de minerais e obsidiana.',
    magicLevel: 'Intenso: arcos elétricos/plasma, runas brilhantes gravadas na casca, faíscas mágicas e veios energéticos visíveis.',
    limits: 'Efeitos marcantes porém controlados; não usar quantidade excessiva de anéis ou auras que poluam a silhueta.',
    recommendedPalette: ['#A855F7', '#EC4899', '#818CF8', '#C084FC', '#0F172A'],
    powerTier: 'Tier 3 / Sobrenatural Arcano',
  },
  LENDÁRIO: {
    title: 'Lendário — Presença majestosa e poder excepcional',
    identity: 'Monumental, antiga ou quase divina, com silhueta memorável, presença visual soberana e materiais celestes ou gravitacionais.',
    silhouette: 'Copa volumosa e majestosa, tronco monumental com estruturas sobrenaturais, raízes formando padrões geométricos no solo.',
    materials: 'Madeira de poeira estelar, ouro âmbar cristalizado, singularidades gravitacionais e anéis orbitais.',
    magicLevel: 'Excepcional: auras gravitacionais, anéis orbitais, runas antigas brilhantes e pequenas estrelas ao redor.',
    limits: 'Não competir com a escala de Yggdrasil em densidade simbólica, eixo dos mundos ou complexidade total.',
    recommendedPalette: ['#F59E0B', '#F43F5E', '#10B981', '#7C3AED', '#0F172A'],
    powerTier: 'Tier 4 / Quase Divino & Cósmico',
  },
  YGGDRASIL: {
    title: 'Yggdrasil — Árvore Suprema dos Mundos (Ápice Absoluto)',
    identity: 'A árvore cósmica primordial, eixo de mundos e representação máxima de poder, sabedoria, vida e energia. O ápice indiscutível de toda a coleção.',
    silhouette: 'Colossal, monumental e majestosa, copa densa e multicamada (estilo glicínias astrais), tronco colossal retorcido e raízes nodosas profundas que sustentam dimensões.',
    materials: 'Madeira primordial viva, veios astrais pulsantes, folhagens cósmicas e runas sagradas gravadas no cerne.',
    magicLevel: 'Ápice Supremo: aura primordial estruturada, constelações tênues, veios de energia viva que pulsam pelo tronco e flores luminosas estelares.',
    limits: 'TETO VISUAL ABSOLUTO: nenhuma árvore do universo pode superar a Yggdrasil em imponência, escala mítica e complexidade mágica.',
    recommendedPalette: ['#0F172A', '#1E3A8A', '#7C3AED', '#A78BFA', '#06B6D4', '#10B981', '#34D399'],
    powerTier: 'Tier Supremo / Ápice Cósmico Absoluto',
  },
};

/**
 * TODAS AS 27 ÁRVORES DO TYPECLICKER MATRIX (REFERENCIANDO O REGISTRO CENTRAL)
 */
export const ALL_27_TREES: TreeItem[] = TREE_DATABASE;


/**
 * Constrói o Prompt Mestre completo e formatado pronto para geração de imagem
 */
export function generateMasterTreePrompt(params: TreePromptParams): GeneratedTreePrompt {
  const { name, rarity, themeConcept, preferredPalette } = params;
  const rarityConfig = RARITY_VISUAL_HIERARCHY[rarity];

  // Identifica preset conhecido para enriquecer o conceito caso exista
  const preset = ALL_27_TREES.find((t) => t.name.toLowerCase() === name.toLowerCase());

  const paletteString = preferredPalette || (preset ? [preset.accentColor, ...rarityConfig.recommendedPalette.slice(0, 4)].join(', ') : rarityConfig.recommendedPalette.join(', '));
  const conceptString = themeConcept || (preset ? preset.concept : `Conceito inspirado diretamente no nome "${name}", refletindo sua identidade elementar, anatômica e temática.`);

  const masterPrompt = `# PROMPT MESTRE — GERADOR DE ÁRVORES MÍSTICAS POR RARIDADE | TYPECLICKER MATRIX

## OBJETIVO
Gere uma ilustração de árvore mística para o jogo TypeClicker, utilizando obrigatoriamente como referência o NOME DA ÁRVORE e sua RARIDADE. O nome e a raridade devem determinar a identidade visual, a anatomia, a silhueta, a paleta de cores, os materiais, os efeitos mágicos e a imponência da árvore.

Cada árvore deve parecer um item colecionável exclusivo de um jogo 2D, com identidade visual própria e coerente com seu nome, sua origem temática e seu nível de raridade.

A Yggdrasil representa o nível máximo de poder, raridade e majestade visual. Nenhuma outra árvore pode superar sua imponência, complexidade mágica ou presença visual.

## DADOS DE ENTRADA
- Nome da árvore: ${name}
- Raridade: ${rarity}
- Tema ou conceito da árvore: ${conceptString}
- Paleta de cores preferencial: ${paletteString}

## 1. DIREÇÃO ARTÍSTICA GLOBAL
- Estilo visual: ${ART_STYLE_SPECIFICATION.styleName}.
- Contornos: ${ART_STYLE_SPECIFICATION.contours}
- Sombreamento: ${ART_STYLE_SPECIFICATION.shading}
- Composição: ${ART_STYLE_SPECIFICATION.composition}
- Fundo: ${ART_STYLE_SPECIFICATION.background}
- Proibições: ${ART_STYLE_SPECIFICATION.prohibitions}

## 2. SISTEMA DE RARIDADE E HIERARQUIA VISUAL (${rarity})
${rarityConfig.title}

- Identidade visual: ${rarityConfig.identity}
- Silhueta: ${rarityConfig.silhouette}
- Materiais & Texturas: ${rarityConfig.materials}
- Nível de Magia & Efeitos: ${rarityConfig.magicLevel}
- Limite visual: ${rarityConfig.limits}
- Nível de Poder: ${rarityConfig.powerTier}

## 3. O NOME DA ÁRVORE DEVE DETERMINAR O DESIGN ("${name}")
O nome é a instrução artística fundamental:
- Anatomia específica: O tronco, copa, galhos e raízes expressam a essência de "${name}".
${preset?.keyVisualFeatures ? `- Detalhes característicos: ${preset.keyVisualFeatures.join('; ')}.` : `- Detalhes característicos: Formas visuais derivadas dos substantivos e adjetivos de "${name}".`}
- Reconhecimento: A árvore mantém legibilidade instantânea em miniatura no inventário e HUD do jogo.

RESULTADO ESPERADO: Asset 2D colecionável de altíssima qualidade, esteticamente coeso com a coleção TypeClicker Matrix e fiel à hierarquia de raridade.`;

  // Versão compacta otimizada para modelos de IA generativa de imagem (Gemini Imagen)
  const compactImagePrompt = `Neo-Brutalism flat cartoon vibrant 2D game collectible asset illustration of '${name}', ${rarity} rarity tree. ${conceptString}. Style: bold dark outlines #0F172A and #1E293B, block cel shading, rich colors (${paletteString}), ${rarityConfig.materials}, ${rarityConfig.magicLevel}. Centered full body showing complete canopy, trunk, branches and roots isolated on pure white background (#FFFFFF), no text, no characters, no frame, 2D game sprite asset.`;

  return {
    masterPrompt,
    compactImagePrompt,
    rarityRules: {
      title: rarityConfig.title,
      identity: rarityConfig.identity,
      silhouette: rarityConfig.silhouette,
      materials: rarityConfig.materials,
      magicLevel: rarityConfig.magicLevel,
      limits: rarityConfig.limits,
    },
    recommendedPalette: rarityConfig.recommendedPalette,
  };
}
