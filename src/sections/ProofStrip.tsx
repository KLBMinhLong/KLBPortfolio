import { useLanguage } from '../i18n/LanguageContext';

export function ProofStrip() {
  const { t } = useLanguage();

  return (
    <section className="proof-strip" aria-label={t.common.profileHighlights}>
      <div className="shell proof-strip__inner">
        {t.proof.map((fact) => (
          <div className="proof-item" key={fact.label}>
            <span>{fact.label}</span>
            <strong>{fact.value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
