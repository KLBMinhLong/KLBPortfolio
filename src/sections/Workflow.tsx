import { SectionHeading } from '../components/ui/SectionHeading';
import { useLanguage } from '../i18n/LanguageContext';

export function Workflow() {
  const { t } = useLanguage();

  return (
    <section className="section section--tinted" aria-labelledby="workflow-title">
      <div className="shell">
        <SectionHeading id="workflow-title" title={t.workflow.title} intro={t.workflow.intro} />
        {/* The steps are a real sequence, so they are numbered. */}
        <ol className="steps">
          {t.workflow.steps.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
        <p className="steps__note">
          <strong>{t.workflow.responsibilityTitle}</strong> {t.workflow.responsibility}
        </p>
      </div>
    </section>
  );
}
