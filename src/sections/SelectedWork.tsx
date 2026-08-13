import { ArrowUpRight, Code2, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useLanguage } from '../i18n/LanguageContext';

export function SelectedWork() {
  const { t } = useLanguage();

  return (
    <section className="section section--work shell" id="work">
      <Reveal>
        <SectionHeading eyebrow={t.work.eyebrow} title={t.work.title} intro={t.work.intro} />
      </Reveal>

      <div className="project-list">
        {t.projects.map((project, index) => (
          <Reveal className={`project-feature project-feature--${index + 1}`} key={project.slug}>
            <div className="project-feature__copy">
              <div className="project-feature__number">{project.index}</div>
              <p className="project-label">{project.label}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul className="evidence-list">
                {project.contribution.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="tech-line" aria-label="Technologies">
                {project.technologies.slice(0, 6).map((technology) => <span key={technology}>{technology}</span>)}
              </div>
              <div className="project-actions">
                <Link className="text-link text-link--strong" to={`/work/${project.slug}`}>
                  {t.work.viewCaseStudy}<ArrowUpRight aria-hidden="true" />
                </Link>
                <a className="text-link" href={project.sourceUrl} target="_blank" rel="noreferrer">
                  <Code2 aria-hidden="true" />{t.work.sourceCode}
                </a>
                {project.demoUrl && (
                  <a className="text-link" href={project.demoUrl} target="_blank" rel="noreferrer">
                    <Play aria-hidden="true" />{t.work.watchDemo}
                  </a>
                )}
              </div>
            </div>
            <Link className="project-feature__media" to={`/work/${project.slug}`} aria-label={`${t.work.viewCaseStudy}: ${project.title}`}>
              <img src={project.cover} alt={project.coverAlt} loading={index === 0 ? 'eager' : 'lazy'} />
              <span className="project-feature__media-label">{project.title} / {project.index}</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
