import { Clapperboard, Gamepad2, MapPin, Trophy } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useLanguage } from '../i18n/LanguageContext';

const aboutIcons = [Trophy, Gamepad2, Clapperboard, MapPin];

export function About() {
  const { t } = useLanguage();

  return (
    <section className="section shell" id="about">
      <div className="about-grid">
        <Reveal>
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
          <div className="about-copy">{t.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </Reveal>
        <div className="about-cards">
          {t.about.cards.map((card, index) => {
            const Icon = aboutIcons[index];
            return (
              <Reveal className="about-card" delay={index * 0.05} key={card.label}>
                {Icon && <Icon aria-hidden="true" />}<span>{card.label}</span><strong>{card.value}</strong>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
