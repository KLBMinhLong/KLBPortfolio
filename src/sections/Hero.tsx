import React from 'react';
import { useTranslation } from '../i18n/useTranslation';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Briefcase, GraduationCap, Code2, Award } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-ambient-mesh animate-pulse-glow"></div>
      <div className="hero-ambient-mesh-2"></div>

      <div className="container">
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero-badge">
              <span className="hero-pulse-dot"></span>
              <span>{t('hero.badge')}</span>
            </div>

            <p className="hero-greeting">{t('hero.greeting')}</p>
            <h1 className="hero-name">
              NGUYỄN MINH LONG
            </h1>
            <div className="hero-role">&lt; {t('hero.role')} /&gt;</div>

            <p className="hero-tagline">{t('hero.tagline')}</p>

            <div className="hero-cta-group">
              <button onClick={scrollToProjects} className="btn-primary">
                <span>{t('hero.cta_projects')}</span>
                <ArrowRight size={18} />
              </button>

              <a href="/CV_Nguyen_Minh_Long.pdf" download="CV_Nguyen_Minh_Long.pdf" className="btn-secondary">
                <Download size={18} />
                <span>{t('hero.download_cv')}</span>
              </a>
            </div>

            <div className="hero-stats-bar">
              <div className="stat-item">
                <Briefcase size={18} color="var(--color-accent-2)" style={{ marginBottom: 4 }} />
                <span className="stat-value">3+ Months</span>
                <span className="stat-label">FPT IS Internship</span>
              </div>
              <div className="stat-item">
                <GraduationCap size={18} color="var(--color-accent)" style={{ marginBottom: 4 }} />
                <span className="stat-value">3.53 / 4.0</span>
                <span className="stat-label">HUTECH GPA</span>
              </div>
              <div className="stat-item">
                <Code2 size={18} color="var(--color-accent-2)" style={{ marginBottom: 4 }} />
                <span className="stat-value">4 Core</span>
                <span className="stat-label">Featured Projects</span>
              </div>
              <div className="stat-item">
                <Award size={18} color="var(--color-accent)" style={{ marginBottom: 4 }} />
                <span className="stat-value">B2 Level</span>
                <span className="stat-label">English Standard</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-avatar-wrapper"
          >
            <div className="avatar-glass-card animate-float">
              <img
                src="/avatar.png"
                alt="Nguyễn Minh Long Avatar"
                className="avatar-img"
              />
              <div className="avatar-tech-floating">
                <Terminal size={18} color="var(--color-accent-2)" />
                <span className="mono-font" style={{ fontSize: '0.8rem', fontWeight: 600 }}>Spring Boot + React</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
