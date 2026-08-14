import { Award, BookOpen, Languages } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useLanguage } from '../i18n/LanguageContext';

const factIcons = [BookOpen, Award, Languages];

export function Education() {
  const { t } = useLanguage();

  return (
    <section className="section section--education">
      <div className="shell education-grid">
        <Reveal><SectionHeading eyebrow={t.education.eyebrow} title={t.education.title} /></Reveal>
        <Reveal className="education-card">
          <div className="education-card__school"><p className="eyebrow">{t.education.period}</p><h3>{t.education.school}</h3><p>{t.education.degree}</p></div>
          <div className="education-facts">
            {t.education.facts.map((fact, index) => {
              const Icon = factIcons[index];
              return <div key={fact.label}>{Icon && <Icon aria-hidden="true" />}<span>{fact.label}</span><strong>{fact.value}</strong></div>;
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
