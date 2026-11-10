import React from 'react';

export type ActiveTab = 'dashboard' | 'arena' | 'report' | 'study';

interface TopBarProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  onQuickStartQuiz: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  activeTab,
  onSelectTab,
  onQuickStartQuiz
}) => {
  return (
    <header className="flex items-center justify-between gap-8 px-6 py-4 bg-white border-b border-slate-200 sticky top-0 z-30">
      {/* Zone 1: Single text element wordmark */}
      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          onSelectTab('dashboard');
        }}
        className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 font-serif-display"
      >
        DefesaMestre · UP-Maputo
      </a>

      {/* Zone 2: 4 clean single-line text navigation links */}
      <nav
        aria-label="Navegação Principal"
        className="flex items-center gap-6 text-sm font-medium text-slate-600 overflow-x-auto"
      >
        <button
          type="button"
          onClick={() => onSelectTab('dashboard')}
          className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
            activeTab === 'dashboard'
              ? 'border-[#0284C7] text-slate-900 font-semibold'
              : 'border-transparent hover:text-slate-900'
          }`}
        >
          Níveis (1 a 5)
        </button>
        <button
          type="button"
          onClick={() => onSelectTab('arena')}
          className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
            activeTab === 'arena'
              ? 'border-[#0284C7] text-slate-900 font-semibold'
              : 'border-transparent hover:text-slate-900'
          }`}
        >
          Quiz Cronometrado
        </button>
        <button
          type="button"
          onClick={() => onSelectTab('report')}
          className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
            activeTab === 'report'
              ? 'border-[#0284C7] text-slate-900 font-semibold'
              : 'border-transparent hover:text-slate-900'
          }`}
        >
          Relatório de Desempenho
        </button>
        <button
          type="button"
          onClick={() => onSelectTab('study')}
          className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
            activeTab === 'study'
              ? 'border-[#0284C7] text-slate-900 font-semibold'
              : 'border-transparent hover:text-slate-900'
          }`}
        >
          Base do Projecto & PDF
        </button>
      </nav>

      {/* Zone 3: 1 primary action */}
      <div className="flex items-center shrink-0">
        <button
          type="button"
          onClick={onQuickStartQuiz}
          className="px-4 py-2 text-xs font-semibold text-white bg-[#0284C7] rounded-lg hover:bg-[#0369A1] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          Iniciar Simulação (10s/5s)
        </button>
      </div>
    </header>
  );
};
