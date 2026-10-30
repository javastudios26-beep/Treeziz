import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useId,
} from 'react';

import {
  motion,
  AnimatePresence,
} from 'motion/react';

import {
  ArrowLeft,
  Trophy,
  CheckCircle,
  XCircle,
  Sparkles,
  TreeDeciduous,
  Shield,
  Zap,
  Target,
  Clock,
  BookOpen,
  Award,
  Layers,
  ChevronRight,
  Flame,
  RotateCcw,
  Star,
  Compass,
  Cpu,
  Atom,
  HelpCircle,
  Trash2,
  AlertTriangle,
  RefreshCw,
  Wrench,
  GraduationCap,
  School,
  Check,
  Home,
  Unlock,
  Lock,
  ShieldCheck,
  ShieldAlert,
  LogOut,
  KeyRound,
  CheckCircle2,
  Filter,
  Eye,
  EyeOff,
  Copy,
  Wand2,
  Palette,
} from 'lucide-react';

import confetti from 'canvas-confetti';

import {
  BaseGameProps,
  GameExitPayload,
  GameSessionStats,
  StudentRpgClass,
} from '../../../types/gamePlugin';

import {
  ALL_OFFICIAL_QUESTIONS,
  getQuestionsForSection,
  getAllSectionKeys,
} from './questions/questionRegistry';

import {
  markQuestionAsUsed,
  getUnusedQuestions,
  isSectionCompleted,
  getSectionProgress,
  restartSectionRound,
  restartAllSectionsRounds,
} from './questions/questionTracker';

import {
  isCurrentAdminSessionValid,
  getRemainingSessionMinutes,
  authenticateWithGoogle,
  logoutAdminSession,
  verifyServerSession,
  serverResetSection,
  serverResetAllSections,
  fetchServerAuditLogs,
  fetchServerAdminConfig,
  OFFICIAL_ADMIN_LIST_INFO,
  GoogleUserProfile,
  AuditLogEntry,
  AdminConfigResponse,
  DEFAULT_ADMIN_USER,
  getCachedGoogleUser,
} from './auth/adminAuth';

import { generateMathQuestion } from './proceduralMath';
import { SCIENCE_QUESTION_BANK } from './scienceBank';
import { getNextInfiniteQuestion } from './procedural/infiniteQuestionService';
import {
  generateMasterTreePrompt,
  ALL_27_TREES,
  ART_STYLE_SPECIFICATION,
  RARITY_VISUAL_HIERARCHY,
  TreePresetInfo,
} from './procedural/treePromptGenerator';

import {
  TREE_DATABASE,
  TreeItem,
  TreeRarity,
  getTreeById,
  getEquippedTree,
  getTreeAuditStats,
} from './trees/treeRegistry';
import { TreeImageDisplay } from './trees/TreeImageDisplay';


// ==================================================
// 2. AUDIO OBRIGATÓRIO (NÃO ALTERAR)
// ==================================================

class GameAudio {
  private static ctx: AudioContext | null = null;

  private static getCtx(): AudioContext {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') void this.ctx.resume();
    return this.ctx;
  }

  static playSuccess(): void {
    const ctx = this.getCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(587, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.15);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  }

  static playError(): void {
    const ctx = this.getCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(90, ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.2);
  }

  static cleanup(): void {
    if (this.ctx) {
      void this.ctx.close();
      this.ctx = null;
    }
  }
}

// ==================================================
// INTERFACES & TIPOS
// ==================================================

export type SubjectType = 'matematica' | 'ciencias';
export type GradeType =
  | '6º ano'
  | '7º ano'
  | '8º ano'
  | '9º ano'
  | '1º ano EM'
  | '2º ano EM'
  | '3º ano EM';
export type DifficultyType = 'facil' | 'medio' | 'dificil' | 'expert';

export interface Question {
  id: string;
  subject: SubjectType;
  grade: GradeType;
  difficulty: DifficultyType;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  xp: number;
  bnccSkill?: string;
  topic?: string;
  isProcedural?: boolean;
  signature?: string;
}

export interface GachaRate {
  COMUM: number;
  RARO: number;
  ÉPICO: number;
  LENDÁRIO: number;
  YGGDRASIL: number;
}

// ==================================================
// CONFIGURAÇÕES DE DIFICULDADE & GACHA
// ==================================================

const DIFFICULTY_CONFIG: Record<
  DifficultyType,
  {
    label: string;
    xpReq: number;
    xpPerCorrect: number;
    allowedGrades: GradeType[];
    color: string;
  }
> = {
  facil: {
    label: 'FÁCIL',
    xpReq: 0,
    xpPerCorrect: 20,
    allowedGrades: ['6º ano', '7º ano'],
    color: '#00FF88',
  },
  medio: {
    label: 'MÉDIO',
    xpReq: 1000,
    xpPerCorrect: 35,
    allowedGrades: ['7º ano', '8º ano'],
    color: '#38BDF8',
  },
  dificil: {
    label: 'DIFÍCIL',
    xpReq: 3000,
    xpPerCorrect: 55,
    allowedGrades: ['9º ano', '1º ano EM'],
    color: '#F59E0B',
  },
  expert: {
    label: 'EXPERT',
    xpReq: 6000,
    xpPerCorrect: 80,
    allowedGrades: [
      '6º ano',
      '7º ano',
      '8º ano',
      '9º ano',
      '1º ano EM',
      '2º ano EM',
      '3º ano EM',
    ],
    color: '#EC4899',
  },
};

const GACHA_LEVEL_CONFIG: Record<
  number,
  {
    name: string;
    xpReq: number;
    rates: GachaRate;
  }
> = {
  1: {
    name: 'GACHA NÍVEL 1',
    xpReq: 0,
    rates: { COMUM: 0.70, RARO: 0.22, ÉPICO: 0.06, LENDÁRIO: 0.018, YGGDRASIL: 0.002 },
  },
  2: {
    name: 'GACHA NÍVEL 2',
    xpReq: 1000,
    rates: { COMUM: 0.55, RARO: 0.30, ÉPICO: 0.11, LENDÁRIO: 0.035, YGGDRASIL: 0.005 },
  },
  3: {
    name: 'GACHA NÍVEL 3',
    xpReq: 3000,
    rates: { COMUM: 0.40, RARO: 0.32, ÉPICO: 0.20, LENDÁRIO: 0.070, YGGDRASIL: 0.010 },
  },
  4: {
    name: 'GACHA NÍVEL 4',
    xpReq: 6000,
    rates: { COMUM: 0.25, RARO: 0.30, ÉPICO: 0.28, LENDÁRIO: 0.140, YGGDRASIL: 0.030 },
  },
  5: {
    name: 'GACHA NÍVEL 5',
    xpReq: 10000,
    rates: { COMUM: 0.10, RARO: 0.25, ÉPICO: 0.32, LENDÁRIO: 0.250, YGGDRASIL: 0.080 },
  },
};

// ==================================================
// SISTEMA DE RENASCIMENTO / PRESTÍGIO (Requisitos 44 a 57)
// ==================================================

export const MAX_REBIRTH = 10;

export const REBIRTH_XP_REQUIREMENTS: Record<number, number> = {
  1: 5000,
  2: 12000,
  3: 22000,
  4: 35000,
  5: 52000,
  6: 75000,
  7: 105000,
  8: 145000,
  9: 200000,
  10: 275000,
};

export const getXpMultiplier = (rebirthCount: number): number => {
  return Number(Math.min(2.0, 1 + rebirthCount * 0.10).toFixed(2));
};

export const getBytesMultiplier = (rebirthCount: number): number => {
  return Number(Math.min(1.80, 1 + rebirthCount * 0.08).toFixed(2));
};

export interface NextDifficultyInfo {
  nextDiff: DifficultyType | null;
  nextDiffLabel: string;
  targetXp: number;
  xpNeeded: number;
  progressPct: number;
  allUnlocked: boolean;
}

export function getNextDifficultyProgress(cycleXp: number): NextDifficultyInfo {
  if (cycleXp >= 6000) {
    return {
      nextDiff: null,
      nextDiffLabel: 'Todas as dificuldades desbloqueadas neste ciclo!',
      targetXp: 6000,
      xpNeeded: 0,
      progressPct: 100,
      allUnlocked: true,
    };
  }

  if (cycleXp >= 3000) {
    const xpNeeded = Math.max(0, 6000 - cycleXp);
    const range = 6000 - 3000;
    const currentInRange = cycleXp - 3000;
    const progressPct = Math.min(100, Math.max(0, Math.round((currentInRange / range) * 100)));
    return {
      nextDiff: 'expert',
      nextDiffLabel: 'EXPERT',
      targetXp: 6000,
      xpNeeded,
      progressPct,
      allUnlocked: false,
    };
  }

  if (cycleXp >= 1000) {
    const xpNeeded = Math.max(0, 3000 - cycleXp);
    const range = 3000 - 1000;
    const currentInRange = cycleXp - 1000;
    const progressPct = Math.min(100, Math.max(0, Math.round((currentInRange / range) * 100)));
    return {
      nextDiff: 'dificil',
      nextDiffLabel: 'DIFÍCIL',
      targetXp: 3000,
      xpNeeded,
      progressPct,
      allUnlocked: false,
    };
  }

  // < 1000 XP
  const xpNeeded = Math.max(0, 1000 - cycleXp);
  const progressPct = Math.min(100, Math.max(0, Math.round((cycleXp / 1000) * 100)));
  return {
    nextDiff: 'medio',
    nextDiffLabel: 'MÉDIO',
    targetXp: 1000,
    xpNeeded,
    progressPct,
    allUnlocked: false,
  };
}

// ==================================================
// CONFIGURAÇÕES DE TURMAS & STORAGE
// ==================================================

const STORAGE_KEY = 'matriz-do-conhecimento-save';
const CLASS_STORAGE_KEY = 'matriz-do-conhecimento-class';
const MAX_SCORE = 2000;

export interface TurmaOption {
  id: GradeType;
  label: string;
  stage: 'Ensino Fundamental' | 'Ensino Médio';
  description: string;
}

export const TURMAS_LIST: TurmaOption[] = [
  { id: '6º ano', label: '6º ANO', stage: 'Ensino Fundamental', description: 'Frações, MMC, operações básicas, células e misturas' },
  { id: '7º ano', label: '7º ANO', stage: 'Ensino Fundamental', description: 'Números inteiros, calor, biodiversidade e equações' },
  { id: '8º ano', label: '8º ANO', stage: 'Ensino Fundamental', description: 'Potências, Teorema de Pitágoras, eletricidade e sistemas' },
  { id: '9º ano', label: '9º ANO', stage: 'Ensino Fundamental', description: 'Equações 2º grau, química atômica, Lavoisier e cinemática' },
  { id: '1º ano EM', label: '1º ANO EM', stage: 'Ensino Médio', description: 'Funções afins, Leis de Newton, biologia celular e PA' },
  { id: '2º ano EM', label: '2º ANO EM', stage: 'Ensino Médio', description: 'Trigonometria, matrizes, genética mendeliana e refração' },
  { id: '3º ano EM', label: '3º ANO EM', stage: 'Ensino Médio', description: 'Geometria analítica, evolução, química orgânica e indução' },
];

// ==================================================
// BANCO DE PERGUNTAS COMPLETO (6º ANO AO 3º EM)
// Integrado com 840 questões oficiais e controle rigoroso de não-repetição
// ==================================================

export const QUESTION_BANK: Question[] = ALL_OFFICIAL_QUESTIONS;


// ==================================================
// COMPONENTE PRINCIPAL
// ==================================================

