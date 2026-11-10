import React from 'react';
import { BarChart3, BookOpen, Layers, PlayCircle } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallModal';
import { unlockMobileSpeech } from '../utils/speechEngine';

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
  const handleSelect = (tab: ActiveTab) => {
    unlockMobileSpeech();
    onSelectTab(tab);
  };

  const handleQuickStart = () => {
    unlockMobileSpeech();
    onQuickStartQuiz();
  };

  return (
    <header className="flex items-center justify-between gap-3 md:gap-8 px-4 md:px-6 h-14 md:h-auto md:py-4 bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30">
      {/* Zone 1: Single text element wordmark */}
      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          handleSelect('dashboard');
        }}
        className="text-base md:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 font-serif-display"
      >
        <span>DefesaMestre</span>
        <span className="hidden sm:inline"> · UP-Maputo</span>
      </a>

      {/* Zone 2: 4 clean single-line text navigation links (Desktop/Tablet) */}
      <nav
        aria-label="Navegação Principal"
        className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
      >
        <button
          type="button"
          onClick={() => handleSelect('dashboard')}
          className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 cursor-pointer ${
            activeTab === 'dashboard'
              ? 'border-[#0284C7] text-slate-900 font-semibold'
              : 'border-transparent hover:text-slate-900'
          }`}
        >
          Níveis (1 a 5)
        </button>
        <button
          type="button"
          onClick={() => handleSelect('arena')}
          className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 cursor-pointer ${
            activeTab === 'arena'
              ? 'border-[#0284C7] text-slate-900 font-semibold'
              : 'border-transparent hover:text-slate-900'
          }`}
        >
          Quiz Cronometrado
        </button>
        <button
          type="button"
          onClick={() => handleSelect('report')}
          className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 cursor-pointer ${
            activeTab === 'report'
              ? 'border-[#0284C7] text-slate-900 font-semibold'
              : 'border-transparent hover:text-slate-900'
          }`}
        >
          Relatório de Desempenho
        </button>
        <button
          type="button"
          onClick={() => handleSelect('study')}
          className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 cursor-pointer ${
            activeTab === 'study'
              ? 'border-[#0284C7] text-slate-900 font-semibold'
              : 'border-transparent hover:text-slate-900'
          }`}
        >
          Base do Projecto & PDF
        </button>
      </nav>

      {/* Zone 3: Install App + Primary Action */}
      <div className="flex items-center gap-2 shrink-0">
        <PWAInstallButton compact />
        <button
          type="button"
          onClick={handleQuickStart}
          className="min-h-[40px] px-3 md:px-4 py-1.5 md:py-2 text-xs font-semibold text-white bg-[#0284C7] rounded-lg hover:bg-[#0369A1] active:scale-[0.98] transition-all whitespace-nowrap shrink-0 cursor-pointer"
        >
          <span className="md:hidden">Quiz 10s/5s</span>
          <span className="hidden md:inline">Iniciar Simulação (10s/5s)</span>
        </button>
      </div>
    </header>
  );
};

export const MobileBottomNav: React.FC<{
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
}> = ({ activeTab, onSelectTab }) => {
  const handleSelect = (tab: ActiveTab) => {
    unlockMobileSpeech();
    onSelectTab(tab);
  };

  const navItems: {
    id: ActiveTab;
    label: string;
    icon: React.FC<{ className?: string }>;
  }[] = [
    { id: 'dashboard', label: 'Níveis 1–5', icon: Layers },
    { id: 'arena', label: 'Quiz 10s', icon: PlayCircle },
    { id: 'report', label: 'Relatório', icon: BarChart3 },
    { id: 'study', label: 'Projecto', icon: BookOpen }
  ];

  return (
    <nav
      aria-label="Navegação Mobile"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 grid grid-cols-4 items-center h-16 px-1"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => handleSelect(item.id)}
            className={`min-h-[48px] flex flex-col items-center justify-center rounded-xl transition-colors cursor-pointer ${
              isActive
                ? 'text-[#0284C7] font-semibold'
                : 'text-slate-500 hover:text-slate-900 font-medium'
            }`}
          >
            <Icon
              className={`w-5 h-5 ${
                isActive ? 'text-[#0284C7]' : 'text-slate-400'
              }`}
            />
            <span className="text-[11px] tracking-tight mt-0.5 leading-none">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
