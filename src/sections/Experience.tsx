import { ArrowUpRight, Building2, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useLanguage } from '../i18n/LanguageContext';

export function Experience() {
  const { t } = useLanguage();

  return (
    <section className="section shell" id="experience">
      <Reveal>
        <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} />
      </Reveal>
      <Reveal className="experience-card">
        <div className="experience-card__meta">
          <span><Building2 aria-hidden="true" />{t.experience.company}</span>
          <span><CalendarDays aria-hidden="true" />{t.experience.period}</span>
        </div>
        <div className="experience-card__content">
          <div><p className="eyebrow">{t.experience.company}</p><h3>{t.experience.role}</h3><p>{t.experience.summary}</p></div>
          <ul className="evidence-list evidence-list--large">
            {t.experience.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </div>
        <Link className="text-link text-link--strong" to="/work/eprocure">
          {t.experience.caseStudyLink}<ArrowUpRight aria-hidden="true" />
        </Link>
      </Reveal>
    </section>
  );
}
