import {
  BASE_QUESTIONS,
  LEVEL_METADATA,
  PARAMETRIC_QUESTION_SEEDS,
  THEME_METADATA
} from '../data/questionsBank';
import {
  CrucialImprovementPoint,
  DifficultyLevel,
  PersonalizedPerformanceReport,
  QuestionAttempt,
  QuizQuestion,
  RoundSummary,
  ThemeId
} from '../types/quiz';

export const QUESTION_TIME_LIMIT_MS = 10000; // 10 seconds
export const REVEAL_TIME_LIMIT_MS = 5000; // 5 seconds

export const ALL_THEME_IDS: ThemeId[] = [
  'identificacao_problema',
  'ciclo_politicas',
  'historico_sne',
  'teoria_critica',
  'desafios_percepcoes',
  'metodologia_orcamento'
];

export const ALL_LEVELS: DifficultyLevel[] = [1, 2, 3, 4, 5];

/**
 * Examiners' dynamic framing prefixes for rotational synthesis when generating
 * endless variations at a given difficulty level.
 */
const EXAMINER_FRAMINGS_BY_LEVEL: Record<DifficultyLevel, Array<{ tag: string; prefix: string }>> = {
  1: [
    { tag: 'Verificação Directa', prefix: '' },
    { tag: 'Confirmação da Mesa', prefix: 'Para registo formal da banca examinadora: ' },
    { tag: 'Domínio Textual', prefix: 'De acordo com os dados explícitos do seu projecto de mestrado, responda: ' },
    { tag: 'Precisão Conceptual', prefix: 'Numa arguição rápida sobre os elementos estruturais do documento: ' }
  ],
  2: [
    { tag: 'Exposição Descritiva', prefix: '' },
    { tag: 'Coerência Capitular', prefix: 'Considerando a articulação descritiva do projecto na UP-Maputo: ' },
    { tag: 'Clarificação Estrutural', prefix: 'Se um membro do júri solicitar a explicitação organizacional deste ponto: ' },
    { tag: 'Mapeamento do Estudo', prefix: 'À luz da estrutura desenhada por Carlota Roberto Monjane (2026): ' }
  ],
  3: [
    { tag: 'Articulação Teórica', prefix: '' },
    { tag: 'Diálogo com Autores', prefix: 'Mobilizando o quadro teórico-conceptual da sua revisão da literatura: ' },
    { tag: 'Sustentação Epistemológica', prefix: 'Perante uma questão do vogal teórico sobre os fundamentos analíticos do estudo: ' },
    { tag: 'Lente Sociológica', prefix: 'Interpretando o fenómeno educativo através dos autores de referência citados no projecto: ' }
  ],
  4: [
    { tag: 'Evidência do Terreno', prefix: '' },
    { tag: 'Tensão Operacional', prefix: 'Confrontando a norma prescrita da Lei n.º 18/2018 com a realidade empírica de Maputo: ' },
    { tag: 'Diagnóstico Crítico', prefix: 'Caso o arguente peça indicadores concretos dos estrangulamentos nas Escolas Básicas Completas: ' },
    { tag: 'Voz dos Intervenientes', prefix: 'Analisando os desafios materiais, pedagógicos e subjectivos reportados no trabalho: ' }
  ],
  5: [
    { tag: 'Arguição de Alta Exigência', prefix: '' },
    { tag: 'Defesa Metodológica e Crítica', prefix: 'Num momento decisivo da defesa perante o arguente principal de mestrado: ' },
    { tag: 'Confrontação Dialéctica', prefix: 'Defendendo o rigor científico, a lacuna empírica e a tese central do seu projecto: ' },
    { tag: 'Inquirição Epistemológica', prefix: 'Sustentando criticamente as opções teóricas e metodológicas da dissertação: ' }
  ]
};

/**
 * Deterministic or seeded option shuffling so that the correct option is not always at index 0,
 * while preserving exact tracking of `correctIndex`.
 */
