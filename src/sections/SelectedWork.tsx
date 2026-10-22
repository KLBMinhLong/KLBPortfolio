import { ArrowUpRight, Code2, GitPullRequest, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useLanguage } from '../i18n/LanguageContext';

// YourSneaker keeps its case-study route but is no longer featured on the home page.
const featuredSlugs = ['eprocure', 'student-dormitory'];

export function SelectedWork() {
  const { t } = useLanguage();
  const projects = t.projects.filter((project) => featuredSlugs.includes(project.slug));

  return (
    <section className="section shell" id="work" aria-labelledby="work-title">
      <SectionHeading id="work-title" title={t.work.title} intro={t.work.intro} />

      <div className="project-list">
        {projects.map((project, index) => (
          <article className={`project ${index === 0 ? 'project--lead' : ''}`} key={project.slug}>
            <Link className="project__media" to={`/work/${project.slug}`} tabIndex={-1} aria-hidden="true">
              <img src={project.cover} alt="" loading={index === 0 ? 'eager' : 'lazy'} />
            </Link>
            <div className="project__copy">
              <p className="project__label">{project.label}</p>
              <h3>
                <Link to={`/work/${project.slug}`}>{project.title}</Link>
              </h3>
              <p>{project.summary}</p>
              <p className="project__stack">{project.technologies.join(', ')}</p>
              <div className="project__actions">
                <Link className="text-link" to={`/work/${project.slug}`}>
                  {t.work.viewCaseStudy}<ArrowUpRight aria-hidden="true" />
                </Link>
                <a className="text-link text-link--quiet" href={project.sourceUrl} target="_blank" rel="noreferrer">
                  <Code2 aria-hidden="true" />{t.work.sourceCode}
                </a>
                {project.demoUrl && (
                  <a className="text-link text-link--quiet" href={project.demoUrl} target="_blank" rel="noreferrer">
                    <Play aria-hidden="true" />{t.work.watchDemo}
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <aside className="oss-note">
        <GitPullRequest className="oss-note__icon" aria-hidden="true" />
        <div>
          <h3>{t.work.oss.title}</h3>
          <p>{t.work.oss.text}</p>
          <a className="text-link" href={t.work.oss.href} target="_blank" rel="noreferrer">
            {t.work.oss.linkLabel}<ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </aside>
    </section>
  );
}