export const MeuJogo: React.FC<BaseGameProps> = ({
  studentClass = 'warrior',
  difficultyMultiplier = 1.0,
  onExitToHub,
}) => {
  // SVG gradient ID generator for safe, unique clip and fill references
  const svgGradId = useId();

  // ------------------------------------------------
  // REFS & TIME TRACKING
  // ------------------------------------------------
  const startTimeRef = useRef<number>(Date.now());
  const timerIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ------------------------------------------------
  // ESTADOS DO JOGADOR & PROGRESSÃO POR XP (CICLO vs HISTÓRICO)
  // ------------------------------------------------
  // XP do ciclo atual (obtido desde o último Renascimento, usado para desbloquear dificuldades e Renascimento)
  const [cycleXp, setCycleXp] = useState<number>(0);
  // XP histórico acumulado (estatística perene do jogador que não se perde no renascimento)
  const [historicalXp, setHistoricalXp] = useState<number>(0);
  // Alias de conveniência para ciclo atual
  const xp = cycleXp;
  const setXp = setCycleXp;

  // Notificação visual curta de desbloqueio de dificuldade (sem interrupção do quiz)
  const [difficultyUnlockNotification, setDifficultyUnlockNotification] = useState<string | null>(null);
  const notifiedDifficultiesRef = useRef<Set<DifficultyType>>(new Set(['facil']));
  const difficultyNotificationTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [wrongAnswers, setWrongAnswers] = useState<number>(0);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);

  // Dificuldade e desbloqueios
  const [unlockedDifficulties, setUnlockedDifficulties] = useState<DifficultyType[]>(['facil']);
  const [activeDifficulty, setActiveDifficulty] = useState<DifficultyType>('facil');
  const [hasReachedExpert, setHasReachedExpert] = useState<boolean>(false);

  // Matéria e Ano Escolar selecionados
  const [activeSubject, setActiveSubject] = useState<SubjectType>('matematica');
  const [selectedGrade, setSelectedGrade] = useState<GradeType | 'ALEATÓRIO'>('ALEATÓRIO');

  // Gacha e Coleção de Árvores
  const [gachaLevel, setGachaLevel] = useState<number>(1);
  const [gachaPulls, setGachaPulls] = useState<number>(3); // 3 tentativas iniciais como recompensa de entrada
  const [unlockedTreeIds, setUnlockedTreeIds] = useState<string[]>(['tree-c1']);
  const [equippedTreeId, setEquippedTreeId] = useState<string>('tree-c1');
  const [isGachaModalOpen, setIsGachaModalOpen] = useState<boolean>(false);
  const [gachaResult, setGachaResult] = useState<{
    tree: TreeItem;
    isDuplicate: boolean;
  } | null>(null);
  const [isDrawingGacha, setIsDrawingGacha] = useState<boolean>(false);

  const [isEquippingTree, setIsEquippingTree] = useState<boolean>(false);

  // SISTEMA DE ACESSO: MODO ADMINISTRADOR ATIVO PARA ESTA SESSÃO (DOCENTE / ADMIN)
  const [isAdminMode, setIsAdminMode] = useState<boolean>(true);
  const [googleUser, setGoogleUser] = useState<GoogleUserProfile | null>(() => getCachedGoogleUser() || DEFAULT_ADMIN_USER);
  const [isGoogleLoginModalOpen, setIsGoogleLoginModalOpen] = useState<boolean>(false);
  const [googleAuthError, setGoogleAuthError] = useState<string | null>(null);
  const [googleAuthSuccessNotice, setGoogleAuthSuccessNotice] = useState<string | null>(null);
  const [adminIsAuthenticating, setAdminIsAuthenticating] = useState<boolean>(false);
  const [adminSessionRemainingMin, setAdminSessionRemainingMin] = useState<number>(() => getRemainingSessionMinutes());
  const [adminActiveTab, setAdminActiveTab] = useState<'sections' | 'tests' | 'info' | 'trees'>('trees');
  const [adminConfirmResetSectionKey, setAdminConfirmResetSectionKey] = useState<string | null>(null);
  const [adminConfirmResetAllSections, setAdminConfirmResetAllSections] = useState<boolean>(false);
  const [adminSectionFilterSubject, setAdminSectionFilterSubject] = useState<'todos' | SubjectType>('todos');
  const [adminSectionFilterGrade, setAdminSectionFilterGrade] = useState<'todos' | GradeType>('todos');
  const [serverAuditLogsList, setServerAuditLogsList] = useState<AuditLogEntry[]>([]);
  const [serverConfigData, setServerConfigData] = useState<AdminConfigResponse | null>(null);

  // Estados do Gerador de Árvores Místicas por Raridade (Painel ADM)
  const [generatorSelectedTreeId, setGeneratorSelectedTreeId] = useState<string>('tree-y1');
  const [generatorCustomName, setGeneratorCustomName] = useState<string>('');
  const [generatorRarity, setGeneratorRarity] = useState<TreeRarity>('YGGDRASIL');
  const [generatorCustomConcept, setGeneratorCustomConcept] = useState<string>('');
  const [generatorCustomPalette, setGeneratorCustomPalette] = useState<string>('');
  const [generatorPromptCopied, setGeneratorPromptCopied] = useState<'master' | 'compact' | null>(null);

  // Controle de Conclusão da Seção e Rodadas sem Repetição
  const [isSectionComplete, setIsSectionComplete] = useState<boolean>(false);
  const [confirmRestartSectionPrompt, setConfirmRestartSectionPrompt] = useState<boolean>(false);
  const [currentSectionRound, setCurrentSectionRound] = useState<number>(1);

  // Painel Administrativo (ADM) & Reinicialização
  const [isAdmModalOpen, setIsAdmModalOpen] = useState<boolean>(false);
  const [admConfirmReset, setAdmConfirmReset] = useState<boolean>(false);

  // Turma / Ano Escolar (Aba MINHA TURMA)
  const [currentTurma, setCurrentTurma] = useState<GradeType>('8º ano');
  const [isFirstRunTurmaModalOpen, setIsFirstRunTurmaModalOpen] = useState<boolean>(false);
  const [turmaPendingChange, setTurmaPendingChange] = useState<GradeType | null>(null);

  // Renascimento / Prestígio (Requisitos 44 a 57)
  const [rebirthCount, setRebirthCount] = useState<number>(0);
  const [isRebirthConfirmOpen, setIsRebirthConfirmOpen] = useState<boolean>(false);
  const [isRebirthing, setIsRebirthing] = useState<boolean>(false);
  const [rebirthAnimationTarget, setRebirthAnimationTarget] = useState<number>(1);

  const [activeNavTab, setActiveNavTab] = useState<'inicio' | 'quiz' | 'arvores' | 'turma' | 'renascimento'>('quiz');

  // Pergunta Ativa
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<{ text: string; originalIndex: number }[]>([]);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [recentAnswerXp, setRecentAnswerXp] = useState<number>(0);
  const [recentStreakBonus, setRecentStreakBonus] = useState<number>(0);
  const [questionIndex, setQuestionIndex] = useState<number>(1);
  const answeredQuestionIdsRef = useRef<Set<string>>(new Set());
  const questionQueueRef = useRef<Question[]>([]);
  const sessionSignaturesRef = useRef<Set<string>>(new Set());

  // Mensagem / Efeito de evolução
  const [evolutionNotice, setEvolutionNotice] = useState<string | null>(null);

  // ------------------------------------------------
  // LIMPEZA OBRIGATÓRIA DE ÁUDIO NO UNMOUNT
  // ------------------------------------------------
  useEffect(() => {
    return () => {
      GameAudio.cleanup();
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      if (difficultyNotificationTimerRef.current) clearTimeout(difficultyNotificationTimerRef.current);
    };
  }, []);

  // ------------------------------------------------
  // MONITORAMENTO CONTÍNUO DA SESSÃO ADMINISTRATIVA GOOGLE
  // ------------------------------------------------
  useEffect(() => {
    // Verificação inicial no backend
    verifyServerSession().then((res) => {
      if (res.authenticated && res.isAdmin && res.user) {
        setIsAdminMode(true);
        setGoogleUser(res.user);
        fetchServerAuditLogs().then(setServerAuditLogsList);
        fetchServerAdminConfig().then(setServerConfigData);
      } else {
        setIsAdminMode(false);
        setGoogleUser(null);
      }
    });

    const checkAdminSession = () => {
      const valid = isCurrentAdminSessionValid();
      setIsAdminMode((prev) => {
        if (prev && !valid) {
          setEvolutionNotice('⚠️ Sessão administrativa encerrada. Retornado ao Modo Aluno.');
          setTimeout(() => setEvolutionNotice(null), 4000);
          setIsAdmModalOpen(false);
          setGoogleUser(null);
        }
        return valid;
      });
      if (valid) {
        setAdminSessionRemainingMin(getRemainingSessionMinutes());
      }
    };

    const interval = setInterval(checkAdminSession, 10000);
    return () => clearInterval(interval);
  }, []);

  // ------------------------------------------------
  // TEMPO DE SESSÃO
  // ------------------------------------------------
  useEffect(() => {
    timerIntervalRef.current = setInterval(() => {
      setElapsedSeconds(Math.max(1, Math.round((Date.now() - startTimeRef.current) / 1000)));
    }, 1000);
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, []);

  // ------------------------------------------------
  // CARREGAR / SALVAR PROGRESSO NO LOCALSTORAGE
  // ------------------------------------------------
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        const loadedCycle = typeof data.cycleXp === 'number' ? data.cycleXp : (typeof data.xp === 'number' ? data.xp : 0);
        const loadedHist = typeof data.historicalXp === 'number' ? data.historicalXp : loadedCycle;
        setCycleXp(loadedCycle);
        setHistoricalXp(loadedHist);
        if (typeof data.rebirthCount === 'number') setRebirthCount(Math.min(MAX_REBIRTH, Math.max(0, data.rebirthCount)));

        // Derivação segura de dificuldades desbloqueadas baseadas no XP do ciclo carregado
        const derivedDiffs: DifficultyType[] = ['facil'];
        if (loadedCycle >= DIFFICULTY_CONFIG.medio.xpReq) derivedDiffs.push('medio');
        if (loadedCycle >= DIFFICULTY_CONFIG.dificil.xpReq) derivedDiffs.push('dificil');
        if (loadedCycle >= DIFFICULTY_CONFIG.expert.xpReq) derivedDiffs.push('expert');

        const finalUnlocked: DifficultyType[] = Array.isArray(data.unlockedDifficulties)
          ? (Array.from(new Set([...data.unlockedDifficulties, ...derivedDiffs])) as DifficultyType[])
          : derivedDiffs;

        setUnlockedDifficulties(finalUnlocked);
        finalUnlocked.forEach((d: DifficultyType) => notifiedDifficultiesRef.current.add(d));

        if (loadedCycle >= DIFFICULTY_CONFIG.expert.xpReq || data.hasReachedExpert) {
          setHasReachedExpert(true);
        }
        if (data.activeDifficulty) setActiveDifficulty(data.activeDifficulty);
        if (typeof data.gachaLevel === 'number') setGachaLevel(data.gachaLevel);
        if (typeof data.gachaPulls === 'number') setGachaPulls(data.gachaPulls);
        if (Array.isArray(data.unlockedTreeIds)) setUnlockedTreeIds(data.unlockedTreeIds);
        if (data.equippedTreeId) setEquippedTreeId(data.equippedTreeId);
      }

      // Verificação da Turma (Primeira Execução vs Salva)
      const savedTurma = localStorage.getItem(CLASS_STORAGE_KEY);
      if (savedTurma && TURMAS_LIST.some((t) => t.id === savedTurma)) {
        setCurrentTurma(savedTurma as GradeType);
      } else {
        // Primeira execução: exibir modal obrigatório de escolha de turma
        setIsFirstRunTurmaModalOpen(true);
      }
    } catch {
      // Falha silenciosa de leitura de localStorage
    }
  }, []);

  const handleSelectFirstRunTurma = (turma: GradeType) => {
    setCurrentTurma(turma);
    try {
      localStorage.setItem(CLASS_STORAGE_KEY, turma);
    } catch {
      // Ignora erro
    }
    GameAudio.playSuccess();
    setEvolutionNotice(`PERFEITO! Suas perguntas serão adaptadas para o ${turma.toUpperCase()}.`);
    setTimeout(() => setEvolutionNotice(null), 4000);
    setIsFirstRunTurmaModalOpen(false);
  };

  const handleRequestTurmaChange = (turma: GradeType) => {
    if (turma === currentTurma) return;
    setTurmaPendingChange(turma);
  };

  const handleConfirmTurmaChange = () => {
    if (!turmaPendingChange) return;
    const newTurma = turmaPendingChange;
    setCurrentTurma(newTurma);
    try {
      localStorage.setItem(CLASS_STORAGE_KEY, newTurma);
    } catch {
      // Ignora erro
    }
    GameAudio.playSuccess();
    setEvolutionNotice(`Turma atualizada! Suas perguntas foram adaptadas para o ${newTurma.toUpperCase()}.`);
    setTimeout(() => setEvolutionNotice(null), 4000);
    setTurmaPendingChange(null);
  };

  const saveProgression = useCallback(
    (updates: {
      xp?: number;
      cycleXp?: number;
      historicalXp?: number;
      rebirthCount?: number;
      unlockedDifficulties?: DifficultyType[];
      activeDifficulty?: DifficultyType;
      hasReachedExpert?: boolean;
      gachaLevel?: number;
      gachaPulls?: number;
      unlockedTreeIds?: string[];
      equippedTreeId?: string;
    }) => {
      try {
        const current = {
          cycleXp: updates.cycleXp ?? updates.xp ?? cycleXp,
          xp: updates.cycleXp ?? updates.xp ?? cycleXp,
          historicalXp: updates.historicalXp ?? historicalXp,
          rebirthCount: updates.rebirthCount ?? rebirthCount,
          unlockedDifficulties: updates.unlockedDifficulties ?? unlockedDifficulties,
          activeDifficulty: updates.activeDifficulty ?? activeDifficulty,
          hasReachedExpert: updates.hasReachedExpert ?? hasReachedExpert,
          gachaLevel: updates.gachaLevel ?? gachaLevel,
          gachaPulls: updates.gachaPulls ?? gachaPulls,
          unlockedTreeIds: updates.unlockedTreeIds ?? unlockedTreeIds,
          equippedTreeId: updates.equippedTreeId ?? equippedTreeId,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
      } catch {
        // Falha silenciosa de escrita de localStorage
      }
    },
    [cycleXp, historicalXp, rebirthCount, unlockedDifficulties, activeDifficulty, hasReachedExpert, gachaLevel, gachaPulls, unlockedTreeIds, equippedTreeId]
  );

  // ------------------------------------------------
  // CÁLCULO E CONTROLE DO SISTEMA DE RENASCIMENTO (Requisitos 44 a 57)
  // ------------------------------------------------
  const nextRebirthNumber = Math.min(MAX_REBIRTH, rebirthCount + 1);
  const nextRebirthXp = REBIRTH_XP_REQUIREMENTS[nextRebirthNumber] || 275000;
  const canRebirth = rebirthCount < MAX_REBIRTH && xp >= nextRebirthXp;

  const handleExecuteRebirth = () => {
    if (!canRebirth || isRebirthing) return;

    const newRebirthCount = Math.min(MAX_REBIRTH, rebirthCount + 1);
    const nextXpMult = getXpMultiplier(newRebirthCount);
    const nextBytesMult = getBytesMultiplier(newRebirthCount);

    // Fechar modal de confirmação e bloquear controles com animação
    setIsRebirthConfirmOpen(false);
    setRebirthAnimationTarget(newRebirthCount);
    setIsRebirthing(true);

    // Efeito sonoro inicial de transição
    GameAudio.playSuccess();

    // Etapa de conclusão da animação tecnológica (Requisito 54):
    setTimeout(() => {
      // Resetar ciclo atual, dificuldades e notificações (Requisito 7)
      setRebirthCount(newRebirthCount);
      setCycleXp(0);
      setScore(0);
      setStreak(0);
      setUnlockedDifficulties(['facil']);
      setActiveDifficulty('facil');
      setHasReachedExpert(false);
      notifiedDifficultiesRef.current = new Set(['facil']);

      // Salvar na persistência com preservação do XP histórico
      saveProgression({
        cycleXp: 0,
        xp: 0,
        historicalXp: historicalXp,
        rebirthCount: newRebirthCount,
        unlockedDifficulties: ['facil'],
        activeDifficulty: 'facil',
        hasReachedExpert: false,
      });

      // Regra 54: Confetti APENAS no momento da conclusão do renascimento!
      confetti({
        particleCount: 180,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#00FF88', '#38BDF8', '#F59E0B', '#A855F7', '#EC4899'],
      });

      GameAudio.playSuccess();
      setEvolutionNotice(`⚡ RENASCIMENTO ${newRebirthCount} CONCLUÍDO! Bônus Permanente: ${nextXpMult.toFixed(2)}x XP e ${nextBytesMult.toFixed(2)}x Bytes.`);
      setTimeout(() => setEvolutionNotice(null), 5000);
    }, 2000);

    // Liberar controles após a animação e atualizar pergunta
    setTimeout(() => {
      setIsRebirthing(false);
      setActiveNavTab('renascimento');
      pickNextQuestion();
    }, 2800);
  };

  // ------------------------------------------------
  // SISTEMA DE PROGRESSÃO DE DIFICULDADE & GACHA LEVEL (Requisitos 1, 2, 3, 4)
  // ------------------------------------------------
  const checkProgressionUnlocks = useCallback(
    (newCycleXp: number, newHistoricalXp?: number) => {
      // 1. Limites cumulativos de desbloqueio pelo XP do ciclo atual (Requisito 2)
      const newUnlockedDiffs: DifficultyType[] = ['facil'];
      if (newCycleXp >= DIFFICULTY_CONFIG.medio.xpReq) newUnlockedDiffs.push('medio');
      if (newCycleXp >= DIFFICULTY_CONFIG.dificil.xpReq) newUnlockedDiffs.push('dificil');
      if (newCycleXp >= DIFFICULTY_CONFIG.expert.xpReq) newUnlockedDiffs.push('expert');

      // 2. Notificação temporária Matrix sem interrupção de partida (Requisito 3)
      const newlyUnlocked = newUnlockedDiffs.filter((d) => !notifiedDifficultiesRef.current.has(d));

      if (newlyUnlocked.length > 0) {
        newlyUnlocked.forEach((d) => notifiedDifficultiesRef.current.add(d));

        let msg = '';
        if (newlyUnlocked.length === 1) {
          msg = `NOVA DIFICULDADE DESBLOQUEADA: ${DIFFICULTY_CONFIG[newlyUnlocked[0]].label}!`;
        } else {
          const names = newlyUnlocked.map((d) => DIFFICULTY_CONFIG[d].label).join(', ');
          msg = `NOVAS DIFICULDADES DESBLOQUEADAS: ${names}!`;
        }

        setDifficultyUnlockNotification(msg);
        if (difficultyNotificationTimerRef.current) {
          clearTimeout(difficultyNotificationTimerRef.current);
        }
        difficultyNotificationTimerRef.current = setTimeout(() => {
          setDifficultyUnlockNotification(null);
        }, 4000);
      }

      // 3. Regra Expert: ao atingir 6.000 XP, habilita seleção de dificuldades anteriores (Requisito 2 e 4)
      let reachedExpertNow = false;
      if (newCycleXp >= DIFFICULTY_CONFIG.expert.xpReq && !hasReachedExpert) {
        reachedExpertNow = true;
        setHasReachedExpert(true);
      }

      setUnlockedDifficulties(newUnlockedDiffs);

      // Requisito 4: Desbloquear uma dificuldade NÃO troca automaticamente a dificuldade da pergunta em andamento.
      // Mantém activeDifficulty inalterada até que o jogador escolha mudar no seletor.

      // 4. Atualiza Gacha Level
      let newGachaLv = 1;
      if (newCycleXp >= GACHA_LEVEL_CONFIG[5].xpReq && (hasReachedExpert || reachedExpertNow)) newGachaLv = 5;
      else if (newCycleXp >= GACHA_LEVEL_CONFIG[4].xpReq) newGachaLv = 4;
      else if (newCycleXp >= GACHA_LEVEL_CONFIG[3].xpReq) newGachaLv = 3;
      else if (newCycleXp >= GACHA_LEVEL_CONFIG[2].xpReq) newGachaLv = 2;

      if (newGachaLv !== gachaLevel) {
        setGachaLevel(newGachaLv);
        setGachaPulls((prev) => prev + 2);
      }

      saveProgression({
        cycleXp: newCycleXp,
        xp: newCycleXp,
        historicalXp: newHistoricalXp ?? historicalXp,
        unlockedDifficulties: newUnlockedDiffs,
        activeDifficulty: activeDifficulty,
        hasReachedExpert: hasReachedExpert || reachedExpertNow,
        gachaLevel: newGachaLv,
      });
    },
    [activeDifficulty, hasReachedExpert, gachaLevel, historicalXp, saveProgression]
  );

  // ------------------------------------------------
  // CONTROLE RIGOROSO DE QUESTÕES SEM REPETIÇÃO NA MESMA SEÇÃO
  // ------------------------------------------------
  const replenishQueue = useCallback(() => {
    // 1. Busca exclusivamente as questões INÉDITAS da seção (Matéria + Turma + Dificuldade)
    const unused = getUnusedQuestions(activeSubject, currentTurma, activeDifficulty);

    // 2. Embaralha com algoritmo Fisher-Yates para ordem aleatória sem repetição
    const shuffled = [...unused];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    questionQueueRef.current = shuffled;
  }, [activeSubject, currentTurma, activeDifficulty]);

  const pickNextQuestion = useCallback(() => {
    if (questionQueueRef.current.length === 0) {
      replenishQueue();
    }

    const progress = getSectionProgress(activeSubject, currentTurma, activeDifficulty);
    setCurrentSectionRound(progress.round);

    // SISTEMA CONTÍNUO DE PERGUNTAS INFINITAS:
    // 1. Seleciona questão fixa inédita do banco se disponível.
    // 2. Quando o banco fixo esgotar, gera dinamicamente questão procedural verificada.
    // 3. Valida a questão antes de exibir e previne repetições de assinaturas.
    const result = getNextInfiniteQuestion(
      activeSubject,
      currentTurma,
      activeDifficulty,
      questionQueueRef.current,
      sessionSignaturesRef.current
    );

    const nextQ = result.question;

    // Registra a questão no exato momento em que é apresentada ao jogador
    markQuestionAsUsed(activeSubject, currentTurma, activeDifficulty, nextQ.id);

    setIsSectionComplete(false);

    // Embaralha alternativas mantendo mapeamento da resposta correta
    const mappedOptions = nextQ.options.map((text, idx) => ({ text, originalIndex: idx }));
    for (let i = mappedOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [mappedOptions[i], mappedOptions[j]] = [mappedOptions[j], mappedOptions[i]];
    }

    setCurrentQuestion(nextQ);
    setShuffledOptions(mappedOptions);
    setSelectedOptionIndex(null);
    setHasAnswered(false);
    setIsAnswerCorrect(null);
    setRecentAnswerXp(0);
    setRecentStreakBonus(0);
  }, [activeSubject, activeDifficulty, currentTurma, replenishQueue]);

  // Ao trocar Matéria, Turma ou Dificuldade:
  // A fila é recriada com as inéditas da nova seção SEM apagar o histórico das outras seções.
  useEffect(() => {
    questionQueueRef.current = [];
    pickNextQuestion();
  }, [activeSubject, currentTurma, activeDifficulty, pickNextQuestion]);

  // Reiniciar deliberadamente a rodada da seção atual (Ação deliberada do aluno ou ADM)
  const handleRestartCurrentSection = () => {
    restartSectionRound(activeSubject, currentTurma, activeDifficulty, true);
    setConfirmRestartSectionPrompt(false);
    questionQueueRef.current = [];
    pickNextQuestion();
    GameAudio.playSuccess();
    setEvolutionNotice(`🔄 Rodada da seção reiniciada! Nova rodada #${currentSectionRound + 1} iniciada.`);
    setTimeout(() => setEvolutionNotice(null), 3500);
  };

  // ------------------------------------------------
  // PROCESSAMENTO DA RESPOSTA
  // ------------------------------------------------
  const handleSelectAnswer = (optionPosition: number) => {
    if (hasAnswered || !currentQuestion) return;

    const chosen = shuffledOptions[optionPosition];
    const isCorrect = chosen.originalIndex === currentQuestion.correctAnswer;

    setSelectedOptionIndex(optionPosition);
    setHasAnswered(true);
    setIsAnswerCorrect(isCorrect);
    answeredQuestionIdsRef.current.add(currentQuestion.id);

    if (isCorrect) {
      GameAudio.playSuccess();
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      if (nextStreak > maxStreak) setMaxStreak(nextStreak);
      setCorrectAnswers((prev) => prev + 1);

      // Cálculo de XP base + bônus de sequência
      let xpEarned = DIFFICULTY_CONFIG[currentQuestion.difficulty].xpPerCorrect;
      let streakBonus = 0;
      if (nextStreak === 3) streakBonus = 10;
      else if (nextStreak === 5) streakBonus = 25;
      else if (nextStreak >= 10 && nextStreak % 5 === 0) streakBonus = 50;

      // REQUISITO 47: MULTIPLICADOR DE XP DE RENASCIMENTO
      // O multiplicador é aplicado ao XP obtido da pergunta e bônus de sequência
      const rebirthXpMult = getXpMultiplier(rebirthCount);
      const baseXpTotal = xpEarned + streakBonus;
      const totalXpGain = Math.round(baseXpTotal * rebirthXpMult);

      setRecentAnswerXp(Math.round(xpEarned * rebirthXpMult));
      setRecentStreakBonus(Math.round(streakBonus * rebirthXpMult));

      // REQUISITO 48: MULTIPLICADOR DE MOEDAS / BYTES DE RENASCIMENTO
      // Esse multiplicador deve ser aplicado ao valor de bytes/moedas gerado pelo jogo sem aplicar o multiplicador duas vezes
      const rebirthBytesMult = getBytesMultiplier(rebirthCount);
      const baseBytes = baseXpTotal * 1.5 * difficultyMultiplier;
      const scoreGain = Math.round(baseBytes * rebirthBytesMult);
      setScore((prev) => prev + scoreGain);

      // Adiciona XP no ciclo e no histórico (Requisito 1)
      const updatedCycleXp = cycleXp + totalXpGain;
      const updatedHistXp = historicalXp + totalXpGain;
      setCycleXp(updatedCycleXp);
      setHistoricalXp(updatedHistXp);
      checkProgressionUnlocks(updatedCycleXp, updatedHistXp);

      // A cada 5 acertos, conceder 1 tentativa de Gacha
      if ((correctAnswers + 1) % 5 === 0) {
        setGachaPulls((prev) => prev + 1);
      }
    } else {
      GameAudio.playError();
      setStreak(0);
      setWrongAnswers((prev) => prev + 1);
      setRecentAnswerXp(0);
      setRecentStreakBonus(0);
    }
  };

  const handleNextQuestion = () => {
    setQuestionIndex((prev) => prev + 1);
    pickNextQuestion();
  };

  // ------------------------------------------------
  // SISTEMA DO GACHA DE ÁRVORES
  // ------------------------------------------------
  const handleDrawGacha = () => {
    if (gachaPulls <= 0 || isDrawingGacha) return;

    setIsDrawingGacha(true);
    setGachaPulls((prev) => prev - 1);

    setTimeout(() => {
      const config = GACHA_LEVEL_CONFIG[gachaLevel] || GACHA_LEVEL_CONFIG[1];
      const roll = Math.random();
      let selectedRarity: TreeRarity = 'COMUM';

      const cumYgg = config.rates.YGGDRASIL;
      const cumLen = cumYgg + config.rates.LENDÁRIO;
      const cumEpi = cumLen + config.rates.ÉPICO;
      const cumRar = cumEpi + config.rates.RARO;

      if (roll < cumYgg) selectedRarity = 'YGGDRASIL';
      else if (roll < cumLen) selectedRarity = 'LENDÁRIO';
      else if (roll < cumEpi) selectedRarity = 'ÉPICO';
      else if (roll < cumRar) selectedRarity = 'RARO';
      else selectedRarity = 'COMUM';

      const poolOfRarity = TREE_DATABASE.filter((t) => t.rarity === selectedRarity);
      const chosenTree = poolOfRarity[Math.floor(Math.random() * poolOfRarity.length)];

      const isDuplicate = unlockedTreeIds.includes(chosenTree.id);
      let updatedIds = unlockedTreeIds;

      if (!isDuplicate) {
        updatedIds = [...unlockedTreeIds, chosenTree.id];
        setUnlockedTreeIds(updatedIds);
      } else {
        // Recompensa cosmética / reciclagem de dados por duplicata
        setXp((prev) => prev + 50);
      }

      setGachaResult({ tree: chosenTree, isDuplicate });
      setIsDrawingGacha(false);

      if (selectedRarity === 'LENDÁRIO' || selectedRarity === 'YGGDRASIL') {
        confetti({
          particleCount: 120,
          spread: 90,
          origin: { y: 0.5 },
          colors: ['#00FF88', '#087EA4', '#F59E0B', '#FFFFFF'],
        });
      }

      saveProgression({
        unlockedTreeIds: updatedIds,
        gachaPulls: gachaPulls - 1,
      });
    }, 900);
  };

  const handleEquipTree = (treeId: string) => {
    setEquippedTreeId(treeId);
    saveProgression({ equippedTreeId: treeId });
    GameAudio.playSuccess();
    const tree = TREE_DATABASE.find((t) => t.id === treeId);
    if (tree) {
      setEvolutionNotice(`🌿 ${tree.name} equipada com sucesso!`);
      setTimeout(() => setEvolutionNotice(null), 3000);
    }
  };

  const handleGachaEquipNow = (treeToEquip: TreeItem) => {
    if (isEquippingTree || isDrawingGacha) return;
    setIsEquippingTree(true);

    try {
      const validTreeId = treeToEquip.id;
      // Valida que pertence à coleção e garante persistência correta
      const ensuredUnlocked = unlockedTreeIds.includes(validTreeId)
        ? unlockedTreeIds
        : [...unlockedTreeIds, validTreeId];

      if (!unlockedTreeIds.includes(validTreeId)) {
        setUnlockedTreeIds(ensuredUnlocked);
      }

      // Atualiza o estado da árvore equipada
      setEquippedTreeId(validTreeId);

      // Salva imediatamente o equipamento na persistência
      saveProgression({
        equippedTreeId: validTreeId,
        unlockedTreeIds: ensuredUnlocked,
      });

      // Feedback sonoro e notificação visual discreta
      GameAudio.playSuccess();
      setEvolutionNotice(`🌿 ${treeToEquip.name} equipada com sucesso!`);
      setTimeout(() => setEvolutionNotice(null), 3500);

      // Fecha o resultado e o modal do Gacha na MESMA ação sem exigir segundo clique
      setGachaResult(null);
      setIsGachaModalOpen(false);
    } finally {
      setTimeout(() => {
        setIsEquippingTree(false);
      }, 300);
    }
  };

  // ------------------------------------------------
  // CONTROLE & REINICIALIZAÇÃO DO ADMINISTRADOR (ADM)
  // ------------------------------------------------
  const handleAdminResetGame = (fullFactoryReset: boolean = true) => {
    if (fullFactoryReset) {
      try {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(CLASS_STORAGE_KEY);
      } catch {
        // Ignora erro de acesso a storage
      }
      setCurrentTurma('8º ano');
      setXp(0);
      setScore(0);
      setStreak(0);
      setMaxStreak(0);
      setCorrectAnswers(0);
      setWrongAnswers(0);
      setUnlockedDifficulties(['facil']);
      setActiveDifficulty('facil');
      setHasReachedExpert(false);
      setSelectedGrade('ALEATÓRIO');
      setGachaLevel(1);
      setGachaPulls(3);
      setUnlockedTreeIds(['tree-c1']);
      setEquippedTreeId('tree-c1');
      setRebirthCount(0);
      setQuestionIndex(1);
      answeredQuestionIdsRef.current.clear();
      startTimeRef.current = Date.now();
      setElapsedSeconds(0);
      GameAudio.playSuccess();
      setEvolutionNotice('⚠️ JOGO REINICIADO DO ZERO PELO ADMINISTRADOR!');
      setTimeout(() => setEvolutionNotice(null), 4000);
      setIsAdmModalOpen(false);
      setAdmConfirmReset(false);
      pickNextQuestion();
    } else {
      setScore(0);
      setStreak(0);
      setCorrectAnswers(0);
      setWrongAnswers(0);
      setQuestionIndex(1);
      answeredQuestionIdsRef.current.clear();
      startTimeRef.current = Date.now();
      setElapsedSeconds(0);
      GameAudio.playSuccess();
      setEvolutionNotice('🔄 SESSÃO ATUAL REINICIADA!');
      setTimeout(() => setEvolutionNotice(null), 3000);
      setIsAdmModalOpen(false);
      pickNextQuestion();
    }
  };

  const handleAdminAddXp = (amount: number) => {
    const newXp = xp + amount;
    setXp(newXp);
    checkProgressionUnlocks(newXp);
    saveProgression({ xp: newXp });
    GameAudio.playSuccess();
    setEvolutionNotice(`⚡ ADM: +${amount.toLocaleString('pt-BR')} XP CONCEDIDOS!`);
    setTimeout(() => setEvolutionNotice(null), 3000);
  };

  const handleAdminSetXpForRebirth = () => {
    if (rebirthCount >= MAX_REBIRTH) return;
    const req = REBIRTH_XP_REQUIREMENTS[rebirthCount + 1] || 5000;
    setXp(req);
    checkProgressionUnlocks(req);
    saveProgression({ xp: req });
    GameAudio.playSuccess();
    setEvolutionNotice(`⚡ ADM: XP DEFINIDO PARA ${req.toLocaleString('pt-BR')} (RENASCIMENTO ${rebirthCount + 1} DISPONÍVEL!)`);
    setTimeout(() => setEvolutionNotice(null), 3500);
  };

  const handleAdminAdvanceRebirth = () => {
    if (rebirthCount >= MAX_REBIRTH) return;
    const nextR = rebirthCount + 1;
    setRebirthCount(nextR);
    saveProgression({ rebirthCount: nextR });
    GameAudio.playSuccess();
    setEvolutionNotice(`⚡ ADM: RENASCIMENTO AVANÇADO PARA ${nextR}!`);
    setTimeout(() => setEvolutionNotice(null), 3000);
  };

  const handleAdminAddGachaPulls = (amount: number) => {
    const updated = gachaPulls + amount;
    setGachaPulls(updated);
    saveProgression({ gachaPulls: updated });
    GameAudio.playSuccess();
    setEvolutionNotice(`⚡ ADM: +${amount} TENTATIVAS DE GACHA ADICIONADAS!`);
    setTimeout(() => setEvolutionNotice(null), 3000);
  };

  const handleAdminUnlockAll = () => {
    const maxProgressionXp = 12000;
    const allDifficulties: DifficultyType[] = ['facil', 'medio', 'dificil', 'expert'];
    const allTreeIds = TREE_DATABASE.map((t) => t.id);
    const bonusPulls = 99;

    setXp(maxProgressionXp);
    setUnlockedDifficulties(allDifficulties);
    setActiveDifficulty('expert');
    setHasReachedExpert(true);
    setGachaLevel(5);
    setGachaPulls(bonusPulls);
    setUnlockedTreeIds(allTreeIds);
    setEquippedTreeId('tree-y1');
    setRebirthCount(MAX_REBIRTH);

    saveProgression({
      xp: maxProgressionXp,
      rebirthCount: MAX_REBIRTH,
      unlockedDifficulties: allDifficulties,
      activeDifficulty: 'expert',
      hasReachedExpert: true,
      gachaLevel: 5,
      gachaPulls: bonusPulls,
      unlockedTreeIds: allTreeIds,
      equippedTreeId: 'tree-y1',
    });

    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.5 },
      colors: ['#00FF88', '#38BDF8', '#F59E0B', '#A855F7'],
    });

    GameAudio.playSuccess();
    setEvolutionNotice('🔓 MODO ADM: TUDO LIBERADO! (Nível Máximo, Expert, 100% Árvores e 99 Giros)');
    setTimeout(() => setEvolutionNotice(null), 5000);
    setIsAdmModalOpen(false);
  };

  // ------------------------------------------------
  // GESTÃO DE ACESSO ADMINISTRATIVO POR GOOGLE & AUDITORIA NO SERVIDOR
  // ------------------------------------------------
  const handleGoogleSignIn = async (options?: { credential?: string; emailHint?: string; nameHint?: string }) => {
    setAdminIsAuthenticating(true);
    setGoogleAuthError(null);
    setGoogleAuthSuccessNotice(null);

    const result = await authenticateWithGoogle({
      credential: options?.credential,
      emailHint: options?.emailHint,
      nameHint: options?.nameHint,
    });

    setAdminIsAuthenticating(false);

    if (result.success && result.user) {
      setGoogleUser(result.user);
      if (result.isAdmin) {
        setIsAdminMode(true);
        setIsGoogleLoginModalOpen(false);
        setIsAdmModalOpen(true);
        GameAudio.playSuccess();
        setEvolutionNotice(`🛡️ Administrador autenticado: ${result.user.email}`);
        setTimeout(() => setEvolutionNotice(null), 4000);

        fetchServerAuditLogs().then(setServerAuditLogsList);
        fetchServerAdminConfig().then(setServerConfigData);
      } else {
        // Aluno comum conectado
        setIsAdminMode(false);
        GameAudio.playSuccess();
        setGoogleAuthSuccessNotice(`Sessão Google iniciada como Aluno (${result.user.email}). Recursos administrativos permanecem ocultos.`);
      }
    } else {
      GameAudio.playError();
      setGoogleAuthError(result.errorMessage || 'Falha ao autenticar com a conta Google.');
    }
  };

  const handleAdminLogout = () => {
    logoutAdminSession();
    setIsAdminMode(false);
    setGoogleUser(null);
    setIsAdmModalOpen(false);
    setAdmConfirmReset(false);
    setAdminConfirmResetAllSections(false);
    setAdminConfirmResetSectionKey(null);
    GameAudio.playSuccess();
    setEvolutionNotice('🔒 Sessão Google encerrada. Retornado ao Modo Aluno.');
    setTimeout(() => setEvolutionNotice(null), 3500);
  };

  const handleAdminResetSpecificSection = (
    subject: SubjectType,
    grade: GradeType,
    difficulty: DifficultyType
  ) => {
    restartSectionRound(subject, grade, difficulty, true);
    serverResetSection(subject, grade, difficulty).then(() => {
      fetchServerAuditLogs().then(setServerAuditLogsList);
    });
    setAdminConfirmResetSectionKey(null);

    if (subject === activeSubject && grade === currentTurma && difficulty === activeDifficulty) {
      questionQueueRef.current = [];
      pickNextQuestion();
    }

    GameAudio.playSuccess();
    setEvolutionNotice(`⚡ SEÇÃO ${subject.toUpperCase()} • ${grade} • ${difficulty.toUpperCase()} REINICIADA!`);
    setTimeout(() => setEvolutionNotice(null), 3000);
  };

  const handleAdminResetAllSectionsAction = () => {
    restartAllSectionsRounds(true);
    serverResetAllSections().then(() => {
      fetchServerAuditLogs().then(setServerAuditLogsList);
    });
    setAdminConfirmResetAllSections(false);
    questionQueueRef.current = [];
    pickNextQuestion();

    GameAudio.playSuccess();
    setEvolutionNotice('⚡ TODAS AS 56 SEÇÕES DO BANCO FORAM REINICIADAS NO SERVIDOR!');
    setTimeout(() => setEvolutionNotice(null), 4000);
  };

  // ------------------------------------------------
  // 19. PAYLOAD DE SAÍDA OBRIGATÓRIO
  // ------------------------------------------------
  const handleExit = useCallback(() => {
    const totalAnswers = correctAnswers + wrongAnswers;
    const accuracy = totalAnswers > 0 ? Math.round((correctAnswers / totalAnswers) * 100) : 0;
    const elapsed = Math.max(1, Math.round((Date.now() - startTimeRef.current) / 1000));

    const bytesBase = Math.round(score * 0.15);
    const classBonus = studentClass === 'warrior' && score > MAX_SCORE * 0.5 ? 1.2 : 1.0;

    // Nível RPG atingido (1 a 30)
    const levelReached = Math.min(30, Math.floor(xp / 400) + 1);

    const payload: GameExitPayload = {
      bytesEarned: Math.round(bytesBase * classBonus * difficultyMultiplier),
      levelTokensEarned: accuracy >= 80 ? 1 : 0,
      sessionStats: {
        score,
        accuracyPercentage: accuracy,
        timeSpentSeconds: elapsed,
        correctAnswers,
        wrongAnswers,
        levelReached,
      },
    };

    onExitToHub(payload);
  }, [
    correctAnswers,
    wrongAnswers,
    score,
    studentClass,
    difficultyMultiplier,
    xp,
    onExitToHub,
  ]);

  // Informações de progressão de dificuldade por XP no ciclo atual (Requisito 6)
  const diffProgress = getNextDifficultyProgress(cycleXp);

  // Cálculos visuais
  const currentLevel = Math.min(30, Math.floor(cycleXp / 400) + 1);
  const nextLevelXp = currentLevel * 400;
  const currentLevelBaseXp = (currentLevel - 1) * 400;
  const xpInCurrentLevel = cycleXp - currentLevelBaseXp;
  const levelProgressPct = Math.min(100, Math.max(0, Math.round((xpInCurrentLevel / 400) * 100)));

  const equippedTree = TREE_DATABASE.find((t) => t.id === equippedTreeId) || TREE_DATABASE[0];

  const classTitleMap: Record<StudentRpgClass, { label: string; perk: string; icon: React.ReactNode }> = {
    warrior: {
      label: 'Guerreiro da Matriz',
      perk: '+20% Bytes em Score Alto',
      icon: <Shield className="w-4 h-4 text-emerald-400" />,
    },
    archer: {
      label: 'Arqueiro Sináptico',
      perk: 'Foco e Análise Cirúrgica',
      icon: <Target className="w-4 h-4 text-sky-400" />,
    },
    mage: {
      label: 'Mago dos Dados',
      perk: 'Transmutação de Fórmulas',
      icon: <Zap className="w-4 h-4 text-cyan-300" />,
    },
  };

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const s = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Contadores por raridade
  const countRarity = (r: TreeRarity) => {
    const total = TREE_DATABASE.filter((t) => t.rarity === r).length;
    const unlocked = TREE_DATABASE.filter((t) => t.rarity === r && unlockedTreeIds.includes(t.id)).length;
    return { unlocked, total };
  };

  return (
    <div className="min-h-screen bg-[#050708] text-[#E6F1F5] flex flex-col font-sans select-none relative overflow-hidden">
      {/* Linhas sutis de grade Matrix de fundo */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 168, 120, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(8, 126, 164, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
        }}
      />

      {/* NOTIFICAÇÃO DE EVOLUÇÃO DE DIFICULDADE */}
      <AnimatePresence>
        {evolutionNotice && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-18 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg border border-[#00FF88]/40 bg-[#080F12]/95 backdrop-blur-md shadow-[0_0_30px_rgba(0,255,136,0.3)] flex items-center gap-3 text-sm font-display text-[#00FF88] max-w-xl text-center pointer-events-none"
          >
            <Sparkles className="w-5 h-5 shrink-0 text-[#00FF88] animate-pulse" />
            <span>{evolutionNotice}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NOTIFICAÇÃO MATRIX DE DESBLOQUEIO DE DIFICULDADE (REQUISITO 3: NÃO INTERROMPE O QUIZ) */}
      <AnimatePresence>
        {difficultyUnlockNotification && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 pointer-events-none max-w-sm px-4 py-3 rounded-lg border border-[#00FF88]/70 bg-[#080F12]/95 backdrop-blur-md shadow-[0_0_25px_rgba(0,255,136,0.35)] flex items-center gap-3 text-xs font-mono text-[#00FF88]"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#00FF88] animate-ping shrink-0" />
            <div>
              <div className="text-[9px] text-slate-400 uppercase tracking-widest font-mono">MATRIZ • EVOLUÇÃO</div>
              <div className="font-bold text-white tracking-wide">{difficultyUnlockNotification}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BANNER DO MODO ADMINISTRADOR (VISÍVEL APENAS QUANDO AUTENTICADO) */}
      {isAdminMode && (
        <div className="relative z-30 bg-amber-950/90 border-b border-amber-500/60 text-amber-300 px-4 py-2 flex flex-wrap items-center justify-between text-xs font-mono shadow-[0_0_20px_rgba(245,158,11,0.25)]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping inline-block" />
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span className="font-bold tracking-wider uppercase text-white">MODO ADMINISTRADOR ATIVO</span>
            <span className="text-amber-300/80 hidden md:inline">| Sessão expira em ~{adminSessionRemainingMin} min</span>
          </div>

          <div className="flex items-center gap-2 mt-1 sm:mt-0">
            <button
              onClick={() => {
                setAdminActiveTab('sections');
                setIsAdmModalOpen(true);
              }}
              className="px-3 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/50 cursor-pointer font-bold transition-all text-xs flex items-center gap-1.5"
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>Painel ADM</span>
            </button>
            <button
              onClick={handleAdminLogout}
              className="px-3 py-1 rounded bg-rose-950/80 hover:bg-rose-900 text-rose-200 border border-rose-600/50 cursor-pointer flex items-center gap-1.5 font-bold transition-all text-xs"
            >
              <LogOut className="w-3.5 h-3.5 text-rose-300" />
              <span>Sair do Modo ADM</span>
            </button>
          </div>
        </div>
      )}

      {/* ==================================================
          5. BARRA SUPERIOR
      ================================================== */}
      <header className="relative z-20 flex items-center justify-between px-4 sm:px-6 py-3 bg-[#080F12]/90 border-b border-[#063B3B]/60 backdrop-blur-md">
        {/* Esquerda: Voltar ao Hub & Nome do Jogo */}
        <div className="flex items-center gap-3 sm:gap-5">
          <button
            onClick={handleExit}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#11181C] hover:bg-[#263238] border border-[#00A878]/30 hover:border-[#00FF88] text-xs font-mono text-[#00FF88] transition-all cursor-pointer shadow-sm active:scale-95"
            title="Voltar ao Hub de Jogos"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-semibold tracking-wider">HUB</span>
          </button>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-sm sm:text-base font-bold tracking-widest text-white uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00FF88] inline-block shadow-[0_0_8px_#00FF88]" />
                MATRIZ DO CONHECIMENTO
              </span>
              <button
                onClick={() => setActiveNavTab('turma')}
                className="px-2 py-0.5 rounded bg-sky-950/70 hover:bg-sky-900/80 border border-sky-500/40 hover:border-sky-400 text-[11px] font-mono text-sky-300 font-bold flex items-center gap-1 cursor-pointer transition-all active:scale-95"
                title="Aba Minha Turma: clique para alterar o ano escolar"
              >
                <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
                <span>{currentTurma.toUpperCase()}</span>
                <span className="text-slate-500">·</span>
                <span className="text-white">{activeSubject.toUpperCase()}</span>
              </button>
              <button
                onClick={() => setActiveNavTab('renascimento')}
                className="px-2 py-0.5 rounded bg-emerald-950/70 hover:bg-emerald-900/80 border border-[#00FF88]/40 hover:border-[#00FF88] text-[11px] font-mono text-[#00FF88] font-bold flex items-center gap-1 cursor-pointer transition-all active:scale-95"
                title={`Renascimento: ${rebirthCount}/10 (+${Math.round((getXpMultiplier(rebirthCount) - 1) * 100)}% XP • ${getBytesMultiplier(rebirthCount)}x Bytes)`}
              >
                <span>◈</span>
                <span>R{rebirthCount}</span>
                <span className="text-slate-400 font-normal hidden sm:inline">({getXpMultiplier(rebirthCount)}x)</span>
              </button>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <span>DIFICULDADE: <strong className="text-white">{DIFFICULTY_CONFIG[activeDifficulty].label}</strong></span>
              <span>·</span>
              <span>XP DO CICLO: <strong className="text-[#00FF88]">{cycleXp.toLocaleString('pt-BR')}</strong>{diffProgress.allUnlocked ? ' (MÁX)' : ` / ${diffProgress.targetXp.toLocaleString('pt-BR')}`}</span>
              <span>·</span>
              <span className="hidden md:inline">HISTÓRICO: <strong className="text-sky-300">{historicalXp.toLocaleString('pt-BR')} XP</strong></span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-400" />
                {formatTimer(elapsedSeconds)}
              </span>
            </div>
          </div>
        </div>

        {/* Direita: Classe do Jogador & Botão Gacha & Botão ADM */}
        <div className="flex items-center gap-2.5">
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded bg-[#11181C] border border-[#062A43] text-xs font-mono">
            {classTitleMap[studentClass].icon}
            <span className="text-slate-300">{classTitleMap[studentClass].label}</span>
          </div>

          <button
            onClick={() => setIsGachaModalOpen(true)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-gradient-to-r from-[#063B3B] to-[#062A43] hover:from-[#00A878]/30 hover:to-[#087EA4]/40 border border-[#00FF88]/40 hover:border-[#00FF88] text-xs font-display font-semibold text-[#00FF88] transition-all cursor-pointer shadow-[0_0_12px_rgba(0,255,136,0.15)] active:scale-95"
          >
            <TreeDeciduous className="w-4 h-4 text-[#00FF88]" />
            <span>GACHA</span>
            {gachaPulls > 0 && (
              <span className="px-1.5 py-0.2 bg-[#00FF88] text-[#050708] font-bold text-[10px] rounded-full font-mono">
                {gachaPulls}
              </span>
            )}
          </button>

          {/* Ativo apenas em Modo Administrador */}
          {isAdminMode && (
            <button
              onClick={() => {
                setAdminActiveTab('sections');
                setIsAdmModalOpen(true);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-amber-950/60 hover:bg-amber-900/80 border border-amber-500/60 hover:border-amber-400 text-xs font-mono font-bold text-amber-300 transition-all cursor-pointer shadow-[0_0_10px_rgba(245,158,11,0.2)] active:scale-95"
              title="Painel de Administrador: Gestão do Jogo"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
              <span>PAINEL ADM</span>
            </button>
          )}
        </div>
      </header>

      {/* ==================================================
          CORPO PRINCIPAL (3 PAINÉIS)
      ================================================== */}
      <main className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 p-3 sm:p-5 max-w-[1720px] w-full mx-auto">
        {/* ==================================================
            6. PAINEL ESQUERDO — JOGADOR HUD
        ================================================== */}
        <aside className="lg:col-span-3 flex flex-col gap-3">
          {/* Card do Jogador */}
          <div className="hud-card rounded-lg p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-[#263238] pb-3">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-lg bg-[#080F12] border border-[#00A878] flex items-center justify-center shadow-[0_0_10px_rgba(0,168,120,0.3)]">
                  {classTitleMap[studentClass].icon}
                  <span className="absolute -bottom-1 -right-1 text-[9px] font-mono bg-[#00FF88] text-[#050708] px-1 rounded font-bold">
                    Lv.{currentLevel}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm tracking-wide text-white">
                    Jogador
                  </h3>
                  <p className="text-[11px] font-mono text-[#00FF88]">
                    {classTitleMap[studentClass].label}
                  </p>
                  <button
                    onClick={() => setActiveNavTab('turma')}
                    className="mt-0.5 text-[10px] font-mono text-sky-300 hover:text-sky-200 flex items-center gap-1 cursor-pointer hover:underline"
                    title="Clique para gerenciar sua Turma"
                  >
                    <GraduationCap className="w-3 h-3 text-sky-400" />
                    <span>Turma: {currentTurma.toUpperCase()}</span>
                  </button>
                  <button
                    onClick={() => setActiveNavTab('renascimento')}
                    className="mt-0.5 text-[10px] font-mono text-[#00FF88] hover:text-emerald-300 flex items-center gap-1 cursor-pointer hover:underline"
                    title="Clique para acessar o Sistema de Renascimento"
                  >
                    <span>◈</span>
                    <span>Renascimento {rebirthCount}/10 ({getXpMultiplier(rebirthCount)}x)</span>
                  </button>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-slate-400 block">SCORE</span>
                <span className="font-mono text-sm font-bold text-white tabular-nums">
                  {score}
                </span>
              </div>
            </div>

            {/* Barra de Progresso de Nível & XP do Ciclo (Requisito 6) */}
            <div className="space-y-1.5 p-2.5 rounded bg-[#080F12] border border-[#063B3B]">
              <div className="flex justify-between items-center text-[11px] font-mono">
                <span className="text-[#00FF88] font-bold flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-[#00FF88]" />
                  XP DO CICLO:
                </span>
                <span className="text-white font-bold">{cycleXp.toLocaleString('pt-BR')} XP</span>
              </div>

              {diffProgress.allUnlocked ? (
                <div className="py-1 px-2 rounded bg-emerald-950/40 border border-[#00FF88]/40 text-center">
                  <span className="text-[10px] font-mono text-[#00FF88] font-bold block">
                    Todas as dificuldades desbloqueadas neste ciclo!
                  </span>
                </div>
              ) : (
                <div className="space-y-0.5">
                  <div className="flex justify-between text-[10px] font-mono text-slate-300">
                    <span>
                      Próxima: <strong className="text-white">{diffProgress.nextDiffLabel}</strong>
                    </span>
                    <span className="text-[#00FF88]">
                      {diffProgress.targetXp.toLocaleString('pt-BR')} XP
                    </span>
                  </div>
                  <div className="flex justify-between text-[9px] font-mono text-slate-400">
                    <span>Faltam {diffProgress.xpNeeded.toLocaleString('pt-BR')} XP</span>
                    <span className="text-amber-300 font-bold">{diffProgress.progressPct}%</span>
                  </div>
                </div>
              )}

              {/* Barra de progresso até o próximo requisito */}
              <div className="w-full h-2 rounded-full bg-[#11181C] border border-[#263238] overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#00A878] to-[#00FF88]"
                  initial={{ width: 0 }}
                  animate={{ width: `${diffProgress.progressPct}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              <div className="flex justify-between text-[9px] font-mono text-slate-500 pt-0.5">
                <span>XP Histórico: {historicalXp.toLocaleString('pt-BR')} XP</span>
                <span>Nível {currentLevel}</span>
              </div>
            </div>

            {/* Perfil & Vantagem de Classe */}
            <div className="p-2.5 rounded bg-[#080F12] border border-[#062A43] text-[11px] space-y-1">
              <span className="text-[#087EA4] font-mono font-semibold block uppercase">
                Perk da Classe:
              </span>
              <p className="text-slate-300 text-xs">
                {classTitleMap[studentClass].perk}
              </p>
            </div>
          </div>

          {/* Estatísticas de Combate Intelectual */}
          <div className="hud-card rounded-lg p-4 flex flex-col gap-2.5">
            <h4 className="font-display text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5 border-b border-[#263238] pb-2">
              <Cpu className="w-3.5 h-3.5 text-[#00A878]" />
              Telemetria da Sessão
            </h4>

            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="p-2 rounded bg-[#080F12] border border-[#263238]">
                <span className="text-[10px] font-mono text-slate-400 block">SEQUÊNCIA</span>
                <div className="flex items-center justify-center gap-1 font-mono text-base font-bold text-[#00FF88]">
                  <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>{streak}</span>
                </div>
                <span className="text-[9px] text-slate-500">Máx: {maxStreak}</span>
              </div>

              <div className="p-2 rounded bg-[#080F12] border border-[#263238]">
                <span className="text-[10px] font-mono text-slate-400 block">PRECISÃO</span>
                <div className="font-mono text-base font-bold text-sky-400">
                  {correctAnswers + wrongAnswers > 0
                    ? Math.round((correctAnswers / (correctAnswers + wrongAnswers)) * 100)
                    : 100}
                  %
                </div>
                <span className="text-[9px] text-slate-500 hidden-counter">
                  {correctAnswers + wrongAnswers} resolvidas
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
              <div className="p-2 rounded bg-[#063B3B]/30 border border-[#00A878]/30 flex items-center justify-between px-3">
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Acertos
                </span>
                <span className="font-bold text-white">{correctAnswers}</span>
              </div>

              <div className="p-2 rounded bg-rose-950/20 border border-rose-900/30 flex items-center justify-between px-3">
                <span className="text-rose-400 flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5" /> Erros
                </span>
                <span className="font-bold text-white">{wrongAnswers}</span>
              </div>
            </div>
          </div>

          {/* Dificuldades & Progressão (Requisitos 2, 4 e 6) */}
          <div className="hud-card rounded-lg p-3 text-xs space-y-2">
            <div className="flex items-center justify-between border-b border-[#263238] pb-1.5">
              <span className="font-display text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">
                Trilha de Dificuldade
              </span>
              <span className="text-[9px] font-mono text-[#00FF88]">
                {unlockedDifficulties.length}/4 Desbloqueadas
              </span>
            </div>

            <div className="grid grid-cols-4 gap-1 text-[10px] font-mono text-center">
              {(['facil', 'medio', 'dificil', 'expert'] as DifficultyType[]).map((d) => {
                const isUnlocked = unlockedDifficulties.includes(d);
                const isActive = activeDifficulty === d;
                const order: DifficultyType[] = ['facil', 'medio', 'dificil', 'expert'];
                const canSelect = isUnlocked && (hasReachedExpert || order.indexOf(d) >= order.indexOf(activeDifficulty));

                return (
                  <button
                    key={d}
                    disabled={!canSelect}
                    onClick={() => {
                      if (canSelect && activeDifficulty !== d) {
                        setActiveDifficulty(d);
                        saveProgression({ activeDifficulty: d });
                      }
                    }}
                    className={`py-1.5 px-1 rounded border transition-all ${
                      isActive
                        ? 'border-[#00FF88] bg-[#00FF88]/15 text-[#00FF88] font-bold shadow-[0_0_8px_rgba(0,255,136,0.3)]'
                        : isUnlocked
                        ? canSelect
                          ? 'border-[#063B3B] bg-[#080F12] text-slate-300 hover:border-[#00A878] hover:text-white cursor-pointer'
                          : 'border-[#11181C] bg-[#080F12] text-slate-500 opacity-60 cursor-not-allowed'
                        : 'border-[#11181C] bg-transparent text-slate-600 opacity-40 cursor-not-allowed'
                    }`}
                    title={
                      !isUnlocked
                        ? `Bloqueada: Requer ${DIFFICULTY_CONFIG[d].xpReq.toLocaleString('pt-BR')} XP no ciclo`
                        : isActive
                        ? 'Dificuldade ativa da partida'
                        : canSelect
                        ? `Clique para jogar em ${DIFFICULTY_CONFIG[d].label}`
                        : 'Modo Expert necessário para revisitar dificuldades anteriores'
                    }
                  >
                    {d.slice(0, 3).toUpperCase()}
                  </button>
                );
              })}
            </div>

            {/* Lista com indicação de cada dificuldade */}
            <div className="space-y-1 pt-1 text-[9px] font-mono border-t border-[#263238]/60">
              {(['facil', 'medio', 'dificil', 'expert'] as DifficultyType[]).map((d) => {
                const isUnlocked = unlockedDifficulties.includes(d);
                const isActive = activeDifficulty === d;
                const cfg = DIFFICULTY_CONFIG[d];

                return (
                  <div key={d} className="flex items-center justify-between text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: isUnlocked ? cfg.color : '#475569' }}
                      />
                      <span className={isActive ? 'text-white font-bold' : isUnlocked ? 'text-slate-300' : 'text-slate-500'}>
                        {cfg.label} ({cfg.xpReq.toLocaleString('pt-BR')} XP)
                      </span>
                    </span>
                    <span>
                      {isActive ? (
                        <span className="text-[#00FF88] font-bold">ATIVA</span>
                      ) : isUnlocked ? (
                        <span className="text-sky-400">DESBLOQUEADA</span>
                      ) : (
                        <span className="text-slate-600">BLOQUEADA</span>
                      )}
                    </span>
                  </div>
                );
              })}
            </div>

            {!hasReachedExpert ? (
              <p className="text-[10px] font-mono text-slate-500 pt-1 border-t border-[#263238]/60">
                🔒 Progrida até 6.000 XP (EXPERT) para alternar livremente entre todas as dificuldades deste ciclo.
              </p>
            ) : (
              <p className="text-[10px] font-mono text-[#00FF88] pt-1 border-t border-[#263238]/60">
                ⭐ Modo Expert ativo: você pode revisar qualquer dificuldade!
              </p>
            )}
          </div>
        </aside>

        {/* ==================================================
            7. ÁREA PRINCIPAL — QUIZ / MINHA TURMA / ÁRVORES
        ================================================== */}
        <section className="lg:col-span-6 flex flex-col gap-3">
          {activeNavTab === 'inicio' ? (
            /* ==================================================
               ABA "INÍCIO" — PAINEL DE CONTROLE DA MATRIZ
            ================================================== */
            <div className="hud-card rounded-xl p-5 sm:p-7 flex-1 flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between border-b border-[#263238] pb-3 mb-5">
                  <div className="flex items-center gap-2">
                    <Home className="w-5 h-5 text-[#00FF88]" />
                    <h2 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                      PAINEL OPERACIONAL PRINCIPAL
                    </h2>
                  </div>
                  <span className="text-xs font-mono text-[#00FF88] px-2.5 py-0.5 rounded bg-[#063B3B] border border-[#00A878]/30">
                    SISTEMA ATIVO
                  </span>
                </div>

                {/* Banner de Status Matrix (Requisito 38) */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#080F12] via-[#063B3B]/30 to-[#080F12] border border-[#00FF88]/40 shadow-[0_0_20px_rgba(0,255,136,0.15)] mb-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-mono text-[#00FF88] tracking-widest uppercase block">
                        TERMINAL DE CONHECIMENTO MATRIX
                      </span>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-wide">
                        MATRIZ DO CONHECIMENTO
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-xs font-mono">
                        <span className="text-sky-400 font-bold">{currentTurma.toUpperCase()}</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-[#00FF88] font-bold">{activeSubject.toUpperCase()}</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-amber-400 font-bold">DIFICULDADE: {DIFFICULTY_CONFIG[activeDifficulty].label}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveNavTab('quiz')}
                      className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#00A878] to-[#00FF88] hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] text-[#050708] font-display font-bold text-xs uppercase tracking-wider transition-all cursor-pointer text-center active:scale-95 shrink-0"
                    >
                      ENTRAR NO QUIZ →
                    </button>
                  </div>
                </div>

                {/* Grid de Atalhos Rápidos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
                  {/* Card Minha Turma */}
                  <div
                    onClick={() => setActiveNavTab('turma')}
                    className="p-4 rounded-xl border border-[#263238] hover:border-sky-400 bg-[#080F12] hover:bg-[#11181C] transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-sky-950/70 border border-sky-500/40 flex items-center justify-center shrink-0">
                        <GraduationCap className="w-5 h-5 text-sky-400" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-sky-400 font-bold uppercase block">
                          CONFIGURAÇÃO ESCOLAR
                        </span>
                        <h4 className="font-display font-bold text-sm text-white group-hover:text-sky-300 transition-colors">
                          Turma: {currentTurma.toUpperCase()}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                          Personalize o nível pedagógico do 6º ano ao 3º ano EM sem perder seu progresso.
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 text-right">
                      <span className="text-[11px] font-mono text-sky-400 group-hover:underline">
                        Alterar Turma →
                      </span>
                    </div>
                  </div>

                  {/* Card Catálogo de Árvores */}
                  <div
                    onClick={() => setActiveNavTab('arvores')}
                    className="p-4 rounded-xl border border-[#263238] hover:border-[#00FF88] bg-[#080F12] hover:bg-[#11181C] transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#063B3B] border border-[#00A878] flex items-center justify-center shrink-0">
                        <TreeDeciduous className="w-5 h-5 text-[#00FF88]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#00FF88] font-bold uppercase block">
                          FLORESTA CÓSMICA
                        </span>
                        <h4 className="font-display font-bold text-sm text-white group-hover:text-[#00FF88] transition-colors">
                          Árvores ({unlockedTreeIds.length}/{TREE_DATABASE.length})
                        </h4>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                          Ativa: {equippedTree.name}. Sintetize mais árvores no Gacha.
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 text-right">
                      <span className="text-[11px] font-mono text-[#00FF88] group-hover:underline">
                        Ver Coleção →
                      </span>
                    </div>
                  </div>

                  {/* Card Renascimento */}
                  <div
                    onClick={() => setActiveNavTab('renascimento')}
                    className="p-4 rounded-xl border border-[#263238] hover:border-amber-400 bg-[#080F12] hover:bg-[#11181C] transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-500/40 flex items-center justify-center shrink-0">
                        <span className="text-xl text-amber-400 font-bold">◈</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-amber-400 font-bold uppercase block">
                          PRESTÍGIO QUÂNTICO
                        </span>
                        <h4 className="font-display font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                          Renascimento {rebirthCount}/10
                        </h4>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                          Bônus ativos: {getXpMultiplier(rebirthCount)}x XP • {getBytesMultiplier(rebirthCount)}x Bytes.
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 text-right">
                      <span className="text-[11px] font-mono text-amber-400 group-hover:underline">
                        {canRebirth ? 'Renascimento Disponível! →' : 'Ver Prestígio →'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Resumo Rápido da Sessão */}
                <div className="p-3.5 rounded-xl bg-[#080F12] border border-[#263238] flex flex-wrap items-center justify-around gap-4 text-center">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">NÍVEL RPG</span>
                    <span className="font-display text-base font-bold text-white">Nível {currentLevel}</span>
                  </div>
                  <div className="h-8 w-px bg-[#263238]" />
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">XP TOTAL</span>
                    <span className="font-mono text-base font-bold text-[#00FF88]">{xp} XP</span>
                  </div>
                  <div className="h-8 w-px bg-[#263238]" />
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">ACERTOS</span>
                    <span className="font-mono text-base font-bold text-emerald-400">{correctAnswers}</span>
                  </div>
                  <div className="h-8 w-px bg-[#263238]" />
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">TENTATIVAS GACHA</span>
                    <span className="font-mono text-base font-bold text-sky-400">{gachaPulls}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#263238] flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Modo Imersivo Matrix Conhecimento</span>
                <button
                  onClick={() => setActiveNavTab('quiz')}
                  className="px-4 py-2 rounded-md bg-[#00A878] hover:bg-[#00FF88] text-[#050708] font-display font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  ACESSAR QUIZ AGORA →
                </button>
              </div>
            </div>
          ) : activeNavTab === 'turma' ? (
            /* ==================================================
               ABA "MINHA TURMA" — PAINEL DE SELEÇÃO FUTURISTA
            ================================================== */
            <div className="hud-card rounded-xl p-5 sm:p-7 flex-1 flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between border-b border-[#263238] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-sky-400" />
                    <h2 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                      MINHA TURMA
                    </h2>
                  </div>
                  <span className="text-xs font-mono text-[#00FF88] px-2.5 py-0.5 rounded bg-[#063B3B] border border-[#00A878]/30">
                    TURMA ATUAL: {currentTurma.toUpperCase()}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-sans mb-5 leading-relaxed">
                  Selecione o ano escolar utilizado para personalizar suas perguntas.
                </p>

                {/* Grade das 7 Turmas (Requisitos 32 e 33) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {TURMAS_LIST.map((turma) => {
                    const isSelected = currentTurma === turma.id;

                    return (
                      <motion.div
                        key={turma.id}
                        whileHover={{ scale: 1.015 }}
                        onClick={() => {
                          if (!isSelected) handleRequestTurmaChange(turma.id);
                        }}
                        className={`p-4 rounded-xl border transition-all flex flex-col justify-between cursor-pointer ${
                          isSelected
                            ? 'border-[#00FF88] bg-gradient-to-b from-[#063B3B]/50 to-[#080F12] shadow-[0_0_20px_rgba(0,255,136,0.35)] ring-1 ring-[#00FF88]/60'
                            : 'border-[#263238] bg-[#080F12] hover:border-sky-500/60 hover:bg-[#11181C]'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="font-display text-base font-bold text-white tracking-wide">
                              {turma.label}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#11181C] text-slate-400 border border-[#263238]">
                              {turma.stage}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 font-sans leading-relaxed">
                            {turma.description}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-[#263238]/60 flex items-center justify-between">
                          {isSelected ? (
                            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#00FF88]">
                              <Check className="w-4 h-4 text-[#00FF88]" />
                              <span>✓ TURMA ATUAL</span>
                            </div>
                          ) : (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleRequestTurmaChange(turma.id);
                              }}
                              className="w-full py-1.5 px-3 rounded-md bg-[#11181C] hover:bg-sky-500 hover:text-black border border-sky-500/30 text-sky-300 font-display font-semibold text-xs tracking-wider uppercase transition-all cursor-pointer text-center"
                            >
                              SELECIONAR ESTA TURMA
                            </button>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#263238] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                  Mudar de turma calibra as perguntas sem alterar seu XP acumulado.
                </span>

                <button
                  onClick={() => setActiveNavTab('quiz')}
                  className="px-4 py-2 rounded-md bg-[#00A878] hover:bg-[#00FF88] text-[#050708] font-display font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_12px_rgba(0,168,120,0.3)] active:scale-95"
                >
                  VOLTAR AO QUIZ →
                </button>
              </div>
            </div>
          ) : activeNavTab === 'arvores' ? (
            /* ==================================================
               ABA "ÁRVORES" — GALERIA AMPLIADA
            ================================================== */
            <div className="hud-card rounded-xl p-5 sm:p-7 flex-1 flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between border-b border-[#263238] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <TreeDeciduous className="w-5 h-5 text-[#00FF88]" />
                    <h2 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                      CATÁLOGO DA FLORESTA CÓSMICA
                    </h2>
                  </div>
                  <button
                    onClick={() => setIsGachaModalOpen(true)}
                    className="px-3 py-1 rounded bg-gradient-to-r from-[#00A878] to-[#087EA4] text-[#050708] font-display font-bold text-xs uppercase cursor-pointer shadow-sm hover:brightness-110"
                  >
                    ABRIR GACHA ({gachaPulls})
                  </button>
                </div>

                <p className="text-xs text-slate-300 font-sans mb-4">
                  Explore e equipe as árvores cósmicas que você sintetizou na Matriz através do conhecimento.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-[55vh] overflow-y-auto pr-1">
                  {TREE_DATABASE.map((tree) => {
                    const isUnlocked = unlockedTreeIds.includes(tree.id);
                    const isEquipped = equippedTreeId === tree.id;

                    return (
                      <div
                        key={tree.id}
                        className={`p-3.5 rounded-xl border flex flex-col justify-between transition-all ${
                          isEquipped
                            ? 'border-[#00FF88] bg-[#00FF88]/15 shadow-[0_0_15px_rgba(0,255,136,0.3)]'
                            : isUnlocked
                            ? 'border-[#263238] bg-[#080F12]'
                            : 'border-[#11181C] bg-[#050708]/60 opacity-40'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <TreeImageDisplay
                            tree={tree}
                            size="md"
                            isUnlocked={isUnlocked}
                            showFallbackBadge={true}
                          />
                          <div>
                            <span
                              className="text-[9px] font-mono font-bold uppercase tracking-wider block"
                              style={{ color: isUnlocked ? tree.accentColor : '#64748B' }}
                            >
                              {tree.rarity}
                            </span>
                            <h4 className="font-display font-bold text-xs text-white">
                              {isUnlocked ? tree.name : 'Espécime Bloqueado'}
                            </h4>
                          </div>
                        </div>

                        <p className="text-[11px] text-slate-400 mt-2 line-clamp-2">
                          {isUnlocked ? tree.description : 'Desbloqueie realizando invocações no Gacha.'}
                        </p>

                        <div className="mt-3 pt-2 border-t border-[#263238]/60 flex items-center justify-between">
                          {isEquipped ? (
                            <span className="text-[10px] font-mono text-[#00FF88] font-bold">
                              ✓ EQUIPADA
                            </span>
                          ) : isUnlocked ? (
                            <button
                              onClick={() => handleEquipTree(tree.id)}
                              className="w-full py-1 rounded bg-[#11181C] hover:bg-[#263238] text-xs font-mono text-[#00FF88] border border-[#00A878]/30 cursor-pointer"
                            >
                              Equipar
                            </button>
                          ) : (
                            <span className="text-[10px] font-mono text-slate-600">
                              🔒 No Gacha
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#263238] flex justify-end">
                <button
                  onClick={() => setActiveNavTab('quiz')}
                  className="px-4 py-2 rounded-md bg-[#00A878] hover:bg-[#00FF88] text-[#050708] font-display font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_12px_rgba(0,168,120,0.3)] active:scale-95"
                >
                  VOLTAR AO QUIZ →
                </button>
              </div>
            </div>
          ) : activeNavTab === 'renascimento' ? (
            /* ==================================================
               ABA "RENASCIMENTO" — SISTEMA DE PRESTÍGIO QUÂNTICO (Requisitos 44 a 57)
            ================================================== */
            <div className="hud-card rounded-xl p-5 sm:p-7 flex-1 flex flex-col justify-between relative overflow-hidden">
              <div>
                {/* Header da Aba */}
                <div className="flex items-center justify-between border-b border-[#263238] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl text-amber-400 font-bold">◈</span>
                    <h2 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                      RENASCIMENTO
                    </h2>
                  </div>
                  <span className="text-xs font-mono text-amber-400 px-2.5 py-0.5 rounded bg-amber-950/60 border border-amber-500/40">
                    {rebirthCount >= MAX_REBIRTH ? 'PRESTÍGIO MÁXIMO' : `PRESTÍGIO ${rebirthCount}/${MAX_REBIRTH}`}
                  </span>
                </div>

                {/* Card de Destaque Central (Requisito 52) */}
                <div className="p-5 rounded-2xl bg-gradient-to-b from-amber-950/30 via-[#080F12] to-[#080F12] border border-amber-500/40 shadow-[0_0_30px_rgba(245,158,11,0.15)] text-center mb-5">
                  <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(245,158,11,0.25)]">
                    <span className="text-3xl text-amber-400 font-bold">◈</span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white tracking-wider">
                    {rebirthCount >= MAX_REBIRTH ? 'RENASCIMENTO MÁXIMO' : `◈ RENASCIMENTO ${rebirthCount}`}
                  </h3>

                  {rebirthCount >= MAX_REBIRTH ? (
                    <p className="text-xs sm:text-sm text-amber-300 mt-1 font-sans">
                      Você alcançou o maior nível de prestígio.
                    </p>
                  ) : (
                    <p className="text-xs text-slate-300 mt-1 font-sans">
                      Progressão permanente de longo prazo na Matriz do Conhecimento.
                    </p>
                  )}

                  {/* Telemetria Sempre Visível (Requisito 55) */}
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-4 pt-4 border-t border-[#263238] text-center font-mono">
                    <div className="p-2 rounded bg-[#080F12] border border-[#263238]">
                      <span className="text-[9px] text-slate-400 block uppercase">RENASCIMENTO ATUAL</span>
                      <span className="text-xs font-bold text-amber-400">{rebirthCount} / 10</span>
                    </div>

                    <div className="p-2 rounded bg-[#080F12] border border-[#263238]">
                      <span className="text-[9px] text-slate-400 block uppercase">XP DO CICLO</span>
                      <span className="text-xs font-bold text-[#00FF88]">{xp.toLocaleString('pt-BR')}</span>
                    </div>

                    <div className="p-2 rounded bg-[#080F12] border border-[#263238]">
                      <span className="text-[9px] text-slate-400 block uppercase">XP NECESSÁRIO</span>
                      <span className="text-xs font-bold text-sky-400">
                        {rebirthCount >= MAX_REBIRTH ? 'MÁXIMO' : nextRebirthXp.toLocaleString('pt-BR')}
                      </span>
                    </div>

                    <div className="p-2 rounded bg-[#080F12] border border-[#263238]">
                      <span className="text-[9px] text-slate-400 block uppercase">MULT. DE XP</span>
                      <span className="text-xs font-bold text-[#00FF88]">{getXpMultiplier(rebirthCount).toFixed(2)}x</span>
                    </div>

                    <div className="p-2 rounded bg-[#080F12] border border-[#263238] col-span-2 sm:col-span-1">
                      <span className="text-[9px] text-slate-400 block uppercase">MULT. DE BYTES</span>
                      <span className="text-xs font-bold text-sky-400">{getBytesMultiplier(rebirthCount).toFixed(2)}x</span>
                    </div>
                  </div>

                  {/* Barra de Progresso do Renascimento (Requisito 52) */}
                  {rebirthCount < MAX_REBIRTH && (
                    <div className="mt-5 space-y-2 text-left">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-slate-300 font-bold uppercase tracking-wider">XP ATUAL</span>
                        <span className="text-amber-400 font-bold">
                          {xp.toLocaleString('pt-BR')} / {nextRebirthXp.toLocaleString('pt-BR')}
                        </span>
                      </div>

                      <div className="w-full h-3 rounded-full bg-[#11181C] border border-[#263238] overflow-hidden p-0.5">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-amber-500 via-[#00A878] to-[#00FF88]"
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min(100, Math.floor((xp / nextRebirthXp) * 100))}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>

                      <div className="flex justify-between text-[10px] font-mono text-slate-500">
                        <span>{Math.min(100, Math.floor((xp / nextRebirthXp) * 100))}% completo</span>
                        <span>
                          {canRebirth
                            ? '✓ Meta atingida! Pronto para renascer'
                            : `Faltam ${(nextRebirthXp - xp).toLocaleString('pt-BR')} XP neste ciclo`}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Detalhes do Próximo Renascimento (Requisitos 52 e 55) */}
                  {rebirthCount < MAX_REBIRTH && (
                    <div className="mt-4 p-3.5 rounded-xl bg-[#080F12] border border-[#263238] text-left">
                      <span className="text-[10px] font-mono text-amber-400 font-bold uppercase block mb-1">
                        PRÓXIMO: RENASCIMENTO {nextRebirthNumber} (XP necessário: {nextRebirthXp.toLocaleString('pt-BR')})
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                        <div className="text-[#00FF88]">
                          + XP: <strong>{getXpMultiplier(nextRebirthNumber).toFixed(2)}x</strong> (+10%)
                        </div>
                        <div className="text-sky-400">
                          + BYTES: <strong>{getBytesMultiplier(nextRebirthNumber).toFixed(2)}x</strong> (+8%)
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-2 font-sans">
                        Ao renascer, o XP do ciclo volta para 0 e a dificuldade para FÁCIL. Árvores, coleção, Gacha, turma e classe NÃO são perdidos.
                      </p>
                    </div>
                  )}

                  {/* Botão de Ação (Requisitos 52 e 56) */}
                  <div className="mt-5">
                    {rebirthCount >= MAX_REBIRTH ? (
                      <button
                        disabled
                        className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-amber-500/20 to-emerald-500/20 border border-amber-400/40 text-amber-300 font-display font-bold text-sm tracking-wider uppercase cursor-not-allowed opacity-90 shadow-md"
                      >
                        PRESTÍGIO MÁXIMO
                      </button>
                    ) : (
                      <button
                        disabled={!canRebirth}
                        onClick={() => setIsRebirthConfirmOpen(true)}
                        className={`w-full py-3 px-6 rounded-xl font-display font-bold text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
                          canRebirth
                            ? 'bg-gradient-to-r from-amber-500 to-[#00FF88] hover:from-amber-400 hover:to-[#00FF88] text-[#050708] shadow-[0_0_25px_rgba(245,158,11,0.5)] cursor-pointer active:scale-95 animate-pulse'
                            : 'bg-[#11181C] text-slate-500 border border-[#263238] cursor-not-allowed opacity-60'
                        }`}
                      >
                        <span className="text-base">◈</span>
                        <span>{canRebirth ? 'RENASCER AGORA' : 'RENASCER'}</span>
                        {!canRebirth && (
                          <span className="text-[11px] font-mono opacity-70">
                            (Requer {nextRebirthXp.toLocaleString('pt-BR')} XP)
                          </span>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* Tabela Completa de 10 Renascimentos */}
                <div className="border border-[#263238] rounded-xl p-3.5 bg-[#080F12]">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-bold mb-2">
                    PROGRESSÃO COMPLETA DE PRESTÍGIO (1 a 10)
                  </span>
                  <div className="max-h-36 overflow-y-auto space-y-1 pr-1 font-mono text-[11px]">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
                      const isPast = rebirthCount >= num;
                      const isCurrentNext = rebirthCount + 1 === num;

                      return (
                        <div
                          key={num}
                          className={`flex items-center justify-between p-1.5 rounded transition-all ${
                            isCurrentNext
                              ? 'bg-amber-500/20 border border-amber-500/50 text-amber-300 font-bold'
                              : isPast
                              ? 'bg-[#063B3B]/30 text-[#00FF88]'
                              : 'bg-[#11181C]/40 text-slate-500'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span>◈ Renascimento {num}</span>
                            {isPast && <span className="text-[9px] px-1 rounded bg-[#00FF88]/20 text-[#00FF88]">Concluído</span>}
                            {isCurrentNext && <span className="text-[9px] px-1 rounded bg-amber-400/30 text-amber-300">Próximo</span>}
                          </div>
                          <div className="flex items-center gap-4">
                            <span>{REBIRTH_XP_REQUIREMENTS[num].toLocaleString('pt-BR')} XP</span>
                            <span className="text-[#00FF88]">{getXpMultiplier(num).toFixed(2)}x XP</span>
                            <span className="text-sky-400">{getBytesMultiplier(num).toFixed(2)}x Bytes</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Rodapé da Aba */}
              <div className="mt-4 pt-3 border-t border-[#263238] flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Multiplicadores permanentes aplicados em todos os quizzes</span>
                <button
                  onClick={() => setActiveNavTab('quiz')}
                  className="px-4 py-2 rounded-md bg-[#00A878] hover:bg-[#00FF88] text-[#050708] font-display font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_12px_rgba(0,168,120,0.3)] active:scale-95"
                >
                  VOLTAR AO QUIZ →
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Indicador da Turma na Interface Principal (Requisito 38) */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-gradient-to-r from-[#080F12] via-[#063B3B]/40 to-[#080F12] border border-[#00A878]/40 shadow-[0_0_15px_rgba(0,168,120,0.15)] flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-slate-400 tracking-widest uppercase">
                    MATRIZ DO CONHECIMENTO
                  </div>
                  <div className="font-display text-sm sm:text-base font-bold text-white tracking-wide flex items-center gap-2 mt-0.5">
                    <span className="text-[#00FF88]">{currentTurma.toUpperCase()}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-sky-300">{activeSubject.toUpperCase()}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="text-right">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">DIFICULDADE</div>
                    <span
                      className="text-xs font-mono font-bold px-2 py-0.5 rounded border inline-block mt-0.5"
                      style={{
                        color: DIFFICULTY_CONFIG[activeDifficulty].color,
                        borderColor: `${DIFFICULTY_CONFIG[activeDifficulty].color}66`,
                        backgroundColor: `${DIFFICULTY_CONFIG[activeDifficulty].color}15`,
                      }}
                    >
                      {DIFFICULTY_CONFIG[activeDifficulty].label}
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveNavTab('turma')}
                    className="p-1.5 rounded-lg bg-[#11181C] hover:bg-sky-950 border border-sky-500/30 hover:border-sky-400 text-sky-400 transition-all cursor-pointer"
                    title="Mudar Turma"
                  >
                    <GraduationCap className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Seletor de Matéria no Topo */}
              <div className="flex items-center justify-between gap-2 p-1.5 rounded-lg bg-[#080F12] border border-[#063B3B]">
                <div className="flex items-center gap-1.5 w-full">
                  <button
                    onClick={() => setActiveSubject('matematica')}
                    className={`flex-1 py-2 px-3 rounded-md text-xs font-display font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      activeSubject === 'matematica'
                        ? 'bg-[#00A878] text-[#050708] shadow-[0_0_12px_rgba(0,168,120,0.4)]'
                        : 'text-slate-400 hover:text-white hover:bg-[#11181C]'
                    }`}
                  >
                    <Compass className="w-4 h-4" />
                    <span>MATEMÁTICA</span>
                  </button>

                  <button
                    onClick={() => setActiveSubject('ciencias')}
                    className={`flex-1 py-2 px-3 rounded-md text-xs font-display font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      activeSubject === 'ciencias'
                        ? 'bg-[#087EA4] text-white shadow-[0_0_12px_rgba(8,126,164,0.4)]'
                        : 'text-slate-400 hover:text-white hover:bg-[#11181C]'
                    }`}
                  >
                    <Atom className="w-4 h-4" />
                    <span>CIÊNCIAS</span>
                  </button>
                </div>
              </div>

              {/* Card Central: Notificação Discreta de Seção Esgotada vs Questão Ativa (Requisito 5) */}
              {isSectionComplete && !currentQuestion ? (
                /* Notificação discreta quando todas as questões inéditas de uma seção forem esgotadas (Requisito 5) */
                <div className="hud-card rounded-xl p-5 sm:p-6 flex-1 flex flex-col justify-center border border-amber-500/40 bg-[#080F12]/95 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-500/15 border border-amber-500/50 flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">
                        SEÇÃO COMPLETA • QUESTÕES INÉDITAS ESGOTADAS
                      </span>
                      <h3 className="font-display text-base sm:text-lg font-bold text-white">
                        Não há mais questões inéditas disponíveis nesta seção
                      </h3>
                    </div>
                  </div>

                  <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-lg bg-[#11181C] border border-[#263238] text-xs font-mono text-slate-300">
                    <span className="text-[#00FF88] font-bold">{activeSubject.toUpperCase()}</span>
                    <span>•</span>
                    <span className="text-sky-300 font-bold">{currentTurma.toUpperCase()}</span>
                    <span>•</span>
                    <span style={{ color: DIFFICULTY_CONFIG[activeDifficulty].color }} className="font-bold">
                      {DIFFICULTY_CONFIG[activeDifficulty].label.toUpperCase()}
                    </span>
                    <span>•</span>
                    <span className="text-amber-400 font-bold">Histórico protegido contra repetições</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    Todas as perguntas desta seção já foram apresentadas e seu histórico permanece salvo para impedir repetições automáticas. Para continuar jogando e acumulando XP neste ciclo, selecione outra dificuldade desbloqueada, alterne de matéria ou escolha outro ano escolar:
                  </p>

                  <div className="flex flex-wrap items-center gap-2.5 pt-1">
                    <button
                      onClick={() => setActiveSubject(activeSubject === 'matematica' ? 'ciencias' : 'matematica')}
                      className="px-3.5 py-2 rounded-lg bg-[#087EA4]/20 hover:bg-[#087EA4]/40 border border-[#087EA4]/60 text-sky-200 text-xs font-mono cursor-pointer transition-all flex items-center gap-1.5"
                    >
                      <Atom className="w-3.5 h-3.5 text-sky-400" />
                      <span>Alternar para {activeSubject === 'matematica' ? 'Ciências' : 'Matemática'}</span>
                    </button>

                    {unlockedDifficulties
                      .filter((d) => d !== activeDifficulty)
                      .map((otherDiff) => (
                        <button
                          key={otherDiff}
                          onClick={() => {
                            setActiveDifficulty(otherDiff);
                            saveProgression({ activeDifficulty: otherDiff });
                          }}
                          className="px-3.5 py-2 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/60 border border-[#00FF88]/40 text-[#00FF88] text-xs font-mono cursor-pointer transition-all flex items-center gap-1.5"
                        >
                          <Zap className="w-3.5 h-3.5 text-[#00FF88]" />
                          <span>Jogar em {DIFFICULTY_CONFIG[otherDiff].label}</span>
                        </button>
                      ))}

                    <button
                      onClick={() => setActiveNavTab('turma')}
                      className="px-3.5 py-2 rounded-lg bg-[#11181C] hover:bg-[#263238] border border-slate-700 text-slate-200 text-xs font-mono cursor-pointer transition-all flex items-center gap-1.5"
                    >
                      <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                      <span>Mudar Turma / Ano</span>
                    </button>

                    <button
                      onClick={() => setConfirmRestartSectionPrompt(true)}
                      className="px-3.5 py-2 rounded-lg bg-amber-950/30 hover:bg-amber-900/50 border border-amber-500/40 text-amber-300 text-xs font-mono cursor-pointer transition-all flex items-center gap-1.5 ml-auto"
                      title="Reiniciar intencionalmente o histórico desta seção específica"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                      <span>Reiniciar Seção (Rodada #{currentSectionRound + 1})</span>
                    </button>
                  </div>
                </div>
              ) : currentQuestion ? (
                /* Card Principal da Questão */
                <div className="hud-card rounded-xl p-5 sm:p-7 flex-1 flex flex-col justify-between relative overflow-hidden">
                  {/* Header da Questão */}
                  <div>
                    <div className="flex items-center justify-between border-b border-[#263238] pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-[#063B3B] text-[#00FF88] font-mono text-xs font-semibold uppercase tracking-wider">
                          {currentQuestion.subject.toUpperCase()}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {currentQuestion.grade}
                        </span>
                        {currentQuestion.isProcedural && (
                          <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-[#00FF88] border border-[#00FF88]/40 font-mono text-[10px] uppercase font-bold tracking-wider flex items-center gap-1 shadow-[0_0_8px_rgba(0,255,136,0.2)]">
                            <Sparkles className="w-3 h-3 text-[#00FF88] animate-pulse" />
                            SÍNTESE INFINITA ∞
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-slate-400">
                          DIFICULDADE:{' '}
                          <strong style={{ color: DIFFICULTY_CONFIG[currentQuestion.difficulty].color }}>
                            {DIFFICULTY_CONFIG[currentQuestion.difficulty].label}
                          </strong>
                        </span>
                        <div
                          className="hud-card hidden-counter hidden text-xs font-mono text-[#00FF88] bg-[#063B3B]/60 px-2 py-0.5 rounded border border-[#00A878]/40"
                          aria-hidden="true"
                        >
                          <span>{getSectionProgress(activeSubject, currentTurma, activeDifficulty).usedCount}/15</span>
                        </div>
                      </div>
                    </div>

                    {/* Habilidade BNCC & Objeto de Conhecimento */}
                    {currentQuestion.bnccSkill && (
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-2 py-0.5 rounded bg-sky-950/70 border border-sky-500/40 text-sky-300 font-mono text-[11px] font-bold">
                          BNCC: {currentQuestion.bnccSkill}
                        </span>
                        {currentQuestion.topic && (
                          <span className="text-[11px] font-mono text-slate-400">
                            • {currentQuestion.topic}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Pergunta */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentQuestion.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h2 className="text-base sm:text-lg lg:text-xl font-medium text-slate-100 leading-relaxed mb-6">
                          {currentQuestion.question}
                        </h2>
                      </motion.div>
                    </AnimatePresence>

                    {/* Alternativas [A], [B], [C], [D] */}
                    <div className="grid grid-cols-1 gap-3">
                      {shuffledOptions.map((opt, idx) => {
                        const letter = String.fromCharCode(65 + idx); // A, B, C, D
                        const isSelected = selectedOptionIndex === idx;
                        const isCorrect = opt.originalIndex === currentQuestion.correctAnswer;

                        let buttonStyles =
                          'border-[#263238] bg-[#080F12] text-slate-200 hover:border-[#00A878] hover:bg-[#11181C]';

                        if (hasAnswered) {
                          if (isCorrect) {
                            buttonStyles =
                              'border-[#00FF88] bg-[#00FF88]/15 text-[#00FF88] shadow-[0_0_15px_rgba(0,255,136,0.3)] font-semibold';
                          } else if (isSelected && !isCorrect) {
                            buttonStyles =
                              'border-rose-500 bg-rose-950/30 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.3)]';
                          } else {
                            buttonStyles = 'border-[#11181C] bg-[#080F12]/50 text-slate-500 opacity-60';
                          }
                        }

                        return (
                          <motion.button
                            key={idx}
                            whileHover={!hasAnswered ? { scale: 1.01 } : {}}
                            whileTap={!hasAnswered ? { scale: 0.99 } : {}}
                            onClick={() => handleSelectAnswer(idx)}
                            disabled={hasAnswered}
                            className={`w-full p-3.5 rounded-lg border text-left transition-all flex items-center justify-between cursor-pointer ${buttonStyles}`}
                          >
                            <div className="flex items-center gap-3">
                              <span className="w-7 h-7 rounded bg-[#11181C] border border-[#263238] flex items-center justify-center font-mono text-xs font-bold text-[#00FF88] shrink-0">
                                {letter}
                              </span>
                              <span className="text-sm">{opt.text}</span>
                            </div>
                            {hasAnswered && isCorrect && (
                              <CheckCircle className="w-5 h-5 text-[#00FF88] shrink-0" />
                            )}
                            {hasAnswered && isSelected && !isCorrect && (
                              <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                            )}
                          </motion.button>
                        );
                      })}
                    </div>

                    {/* Feedback pedagógico & Explicação */}
                    <AnimatePresence>
                      {hasAnswered && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className={`mt-4 p-3.5 rounded-lg border text-xs leading-relaxed ${
                            isAnswerCorrect
                              ? 'border-[#00FF88]/40 bg-[#063B3B]/30 text-slate-200'
                              : 'border-rose-900/50 bg-rose-950/20 text-rose-200'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="font-display font-bold text-xs uppercase flex items-center gap-1.5">
                              {isAnswerCorrect ? (
                                <>
                                  <CheckCircle className="w-4 h-4 text-[#00FF88]" />
                                  <span className="text-[#00FF88]">RESPOSTA CORRETA! +{recentAnswerXp} XP</span>
                                  {recentStreakBonus > 0 && (
                                    <span className="text-amber-400 font-mono text-[11px]">
                                      (+{recentStreakBonus} BÔNUS DE COMBO!)
                                    </span>
                                  )}
                                </>
                              ) : (
                                <>
                                  <XCircle className="w-4 h-4 text-rose-400" />
                                  <span className="text-rose-400">RESPOSTA INCORRETA (+0 XP)</span>
                                </>
                              )}
                            </span>
                          </div>
                          <p className="text-slate-300 font-sans">
                            <strong className="text-slate-100">Explicação: </strong>
                            {currentQuestion.explanation}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Rodapé da Questão: XP e Botão Próximo */}
                  <div className="mt-6 pt-4 border-t border-[#263238] flex items-center justify-between">
                    <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                      <span>XP DA QUESTÃO:</span>
                      <span className="text-[#00FF88] font-bold">
                        +{DIFFICULTY_CONFIG[currentQuestion.difficulty].xpPerCorrect} XP
                      </span>
                    </div>

                    {hasAnswered && (
                      <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={handleNextQuestion}
                        className="px-5 py-2 rounded-md bg-[#00A878] hover:bg-[#00FF88] text-[#050708] font-display font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(0,255,136,0.3)] active:scale-95"
                      >
                        <span>PRÓXIMA QUESTÃO</span>
                        <ChevronRight className="w-4 h-4" />
                      </motion.button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="hud-card rounded-xl p-8 flex-1 flex flex-col items-center justify-center text-center">
                  <div className="w-10 h-10 border-2 border-[#00FF88] border-t-transparent rounded-full animate-spin mb-3" />
                  <p className="text-xs font-mono text-slate-400">Carregando dados da questão...</p>
                </div>
              )}
            </>
          )}
        </section>

        {/* ==================================================
            16. PAINEL DIREITO — COLEÇÃO DE ÁRVORES
        ================================================== */}
        <aside className="lg:col-span-3 flex flex-col gap-3">
          <div className="hud-card rounded-lg p-4 flex flex-col gap-3">
            {/* Topo do Painel Direito: Botão Abrir Gacha */}
            <div className="flex items-center justify-between border-b border-[#263238] pb-3">
              <h3 className="font-display text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                <TreeDeciduous className="w-4 h-4 text-[#00FF88]" />
                COLEÇÃO DE ÁRVORES
              </h3>
            </div>

            <button
              onClick={() => setIsGachaModalOpen(true)}
              className="w-full py-2.5 px-3 rounded-md bg-gradient-to-r from-[#00A878] to-[#087EA4] hover:from-[#00FF88] hover:to-[#38BDF8] text-[#050708] font-display font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(0,168,120,0.3)] active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>ABRIR GACHA</span>
              <span className="bg-[#050708] text-[#00FF88] font-mono text-[10px] px-1.5 py-0.5 rounded">
                {gachaPulls} tentativas
              </span>
            </button>

            {/* Árvore Atual Equipada */}
            <div className="p-3 rounded-lg bg-[#080F12] border border-[#00A878]/30 flex flex-col items-center text-center relative overflow-hidden">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1">
                Árvore Ativa
              </span>

              {/* Holograma / Visual da Árvore */}
              <TreeImageDisplay
                tree={equippedTree}
                size="lg"
                isUnlocked={true}
                showFallbackBadge={true}
                className="my-1 group shadow-[0_0_20px_rgba(0,255,136,0.25)]"
              />

              <span
                className="text-[10px] font-mono font-bold px-2 py-0.5 rounded mt-1"
                style={{
                  backgroundColor: `${equippedTree.accentColor}22`,
                  color: equippedTree.accentColor,
                  border: `1px solid ${equippedTree.accentColor}55`,
                }}
              >
                {equippedTree.rarity}
              </span>
              <h4 className="font-display font-bold text-sm text-white mt-1">
                {equippedTree.name}
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-2">
                {equippedTree.description}
              </p>
            </div>

            {/* Contadores por Raridade */}
            <div className="space-y-1.5 text-xs font-mono">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                Progresso do Catálogo
              </span>

              {(['COMUM', 'RARO', 'ÉPICO', 'LENDÁRIO', 'YGGDRASIL'] as TreeRarity[]).map((rarity) => {
                const { unlocked, total } = countRarity(rarity);
                const rarityColorMap: Record<TreeRarity, string> = {
                  COMUM: '#00A878',
                  RARO: '#38BDF8',
                  ÉPICO: '#A855F7',
                  LENDÁRIO: '#F59E0B',
                  YGGDRASIL: '#00FF88',
                };
                const color = rarityColorMap[rarity];

                return (
                  <div
                    key={rarity}
                    className="p-1.5 px-2.5 rounded bg-[#080F12] border border-[#263238] flex items-center justify-between"
                  >
                    <span className="font-bold flex items-center gap-1.5" style={{ color }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                      {rarity}
                    </span>
                    <span className="text-slate-300">
                      {unlocked} / {total}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Grade de Seleção / Equipar Árvores Desbloqueadas */}
            <div className="border-t border-[#263238] pt-2">
              <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1.5">
                Trocar Árvore Ativa ({unlockedTreeIds.length} coletadas):
              </span>
              <div className="grid grid-cols-4 gap-1.5 max-h-36 overflow-y-auto pr-1">
                {TREE_DATABASE.map((tree) => {
                  const isUnlocked = unlockedTreeIds.includes(tree.id);
                  const isEquipped = equippedTreeId === tree.id;

                  return (
                    <button
                      key={tree.id}
                      disabled={!isUnlocked}
                      onClick={() => handleEquipTree(tree.id)}
                      className={`p-1.5 rounded flex flex-col items-center justify-center border transition-all ${
                        isEquipped
                          ? 'border-[#00FF88] bg-[#00FF88]/20 shadow-[0_0_8px_rgba(0,255,136,0.3)]'
                          : isUnlocked
                          ? 'border-[#263238] bg-[#080F12] hover:border-[#00A878] cursor-pointer'
                          : 'border-[#11181C] bg-[#050708] opacity-30 cursor-not-allowed'
                      }`}
                      title={isUnlocked ? `${tree.name} (${tree.rarity})` : 'Bloqueada no Gacha'}
                    >
                      <TreeImageDisplay
                        tree={tree}
                        size="xs"
                        isUnlocked={isUnlocked}
                        className="mb-0.5"
                      />
                      <span className="text-[8px] font-mono text-slate-300 truncate w-full text-center">
                        {isUnlocked ? tree.name.split(' ')[0] : '???'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/* ==================================================
          14. MODAL DO GACHA DE ÁRVORES
      ================================================== */}
      <AnimatePresence>
        {isGachaModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="hud-card max-w-xl w-full rounded-2xl p-6 sm:p-7 relative border-[#00FF88]/40 shadow-[0_0_40px_rgba(0,255,136,0.2)]"
            >
              {/* Fechar Modal */}
              <button
                onClick={() => {
                  setIsGachaModalOpen(false);
                  setGachaResult(null);
                }}
                className="absolute top-4 right-4 text-slate-400 hover:text-white font-mono text-sm px-2 py-1 rounded bg-[#11181C] hover:bg-[#263238] border border-[#263238] cursor-pointer"
              >
                ✕
              </button>

              <div className="text-center mb-5">
                <span className="text-[11px] font-mono text-[#00FF88] uppercase tracking-widest block">
                  CÂMARA DE SÍNTESE CÓSMICA
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide">
                  GACHA DE ÁRVORES DA MATRIZ
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Ganhe tentativas avançando no quiz, acertando questões e elevando seu XP.
                </p>
              </div>

              {/* Informações do Nível do Gacha & Probabilidades */}
              <div className="p-3.5 rounded-lg bg-[#080F12] border border-[#063B3B] mb-5">
                <div className="flex items-center justify-between text-xs font-mono border-b border-[#263238] pb-2 mb-2">
                  <span className="text-[#00FF88] font-bold">
                    {GACHA_LEVEL_CONFIG[gachaLevel].name}
                  </span>
                  <span className="text-slate-400">
                    Tentativas restantes:{' '}
                    <strong className="text-white font-bold">{gachaPulls}</strong>
                  </span>
                </div>

                <div className="grid grid-cols-5 gap-1 text-[10px] font-mono text-center">
                  <div>
                    <span className="text-[#00A878] block">Comum</span>
                    <span className="text-slate-300 font-bold">
                      {(GACHA_LEVEL_CONFIG[gachaLevel].rates.COMUM * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div>
                    <span className="text-[#38BDF8] block">Raro</span>
                    <span className="text-slate-300 font-bold">
                      {(GACHA_LEVEL_CONFIG[gachaLevel].rates.RARO * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div>
                    <span className="text-[#A855F7] block">Épico</span>
                    <span className="text-slate-300 font-bold">
                      {(GACHA_LEVEL_CONFIG[gachaLevel].rates.ÉPICO * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div>
                    <span className="text-[#F59E0B] block">Lendário</span>
                    <span className="text-slate-300 font-bold">
                      {(GACHA_LEVEL_CONFIG[gachaLevel].rates.LENDÁRIO * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div>
                    <span className="text-[#00FF88] block">Yggdrasil</span>
                    <span className="text-slate-300 font-bold">
                      {(GACHA_LEVEL_CONFIG[gachaLevel].rates.YGGDRASIL * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Visual de Invocação ou Resultado */}
              <div className="h-56 rounded-xl bg-gradient-to-b from-[#080F12] to-[#050708] border border-[#263238] flex flex-col items-center justify-center p-4 relative overflow-hidden mb-5">
                {isDrawingGacha ? (
                  <motion.div
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <Sparkles className="w-12 h-12 text-[#00FF88]" />
                    <span className="text-xs font-mono text-[#00FF88] tracking-widest">
                      SINTETIZANDO DADOS VITAIS...
                    </span>
                  </motion.div>
                ) : gachaResult ? (
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="relative">
                      <TreeImageDisplay
                        tree={gachaResult.tree}
                        size="lg"
                        isUnlocked={true}
                        showFallbackBadge={true}
                        className="mb-2 shadow-lg"
                      />
                      {gachaResult.isDuplicate && (
                        <span className="absolute -top-1 -right-3 text-[9px] font-mono font-bold bg-amber-500 text-black px-1.5 py-0.5 rounded shadow">
                          DUPLICATA (+50 XP)
                        </span>
                      )}
                    </div>

                    <span
                      className="text-[11px] font-mono font-bold uppercase tracking-wider"
                      style={{ color: gachaResult.tree.accentColor }}
                    >
                      {gachaResult.tree.rarity}
                    </span>
                    <h4 className="font-display text-lg font-bold text-white">
                      {gachaResult.tree.name}
                    </h4>
                    <p className="text-xs text-slate-300 max-w-sm mt-1">
                      {gachaResult.tree.description}
                    </p>
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center text-center text-slate-500 gap-2">
                    <TreeDeciduous className="w-12 h-12 text-slate-600 animate-pulse" />
                    <span className="text-xs font-mono">
                      Acione a invocação quântica para obter novos espécimes
                    </span>
                  </div>
                )}
              </div>

              {/* Botões de Ação do Gacha */}
              <div className="flex items-center gap-3">
                {gachaResult ? (
                  <>
                    <button
                      onClick={() => handleGachaEquipNow(gachaResult.tree)}
                      disabled={isEquippingTree}
                      className="flex-1 py-3 px-4 rounded-lg bg-gradient-to-r from-[#00A878] to-[#00FF88] text-[#050708] font-display font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(0,255,136,0.4)] hover:brightness-110 active:scale-95 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-[#050708]" />
                      <span>{isEquippingTree ? 'EQUIPANDO...' : 'EQUIPAR AGORA'}</span>
                    </button>
                    <button
                      onClick={() => {
                        setGachaResult(null);
                        setIsGachaModalOpen(false);
                      }}
                      disabled={isEquippingTree}
                      className="flex-1 py-3 px-4 rounded-lg bg-[#11181C] hover:bg-[#263238] border border-[#263238] text-slate-300 font-display font-semibold text-xs tracking-wider uppercase transition-all cursor-pointer"
                    >
                      CONTINUAR
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleDrawGacha}
                    disabled={gachaPulls <= 0 || isDrawingGacha}
                    className={`flex-1 py-3 rounded-lg font-display font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      gachaPulls > 0 && !isDrawingGacha
                        ? 'bg-gradient-to-r from-[#00A878] to-[#00FF88] text-[#050708] hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] active:scale-95'
                        : 'bg-[#263238] text-slate-500 cursor-not-allowed opacity-60'
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>
                      {isDrawingGacha
                        ? 'INVOCANDO...'
                        : gachaPulls > 0
                        ? 'INVOCAR ESPÉCIME (1)'
                        : 'SEM TENTATIVAS'}
                    </span>
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ==================================================
          MODAL DE CONFIRMAÇÃO DE REINÍCIO DA SEÇÃO ATUAL
      ================================================== */}
      <AnimatePresence>
        {confirmRestartSectionPrompt && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="hud-card max-w-md w-full rounded-2xl p-6 sm:p-7 relative border-amber-500/50 shadow-[0_0_40px_rgba(245,158,11,0.25)] text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                <RotateCcw className="w-7 h-7 text-amber-400" />
              </div>

              <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest block font-bold mb-1">
                REINICIAR RODADA DA SEÇÃO
              </span>

              <h3 className="font-display text-lg font-bold text-white tracking-wide mb-2">
                Iniciar Nova Rodada #{currentSectionRound + 1}?
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Deseja liberar novamente as 15 perguntas desta seção (<strong className="text-white">{activeSubject.toUpperCase()}</strong> • <strong className="text-sky-300">{currentTurma}</strong> • <strong className="text-amber-400">{DIFFICULTY_CONFIG[activeDifficulty].label}</strong>) para uma nova rodada de treino deliberado?
              </p>

              <div className="p-2.5 rounded-lg bg-[#080F12] border border-[#263238] text-[11px] font-mono text-slate-400 mb-5 text-left">
                ℹ️ Seu XP acumulado, Árvores da coleção e conquistas de Renascimento <strong>permanecerão intactos</strong>. Apenas o histórico de perguntas desta seção será renovado.
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={handleRestartCurrentSection}
                  className="flex-1 py-2.5 px-3 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-display font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md active:scale-95"
                >
                  Sim, Reiniciar Rodada
                </button>
                <button
                  onClick={() => setConfirmRestartSectionPrompt(false)}
                  className="py-2.5 px-4 rounded-lg bg-[#11181C] hover:bg-[#263238] border border-[#263238] text-slate-300 font-mono text-xs cursor-pointer"
                >
                  Cancelar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ==================================================
          MODAL DE AUTENTICAÇÃO INTEGRADO POR CONTA GOOGLE (ADM)
      ================================================== */}
      <AnimatePresence>
        {isGoogleLoginModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="hud-card max-w-lg w-full rounded-2xl p-6 sm:p-7 relative border-amber-500/50 shadow-[0_0_40px_rgba(245,158,11,0.25)]"
            >
              <button
                onClick={() => {
                  setIsGoogleLoginModalOpen(false);
                  setGoogleAuthError(null);
                  setGoogleAuthSuccessNotice(null);
                }}
                className="absolute top-4 right-4 text-slate-400 hover:text-white font-mono text-sm px-2 py-1 rounded bg-[#11181C] hover:bg-[#263238] border border-[#263238] cursor-pointer"
              >
                ✕
              </button>

              <div className="text-center mb-5">
                <div className="w-13 h-13 mx-auto rounded-full bg-amber-500/10 border border-amber-500/50 flex items-center justify-center mb-2.5 shadow-[0_0_20px_rgba(245,158,11,0.25)]">
                  <ShieldCheck className="w-6 h-6 text-amber-400" />
                </div>
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest block font-bold">
                  AUTENTICAÇÃO INSTITUCIONAL GOOGLE
                </span>
                <h3 className="font-display text-xl font-bold text-white tracking-wide">
                  Acesso Docente & Administrador
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  O jogo opera por padrão em Modo Aluno. O acesso a comandos administrativos e relatórios exige autenticação com uma conta Google autorizada no servidor.
                </p>
              </div>

              {googleAuthError && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-3 rounded-lg bg-rose-950/60 border border-rose-500/50 text-rose-300 text-xs flex items-start gap-2"
                >
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>{googleAuthError}</span>
                </motion.div>
              )}

              {googleAuthSuccessNotice && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-3 rounded-lg bg-emerald-950/60 border border-[#00FF88]/50 text-emerald-300 text-xs flex items-start gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#00FF88] shrink-0 mt-0.5" />
                  <span>{googleAuthSuccessNotice}</span>
                </motion.div>
              )}

              {/* Lista Centralizada de Administradores Autorizados */}
              <div className="space-y-2 mb-4">
                <span className="text-xs font-mono text-slate-300 block font-semibold">
                  CONTAS INSTITUCIONAIS CADASTRADAS (LISTA FECHADA):
                </span>
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {OFFICIAL_ADMIN_LIST_INFO.map((admin) => (
                    <div
                      key={admin.email}
                      className="p-2.5 rounded-lg bg-[#080F12] border border-[#263238] flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-amber-500/40 transition-colors"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-mono text-white font-bold truncate">
                            {admin.email}
                          </span>
                          {admin.hasWarning && (
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-400 border border-amber-500/40 font-mono font-bold">
                              DOMÍNIO EXATO
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-slate-400 block font-mono">
                          {admin.role}
                        </span>
                        {admin.hasWarning && (
                          <span className="text-[9px] text-amber-300/80 block mt-0.5 font-mono">
                            {admin.warningText}
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() =>
                          handleGoogleSignIn({
                            emailHint: admin.email,
                            nameHint: admin.email.split('@')[0].replace(/\./g, ' '),
                          })
                        }
                        disabled={adminIsAuthenticating}
                        className="py-1.5 px-3 rounded bg-amber-500/20 hover:bg-amber-500/40 border border-amber-500/50 text-amber-300 font-mono text-xs font-bold whitespace-nowrap cursor-pointer transition-all active:scale-95 disabled:opacity-50"
                      >
                        {adminIsAuthenticating ? 'Conectando...' : 'Conectar'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Teste com Conta Aluno Comum (Demonstração de Segurança) */}
              <div className="p-3 rounded-lg bg-[#080F12] border border-[#1A2328] mb-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-mono text-slate-400 font-semibold">
                    TESTAR CONTA NÃO AUTORIZADA (MODO ALUNO):
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 mb-2">
                  Demonstra que e-mails externos ou contas de alunos autenticam normalmente como estudante sem conceder nenhum privilégio de administrador.
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      handleGoogleSignIn({
                        emailHint: 'aluno.regular@escola.pr.gov.br',
                        nameHint: 'Aluno Regular',
                      })
                    }
                    disabled={adminIsAuthenticating}
                    className="flex-1 py-1.5 px-2.5 rounded bg-[#11181C] hover:bg-[#263238] border border-slate-700 text-slate-300 font-mono text-xs cursor-pointer text-center"
                  >
                    Simular Login de Aluno
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setIsGoogleLoginModalOpen(false);
                    setGoogleAuthError(null);
                    setGoogleAuthSuccessNotice(null);
                  }}
                  className="py-2 px-4 rounded-lg bg-[#11181C] hover:bg-[#263238] border border-[#263238] text-slate-400 text-xs font-mono cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ==================================================
          PAINEL DE ADMINISTRADOR COMPLETO (3 ABAS)
      ================================================== */}
      <AnimatePresence>
        {isAdmModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="hud-card max-w-4xl w-full max-h-[90vh] flex flex-col rounded-2xl p-5 sm:p-7 relative border-amber-500/40 shadow-[0_0_50px_rgba(245,158,11,0.25)] overflow-hidden"
            >
              {/* Header do Painel */}
              <div className="flex items-start justify-between border-b border-[#263238] pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.25)]">
                    <Wrench className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/40 font-bold tracking-widest uppercase">
                        ROOT / DOCENTE ADM
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        Sessão ativa (~{adminSessionRemainingMin} min)
                      </span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-wide">
                      Painel de Controle e Gestão da Matriz
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleAdminLogout}
                    className="px-2.5 py-1.5 rounded-lg bg-rose-950/60 hover:bg-rose-900 border border-rose-600/50 text-rose-300 font-mono text-xs flex items-center gap-1 cursor-pointer transition-all"
                    title="Encerrar sessão administrativa e voltar ao Modo Aluno"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Sair do Modo ADM</span>
                  </button>
                  <button
                    onClick={() => setIsAdmModalOpen(false)}
                    className="text-slate-400 hover:text-white font-mono text-sm px-2.5 py-1.5 rounded bg-[#11181C] hover:bg-[#263238] border border-[#263238] cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Navegação entre Abas */}
              <div className="flex items-center gap-2 border-b border-[#263238] pb-3 mb-4 flex-wrap">
                <button
                  onClick={() => setAdminActiveTab('trees')}
                  className={`px-3 py-2 rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                    adminActiveTab === 'trees'
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/60 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                      : 'text-slate-400 hover:text-white hover:bg-[#11181C] border border-transparent'
                  }`}
                >
                  <TreeDeciduous className="w-4 h-4 text-purple-400" />
                  <span>Gerador de Árvores (Prompt Mestre)</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-purple-500/30 text-purple-200 border border-purple-400/40 font-mono font-bold">
                    PROMPT MESTRE
                  </span>
                </button>

                <button
                  onClick={() => setAdminActiveTab('sections')}
                  className={`px-3 py-2 rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                    adminActiveTab === 'sections'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-[0_0_12px_rgba(245,158,11,0.2)]'
                      : 'text-slate-400 hover:text-white hover:bg-[#11181C] border border-transparent'
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Banco de Questões & Seções (56)</span>
                </button>

                <button
                  onClick={() => setAdminActiveTab('tests')}
                  className={`px-3 py-2 rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                    adminActiveTab === 'tests'
                      ? 'bg-[#00FF88]/20 text-[#00FF88] border border-[#00FF88]/50 shadow-[0_0_12px_rgba(0,255,136,0.2)]'
                      : 'text-slate-400 hover:text-white hover:bg-[#11181C] border border-transparent'
                  }`}
                >
                  <Zap className="w-4 h-4" />
                  <span>Ferramentas de Teste & Progresso</span>
                </button>

                <button
                  onClick={() => setAdminActiveTab('info')}
                  className={`px-3 py-2 rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                    adminActiveTab === 'info'
                      ? 'bg-sky-500/20 text-sky-300 border border-sky-500/50 shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                      : 'text-slate-400 hover:text-white hover:bg-[#11181C] border border-transparent'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Segurança & Sessão</span>
                </button>
              </div>

              {/* Conteúdo com Scroll */}
              <div className="flex-1 overflow-y-auto pr-1 space-y-4">
                {/* ABA 1: BANCO DE QUESTÕES & SEÇÕES */}
                {adminActiveTab === 'sections' && (
                  <div className="space-y-4">
                    {/* Resumo Estatístico */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="p-3 rounded-xl bg-[#080F12] border border-[#263238] text-center">
                        <span className="text-[10px] font-mono text-slate-400 block uppercase">QUESTÕES TOTAIS</span>
                        <span className="font-display text-xl font-bold text-white">840</span>
                        <span className="text-[10px] text-slate-500 block">15 por seção</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#080F12] border border-[#263238] text-center">
                        <span className="text-[10px] font-mono text-slate-400 block uppercase">TOTAL DE SEÇÕES</span>
                        <span className="font-display text-xl font-bold text-[#00FF88]">56</span>
                        <span className="text-[10px] text-slate-500 block">2 mat. × 7 turmas × 4 dif.</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#080F12] border border-[#263238] text-center">
                        <span className="text-[10px] font-mono text-slate-400 block uppercase">SEÇÕES COM USO</span>
                        <span className="font-display text-xl font-bold text-sky-300">
                          {getAllSectionKeys().filter((k) => {
                            const [s, g, d] = k.split(':') as [SubjectType, GradeType, DifficultyType];
                            return getSectionProgress(s, g, d).usedCount > 0;
                          }).length}
                        </span>
                        <span className="text-[10px] text-slate-500 block">iniciadas no jogo</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#080F12] border border-[#263238] text-center">
                        <span className="text-[10px] font-mono text-slate-400 block uppercase">SEÇÕES CONCLUÍDAS</span>
                        <span className="font-display text-xl font-bold text-amber-400">
                          {getAllSectionKeys().filter((k) => {
                            const [s, g, d] = k.split(':') as [SubjectType, GradeType, DifficultyType];
                            return getSectionProgress(s, g, d).isCompleted;
                          }).length}
                        </span>
                        <span className="text-[10px] text-slate-500 block">15/15 dominadas</span>
                      </div>
                    </div>

                    {/* Barra de Filtros e Ação Global */}
                    <div className="p-3.5 rounded-xl bg-[#080F12] border border-[#263238] flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300">
                          <Filter className="w-3.5 h-3.5 text-amber-400" />
                          <span>Matéria:</span>
                          <select
                            value={adminSectionFilterSubject}
                            onChange={(e) => setAdminSectionFilterSubject(e.target.value as 'todos' | SubjectType)}
                            className="bg-[#11181C] border border-[#263238] text-white text-xs rounded px-2 py-1 outline-none"
                          >
                            <option value="todos">Todas (Matemática + Ciências)</option>
                            <option value="matematica">Matemática</option>
                            <option value="ciencias">Ciências</option>
                          </select>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300">
                          <span>Turma:</span>
                          <select
                            value={adminSectionFilterGrade}
                            onChange={(e) => setAdminSectionFilterGrade(e.target.value as 'todos' | GradeType)}
                            className="bg-[#11181C] border border-[#263238] text-white text-xs rounded px-2 py-1 outline-none"
                          >
                            <option value="todos">Todas as Turmas (6º ao 3º EM)</option>
                            {TURMAS_LIST.map((t) => (
                              <option key={t.id} value={t.id}>
                                {t.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Botão de Reiniciar TODAS as seções */}
                      {!adminConfirmResetAllSections ? (
                        <button
                          onClick={() => setAdminConfirmResetAllSections(true)}
                          className="px-3 py-1.5 rounded-lg bg-rose-950/70 hover:bg-rose-900 border border-rose-600/60 hover:border-rose-500 text-rose-200 text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer transition-all"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Reiniciar TODAS as 56 Seções</span>
                        </button>
                      ) : (
                        <div className="flex items-center gap-2 bg-rose-950 p-1.5 rounded-lg border border-rose-500">
                          <span className="text-[11px] font-mono text-white font-bold px-2">
                            Confirma zerar histórico de TODAS as 56 seções?
                          </span>
                          <button
                            onClick={handleAdminResetAllSectionsAction}
                            className="px-2.5 py-1 rounded bg-rose-600 hover:bg-rose-500 text-white font-mono text-xs font-bold cursor-pointer"
                          >
                            SIM, ZERAR TODAS
                          </button>
                          <button
                            onClick={() => setAdminConfirmResetAllSections(false)}
                            className="px-2 py-1 rounded bg-[#11181C] text-slate-300 font-mono text-xs cursor-pointer"
                          >
                            Cancelar
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Tabela de Seções */}
                    <div className="rounded-xl border border-[#263238] overflow-hidden">
                      <div className="overflow-x-auto max-h-[380px]">
                        <table className="w-full text-left text-xs font-mono">
                          <thead className="bg-[#11181C] text-slate-400 sticky top-0 border-b border-[#263238]">
                            <tr>
                              <th className="p-3">MATÉRIA</th>
                              <th className="p-3">TURMA / ANO</th>
                              <th className="p-3">DIFICULDADE</th>
                              <th className="p-3">QUESTÕES USADAS</th>
                              <th className="p-3">RODADA</th>
                              <th className="p-3">STATUS</th>
                              <th className="p-3 text-right">AÇÕES</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#1A2328] bg-[#080F12]">
                            {(() => {
                              const subjects: SubjectType[] = ['matematica', 'ciencias'];
                              const grades: GradeType[] = [
                                '6º ano',
                                '7º ano',
                                '8º ano',
                                '9º ano',
                                '1º ano EM',
                                '2º ano EM',
                                '3º ano EM',
                              ];
                              const difficulties: DifficultyType[] = ['facil', 'medio', 'dificil', 'expert'];
                              const rows: { subject: SubjectType; grade: GradeType; difficulty: DifficultyType }[] = [];

                              for (const sub of subjects) {
                                if (adminSectionFilterSubject !== 'todos' && sub !== adminSectionFilterSubject) continue;
                                for (const gr of grades) {
                                  if (adminSectionFilterGrade !== 'todos' && gr !== adminSectionFilterGrade) continue;
                                  for (const diff of difficulties) {
                                    rows.push({ subject: sub, grade: gr, difficulty: diff });
                                  }
                                }
                              }

                              return rows.map((sec) => {
                                const prog = getSectionProgress(sec.subject, sec.grade, sec.difficulty);
                                const sectionKey = `${sec.subject}:${sec.grade}:${sec.difficulty}`;
                                const isCurrent =
                                  sec.subject === activeSubject &&
                                  sec.grade === currentTurma &&
                                  sec.difficulty === activeDifficulty;

                                return (
                                  <tr
                                    key={sectionKey}
                                    className={`hover:bg-[#11181C]/60 transition-colors ${
                                      isCurrent ? 'bg-[#00FF88]/5 border-l-2 border-[#00FF88]' : ''
                                    }`}
                                  >
                                    <td className="p-3 font-bold">
                                      <span
                                        className={`px-2 py-0.5 rounded text-[10px] uppercase ${
                                          sec.subject === 'matematica'
                                            ? 'bg-emerald-950/60 text-[#00FF88] border border-emerald-700/40'
                                            : 'bg-sky-950/60 text-sky-300 border border-sky-700/40'
                                        }`}
                                      >
                                        {sec.subject}
                                      </span>
                                    </td>
                                    <td className="p-3 text-slate-200">{sec.grade}</td>
                                    <td className="p-3">
                                      <span
                                        className="font-bold"
                                        style={{ color: DIFFICULTY_CONFIG[sec.difficulty].color }}
                                      >
                                        {DIFFICULTY_CONFIG[sec.difficulty].label}
                                      </span>
                                    </td>
                                    <td className="p-3">
                                      <div className="flex items-center gap-2">
                                        <div className="w-16 h-2 bg-[#1A2328] rounded-full overflow-hidden">
                                          <div
                                            className="h-full bg-gradient-to-r from-[#00A878] to-[#00FF88]"
                                            style={{
                                              width: `${(prog.usedCount / prog.totalCount) * 100}%`,
                                            }}
                                          />
                                        </div>
                                        <span className="text-slate-300">
                                          {prog.usedCount} / {prog.totalCount}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="p-3 text-amber-400 font-bold">#{prog.round}</td>
                                    <td className="p-3">
                                      {prog.isCompleted ? (
                                        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-bold">
                                          CONCLUÍDA
                                        </span>
                                      ) : prog.usedCount > 0 ? (
                                        <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/40 text-[10px]">
                                          EM CURSO
                                        </span>
                                      ) : (
                                        <span className="text-slate-500 text-[10px]">INÉDITA</span>
                                      )}
                                    </td>
                                    <td className="p-3 text-right">
                                      {adminConfirmResetSectionKey === sectionKey ? (
                                        <div className="inline-flex items-center gap-1.5">
                                          <button
                                            onClick={() =>
                                              handleAdminResetSpecificSection(sec.subject, sec.grade, sec.difficulty)
                                            }
                                            className="px-2 py-0.5 rounded bg-rose-600 hover:bg-rose-500 text-white font-bold text-[10px] cursor-pointer"
                                          >
                                            Sim, Zerar
                                          </button>
                                          <button
                                            onClick={() => setAdminConfirmResetSectionKey(null)}
                                            className="px-1.5 py-0.5 rounded bg-[#263238] text-slate-300 text-[10px] cursor-pointer"
                                          >
                                            ✕
                                          </button>
                                        </div>
                                      ) : (
                                        <button
                                          onClick={() => setAdminConfirmResetSectionKey(sectionKey)}
                                          disabled={prog.usedCount === 0}
                                          className={`px-2 py-1 rounded font-mono text-[11px] transition-all cursor-pointer ${
                                            prog.usedCount > 0
                                              ? 'bg-[#11181C] hover:bg-amber-950/60 border border-slate-700 hover:border-amber-500 text-amber-300'
                                              : 'text-slate-600 border border-transparent opacity-40 cursor-not-allowed'
                                          }`}
                                          title="Reinicia apenas as questões desta seção"
                                        >
                                          Reiniciar Seção
                                        </button>
                                      )}
                                    </td>
                                  </tr>
                                );
                              });
                            })()}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {/* ABA 2: FERRAMENTAS DE TESTE & PROGRESSO */}
                {adminActiveTab === 'tests' && (
                  <div className="space-y-4">
                    {/* Modo Tudo Liberado */}
                    <div className="p-4 rounded-xl bg-gradient-to-r from-[#063B3B]/60 via-[#062A43]/50 to-[#080F12] border border-[#00FF88]/60 shadow-[0_0_25px_rgba(0,255,136,0.25)] space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#00FF88]">
                          <Unlock className="w-4 h-4 text-[#00FF88]" />
                          <span>MODO TUDO LIBERADO (DESBLOQUEIO COMPLETO)</span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00FF88]/20 text-[#00FF88] font-bold border border-[#00FF88]/40">
                          ALL-ACCESS
                        </span>
                      </div>

                      <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                        Desbloqueia instantaneamente <strong>todas as 4 dificuldades</strong> (Fácil, Médio, Difícil e Expert), <strong>100% da coleção de árvores cósmicas</strong> (as 27 espécimes incluindo as Lendárias e Yggdrasil), eleva o <strong>Gacha ao Nível Máximo (Lv. 5)</strong> com <strong>99 giros</strong>, ativa <strong>Renascimento 10 (Prestígio Máximo)</strong> e define o jogador no <strong>Nível 30 RPG (12.000 XP)</strong>.
                      </p>

                      <button
                        onClick={handleAdminUnlockAll}
                        className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-[#00A878] via-[#00FF88] to-[#087EA4] hover:shadow-[0_0_25px_rgba(0,255,136,0.5)] text-[#050708] font-display font-extrabold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-lg"
                      >
                        <Unlock className="w-4 h-4 text-[#050708]" />
                        <span>LIBERAR TUDO AGORA</span>
                        <Sparkles className="w-3.5 h-3.5 text-[#050708]" />
                      </button>
                    </div>

                    {/* Atalhos de Teste */}
                    <div className="p-4 rounded-xl bg-[#080F12] border border-[#062A43] space-y-3">
                      <span className="text-xs font-mono text-sky-400 uppercase tracking-wider block font-bold">
                        ⚡ Atalhos Rápidos para Avaliação:
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
                        <button
                          onClick={() => handleAdminAddXp(1000)}
                          className="p-2.5 rounded bg-[#11181C] hover:bg-[#263238] border border-[#263238] hover:border-sky-400 text-slate-200 transition-all cursor-pointer text-center"
                        >
                          +1.000 XP
                        </button>
                        <button
                          onClick={() => handleAdminAddXp(10000)}
                          className="p-2.5 rounded bg-[#11181C] hover:bg-[#263238] border border-[#263238] hover:border-sky-400 text-slate-200 transition-all cursor-pointer text-center"
                        >
                          +10.000 XP
                        </button>
                        <button
                          onClick={() => handleAdminAddXp(50000)}
                          className="p-2.5 rounded bg-[#11181C] hover:bg-[#263238] border border-[#263238] hover:border-sky-400 text-slate-200 transition-all cursor-pointer text-center"
                        >
                          +50.000 XP
                        </button>
                        <button
                          onClick={() => handleAdminAddGachaPulls(5)}
                          className="p-2.5 rounded bg-[#11181C] hover:bg-[#263238] border border-[#263238] hover:border-emerald-400 text-emerald-300 transition-all cursor-pointer text-center"
                        >
                          +5 Giros Gacha
                        </button>
                        <button
                          onClick={handleAdminSetXpForRebirth}
                          className="p-2.5 rounded bg-[#11181C] hover:bg-[#263238] border border-amber-500/40 hover:border-amber-400 text-amber-300 font-bold transition-all cursor-pointer text-center"
                        >
                          XP para Renascer
                        </button>
                        <button
                          onClick={handleAdminAdvanceRebirth}
                          className="p-2.5 rounded bg-[#11181C] hover:bg-[#263238] border border-amber-400/40 hover:border-amber-300 text-amber-400 font-bold transition-all cursor-pointer text-center"
                        >
                          +1 Renascimento
                        </button>
                      </div>
                    </div>

                    {/* Reset Geral e Reset de Sessão */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Sessão */}
                      <div className="p-3.5 rounded-xl bg-[#080F12] border border-[#063B3B] space-y-2">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#00FF88]">
                          <RotateCcw className="w-4 h-4" />
                          <span>REINICIAR SESSÃO ATUAL</span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                          Zera a pontuação e o cronômetro da rodada atual mantendo seu XP, árvores e renascimentos salvos.
                        </p>
                        <button
                          onClick={() => handleAdminResetGame(false)}
                          className="w-full py-2 px-3 rounded-lg bg-[#063B3B]/40 hover:bg-[#063B3B]/70 border border-[#00A878]/50 text-[#00FF88] font-mono text-xs cursor-pointer"
                        >
                          Reiniciar Sessão
                        </button>
                      </div>

                      {/* Fábrica */}
                      <div className="p-3.5 rounded-xl bg-[#080F12] border border-rose-900/40 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-400">
                          <Trash2 className="w-4 h-4" />
                          <span>RESET GERAL DE FÁBRICA</span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                          Apaga todo o progresso do <code className="text-amber-400 font-mono">localStorage</code> e restaura o jogo inicial.
                        </p>
                        {!admConfirmReset ? (
                          <button
                            onClick={() => setAdmConfirmReset(true)}
                            className="w-full py-2 px-3 rounded-lg bg-rose-950/60 hover:bg-rose-900 border border-rose-600/50 text-rose-200 font-mono text-xs cursor-pointer"
                          >
                            Zerar Todo o Jogo
                          </button>
                        ) : (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleAdminResetGame(true)}
                              className="flex-1 py-1.5 rounded bg-rose-600 hover:bg-rose-500 text-white font-mono text-xs font-bold cursor-pointer"
                            >
                              SIM, ZERAR TUDO
                            </button>
                            <button
                              onClick={() => setAdmConfirmReset(false)}
                              className="px-2 py-1.5 rounded bg-[#11181C] text-slate-300 font-mono text-xs cursor-pointer"
                            >
                              Cancelar
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* ABA 3: SEGURANÇA & AUDITORIA NO SERVIDOR */}
                {adminActiveTab === 'info' && (
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-[#080F12] border border-sky-500/40 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-400">
                        <ShieldCheck className="w-5 h-5 text-sky-400" />
                        <span>SESSÃO GOOGLE AUTENTICADA NO SERVIDOR</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                        <div className="p-3 rounded-lg bg-[#11181C] border border-[#263238]">
                          <span className="text-slate-400 block text-[10px]">USUÁRIO ATIVO:</span>
                          <span className="text-[#00FF88] font-bold text-sm truncate block">
                            {googleUser?.email || 'Administrador Autorizado'}
                          </span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#11181C] border border-[#263238]">
                          <span className="text-slate-400 block text-[10px]">NÍVEL DE ACESSO:</span>
                          <span className="text-amber-400 font-bold text-sm">DOCENTE / ROOT ADMINISTRATIVO</span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#11181C] border border-[#263238]">
                          <span className="text-slate-400 block text-[10px]">AUTORIZAÇÃO:</span>
                          <span className="text-slate-200">Backend Server Session (Bearer Token)</span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#11181C] border border-[#263238]">
                          <span className="text-slate-400 block text-[10px]">DURAÇÃO ESTIMADA:</span>
                          <span className="text-slate-200">~{adminSessionRemainingMin} minutos</span>
                        </div>
                      </div>

                      <button
                        onClick={handleAdminLogout}
                        className="w-full py-3 px-4 rounded-lg bg-rose-950/70 hover:bg-rose-900 border border-rose-600/60 text-rose-200 font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95"
                      >
                        <LogOut className="w-4 h-4 text-rose-300" />
                        <span>ENCERRAR SESSÃO AGORA (RETORNAR AO MODO ALUNO)</span>
                      </button>
                    </div>

                    {/* Contas Autorizadas & Avisos de Domínio */}
                    <div className="p-4 rounded-xl bg-[#080F12] border border-[#263238] space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>LISTA FECHADA DE CONTAS AUTORIZADAS</span>
                      </div>
                      <div className="space-y-2">
                        {OFFICIAL_ADMIN_LIST_INFO.map((a) => (
                          <div
                            key={a.email}
                            className="p-2.5 rounded-lg bg-[#11181C] border border-[#263238] flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono"
                          >
                            <div>
                              <span className="text-white font-bold block">{a.email}</span>
                              <span className="text-slate-400 text-[10px]">{a.role}</span>
                            </div>
                            {a.hasWarning ? (
                              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                                ⚠️ escola.pr.gov (Sem terminação .br mantido estritamente)
                              </span>
                            ) : (
                              <span className="text-[10px] text-[#00FF88]">✓ Domínio Institucional PR</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Logs de Auditoria do Servidor */}
                    <div className="p-4 rounded-xl bg-[#080F12] border border-[#263238] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
                          <Cpu className="w-4 h-4 text-sky-400" />
                          <span>REGISTRO DE AUDITORIA NO SERVIDOR (AUDIT LOGS)</span>
                        </span>
                        <button
                          onClick={() => fetchServerAuditLogs().then(setServerAuditLogsList)}
                          className="text-[10px] font-mono text-sky-400 hover:underline cursor-pointer"
                        >
                          Atualizar Logs
                        </button>
                      </div>

                      <div className="max-h-48 overflow-y-auto space-y-1.5 font-mono text-[11px] pr-1">
                        {serverAuditLogsList.length > 0 ? (
                          serverAuditLogsList.map((log) => (
                            <div
                              key={log.id}
                              className="p-2 rounded bg-[#11181C] border border-[#1A2328] text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-amber-400 font-bold">[{log.action}]</span>
                                <span className="text-slate-200">{log.adminEmail}</span>
                              </div>
                              <span className="text-[10px] text-slate-500">
                                {new Date(log.timestamp).toLocaleTimeString()}
                              </span>
                            </div>
                          ))
                        ) : (
                          <div className="text-xs text-slate-500 text-center py-3">
                            Nenhuma ação registrada nesta sessão.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* ABA 4: GERADOR DE ÁRVORES MÍSTICAS POR RARIDADE (PROMPT MESTRE) */}
                {adminActiveTab === 'trees' && (() => {
                  const activePreset =
                    ALL_27_TREES.find((t) => t.id === generatorSelectedTreeId) ||
                    ALL_27_TREES[ALL_27_TREES.length - 1];
                  const effectiveTreeName = generatorCustomName.trim() || activePreset.name;
                  const currentGenerated = generateMasterTreePrompt({
                    name: effectiveTreeName,
                    rarity: generatorRarity,
                    themeConcept: generatorCustomConcept || undefined,
                    preferredPalette: generatorCustomPalette || undefined,
                  });

                  const copyToClipboard = (text: string, type: 'master' | 'compact') => {
                    try {
                      navigator.clipboard.writeText(text);
                      setGeneratorPromptCopied(type);
                      setTimeout(() => setGeneratorPromptCopied(null), 3000);
                    } catch {
                      // Fallback silencioso
                    }
                  };

                  const selectPreset = (preset: typeof activePreset) => {
                    setGeneratorSelectedTreeId(preset.id);
                    setGeneratorCustomName('');
                    setGeneratorRarity(preset.rarity);
                    setGeneratorCustomConcept(preset.concept);
                    setGeneratorCustomPalette(preset.accentColor);
                  };

                  return (
                    <div className="space-y-6">
                      {/* Banner de Cabeçalho do Prompt Mestre */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-950/80 via-[#062A43]/70 to-[#080F12] border border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.25)] relative overflow-hidden">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/30 text-purple-200 border border-purple-400/50 font-bold uppercase tracking-wider">
                                ⚡ PAINEL ADM — GERADOR OFICIAL
                              </span>
                              <span className="text-[10px] font-mono text-emerald-400 font-bold">
                                27/27 Árvores Mapeadas
                              </span>
                            </div>
                            <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide flex items-center gap-2">
                              <span>GERADOR DE ÁRVORES MÍSTICAS</span>
                              <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
                            </h3>
                            <p className="text-xs text-slate-300 mt-1 max-w-2xl font-sans leading-relaxed">
                              O <strong>nome de cada árvore</strong> determina sua anatomia, materiais, silhueta e efeitos mágicos. Cada exemplar é concebido como um <strong>asset 2D colecionável</strong> em estilo Neo-Brutalista / Flat Cartunesco Vibrante, com contornos escuros, cel-shading em blocos e fundo branco puro. A <strong>Yggdrasil é o ápice cósmico absoluto</strong> que supera todas as demais em majestade e poder.
                            </p>
                          </div>

                          <div className="flex items-center gap-2 self-start sm:self-center">
                            <button
                              onClick={() => copyToClipboard(currentGenerated.masterPrompt, 'master')}
                              className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.4)] active:scale-95"
                            >
                              {generatorPromptCopied === 'master' ? (
                                <>
                                  <Check className="w-4 h-4 text-emerald-300" />
                                  <span>Prompt Copiado!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-4 h-4" />
                                  <span>Copiar Prompt Mestre</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* 1. DIREÇÃO ARTÍSTICA UTILIZADA ATÉ AGORA */}
                      <div className="p-4 rounded-xl bg-[#080F12] border border-[#263238] space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                            <Palette className="w-4 h-4 text-sky-400" />
                            <span>1. Direção Artística Global (Estilo Visual Oficial)</span>
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            Isolamento Total para Assets 2D
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs font-sans">
                          <div className="p-3 rounded-lg bg-[#11181C] border border-[#1A2328] space-y-1">
                            <span className="text-[10px] font-mono text-emerald-400 font-bold block uppercase">
                              ESTILO VISUAL
                            </span>
                            <div className="text-white font-medium">Neo-Brutalista / Flat Cartunesco</div>
                            <div className="text-[11px] text-slate-400">
                              Inspirado em assets de jogos 2D colecionáveis com legibilidade nítida em qualquer tamanho.
                            </div>
                          </div>

                          <div className="p-3 rounded-lg bg-[#11181C] border border-[#1A2328] space-y-1">
                            <span className="text-[10px] font-mono text-amber-400 font-bold block uppercase">
                              CONTORNOS & LINHAS
                            </span>
                            <div className="text-white font-medium">Escuros & Grossos (#0F172A)</div>
                            <div className="text-[11px] text-slate-400">
                              Traçados consistentes com divisões internas que definem anatomia e volume sem borrões.
                            </div>
                          </div>

                          <div className="p-3 rounded-lg bg-[#11181C] border border-[#1A2328] space-y-1">
                            <span className="text-[10px] font-mono text-sky-400 font-bold block uppercase">
                              LUZ & SOMBREAMENTO
                            </span>
                            <div className="text-white font-medium">Cel Shading em Blocos</div>
                            <div className="text-[11px] text-slate-400">
                              Zonas nítidas de luz e sombra; sem texturas foto-realistas e sem degradês suaves dependentes.
                            </div>
                          </div>

                          <div className="p-3 rounded-lg bg-[#11181C] border border-[#1A2328] space-y-1">
                            <span className="text-[10px] font-mono text-purple-400 font-bold block uppercase">
                              COMPOSIÇÃO & FUNDO
                            </span>
                            <div className="text-white font-medium">Fundo Branco Puro (#FFFFFF)</div>
                            <div className="text-[11px] text-slate-400">
                              Árvore inteira isolada de frente (copa, tronco e raízes sem cortes). Sem HUD, cenário ou personagens.
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 2. MOSTRUÁRIO DAS 5 RARIDADES (ASSETS REAIS GERADOS) */}
                      <div className="p-4 rounded-xl bg-[#080F12] border border-[#263238] space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                            <Layers className="w-4 h-4 text-amber-400" />
                            <span>2. Hierarquia Visual por Raridade (Mostruário de Assets Reais)</span>
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            Comum → Raro → Épico → Lendário → Yggdrasil
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                          {/* COMUM */}
                          <div
                            onClick={() => {
                              const p = ALL_27_TREES.find((t) => t.id === 'tree-c1');
                              if (p) selectPreset(p);
                            }}
                            className="p-3 rounded-xl bg-[#11181C] border border-emerald-500/30 hover:border-emerald-400 transition-all cursor-pointer flex flex-col justify-between group"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40">
                                  COMUM
                                </span>
                                <span className="text-[10px] text-slate-400 font-mono">Tier 1</span>
                              </div>
                              <div className="w-full aspect-square rounded-lg overflow-hidden mb-2 p-1 flex items-center justify-center">
                                <TreeImageDisplay tree={getTreeById('tree-c1')} size="lg" className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                              </div>
                              <div className="font-display text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                                Broto de Silício
                              </div>
                              <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-2">
                                Silhueta compacta, tronco simples, placas de silício e magia sutil.
                              </p>
                            </div>
                            <div className="mt-2 pt-2 border-t border-[#1A2328] text-[10px] font-mono text-emerald-400 font-semibold text-right">
                              Carregar no Gerador →
                            </div>
                          </div>

                          {/* RARO */}
                          <div
                            onClick={() => {
                              const p = ALL_27_TREES.find((t) => t.id === 'tree-r1');
                              if (p) selectPreset(p);
                            }}
                            className="p-3 rounded-xl bg-[#11181C] border border-sky-500/30 hover:border-sky-400 transition-all cursor-pointer flex flex-col justify-between group"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 font-bold border border-sky-500/40">
                                  RARO
                                </span>
                                <span className="text-[10px] text-slate-400 font-mono">Tier 2</span>
                              </div>
                              <div className="w-full aspect-square rounded-lg overflow-hidden mb-2 p-1 flex items-center justify-center">
                                <TreeImageDisplay tree={getTreeById('tree-r1')} size="lg" className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                              </div>
                              <div className="font-display text-xs font-bold text-white group-hover:text-sky-300 transition-colors">
                                Carvalho Quântico
                              </div>
                              <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-2">
                                Copa assimétrica em camadas, folhas de cristal azul e nós de superposição.
                              </p>
                            </div>
                            <div className="mt-2 pt-2 border-t border-[#1A2328] text-[10px] font-mono text-sky-400 font-semibold text-right">
                              Carregar no Gerador →
                            </div>
                          </div>

                          {/* ÉPICO */}
                          <div
                            onClick={() => {
                              const p = ALL_27_TREES.find((t) => t.id === 'tree-e2');
                              if (p) selectPreset(p);
                            }}
                            className="p-3 rounded-xl bg-[#11181C] border border-pink-500/30 hover:border-pink-400 transition-all cursor-pointer flex flex-col justify-between group"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-pink-500/20 text-pink-300 font-bold border border-pink-500/40">
                                  ÉPICO
                                </span>
                                <span className="text-[10px] text-slate-400 font-mono">Tier 3</span>
                              </div>
                              <div className="w-full aspect-square rounded-lg overflow-hidden mb-2 p-1 flex items-center justify-center">
                                <TreeImageDisplay tree={getTreeById('tree-e2')} size="lg" className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                              </div>
                              <div className="font-display text-xs font-bold text-white group-hover:text-pink-300 transition-colors">
                                Cerejeira de Plasma
                              </div>
                              <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-2">
                                Tronco de obsidiana retorcido, pétalas de plasma magenta e arcos energéticos.
                              </p>
                            </div>
                            <div className="mt-2 pt-2 border-t border-[#1A2328] text-[10px] font-mono text-pink-400 font-semibold text-right">
                              Carregar no Gerador →
                            </div>
                          </div>

                          {/* LENDÁRIO */}
                          <div
                            onClick={() => {
                              const p = ALL_27_TREES.find((t) => t.id === 'tree-l1');
                              if (p) selectPreset(p);
                            }}
                            className="p-3 rounded-xl bg-[#11181C] border border-amber-500/30 hover:border-amber-400 transition-all cursor-pointer flex flex-col justify-between group"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40">
                                  LENDÁRIO
                                </span>
                                <span className="text-[10px] text-slate-400 font-mono">Tier 4</span>
                              </div>
                              <div className="w-full aspect-square rounded-lg overflow-hidden mb-2 p-1 flex items-center justify-center">
                                <TreeImageDisplay tree={getTreeById('tree-l1')} size="lg" className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                              </div>
                              <div className="font-display text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                                Árvore da Singularidade
                              </div>
                              <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-2">
                                Buraco negro estelar central, anéis de acreção e raízes gravitacionais monumentais.
                              </p>
                            </div>
                            <div className="mt-2 pt-2 border-t border-[#1A2328] text-[10px] font-mono text-amber-400 font-semibold text-right">
                              Carregar no Gerador →
                            </div>
                          </div>

                          {/* YGGDRASIL */}
                          <div
                            onClick={() => {
                              const p = ALL_27_TREES.find((t) => t.id === 'tree-y1');
                              if (p) selectPreset(p);
                            }}
                            className="p-3 rounded-xl bg-gradient-to-b from-purple-950/60 to-[#11181C] border border-purple-500/60 hover:border-purple-300 transition-all cursor-pointer flex flex-col justify-between group shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-500/30 text-purple-200 font-extrabold border border-purple-400/60 shadow-[0_0_8px_rgba(168,85,247,0.4)]">
                                  👑 ÁPICE
                                </span>
                                <span className="text-[10px] text-purple-300 font-mono font-bold">SUPREMO</span>
                              </div>
                              <div className="w-full aspect-square rounded-lg overflow-hidden mb-2 p-1 flex items-center justify-center shadow-inner">
                                <TreeImageDisplay tree={getTreeById('tree-y1')} size="lg" className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                              </div>
                              <div className="font-display text-xs font-bold text-purple-200 group-hover:text-purple-100 transition-colors">
                                Yggdrasil
                              </div>
                              <p className="text-[11px] text-purple-300/80 mt-0.5 line-clamp-2">
                                O eixo absoluto dos mundos, glicínias astrais, runas sagradas e poder cósmico máximo.
                              </p>
                            </div>
                            <div className="mt-2 pt-2 border-t border-purple-900/60 text-[10px] font-mono text-purple-300 font-bold text-right">
                              Carregar no Gerador →
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 3. ESTAÇÃO INTERATIVA DE GERAÇÃO (PLAYGROUND) */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-[#080F12] border border-purple-500/40 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#263238] pb-3">
                          <div className="flex items-center gap-2">
                            <Wand2 className="w-5 h-5 text-purple-400" />
                            <span className="font-display text-base font-bold text-white tracking-wide">
                              ESTAÇÃO DO PROMPT MESTRE (CONFIGURADOR)
                            </span>
                          </div>
                          <span className="text-xs font-mono text-slate-400">
                            Árvore Ativa: <strong className="text-white">{effectiveTreeName}</strong> (
                            <span className="text-purple-300 font-bold">{generatorRarity}</span>)
                          </span>
                        </div>

                        {/* Controles de Entrada */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Coluna 1: Nome e Preset */}
                          <div className="space-y-3">
                            <div>
                              <label className="text-[11px] font-mono text-slate-300 block mb-1">
                                Selecionar Árvore Oficial ({ALL_27_TREES.length} cadastradas):
                              </label>
                              <select
                                value={generatorSelectedTreeId}
                                onChange={(e) => {
                                  const p = ALL_27_TREES.find((t) => t.id === e.target.value);
                                  if (p) selectPreset(p);
                                }}
                                className="w-full bg-[#11181C] border border-[#263238] text-white text-xs rounded-lg p-2.5 outline-none focus:border-purple-400 font-mono"
                              >
                                <optgroup label="YGGDRASIL — ÁPICE ABSOLUTO">
                                  {ALL_27_TREES.filter((t) => t.rarity === 'YGGDRASIL').map((t) => (
                                    <option key={t.id} value={t.id}>
                                      👑 {t.name} ({t.rarity})
                                    </option>
                                  ))}
                                </optgroup>
                                <optgroup label="LENDÁRIO (3 Árvores)">
                                  {ALL_27_TREES.filter((t) => t.rarity === 'LENDÁRIO').map((t) => (
                                    <option key={t.id} value={t.id}>
                                      ★ {t.name} ({t.rarity})
                                    </option>
                                  ))}
                                </optgroup>
                                <optgroup label="ÉPICO (5 Árvores)">
                                  {ALL_27_TREES.filter((t) => t.rarity === 'ÉPICO').map((t) => (
                                    <option key={t.id} value={t.id}>
                                      ✦ {t.name} ({t.rarity})
                                    </option>
                                  ))}
                                </optgroup>
                                <optgroup label="RARO (8 Árvores)">
                                  {ALL_27_TREES.filter((t) => t.rarity === 'RARO').map((t) => (
                                    <option key={t.id} value={t.id}>
                                      ◈ {t.name} ({t.rarity})
                                    </option>
                                  ))}
                                </optgroup>
                                <optgroup label="COMUM (10 Árvores)">
                                  {ALL_27_TREES.filter((t) => t.rarity === 'COMUM').map((t) => (
                                    <option key={t.id} value={t.id}>
                                      ● {t.name} ({t.rarity})
                                    </option>
                                  ))}
                                </optgroup>
                              </select>
                            </div>

                            <div>
                              <label className="text-[11px] font-mono text-slate-300 block mb-1">
                                Ou Digitar Nome Personalizado (O nome ditará a anatomia):
                              </label>
                              <input
                                type="text"
                                placeholder="Ex: Baobá de Quarks, Cedro de Supernova, etc."
                                value={generatorCustomName}
                                onChange={(e) => setGeneratorCustomName(e.target.value)}
                                className="w-full bg-[#11181C] border border-[#263238] text-white text-xs rounded-lg p-2.5 outline-none focus:border-purple-400 font-mono placeholder-slate-600"
                              />
                            </div>

                            {/* Seletor de Raridade */}
                            <div>
                              <label className="text-[11px] font-mono text-slate-300 block mb-1.5">
                                Raridade (Define a Hierarquia e Escala de Poder):
                              </label>
                              <div className="grid grid-cols-5 gap-1.5">
                                {(
                                  [
                                    'COMUM',
                                    'RARO',
                                    'ÉPICO',
                                    'LENDÁRIO',
                                    'YGGDRASIL',
                                  ] as TreeRarity[]
                                ).map((r) => {
                                  const isSelected = generatorRarity === r;
                                  return (
                                    <button
                                      key={r}
                                      onClick={() => setGeneratorRarity(r)}
                                      className={`py-2 px-1 text-center rounded-lg font-mono text-[10px] font-bold uppercase transition-all cursor-pointer ${
                                        isSelected
                                          ? r === 'YGGDRASIL'
                                            ? 'bg-purple-600 text-white border border-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.5)]'
                                            : r === 'LENDÁRIO'
                                            ? 'bg-amber-500 text-black border border-amber-300'
                                            : r === 'ÉPICO'
                                            ? 'bg-pink-600 text-white border border-pink-300'
                                            : r === 'RARO'
                                            ? 'bg-sky-600 text-white border border-sky-300'
                                            : 'bg-emerald-600 text-white border border-emerald-300'
                                          : 'bg-[#11181C] text-slate-400 hover:text-white border border-[#263238]'
                                      }`}
                                    >
                                      {r === 'YGGDRASIL' ? '👑 YGGDRASIL' : r}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          </div>

                          {/* Coluna 2: Conceito e Paleta */}
                          <div className="space-y-3">
                            <div>
                              <label className="text-[11px] font-mono text-slate-300 block mb-1">
                                Conceito Temático / Interpretação do Nome:
                              </label>
                              <textarea
                                rows={3}
                                value={generatorCustomConcept}
                                onChange={(e) => setGeneratorCustomConcept(e.target.value)}
                                placeholder="Descreva os materiais, folhas, tronco e anatomia derivados do nome..."
                                className="w-full bg-[#11181C] border border-[#263238] text-white text-xs rounded-lg p-2.5 outline-none focus:border-purple-400 font-sans resize-none placeholder-slate-600"
                              />
                            </div>

                            <div>
                              <label className="text-[11px] font-mono text-slate-300 block mb-1">
                                Paleta de Cores Preferencial (Opcional):
                              </label>
                              <input
                                type="text"
                                value={generatorCustomPalette}
                                onChange={(e) => setGeneratorCustomPalette(e.target.value)}
                                placeholder="Ex: #7C3AED, #06B6D4, #10B981"
                                className="w-full bg-[#11181C] border border-[#263238] text-white text-xs rounded-lg p-2.5 outline-none focus:border-purple-400 font-mono placeholder-slate-600"
                              />
                              <div className="flex items-center gap-1.5 mt-2">
                                <span className="text-[10px] font-mono text-slate-500">
                                  Cores recomendadas do nível:
                                </span>
                                <div className="flex items-center gap-1">
                                  {currentGenerated.recommendedPalette.map((c) => (
                                    <span
                                      key={c}
                                      title={c}
                                      style={{ backgroundColor: c }}
                                      className="w-3.5 h-3.5 rounded-full border border-black/40 inline-block shadow-sm"
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Card das Regras da Raridade Ativa */}
                        <div className="p-3.5 rounded-xl bg-[#11181C] border border-[#263238] space-y-2 text-xs font-sans">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-purple-300 font-bold uppercase text-[11px]">
                              📋 Regras Ativas: {currentGenerated.rarityRules.title}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">
                              {RARITY_VISUAL_HIERARCHY[generatorRarity].powerTier}
                            </span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-[11px] text-slate-300">
                            <div className="p-2 rounded bg-[#080F12] border border-[#1A2328]">
                              <strong className="text-white block font-mono text-[10px]">SILHUETA:</strong>
                              <span className="text-slate-400">{currentGenerated.rarityRules.silhouette}</span>
                            </div>
                            <div className="p-2 rounded bg-[#080F12] border border-[#1A2328]">
                              <strong className="text-white block font-mono text-[10px]">MATERIAIS:</strong>
                              <span className="text-slate-400">{currentGenerated.rarityRules.materials}</span>
                            </div>
                            <div className="p-2 rounded bg-[#080F12] border border-[#1A2328]">
                              <strong className="text-white block font-mono text-[10px]">NÍVEL DE MAGIA:</strong>
                              <span className="text-slate-400">{currentGenerated.rarityRules.magicLevel}</span>
                            </div>
                            <div className="p-2 rounded bg-[#080F12] border border-[#1A2328]">
                              <strong className="text-amber-300 block font-mono text-[10px]">LIMITES:</strong>
                              <span className="text-slate-400">{currentGenerated.rarityRules.limits}</span>
                            </div>
                          </div>
                        </div>

                        {/* Preview do Prompt Mestre Formatado */}
                        <div className="space-y-2 pt-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
                              <BookOpen className="w-4 h-4 text-purple-400" />
                              <span>PROMPT MESTRE COMPLETO (FORMATO MARKDOWN)</span>
                            </span>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => copyToClipboard(currentGenerated.compactImagePrompt, 'compact')}
                                className="px-2.5 py-1 rounded bg-[#11181C] hover:bg-[#263238] border border-[#263238] hover:border-sky-400 text-sky-300 font-mono text-[11px] transition-all cursor-pointer flex items-center gap-1"
                              >
                                {generatorPromptCopied === 'compact' ? (
                                  <>
                                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                                    <span>Prompt Compacto Copiado!</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3.5 h-3.5" />
                                    <span>Copiar Compacto (IA)</span>
                                  </>
                                )}
                              </button>
                              <button
                                onClick={() => copyToClipboard(currentGenerated.masterPrompt, 'master')}
                                className="px-3 py-1 rounded bg-purple-600 hover:bg-purple-500 text-white font-mono text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1"
                              >
                                {generatorPromptCopied === 'master' ? (
                                  <>
                                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                                    <span>Copiado!</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3.5 h-3.5" />
                                    <span>Copiar Mestre</span>
                                  </>
                                )}
                              </button>
                            </div>
                          </div>

                          <div className="relative">
                            <pre className="p-4 rounded-xl bg-[#050708] border border-[#263238] text-[11px] font-mono text-slate-300 whitespace-pre-wrap max-h-72 overflow-y-auto leading-relaxed select-all">
                              {currentGenerated.masterPrompt}
                            </pre>
                          </div>
                        </div>

                        {/* Versão Compacta Pronta para Ferramentas de Imagem */}
                        <div className="p-3.5 rounded-xl bg-[#050708] border border-sky-900/40 space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-wider">
                              VERSÃO COMPACTA OTIMIZADA PARA GEMINI IMAGEN / MODELOS GENERATIVOS 2D
                            </span>
                            <span className="text-[10px] text-slate-500 font-mono">1-Click Ready</span>
                          </div>
                          <p className="text-xs font-mono text-slate-300 leading-relaxed bg-[#11181C] p-2.5 rounded-lg border border-[#1A2328]">
                            {currentGenerated.compactImagePrompt}
                          </p>
                        </div>
                      </div>

                      {/* 4. CATÁLOGO COMPLETO DAS 27 ÁRVORES OFICIAIS */}
                      <div className="p-4 rounded-xl bg-[#080F12] border border-[#263238] space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                            <TreeDeciduous className="w-4 h-4 text-[#00FF88]" />
                            <span>Catálogo Completo das 27 Árvores Oficiais da Matriz</span>
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            Clique em qualquer exemplar para gerar seu prompt
                          </span>
                        </div>

                        <div className="space-y-3">
                          {/* Yggdrasil */}
                          <div>
                            <div className="text-[10px] font-mono text-purple-300 font-bold uppercase mb-1.5 flex items-center gap-1">
                              <span>👑 ÁPICE SUPREMO (1 ÁRVORE):</span>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                              {ALL_27_TREES.filter((t) => t.rarity === 'YGGDRASIL').map((tree) => (
                                <button
                                  key={tree.id}
                                  onClick={() => selectPreset(tree)}
                                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                                    generatorSelectedTreeId === tree.id
                                      ? 'bg-purple-950/70 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                                      : 'bg-[#11181C] border-[#263238] hover:border-purple-500/50'
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    <TreeImageDisplay tree={tree} size="sm" isUnlocked={true} className="flex-shrink-0" />
                                    <div>
                                      <div className="font-display text-sm font-bold text-white flex items-center gap-2">
                                        <span>{tree.name}</span>
                                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-purple-500/30 text-purple-200 border border-purple-400/40">
                                          ÁPICE ABSOLUTO
                                        </span>
                                      </div>
                                      <p className="text-[11px] text-slate-400">{tree.description}</p>
                                    </div>
                                  </div>
                                  <span className="text-[10px] font-mono text-purple-300 font-bold">
                                    Configurar no Gerador →
                                  </span>
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Lendárias */}
                          <div>
                            <div className="text-[10px] font-mono text-amber-400 font-bold uppercase mb-1.5">
                              ★ LENDÁRIO (3 ÁRVORES):
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                              {ALL_27_TREES.filter((t) => t.rarity === 'LENDÁRIO').map((tree) => (
                                <button
                                  key={tree.id}
                                  onClick={() => selectPreset(tree)}
                                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                                    generatorSelectedTreeId === tree.id
                                      ? 'bg-amber-950/60 border-amber-400 shadow-md'
                                      : 'bg-[#11181C] border-[#263238] hover:border-amber-500/50'
                                  }`}
                                >
                                  <TreeImageDisplay tree={tree} size="xs" isUnlocked={true} className="flex-shrink-0" />
                                  <div className="min-w-0">
                                    <div className="font-display text-xs font-bold text-white truncate">
                                      {tree.name}
                                    </div>
                                    <div className="text-[10px] text-amber-300/80 font-mono">Lendário</div>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Épicas */}
                          <div>
                            <div className="text-[10px] font-mono text-pink-400 font-bold uppercase mb-1.5">
                              ✦ ÉPICO (5 ÁRVORES):
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
                              {ALL_27_TREES.filter((t) => t.rarity === 'ÉPICO').map((tree) => (
                                <button
                                  key={tree.id}
                                  onClick={() => selectPreset(tree)}
                                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                                    generatorSelectedTreeId === tree.id
                                      ? 'bg-pink-950/60 border-pink-400 shadow-md'
                                      : 'bg-[#11181C] border-[#263238] hover:border-pink-500/50'
                                  }`}
                                >
                                  <TreeImageDisplay tree={tree} size="xs" isUnlocked={true} className="flex-shrink-0" />
                                  <div className="min-w-0">
                                    <div className="font-display text-xs font-bold text-white truncate">
                                      {tree.name}
                                    </div>
                                    <div className="text-[10px] text-pink-300/80 font-mono">Épico</div>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Raras */}
                          <div>
                            <div className="text-[10px] font-mono text-sky-400 font-bold uppercase mb-1.5">
                              ◈ RARO (8 ÁRVORES):
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                              {ALL_27_TREES.filter((t) => t.rarity === 'RARO').map((tree) => (
                                <button
                                  key={tree.id}
                                  onClick={() => selectPreset(tree)}
                                  className={`p-2 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-2 ${
                                    generatorSelectedTreeId === tree.id
                                      ? 'bg-sky-950/60 border-sky-400 shadow-md'
                                      : 'bg-[#11181C] border-[#263238] hover:border-sky-500/50'
                                  }`}
                                >
                                  <TreeImageDisplay tree={tree} size="xs" isUnlocked={true} className="flex-shrink-0" />
                                  <div className="min-w-0">
                                    <div className="font-display text-[11px] font-bold text-white truncate">
                                      {tree.name}
                                    </div>
                                    <div className="text-[9px] text-sky-300/80 font-mono">Raro</div>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Comuns */}
                          <div>
                            <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase mb-1.5">
                              ● COMUM (10 ÁRVORES):
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                              {ALL_27_TREES.filter((t) => t.rarity === 'COMUM').map((tree) => (
                                <button
                                  key={tree.id}
                                  onClick={() => selectPreset(tree)}
                                  className={`p-2 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-2 ${
                                    generatorSelectedTreeId === tree.id
                                      ? 'bg-emerald-950/60 border-emerald-400 shadow-md'
                                      : 'bg-[#11181C] border-[#263238] hover:border-emerald-500/50'
                                  }`}
                                >
                                  <TreeImageDisplay tree={tree} size="xs" isUnlocked={true} className="flex-shrink-0" />
                                  <div className="min-w-0">
                                    <div className="font-display text-[11px] font-bold text-white truncate">
                                      {tree.name}
                                    </div>
                                    <div className="text-[9px] text-emerald-300/80 font-mono">Comum</div>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* ==================================================
          MODAL DE CONFIRMAÇÃO DE MUDANÇA DE TURMA (Requisito 41)
      ================================================== */}
      <AnimatePresence>
        {turmaPendingChange && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="hud-card max-w-md w-full rounded-2xl p-6 sm:p-7 relative border-sky-500/50 shadow-[0_0_40px_rgba(56,189,248,0.25)] text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-sky-500/10 border border-sky-500/40 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                <GraduationCap className="w-7 h-7 text-sky-400" />
              </div>

              <span className="text-[10px] font-mono text-sky-400 uppercase tracking-widest block font-bold">
                ALTERAÇÃO DE ANO ESCOLAR
              </span>

              <h3 className="font-display text-xl font-bold text-white mt-1 tracking-wide">
                Mudar para esta turma?
              </h3>

              <div className="my-4 p-3.5 rounded-xl bg-[#080F12] border border-[#062A43] text-left">
                <div className="flex items-center justify-between text-xs font-mono mb-1">
                  <span className="text-slate-400">Turma selecionada:</span>
                  <span className="text-[#00FF88] font-bold text-sm">
                    {TURMAS_LIST.find((t) => t.id === turmaPendingChange)?.label}
                  </span>
                </div>
                <div className="text-[11px] text-slate-300 font-sans">
                  {TURMAS_LIST.find((t) => t.id === turmaPendingChange)?.stage} — {TURMAS_LIST.find((t) => t.id === turmaPendingChange)?.description}
                </div>
              </div>

              <p className="text-xs text-slate-300 mb-6 font-sans">
                Seu progresso não será perdido. XP, árvores cosméticas, tentativas de Gacha e estatísticas continuam salvos.
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setTurmaPendingChange(null)}
                  className="flex-1 py-2.5 px-4 rounded-lg bg-[#11181C] hover:bg-[#263238] border border-[#263238] text-slate-300 font-display font-semibold text-xs tracking-wider uppercase transition-all cursor-pointer active:scale-95"
                >
                  CANCELAR
                </button>
                <button
                  onClick={handleConfirmTurmaChange}
                  className="flex-1 py-2.5 px-4 rounded-lg bg-gradient-to-r from-sky-600 to-[#00A878] hover:from-sky-500 hover:to-[#00FF88] text-[#050708] font-display font-bold text-xs tracking-wider uppercase transition-all cursor-pointer shadow-[0_0_15px_rgba(56,189,248,0.3)] active:scale-95"
                >
                  CONFIRMAR
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ==================================================
          MODAL DE PRIMEIRA EXECUÇÃO — QUAL É A SUA TURMA? (Requisito 40)
      ================================================== */}
      <AnimatePresence>
        {isFirstRunTurmaModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="hud-card max-w-2xl w-full rounded-2xl p-6 sm:p-8 relative border-[#00FF88]/50 shadow-[0_0_50px_rgba(0,255,136,0.25)] flex flex-col max-h-[90vh] overflow-y-auto"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#063B3B] border border-[#00FF88] flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(0,255,136,0.3)]">
                  <GraduationCap className="w-8 h-8 text-[#00FF88]" />
                </div>
                <span className="text-[11px] font-mono text-[#00FF88] uppercase tracking-widest block font-bold">
                  BEM-VINDO À MATRIZ DO CONHECIMENTO
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1 tracking-wide">
                  QUAL É A SUA TURMA?
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto">
                  Selecione o seu ano escolar antes de iniciar o primeiro quiz para adaptarmos os desafios ao seu nível educacional.
                </p>
              </div>

              {/* Grid das 7 Opções */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {TURMAS_LIST.map((turma) => (
                  <button
                    key={turma.id}
                    onClick={() => handleSelectFirstRunTurma(turma.id)}
                    className="p-3.5 rounded-xl border border-[#263238] hover:border-[#00FF88] bg-[#080F12] hover:bg-[#063B3B]/30 transition-all text-left group cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] active:scale-98 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-display text-sm font-bold text-white group-hover:text-[#00FF88] transition-colors">
                          {turma.label}
                        </span>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#11181C] text-slate-400 border border-[#263238]">
                          {turma.stage}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 group-hover:text-slate-200 transition-colors line-clamp-2">
                        {turma.description}
                      </p>
                    </div>
                    <div className="mt-2 text-right">
                      <span className="text-[10px] font-mono text-sky-400 group-hover:text-[#00FF88] font-semibold">
                        Escolher {turma.label} →
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="text-center text-[11px] font-mono text-slate-400 border-t border-[#263238] pt-3">
                Você poderá trocar de turma a qualquer momento na aba <strong>MINHA TURMA</strong> sem perder seu progresso.
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ==================================================
          MODAL DE CONFIRMAÇÃO DE RENASCIMENTO (Requisito 53)
      ================================================== */}
      <AnimatePresence>
        {isRebirthConfirmOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="hud-card max-w-md w-full rounded-2xl p-6 sm:p-7 relative border-amber-500/50 shadow-[0_0_40px_rgba(245,158,11,0.25)] text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                <span className="text-2xl text-amber-400 font-bold">◈</span>
              </div>

              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">
                SISTEMA DE PRESTÍGIO
              </span>

              <h3 className="font-display text-xl font-bold text-white mt-1 tracking-wide">
                RENASCIMENTO DISPONÍVEL
              </h3>

              <p className="text-xs text-slate-300 mt-2 font-sans">
                Você atingiu o XP necessário.
              </p>

              <div className="my-4 p-4 rounded-xl bg-[#080F12] border border-[#263238] text-left space-y-2">
                <p className="text-xs text-amber-300 font-medium">
                  Se renascer agora, seu XP atual será reiniciado.
                </p>
                <div className="pt-2 border-t border-[#263238]">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                    Você receberá permanentemente:
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#00FF88]">
                    <Sparkles className="w-3.5 h-3.5 text-[#00FF88]" />
                    <span>+10% de XP ({getXpMultiplier(rebirthCount + 1).toFixed(2)}x)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-400 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                    <span>+8% de Bytes ({getBytesMultiplier(rebirthCount + 1).toFixed(2)}x)</span>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 mb-6 font-sans">
                Seu inventário, árvores, Gacha, turma e classe serão mantidos.
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsRebirthConfirmOpen(false)}
                  className="flex-1 py-2.5 px-4 rounded-lg bg-[#11181C] hover:bg-[#263238] border border-[#263238] text-slate-300 font-display font-semibold text-xs tracking-wider uppercase transition-all cursor-pointer active:scale-95"
                >
                  CANCELAR
                </button>
                <button
                  onClick={handleExecuteRebirth}
                  className="flex-1 py-2.5 px-4 rounded-lg bg-gradient-to-r from-amber-500 to-[#00FF88] hover:from-amber-400 hover:to-[#00FF88] text-[#050708] font-display font-bold text-xs tracking-wider uppercase transition-all cursor-pointer shadow-[0_0_15px_rgba(245,158,11,0.4)] active:scale-95"
                >
                  RENASCER
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ==================================================
          ANIMAÇÃO DE ENERGIA DO RENASCIMENTO (Requisito 54)
      ================================================== */}
      <AnimatePresence>
        {isRebirthing && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              className="max-w-lg w-full text-center relative flex flex-col items-center"
            >
              {/* Efeitos visuais de energia quântica e partículas */}
              <div className="relative w-40 h-40 flex items-center justify-center mb-6">
                <motion.div
                  animate={{ rotate: 360, scale: [1, 1.15, 1] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-amber-400/60 shadow-[0_0_50px_rgba(245,158,11,0.5)]"
                />
                <motion.div
                  animate={{ rotate: -360, scale: [1.1, 0.95, 1.1] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: 'linear' }}
                  className="absolute inset-3 rounded-full border-2 border-[#00FF88]/50 shadow-[0_0_35px_rgba(0,255,136,0.5)]"
                />
                <motion.div
                  animate={{ scale: [0.85, 1.25, 0.85], opacity: [0.4, 0.9, 0.4] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                  className="w-24 h-24 rounded-full bg-gradient-to-r from-amber-500/30 to-[#00FF88]/30 blur-md"
                />
                <div className="relative z-10 w-20 h-20 rounded-full bg-[#080F12] border-2 border-amber-400 flex items-center justify-center shadow-[0_0_25px_rgba(245,158,11,0.8)]">
                  <span className="text-4xl text-amber-400 font-bold">◈</span>
                </div>
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-3"
              >
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold block">
                  PROTOCOLO DE PRESTÍGIO QUÂNTICO ATIVADO
                </span>

                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-wider">
                  RENASCIMENTO {rebirthAnimationTarget}
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                  Canalizando a energia da Matriz. Seus multiplicadores estão sendo permanentemente calibrados!
                </p>

                <div className="my-4 p-4 rounded-xl bg-[#080F12]/80 border border-amber-500/40 inline-block text-left space-y-1.5 shadow-lg">
                  <div className="text-xs font-mono text-[#00FF88] flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#00FF88]" />
                    <span>MULTIPLICADOR DE XP: <strong>{getXpMultiplier(rebirthAnimationTarget).toFixed(2)}x</strong></span>
                  </div>
                  <div className="text-xs font-mono text-sky-400 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                    <span>MULTIPLICADOR DE BYTES: <strong>{getBytesMultiplier(rebirthAnimationTarget).toFixed(2)}x</strong></span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 pt-1 border-t border-[#263238]">
                    ✓ Árvores, Gacha, Turma e Classe 100% Preservados
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-amber-400/80 animate-pulse">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>Sincronizando novo ciclo com a Matriz...</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ==================================================
          BARRA DE NAVEGAÇÃO INFERIOR ESTILO MATRIX (Requisitos 32, 39 e 52)
      ================================================== */}
      <nav className="relative z-20 flex flex-wrap items-center justify-between gap-3 px-3 sm:px-6 py-2.5 bg-[#080F12]/95 border-t border-[#063B3B] backdrop-blur-md">
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* [⌂ INÍCIO] */}
          <button
            onClick={() => setActiveNavTab('inicio')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeNavTab === 'inicio'
                ? 'bg-[#063B3B] text-[#00FF88] border border-[#00FF88] shadow-[0_0_12px_rgba(0,255,136,0.3)]'
                : 'bg-[#11181C] text-slate-400 border border-[#263238] hover:text-white hover:bg-[#1A2328]'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>INÍCIO</span>
          </button>

          {/* [📚 QUIZ] */}
          <button
            onClick={() => setActiveNavTab('quiz')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeNavTab === 'quiz'
                ? 'bg-[#063B3B] text-[#00FF88] border border-[#00FF88] shadow-[0_0_12px_rgba(0,255,136,0.3)]'
                : 'bg-[#11181C] text-slate-400 border border-[#263238] hover:text-white hover:bg-[#1A2328]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>QUIZ</span>
          </button>

          {/* [🌳 ÁRVORES] */}
          <button
            onClick={() => setActiveNavTab('arvores')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeNavTab === 'arvores'
                ? 'bg-[#063B3B] text-[#00FF88] border border-[#00FF88] shadow-[0_0_12px_rgba(0,255,136,0.3)]'
                : 'bg-[#11181C] text-slate-400 border border-[#263238] hover:text-white hover:bg-[#1A2328]'
            }`}
          >
            <TreeDeciduous className="w-3.5 h-3.5" />
            <span>ÁRVORES</span>
          </button>

          {/* [🎓 MINHA TURMA] */}
          <button
            onClick={() => setActiveNavTab('turma')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-all cursor-pointer relative ${
              activeNavTab === 'turma'
                ? 'bg-[#062A43] text-sky-300 border border-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                : 'bg-[#11181C] text-slate-400 border border-[#263238] hover:text-white hover:bg-[#1A2328]'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>MINHA TURMA</span>
            <span className="hidden sm:inline text-[9px] font-mono px-1 py-0.2 rounded bg-sky-950 text-sky-400 border border-sky-600/40">
              {currentTurma.split(' ')[0]}
            </span>
          </button>

          {/* [◈ RENASCIMENTO] (Requisito 52) */}
          <button
            onClick={() => setActiveNavTab('renascimento')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-all cursor-pointer relative ${
              activeNavTab === 'renascimento'
                ? 'bg-amber-950/80 text-amber-300 border border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.3)]'
                : 'bg-[#11181C] text-slate-400 border border-[#263238] hover:text-white hover:bg-[#1A2328]'
            }`}
          >
            <span className="text-amber-400 text-sm">◈</span>
            <span>RENASCIMENTO</span>
            <span className="hidden sm:inline text-[9px] font-mono px-1 py-0.2 rounded bg-amber-950 text-amber-400 border border-amber-600/40">
              {rebirthCount >= MAX_REBIRTH ? 'MAX' : `${rebirthCount}/10`}
            </span>
            {canRebirth && (
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping absolute -top-0.5 -right-0.5" />
            )}
          </button>
        </div>

        <div className="flex items-center gap-2">
          {/* Controle de Acesso: Modo Aluno (Padrão) vs Modo Administrador (Google Autenticado) */}
          {isAdminMode ? (
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 hidden md:inline">
                🛡️ ADM: {googleUser?.email || 'Autorizado'}
              </span>
              <button
                onClick={() => {
                  setAdminActiveTab('sections');
                  setIsAdmModalOpen(true);
                }}
                className="text-xs font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1.5 cursor-pointer transition-colors px-2.5 py-1.5 rounded bg-amber-950/60 hover:bg-amber-900/80 border border-amber-500/50"
                title="Painel de Administrador (ADM)"
              >
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-semibold">Painel ADM</span>
              </button>
              <button
                onClick={handleAdminLogout}
                className="text-xs font-mono text-rose-400 hover:text-rose-300 flex items-center gap-1 cursor-pointer transition-colors px-2 py-1.5 rounded bg-[#11181C] hover:bg-rose-950/40 border border-rose-900/40"
                title="Sair do Modo Administrador"
              >
                <LogOut className="w-3 h-3 text-rose-400" />
                <span className="hidden sm:inline">Sair</span>
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setGoogleAuthError(null);
                setGoogleAuthSuccessNotice(null);
                setIsGoogleLoginModalOpen(true);
              }}
              className="text-xs font-mono text-slate-400 hover:text-slate-200 flex items-center gap-1.5 cursor-pointer transition-colors px-2.5 py-1.5 rounded bg-[#11181C]/80 hover:bg-[#11181C] border border-[#263238] hover:border-slate-500"
              title="Acesso reservado para docentes e administradores via Google"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">Acesso Docente (Google)</span>
            </button>
          )}

          <button
            onClick={handleExit}
            className="text-xs font-mono text-[#00FF88] hover:underline flex items-center gap-1 cursor-pointer px-2 py-1.5"
          >
            <span className="hidden sm:inline">Sair para o Hub</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default MeuJogo;
