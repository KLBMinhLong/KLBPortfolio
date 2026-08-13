import React from 'react';
import { useTranslation } from '../i18n/useTranslation';
import { SectionTitle } from '../components/ui/SectionTitle';
import { GlassCard } from '../components/ui/GlassCard';
import { skillsData } from '../data/skills';
import { Server, Layers, Cpu } from 'lucide-react';
import './Skills.css';

export const Skills: React.FC = () => {
  const { t } = useTranslation();

  const primarySkills = skillsData.filter(s => s.category === 'primary');
  const secondarySkills = skillsData.filter(s => s.category === 'secondary');
  const enterpriseSkills = skillsData.filter(s => s.category === 'enterprise');

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle
          tag={t('skills.tag')}
          title={t('skills.title')}
          subtitle={t('skills.subtitle')}
        />

        <div className="skills-categories">
          {/* Primary Stack */}
          <GlassCard glowColor="indigo" className="skill-category-card">
            <div className="category-title-row">
              <Server size={20} color="var(--color-accent)" />
              <span>{t('skills.primary')}</span>
            </div>
            <div className="skills-grid">
              {primarySkills.map((skill, idx) => (
                <div key={idx} className="skill-item-badge">
                  <span style={{ color: skill.color || 'var(--color-text-primary)' }}>●</span>
                  <span>{skill.name}</span>
                  {skill.badge && <span className="skill-badge-tag">{skill.badge}</span>}
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Secondary Stack */}
          <GlassCard glowColor="teal" className="skill-category-card">
            <div className="category-title-row">
              <Layers size={20} color="var(--color-accent-2)" />
              <span>{t('skills.secondary')}</span>
            </div>
            <div className="skills-grid">
              {secondarySkills.map((skill, idx) => (
                <div key={idx} className="skill-item-badge">
                  <span style={{ color: skill.color || 'var(--color-text-primary)' }}>●</span>
                  <span>{skill.name}</span>
                  {skill.badge && <span className="skill-badge-tag">{skill.badge}</span>}
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Enterprise & AI */}
          <GlassCard glowColor="indigo" className="skill-category-card">
            <div className="category-title-row">
              <Cpu size={20} color="var(--color-accent)" />
              <span>{t('skills.enterprise')}</span>
            </div>
            <div className="skills-grid">
              {enterpriseSkills.map((skill, idx) => (
                <div key={idx} className="skill-item-badge">
                  <span style={{ color: skill.color || 'var(--color-text-primary)' }}>●</span>
                  <span>{skill.name}</span>
                  {skill.badge && <span className="skill-badge-tag">{skill.badge}</span>}
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
