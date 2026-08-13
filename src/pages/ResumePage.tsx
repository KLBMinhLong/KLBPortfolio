import { ArrowLeft, Download, ExternalLink, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useLanguage } from '../i18n/LanguageContext';

const resumePath = '/assets/documents/Nguyen-Minh-Long-Resume.pdf';

export function ResumePage() {
  const { t } = useLanguage();
  useDocumentMeta({ title: `${t.common.resumeTitle} — Nguyễn Minh Long`, description: t.common.resumeIntro, path: '/resume' });

  return (
    <section className="standalone-page resume-page shell page-enter">
      <Link className="back-link" to="/"><ArrowLeft aria-hidden="true" />{t.common.backHome}</Link>
      <div className="resume-panel">
        <div className="resume-panel__icon"><FileText aria-hidden="true" /></div>
        <p className="eyebrow">{t.common.currentResumeVersion}</p>
        <h1>{t.common.resumeTitle}</h1>
        <p className="standalone-page__intro">{t.common.resumeIntro}</p>
        <p className="resume-note">{t.common.temporaryResume}</p>
        <div className="hero__actions">
          <a className="button button--primary" href={resumePath} target="_blank" rel="noreferrer">
            {t.common.openResume}<ExternalLink aria-hidden="true" />
          </a>
          <a className="button button--secondary" href={resumePath} download>
            {t.common.downloadResume}<Download aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
