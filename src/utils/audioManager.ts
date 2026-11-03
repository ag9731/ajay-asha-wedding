import { Howl } from 'howler';

// Auspicious Wedding Background Music (User BGM)
const WEDDING_MUSIC_URL = '/audio/bgm.mp3';
const CHIME_SOUND_URL = 'https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3';

class WeddingAudioManager {
  private musicHowl: Howl | null = null;
  private chimeHowl: Howl | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private listeners: Set<(isPlaying: boolean, isMuted: boolean) => void> = new Set();
  private audioContext: AudioContext | null = null;

  constructor() {
    this.initHowler();
    this.setupAutoPlayOnStart();
  }

  private setupAutoPlayOnStart() {
    if (typeof window === 'undefined') return;

    const startAudioOnGesture = () => {
      this.playMusic();
      window.removeEventListener('click', startAudioOnGesture);
      window.removeEventListener('touchstart', startAudioOnGesture);
      window.removeEventListener('keydown', startAudioOnGesture);
    };

    window.addEventListener('click', startAudioOnGesture, { once: true });
    window.addEventListener('touchstart', startAudioOnGesture, { once: true });
    window.addEventListener('keydown', startAudioOnGesture, { once: true });

    // Try playing immediately if browser allows unprompted audio
    setTimeout(() => {
      if (this.musicHowl && !this.isPlaying) {
        this.playMusic();
      }
    }, 400);
  }

  private initHowler() {
    try {
      this.chimeHowl = new Howl({
        src: [CHIME_SOUND_URL],
        volume: 0.7,
        html5: true,
      });

      this.musicHowl = new Howl({
        src: [WEDDING_MUSIC_URL],
        html5: true,
        loop: true,
        volume: 0.45,
        onloaderror: () => {
          console.warn('Audio stream failed to load from primary source, fallback available.');
        },
        onplay: () => {
          this.isPlaying = true;
          this.notify();
        },
        onpause: () => {
          this.isPlaying = false;
          this.notify();
        },
        onstop: () => {
          this.isPlaying = false;
          this.notify();
        },
        onend: () => {
          if (!this.musicHowl?.loop()) {
            this.isPlaying = false;
            this.notify();
          }
        }
      });
    } catch (e) {
      console.warn('Howler initialization deferred:', e);
    }
  }

  // Auspicious temple chime sound synthesized or played via Howler
  public playOpeningChime() {
    try {
      if (this.chimeHowl && this.chimeHowl.state() === 'loaded') {
        this.chimeHowl.play();
      } else {
        this.playSynthesizedBell();
      }
    } catch {
      this.playSynthesizedBell();
    }
  }

  // Elegant fallback Web Audio harmonic bell
  private playSynthesizedBell() {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      if (!this.audioContext) {
        this.audioContext = new AudioCtx();
      }
      if (this.audioContext.state === 'suspended') {
        this.audioContext.resume();
      }

      const frequencies = [587.33, 880, 1174.66, 1760]; // D5 major harmonic bell
      frequencies.forEach((freq, idx) => {
        if (!this.audioContext) return;
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.audioContext.currentTime);

        gain.gain.setValueAtTime(0.08 / (idx + 1), this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.audioContext.currentTime + 2.5);

        osc.connect(gain);
        gain.connect(this.audioContext.destination);

        osc.start();
        osc.stop(this.audioContext.currentTime + 2.5);
      });
    } catch {
      // Audio playback silently safe
    }
  }

  public playMusic() {
    try {
      if (this.musicHowl) {
        if (!this.musicHowl.playing()) {
          this.musicHowl.play();
          this.isPlaying = true;
          this.notify();
        }
      }
    } catch (e) {
      console.warn('Could not play music:', e);
    }
  }

  public pauseMusic() {
    try {
      if (this.musicHowl && this.musicHowl.playing()) {
        this.musicHowl.pause();
        this.isPlaying = false;
        this.notify();
      }
    } catch (e) {
      console.warn('Could not pause music:', e);
    }
  }

  public togglePlay() {
    if (this.isPlaying) {
      this.pauseMusic();
    } else {
      this.playMusic();
    }
  }

  public toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.musicHowl) {
      this.musicHowl.mute(this.isMuted);
    }
    this.notify();
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public subscribe(callback: (isPlaying: boolean, isMuted: boolean) => void) {
    this.listeners.add(callback);
    callback(this.isPlaying, this.isMuted);
    return () => {
      this.listeners.delete(callback);
    };
  }

  private notify() {
    this.listeners.forEach((listener) => listener(this.isPlaying, this.isMuted));
  }
}

export const audioManager = new WeddingAudioManager();

