import React, { createContext, useState, useEffect, ReactNode } from 'react';
import en from './en.json';
import vi from './vi.json';

export type Language = 'en' | 'vi';

type Translations = typeof en;

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  setLang: (lang: Language) => void;
  t: (path: string) => string;
}

const translations: Record<Language, Translations> = { en, vi };

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('klb_portfolio_lang');
    return (saved === 'vi' || saved === 'en') ? saved : 'en';
  });

  useEffect(() => {
    localStorage.setItem('klb_portfolio_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLangState((prev) => (prev === 'en' ? 'vi' : 'en'));
  };

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  // Helper to resolve nested keys like "hero.title"
  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = translations[lang];

    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        // Fallback to English if key missing in current lang
        let fallback: any = translations['en'];
        for (const k of keys) {
          if (fallback && typeof fallback === 'object' && k in fallback) {
            fallback = fallback[k];
          } else {
            return path; // Return path string if missing entirely
          }
        }
        return typeof fallback === 'string' ? fallback : path;
      }
    }

    return typeof current === 'string' ? current : path;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
