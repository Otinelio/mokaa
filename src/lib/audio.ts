// Soft pleasant bell tone using Web Audio API
let ctx: AudioContext | null = null;

export function playChime() {
  try {
    if (typeof window === "undefined") return;
    if (!ctx) ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const audio = ctx;
    const now = audio.currentTime;

    const tones = [880, 1320];
    tones.forEach((freq, i) => {
      const osc = audio.createOscillator();
      const gain = audio.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, now + i * 0.12);
      gain.gain.linearRampToValueAtTime(0.18, now + i * 0.12 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.7);
      osc.connect(gain).connect(audio.destination);
      osc.start(now + i * 0.12);
      osc.stop(now + i * 0.12 + 0.75);
    });
  } catch {}
}
