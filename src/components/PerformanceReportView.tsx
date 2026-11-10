import React from 'react';
import {
  AlertTriangle,
  Award,
  BookOpen,
  CheckCircle2,
  Play,
  RotateCcw,
  ShieldAlert
} from 'lucide-react';
import {
  DifficultyLevel,
  PersonalizedPerformanceReport,
  RoundSummary
} from '../types/quiz';

interface PerformanceReportViewProps {
  report: PersonalizedPerformanceReport;
  roundsHistory: RoundSummary[];
  onStartTargetedLevel: (level: DifficultyLevel) => void;
  onLoadDiagnosticSimulation: () => void;
  onClearHistory: () => void;
}

export const PerformanceReportView: React.FC<PerformanceReportViewProps> = ({
  report,
  roundsHistory,
  onStartTargetedLevel,
  onLoadDiagnosticSimulation,
  onClearHistory
}) => {
  return (
    <section
      aria-label="Relatório de Desempenho Personalizado"
      className="max-w-[1320px] mx-auto px-6 py-10 space-y-10"
    >
      {/* Top Executive Diagnostic Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-xs">
        <div className="flex flex-wrap items-start justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="max-w-3xl">
            <p className="text-xs text-slate-500">
              <span>Relatório de Desempenho Personalizado</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>Mestrado em Políticas Públicas Educacionais (UP-Maputo, 2026)</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>Carlota Roberto Monjane</span>
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1 font-serif-display">
              Diagnóstico de Prontidão para a Defesa & Pontos de Melhoria Cruciais
            </h1>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {report.readinessSummary}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {report.totalQuestionsAnswered === 0 && (
              <button
                type="button"
                onClick={onLoadDiagnosticSimulation}
                className="px-4 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Carregar Dados de Exemplo para Demonstração
              </button>
            )}

            <button
              type="button"
              onClick={() => onStartTargetedLevel(3)}
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Play className="w-4 h-4" />
              <span>Praticar Nova Rodada (10s/5s)</span>
            </button>

            {report.totalQuestionsAnswered > 0 && (
              <button
                type="button"
                onClick={onClearHistory}
                className="flex items-center gap-1.5 px-3 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar Histórico</span>
              </button>
            )}
          </div>
        </div>

        {/* 4-Column KPI Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          <div>
            <div className="text-xs text-slate-500">Estado de Prontidão</div>
            <div
              className={`text-lg font-bold mt-1 ${
                report.readinessStatus === 'PRONTO PARA DEFESA'
                  ? 'text-[#059669]'
                  : report.readinessStatus === 'PREPARAÇÃO SÓLIDA'
                    ? 'text-[#0284C7]'
                    : report.readinessStatus === 'ATENÇÃO A LACUNAS'
                      ? 'text-[#D97706]'
                      : 'text-[#DC2626]'
              }`}
            >
              {report.readinessStatus === 'PRONTO PARA DEFESA' && '● '}
              {report.readinessStatus === 'PREPARAÇÃO SÓLIDA' && '● '}
              {report.readinessStatus === 'ATENÇÃO A LACUNAS' && '▲ '}
              {report.readinessStatus === 'REVISÃO URGENTE' && '✕ '}
              {report.readinessStatus}
            </div>
            <div className="text-xs text-slate-500 mt-0.5 tabular-nums">
              {report.totalRoundsCompleted} rodadas concluídas
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-500">Precisão Global Acumulada</div>
            <div className="text-2xl font-mono font-bold text-slate-900 mt-1 tabular-nums">
              {report.overallAccuracyPercent}%
            </div>
            <div className="text-xs text-slate-500 mt-0.5 tabular-nums">
              Total de {report.totalQuestionsAnswered} questões respondidas
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-500">Velocidade Média de Resposta</div>
            <div className="text-2xl font-mono font-bold text-slate-900 mt-1 tabular-nums">
              {report.averageResponseTimeSec}s
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              Meta recomendada: ≤ 6.5s (de 10.0s)
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-500">Taxa de Expiração (10s)</div>
            <div className="text-2xl font-mono font-bold text-[#D97706] mt-1 tabular-nums">
              {report.overallTimeoutRatePercent}%
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              Perguntas não respondidas a tempo
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: PONTOS DE MELHORIA CRUCIAIS */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-bold text-slate-900 font-serif-display">
              01. Pontos de Melhoria Cruciais para a Defesa Oral
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Identificação automática das vulnerabilidades temáticas, hesitações temporais e secções do projecto que exigem reforço imediato.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-600 tabular-nums">
            {report.crucialImprovements.length} ponto(s) prioritário(s)
          </span>
        </div>

        <div className="mt-6 space-y-4">
          {report.crucialImprovements.map((imp, idx) => {
            const isCritical = imp.priority === 'CRÍTICO';
            const isHigh = imp.priority === 'ELEVADO';

            return (
              <div
                key={imp.id}
                className="p-6 rounded-xl border border-slate-200 bg-slate-50/60 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-4xl">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span
                      className={`font-mono font-bold ${
                        isCritical
                          ? 'text-[#DC2626]'
                          : isHigh
                            ? 'text-[#D97706]'
                            : 'text-[#0284C7]'
                      }`}
                    >
                      {isCritical
                        ? '✕ PRIORIDADE CRÍTICA'
                        : isHigh
                          ? '▲ PRIORIDADE ELEVADA'
                          : '● REFORÇO RECOMENDADO'}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-slate-800">
                      0{idx + 1}. {imp.themeTitle}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-slate-500">
                      {imp.thesisReference}
                    </span>
                  </div>

                  <p className="text-base font-semibold text-slate-900">
                    {imp.issueDetected}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {imp.evidenceSummary}
                  </p>
                  <p className="text-sm text-slate-800 pt-1">
                    <strong className="text-[#0284C7]">Acção de Estudo Recomendada: </strong>
                    {imp.actionableAdvice}
                  </p>
                </div>

                <div className="shrink-0">
                  <button
                    type="button"
                    onClick={() => onStartTargetedLevel(imp.recommendedLevel)}
                    className="px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Treinar no Nível {imp.recommendedLevel}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 2: MATRIZ POR EIXO TEMÁTICO DO PROJECTO */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-xs">
        <h2 className="text-xl font-bold text-slate-900 font-serif-display">
          02. Desempenho por Eixo Temático da Dissertação
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Avaliação detalhada da sua consistência em cada um dos 6 grandes blocos teóricos, históricos, empíricos e metodológicos do trabalho.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-xs text-slate-500">
                <th className="py-3 pr-4 font-semibold">Eixo Temático do Trabalho</th>
                <th className="py-3 px-4 font-semibold">Capítulos & Páginas</th>
                <th className="py-3 px-4 font-semibold text-right">Questões</th>
                <th className="py-3 px-4 font-semibold text-right">Taxa de Acerto</th>
                <th className="py-3 px-4 font-semibold text-right">Tempo Médio</th>
                <th className="py-3 pl-4 font-semibold">Diagnóstico do Eixo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {report.themePerformance.map((tp) => (
                <tr key={tp.theme.id} className="hover:bg-slate-50/70">
                  <td className="py-4 pr-4">
                    <div className="font-semibold text-slate-900">
                      {tp.theme.title}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Autores: {tp.theme.keyAuthors.join(' · ')}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-xs font-mono text-slate-600 whitespace-nowrap">
                    {tp.theme.pagesRef}
                  </td>
                  <td className="py-4 px-4 text-right font-mono tabular-nums text-slate-700">
                    {tp.total}
                  </td>
                  <td className="py-4 px-4 text-right font-mono font-semibold tabular-nums">
                    {tp.total > 0 ? `${tp.accuracyPercent}%` : '—'}
                  </td>
                  <td className="py-4 px-4 text-right font-mono tabular-nums text-slate-600">
                    {tp.total > 0 ? `${tp.avgTimeSec}s` : '—'}
                  </td>
                  <td className="py-4 pl-4 text-xs font-mono font-semibold whitespace-nowrap">
                    {tp.status === 'DOMINADO' && (
                      <span className="text-[#059669]">● DOMINADO</span>
                    )}
                    {tp.status === 'EM CONSOLIDAÇÃO' && (
                      <span className="text-[#0284C7]">▲ EM CONSOLIDAÇÃO</span>
                    )}
                    {tp.status === 'VULNERÁVEL' && (
                      <span className="text-[#DC2626]">✕ VULNERÁVEL</span>
                    )}
                    {tp.status === 'NÃO TESTADO' && (
                      <span className="text-slate-400">○ NÃO TESTADO</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 3: DESEMPENHO POR NÍVEL DE DIFICULDADE (1 A 5) */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-xs">
        <h2 className="text-xl font-bold text-slate-900 font-serif-display">
          03. Progressão nos 5 Níveis de Dificuldade da Arguição
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Acompanhe o seu domínio desde os dados estruturais básicos (Nível 1) até às questões complexas de banca examinadora (Nível 5).
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4">
          {report.levelPerformance.map((lp) => (
            <div
              key={lp.levelMeta.level}
              className="p-5 rounded-xl border border-slate-200 bg-slate-50/40 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-[#0284C7] font-semibold">
                  NÍVEL {lp.levelMeta.level}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mt-1">
                  {lp.levelMeta.subtitle}
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {lp.levelMeta.targetSkill}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono tabular-nums">
                  <span className="text-slate-500">Precisão:</span>
                  <span className="font-bold text-slate-900">
                    {lp.total > 0 ? `${lp.accuracyPercent}% (${lp.correct}/${lp.total})` : 'Sem registo'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono tabular-nums">
                  <span className="text-slate-500">Tempo Médio:</span>
                  <span className="text-slate-700">
                    {lp.total > 0 ? `${lp.avgTimeSec}s` : '—'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => onStartTargetedLevel(lp.levelMeta.level)}
                  className="w-full mt-2 py-2 px-3 text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Treinar Nível {lp.levelMeta.level}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
