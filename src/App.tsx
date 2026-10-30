import React, { useState } from 'react';
import { MeuJogo } from './games/quiz/matriz';
import { GameExitPayload, StudentRpgClass } from './types/gamePlugin';
import { Trophy, RefreshCw, Sparkles, ArrowRight, Shield, Target, Zap, Clock, Coins } from 'lucide-react';

export default function App() {
  const [studentClass, setStudentClass] = useState<StudentRpgClass>('warrior');
  const [difficultyMultiplier, setDifficultyMultiplier] = useState<number>(1.0);
  const [exitPayload, setExitPayload] = useState<GameExitPayload | null>(null);
  const [gameKey, setGameKey] = useState<number>(1);

  const handleExitToHub = (payload: GameExitPayload) => {
    console.log('[Hub Event] onExitToHub acionado:', payload);
    setExitPayload(payload);
  };

  const handleRestart = () => {
    setExitPayload(null);
    setGameKey((prev) => prev + 1);
  };

  return (
    <div className="w-full min-h-screen bg-[#050708] text-white">
      {/* O Jogo Principal */}
      <MeuJogo
        key={gameKey}
        studentClass={studentClass}
        difficultyMultiplier={difficultyMultiplier}
        onExitToHub={handleExitToHub}
      />

      {/* Modal simulando o retorno ao Hub com o Payload recebido */}
      {exitPayload && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="hud-card max-w-lg w-full rounded-2xl p-6 sm:p-8 border-[#00FF88]/40 shadow-[0_0_50px_rgba(0,255,136,0.25)] relative text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#063B3B] border border-[#00FF88] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(0,255,136,0.3)]">
              <Trophy className="w-8 h-8 text-[#00FF88]" />
            </div>

            <span className="text-[11px] font-mono text-[#00FF88] uppercase tracking-widest block">
              SESSÃO FINALIZADA · DADOS ENVIADOS AO HUB
            </span>
            <h2 className="font-display text-2xl font-bold text-white mt-1">
              Retorno ao Hub de Jogos
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              O evento <code className="text-[#00FF88] font-mono">onExitToHub(payload)</code> foi emitido com sucesso com as estatísticas calculadas.
            </p>

            {/* Painel do Payload */}
            <div className="mt-5 p-4 rounded-xl bg-[#080F12] border border-[#263238] text-left font-mono text-xs space-y-2.5">
              <div className="flex justify-between items-center border-b border-[#263238] pb-2">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Coins className="w-4 h-4 text-amber-400" />
                  Bytes Ganhos (bytesEarned):
                </span>
                <span className="text-[#00FF88] font-bold text-sm">
                  +{exitPayload.bytesEarned} B
                </span>
              </div>

              <div className="flex justify-between items-center border-b border-[#263238] pb-2">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  Token de Nível (levelTokensEarned):
                </span>
                <span className="text-white font-bold">
                  {exitPayload.levelTokensEarned ?? 0} {exitPayload.levelTokensEarned ? '⭐ (Precisão ≥ 80%)' : ''}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                <div className="p-2 rounded bg-[#11181C]">
                  <span className="text-slate-400 block text-[10px]">Pontuação (score)</span>
                  <span className="text-white font-bold">{exitPayload.sessionStats.score}</span>
                </div>
                <div className="p-2 rounded bg-[#11181C]">
                  <span className="text-slate-400 block text-[10px]">Precisão (accuracy)</span>
                  <span className="text-sky-400 font-bold">{exitPayload.sessionStats.accuracyPercentage}%</span>
                </div>
                <div className="p-2 rounded bg-[#11181C]">
                  <span className="text-slate-400 block text-[10px]">Tempo (segundos)</span>
                  <span className="text-white font-bold flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {exitPayload.sessionStats.timeSpentSeconds}s
                  </span>
                </div>
                <div className="p-2 rounded bg-[#11181C]">
                  <span className="text-slate-400 block text-[10px]">Acertos / Erros</span>
                  <span className="text-white font-bold">
                    <span className="text-emerald-400">{exitPayload.sessionStats.correctAnswers}</span> / <span className="text-rose-400">{exitPayload.sessionStats.wrongAnswers}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Configurações de teste para a próxima sessão */}
            <div className="mt-4 p-3 rounded-lg bg-[#080F12] border border-[#062A43] text-left text-xs font-mono">
              <span className="text-slate-400 text-[10px] block mb-2 uppercase font-semibold">
                Parâmetros para nova sessão:
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1">
                  <span className="text-slate-400 text-[11px]">Classe:</span>
                  {(['warrior', 'archer', 'mage'] as StudentRpgClass[]).map((c) => (
                    <button
                      key={c}
                      onClick={() => setStudentClass(c)}
                      className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold cursor-pointer transition-all ${
                        studentClass === c
                          ? 'bg-[#00FF88] text-[#050708]'
                          : 'bg-[#11181C] text-slate-400 hover:text-white'
                      }`}
                    >
                      {c === 'warrior' ? 'Guerreiro' : c === 'archer' ? 'Arqueiro' : 'Mago'}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-1">
                  <span className="text-slate-400 text-[11px]">Mult:</span>
                  {[1.0, 1.25, 1.5, 2.0].map((m) => (
                    <button
                      key={m}
                      onClick={() => setDifficultyMultiplier(m)}
                      className={`px-1.5 py-0.5 rounded text-[10px] font-bold cursor-pointer transition-all ${
                        difficultyMultiplier === m
                          ? 'bg-[#087EA4] text-white'
                          : 'bg-[#11181C] text-slate-400 hover:text-white'
                      }`}
                    >
                      {m}x
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Botão de Retorno / Reinício */}
            <div className="mt-5 space-y-2">
              <button
                onClick={handleRestart}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00A878] to-[#00FF88] text-[#050708] font-display font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:brightness-110 active:scale-95 transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Jogar Novamente / Retomar Matriz</span>
              </button>

              <button
                onClick={() => {
                  try {
                    const allTreeIds = [
                      'tree-c1', 'tree-c2', 'tree-c3', 'tree-c4', 'tree-c5', 'tree-c6', 'tree-c7', 'tree-c8', 'tree-c9', 'tree-c10',
                      'tree-r1', 'tree-r2', 'tree-r3', 'tree-r4', 'tree-r5', 'tree-r6', 'tree-r7', 'tree-r8',
                      'tree-e1', 'tree-e2', 'tree-e3', 'tree-e4', 'tree-e5',
                      'tree-l1', 'tree-l2', 'tree-l3',
                      'tree-y1',
                    ];
                    localStorage.setItem('matriz-do-conhecimento-save', JSON.stringify({
                      xp: 12000,
                      unlockedDifficulties: ['facil', 'medio', 'dificil', 'expert'],
                      activeDifficulty: 'expert',
                      hasReachedExpert: true,
                      gachaLevel: 5,
                      gachaPulls: 99,
                      unlockedTreeIds: allTreeIds,
                      equippedTreeId: 'tree-y1',
                    }));
                  } catch {
                    // ignore
                  }
                  handleRestart();
                }}
                className="w-full py-2 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/50 text-emerald-300 font-mono text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
                title="Desbloquear tudo no modo ADM"
              >
                <span>🔓 ADM: Iniciar com Tudo Liberado (Max Stats)</span>
              </button>

              <button
                onClick={() => {
                  try {
                    localStorage.removeItem('matriz-do-conhecimento-save');
                  } catch {
                    // ignore
                  }
                  handleRestart();
                }}
                className="w-full py-2 rounded-lg bg-transparent hover:bg-rose-950/30 border border-rose-800/40 text-rose-400 font-mono text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
                title="Limpar save e reiniciar do zero"
              >
                <span>Reset ADM: Limpar Todo o Progresso Local</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
