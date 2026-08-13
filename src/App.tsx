import React from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { Header } from './components/layout/Header';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Certificates } from './sections/Certificates';
import { Contact } from './sections/Contact';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="app-layout">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
};

export default App;
