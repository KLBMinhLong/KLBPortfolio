import { Code2, Mail, Network, Video } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="shell contact__inner">
        <h2 id="contact-title">{t.contact.title}</h2>
        <p>{t.contact.intro}</p>
        <a className="button button--on-ink" href="mailto:nguyenminhlongcntt@gmail.com">
          <Mail aria-hidden="true" />{t.contact.emailCta}
        </a>
        <p className="contact__address">nguyenminhlongcntt@gmail.com</p>
        <div className="contact__socials">
          <span>{t.contact.socialLabel}</span>
          <a href="https://github.com/KLBMinhLong" target="_blank" rel="noreferrer"><Code2 aria-hidden="true" />GitHub</a>
          <a href="https://www.linkedin.com/in/minh-long-nguyễn-09984a333" target="_blank" rel="noreferrer"><Network aria-hidden="true" />LinkedIn</a>
          <a href="https://www.youtube.com/@KLB-MinhLong" target="_blank" rel="noreferrer"><Video aria-hidden="true" />YouTube</a>
        </div>
      </div>
    </section>
  );
}
