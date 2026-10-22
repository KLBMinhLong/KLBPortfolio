import { Mail } from 'lucide-react';
import { SocialIcon } from '../components/ui/SocialIcon';
import { socialLinks } from '../data/socials';
import { useLanguage } from '../i18n/LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  const groups = [
    { label: t.contact.workLabel, links: socialLinks.filter((link) => link.kind === 'work') },
    { label: t.contact.contentLabel, links: socialLinks.filter((link) => link.kind === 'content') },
  ];

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
          {groups.map((group) => (
            <div className="contact__group" key={group.label}>
              <span>{group.label}</span>
              <ul>
                {group.links.map((link) => (
                  <li key={link.id}>
                    <a href={link.href} target="_blank" rel="noreferrer">
                      <SocialIcon id={link.id} />{link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
