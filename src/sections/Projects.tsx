import React from 'react';
import { useTranslation } from '../i18n/useTranslation';
import { SectionTitle } from '../components/ui/SectionTitle';
import { GlassCard } from '../components/ui/GlassCard';
import { Badge } from '../components/ui/Badge';
import { projectsData } from '../data/projects';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

export const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          tag={t('projects.tag')}
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
        />

        <div className="projects-grid">
          {projectsData.map((project) => (
            <GlassCard key={project.id} glowColor="indigo" className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                {project.badgeKey && (
                  <div className="project-badge-tag">{project.badgeKey}</div>
                )}
              </div>

              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{t(project.descKey)}</p>

                <div className="project-tech-list">
                  {project.tech.map((tItem, idx) => (
                    <Badge key={idx} variant="glass" size="sm">
                      {tItem}
                    </Badge>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-link"
                    >
                      <Github size={16} />
                      <span>{t('projects.view_github')}</span>
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-link"
                      style={{ color: 'var(--color-accent-2)' }}
                    >
                      <ExternalLink size={16} />
                      <span>{t('projects.live_demo')}</span>
                    </a>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
