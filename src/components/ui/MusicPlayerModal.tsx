import { AnimatePresence, motion } from 'framer-motion';
import {
  Disc3,
  Music2,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useMusic } from '../../context/MusicContext';
import { useLanguage } from '../../i18n/LanguageContext';

function formatTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

export function MusicPlayerModal() {
  const {
    tracks,
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    isMusicModalOpen,
    setIsMusicModalOpen,
    playTrack,
    togglePlay,
    nextTrack,
    prevTrack,
    seek,
    setVolume,
    toggleMute,
  } = useMusic();

  const { language } = useLanguage();
  const modalRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isMusicModalOpen) {
        setIsMusicModalOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMusicModalOpen, setIsMusicModalOpen]);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsMusicModalOpen(false);
      }
    }
    if (isMusicModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMusicModalOpen, setIsMusicModalOpen]);

  // Auto scroll active track into view
  useEffect(() => {
    if (isMusicModalOpen && currentTrack && listRef.current) {
      const activeEl = listRef.current.querySelector('.music-track-item--active');
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [isMusicModalOpen, currentTrack]);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <AnimatePresence>
      {isMusicModalOpen && (
        <div className="music-modal-backdrop" role="dialog" aria-modal="true">
          <motion.div
            ref={modalRef}
            className="music-modal-card"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="music-modal-header">
              <div className="music-modal-title-group">
                <div className={`music-disc-icon ${isPlaying ? 'music-disc-icon--spinning' : ''}`}>
                  <Disc3 size={18} />
                </div>
                <div>
                  <h3>{language === 'vi' ? 'Trình phát Nhạc Nền' : 'Background Music Lounge'}</h3>
                  <p>
                    {language === 'vi'
                      ? 'Thưởng thức playlist âm nhạc khi xem portfolio'
                      : 'Curated playlist while exploring portfolio'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="cursor-picker-close-btn"
                onClick={() => setIsMusicModalOpen(false)}
                aria-label={language === 'vi' ? 'Đóng trình phát nhạc' : 'Close music player'}
              >
                <X size={18} />
              </button>
            </div>

            {/* Now Playing Control Deck */}
            <div className="music-deck">
              <div className="music-deck-now-playing">
                <div className="music-deck-info">
                  <span className="music-deck-title">
                    {currentTrack
                      ? currentTrack.title
                      : language === 'vi'
                        ? 'Chưa chọn bài hát'
                        : 'No track selected'}
                  </span>
                  <span className="music-deck-artist">
                    {currentTrack
                      ? `${currentTrack.artist} · ${currentTrack.genre}`
                      : language === 'vi'
                        ? 'Chọn một bài hát từ danh sách dưới đây để phát'
                        : 'Select a track below to start listening'}
                  </span>
                </div>

                {/* Animated Equalizer Wave */}
                {isPlaying && (
                  <div className="music-equalizer-bars" aria-hidden="true">
                    <span className="eq-bar eq-bar--1" />
                    <span className="eq-bar eq-bar--2" />
                    <span className="eq-bar eq-bar--3" />
                    <span className="eq-bar eq-bar--4" />
                  </div>
                )}
              </div>

              {/* Progress Scrubber */}
              <div className="music-progress-wrapper">
                <span className="music-time">{formatTime(currentTime)}</span>
                <div
                  className="music-progress-bar"
                  onClick={(e) => {
                    if (duration > 0) {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickPos = (e.clientX - rect.left) / rect.width;
                      seek(clickPos * duration);
                    }
                  }}
                >
                  <div
                    className="music-progress-fill"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <span className="music-time">{formatTime(duration)}</span>
              </div>

              {/* Player Controls & Volume */}
              <div className="music-deck-controls">
                <div className="music-main-buttons">
                  <button
                    type="button"
                    className="music-btn-control"
                    onClick={prevTrack}
                    title={language === 'vi' ? 'Bài trước' : 'Previous track'}
                    aria-label="Previous track"
                  >
                    <SkipBack size={17} />
                  </button>

                  <button
                    type="button"
                    className="music-btn-play"
                    onClick={togglePlay}
                    title={isPlaying ? (language === 'vi' ? 'Tạm dừng' : 'Pause') : (language === 'vi' ? 'Phát nhạc' : 'Play')}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause size={19} /> : <Play size={19} className="play-icon-offset" />}
                  </button>

                  <button
                    type="button"
                    className="music-btn-control"
                    onClick={nextTrack}
                    title={language === 'vi' ? 'Bài tiếp theo' : 'Next track'}
                    aria-label="Next track"
                  >
                    <SkipForward size={17} />
                  </button>
                </div>

                {/* Volume Slider */}
                <div className="music-volume-group">
                  <button
                    type="button"
                    className="music-vol-btn"
                    onClick={toggleMute}
                    title={isMuted ? 'Unmute' : 'Mute'}
                    aria-label="Mute / Unmute"
                  >
                    {isMuted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="music-volume-slider"
                    aria-label="Volume slider"
                  />
                </div>
              </div>
            </div>

            {/* Scrollable Tracklist */}
            <div ref={listRef} className="music-scroll-tracklist">
              {tracks.map((track, idx) => {
                const isThisTrack = currentTrack?.id === track.id;
                const isThisPlaying = isThisTrack && isPlaying;

                return (
                  <button
                    key={track.id}
                    type="button"
                    className={`music-track-item ${isThisTrack ? 'music-track-item--active' : ''}`}
                    onClick={() => {
                      if (isThisTrack) {
                        togglePlay();
                      } else {
                        playTrack(track.id);
                      }
                    }}
                  >
                    {/* Index or Live Equalizer */}
                    <div className="music-track-index">
                      {isThisPlaying ? (
                        <div className="music-mini-eq">
                          <span className="mini-eq-bar mini-eq-bar--1" />
                          <span className="mini-eq-bar mini-eq-bar--2" />
                          <span className="mini-eq-bar mini-eq-bar--3" />
                        </div>
                      ) : (
                        <span>{String(idx + 1).padStart(2, '0')}</span>
                      )}
                    </div>

                    {/* Track Info */}
                    <div className="music-track-info">
                      <div className="music-track-title-row">
                        <span className="music-track-title">{track.title}</span>
                        <span className="music-track-tag">{track.tag}</span>
                      </div>
                      <span className="music-track-artist">
                        {track.artist} · <span className="music-genre-text">{track.genre}</span>
                      </span>
                    </div>

                    {/* Quick Play/Pause Action */}
                    <div className="music-track-action">
                      <span
                        className={`music-track-btn ${
                          isThisPlaying ? 'music-track-btn--playing' : ''
                        }`}
                      >
                        {isThisPlaying ? <Pause size={13} /> : <Play size={13} className="play-icon-offset" />}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Footer Bar */}
            <div className="music-modal-footer">
              <span className="music-footer-count">
                <Music2 size={13} />
                <span>
                  {tracks.length} {language === 'vi' ? 'bài hát tuyển chọn' : 'curated tracks'}
                </span>
              </span>
              <span className="music-footer-note">
                {language === 'vi'
                  ? '⚡ Tự động chuyển bài khi kết thúc'
                  : '⚡ Auto-plays next track'}
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