export function permuteQuestionOptions(
  question: QuizQuestion,
  rotationSeed: number
): QuizQuestion {
  const indexed = question.options.map((opt, idx) => ({
    text: opt,
    isCorrect: idx === question.correctIndex
  }));

  // Deterministic permutation based on question id + rotationSeed
  const hashBase = question.id
    .split('')
    .reduce((acc, ch, i) => acc + ch.charCodeAt(0) * (i + 1), rotationSeed * 31);

  for (let i = indexed.length - 1; i > 0; i--) {
    const j = (hashBase + i * 17) % (i + 1);
    const temp = indexed[i];
    indexed[i] = indexed[j];
    indexed[j] = temp;
  }

  const newOptions: [string, string, string, string] = [
    indexed[0].text,
    indexed[1].text,
    indexed[2].text,
    indexed[3].text
  ];
  const newCorrectIndex = indexed.findIndex((item) => item.isCorrect);

  return {
    ...question,
    options: newOptions,
    correctIndex: newCorrectIndex >= 0 ? newCorrectIndex : 0
  };
}

/**
 * Expands the base questions and parametric seeds for a given level (or all levels)
 * into a rich rotational pool with multiple examiner angles and option permutations.
 */
export function buildExpandedPoolForLevel(
  level: DifficultyLevel | 'MIXED',
  cycleGenerationIndex = 0
): QuizQuestion[] {
  const targetLevels: DifficultyLevel[] =
    level === 'MIXED' ? [1, 2, 3, 4, 5] : [level];

  const pool: QuizQuestion[] = [];

  for (const lvl of targetLevels) {
    const framings = EXAMINER_FRAMINGS_BY_LEVEL[lvl];
    const framing = framings[cycleGenerationIndex % framings.length];

    // 1. Base questions for this level
    const baseForLevel = BASE_QUESTIONS.filter((q) => q.level === lvl);
    for (let i = 0; i < baseForLevel.length; i++) {
      const bq = baseForLevel[i];
      const framedQuestionText =
        framing.prefix && !bq.question.startsWith(framing.prefix)
          ? `${framing.prefix}${bq.question.charAt(0).toLowerCase()}${bq.question.slice(1)}`
          : bq.question;

      const instanceId =
        cycleGenerationIndex === 0
          ? bq.id
          : `${bq.id}_CYC${cycleGenerationIndex}`;

      pool.push(
        permuteQuestionOptions(
          {
            ...bq,
            id: instanceId,
            baseId: bq.baseId,
            question: framedQuestionText,
            variationTag: framing.tag
          },
          cycleGenerationIndex + i + lvl * 7
        )
      );
    }

    // 2. Parametric seeds for this level
    const seedsForLevel = PARAMETRIC_QUESTION_SEEDS.filter((s) => s.level === lvl);
    for (let sIdx = 0; sIdx < seedsForLevel.length; sIdx++) {
      const seed = seedsForLevel[sIdx];
      const angle = seed.angles[cycleGenerationIndex % seed.angles.length];
      const rawQuestion: QuizQuestion = {
        id: `${seed.seedId}_ANG${cycleGenerationIndex % seed.angles.length}_CYC${cycleGenerationIndex}`,
        baseId: seed.seedId,
        level: seed.level,
        theme: seed.theme,
        examinerPersona: seed.examinerPersona,
        question: angle.questionText,
        options: [
          seed.correctStatement,
          seed.distractors[0],
          seed.distractors[1],
          seed.distractors[2]
        ],
        correctIndex: 0,
        shortAnswer: seed.shortAnswer,
        detailedExplanation: seed.detailedExplanation,
        defenseTip: seed.defenseTip,
        sourceReference: seed.sourceReference,
        variationTag: angle.tag
      };

      pool.push(
        permuteQuestionOptions(rawQuestion, cycleGenerationIndex + sIdx * 13 + lvl * 11)
      );
    }
  }

  return pool;
}

/**
 * Selects the next question ensuring:
 * 1. Non-sequential theme order (`candidate.theme !== lastTheme` whenever possible)
 * 2. Prioritizes unseen `baseId`s in the current session, and automatically advances
 *    `cycleGenerationIndex` to synthesize fresh examiner angles and option permutations
 *    when the user plays endlessly ("perguntas quase infinitas e rotativas").
 */
