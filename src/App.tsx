import React, { useEffect, useMemo, useState } from 'react';
import { LevelSelectorDashboard } from './components/LevelSelectorDashboard';
import { PerformanceReportView } from './components/PerformanceReportView';
import { ProjectStudyView } from './components/ProjectStudyView';
import { OfflineIndicator } from './components/PWAInstallModal';
import { QuizArena } from './components/QuizArena';
import { RoundFeedbackView } from './components/RoundFeedbackView';
import { ActiveTab, MobileBottomNav, TopBar } from './components/TopBar';
import {
  DifficultyLevel,
  QuestionAttempt,
  RoundSummary
} from './types/quiz';
import {
  computeRoundSummary,
  generatePerformanceReport,
  generateRotationalRound
} from './utils/quizEngine';
import { unlockMobileSpeech } from './utils/speechEngine';

const STORAGE_KEY_ROUNDS = 'defesamestre_rounds_v1';
const STORAGE_KEY_SEEN = 'defesamestre_seen_ids_v1';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('autostart') === '1') {
        return 'arena';
      }
    }
    return 'dashboard';
  });

  const [selectedLevel, setSelectedLevel] = useState<DifficultyLevel | 'MIXED'>(1);
  const [roundTargetCount, setRoundTargetCount] = useState<number | 'INFINITE'>(6);
  const [arenaSessionKey, setArenaSessionKey] = useState<number>(1);
  const [completedRoundForFeedback, setCompletedRoundForFeedback] =
    useState<RoundSummary | null>(null);

  const [roundsHistory, setRoundsHistory] = useState<RoundSummary[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ROUNDS);
      if (saved) {
        return JSON.parse(saved) as RoundSummary[];
      }
    } catch {
      // ignore storage errors
    }
    return [];
  });

  const [seenBaseIds, setSeenBaseIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SEEN);
      if (saved) {
        return JSON.parse(saved) as string[];
      }
    } catch {
      // ignore storage errors
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_ROUNDS, JSON.stringify(roundsHistory));
    } catch {
      // ignore storage errors
    }
  }, [roundsHistory]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SEEN, JSON.stringify(seenBaseIds));
    } catch {
      // ignore storage errors
    }
  }, [seenBaseIds]);

  // Unlock mobile speech synthesis on first touch/click anywhere on the screen
  useEffect(() => {
    const handleFirstInteraction = () => {
      unlockMobileSpeech();
    };
    window.addEventListener('touchstart', handleFirstInteraction, {
      passive: true,
      once: true
    });
    window.addEventListener('click', handleFirstInteraction, {
      passive: true,
      once: true
    });
    return () => {
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  const performanceReport = useMemo(
    () => generatePerformanceReport(roundsHistory),
    [roundsHistory]
  );

  const handleStartLevelQuiz = (level: DifficultyLevel | 'MIXED') => {
    unlockMobileSpeech();
    setSelectedLevel(level);
    setCompletedRoundForFeedback(null);
    setArenaSessionKey((prev) => prev + 1);
    setActiveTab('arena');
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleFinishRound = (
    attempts: QuestionAttempt[],
    level: DifficultyLevel | 'MIXED'
  ) => {
    if (attempts.length === 0) return;
    const summary = computeRoundSummary(level, attempts);
    setRoundsHistory((prev) => [summary, ...prev]);
    setCompletedRoundForFeedback(summary);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLoadDiagnosticSimulation = () => {
    const { questions, updatedSeenBaseIds } = generateRotationalRound({
      level: 'MIXED',
      count: 6,
      initialSeenBaseIds: seenBaseIds
    });

    const simulatedAttempts: QuestionAttempt[] = questions.map((q, idx) => {
      // Simulate 4 correct, 1 timeout, 1 incorrect to demonstrate rich diagnostic feedback
      const timedOut = idx === 2;
      const isCorrect = idx !== 2 && idx !== 4;
      const chosenIdx = timedOut
        ? null
        : isCorrect
          ? q.correctIndex
          : (q.correctIndex + 1) % 4;
      return {
        question: q,
        selectedOptionIndex: chosenIdx,
        isCorrect,
        timedOut,
        timeSpentMs: timedOut ? 10000 : 4200 + idx * 650,
        timestamp: Date.now() - (6 - idx) * 15000
      };
    });

    const summary = computeRoundSummary('MIXED', simulatedAttempts);
    setSeenBaseIds(updatedSeenBaseIds);
    setRoundsHistory((prev) => [summary, ...prev]);
  };

  const handleClearHistory = () => {
    setRoundsHistory([]);
    setSeenBaseIds([]);
    setCompletedRoundForFeedback(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] pb-20 md:pb-0">
      <TopBar
        activeTab={activeTab}
        onSelectTab={(tab) => {
          if (tab === 'arena') {
            setCompletedRoundForFeedback(null);
          }
          setActiveTab(tab);
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        onQuickStartQuiz={() => handleStartLevelQuiz(selectedLevel)}
      />

      <main className="flex-1">
        {activeTab === 'dashboard' && (
          <LevelSelectorDashboard
            report={performanceReport}
            roundTargetCount={roundTargetCount}
            onChangeRoundTarget={setRoundTargetCount}
            onStartLevelQuiz={handleStartLevelQuiz}
            onOpenReport={() => setActiveTab('report')}
            onOpenStudyGuide={() => setActiveTab('study')}
          />
        )}

        {activeTab === 'arena' && (
          <>
            {completedRoundForFeedback ? (
              <RoundFeedbackView
                round={completedRoundForFeedback}
                onStartNewRoundSameLevel={() => {
                  setCompletedRoundForFeedback(null);
                  setArenaSessionKey((prev) => prev + 1);
                }}
                onStartNextLevelRound={(nextLevel) => {
                  setSelectedLevel(nextLevel);
                  setCompletedRoundForFeedback(null);
                  setArenaSessionKey((prev) => prev + 1);
                }}
                onOpenFullReport={() => setActiveTab('report')}
              />
            ) : (
              <QuizArena
                key={`${selectedLevel}_${arenaSessionKey}`}
                selectedLevel={selectedLevel}
                roundTargetCount={roundTargetCount}
                seenBaseIds={seenBaseIds}
                onUpdateSeenBaseIds={setSeenBaseIds}
                onChangeLevel={(lvl) => {
                  setSelectedLevel(lvl);
                }}
                onChangeRoundTarget={setRoundTargetCount}
                onFinishRound={handleFinishRound}
              />
            )}
          </>
        )}

        {activeTab === 'report' && (
          <PerformanceReportView
            report={performanceReport}
            roundsHistory={roundsHistory}
            onStartTargetedLevel={(lvl) => handleStartLevelQuiz(lvl)}
            onLoadDiagnosticSimulation={handleLoadDiagnosticSimulation}
            onClearHistory={handleClearHistory}
          />
        )}

        {activeTab === 'study' && <ProjectStudyView />}
      </main>

      <footer className="bg-white border-t border-slate-200 py-6 px-4 md:px-6 mt-10 md:mt-16">
        <div className="max-w-[1320px] mx-auto flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            Projecto de Mestrado em Políticas Públicas Educacionais · Universidade Pedagógica de Maputo (2026) · Carlota Roberto Monjane
          </div>
          <div>
            Temporizador Oficial: Voz Automática · 10s Pergunta · 5s Visualização da Resposta
          </div>
        </div>
      </footer>

      <OfflineIndicator />
      <MobileBottomNav
        activeTab={activeTab}
        onSelectTab={(tab) => {
          if (tab === 'arena') {
            setCompletedRoundForFeedback(null);
          }
          setActiveTab(tab);
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
      />
    </div>
  );
}
