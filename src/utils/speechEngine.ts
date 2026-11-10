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
 * Splits a normalized Portuguese question into natural clause chunks <= maxLen characters
 * so every chunk is accepted by the neural MP3 TTS stream without truncation.
 */
export function splitTextIntoTtsChunks(text: string, maxLen = 175): string[] {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (!clean) return [];
  if (clean.length <= maxLen) return [clean];

  const rawClauses = clean.split(/(?<=[.?!:;])\s+|(?<=,)\s+/);
  const chunks: string[] = [];
  let current = '';

  const pushWordSplit = (longSegment: string) => {
    const words = longSegment.split(' ');
    let line = '';
    for (const word of words) {
      if (!line) {
        line = word;
      } else if (line.length + 1 + word.length <= maxLen) {
        line += ' ' + word;
      } else {
        chunks.push(line);
        line = word;
      }
    }
    if (line) {
      current = line;
    }
  };

  for (const clause of rawClauses) {
    if (!clause) continue;
    if (!current) {
      if (clause.length <= maxLen) {
        current = clause;
      } else {
        pushWordSplit(clause);
      }
    } else if (current.length + 1 + clause.length <= maxLen) {
      current += ' ' + clause;
    } else {
      chunks.push(current);
      current = '';
      if (clause.length <= maxLen) {
        current = clause;
      } else {
        pushWordSplit(clause);
      }
    }
  }

  if (current) {
    chunks.push(current);
  }

  return chunks;
}

// Persistent singleton HTMLAudioElement so mobile Safari (iOS) and mobile Chrome (Android)
// keep media playback unlocked across automatic timer transitions between questions!
let sharedAudio: HTMLAudioElement | null = null;
let isQuestionSpeechActive = false;
let activeUtterance: SpeechSynthesisUtterance | null = null;

function getSharedAudio(): HTMLAudioElement | null {
  if (typeof window === 'undefined' || typeof Audio === 'undefined') {
    return null;
  }
  if (!sharedAudio) {
    sharedAudio = new Audio();
    sharedAudio.preload = 'auto';
  }
  return sharedAudio;
}

// Pre-warm voices list as soon as the module loads in browser
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  try {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.addEventListener?.('voiceschanged', () => {
      window.speechSynthesis.getVoices();
    });
  } catch {
    // ignore
  }
}

/**
 * Selects the best available Portuguese voice from browser SpeechSynthesis.
 */
function selectPortugueseVoice(
  synth: SpeechSynthesis
): SpeechSynthesisVoice | null {
  const voices = synth.getVoices();
  if (!voices || voices.length === 0) return null;

  const normalizeLang = (lang: string) =>
    (lang || '').toLowerCase().replace('_', '-');

  const ptVoices = voices.filter((v) => normalizeLang(v.lang).startsWith('pt'));
  if (ptVoices.length === 0) return null;

  const localPt = ptVoices.filter((v) => v.localService);
  const pool = localPt.length > 0 ? localPt : ptVoices;

  return (
    pool.find((v) => normalizeLang(v.lang) === 'pt-pt') ||
    pool.find((v) => normalizeLang(v.lang) === 'pt-mz') ||
    pool.find((v) => normalizeLang(v.lang) === 'pt-br') ||
    pool[0] ||
    null
  );
}

/**
 * Pre-initializes the persistent HTMLAudioElement singleton and resumes Web Speech API
 * during a direct user tap/click gesture on mobile or desktop.
 */
export function unlockMobileSpeech(): void {
  if (typeof window === 'undefined') return;

  getSharedAudio();

  if ('speechSynthesis' in window) {
    try {
      window.speechSynthesis.getVoices();
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
    } catch {
      // ignore
    }
  }
}

export function stopPortugueseSpeech(): void {
  isQuestionSpeechActive = false;
  activeUtterance = null;

  if (sharedAudio) {
    try {
      sharedAudio.onended = null;
      sharedAudio.onerror = null;
      sharedAudio.pause();
    } catch {
      // ignore
    }
  }

  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
        window.speechSynthesis.cancel();
      }
    } catch {
      // ignore
    }
  }
}

/**
 * Offline / Fallback Native Web Speech API speaker
 */
