import { About } from '../sections/About';
import { Capabilities } from '../sections/Capabilities';
import { Contact } from '../sections/Contact';
import { Education } from '../sections/Education';
import { Experience } from '../sections/Experience';
import { Hero } from '../sections/Hero';
import { NotesPreview } from '../sections/NotesPreview';
import { ProofStrip } from '../sections/ProofStrip';
import { SelectedWork } from '../sections/SelectedWork';
import { Workflow } from '../sections/Workflow';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useLanguage } from '../i18n/LanguageContext';

export function HomePage() {
  const { language } = useLanguage();
  useDocumentMeta({
    title: 'Nguyễn Minh Long — Software Developer | KLB.dev',
    description:
      language === 'en'
        ? 'Portfolio of Nguyễn Minh Long, a Software Developer building backend systems and full-stack products with an AI-first, verification-driven workflow.'
        : 'Portfolio của Nguyễn Minh Long, Software Developer phát triển backend system và sản phẩm full-stack theo quy trình AI-first, verification-driven.',
  });

  return (
    <div className="page-enter">
      <Hero />
      <ProofStrip />
      <SelectedWork />
      <Workflow />
      <Experience />
      <Capabilities />
      <NotesPreview />
      <Education />
      <About />
      <Contact />
    </div>
  );
}
