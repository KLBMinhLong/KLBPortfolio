import { ArrowLeft, ArrowRight, ArrowUpRight, Code2, Play } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Reveal } from '../components/ui/Reveal';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useLanguage } from '../i18n/LanguageContext';

export function ProjectPage() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const projectIndex = t.projects.findIndex((item) => item.slug === slug);
  const project = t.projects[projectIndex];
  const nextProject = t.projects[(projectIndex + 1) % t.projects.length];

  useDocumentMeta({
    title: project ? `${project.title} — Nguyễn Minh Long` : `${t.common.projectNotFound} — KLB.dev`,
    description: project?.summary ?? t.common.projectNotFound,
    path: project ? `/work/${project.slug}` : '/work/not-found',
    image: project ? `https://minhlongdev.id.vn${project.cover}` : undefined,
  });

  if (!project) {
    return (
      <section className="standalone-page shell page-enter">
        <p className="eyebrow">404 · Project</p>
        <h1>{t.common.projectNotFound}</h1>
        <Link className="button button--primary" to="/"><ArrowLeft aria-hidden="true" />{t.common.backHome}</Link>
      </section>
    );
  }

  return (
    <article className="case-study page-enter">
      <header className="case-hero shell">
        <Link className="back-link" to="/#work"><ArrowLeft aria-hidden="true" />{t.common.backHome}</Link>
        <div className="case-hero__grid">
          <div className="case-hero__copy">
            <p className="eyebrow">{t.common.caseStudy} · {project.index}</p>
            <p className="project-label">{project.label}</p>
            <h1>{project.title}</h1>
            <p className="case-hero__summary">{project.summary}</p>
            <div className="project-actions">
              <a className="button button--primary" href={project.sourceUrl} target="_blank" rel="noreferrer">
                <Code2 aria-hidden="true" />{t.common.viewSource}<ArrowUpRight aria-hidden="true" />
              </a>
              {project.demoUrl && (
                <a className="button button--secondary" href={project.demoUrl} target="_blank" rel="noreferrer">
                  <Play aria-hidden="true" />{t.common.watchDemo}
                </a>
              )}
            </div>
          </div>
          <div className="case-hero__media"><img src={project.cover} alt={project.coverAlt} /></div>
        </div>
        <dl className="case-facts">
          {project.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
        </dl>
      </header>

      <div className="case-body shell">
        <section className="case-contribution">
          <p className="eyebrow">{t.common.projectContribution}</p>
          <ul className="evidence-list evidence-list--large">
            {project.contribution.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <div className="tech-line">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        </section>

        {project.narrative.map((section) => (
          <Reveal className="case-narrative" key={section.title}>
            <p className="eyebrow">{section.eyebrow}</p>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.points && <ul className="case-points">{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
          </Reveal>
        ))}

        <section className="case-gallery" aria-labelledby="evidence-title">
          <p className="eyebrow">{t.common.projectEvidence}</p>
          <h2 id="evidence-title">{project.title}</h2>
          {project.gallery.map((item, index) => (
            <Reveal className="gallery-item" key={item.src}>
              <div className="gallery-item__frame"><img src={item.src} alt={item.alt} loading="lazy" /></div>
              <div className="gallery-item__caption"><span>0{index + 1}</span><p>{item.caption}</p></div>
            </Reveal>
          ))}
        </section>

        {project.disclosure && <aside className="disclosure-note"><span>{t.common.transparencyNote}</span><p>{project.disclosure}</p></aside>}

        {nextProject && (
          <Link className="next-project" to={`/work/${nextProject.slug}`}>
            <span>{t.common.nextProject}</span><strong>{nextProject.title}</strong><ArrowRight aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}
