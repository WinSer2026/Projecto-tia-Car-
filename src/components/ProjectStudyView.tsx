import React, { useState } from 'react';
import { ExternalLink, FileText, Search } from 'lucide-react';
import { LEVEL_METADATA, THEME_METADATA } from '../data/questionsBank';
import { DifficultyLevel, ThemeId } from '../types/quiz';
import {
  ALL_LEVELS,
  ALL_THEME_IDS,
  buildExpandedPoolForLevel
} from '../utils/quizEngine';

const PDF_ASSET_PATH =
  '/assets/aistudio/Projecto_Carlota_Roberto_Monjane_-_Out.07__3__a4d5fc0c.pdf';

export const ProjectStudyView: React.FC = () => {
  const [filterLevel, setFilterLevel] = useState<DifficultyLevel | 'ALL'>('ALL');
  const [filterTheme, setFilterTheme] = useState<ThemeId | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showPdfEmbed, setShowPdfEmbed] = useState<boolean>(false);

  const allQuestions = buildExpandedPoolForLevel('MIXED', 0);

  const filteredQuestions = allQuestions.filter((q) => {
    if (filterLevel !== 'ALL' && q.level !== filterLevel) return false;
    if (filterTheme !== 'ALL' && q.theme !== filterTheme) return false;
    if (searchQuery.trim() !== '') {
      const qLower = searchQuery.toLowerCase();
      return (
        q.question.toLowerCase().includes(qLower) ||
        q.shortAnswer.toLowerCase().includes(qLower) ||
        q.detailedExplanation.toLowerCase().includes(qLower) ||
        q.sourceReference.toLowerCase().includes(qLower)
      );
    }
    return true;
  });

  return (
    <section
      aria-label="Base Científica do Projecto e Consulta ao PDF"
      className="max-w-[1320px] mx-auto px-6 py-10 space-y-10"
    >
      {/* Header & Direct PDF Viewer Toggle */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-xs">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-xs text-slate-500">
              <span>Repositório de Estudo da Defesa</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>Universidade Pedagógica de Maputo (2026)</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>Carlota Roberto Monjane</span>
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1 font-serif-display">
              Guia de Arguição, Quadros de Síntese & Documento Original (PDF)
            </h1>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Consulte todas as questões estruturadas por nível (1 a 5) e eixo temático, com respostas oficiais extraídas directamente do projecto, ou abra o ficheiro PDF original anexado.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setShowPdfEmbed((prev) => !prev)}
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>
                {showPdfEmbed
                  ? 'Ocultar Leitor PDF Integrado'
                  : 'Visualizar PDF Original Integrado'}
              </span>
            </button>

            <a
              href={PDF_ASSET_PATH}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Abrir PDF Completo</span>
            </a>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        {showPdfEmbed && (
          <div className="mt-6 pt-6 border-t border-slate-200">
            <div className="w-full h-[680px] rounded-lg overflow-hidden border border-slate-300 bg-slate-100">
              <iframe
                src={PDF_ASSET_PATH}
                title="Projecto de Pesquisa — Carlota Roberto Monjane (UP-Maputo, 2026)"
                className="w-full h-full"
              />
            </div>
          </div>
        )}
      </div>

      {/* Quick Cheat-Sheet of Key Numbers & Tables in the Thesis */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-xs">
        <h2 className="text-xl font-bold text-slate-900 font-serif-display">
          Resumo Executivo de Indicadores, Leis e Amostra para Resposta Rápida (10s)
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="font-mono font-bold text-[#0284C7]">
              MARCOS LEGAIS DO SNE
            </div>
            <p className="text-slate-700">
              <strong>24 Jul 1975:</strong> Nacionalização do ensino.
            </p>
            <p className="text-slate-700">
              <strong>Lei n.º 4/83 (23 Mar):</strong> SNE, Homem Novo, EP1 (1.ª–5.ª) e EP2 (6.ª–7.ª).
            </p>
            <p className="text-slate-700">
              <strong>Lei n.º 6/92 (6 Mai):</strong> Abertura ao sector privado; mantém 7 classes e funil na 8.ª.
            </p>
            <p className="text-slate-700">
              <strong>Lei n.º 18/2018 (28 Dez):</strong> Ensino Básico gratuito e obrigatório de 9 classes (Art. 11.º).
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="font-mono font-bold text-[#0284C7]">
              DADOS EMPÍRICOS CRÍTICOS
            </div>
            <p className="text-slate-700">
              <strong>&gt;65% das escolas (Maputo):</strong> Sem laboratórios, bibliotecas ou salas de informática (MINEDH, 2020, p. 25).
            </p>
            <p className="text-slate-700">
              <strong>&gt;90% das EBCs:</strong> Sem laboratórios e reagentes (Dias, 2010, p. 28).
            </p>
            <p className="text-slate-700">
              <strong>75 a 90 alunos/sala:</strong> Funcionamento em 3 a 4 turnos de 30–35 min.
            </p>
            <p className="text-slate-700">
              <strong>Apêndice E (p. 53):</strong> 30% sentados no chão/latas; 1 livro para 4 alunos.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="font-mono font-bold text-[#0284C7]">
              AMOSTRA (N = 52) & CAMPO
            </div>
            <p className="text-slate-700">
              <strong>4 Escolas (EBC 1 a 4):</strong> 13 participantes por escola.
            </p>
            <p className="text-slate-700">
              <strong>Zona Urbana (KaMpfumo):</strong> EBC 1 e EBC 2 (26 participantes).
            </p>
            <p className="text-slate-700">
              <strong>Zona Periurbana:</strong> EBC 3 (KaMavota) e EBC 4 (KaMubukwana) (26 participantes).
            </p>
            <p className="text-slate-700">
              <strong>Composição:</strong> 4 Directores + 16 Professores + 16 Alunos + 16 Encarregados.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="font-mono font-bold text-[#0284C7]">
              MÉTODO, ÉTICA & ORÇAMENTO
            </div>
            <p className="text-slate-700">
              <strong>Design:</strong> Qualitativo Interpretativo, Estudo de Caso Múltiplo (Yin, 2015).
            </p>
            <p className="text-slate-700">
              <strong>Análise:</strong> Análise de Conteúdo em 3 fases (Bardin, 2011).
            </p>
            <p className="text-slate-700">
              <strong>Rigor (Lincoln & Guba):</strong> Credibilidade, Transferibilidade, Dependabilidade, Confirmabilidade.
            </p>
            <p className="text-slate-700">
              <strong>Orçamento (Quadro 6):</strong> 120.750,00 MZN (Jul–Dez 2026).
            </p>
          </div>
        </div>
      </div>

      {/* Question Bank Search & Filter */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 font-serif-display">
              Catálogo de Questões e Respostas de Defesa ({filteredQuestions.length} questões base)
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Explore as perguntas da banca por nível de dificuldade (1 a 5) ou pesquise por autor, conceito ou lei.
            </p>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Pesquisar autor, lei, página..."
              aria-label="Pesquisar no banco de questões"
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#0284C7]"
            />
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <div
            role="group"
            aria-label="Filtrar por Nível"
            className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200"
          >
            <button
              type="button"
              onClick={() => setFilterLevel('ALL')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                filterLevel === 'ALL'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todos os Níveis
            </button>
            {ALL_LEVELS.map((lvl) => (
              <button
                key={lvl}
                type="button"
                onClick={() => setFilterLevel(lvl)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  filterLevel === lvl
                    ? 'bg-white text-[#0284C7] shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Nível {lvl}
              </button>
            ))}
          </div>

          <select
            aria-label="Filtrar por Eixo Temático"
            value={filterTheme}
            onChange={(e) => setFilterTheme(e.target.value as ThemeId | 'ALL')}
            className="px-3 py-2 text-xs bg-slate-100 border border-slate-200 rounded-lg text-slate-700 font-medium"
          >
            <option value="ALL">Todos os 6 Eixos Temáticos</option>
            {ALL_THEME_IDS.map((tId) => (
              <option key={tId} value={tId}>
                {THEME_METADATA[tId].title}
              </option>
            ))}
          </select>
        </div>

        {/* Question Cards List */}
        <div className="space-y-4 pt-2">
          {filteredQuestions.map((q) => {
            const tMeta = THEME_METADATA[q.theme];
            return (
              <div
                key={q.id}
                className="p-6 rounded-xl border border-slate-200 bg-slate-50/40 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                  <div>
                    <span className="font-mono font-bold text-slate-800">
                      Nível {q.level} ({LEVEL_METADATA[q.level].subtitle})
                    </span>
                    <span className="mx-2" aria-hidden="true">·</span>
                    <span className="text-[#0284C7] font-semibold">
                      {tMeta.shortTitle}
                    </span>
                  </div>
                  <span className="font-mono text-slate-600">
                    {q.sourceReference}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900">
                  {q.question}
                </h3>

                <div className="p-4 rounded-lg bg-white border border-slate-200 text-sm text-slate-800 space-y-2">
                  <div>
                    <strong className="text-[#059669]">✓ Resposta Directa: </strong>
                    {q.shortAnswer}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {q.detailedExplanation}
                  </p>
                  <div className="text-xs text-[#0284C7] pt-1">
                    <strong>Dica para a Banca: </strong>
                    {q.defenseTip}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
