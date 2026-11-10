import React, { useEffect, useRef, useState } from 'react';
import {
  CheckCircle2,
  Clock,
  FastForward,
  Pause,
  Play,
  Volume2,
  XCircle
} from 'lucide-react';
import { LEVEL_METADATA, THEME_METADATA } from '../data/questionsBank';
import {
  DifficultyLevel,
  QuestionAttempt,
  QuizQuestion,
  ThemeId,
  TimerPhase
} from '../types/quiz';
import {
  ALL_LEVELS,
  ALL_THEME_IDS,
  QUESTION_TIME_LIMIT_MS,
  REVEAL_TIME_LIMIT_MS,
  selectNextRotationalQuestion
} from '../utils/quizEngine';
import {
  speakPortugueseQuestion,
  stopPortugueseSpeech
} from '../utils/speechEngine';

interface QuizArenaProps {
  selectedLevel: DifficultyLevel | 'MIXED';
  roundTargetCount: number | 'INFINITE';
  seenBaseIds: string[];
  onUpdateSeenBaseIds: (ids: string[]) => void;
  onChangeLevel: (level: DifficultyLevel | 'MIXED') => void;
  onChangeRoundTarget: (target: number | 'INFINITE') => void;
  onFinishRound: (attempts: QuestionAttempt[], level: DifficultyLevel | 'MIXED') => void;
}

