import { Boxes, Braces, DatabaseZap, Workflow as WorkflowIcon } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useLanguage } from '../i18n/LanguageContext';

const icons = [DatabaseZap, Braces, Boxes, WorkflowIcon];

export function Capabilities() {
  const { t } = useLanguage();

  return (
    <section className="section section--capabilities" id="capabilities">
      <div className="shell">
        <Reveal><SectionHeading eyebrow={t.capabilities.eyebrow} title={t.capabilities.title} intro={t.capabilities.intro} /></Reveal>
        <div className="capability-grid">
          {t.capabilities.groups.map((group, index) => {
            const Icon = icons[index];
            return (
              <Reveal className="capability-card" delay={index * 0.05} key={group.title}>
                <div className="capability-card__icon">{Icon && <Icon aria-hidden="true" />}</div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
