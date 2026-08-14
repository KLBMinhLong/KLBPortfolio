import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { useLanguage } from '../../i18n/LanguageContext';

export function SiteLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const hash = location.hash.slice(1);
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView());
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <a className="skip-link" href="#main-content">{t.common.skipToContent}</a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
