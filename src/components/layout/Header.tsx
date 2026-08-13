import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../i18n/useTranslation';
import { Github, Linkedin, Youtube, Menu, X, Globe } from 'lucide-react';
import './Header.css';

export const Header: React.FC = () => {
  const { t, lang, toggleLang } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // ScrollSpy logic
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: t('nav.about') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'certificates', label: t('nav.certificates') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-nav">
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="brand-logo">
          <span className="brand-monogram">&lt;ML/&gt;</span>
          <span>MinhLong<span className="gradient-text">.dev</span></span>
        </a>

        <nav className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button
            onClick={toggleLang}
            className="lang-btn"
            title="Switch Language"
            aria-label="Switch Language"
          >
            <Globe size={14} />
            <span>{lang === 'en' ? '🇺🇸 EN' : '🇻🇳 VI'}</span>
          </button>

          <a
            href="https://github.com/KLBMinhLong"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/minh-long-nguy%E1%BB%85n-09984a333"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="https://www.youtube.com/@KLB-MinhLong"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link youtube"
            aria-label="YouTube Channel"
          >
            <Youtube size={18} />
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-drawer">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="mobile-nav-link"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
