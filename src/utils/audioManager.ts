const WEDDING_MUSIC_URL = '/audio/bgm.mp3';

class WeddingAudioManager {
  private audio: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private listeners: Set<(isPlaying: boolean, isMuted: boolean) => void> = new Set();

  constructor() {
    if (typeof window !== 'undefined') {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => this.initAudio(), { once: true });
      } else {
        this.initAudio();
      }
    }
  }

  private initAudio() {
    try {
      const existing = document.getElementById('wedding-bgm') as HTMLAudioElement | null;
      if (existing) {
        this.audio = existing;
      } else {
        this.audio = new Audio(WEDDING_MUSIC_URL);
        this.audio.loop = true;
        this.audio.preload = 'auto';
        this.audio.volume = 0.65;
        document.body.appendChild(this.audio);
      }

      this.isPlaying = !this.audio.paused;

      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audio.addEventListener('volumechange', () => {
        if (this.audio) {
          this.isMuted = this.audio.muted;
          this.notify();
        }
      });

      window.addEventListener('wedding-bgm-play', () => {
        this.isPlaying = true;
        this.notify();
      });

      // Try playing immediately
      this.playMusic();
    } catch (e) {
      console.warn('Audio initialization:', e);
    }
  }

  public playMusic(): Promise<void> {
    if (!this.audio && typeof document !== 'undefined') {
      this.initAudio();
    }
    if (!this.audio) return Promise.resolve();
    if (!this.audio.paused) {
      this.isPlaying = true;
      this.notify();
      return Promise.resolve();
    }

    return this.audio
      .play()
      .then(() => {
        this.isPlaying = true;
        this.notify();
      })
      .catch(() => {
        this.isPlaying = false;
        this.notify();
      });
  }

  public pauseMusic() {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
      this.notify();
    }
  }

  public togglePlay() {
    if (this.audio) {
      if (this.audio.paused) {
        this.playMusic();
      } else {
        this.pauseMusic();
      }
    }
  }

  public toggleMute() {
    if (this.audio) {
      this.isMuted = !this.isMuted;
      this.audio.muted = this.isMuted;
      this.notify();
    }
  }

  public getIsPlaying(): boolean {
    return this.audio ? !this.audio.paused : this.isPlaying;
  }

  public getIsMuted(): boolean {
    return this.audio ? this.audio.muted : this.isMuted;
  }

  public subscribe(callback: (isPlaying: boolean, isMuted: boolean) => void) {
    this.listeners.add(callback);
    callback(this.getIsPlaying(), this.getIsMuted());
    return () => {
      this.listeners.delete(callback);
    };
  }

  private notify() {
    this.listeners.forEach((listener) => listener(this.getIsPlaying(), this.getIsMuted()));
  }
}

export const audioManager = new WeddingAudioManager();
