export type DifficultyLevel = 1 | 2 | 3 | 4 | 5;

export type ThemeId =
  | 'identificacao_problema'
  | 'ciclo_politicas'
  | 'historico_sne'
  | 'teoria_critica'
  | 'desafios_percepcoes'
  | 'metodologia_orcamento';

export interface ThemeMeta {
  id: ThemeId;
  title: string;
  shortTitle: string;
  chapterRef: string;
  pagesRef: string;
  description: string;
  keyAuthors: string[];
  studyFocus: string;
}

export interface LevelMeta {
  level: DifficultyLevel;
  title: string;
  subtitle: string;
  description: string;
  examinerRole: string;
  targetSkill: string;
}

export interface QuizQuestion {
  id: string;
  baseId: string;
  level: DifficultyLevel;
  theme: ThemeId;
  examinerPersona: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  shortAnswer: string;
  detailedExplanation: string;
  defenseTip: string;
  sourceReference: string;
  variationTag?: string;
}

export type TimerPhase =
  | 'IDLE'
  | 'READING_QUESTION'
  | 'QUESTION_10S'
  | 'REVEAL_5S'
  | 'ROUND_COMPLETE';

export interface QuestionAttempt {
  question: QuizQuestion;
  selectedOptionIndex: number | null; // null means time expired (10s elapsed without click)
  isCorrect: boolean;
  timedOut: boolean;
  timeSpentMs: number;
  timestamp: number;
}

export interface RoundSummary {
  id: string;
  level: DifficultyLevel | 'MIXED';
  completedAt: number;
  attempts: QuestionAttempt[];
  correctCount: number;
  timeoutCount: number;
  incorrectCount: number;
  averageTimeMs: number;
  accuracyPercent: number;
  roundDiagnostic: string;
  themeBreakdown: Record<
    ThemeId,
    {
      total: number;
      correct: number;
      timeouts: number;
      avgTimeMs: number;
    }
  >;
}

export interface CrucialImprovementPoint {
  id: string;
  priority: 'CRÍTICO' | 'ELEVADO' | 'MODERADO';
  themeId: ThemeId;
  themeTitle: string;
  issueDetected: string;
  evidenceSummary: string;
  actionableAdvice: string;
  thesisReference: string;
  recommendedLevel: DifficultyLevel;
}

export interface PersonalizedPerformanceReport {
  totalQuestionsAnswered: number;
  totalRoundsCompleted: number;
  overallAccuracyPercent: number;
  overallTimeoutRatePercent: number;
  averageResponseTimeSec: number;
  readinessStatus: 'PRONTO PARA DEFESA' | 'PREPARAÇÃO SÓLIDA' | 'ATENÇÃO A LACUNAS' | 'REVISÃO URGENTE';
  readinessSummary: string;
  themePerformance: Array<{
    theme: ThemeMeta;
    total: number;
    correct: number;
    timeouts: number;
    accuracyPercent: number;
    avgTimeSec: number;
    status: 'DOMINADO' | 'EM CONSOLIDAÇÃO' | 'VULNERÁVEL' | 'NÃO TESTADO';
  }>;
  levelPerformance: Array<{
    levelMeta: LevelMeta;
    total: number;
    correct: number;
    timeouts: number;
    accuracyPercent: number;
    avgTimeSec: number;
  }>;
  crucialImprovements: CrucialImprovementPoint[];
}