export function selectNextRotationalQuestion(params: {
  level: DifficultyLevel | 'MIXED';
  seenBaseIds: string[];
  lastTheme: ThemeId | null;
  recentThemes?: ThemeId[];
  stepCounter?: number;
}): { question: QuizQuestion; updatedSeenBaseIds: string[] } {
  const {
    level,
    seenBaseIds,
    lastTheme,
    recentThemes = [],
    stepCounter = 0
  } = params;

  const basePoolSize = buildExpandedPoolForLevel(level, 0).length;
  const cycleIndex =
    basePoolSize > 0 ? Math.floor(seenBaseIds.length / basePoolSize) : 0;

  const currentPool = buildExpandedPoolForLevel(level, cycleIndex);

  // Track which baseIds have been used in the current cycle
  const currentCycleSeenIds = new Set(
    seenBaseIds.slice(cycleIndex * basePoolSize)
  );

  let unseenCandidates = currentPool.filter(
    (q) => !currentCycleSeenIds.has(q.baseId)
  );

  if (unseenCandidates.length === 0) {
    unseenCandidates = buildExpandedPoolForLevel(level, cycleIndex + 1);
  }

  // Filter out candidates with the same theme as the immediately preceding question
  let differentThemeCandidates = lastTheme
    ? unseenCandidates.filter((q) => q.theme !== lastTheme)
    : unseenCandidates;

  // If all remaining unseen candidates happen to share `lastTheme`, pull from the next cycle with a different theme
  if (differentThemeCandidates.length === 0 && lastTheme) {
    const nextCyclePool = buildExpandedPoolForLevel(level, cycleIndex + 1);
    differentThemeCandidates = nextCyclePool.filter((q) => q.theme !== lastTheme);
  }

  // Further prefer themes not seen in the last 2 questions so rotation covers all 6 themes smoothly
  const leastRecentCandidates =
    recentThemes.length >= 2
      ? differentThemeCandidates.filter(
          (q) => !recentThemes.slice(-2).includes(q.theme)
        )
      : [];

  const finalCandidates =
    leastRecentCandidates.length > 0
      ? leastRecentCandidates
      : differentThemeCandidates.length > 0
        ? differentThemeCandidates
        : unseenCandidates;

  // Pick a rotational index that jumps across themes non-sequentially
  const pickIndex =
    (stepCounter * 7 + seenBaseIds.length * 5 + 3) % finalCandidates.length;
  const chosen = finalCandidates[pickIndex];

  return {
    question: chosen,
    updatedSeenBaseIds: [...seenBaseIds, chosen.baseId]
  };
}

/**
 * Generates a full rotational round of `count` questions where no two consecutive
 * questions have the same `theme`.
 */
export function generateRotationalRound(params: {
  level: DifficultyLevel | 'MIXED';
  count: number;
  initialSeenBaseIds?: string[];
}): { questions: QuizQuestion[]; updatedSeenBaseIds: string[] } {
  const { level, count, initialSeenBaseIds = [] } = params;
  const questions: QuizQuestion[] = [];
  let seenBaseIds = [...initialSeenBaseIds];
  let lastTheme: ThemeId | null = null;
  const recentThemes: ThemeId[] = [];

  for (let i = 0; i < count; i++) {
    const { question, updatedSeenBaseIds } = selectNextRotationalQuestion({
      level,
      seenBaseIds,
      lastTheme,
      recentThemes,
      stepCounter: i
    });
    questions.push(question);
    seenBaseIds = updatedSeenBaseIds;
    lastTheme = question.theme;
    recentThemes.push(question.theme);
  }

  return { questions, updatedSeenBaseIds: seenBaseIds };
}

/**
 * Computes a comprehensive summary and diagnostic for a completed round of questions.
 */
