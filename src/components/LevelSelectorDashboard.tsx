import React from 'react';
import {
  BookOpen,
  Clock,
  FileBarChart,
  Layers,
  Play,
  Shuffle
} from 'lucide-react';
import { LEVEL_METADATA, THEME_METADATA } from '../data/questionsBank';
import {
  DifficultyLevel,
  PersonalizedPerformanceReport
} from '../types/quiz';
import { ALL_LEVELS, ALL_THEME_IDS } from '../utils/quizEngine';

interface LevelSelectorDashboardProps {
  report: PersonalizedPerformanceReport;
  roundTargetCount: number | 'INFINITE';
  onChangeRoundTarget: (target: number | 'INFINITE') => void;
  onStartLevelQuiz: (level: DifficultyLevel | 'MIXED') => void;
  onOpenReport: () => void;
  onOpenStudyGuide: () => void;
}

export const LevelSelectorDashboard: React.FC<LevelSelectorDashboardProps> = ({
  report,
  roundTargetCount,
  onChangeRoundTarget,
  onStartLevelQuiz,
  onOpenReport,
  onOpenStudyGuide
}) => {
  return (
    <div className="max-w-[1320px] mx-auto px-6 py-10 space-y-12">
      {/* HERO SECTION: 2-Column Balanced Split + 4-Column KPI Strip Below */}
      <section className="bg-white border border-slate-200 rounded-xl p-8 md:p-10 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span>Universidade Pedagógica de Maputo</span>
                <span aria-hidden="true">·</span>
                <span>Mestrado em Políticas Públicas Educacionais (2026)</span>
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-slate-700">
                  Carlota Roberto Monjane
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight font-serif-display max-w-2xl">
                Simulador de Arguição & Quiz de Defesa: Ensino Básico de 7 para 9 Classes
              </h1>

              <p className="text-base text-slate-600 leading-relaxed max-w-[68ch]">
                Prepare-se para responder com segurança às questões da banca examinadora sobre a{' '}
                <strong className="text-slate-800">Lei n.º 18/2018</strong>, o{' '}
                <strong className="text-slate-800">Ciclo de Políticas de Ball e Bowe</strong>, os{' '}
                <strong className="text-slate-800">desafios das Escolas Básicas Completas em Maputo</strong> e o{' '}
                <strong className="text-slate-800">desenho metodológico (N = 52)</strong>. Cada pergunta dispõe de{' '}
                <strong className="font-mono text-slate-900">10 segundos</strong> de resposta, seguidos de{' '}
                <strong className="font-mono text-slate-900">5 segundos</strong> de visualização automática da resposta fundamentada no trabalho.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onStartLevelQuiz(1)}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Play className="w-4 h-4" />
                <span>Começar Nível 1 (10s / 5s)</span>
              </button>

              <button
                type="button"
                onClick={() => onStartLevelQuiz('MIXED')}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Shuffle className="w-4 h-4" />
                <span>Banca Completa (Níveis 1–5)</span>
              </button>

              <button
                type="button"
                onClick={onOpenReport}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <FileBarChart className="w-4 h-4" />
                <span>Relatório de Desempenho</span>
              </button>
            </div>
          </div>

          {/* Right Column: Timer Protocol & Round Config Card */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-[#0284C7]">
                PROTOCOLO CRONOMETRADO DA DEFESA
              </div>
              <h2 className="text-lg font-bold text-slate-900 font-serif-display">
                Ciclo Automático 10s + 5s
              </h2>
              <ul className="space-y-2.5 text-xs text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">10 Segundos de Pergunta:</strong> Treina o reflexo mental imediato perante a inquirição oral dos arguentes.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <BookOpen className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">5 Segundos de Visualização da Resposta:</strong> Exibe imediatamente a resposta exacta do projecto, página, autor e dica de defesa.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Layers className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Rotação Não-Sequencial:</strong> Duas perguntas seguidas nunca pertencem ao mesmo eixo temático.
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-200 space-y-2">
              <div className="text-xs font-semibold text-slate-700">
                Formato da Rodada de Perguntas:
              </div>
              <div
                role="group"
                aria-label="Seleccionar formato da rodada"
                className="grid grid-cols-3 gap-1.5 p-1 bg-white rounded-lg border border-slate-200"
              >
                {([6, 10, 'INFINITE'] as const).map((target) => (
                  <button
                    key={String(target)}
                    type="button"
                    onClick={() => onChangeRoundTarget(target)}
                    className={`py-1.5 px-2 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      roundTargetCount === target
                        ? 'bg-[#0284C7] text-white font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {target === 'INFINITE' ? 'Infinito' : `${target} Perg.`}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column KPI Strip Below Hero Split */}
        <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="text-xs text-slate-500">Níveis Progressivos</div>
            <div className="text-xl font-mono font-bold text-slate-900 mt-0.5 tabular-nums">
              Nível 1 a Nível 5
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              Do domínio factual à arguição crítica
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-500">Amostra Empírica no Trabalho</div>
            <div className="text-xl font-mono font-bold text-slate-900 mt-0.5 tabular-nums">
              N = 52 Sujeitos
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              4 EBCs (KaMpfumo, KaMavota, KaMubukwana)
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-500">Questões Respondidas</div>
            <div className="text-xl font-mono font-bold text-[#0284C7] mt-0.5 tabular-nums">
              {report.totalQuestionsAnswered} questões
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              Precisão acumulada: {report.overallAccuracyPercent}%
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-500">Estado de Preparação</div>
            <div className="text-xl font-bold text-slate-900 mt-0.5">
              {report.readinessStatus}
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              {report.crucialImprovements.length} pontos de atenção mapeados
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: OS 5 NÍVEIS DE DIFICULDADE (NÍVEL 1 ATÉ NÍVEL 5) */}
      <section aria-label="Selecção de Nível de Dificuldade" className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 font-serif-display">
              01. Escolha o Nível de Dificuldade da Arguição (Nível 1 a Nível 5)
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Cada nível possui banco rotativo gerador com variações contínuas de ângulo de pergunta e ordem não-sequencial de temas.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenStudyGuide}
            className="text-xs font-semibold text-[#0284C7] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
          >
            Consultar Resumo do Trabalho & PDF Original →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">
          {ALL_LEVELS.map((lvl) => {
            const meta = LEVEL_METADATA[lvl];
            const perf = report.levelPerformance.find(
              (p) => p.levelMeta.level === lvl
            );

            return (
              <div
                key={lvl}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col justify-between hover:border-[#0284C7] transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span className="font-bold text-[#0284C7]">NÍVEL 0{lvl}</span>
                    <span>10s / 5s</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-serif-display">
                    {meta.subtitle}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {meta.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
                  <div className="text-xs text-slate-500">
                    <div>
                      <strong className="text-slate-700">Perfil da Banca:</strong>{' '}
                      {meta.examinerRole}
                    </div>
                    <div className="mt-1 font-mono tabular-nums">
                      <strong className="text-slate-700">Seu Histórico:</strong>{' '}
                      {perf && perf.total > 0
                        ? `${perf.accuracyPercent}% (${perf.correct}/${perf.total})`
                        : 'Pronto a iniciar'}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onStartLevelQuiz(lvl)}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-900 hover:bg-[#0284C7] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Iniciar Nível {lvl}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: OS 6 EIXOS TEMÁTICOS EM ROTAÇÃO NÃO-SEQUENCIAL */}
      <section aria-label="Eixos Temáticos do Projecto" className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 font-serif-display">
            02. Cobertura Integral do Projecto em Rotação Não-Sequencial
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Todas as perguntas têm resposta fundamentada no trabalho de Carlota Roberto Monjane e alternam entre estes 6 eixos sem seguir uma ordem previsível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_THEME_IDS.map((themeId, index) => {
            const theme = THEME_METADATA[themeId];
            return (
              <div
                key={themeId}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span>EIXO 0{index + 1}</span>
                    <span>{theme.pagesRef}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {theme.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {theme.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs space-y-1.5">
                  <div className="text-slate-500">
                    <strong className="text-slate-800">Autores-Chave: </strong>
                    {theme.keyAuthors.join(' · ')}
                  </div>
                  <div className="text-slate-600">
                    <strong className="text-[#0284C7]">Foco na Defesa: </strong>
                    {theme.studyFocus}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
