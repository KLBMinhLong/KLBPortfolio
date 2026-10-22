import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useLanguage } from '../i18n/LanguageContext';

export function Experience() {
  const { t } = useLanguage();

  return (
    <section className="section shell" id="experience" aria-labelledby="experience-title">
      <SectionHeading id="experience-title" title={t.experience.title} />
      <ol className="timeline">
        {t.experience.items.map((item) => (
          <li className="timeline__item" key={item.company}>
            <div className="timeline__when">
              <p className="timeline__period">{item.period}</p>
              <p className="timeline__company">{item.company}</p>
            </div>
            <div className="timeline__body">
              <h3>{item.role}</h3>
              <p className="timeline__summary">{item.summary}</p>
              <ul className="evidence-list">
                {item.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              {item.link && (
                <Link className="text-link" to={item.link.to}>
                  {item.link.label}<ArrowUpRight aria-hidden="true" />
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