function speakViaNativeWebSpeech(
  normalizedText: string,
  estimatedSpeechMs: number,
  onSuccessEnd: () => void,
  onErrorOrSilent: () => void
): () => void {
  let cancelled = false;
  let onStartTimer: ReturnType<typeof setTimeout> | null = null;
  let watchdogTimer: ReturnType<typeof setTimeout> | null = null;

  const cleanupTimers = () => {
    if (onStartTimer !== null) {
      globalThis.clearTimeout(onStartTimer);
      onStartTimer = null;
    }
    if (watchdogTimer !== null) {
      globalThis.clearTimeout(watchdogTimer);
      watchdogTimer = null;
    }
  };

  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    onErrorOrSilent();
    return () => {
      cancelled = true;
    };
  }

  const synth = window.speechSynthesis;
  try {
    if (synth.paused) {
      synth.resume();
    }

    const utterance = new SpeechSynthesisUtterance(normalizedText);
    activeUtterance = utterance;

    const selectedVoice = selectPortugueseVoice(synth);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
      utterance.lang = selectedVoice.lang;
    } else {
      utterance.lang = 'pt-BR';
    }

    utterance.rate = 1.02;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    let started = false;

    utterance.onstart = () => {
      started = true;
      if (onStartTimer !== null) {
        globalThis.clearTimeout(onStartTimer);
        onStartTimer = null;
      }
    };

    utterance.onend = () => {
      if (cancelled) return;
      cleanupTimers();
      activeUtterance = null;
      onSuccessEnd();
    };

    utterance.onerror = (e) => {
      if (cancelled) return;
      cleanupTimers();
      activeUtterance = null;
      if (e.error === 'canceled' || e.error === 'interrupted') return;
      onErrorOrSilent();
    };

    watchdogTimer = globalThis.setTimeout(() => {
      if (!cancelled) {
        cleanupTimers();
        onSuccessEnd();
      }
    }, estimatedSpeechMs + 1500);

    synth.speak(utterance);
    if (synth.paused) {
      synth.resume();
    }

    onStartTimer = globalThis.setTimeout(() => {
      if (!started && !synth.speaking && !cancelled) {
        cleanupTimers();
        onErrorOrSilent();
      }
    }, 900);
  } catch {
    cleanupTimers();
    onErrorOrSilent();
  }

  return () => {
    cancelled = true;
    cleanupTimers();
    activeUtterance = null;
    try {
      if (synth.speaking || synth.pending) {
        synth.cancel();
      }
    } catch {
      // ignore
    }
  };
}

/**
 * Automatically reads the question text aloud in Portuguese.
 *
 * Strategy for maximum compatibility across mobile (Android/iOS), Vercel, and desktop:
 * 1. Primary Engine: Plays neural Portuguese MP3 chunks via the persistent `sharedAudio`
 *    (`HTMLAudioElement`), which plays through the standard media speaker channel on 100%
 *    of Android phones, iPhones, and desktop browsers even if no OS TTS pack is installed.
 * 2. Fallback Engine: If offline or if MP3 stream is unreachable, falls back to native
 *    `window.speechSynthesis`.
 * 3. If browser blocks un-gestured autoplay on initial page load (`NotAllowedError`),
 *    notifies `onAutoplayBlocked()` so the UI can show a one-tap sound activation button.
 */