export const QuizArena: React.FC<QuizArenaProps> = ({
  selectedLevel,
  roundTargetCount,
  seenBaseIds,
  onUpdateSeenBaseIds,
  onChangeLevel,
  onChangeRoundTarget,
  onFinishRound
}) => {
  // Initialize first question
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion>(() => {
    const initial = selectNextRotationalQuestion({
      level: selectedLevel,
      seenBaseIds,
      lastTheme: null,
      recentThemes: [],
      stepCounter: 0
    });
    return initial.question;
  });

  // Every new question starts with automatic voice reading ('READING_QUESTION'),
  // and immediately after reading completes, starts the 10-second countdown ('QUESTION_10S').
  const [phase, setPhase] = useState<TimerPhase>('READING_QUESTION');
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [remainingMs, setRemainingMs] = useState<number>(QUESTION_TIME_LIMIT_MS);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [roundAttempts, setRoundAttempts] = useState<QuestionAttempt[]>([]);
  const [recentThemes, setRecentThemes] = useState<ThemeId[]>([currentQuestion.theme]);
  const [speechTriggerCount, setSpeechTriggerCount] = useState<number>(0);
  const [autoplayBlocked, setAutoplayBlocked] = useState<boolean>(false);

  const seenIdsRef = useRef<string[]>(
    seenBaseIds.includes(currentQuestion.baseId)
      ? seenBaseIds
      : [...seenBaseIds, currentQuestion.baseId]
  );

  // Sync seenIdsRef upward on mount & stop speech on unmount
  useEffect(() => {
    onUpdateSeenBaseIds(seenIdsRef.current);
    return () => {
      stopPortugueseSpeech();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Automatic voice reading of the question as soon as it appears (no permission button needed).
  // Once the reading finishes, the 10-second countdown starts automatically.
  useEffect(() => {
    if (phase !== 'READING_QUESTION' || isPaused) {
      return;
    }

    const cancelSpeech = speakPortugueseQuestion(
      currentQuestion.question,
      () => {
        setRemainingMs(QUESTION_TIME_LIMIT_MS);
        setPhase('QUESTION_10S');
      },
      () => {
        setAutoplayBlocked(true);
      }
    );

    return () => {
      cancelSpeech();
    };
  }, [currentQuestion.id, phase, isPaused, speechTriggerCount, currentQuestion.question]);

  // If browser blocked initial autoplay (e.g. direct page reload into Quiz),
  // automatically trigger the voice on the very first touch/click anywhere on the screen.
  useEffect(() => {
    if (!autoplayBlocked) return;
    const handleUnlockTap = () => {
      setAutoplayBlocked(false);
      if (phase !== 'REVEAL_5S') {
        setRemainingMs(QUESTION_TIME_LIMIT_MS);
        setPhase('READING_QUESTION');
        setSpeechTriggerCount((c) => c + 1);
      }
    };
    window.addEventListener('click', handleUnlockTap, { once: true });
    window.addEventListener('touchstart', handleUnlockTap, {
      passive: true,
      once: true
    });
    return () => {
      window.removeEventListener('click', handleUnlockTap);
      window.removeEventListener('touchstart', handleUnlockTap);
    };
  }, [autoplayBlocked, phase]);

  // Advance to the next rotational question (or complete round if target reached)
  const advanceToNextQuestion = (updatedAttempts: QuestionAttempt[]) => {
    stopPortugueseSpeech();

    if (
      roundTargetCount !== 'INFINITE' &&
      updatedAttempts.length >= roundTargetCount
    ) {
      setPhase('ROUND_COMPLETE');
      onFinishRound(updatedAttempts, selectedLevel);
      return;
    }

    const lastTheme = currentQuestion.theme;
    const nextSelection = selectNextRotationalQuestion({
      level: selectedLevel,
      seenBaseIds: seenIdsRef.current,
      lastTheme,
      recentThemes,
      stepCounter: updatedAttempts.length + 1
    });

    seenIdsRef.current = nextSelection.updatedSeenBaseIds;
    onUpdateSeenBaseIds(seenIdsRef.current);

    setCurrentQuestion(nextSelection.question);
    setRecentThemes((prev) => [...prev.slice(-5), nextSelection.question.theme]);
    setSelectedOption(null);
    setRemainingMs(QUESTION_TIME_LIMIT_MS);
    setPhase('READING_QUESTION');
  };

  // Trigger transition from READING_QUESTION / QUESTION_10S to REVEAL_5S
  const lockInAnswerOrTimeout = (optionIndex: number | null, timedOut: boolean) => {
    if (phase !== 'QUESTION_10S' && phase !== 'READING_QUESTION') return;

    stopPortugueseSpeech();

    const timeSpentMs = timedOut
      ? QUESTION_TIME_LIMIT_MS
      : phase === 'READING_QUESTION'
        ? 500
        : Math.max(300, QUESTION_TIME_LIMIT_MS - remainingMs);

    const isCorrect =
      !timedOut && optionIndex !== null && optionIndex === currentQuestion.correctIndex;

    const newAttempt: QuestionAttempt = {
      question: currentQuestion,
      selectedOptionIndex: optionIndex,
      isCorrect,
      timedOut,
      timeSpentMs,
      timestamp: Date.now()
    };

    setSelectedOption(optionIndex);
    setRoundAttempts((prev) => [...prev, newAttempt]);
    setRemainingMs(REVEAL_TIME_LIMIT_MS);
    setPhase('REVEAL_5S');
  };

  // High-precision 100ms interval timer for 10s Question and 5s Answer Reveal
  // Note: Does NOT count down while 'READING_QUESTION' is active — waits until reading finishes!
  useEffect(() => {
    if (
      isPaused ||
      phase === 'IDLE' ||
      phase === 'READING_QUESTION' ||
      phase === 'ROUND_COMPLETE'
    ) {
      return;
    }

    const interval = window.setInterval(() => {
      setRemainingMs((prev) => {
        if (prev <= 100) {
          return 0;
        }
        return prev - 100;
      });
    }, 100);

    return () => window.clearInterval(interval);
  }, [phase, isPaused]);

  // Handle timer reaching 0
  useEffect(() => {
    if (isPaused || remainingMs > 0) return;

    if (phase === 'QUESTION_10S') {
      // 10 seconds expired -> automatically enter 5-second answer visualization!
      lockInAnswerOrTimeout(null, true);
    } else if (phase === 'REVEAL_5S') {
      // 5 seconds of viewing the answer expired -> automatically advance to next rotational question!
      advanceToNextQuestion(roundAttempts);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remainingMs, phase, isPaused]);

  // Handle level change by user
  const handleSelectLevel = (newLevel: DifficultyLevel | 'MIXED') => {
    stopPortugueseSpeech();
    onChangeLevel(newLevel);
    const nextSelection = selectNextRotationalQuestion({
      level: newLevel,
      seenBaseIds: seenIdsRef.current,
      lastTheme: currentQuestion.theme,
      recentThemes,
      stepCounter: roundAttempts.length + 1
    });
    seenIdsRef.current = nextSelection.updatedSeenBaseIds;
    onUpdateSeenBaseIds(seenIdsRef.current);
    setCurrentQuestion(nextSelection.question);
    setRecentThemes((prev) => [...prev.slice(-5), nextSelection.question.theme]);
    setSelectedOption(null);
    setRemainingMs(QUESTION_TIME_LIMIT_MS);
    setPhase('READING_QUESTION');
    setIsPaused(false);
  };

  const currentThemeMeta = THEME_METADATA[currentQuestion.theme];
  const currentLevelMeta = LEVEL_METADATA[currentQuestion.level];
  const totalLimitMs =
    phase === 'REVEAL_5S' ? REVEAL_TIME_LIMIT_MS : QUESTION_TIME_LIMIT_MS;
  const progressPercent =
    phase === 'READING_QUESTION'
      ? 100
      : Math.max(0, Math.min(100, (remainingMs / totalLimitMs) * 100));
  const secondsDisplay = (remainingMs / 1000).toFixed(1);
  const integerSeconds = Math.ceil(remainingMs / 1000);

  // SVG Circular Timer ("bola no canto a contar o tempo") geometry
  const circleRadius = 26;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const circleDashOffset =
    circleCircumference - (progressPercent / 100) * circleCircumference;

  const circleStrokeColor =
    phase === 'REVEAL_5S'
      ? '#059669'
      : phase === 'READING_QUESTION'
        ? '#0284C7'
        : remainingMs <= 3000
          ? '#DC2626'
          : '#0284C7';

  const lastAttempt =
    roundAttempts.length > 0 ? roundAttempts[roundAttempts.length - 1] : null;

  const questionNumber =
    roundAttempts.length +
    (phase === 'QUESTION_10S' || phase === 'READING_QUESTION' ? 1 : 0);

  return (
    <section
      aria-label="Arena de Quiz com Voz Automática e Temporizador 10s/5s"
      className="max-w-[1320px] mx-auto px-3 sm:px-6 py-2.5 md:py-8"
    >
      {/* Top Toolbar: Level & Mode Selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 pb-2.5 md:pb-6 mb-3 md:mb-8 border-b border-slate-200">
        <div className="hidden md:block">
          <p className="text-xs text-slate-500">
            <span>Simulador de Defesa de Mestrado</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>Voz Automática + 10s Resposta + 5s Gabarito</span>
          </p>
          <h1 className="text-2xl font-bold text-slate-900 mt-1 font-serif-display">
            Arguição Interactiva — {selectedLevel === 'MIXED' ? 'Todos os Níveis (1 a 5)' : currentLevelMeta.title}
          </h1>
        </div>

        {/* Interactive Segmented Level Filter Controls (horizontally scrollable on narrow mobile) */}
        <div className="flex items-center justify-between md:justify-end gap-1.5 overflow-x-auto">
          <div
            role="group"
            aria-label="Seleccionar Nível de Dificuldade"
            className="flex items-center gap-0.5 p-0.5 bg-slate-100 rounded-lg border border-slate-200 shrink-0"
          >
            {ALL_LEVELS.map((lvl) => (
              <button
                key={lvl}
                type="button"
                onClick={() => handleSelectLevel(lvl)}
                className={`min-h-[32px] md:min-h-[36px] px-2 sm:px-3 py-1 text-[11px] md:text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedLevel === lvl
                    ? 'bg-white text-[#0284C7] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span className="md:hidden">N{lvl}</span>
                <span className="hidden md:inline">Nível {lvl}</span>
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleSelectLevel('MIXED')}
              className={`min-h-[32px] md:min-h-[36px] px-2 sm:px-3 py-1 text-[11px] md:text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedLevel === 'MIXED'
                  ? 'bg-white text-[#0284C7] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Misto
            </button>
          </div>

          <div
            role="group"
            aria-label="Meta de Perguntas da Rodada"
            className="flex items-center gap-0.5 p-0.5 bg-slate-100 rounded-lg border border-slate-200 shrink-0"
          >
            {([6, 10, 'INFINITE'] as const).map((target) => (
              <button
                key={String(target)}
                type="button"
                onClick={() => onChangeRoundTarget(target)}
                className={`min-h-[32px] md:min-h-[36px] px-2 py-1 text-[11px] md:text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  roundTargetCount === target
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {target === 'INFINITE' ? '∞' : `${target}Q`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Two-Zone Sandbox Layout (Left: Interactive Question/Reveal Stage; Right: Chronometer & Rotation Deck) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 items-start">
        {/* LEFT ZONE (8 cols): Interactive Stage */}
        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xs">
          {/* Unboxed Metadata Line */}
          <div className="flex flex-wrap items-center justify-between gap-1.5 text-[11px] md:text-xs text-slate-500 pb-2.5 md:pb-4 border-b border-slate-100">
            <div className="flex flex-wrap items-center gap-1.5 md:gap-2">
              <span className="font-semibold text-slate-800">
                Questão #{questionNumber}
                {roundTargetCount !== 'INFINITE' ? `/${roundTargetCount}` : ''}
              </span>
              <span aria-hidden="true">·</span>
              <span>Nível {currentQuestion.level}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#0284C7] font-medium">
                {currentThemeMeta.shortTitle}
              </span>
            </div>
            <span className="font-mono text-[10px] md:text-xs text-slate-500">
              {currentThemeMeta.pagesRef}
            </span>
          </div>

          {/* Question Header Row + Corner Circular Timer Ball ("bola no canto a contar o tempo") */}
          <div className="mt-3 md:mt-5 flex items-start justify-between gap-3 md:gap-5">
            <div className="flex-1 min-w-0">
              {/* Voice Reading Status Indicator */}
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span
                  data-testid="voice-status-indicator"
                  className={`inline-flex items-center gap-1 text-[11px] md:text-xs font-medium ${
                    phase === 'READING_QUESTION'
                      ? 'text-[#0284C7] font-semibold'
                      : 'text-slate-500'
                  }`}
                >
                  <Volume2
                    className={`w-3.5 h-3.5 shrink-0 ${
                      phase === 'READING_QUESTION' ? 'animate-pulse text-[#0284C7]' : 'text-slate-400'
                    }`}
                  />
                  {phase === 'READING_QUESTION'
                    ? 'A ler pergunta... (10s após a voz)'
                    : phase === 'QUESTION_10S'
                      ? 'Contagem de 10s activa'
                      : 'Visualização da resposta (5s)'}
                </span>

                {phase !== 'REVEAL_5S' && (
                  <button
                    type="button"
                    onClick={() => {
                      setAutoplayBlocked(false);
                      setRemainingMs(QUESTION_TIME_LIMIT_MS);
                      setPhase('READING_QUESTION');
                      setSpeechTriggerCount((c) => c + 1);
                    }}
                    title="Ouvir a pergunta em voz alta"
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[11px] md:text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                      autoplayBlocked
                        ? 'bg-[#0284C7] text-white border-[#0284C7] animate-pulse'
                        : 'bg-sky-50 text-[#0284C7] border-sky-200 hover:bg-sky-100'
                    }`}
                  >
                    <Volume2 className="w-3 h-3 shrink-0" />
                    <span>{autoplayBlocked ? 'Activar Som da Voz' : 'Ouvir de novo'}</span>
                  </button>
                )}
              </div>

              <h2
                data-testid="active-question-text"
                className="text-base sm:text-xl md:text-2xl font-semibold text-slate-900 leading-snug font-serif-display"
              >
                {currentQuestion.question}
              </h2>
            </div>

            {/* Corner Circular Countdown Ball ("bola no canto a contar o tempo") */}
            <div
              data-testid="corner-timer-ball"
              aria-label="Temporizador Circular da Questão"
              className="shrink-0 flex flex-col items-center"
            >
              <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-slate-50 border border-slate-200 shadow-xs">
                <svg
                  className="w-14 h-14 md:w-16 md:h-16 -rotate-90 transform"
                  viewBox="0 0 64 64"
                  aria-hidden="true"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r={circleRadius}
                    fill="transparent"
                    stroke="#E2E8F0"
                    strokeWidth="4.5"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r={circleRadius}
                    fill="transparent"
                    stroke={circleStrokeColor}
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeDasharray={circleCircumference}
                    strokeDashoffset={circleDashOffset}
                    className="transition-all duration-100"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  {phase === 'READING_QUESTION' ? (
                    <>
                      <Volume2 className="w-4 h-4 text-[#0284C7] animate-pulse" />
                      <span className="text-[10px] font-mono font-bold text-[#0284C7] leading-none mt-0.5 tabular-nums">
                        10s
                      </span>
                    </>
                  ) : (
                    <>
                      <span
                        className={`text-lg font-mono font-bold leading-none tabular-nums ${
                          phase === 'REVEAL_5S'
                            ? 'text-[#059669]'
                            : remainingMs <= 3000
                              ? 'text-[#DC2626]'
                              : 'text-slate-900'
                        }`}
                      >
                        {integerSeconds}s
                      </span>
                      <span className="text-[9px] font-mono text-slate-400 leading-none mt-0.5">
                        {phase === 'REVEAL_5S' ? 'resp' : 'tempo'}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 5-SECOND ANSWER VISUALIZATION PANEL — RENDERED IMMEDIATELY ABOVE THE FOLD */}
          {phase === 'REVEAL_5S' && (
            <div
              data-testid="answer-reveal-panel"
              aria-live="polite"
              className="mt-5 bg-emerald-50/60 border border-[#059669]/40 rounded-xl p-5 space-y-3.5"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-emerald-200/80">
                <div className="flex items-center gap-2">
                  {lastAttempt?.timedOut ? (
                    <>
                      <Clock className="w-5 h-5 text-[#0284C7] shrink-0" />
                      <span className="text-sm font-bold text-slate-900">
                        ● VISUALIZAÇÃO DA RESPOSTA (5S) — CONFIRA A FUNDAMENTAÇÃO NO TRABALHO
                      </span>
                    </>
                  ) : lastAttempt?.isCorrect ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0" />
                      <span className="text-sm font-bold text-[#059669]">
                        ● RESPOSTA CORRECTA EM {((lastAttempt.timeSpentMs || 0) / 1000).toFixed(1)}S — VISUALIZAÇÃO (5S)
                      </span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-[#DC2626] shrink-0" />
                      <span className="text-sm font-bold text-[#DC2626]">
                        ✕ RESPOSTA INCORRECTA — CORREÇÃO FUNDAMENTADA (5S)
                      </span>
                    </>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#059669] tabular-nums">
                    Avança em {secondsDisplay}s
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsPaused((p) => !p)}
                    className="px-2.5 py-1 text-xs font-medium bg-white border border-slate-300 rounded hover:bg-slate-100 text-slate-700 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {isPaused ? 'Retomar 5s' : 'Fixar Leitura'}
                  </button>
                  <button
                    type="button"
                    onClick={() => advanceToNextQuestion(roundAttempts)}
                    className="px-3 py-1 text-xs font-semibold bg-[#0284C7] text-white rounded hover:bg-[#0369A1] whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Avançar Já
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-white border border-emerald-200 rounded-lg p-3.5">
                  <div className="text-xs font-semibold text-[#059669]">
                    ✓ Resposta Oficial no Projecto de Carlota Roberto Monjane (2026):
                  </div>
                  <p className="text-sm md:text-base font-bold text-slate-900 mt-1 leading-relaxed">
                    {currentQuestion.shortAnswer}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-500">
                    Explicação Detalhada & Autores Mobilizados
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 mt-0.5 leading-relaxed">
                    {currentQuestion.detailedExplanation}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2.5 border-t border-emerald-200/70 text-xs">
                  <div>
                    <span className="font-semibold text-slate-800 block">
                      Localização Exacta no Trabalho:
                    </span>
                    <span className="text-slate-700 font-mono mt-0.5 block">
                      {currentQuestion.sourceReference}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#0284C7] block">
                      Dica Estratégica para a Defesa Oral:
                    </span>
                    <span className="text-slate-700 mt-0.5 block">
                      {currentQuestion.defenseTip}
                    </span>
                  </div>
                </div>

                {/* Self-check option if the 10s elapsed while answering aloud */}
                {lastAttempt?.timedOut && (
                  <div className="pt-2.5 border-t border-emerald-200/70 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs text-slate-600">
                      Respondeu mentalmente/oralmente durante os 10s? Registe para o seu relatório:
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          const updated = roundAttempts.map((att, i) =>
                            i === roundAttempts.length - 1
                              ? {
                                  ...att,
                                  selectedOptionIndex: currentQuestion.correctIndex,
                                  isCorrect: true,
                                  timedOut: false
                                }
                              : att
                          );
                          setRoundAttempts(updated);
                          advanceToNextQuestion(updated);
                        }}
                        className="px-3 py-1 text-xs font-semibold text-white bg-[#059669] hover:bg-emerald-700 rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        ✓ Dominei a Resposta
                      </button>
                      <button
                        type="button"
                        onClick={() => advanceToNextQuestion(roundAttempts)}
                        className="px-3 py-1 text-xs font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        Preciso Rever Este Ponto
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Options Grid */}
          <div className="mt-5 space-y-2.5" role="radiogroup" aria-label="Alternativas da Questão">
            {currentQuestion.options.map((optionText, idx) => {
              const letter = ['A', 'B', 'C', 'D'][idx];
              const isCorrectOption = idx === currentQuestion.correctIndex;
              const isUserSelected = selectedOption === idx;

              let buttonStyle =
                'border-slate-200 bg-slate-50/60 hover:bg-slate-100 hover:border-slate-300 text-slate-800';
              let statusBadgeText: string | null = null;

              if (phase === 'REVEAL_5S') {
                if (isCorrectOption) {
                  buttonStyle =
                    'border-[#059669] bg-emerald-50/70 text-slate-900 font-medium';
                  statusBadgeText = '✓ ALTERNATIVA CORRECTA';
                } else if (isUserSelected && !isCorrectOption) {
                  buttonStyle =
                    'border-[#DC2626] bg-red-50/70 text-slate-900';
                  statusBadgeText = '✕ SUA ESCOLHA';
                } else {
                  buttonStyle =
                    'border-slate-200 bg-white text-slate-400 opacity-70';
                }
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={phase === 'REVEAL_5S'}
                  onClick={() => lockInAnswerOrTimeout(idx, false)}
                  className={`w-full min-h-[52px] text-left p-3.5 rounded-xl border transition-all active:scale-[0.99] flex items-start justify-between gap-3 cursor-pointer disabled:cursor-default ${buttonStyle}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 shrink-0 mt-0.5">
                      {letter}
                    </span>
                    <span className="text-sm leading-relaxed">
                      {optionText}
                    </span>
                  </div>
                  {statusBadgeText && (
                    <span
                      className={`text-xs font-mono font-semibold whitespace-nowrap shrink-0 mt-0.5 ${
                        isCorrectOption ? 'text-[#059669]' : 'text-[#DC2626]'
                      }`}
                    >
                      {statusBadgeText}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Thumb-Zone Action & Score Strip (visible on smartphones/tablets < lg) */}
          <div className="mt-5 pt-4 border-t border-slate-100 lg:hidden space-y-3">
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => {
                  if (!isPaused) {
                    stopPortugueseSpeech();
                  }
                  setIsPaused((prev) => !prev);
                }}
                className="min-h-[44px] flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                {isPaused ? (
                  <>
                    <Play className="w-4 h-4" />
                    <span>Retomar</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-4 h-4" />
                    <span>Pausar</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  if (phase === 'READING_QUESTION' || phase === 'QUESTION_10S') {
                    lockInAnswerOrTimeout(null, true);
                  } else {
                    advanceToNextQuestion(roundAttempts);
                  }
                }}
                className="min-h-[44px] flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-xl transition-colors cursor-pointer"
              >
                <FastForward className="w-4 h-4" />
                <span>
                  {phase === 'READING_QUESTION' || phase === 'QUESTION_10S'
                    ? 'Ver Resposta (5s)'
                    : 'Próxima Questão'}
                </span>
              </button>
            </div>

            {roundAttempts.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  stopPortugueseSpeech();
                  setPhase('ROUND_COMPLETE');
                  onFinishRound(roundAttempts, selectedLevel);
                }}
                className="w-full min-h-[44px] py-2.5 px-4 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              >
                Concluir Rodada & Ver Feedback ({roundAttempts.length}{' '}
                {roundAttempts.length === 1 ? 'respondida' : 'respondidas'})
              </button>
            )}
          </div>

          {/* Desktop Action during READING_QUESTION or QUESTION_10S */}
          {(phase === 'READING_QUESTION' || phase === 'QUESTION_10S') && (
            <div className="hidden lg:flex mt-5 pt-4 border-t border-slate-100 flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                {phase === 'READING_QUESTION' ? (
                  <>
                    A voz está a ler a pergunta automaticamente. Assim que terminar, o cronómetro de{' '}
                    <strong className="font-mono text-slate-700">10.0s</strong> dispara.
                  </>
                ) : (
                  <>
                    Temporizador de <strong className="font-mono text-slate-700">10.0s</strong> a contar. Após os 10s, a resposta oficial aparece durante <strong className="font-mono text-slate-700">5.0s</strong>.
                  </>
                )}
              </p>
              <button
                type="button"
                onClick={() => lockInAnswerOrTimeout(null, true)}
                className="px-3.5 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Revelar Resposta Agora (5s)
              </button>
            </div>
          )}
        </div>

        {/* RIGHT ZONE (4 cols): Control & Chronometer Deck */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Chronometer Panel */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                {phase === 'READING_QUESTION'
                  ? 'LEITURA AUTOMÁTICA DA PERGUNTA'
                  : phase === 'QUESTION_10S'
                    ? 'TEMPO DE RESPOSTA (10S)'
                    : 'VISUALIZAÇÃO DA RESPOSTA (5S)'}
              </span>
              <span className="text-xs font-mono font-semibold text-slate-700">
                {isPaused
                  ? '❚❚ PAUSADO'
                  : phase === 'READING_QUESTION'
                    ? '● A LER VOZ'
                    : phase === 'QUESTION_10S'
                      ? '● A CONTAR 10S'
                      : '● GABARITO 5S'}
              </span>
            </div>

            {/* Big Tabular Countdown */}
            <div className="mt-3 flex items-baseline justify-between">
              <div
                data-testid="timer-display"
                className={`text-4xl font-mono font-bold tabular-nums tracking-tight ${
                  phase === 'REVEAL_5S'
                    ? 'text-[#059669]'
                    : phase === 'READING_QUESTION'
                      ? 'text-[#0284C7]'
                      : remainingMs <= 3000
                        ? 'text-[#DC2626]'
                        : 'text-slate-900'
                }`}
              >
                {secondsDisplay}s
              </div>
              <div className="text-xs text-slate-500 font-mono tabular-nums">
                {phase === 'READING_QUESTION'
                  ? 'aguarda fim da voz'
                  : `/ ${phase === 'QUESTION_10S' ? '10.0s' : '5.0s'}`}
              </div>
            </div>

            {/* Visual Progress Bar (transform scaleX for smooth compositor animation) */}
            <div className="mt-3 w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full origin-left transition-transform duration-100 ${
                  phase === 'REVEAL_5S'
                    ? 'bg-[#059669]'
                    : phase === 'READING_QUESTION'
                      ? 'bg-[#0284C7] animate-pulse'
                      : remainingMs <= 3000
                        ? 'bg-[#DC2626]'
                        : 'bg-[#0284C7]'
                }`}
                style={{ transform: `scaleX(${progressPercent / 100})` }}
              />
            </div>

            {/* Playback & Step Controls */}
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => {
                  if (!isPaused) {
                    stopPortugueseSpeech();
                  }
                  setIsPaused((prev) => !prev);
                }}
                className="flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {isPaused ? (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>Retomar</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>Pausar</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  if (phase === 'READING_QUESTION' || phase === 'QUESTION_10S') {
                    lockInAnswerOrTimeout(null, true);
                  } else {
                    advanceToNextQuestion(roundAttempts);
                  }
                }}
                className="flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <FastForward className="w-3.5 h-3.5" />
                <span>
                  {phase === 'READING_QUESTION' || phase === 'QUESTION_10S'
                    ? 'Ver Resposta (5s)'
                    : 'Próxima Questão'}
                </span>
              </button>
            </div>

            {/* Finish Round & Generate Detailed Feedback CTA */}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <button
                type="button"
                disabled={roundAttempts.length === 0}
                onClick={() => {
                  stopPortugueseSpeech();
                  setPhase('ROUND_COMPLETE');
                  onFinishRound(roundAttempts, selectedLevel);
                }}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-400 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer disabled:cursor-not-allowed"
              >
                Concluir Rodada & Ver Feedback ({roundAttempts.length}{' '}
                {roundAttempts.length === 1 ? 'respondida' : 'respondidas'})
              </button>
            </div>
          </div>

          {/* Live Round Telemetry & Non-Sequential Theme Rotation Proof */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
            <h3 className="text-sm font-semibold text-slate-900">
              Rotação Não-Sequencial de Eixos Temáticos
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              O motor alterna obrigatoriamente o eixo temático a cada nova questão para simular a imprevisibilidade da banca examinadora.
            </p>

            <div className="mt-4 space-y-2">
              {ALL_THEME_IDS.map((themeId) => {
                const tMeta = THEME_METADATA[themeId];
                const isCurrent = currentQuestion.theme === themeId;
                const countInRound = roundAttempts.filter(
                  (a) => a.question.theme === themeId
                ).length;

                return (
                  <div
                    key={themeId}
                    className={`flex items-center justify-between text-xs p-2 rounded-lg border ${
                      isCurrent
                        ? 'border-[#0284C7] bg-sky-50/60 text-slate-900 font-semibold'
                        : 'border-slate-100 bg-slate-50/40 text-slate-600'
                    }`}
                  >
                    <span className="truncate pr-2">
                      {isCurrent ? '▶ ' : ''}
                      {tMeta.shortTitle}
                    </span>
                    <span className="font-mono text-[11px] text-slate-500 shrink-0 tabular-nums">
                      {countInRound}x na rodada
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Current Round Scoreboard */}
            <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center">
              <div className="p-2 bg-slate-50 rounded-lg">
                <div className="text-xs text-slate-500">Acertos</div>
                <div className="text-lg font-mono font-bold text-[#059669] tabular-nums">
                  {roundAttempts.filter((a) => a.isCorrect).length}
                </div>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg">
                <div className="text-xs text-slate-500">Erros</div>
                <div className="text-lg font-mono font-bold text-[#DC2626] tabular-nums">
                  {
                    roundAttempts.filter((a) => !a.isCorrect && !a.timedOut)
                      .length
                  }
                </div>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg">
                <div className="text-xs text-slate-500">Tempo (10s)</div>
                <div className="text-lg font-mono font-bold text-[#D97706] tabular-nums">
                  {roundAttempts.filter((a) => a.timedOut).length}
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
