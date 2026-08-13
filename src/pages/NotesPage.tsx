import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useLanguage } from '../i18n/LanguageContext';

export function NotesPage() {
  const { t } = useLanguage();
  useDocumentMeta({ title: `${t.common.notesTitle} — KLB.dev`, description: t.common.notesIntro, path: '/notes' });

  return (
    <section className="standalone-page shell page-enter">
      <Link className="back-link" to="/"><ArrowLeft aria-hidden="true" />{t.common.backHome}</Link>
      <p className="eyebrow">{t.common.knowledgeBaseVersion}</p>
      <h1>{t.common.notesTitle}</h1>
      <p className="standalone-page__intro">{t.common.notesIntro}</p>
      <div className="notes-list">
        {t.notes.items.map((note, index) => (
          <article key={note.title}>
            <span className="notes-list__index">0{index + 1}</span>
            <img src={note.image} alt="" />
            <div><p className="eyebrow">{note.category} · {note.readTime}</p><h2>{note.title}</h2><p>{note.summary}</p></div>
            <span className="notes-list__coming">{t.common.notesStatus}<ArrowUpRight aria-hidden="true" /></span>
          </article>
        ))}
      </div>
    </section>
  );
}
