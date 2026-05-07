let isCurrentlyPlaying = false;
let onEndCallback: (() => void) | null = null;

/**
 * Japanese TTS using Web Speech API (built-in, no API key needed)
 */
export const speakJapaneseText = async (text: string): Promise<void> => {
  if (!text.trim()) throw new Error('Cannot speak empty text');

  // Stop any current speech
  window.speechSynthesis.cancel();

  return new Promise<void>((resolve, reject) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.95;
    utterance.pitch = 1;

    // Try to find a Japanese voice
    const voices = window.speechSynthesis.getVoices();
    const jaVoice = voices.find(v => v.lang.startsWith('ja')) 
                 || voices.find(v => v.lang.includes('JP'));
    if (jaVoice) utterance.voice = jaVoice;

    utterance.onstart = () => { isCurrentlyPlaying = true; };
    utterance.onend = () => {
      isCurrentlyPlaying = false;
      onEndCallback?.();
      onEndCallback = null;
      resolve();
    };
    utterance.onerror = (e) => {
      isCurrentlyPlaying = false;
      onEndCallback?.();
      onEndCallback = null;
      // 'canceled' is not a real error (user stopped it)
      if (e.error === 'canceled') { resolve(); return; }
      reject(new Error(`TTS Error: ${e.error}`));
    };

    window.speechSynthesis.speak(utterance);
  });
};

/**
 * Stop currently playing speech
 */
export const stopJapaneseTts = (): void => {
  window.speechSynthesis.cancel();
  isCurrentlyPlaying = false;
};

/**
 * Register a callback for when speech ends (for UI state sync)
 */
export const onTtsEnd = (cb: () => void): void => {
  onEndCallback = cb;
};

/**
 * Check if TTS is currently playing
 */
export const isJapaneseTtsPlaying = (): boolean => {
  return isCurrentlyPlaying;
};
