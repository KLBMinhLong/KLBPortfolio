import { Languages, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';

const sectionIds = ['experience', 'work', 'capabilities', 'notes', 'about'] as const;

export function Header() {
  const { language, toggleLanguage, t } = useLanguage();
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
          {/* The mark's white K needs a dark chip to stay visible on the light page. */}
          <span className="brand-link__chip"><img src="/assets/brand/klb-mark.png" alt="" aria-hidden="true" /></span>
          <span>KLB<span className="brand-link__tld">.dev</span></span>
        </Link>

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
