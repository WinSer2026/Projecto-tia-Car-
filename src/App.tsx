import React, { useEffect, useMemo, useState } from 'react';
import { LevelSelectorDashboard } from './components/LevelSelectorDashboard';
import { PerformanceReportView } from './components/PerformanceReportView';
import { ProjectStudyView } from './components/ProjectStudyView';
import { QuizArena } from './components/QuizArena';
import { RoundFeedbackView } from './components/RoundFeedbackView';
import { ActiveTab, TopBar } from './components/TopBar';
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

  const performanceReport = useMemo(
    () => generatePerformanceReport(roundsHistory),
    [roundsHistory]
  );

  const handleStartLevelQuiz = (level: DifficultyLevel | 'MIXED') => {
    setSelectedLevel(level);
    setCompletedRoundForFeedback(null);
    setArenaSessionKey((prev) => prev + 1);
    setActiveTab('arena');
  };

  const handleFinishRound = (
    attempts: QuestionAttempt[],
    level: DifficultyLevel | 'MIXED'
  ) => {
    if (attempts.length === 0) return;
    const summary = computeRoundSummary(level, attempts);
    setRoundsHistory((prev) => [summary, ...prev]);
    setCompletedRoundForFeedback(summary);
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
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      <TopBar
        activeTab={activeTab}
        onSelectTab={(tab) => {
          if (tab === 'arena') {
            setCompletedRoundForFeedback(null);
          }
          setActiveTab(tab);
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

      <footer className="bg-white border-t border-slate-200 py-6 px-6 mt-16">
        <div className="max-w-[1320px] mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            Projecto de Mestrado em Políticas Públicas Educacionais · Universidade Pedagógica de Maputo (2026) · Carlota Roberto Monjane
          </div>
          <div>
            Temporizador Oficial: 10s Pergunta · 5s Visualização da Resposta · Níveis 1 a 5 Rotativos
          </div>
        </div>
      </footer>
    </div>
  );
}
