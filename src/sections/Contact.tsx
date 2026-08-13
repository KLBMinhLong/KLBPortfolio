import React, { useState } from 'react';
import { useTranslation } from '../i18n/useTranslation';
import { SectionTitle } from '../components/ui/SectionTitle';
import { GlassCard } from '../components/ui/GlassCard';
import { profileData } from '../data/profile';
import { Phone, Mail, MapPin, Send, CheckCircle2, Download } from 'lucide-react';
import './Contact.css';

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    // Simulate successful submission
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle
          tag={t('contact.tag')}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <div className="contact-grid">
          {/* Contact Details Column */}
          <div className="contact-info-column">
            <GlassCard glowColor="teal" className="contact-card">
              <div className="contact-card-icon">
                <Phone size={20} />
              </div>
              <div className="contact-card-details">
                <span className="contact-card-label">{t('contact.phone')}</span>
                <a href={`tel:${profileData.phone}`} className="contact-card-value">
                  {profileData.phone}
                </a>
              </div>
            </GlassCard>

            <GlassCard glowColor="indigo" className="contact-card">
              <div className="contact-card-icon">
                <Mail size={20} />
              </div>
              <div className="contact-card-details">
                <span className="contact-card-label">{t('contact.email')}</span>
                <a href={`mailto:${profileData.email}`} className="contact-card-value">
                  {profileData.email}
                </a>
              </div>
            </GlassCard>

            <GlassCard glowColor="teal" className="contact-card">
              <div className="contact-card-icon">
                <MapPin size={20} />
              </div>
              <div className="contact-card-details">
                <span className="contact-card-label">{t('contact.location')}</span>
                <span className="contact-card-value">{profileData.location}</span>
              </div>
            </GlassCard>

            <a
              href="/CV_Nguyen_Minh_Long.pdf"
              download="CV_Nguyen_Minh_Long.pdf"
              className="btn-primary"
              style={{ justifyContent: 'center', marginTop: 'var(--space-2)' }}
            >
              <Download size={18} />
              <span>{t('hero.download_cv')}</span>
            </a>
          </div>

          {/* Contact Form Column */}
          <GlassCard glowColor="indigo" className="contact-form-card">
            {submitted ? (
              <div className="form-success-banner">
                <CheckCircle2 size={24} />
                <span>{t('contact.form_success')}</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label className="form-label">{t('contact.form_name')}</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Recruiter Name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{t('contact.form_email')}</label>
                  <input
                    type="email"
                    required
                    placeholder="hr@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{t('contact.form_message')}</label>
                  <textarea
                    required
                    placeholder="Hello Minh Long, we would like to discuss an opportunity..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>{t('contact.form_send')}</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
