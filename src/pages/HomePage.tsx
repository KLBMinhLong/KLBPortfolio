import { About } from '../sections/About';
import { Capabilities } from '../sections/Capabilities';
import { Contact } from '../sections/Contact';
import { Education } from '../sections/Education';
import { Experience } from '../sections/Experience';
import { Hero } from '../sections/Hero';
import { NotesPreview } from '../sections/NotesPreview';
import { SelectedWork } from '../sections/SelectedWork';
import { Workflow } from '../sections/Workflow';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useLanguage } from '../i18n/LanguageContext';

export function HomePage() {
  const { language } = useLanguage();
  useDocumentMeta({
    title: 'Nguyễn Minh Long | Software Engineer | KLB.dev',
    description:
      language === 'en'
        ? 'Portfolio of Nguyễn Minh Long, a Software Engineer at Viemind working on backend systems, full-stack products and AI-agent integrations.'
        : 'Portfolio của Nguyễn Minh Long, Software Engineer tại Viemind, làm backend, sản phẩm full-stack và tích hợp AI agent.',
  });

  return (
    <div className="page-enter">
      <Hero />
      <Experience />
      <SelectedWork />
      <Workflow />
      <Capabilities />
      <NotesPreview />
      <Education />
      <About />
      <Contact />
    </div>
  );
}
