import React from 'react';
import { useTranslation } from '../i18n/useTranslation';
import { SectionTitle } from '../components/ui/SectionTitle';
import { GlassCard } from '../components/ui/GlassCard';
import { Badge } from '../components/ui/Badge';
import { certificatesData } from '../data/certificates';
import { Award, ShieldCheck } from 'lucide-react';
import './Certificates.css';

export const Certificates: React.FC = () => {
  const { t } = useTranslation();

  const awards = certificatesData.filter(c => c.category === 'award');
  const certs = certificatesData.filter(c => c.category === 'cert');

  return (
    <section id="certificates" className="section">
      <div className="container">
        <SectionTitle
          tag={t('certificates.tag')}
          title={t('certificates.title')}
          subtitle={t('certificates.subtitle')}
        />

        <div className="certs-section-grid">
          {/* Awards & Language Column */}
          <div className="certs-column">
            <div className="certs-col-header">
              <Award size={22} color="var(--color-accent-2)" />
              <span>{t('certificates.awards_title')}</span>
            </div>

            {awards.map((item) => (
              <GlassCard key={item.id} glowColor="teal" className="cert-card">
                <div className="cert-info">
                  <h4 className="cert-title">{item.title}</h4>
                  <p className="cert-issuer">{item.issuer}</p>
                  <span className="cert-date">{item.date}</span>
                </div>
                <Badge variant="glass" size="sm" color="var(--color-accent-2)">
                  {item.badge}
                </Badge>
              </GlassCard>
            ))}
          </div>

          {/* Global Certifications Column */}
          <div className="certs-column">
            <div className="certs-col-header">
              <ShieldCheck size={22} color="var(--color-accent)" />
              <span>{t('certificates.certs_title')}</span>
            </div>

            {certs.map((item) => (
              <GlassCard key={item.id} glowColor="indigo" className="cert-card">
                <div className="cert-info">
                  <h4 className="cert-title">{item.title}</h4>
                  <p className="cert-issuer">{item.issuer}</p>
                  <span className="cert-date">{item.date}</span>
                </div>
                <Badge variant="glass" size="sm" color="var(--color-accent)">
                  {item.badge}
                </Badge>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
