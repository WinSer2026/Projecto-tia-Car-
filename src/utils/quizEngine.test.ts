import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ALL_LEVELS,
  QUESTION_TIME_LIMIT_MS,
  REVEAL_TIME_LIMIT_MS,
  buildExpandedPoolForLevel,
  computeRoundSummary,
  generatePerformanceReport,
  generateRotationalRound
} from './quizEngine';
import { formatTextForPortugueseSpeech } from './speechEngine';
import { QuestionAttempt } from '../types/quiz';

test('timer constants match 10s question and 5s reveal requirements', () => {
  assert.equal(QUESTION_TIME_LIMIT_MS, 10000);
  assert.equal(REVEAL_TIME_LIMIT_MS, 5000);
});

test('every difficulty level 1 to 5 generates non-sequential theme rounds and supports endless rotation', () => {
  for (const level of ALL_LEVELS) {
    const pool = buildExpandedPoolForLevel(level, 0);
    assert.ok(pool.length >= 6, `Level ${level} should have at least 6 questions in initial cycle`);

    // Generate a large 25-question round for this single level to verify endless rotation across cycles
    const { questions } = generateRotationalRound({
      level,
      count: 25
    });

    assert.equal(questions.length, 25);

    // Verify no two consecutive questions have the same theme (non-sequential topic order)
    for (let i = 1; i < questions.length; i++) {
      assert.notEqual(
        questions[i].theme,
        questions[i - 1].theme,
        `Consecutive questions at index ${i - 1} and ${i} in Level ${level} must not share the same theme (${questions[i].theme})`
      );
    }
  }
});

test('computeRoundSummary and generatePerformanceReport identify crucial improvement points', () => {
  const { questions } = generateRotationalRound({ level: 3, count: 6 });

  const simulatedAttempts: QuestionAttempt[] = questions.map((q, idx) => {
    const isCorrect = idx % 2 === 0; // 50% accuracy
    const timedOut = idx === 1;
    return {
      question: q,
      selectedOptionIndex: timedOut
        ? null
        : isCorrect
          ? q.correctIndex
          : (q.correctIndex + 1) % 4,
      isCorrect,
      timedOut,
      timeSpentMs: timedOut ? 10000 : 4500,
      timestamp: Date.now() + idx * 1000
    };
  });

  const roundSummary = computeRoundSummary(3, simulatedAttempts);
  assert.equal(roundSummary.correctCount, 3);
  assert.equal(roundSummary.timeoutCount, 1);
  assert.equal(roundSummary.incorrectCount, 2);
  assert.equal(roundSummary.accuracyPercent, 50);

  const report = generatePerformanceReport([roundSummary]);
  assert.equal(report.totalQuestionsAnswered, 6);
  assert.equal(report.totalRoundsCompleted, 1);
  assert.equal(report.overallAccuracyPercent, 50);
  assert.ok(
    report.crucialImprovements.length > 0,
    'Report must surface crucial improvement points when accuracy is 50%'
  );
});

test('formatTextForPortugueseSpeech expands academic abbreviations and ordinal classes naturally', () => {
  const sample =
    'Segundo a Lei n.º 18/2018 e a amostra N = 52 nas 7.ª, 8.ª e 9.ª classes (p. 14):';
  const normalized = formatTextForPortugueseSpeech(sample);
  assert.ok(normalized.includes('Lei número 18 barra 2018'));
  assert.ok(normalized.includes('N igual a 52'));
  assert.ok(normalized.includes('sétima, oitava e nona classes'));
  assert.ok(normalized.includes('página 14'));
});