export function speakPortugueseQuestion(
  questionText: string,
  onComplete: () => void,
  onAutoplayBlocked?: () => void
): () => void {
  let finished = false;
  let fallbackTimerId: ReturnType<typeof setTimeout> | null = null;
  let cancelNativeFallback: (() => void) | null = null;

  stopPortugueseSpeech();
  isQuestionSpeechActive = true;

  const finishOnce = () => {
    if (finished) return;
    finished = true;
    isQuestionSpeechActive = false;
    if (fallbackTimerId !== null) {
      globalThis.clearTimeout(fallbackTimerId);
      fallbackTimerId = null;
    }
    onComplete();
  };

  const normalizedText = formatTextForPortugueseSpeech(questionText);
  const wordCount = normalizedText.split(/\s+/).filter(Boolean).length;
  const estimatedSpeechMs = Math.min(15000, Math.max(3000, wordCount * 350));

  const runNativeFallback = () => {
    if (finished) return;
    cancelNativeFallback = speakViaNativeWebSpeech(
      normalizedText,
      estimatedSpeechMs,
      () => {
        finishOnce();
      },
      () => {
        // Headless browser or muted environment without audio hardware:
        // start the 10-second countdown cleanly after 1.3s
        fallbackTimerId = globalThis.setTimeout(finishOnce, 1300);
      }
    );
  };

  const audio = getSharedAudio();
  const isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;

  if (!audio || !isOnline) {
    runNativeFallback();
    return () => {
      finished = true;
      isQuestionSpeechActive = false;
      if (fallbackTimerId !== null) globalThis.clearTimeout(fallbackTimerId);
      cancelNativeFallback?.();
    };
  }

  const chunks = splitTextIntoTtsChunks(normalizedText, 175);
  if (chunks.length === 0) {
    finishOnce();
    return () => {
      finished = true;
      isQuestionSpeechActive = false;
    };
  }

  let currentChunkIndex = 0;
  let chunkWatchdogId: ReturnType<typeof setTimeout> | null = null;
  let progressCheckId: ReturnType<typeof setTimeout> | null = null;

  const clearChunkTimers = () => {
    if (chunkWatchdogId !== null) {
      globalThis.clearTimeout(chunkWatchdogId);
      chunkWatchdogId = null;
    }
    if (progressCheckId !== null) {
      globalThis.clearTimeout(progressCheckId);
      progressCheckId = null;
    }
  };

  const advanceChunk = () => {
    clearChunkTimers();
    if (finished) return;
    currentChunkIndex += 1;
    playNextChunk();
  };

  const playNextChunk = () => {
    clearChunkTimers();
    if (finished) return;
    if (currentChunkIndex >= chunks.length) {
      finishOnce();
      return;
    }

    const chunkText = chunks[currentChunkIndex];
    const url = `https://translate.googleapis.com/translate_tts?ie=UTF-8&tl=pt-BR&client=tw-ob&q=${encodeURIComponent(
      chunkText
    )}`;

    try {
      audio.onended = () => {
        advanceChunk();
      };

      audio.onloadedmetadata = () => {
        if (finished) return;
        if (audio.duration && Number.isFinite(audio.duration) && audio.duration > 0) {
          const durationMs = Math.ceil((audio.duration * 1000) / (audio.playbackRate || 1)) + 350;
          if (chunkWatchdogId !== null) {
            globalThis.clearTimeout(chunkWatchdogId);
          }
          chunkWatchdogId = globalThis.setTimeout(advanceChunk, durationMs);
        }
      };

      audio.onerror = () => {
        clearChunkTimers();
        if (finished) return;
        audio.onended = null;
        audio.onerror = null;
        audio.onloadedmetadata = null;
        runNativeFallback();
      };

      // Fallback max chunk duration in case loadedmetadata doesn't report duration
      const chunkWords = chunkText.split(/\s+/).filter(Boolean).length;
      const maxChunkMs = Math.min(12000, Math.max(2500, chunkWords * 380));
      chunkWatchdogId = globalThis.setTimeout(advanceChunk, maxChunkMs);

      audio.src = url;
      audio.volume = 1.0;
      audio.playbackRate = 1.05;

      const playPromise = audio.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch((err: unknown) => {
          clearChunkTimers();
          if (finished) return;
          const errName =
            err && typeof err === 'object' && 'name' in err
              ? String((err as { name?: unknown }).name)
              : '';
          if (errName === 'NotAllowedError') {
            onAutoplayBlocked?.();
          }
          audio.onended = null;
          audio.onerror = null;
          audio.onloadedmetadata = null;
          runNativeFallback();
        });
      }
    } catch {
      clearChunkTimers();
      runNativeFallback();
    }
  };

  playNextChunk();

  return () => {
    finished = true;
    isQuestionSpeechActive = false;
    clearChunkTimers();
    if (fallbackTimerId !== null) {
      globalThis.clearTimeout(fallbackTimerId);
      fallbackTimerId = null;
    }
    cancelNativeFallback?.();
    if (sharedAudio) {
      try {
        sharedAudio.onended = null;
        sharedAudio.onerror = null;
        sharedAudio.onloadedmetadata = null;
        sharedAudio.pause();
      } catch {
        // ignore
      }
    }
  };
}
