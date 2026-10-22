import { SectionHeading } from '../components/ui/SectionHeading';
import { useLanguage } from '../i18n/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section className="section shell" id="about" aria-labelledby="about-title">
      <div className="split">
        <SectionHeading id="about-title" title={t.about.title} />
        <div className="about">
          {t.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <dl className="facts">
            {t.about.cards.map((card) => (
              <div key={card.label}>
                <dt>{card.label}</dt>
                <dd>{card.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
