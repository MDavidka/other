// Web Audio API Synthesizer for Retro Sound Effects
// Guarded for SSR and browser autoplay policies

class AudioSynth {
  private ctx: AudioContext | null = null;
  private globalVolume: number = 0.5;

  constructor() {
    // Lazy initialize to avoid SSR and early browser block issues
  }

  private init() {
    if (typeof window === 'undefined') return;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setVolume(vol: number) {
    this.globalVolume = Math.max(0, Math.min(1, vol));
  }

  getVolume() {
    return this.globalVolume;
  }

  private playTone(freq: number, duration: number, type: OscillatorType = 'sine', gainSequence: number[] = [1, 0]) {
    try {
      this.init();
      if (!this.ctx || this.globalVolume === 0) return;

      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      osc.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Volume envelope
      gainNode.gain.setValueAtTime(0, this.ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(gainSequence[0] * this.globalVolume * 0.15, this.ctx.currentTime + 0.01);
      
      const step = duration / (gainSequence.length - 1 || 1);
      for (let i = 1; i < gainSequence.length; i++) {
        gainNode.gain.exponentialRampToValueAtTime(
          Math.max(0.0001, gainSequence[i] * this.globalVolume * 0.15),
          this.ctx.currentTime + i * step
        );
      }

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio play failed:', e);
    }
  }

  playClick() {
    // Crisp pop sound
    this.playTone(600, 0.08, 'triangle', [1, 0.1, 0]);
  }

  playBuy() {
    // Coin register ding
    try {
      this.init();
      if (!this.ctx || this.globalVolume === 0) return;

      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      osc1.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(987.77, now); // B5
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1318.51, now + 0.05); // E6

      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(this.globalVolume * 0.1, now + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

      osc1.start(now);
      osc1.stop(now + 0.35);
      osc2.start(now + 0.05);
      osc2.stop(now + 0.35);
    } catch (e) {
      console.warn('Buy sound failed:', e);
    }
  }

  playUpgrade() {
    // Ascending power-up chord
    try {
      this.init();
      if (!this.ctx || this.globalVolume === 0) return;

      const now = this.ctx.currentTime;
      const freqs = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();

        osc.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);

        gainNode.gain.setValueAtTime(0, now + idx * 0.06);
        gainNode.gain.linearRampToValueAtTime(this.globalVolume * 0.08, now + idx * 0.06 + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.06 + 0.25);

        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.25);
      });
    } catch (e) {
      console.warn('Upgrade sound failed:', e);
    }
  }

  playGoldenSpawn() {
    // Magical chime
    try {
      this.init();
      if (!this.ctx || this.globalVolume === 0) return;

      const now = this.ctx.currentTime;
      const freqs = [1567.98, 1760.00, 1975.53, 2093.00]; // G6, A6, B6, C7
      
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();

        osc.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gainNode.gain.setValueAtTime(0, now + idx * 0.08);
        gainNode.gain.linearRampToValueAtTime(this.globalVolume * 0.05, now + idx * 0.08 + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.4);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.4);
      });
    } catch (e) {
      console.warn('Golden spawn sound failed:', e);
    }
  }

  playGoldenClick() {
    // Epic multiplier sound
    try {
      this.init();
      if (!this.ctx || this.globalVolume === 0) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      osc.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(1760, now + 0.5);

      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(this.globalVolume * 0.08, now + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);

      osc.start(now);
      osc.stop(now + 0.5);
    } catch (e) {
      console.warn('Golden click sound failed:', e);
    }
  }

  playWheelTick() {
    // Small mechanical tick
    this.playTone(300, 0.03, 'square', [0.8, 0]);
  }

  playWheelWin() {
    // Happy fan fare
    try {
      this.init();
      if (!this.ctx || this.globalVolume === 0) return;

      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();

        osc.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);

        gainNode.gain.setValueAtTime(0, now + idx * 0.1);
        gainNode.gain.linearRampToValueAtTime(this.globalVolume * 0.1, now + idx * 0.1 + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.1 + 0.5);

        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.5);
      });
    } catch (e) {
      console.warn('Wheel win sound failed:', e);
    }
  }

  playWheelLose() {
    // Sad trombone sliding down
    try {
      this.init();
      if (!this.ctx || this.globalVolume === 0) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      osc.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(311.13, now); // Eb4
      osc.frequency.linearRampToValueAtTime(220.00, now + 0.4); // A3

      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(this.globalVolume * 0.08, now + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

      osc.start(now);
      osc.stop(now + 0.45);
    } catch (e) {
      console.warn('Wheel lose sound failed:', e);
    }
  }
}

// Singleton instance
export const audioSynth = new AudioSynth();
