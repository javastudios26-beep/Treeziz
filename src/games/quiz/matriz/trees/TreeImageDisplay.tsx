import React, { useState, useEffect } from 'react';
import {
  TreeDeciduous,
  Sparkles,
  Lock,
  Layers,
  Wand2,
} from 'lucide-react';
import { TreeItem } from './treeRegistry';

export interface TreeImageDisplayProps {
  tree: TreeItem;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isUnlocked?: boolean;
  className?: string;
  showRarityBadge?: boolean;
  showFallbackBadge?: boolean;
  onClick?: () => void;
}

const SIZE_MAP = {
  xs: { container: 'w-7 h-7 rounded-md', icon: 'w-4 h-4', badgeText: 'text-[7px]' },
  sm: { container: 'w-10 h-10 rounded-lg', icon: 'w-5 h-5', badgeText: 'text-[8px]' },
  md: { container: 'w-14 h-14 rounded-xl', icon: 'w-7 h-7', badgeText: 'text-[9px]' },
  lg: { container: 'w-24 h-24 rounded-2xl', icon: 'w-11 h-11', badgeText: 'text-[10px]' },
  xl: { container: 'w-32 h-32 rounded-2xl', icon: 'w-14 h-14', badgeText: 'text-xs' },
};

/**
 * Componente unificado e resiliente para renderização das imagens das árvores
 * em todas as áreas do jogo: Inventário, HUD, Gacha e Painel Administrativo.
 */
export const TreeImageDisplay: React.FC<TreeImageDisplayProps> = ({
  tree,
  size = 'md',
  isUnlocked = true,
  className = '',
  showRarityBadge = false,
  showFallbackBadge = false,
  onClick,
}) => {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(tree.imageUrl);
  const [hasError, setHasError] = useState<boolean>(false);
  const [triedFallback, setTriedFallback] = useState<boolean>(false);

  // Sincroniza quando a árvore fornecida mudar
  useEffect(() => {
    setCurrentSrc(tree.imageUrl);
    setHasError(false);
    setTriedFallback(false);
  }, [tree.id, tree.imageUrl]);

  const handleImageError = () => {
    if (!triedFallback && tree.fallbackImageUrl && currentSrc !== tree.fallbackImageUrl) {
      console.warn(`[TreeImageDisplay] Falha no asset primário para "${tree.name}" (${tree.id}). Tentando fallback:`, tree.fallbackImageUrl);
      setTriedFallback(true);
      setCurrentSrc(tree.fallbackImageUrl);
    } else {
      console.warn(`[TreeImageDisplay] Falha ao carregar asset para "${tree.name}" (${tree.id}) em:`, currentSrc);
      setHasError(true);
    }
  };

  const sizeCfg = SIZE_MAP[size] || SIZE_MAP.md;

  // Se bloqueado: renderiza casulo escuro com cadeado
  if (!isUnlocked) {
    return (
      <div
        className={`${sizeCfg.container} bg-[#0A0F12] border border-[#263238] flex flex-col items-center justify-center relative overflow-hidden shrink-0 select-none ${className}`}
        title={`${tree.name} (Espécime Bloqueado)`}
      >
        <Lock className={`${sizeCfg.icon} text-slate-600 opacity-60`} />
      </div>
    );
  }

  // Se possui imagem válida e não deu erro fatal
  const hasValidImage = Boolean(currentSrc) && !hasError;

  return (
    <div
      onClick={onClick}
      className={`${sizeCfg.container} relative flex items-center justify-center shrink-0 overflow-hidden border select-none transition-all ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
      style={{
        backgroundColor: hasValidImage ? '#FFFFFF' : `${tree.accentColor}15`,
        borderColor: hasValidImage ? `${tree.accentColor}70` : `${tree.accentColor}40`,
        boxShadow: hasValidImage ? `0 0 16px ${tree.accentColor}25` : undefined,
      }}
      title={`${tree.name} (${tree.rarity})`}
    >
      {hasValidImage ? (
        <img
          src={currentSrc}
          alt={tree.name}
          onError={handleImageError}
          className="w-full h-full object-contain p-0.5"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      ) : (
        /* Placeholder procedural inconfundível para árvores sem asset pronto */
        <div className="w-full h-full flex flex-col items-center justify-center p-1 text-center bg-gradient-to-b from-[#080F12] to-[#0A0F12]">
          <TreeDeciduous
            className={`${sizeCfg.icon} transition-transform hover:scale-110`}
            style={{ color: tree.accentColor }}
          />

          {(size === 'lg' || size === 'xl' || showFallbackBadge) && (
            <div className="absolute bottom-1 inset-x-1 flex justify-center">
              <span className="text-[7px] font-mono font-bold tracking-tight px-1 py-0.2 rounded bg-[#11181C] border border-amber-500/40 text-amber-300 uppercase shadow-sm">
                Arte em Síntese
              </span>
            </div>
          )}
        </div>
      )}

      {/* Badge de Raridade Opcional */}
      {showRarityBadge && (
        <span
          className={`absolute top-0.5 right-0.5 px-1 rounded font-mono font-bold uppercase ${sizeCfg.badgeText}`}
          style={{
            backgroundColor: `${tree.accentColor}DD`,
            color: '#FFFFFF',
          }}
        >
          {tree.rarity[0]}
        </span>
      )}
    </div>
  );
};
