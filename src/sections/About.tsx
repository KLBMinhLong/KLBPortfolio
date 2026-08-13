import React from 'react';
import { useTranslation } from '../i18n/useTranslation';
import { SectionTitle } from '../components/ui/SectionTitle';
import { GlassCard } from '../components/ui/GlassCard';
import { profileData } from '../data/profile';
import { Heart, Youtube, MapPin, GraduationCap, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import './About.css';

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle
          tag={t('about.tag')}
          title={t('about.title')}
          subtitle={t('about.subtitle')}
        />

        <div className="about-grid">
          <div className="about-paragraphs">
            <p>{t('about.paragraph1')}</p>
            <p>{t('about.paragraph2')}</p>
            <p>{t('about.paragraph3')}</p>

            <div className="about-info-list">
              <div className="info-item">
                <span className="info-label"><MapPin size={12} style={{ display: 'inline', marginRight: 4 }} /> {t('about.info_location')}</span>
                <span className="info-value">{profileData.location}</span>
              </div>
              <div className="info-item">
                <span className="info-label"><GraduationCap size={12} style={{ display: 'inline', marginRight: 4 }} /> {t('about.info_university')}</span>
                <span className="info-value">HUTECH University</span>
              </div>
              <div className="info-item">
                <span className="info-label"><BookOpen size={12} style={{ display: 'inline', marginRight: 4 }} /> {t('about.info_major')}</span>
                <span className="info-value">Software Engineering</span>
              </div>
              <div className="info-item">
                <span className="info-label"><Award size={12} style={{ display: 'inline', marginRight: 4 }} /> {t('about.info_gpa')}</span>
                <span className="info-value">{profileData.gpa}</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <GlassCard glowColor="teal" className="hobbies-card">
              <div className="hobbies-header">
                <Heart size={22} color="var(--color-accent-2)" />
                <span>{t('about.hobbies_title')}</span>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>
                {t('about.hobbies')}
              </p>

              <a
                href="https://www.youtube.com/@KLB-MinhLong"
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-badge-link"
              >
                <Youtube size={18} />
                <span>YouTube: @KLB-MinhLong</span>
              </a>
            </GlassCard>

            <GlassCard glowColor="indigo" className="hobbies-card">
              <div className="hobbies-header">
                <CheckCircle2 size={22} color="var(--color-accent)" />
                <span>Career Objective</span>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>
                Seeking an <strong style={{ color: '#fff' }}>Intern / Fresher Software Developer</strong> role in Backend (Java / .NET) or Full-stack development. Focused on delivering high-performance APIs, robust architectures, and continuous professional growth.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
