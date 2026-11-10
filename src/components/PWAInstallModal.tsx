import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Download, Smartphone, Share, PlusSquare, X, WifiOff } from 'lucide-react';
import { usePWAInstall, useOnlineStatus } from '../hooks/usePWAInstall';

export const PWAInstallButton: React.FC<{ compact?: boolean }> = ({
  compact = false
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuideModal, setShowGuideModal] = useState(false);

  if (isInstalled) {
    return null;
  }

  const handleClick = async () => {
    if (isInstallable) {
      await install();
    } else {
      setShowGuideModal(true);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        title="Instalar Aplicativo no Celular"
        className={`inline-flex items-center justify-center gap-1.5 font-semibold rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer shrink-0 ${
          compact
            ? 'min-h-[38px] px-2.5 py-1.5 text-xs'
            : 'min-h-[40px] px-3 py-2 text-xs'
        }`}
      >
        {isInstallable ? (
          <Download className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
        ) : (
          <Smartphone className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
        )}
        <span>{compact ? 'App' : 'Instalar no Celular'}</span>
      </button>

      {showGuideModal &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-install-title"
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/60 backdrop-blur-xs p-0 sm:p-4"
          >
            <div className="w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl bg-white p-6 pb-8 sm:pb-6 shadow-xl border border-slate-200">
              <div className="w-10 h-1.5 bg-slate-300 rounded-full mx-auto mb-4 sm:hidden" />
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0284C7] shrink-0">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3
                      id="mobile-install-title"
                      className="text-base font-bold text-slate-900 font-serif-display"
                    >
                      Usar como App no Celular
                    </h3>
                    <p className="text-xs text-slate-500">
                      Acesso rápido no ecrã inicial, ecrã inteiro e modo offline
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowGuideModal(false)}
                  aria-label="Fechar guia de instalação"
                  className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-5 space-y-3 text-xs text-slate-700">
                {isIOS ? (
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2.5">
                    <div className="font-semibold text-slate-900">
                      No iPhone / iPad (Safari):
                    </div>
                    <ol className="space-y-2 list-decimal list-inside">
                      <li className="flex items-center gap-2">
                        <span>1. Toque no botão</span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-white border border-slate-200 rounded font-medium text-slate-800">
                          <Share className="w-3.5 h-3.5 text-[#0284C7]" /> Partilhar
                        </span>
                        <span>na barra do Safari.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span>2. Escolha</span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-white border border-slate-200 rounded font-medium text-slate-800">
                          <PlusSquare className="w-3.5 h-3.5 text-[#0284C7]" /> Ecrã Principal
                        </span>
                        <span>(Adicionar à Tela de Início).</span>
                      </li>
                    </ol>
                  </div>
                ) : (
                  <>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                      <div className="font-semibold text-slate-900">
                        No Android (Chrome / Edge / Samsung):
                      </div>
                      <p className="leading-relaxed">
                        Toque no menu do navegador (<strong>⋮</strong> no canto superior) e seleccione{' '}
                        <strong>&ldquo;Instalar aplicação&rdquo;</strong> ou{' '}
                        <strong>&ldquo;Adicionar ao ecrã principal&rdquo;</strong>.
                      </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                      <div className="font-semibold text-slate-900">
                        No iPhone / iPad (Safari):
                      </div>
                      <p className="leading-relaxed">
                        Toque em <strong>Partilhar</strong> na barra inferior do Safari e depois em{' '}
                        <strong>&ldquo;Adicionar ao Ecrã Principal&rdquo;</strong>.
                      </p>
                    </div>
                  </>
                )}
              </div>

              <button
                type="button"
                onClick={() => setShowGuideModal(false)}
                className="mt-5 w-full min-h-[44px] rounded-xl bg-[#0284C7] text-white font-semibold text-xs hover:bg-[#0369A1] transition-colors cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div
      role="status"
      className="fixed bottom-20 md:bottom-4 left-4 right-4 md:right-auto z-50 flex items-center gap-2 rounded-xl bg-amber-600 px-3.5 py-2 text-xs font-semibold text-white shadow-lg"
    >
      <WifiOff className="w-4 h-4 shrink-0" />
      <span>Modo Offline — O quiz continua a funcionar com os dados guardados no telemóvel.</span>
    </div>
  );
};
