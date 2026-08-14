import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useLanguage } from '../i18n/LanguageContext';

export function NotFoundPage() {
  const { t } = useLanguage();
  useDocumentMeta({ title: `404 — KLB.dev`, description: t.common.notFoundIntro, path: '/404' });

  return (
    <section className="standalone-page standalone-page--404 shell page-enter">
      <p className="error-code">404 / ROUTE_NOT_FOUND</p>
      <h1>{t.common.notFoundTitle}</h1>
      <p className="standalone-page__intro">{t.common.notFoundIntro}</p>
      <Link className="button button--primary" to="/"><ArrowLeft aria-hidden="true" />{t.common.backHome}</Link>
    </section>
  );
}
