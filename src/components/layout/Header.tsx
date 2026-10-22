import { Languages, Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../i18n/LanguageContext';

const sectionIds = ['experience', 'work', 'capabilities', 'notes', 'about'] as const;

export function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goToSection = (sectionId: string) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const labels = [t.nav.experience, t.nav.work, t.nav.capabilities, t.nav.notes, t.nav.about];

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__inner shell">
        <Link className="brand-link" to="/" aria-label="KLB.dev home" onClick={() => setMenuOpen(false)}>
          {/* The standard KLB logo is drawn on black, so it sits in its own dark tile on both themes. */}
          <img className="brand-link__logo" src="/assets/brand/klb-logo.png" alt="" aria-hidden="true" width="36" height="36" />
          <span>KLB<span className="brand-link__tld">.dev</span></span>
        </Link>

        <div className="header-actions">
          <button
            className="icon-button"
            type="button"
            aria-label={theme === 'dark' ? t.nav.toLightTheme : t.nav.toDarkTheme}
            title={theme === 'dark' ? t.nav.toLightTheme : t.nav.toDarkTheme}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
          </button>
          <button
            className="icon-button mobile-menu-button"
            type="button"
            aria-label={menuOpen ? t.nav.close : t.nav.menu}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        <nav
          id="primary-navigation"
          className={`primary-nav ${menuOpen ? 'primary-nav--open' : ''}`}
          aria-label={t.common.primaryNavigation}
        >
          {sectionIds.map((id, index) => (
            <button type="button" onClick={() => goToSection(id)} key={id}>
              {labels[index]}
            </button>
          ))}
          <Link to="/resume" onClick={() => setMenuOpen(false)}>{t.nav.resume}</Link>
          <button className="language-button" type="button" onClick={toggleLanguage}>
            <Languages size={17} aria-hidden="true" />
            <span>{language === 'en' ? 'VI' : 'EN'}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