export function computeRoundSummary(
  level: DifficultyLevel | 'MIXED',
  attempts: QuestionAttempt[]
): RoundSummary {
  const total = attempts.length;
  const correctCount = attempts.filter((a) => a.isCorrect).length;
  const timeoutCount = attempts.filter((a) => a.timedOut).length;
  const incorrectCount = total - correctCount - timeoutCount;

  const totalTimeMs = attempts.reduce((acc, a) => acc + a.timeSpentMs, 0);
  const averageTimeMs = total > 0 ? Math.round(totalTimeMs / total) : 0;
  const accuracyPercent = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  const themeBreakdown: RoundSummary['themeBreakdown'] = {
    identificacao_problema: { total: 0, correct: 0, timeouts: 0, avgTimeMs: 0 },
    ciclo_politicas: { total: 0, correct: 0, timeouts: 0, avgTimeMs: 0 },
    historico_sne: { total: 0, correct: 0, timeouts: 0, avgTimeMs: 0 },
    teoria_critica: { total: 0, correct: 0, timeouts: 0, avgTimeMs: 0 },
    desafios_percepcoes: { total: 0, correct: 0, timeouts: 0, avgTimeMs: 0 },
    metodologia_orcamento: { total: 0, correct: 0, timeouts: 0, avgTimeMs: 0 }
  };

  for (const attempt of attempts) {
    const t = attempt.question.theme;
    const entry = themeBreakdown[t];
    entry.total += 1;
    if (attempt.isCorrect) entry.correct += 1;
    if (attempt.timedOut) entry.timeouts += 1;
    entry.avgTimeMs += attempt.timeSpentMs;
  }

  for (const themeId of ALL_THEME_IDS) {
    const entry = themeBreakdown[themeId];
    if (entry.total > 0) {
      entry.avgTimeMs = Math.round(entry.avgTimeMs / entry.total);
    }
  }

  let roundDiagnostic = '';
  if (accuracyPercent >= 85 && timeoutCount === 0) {
    roundDiagnostic =
      'Excelente prontidão de defesa! Respondeu com segurança e rapidez dentro dos 10 segundos regulamentares, demonstrando domínio firme das fontes, conceitos e dados empíricos do projecto.';
  } else if (accuracyPercent >= 70) {
    roundDiagnostic =
      'Bom domínio geral do projecto, mas existem oscilações pontuais sob pressão de tempo. Revise abaixo as justificativas e páginas das questões em que hesitou ou errou.';
  } else if (timeoutCount >= Math.ceil(total / 3)) {
    roundDiagnostic =
      'Atenção ao tempo de reacção: uma parte significativa das questões esgotou o limite de 10 segundos. Na defesa oral, a prontidão na citação de autores, leis e dados da amostra (N=52) transmite autoridade científica.';
  } else {
    roundDiagnostic =
      'Rodada de diagnóstico crítico: foram identificadas lacunas importantes na precisão conceptual ou nos dados do terreno. Utilize o feedback detalhado de cada questão abaixo para consolidar os argumentos antes da arguição.';
  }

  return {
    id: `ROUND_${Date.now()}`,
    level,
    completedAt: Date.now(),
    attempts,
    correctCount,
    timeoutCount,
    incorrectCount,
    averageTimeMs,
    accuracyPercent,
    roundDiagnostic,
    themeBreakdown
  };
}

/**
 * Generates a personalized performance report across all historical attempts and rounds,
 * pinpointing crucial improvement areas mapped to specific chapters and pages of the thesis.
 */
