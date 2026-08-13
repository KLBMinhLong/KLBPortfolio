import React from 'react';
import { useTranslation } from '../../i18n/useTranslation';
import { profileData } from '../../data/profile';
import { Github, Linkedin, Youtube, Facebook, ShieldCheck } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#hero" className="brand-logo">
              <span className="brand-monogram">&lt;ML/&gt;</span>
              <span>MinhLong<span className="gradient-text">.dev</span></span>
            </a>
            <div className="domain-pill">
              <ShieldCheck size={14} />
              <span>https://{profileData.domain}</span>
            </div>
          </div>

          <div className="header-actions">
            <a
              href="https://github.com/KLBMinhLong"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/minh-long-nguy%E1%BB%85n-09984a333"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.youtube.com/@KLB-MinhLong"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link youtube"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
            <a
              href="https://www.facebook.com/long.nguyen.601773/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {profileData.name}. {t('footer.rights')}</p>
          <p>{t('footer.text')}</p>
        </div>
      </div>
    </footer>
  );
};
