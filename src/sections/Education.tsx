import { SectionHeading } from '../components/ui/SectionHeading';
import { useLanguage } from '../i18n/LanguageContext';

export function Education() {
  const { t } = useLanguage();

  return (
    <section className="section shell" aria-labelledby="education-title">
      <div className="split">
        <SectionHeading id="education-title" title={t.education.title} />
        <div className="education">
          <h3>{t.education.school}</h3>
          <p className="education__degree">{t.education.degree}, {t.education.period}</p>
          <dl className="facts">
            {t.education.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
