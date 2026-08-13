import { CheckCircle2 } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useLanguage } from '../i18n/LanguageContext';

export function Workflow() {
  const { t } = useLanguage();

  return (
    <section className="section section--workflow" aria-labelledby="workflow-title">
      <div className="shell">
        <Reveal>
          <div id="workflow-title">
            <SectionHeading eyebrow={t.workflow.eyebrow} title={t.workflow.title} intro={t.workflow.intro} />
          </div>
        </Reveal>
        <ol className="workflow-trace">
          {t.workflow.steps.map((step, index) => (
            <li key={step.title}>
              <span className="workflow-trace__number">0{index + 1}</span>
              <div><h3>{step.title}</h3><p>{step.description}</p></div>
            </li>
          ))}
        </ol>
        <Reveal className="responsibility-note">
          <CheckCircle2 aria-hidden="true" />
          <div><h3>{t.workflow.responsibilityTitle}</h3><p>{t.workflow.responsibility}</p></div>
        </Reveal>
      </div>
    </section>
  );
}
