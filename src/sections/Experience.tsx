import React from 'react';
import { useTranslation } from '../i18n/useTranslation';
import { SectionTitle } from '../components/ui/SectionTitle';
import { GlassCard } from '../components/ui/GlassCard';
import { Badge } from '../components/ui/Badge';
import { experienceData } from '../data/experience';
import { Briefcase, GraduationCap, ChevronRight } from 'lucide-react';
import './Experience.css';

export const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle
          tag={t('experience.tag')}
          title={t('experience.title')}
          subtitle={t('experience.subtitle')}
        />

        <div className="timeline-container">
          {experienceData.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-dot">
                <div className="timeline-dot-inner"></div>
              </div>

              <GlassCard glowColor={item.type === 'work' ? 'indigo' : 'teal'} className="timeline-card">
                <div className="timeline-header">
                  <div className="timeline-header-row">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                      {item.type === 'work' ? (
                        <Briefcase size={20} color="var(--color-accent)" />
                      ) : (
                        <GraduationCap size={20} color="var(--color-accent-2)" />
                      )}
                      <h3 className="timeline-role">{t(item.titleKey)}</h3>
                    </div>
                    <span className="timeline-date">{t(item.dateKey)}</span>
                  </div>

                  <div className="timeline-company">{t(item.subtitleKey)}</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {t(item.locationKey)}
                  </div>
                </div>

                <div className="timeline-bullets">
                  {item.bulletKeys.map((bulletKey, idx) => (
                    <div key={idx} className="timeline-bullet">
                      <ChevronRight size={16} className="timeline-bullet-icon" />
                      <span>{t(bulletKey)}</span>
                    </div>
                  ))}
                </div>

                <div className="timeline-skills">
                  {item.skills.map((skill, idx) => (
                    <Badge key={idx} variant="glass" size="sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
