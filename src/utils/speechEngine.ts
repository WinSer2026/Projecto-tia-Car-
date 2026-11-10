/**
 * Normalizes academic Portuguese text (ordinal numbers, law numbers, acronyms)
 * so the speech synthesizer reads the defense questions naturally and clearly.
 */
export function formatTextForPortugueseSpeech(rawText: string): string {
  return rawText
    .replace(/n\.º/gi, 'número')
    .replace(/1\.ª/g, 'primeira')
    .replace(/2\.ª/g, 'segunda')
    .replace(/3\.ª/g, 'terceira')
    .replace(/4\.ª/g, 'quarta')
    .replace(/5\.ª/g, 'quinta')
    .replace(/6\.ª/g, 'sexta')
    .replace(/7\.ª/g, 'sétima')
    .replace(/8\.ª/g, 'oitava')
    .replace(/9\.ª/g, 'nona')
    .replace(/10\.ª/g, 'décima')
    .replace(/11\.ª/g, 'décima primeira')
    .replace(/12\.ª/g, 'décima segunda')
    .replace(/1\.º/g, 'primeiro')
    .replace(/2\.º/g, 'segundo')
    .replace(/3\.º/g, 'terceiro')
    .replace(/4\.º/g, 'quarto')
    .replace(/\bN\s*=\s*52\b/g, 'N igual a 52')
    .replace(/\b4\/83\b/g, '4 barra 83')
    .replace(/\b6\/92\b/g, '6 barra 92')
    .replace(/\b18\/2018\b/g, '18 barra 2018')
    .replace(/\b8\.ª\/9\.ª\b/g, 'oitava e nona')
    .replace(/\bEP1\b/g, 'E P 1')
    .replace(/\bEP2\b/g, 'E P 2')
    .replace(/\bESG1\b/g, 'E S G 1')
    .replace(/\bESG2\b/g, 'E S G 2')
    .replace(/\bpp\.\s*/g, 'páginas ')
    .replace(/\bp\.\s*(\d+)/g, 'página $1');
}

/**
 * Selects the best available Portuguese voice from browser SpeechSynthesis.
 */
function selectPortugueseVoice(synth: SpeechSynthesis): SpeechSynthesisVoice | null {
  const voices = synth.getVoices();
  if (!voices || voices.length === 0) return null;

  // Prefer pt-PT or pt-MZ first (closer to Mozambican academic standard), then pt-BR, then any 'pt'
  const ptExact =
    voices.find((v) => v.lang.toLowerCase() === 'pt-pt') ||
    voices.find((v) => v.lang.toLowerCase() === 'pt-mz') ||
    voices.find((v) => v.lang.toLowerCase() === 'pt-br') ||
    voices.find((v) => v.lang.toLowerCase().startsWith('pt'));

  return ptExact || null;
}

export function stopPortugueseSpeech(): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch {
      // ignore errors in restricted environments
    }
  }
}

/**
 * Automatically reads the question text aloud in Portuguese using Web Speech API.
 * Calls `onComplete()` as soon as the reading finishes so the 10-second countdown
 * starts immediately after the question is read.
 * Returns a cleanup function to cancel speech if the question changes or user answers early.
 */
export function speakPortugueseQuestion(
  questionText: string,
  onComplete: () => void
): () => void {
  let finished = false;
  let fallbackTimerId: ReturnType<typeof setTimeout> | null = null;
  let safetyWatchdogId: ReturnType<typeof setTimeout> | null = null;

  const finishOnce = () => {
    if (finished) return;
    finished = true;
    if (fallbackTimerId !== null) {
      globalThis.clearTimeout(fallbackTimerId);
    }
    if (safetyWatchdogId !== null) {
      globalThis.clearTimeout(safetyWatchdogId);
    }
    onComplete();
  };

  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    // Fallback if SpeechSynthesis API is not available in the environment
    fallbackTimerId = globalThis.setTimeout(finishOnce, 1500);
    return () => {
      finished = true;
      if (fallbackTimerId !== null) {
        globalThis.clearTimeout(fallbackTimerId);
      }
    };
  }

  const synth = window.speechSynthesis;
  try {
    synth.cancel();
  } catch {
    // ignore
  }

  const normalizedText = formatTextForPortugueseSpeech(questionText);
  const wordCount = normalizedText.split(/\s+/).filter(Boolean).length;
  // Estimated natural reading time at ~3.2 words/sec + buffer (max watchdog so it never hangs)
  const estimatedSpeechMs = Math.min(14000, Math.max(2500, wordCount * 340));

  const startUtterance = () => {
    if (finished) return;

    const voices = synth.getVoices();
    // In headless Chromium without OS TTS backends, voices list is empty and utterances may not fire onend
    if (!voices || voices.length === 0) {
      fallbackTimerId = globalThis.setTimeout(finishOnce, 1600);
      return;
    }

    try {
      const utterance = new SpeechSynthesisUtterance(normalizedText);
      const selectedVoice = selectPortugueseVoice(synth);
      if (selectedVoice) {
        utterance.voice = selectedVoice;
        utterance.lang = selectedVoice.lang;
      } else {
        utterance.lang = 'pt-PT';
      }

      utterance.rate = 1.05; // Clear, dynamic academic cadence
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      utterance.onend = () => {
        finishOnce();
      };

      utterance.onerror = () => {
        // Even if browser blocks or errors on TTS, immediately start the 10s timer
        finishOnce();
      };

      // Safety watchdog in case browser TTS pauses or fails to emit onend
      safetyWatchdogId = globalThis.setTimeout(finishOnce, estimatedSpeechMs + 1500);

      synth.speak(utterance);

      // In case Chrome has speechSynthesis in a paused state
      if (synth.paused) {
        synth.resume();
      }
    } catch {
      fallbackTimerId = globalThis.setTimeout(finishOnce, 1200);
    }
  };

  // If voices are already loaded, speak immediately; otherwise wait up to 250ms for onvoiceschanged
  if (synth.getVoices().length > 0) {
    startUtterance();
  } else {
    let voicesHandled = false;
    const handleVoicesChanged = () => {
      if (voicesHandled) return;
      voicesHandled = true;
      synth.removeEventListener('voiceschanged', handleVoicesChanged);
      startUtterance();
    };
    synth.addEventListener('voiceschanged', handleVoicesChanged);
    fallbackTimerId = globalThis.setTimeout(() => {
      if (!voicesHandled) {
        voicesHandled = true;
        synth.removeEventListener('voiceschanged', handleVoicesChanged);
        startUtterance();
      }
    }, 250);
  }

  return () => {
    finished = true;
    if (fallbackTimerId !== null) {
      globalThis.clearTimeout(fallbackTimerId);
    }
    if (safetyWatchdogId !== null) {
      globalThis.clearTimeout(safetyWatchdogId);
    }
    try {
      synth.cancel();
    } catch {
      // ignore
    }
  };
}
