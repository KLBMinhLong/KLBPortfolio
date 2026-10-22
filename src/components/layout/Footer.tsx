import { Music, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCustomCursor } from '../../context/CustomCursorContext';
import { useMusic } from '../../context/MusicContext';
import { socialLinks } from '../../data/socials';
import { useLanguage } from '../../i18n/LanguageContext';
import { CursorPickerModal } from '../ui/CursorPickerModal';
import { MusicPlayerModal } from '../ui/MusicPlayerModal';
import { SocialIcon } from '../ui/SocialIcon';

export function Footer() {
  const { t, language } = useLanguage();
  const { togglePicker, currentCursorId, isPickerOpen } = useCustomCursor();
  const { toggleMusicModal, isMusicModalOpen, isPlaying, currentTrack } = useMusic();
  const year = new Date().getFullYear();

  const isCustomActive = currentCursorId !== 'default';

  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div>
          <Link className="footer-brand" to="/">KLB Studio</Link>
          <p>{t.footer.statement}</p>
        </div>
        <div className="footer-meta">
          <p>© {year} Nguyễn Minh Long</p>
          <div className="social-links social-links--footer">
            {socialLinks.map((link) => (
              <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} title={link.label} key={link.id}>
                <SocialIcon id={link.id} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Secret Easter Egg Controls Bar */}
      <div className="shell footer-easter-egg-container">
        {/* Custom Cursor Selector Trigger */}
        <button
          type="button"
          className={`footer-easter-egg-btn ${isCustomActive ? 'footer-easter-egg-btn--active' : ''} ${
            isPickerOpen ? 'footer-easter-egg-btn--open' : ''
          }`}
          onClick={togglePicker}
          title={language === 'vi' ? 'Bộ sưu tập Con trỏ Chuột (Easter Egg)' : 'Custom Cursor Gallery (Easter Egg)'}
          aria-label={language === 'vi' ? 'Mở bộ sưu tập con trỏ chuột' : 'Open custom cursor gallery'}
          aria-expanded={isPickerOpen}
        >
          <span className="footer-easter-egg-icon" aria-hidden="true">
            <Sparkles className="sparkle-icon" size={12} />
          </span>
          <span className="footer-easter-egg-tag">
            {language === 'vi' ? 'Bộ sưu tập Con trỏ' : 'Custom Cursors'}
          </span>
        </button>

        {/* Background Music Player Trigger */}
        <button
          type="button"
          className={`footer-easter-egg-btn ${isPlaying ? 'footer-easter-egg-btn--playing' : ''} ${
            isMusicModalOpen ? 'footer-easter-egg-btn--open' : ''
          }`}
          onClick={toggleMusicModal}
          title={
            isPlaying
              ? `${language === 'vi' ? 'Đang phát' : 'Now playing'}: ${currentTrack?.title} - ${currentTrack?.artist}`
              : language === 'vi'
                ? 'Phát nhạc nền thư giãn (Easter Egg)'
                : 'Background Music Player (Easter Egg)'
          }
          aria-label={language === 'vi' ? 'Mở trình phát nhạc nền' : 'Open background music player'}
          aria-expanded={isMusicModalOpen}
        >
          <span className="footer-easter-egg-icon footer-easter-egg-icon--music" aria-hidden="true">
            <Music size={12} />
          </span>
          <span className="footer-easter-egg-tag">
            {isPlaying && currentTrack ? (
              <span className="footer-playing-ticker">
                🎵 {currentTrack.title}
              </span>
            ) : language === 'vi' ? (
              'Nhạc nền'
            ) : (
              'BGM Lounge'
            )}
          </span>
        </button>
      </div>

      {/* Interactive Modals */}
      <CursorPickerModal />
      <MusicPlayerModal />
    </footer>
  );
}


