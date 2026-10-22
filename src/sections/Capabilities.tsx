import { SectionHeading } from '../components/ui/SectionHeading';
import { useLanguage } from '../i18n/LanguageContext';

export function Capabilities() {
  const { t } = useLanguage();

  return (
    <section className="section shell" id="capabilities" aria-labelledby="capabilities-title">
      <SectionHeading id="capabilities-title" title={t.capabilities.title} intro={t.capabilities.intro} />
      <dl className="skills">
        {t.capabilities.groups.map((group) => (
          <div className="skills__group" key={group.title}>
            <dt>
              <strong>{group.title}</strong>
              <span>{group.description}</span>
            </dt>
            <dd>{group.skills.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
