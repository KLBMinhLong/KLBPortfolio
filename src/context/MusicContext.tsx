import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { MUSIC_TRACKS, type MusicTrack } from '../data/musicTracks';

interface MusicContextValue {
  tracks: MusicTrack[];
  currentTrack: MusicTrack | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  isMusicModalOpen: boolean;
  setIsMusicModalOpen: (open: boolean) => void;
  toggleMusicModal: () => void;
  playTrack: (trackId: string) => void;
  togglePlay: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  seek: (time: number) => void;
  setVolume: (vol: number) => void;
  toggleMute: () => void;
}

const MusicContext = createContext<MusicContextValue | null>(null);

const STORAGE_VOLUME_KEY = 'klb-music-volume';
const STORAGE_TRACK_KEY = 'klb-music-track-id';

function getInitialVolume(): number {
  if (typeof window === 'undefined') return 0.6;
  const stored = window.localStorage.getItem(STORAGE_VOLUME_KEY);
  if (stored) {
    const parsed = parseFloat(stored);
    if (!isNaN(parsed) && parsed >= 0 && parsed <= 1) return parsed;
  }
  return 0.6;
}

function getInitialTrack(): MusicTrack | null {
  if (typeof window === 'undefined') return null;
  const stored = window.localStorage.getItem(STORAGE_TRACK_KEY);
  if (stored) {
    const found = MUSIC_TRACKS.find((t) => t.id === stored);
    if (found) return found;
  }
  return null;
}

export function MusicProvider({ children }: { children: ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<MusicTrack | null>(getInitialTrack);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolumeState] = useState<number>(getInitialVolume);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isMusicModalOpen, setIsMusicModalOpen] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const prevVolumeRef = useRef<number>(volume);
  const handleNextRef = useRef<() => void>(() => {});

  const playTrack = useCallback(
    (trackId: string) => {
      const target = MUSIC_TRACKS.find((t) => t.id === trackId);
      if (!target || !audioRef.current) return;

      setCurrentTrack(target);
      window.localStorage.setItem(STORAGE_TRACK_KEY, target.id);

      if (audioRef.current.src !== window.location.origin + target.src) {
        audioRef.current.src = target.src;
      }

      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    },
    [],
  );

  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;

    if (!currentTrack) {
      playTrack(MUSIC_TRACKS[0].id);
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (!audioRef.current.src) {
        audioRef.current.src = currentTrack.src;
      }
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [currentTrack, isPlaying, playTrack]);

  const handleNext = useCallback(() => {
    if (!currentTrack) {
      playTrack(MUSIC_TRACKS[0].id);
      return;
    }
    const idx = MUSIC_TRACKS.findIndex((t) => t.id === currentTrack.id);
    const nextIdx = (idx + 1) % MUSIC_TRACKS.length;
    playTrack(MUSIC_TRACKS[nextIdx].id);
  }, [currentTrack, playTrack]);

  const handlePrev = useCallback(() => {
    if (!audioRef.current) return;
    if (audioRef.current.currentTime > 3) {
      audioRef.current.currentTime = 0;
      return;
    }
    if (!currentTrack) {
      playTrack(MUSIC_TRACKS[0].id);
      return;
    }
    const idx = MUSIC_TRACKS.findIndex((t) => t.id === currentTrack.id);
    const prevIdx = (idx - 1 + MUSIC_TRACKS.length) % MUSIC_TRACKS.length;
    playTrack(MUSIC_TRACKS[prevIdx].id);
  }, [currentTrack, playTrack]);

  // Keep next ref updated
  useEffect(() => {
    handleNextRef.current = handleNext;
  }, [handleNext]);

  // Initialize audio element lazily
  useEffect(() => {
    if (!audioRef.current && typeof window !== 'undefined') {
      const audio = new Audio();
      audio.preload = 'none';
      audio.volume = volume;
      audioRef.current = audio;

      audio.addEventListener('timeupdate', () => {
        setCurrentTime(audio.currentTime);
      });

      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration || 0);
      });

      audio.addEventListener('ended', () => {
        handleNextRef.current();
      });

      audio.addEventListener('play', () => {
        setIsPlaying(true);
      });

      audio.addEventListener('pause', () => {
        setIsPlaying(false);
      });

      audio.addEventListener('error', () => {
        setIsPlaying(false);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const seek = useCallback((time: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  }, []);

  const setVolume = useCallback((newVol: number) => {
    const clamped = Math.max(0, Math.min(1, newVol));
    setVolumeState(clamped);
    if (audioRef.current) {
      audioRef.current.volume = clamped;
    }
    setIsMuted(clamped === 0);
    window.localStorage.setItem(STORAGE_VOLUME_KEY, String(clamped));
  }, []);

  const toggleMute = useCallback(() => {
    if (isMuted) {
      const restored = prevVolumeRef.current || 0.6;
      setVolume(restored);
    } else {
      prevVolumeRef.current = volume;
      setVolume(0);
    }
  }, [isMuted, volume, setVolume]);

  const toggleMusicModal = useCallback(() => {
    setIsMusicModalOpen((prev) => !prev);
  }, []);

  const value = useMemo(
    () => ({
      tracks: MUSIC_TRACKS,
      currentTrack,
      isPlaying,
      currentTime,
      duration,
      volume,
      isMuted,
      isMusicModalOpen,
      setIsMusicModalOpen,
      toggleMusicModal,
      playTrack,
      togglePlay,
      nextTrack: handleNext,
      prevTrack: handlePrev,
      seek,
      setVolume,
      toggleMute,
    }),
    [
      currentTrack,
      isPlaying,
      currentTime,
      duration,
      volume,
      isMuted,
      isMusicModalOpen,
      toggleMusicModal,
      playTrack,
      togglePlay,
      handleNext,
      handlePrev,
      seek,
      setVolume,
      toggleMute,
    ],
  );

  return <MusicContext.Provider value={value}>{children}</MusicContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useMusic() {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within MusicProvider');
  }
  return context;
}
