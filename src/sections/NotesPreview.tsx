import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useLanguage } from '../i18n/LanguageContext';

export function NotesPreview() {
  const { t } = useLanguage();

  return (
    <section className="section shell" id="notes">
      <div className="section-heading-row">
        <Reveal><SectionHeading eyebrow={t.notes.eyebrow} title={t.notes.title} intro={t.notes.intro} /></Reveal>
        <Link className="text-link text-link--strong" to="/notes">{t.notes.viewAll}<ArrowUpRight aria-hidden="true" /></Link>
      </div>
      <div className="notes-grid">
        {t.notes.items.map((note, index) => (
          <Reveal className="note-card" delay={index * 0.06} key={note.title}>
            <div className="note-card__image"><img src={note.image} alt="" loading="lazy" /></div>
            <div className="note-card__meta"><span>{note.category}</span><span>{note.readTime}</span></div>
            <h3>{note.title}</h3>
            <p>{note.summary}</p>
            <Link className="text-link" to="/notes">{t.notes.readNote}<ArrowUpRight aria-hidden="true" /></Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
