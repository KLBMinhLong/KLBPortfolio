import { Code2, Network, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div>
          <Link className="footer-brand" to="/">KLB.dev</Link>
          <p>{t.footer.statement}</p>
        </div>
        <div className="footer-meta">
          <p>© {year} Nguyễn Minh Long</p>
          <p>{t.footer.domainNote}</p>
          <div className="social-links social-links--footer">
            <a href="https://github.com/KLBMinhLong" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Code2 aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/minh-long-nguyễn-09984a333"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Network aria-hidden="true" />
            </a>
            <a href="https://www.youtube.com/@KLB-MinhLong" target="_blank" rel="noreferrer" aria-label="YouTube">
              <Video aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