export function generatePerformanceReport(
  rounds: RoundSummary[],
  currentAttempts: QuestionAttempt[] = []
): PersonalizedPerformanceReport {
  const allAttempts: QuestionAttempt[] = [
    ...rounds.flatMap((r) => r.attempts),
    ...currentAttempts
  ];

  const totalQuestionsAnswered = allAttempts.length;
  const totalRoundsCompleted = rounds.length;

  const totalCorrect = allAttempts.filter((a) => a.isCorrect).length;
  const totalTimeouts = allAttempts.filter((a) => a.timedOut).length;
  const totalTimeMs = allAttempts.reduce((acc, a) => acc + a.timeSpentMs, 0);

  const overallAccuracyPercent =
    totalQuestionsAnswered > 0
      ? Math.round((totalCorrect / totalQuestionsAnswered) * 100)
      : 0;
  const overallTimeoutRatePercent =
    totalQuestionsAnswered > 0
      ? Math.round((totalTimeouts / totalQuestionsAnswered) * 100)
      : 0;
  const averageResponseTimeSec =
    totalQuestionsAnswered > 0
      ? Number((totalTimeMs / totalQuestionsAnswered / 1000).toFixed(1))
      : 0;

  const themePerformance = ALL_THEME_IDS.map((themeId) => {
    const themeMeta = THEME_METADATA[themeId];
    const themeAttempts = allAttempts.filter((a) => a.question.theme === themeId);
    const total = themeAttempts.length;
    const correct = themeAttempts.filter((a) => a.isCorrect).length;
    const timeouts = themeAttempts.filter((a) => a.timedOut).length;
    const accuracyPercent = total > 0 ? Math.round((correct / total) * 100) : 0;
    const avgTimeSec =
      total > 0
        ? Number(
            (
              themeAttempts.reduce((acc, a) => acc + a.timeSpentMs, 0) /
              total /
              1000
            ).toFixed(1)
          )
        : 0;

    let status: 'DOMINADO' | 'EM CONSOLIDAÇÃO' | 'VULNERÁVEL' | 'NÃO TESTADO' =
      'NÃO TESTADO';
    if (total > 0) {
      if (accuracyPercent >= 80 && timeouts === 0) {
        status = 'DOMINADO';
      } else if (accuracyPercent >= 60) {
        status = 'EM CONSOLIDAÇÃO';
      } else {
        status = 'VULNERÁVEL';
      }
    }

    return {
      theme: themeMeta,
      total,
      correct,
      timeouts,
      accuracyPercent,
      avgTimeSec,
      status
    };
  });

  const levelPerformance = ALL_LEVELS.map((lvl) => {
    const levelMeta = LEVEL_METADATA[lvl];
    const lvlAttempts = allAttempts.filter((a) => a.question.level === lvl);
    const total = lvlAttempts.length;
    const correct = lvlAttempts.filter((a) => a.isCorrect).length;
    const timeouts = lvlAttempts.filter((a) => a.timedOut).length;
    const accuracyPercent = total > 0 ? Math.round((correct / total) * 100) : 0;
    const avgTimeSec =
      total > 0
        ? Number(
            (
              lvlAttempts.reduce((acc, a) => acc + a.timeSpentMs, 0) /
              total /
              1000
            ).toFixed(1)
          )
        : 0;

    return {
      levelMeta,
      total,
      correct,
      timeouts,
      accuracyPercent,
      avgTimeSec
    };
  });

  // Identify Crucial Improvement Points
  const crucialImprovements: CrucialImprovementPoint[] = [];

  for (const tp of themePerformance) {
    if (tp.total > 0 && tp.accuracyPercent < 75) {
      const priority: CrucialImprovementPoint['priority'] =
        tp.accuracyPercent < 50 ? 'CRÍTICO' : 'ELEVADO';
      crucialImprovements.push({
        id: `IMP_THEME_${tp.theme.id}`,
        priority,
        themeId: tp.theme.id,
        themeTitle: tp.theme.title,
        issueDetected: `Taxa de acerto de ${tp.accuracyPercent}% (${tp.correct}/${tp.total}) no eixo "${tp.theme.shortTitle}"${tp.timeouts > 0 ? `, com ${tp.timeouts} expiração(ões) do tempo de 10s` : ''}.`,
        evidenceSummary: `Tempo médio de reacção: ${tp.avgTimeSec}s. Autores-chave envolvidos: ${tp.theme.keyAuthors.join(', ')}.`,
        actionableAdvice: tp.theme.studyFocus,
        thesisReference: `${tp.theme.chapterRef} — ${tp.theme.pagesRef}`,
        recommendedLevel: tp.accuracyPercent < 50 ? 2 : 4
      });
    } else if (tp.total > 0 && tp.avgTimeSec >= 7.8) {
      crucialImprovements.push({
        id: `IMP_SPEED_${tp.theme.id}`,
        priority: 'MODERADO',
        themeId: tp.theme.id,
        themeTitle: tp.theme.title,
        issueDetected: `Hesitação temporal elevada (${tp.avgTimeSec}s em média de 10s) ao responder questões sobre "${tp.theme.shortTitle}".`,
        evidenceSummary: `Embora tenha acertado ${tp.accuracyPercent}% das questões, o tempo próximo do limite indica necessidade de maior automatismo verbal na defesa.`,
        actionableAdvice: `Pratique a verbalização imediata dos conceitos-chave: ${tp.theme.studyFocus}`,
        thesisReference: `${tp.theme.chapterRef} — ${tp.theme.pagesRef}`,
        recommendedLevel: 3
      });
    }
  }

  // If some themes haven't been tested yet or if user is just starting out, provide proactive defense preparation focus points
  const untestedThemes = themePerformance.filter((t) => t.total === 0);
  if (crucialImprovements.length === 0 && untestedThemes.length > 0) {
    for (const ut of untestedThemes.slice(0, 3)) {
      crucialImprovements.push({
        id: `IMP_UNTESTED_${ut.theme.id}`,
        priority: 'MODERADO',
        themeId: ut.theme.id,
        themeTitle: ut.theme.title,
        issueDetected: `Eixo temático "${ut.theme.shortTitle}" ainda não avaliado nas rodadas realizadas.`,
        evidenceSummary: `A banca de mestrado na UP-Maputo distribui as perguntas entre enquadramento legal, teoria sociológica e metodologia.`,
        actionableAdvice: ut.theme.studyFocus,
        thesisReference: `${ut.theme.chapterRef} — ${ut.theme.pagesRef}`,
        recommendedLevel: 3
      });
    }
  }

  // Sort improvements by priority: CRÍTICO -> ELEVADO -> MODERADO
  const priorityOrder: Record<CrucialImprovementPoint['priority'], number> = {
    CRÍTICO: 1,
    ELEVADO: 2,
    MODERADO: 3
  };
  crucialImprovements.sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  );

  let readinessStatus: PersonalizedPerformanceReport['readinessStatus'] =
    'ATENÇÃO A LACUNAS';
  let readinessSummary = '';

  if (totalQuestionsAnswered === 0) {
    readinessStatus = 'ATENÇÃO A LACUNAS';
    readinessSummary =
      'Ainda não realizou rodadas completas. Inicie uma rodada cronometrada (10s por pergunta + 5s de visualização da resposta) para gerar o seu diagnóstico empírico personalizado.';
  } else if (overallAccuracyPercent >= 85 && overallTimeoutRatePercent <= 10) {
    readinessStatus = 'PRONTO PARA DEFESA';
    readinessSummary =
      'Desempenho de excelência académica! Demonstra domínio sólido da Lei n.º 18/2018, do Ciclo de Políticas (Ball & Bowe; Mainardes) e da Metodologia (N=52, Yin, Bardin) dentro da janela de 10 segundos.';
  } else if (overallAccuracyPercent >= 70) {
    readinessStatus = 'PREPARAÇÃO SÓLIDA';
    readinessSummary =
      'Apresenta boa consistência teórica e metodológica, mas existem pontos específicos de melhoria listados abaixo que devem ser revistos para blindar a sua defesa perante a banca.';
  } else if (overallAccuracyPercent >= 50) {
    readinessStatus = 'ATENÇÃO A LACUNAS';
    readinessSummary =
      'Domínio parcial do projecto. Há vulnerabilidades em conceitos-chave ou dados quantitativos do estudo que podem ser exploradas pelos arguentes. Foque nos pontos críticos destacados.';
  } else {
    readinessStatus = 'REVISÃO URGENTE';
    readinessSummary =
      'Recomenda-se revisão imediata dos capítulos indicados nos Pontos de Melhoria Cruciais e treino progressivo a partir do Nível 1 e Nível 2 para consolidar a base do projecto.';
  }

  return {
    totalQuestionsAnswered,
    totalRoundsCompleted,
    overallAccuracyPercent,
    overallTimeoutRatePercent,
    averageResponseTimeSec,
    readinessStatus,
    readinessSummary,
    themePerformance,
    levelPerformance,
    crucialImprovements
  };
}
