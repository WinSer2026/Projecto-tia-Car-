import React from 'react';
import {
  CheckCircle2,
  Clock,
  FileBarChart,
  Play,
  RotateCcw,
  XCircle
} from 'lucide-react';
import { LEVEL_METADATA, THEME_METADATA } from '../data/questionsBank';
import { DifficultyLevel, RoundSummary } from '../types/quiz';
import { ALL_THEME_IDS } from '../utils/quizEngine';

interface RoundFeedbackViewProps {
  round: RoundSummary;
  onStartNewRoundSameLevel: () => void;
  onStartNextLevelRound: (nextLevel: DifficultyLevel) => void;
  onOpenFullReport: () => void;
}

export const RoundFeedbackView: React.FC<RoundFeedbackViewProps> = ({
  round,
  onStartNewRoundSameLevel,
  onStartNextLevelRound,
  onOpenFullReport
}) => {
  const nextSuggestedLevel: DifficultyLevel =
    typeof round.level === 'number' && round.level < 5
      ? ((round.level + 1) as DifficultyLevel)
      : 5;

  return (
    <section
      aria-label="Feedback Detalhado da Rodada"
      className="max-w-[1200px] mx-auto px-6 py-10 space-y-10"
    >
      {/* Header Summary */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-xs">
        <div className="flex flex-wrap items-start justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="max-w-2xl">
            <p className="text-xs text-slate-500">
              <span>Feedback Detalhado da Rodada</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>
                {round.level === 'MIXED'
                  ? 'Níveis Mistos (1 a 5)'
                  : LEVEL_METADATA[round.level].title}
              </span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>{round.attempts.length} Questões Analisadas</span>
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1 font-serif-display">
              Diagnóstico da Rodada de Arguição
            </h1>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {round.roundDiagnostic}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onStartNewRoundSameLevel}
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Nova Rodada Rotativa (Inédita)</span>
            </button>

            {typeof round.level === 'number' && round.level < 5 && (
              <button
                type="button"
                onClick={() => onStartNextLevelRound(nextSuggestedLevel)}
                className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Play className="w-4 h-4" />
                <span>Avançar para Nível {nextSuggestedLevel}</span>
              </button>
            )}

            <button
              type="button"
              onClick={onOpenFullReport}
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-900 border border-slate-300 bg-white hover:bg-slate-50 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <FileBarChart className="w-4 h-4" />
              <span>Ver Relatório Personalizado Completo</span>
            </button>
          </div>
        </div>

        {/* 4-Column Quantitative Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
          <div>
            <div className="text-xs text-slate-500">Taxa de Domínio</div>
            <div className="text-2xl font-mono font-bold text-slate-900 mt-1 tabular-nums">
              {round.accuracyPercent}%
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              {round.correctCount} de {round.attempts.length} correctas
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-500">Tempo Médio de Reacção</div>
            <div className="text-2xl font-mono font-bold text-slate-900 mt-1 tabular-nums">
              {(round.averageTimeMs / 1000).toFixed(1)}s
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              Limite por pergunta: 10.0s
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-500">Respostas Expiradas (10s)</div>
            <div className="text-2xl font-mono font-bold text-[#D97706] mt-1 tabular-nums">
              {round.timeoutCount}
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              {round.timeoutCount === 0
                ? '● Nenhuma expiração de tempo'
                : '▲ Requer resposta mais ágil'}
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-500">Erros Conceptuais</div>
            <div className="text-2xl font-mono font-bold text-[#DC2626] mt-1 tabular-nums">
              {round.incorrectCount}
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              {round.incorrectCount === 0
                ? '● Zero erros conceptuais'
                : '✕ Rever fundamentação abaixo'}
            </div>
          </div>
        </div>
      </div>

      {/* Breakdown by Thematic Axis in this Round */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-xs">
        <h2 className="text-xl font-bold text-slate-900 font-serif-display">
          Desempenho por Eixo Temático na Rodada
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Síntese das áreas do projecto avaliadas durante esta rodada rotativa não-sequencial.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ALL_THEME_IDS.map((themeId) => {
            const stats = round.themeBreakdown[themeId];
            const meta = THEME_METADATA[themeId];
            if (stats.total === 0) return null;

            const pct = Math.round((stats.correct / stats.total) * 100);
            return (
              <div
                key={themeId}
                className="p-4 rounded-lg border border-slate-200 bg-slate-50/50 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs text-slate-500 font-mono">
                    {meta.pagesRef}
                  </div>
                  <div className="text-sm font-semibold text-slate-900 mt-1">
                    {meta.title}
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono tabular-nums">
                  <span
                    className={`font-semibold ${
                      pct >= 80
                        ? 'text-[#059669]'
                        : pct >= 50
                          ? 'text-[#D97706]'
                          : 'text-[#DC2626]'
                    }`}
                  >
                    {pct >= 80 ? '● ' : pct >= 50 ? '▲ ' : '✕ '}
                    {pct}% ({stats.correct}/{stats.total})
                  </span>
                  <span className="text-slate-500">
                    Média: {(stats.avgTimeMs / 1000).toFixed(1)}s
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Question-by-Question Detailed Review */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 font-serif-display">
          Revisão Analítica Questão a Questão
        </h2>

        {round.attempts.map((attempt, index) => {
          const q = attempt.question;
          const themeMeta = THEME_METADATA[q.theme];
          const userChosenText =
            attempt.selectedOptionIndex !== null
              ? q.options[attempt.selectedOptionIndex]
              : 'Tempo de 10 segundos esgotado (sem selecção)';
          const correctText = q.options[q.correctIndex];

          return (
            <article
              key={`${q.id}_${index}`}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 pb-3 border-b border-slate-100">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono font-semibold text-slate-800">
                    Questão {index + 1}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Nível {q.level}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#0284C7] font-medium">
                    {themeMeta.shortTitle}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">
                    Tempo: {(attempt.timeSpentMs / 1000).toFixed(1)}s
                  </span>
                </div>

                <div className="flex items-center gap-1.5 font-semibold">
                  {attempt.isCorrect ? (
                    <span className="text-[#059669] flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>● ACERTO FUNDAMENTADO</span>
                    </span>
                  ) : attempt.timedOut ? (
                    <span className="text-[#D97706] flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>▲ TEMPO ESGOTADO (10S)</span>
                    </span>
                  ) : (
                    <span className="text-[#DC2626] flex items-center gap-1">
                      <XCircle className="w-4 h-4" />
                      <span>✕ RESPOSTA INCORRECTA</span>
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-base md:text-lg font-semibold text-slate-900">
                {q.question}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div
                  className={`p-3.5 rounded-lg border ${
                    attempt.isCorrect
                      ? 'bg-emerald-50/50 border-emerald-200 text-slate-800'
                      : 'bg-red-50/50 border-red-200 text-slate-800'
                  }`}
                >
                  <div className="font-semibold text-slate-500 mb-1">
                    A Sua Resposta ({attempt.timedOut ? 'Expirou 10s' : `${(attempt.timeSpentMs / 1000).toFixed(1)}s`}):
                  </div>
                  <div className="text-sm">{userChosenText}</div>
                </div>

                <div className="p-3.5 rounded-lg border bg-emerald-50/50 border-emerald-200 text-slate-900">
                  <div className="font-semibold text-[#059669] mb-1">
                    ✓ Resposta Correcta no Projecto:
                  </div>
                  <div className="text-sm font-medium">{correctText}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs space-y-2">
                <p className="text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">Explicação e Evidência no Trabalho: </strong>
                  {q.detailedExplanation}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-2 text-slate-500 pt-1">
                  <span>
                    <strong className="text-[#0284C7]">Dica para a Banca: </strong>
                    {q.defenseTip}
                  </span>
                  <span className="font-mono text-slate-600 shrink-0">
                    Fonte: {q.sourceReference}
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
