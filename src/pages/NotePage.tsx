import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useLanguage } from '../i18n/LanguageContext';
import { noteArticles } from '../data/noteArticles';

export function NotePage() {
  const { slug } = useParams();
  const { language, t } = useLanguage();
  const note = t.notes.items.find((item) => item.slug === slug);
  const article = slug ? noteArticles[language][slug] : undefined;

  useDocumentMeta({
    title: note ? `${note.title} — KLB.dev` : `${t.common.notesTitle} — KLB.dev`,
    description: note?.summary ?? t.common.notesIntro,
    path: slug ? `/notes/${slug}` : '/notes',
  });

  if (!note || !article) {
    return (
      <section className="standalone-page standalone-page--404 shell page-enter">
        <Link className="back-link" to="/notes"><ArrowLeft aria-hidden="true" />{t.common.notesTitle}</Link>
        <p className="eyebrow">404</p>
        <h1>{t.common.noteNotFound}</h1>
      </section>
    );
  }

  return (
    <article className="note-article page-enter">
      <header className="note-article__hero shell">
        <Link className="back-link" to="/notes"><ArrowLeft aria-hidden="true" />{t.common.notesTitle}</Link>
        <div className="note-article__hero-grid">
          <div>
            <p className="eyebrow">{note.category} · {note.readTime}</p>
            <h1>{note.title}</h1>
            <p className="note-article__intro">{article.intro}</p>
          </div>
          <figure className="note-article__cover"><img src={note.image} alt="" /></figure>
        </div>
      </header>

      <div className="note-article__body shell">
        {article.sections.map((section) => (
          <section className="note-article__section" key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.code && <pre><code>{section.code}</code></pre>}
          </section>
        ))}

        <aside className="note-takeaways">
          <p className="eyebrow">{t.common.keyTakeaways}</p>
          <ul>{article.takeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}</ul>
        </aside>

        <footer className="note-article__footer">
          {note.sourceUrl && (
            <a className="button button--secondary" href={note.sourceUrl} target="_blank" rel="noreferrer">
              {t.common.readOriginal}<ExternalLink aria-hidden="true" />
            </a>
          )}
          <p>{t.common.blogIntro}</p>
          <a className="text-link" href="https://klbminhlong.github.io/" target="_blank" rel="noreferrer">
            {t.common.visitBlog}<ExternalLink aria-hidden="true" />
          </a>
        </footer>
      </div>
    </article>
  );
}
