import { ArrowUpRight, Code2, Mail, Network, Video } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { useLanguage } from '../i18n/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section className="section contact-section" id="contact">
      <div className="shell">
        <Reveal className="contact-panel">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.intro}</p>
          <a className="button button--primary" href="mailto:nguyenminhlongcntt@gmail.com">
            <Mail aria-hidden="true" />{t.contact.emailCta}<ArrowUpRight aria-hidden="true" />
          </a>
          <div className="contact-socials">
            <span>{t.contact.socialLabel}</span>
            <a href="https://github.com/KLBMinhLong" target="_blank" rel="noreferrer"><Code2 aria-hidden="true" />GitHub</a>
            <a href="https://www.linkedin.com/in/minh-long-nguyễn-09984a333" target="_blank" rel="noreferrer"><Network aria-hidden="true" />LinkedIn</a>
            <a href="https://www.youtube.com/@KLB-MinhLong" target="_blank" rel="noreferrer"><Video aria-hidden="true" />YouTube</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
