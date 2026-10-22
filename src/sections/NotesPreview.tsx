import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useLanguage } from '../i18n/LanguageContext';

export function NotesPreview() {
  const { t } = useLanguage();

  return (
    <section className="section shell" id="notes" aria-labelledby="notes-title">
      <div className="section-heading-row">
        <SectionHeading id="notes-title" title={t.notes.title} intro={t.notes.intro} />
        <Link className="text-link" to="/notes">{t.notes.viewAll}<ArrowUpRight aria-hidden="true" /></Link>
      </div>
      <ul className="note-list">
        {t.notes.items.slice(0, 3).map((note) => (
          <li key={note.slug}>
            <Link className="note-row" to={`/notes/${note.slug}`}>
              <img src={note.image} alt="" loading="lazy" />
              <span className="note-row__text">
                <span className="note-row__meta">{note.category}, {note.readTime}</span>
                <strong>{note.title}</strong>
                <span>{note.summary}</span>
              </span>
              <ArrowUpRight className="note-row__arrow" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
