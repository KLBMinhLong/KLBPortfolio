import { useState } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  Check,
  Code2,
  Copy,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/ui/Reveal';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useLanguage } from '../i18n/LanguageContext';

const resumePath = '/assets/documents/Nguyen-Minh-Long-Resume.pdf';
const emailAddress = 'nguyenminhlongcntt@gmail.com';

export function ResumePage() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'pdf' | 'interactive'>('pdf');
  const [copied, setCopied] = useState(false);

  const resume = t.resume;

  useDocumentMeta({
    title: `${resume.headline} — Nguyễn Minh Long`,
    description: resume.intro,
    path: '/resume',
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <div className="resume-page-wrapper shell page-enter">
      <div className="resume-page__topbar">
        <Link className="back-link" to="/">
          <ArrowLeft aria-hidden="true" />
          {t.common.backHome}
        </Link>
      </div>

      <header className="resume-header">
        <div className="resume-header__badges">
          <span className="badge badge--accent">
            <span className="status-dot" aria-hidden="true" />
            {resume.badge}
          </span>
          <span className="badge badge--subtle">
            <FileText size={14} aria-hidden="true" />
            {resume.fileSize}
          </span>
        </div>

        <h1 className="resume-header__title">{resume.headline}</h1>
        <p className="resume-header__intro">{resume.intro}</p>

        <div className="resume-header__actions">
          <a
            className="button button--primary"
            href={resumePath}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink aria-hidden="true" />
            {resume.actions.openPdf}
          </a>
          <a
            className="button button--secondary"
            href={resumePath}
            download="Nguyen-Minh-Long-Resume.pdf"
          >
            <Download aria-hidden="true" />
            {resume.actions.downloadPdf}
          </a>
          <button
            type="button"
            className="button button--ghost"
            onClick={handleCopyEmail}
            title={resume.actions.copyEmail}
          >
            {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
            {copied ? resume.actions.copiedEmail : emailAddress}
          </button>
        </div>
      </header>

      {/* Recruiter Quick Facts */}
      <section className="resume-quickfacts" aria-label="Quick Highlights">
        {resume.quickFacts.map((fact) => (
          <div key={fact.label} className="resume-quickfact">
            <span className="resume-quickfact__label">{fact.label}</span>
            <strong className="resume-quickfact__value">{fact.value}</strong>
          </div>
        ))}
      </section>

      {/* Tab Switcher */}
      <div className="resume-tabs-nav" role="tablist" aria-label="Resume View Mode">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'pdf'}
          className={`resume-tab-btn ${activeTab === 'pdf' ? 'resume-tab-btn--active' : ''}`}
          onClick={() => setActiveTab('pdf')}
        >
          <FileText size={16} aria-hidden="true" />
          {resume.tabs.pdf}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'interactive'}
          className={`resume-tab-btn ${activeTab === 'interactive' ? 'resume-tab-btn--active' : ''}`}
          onClick={() => setActiveTab('interactive')}
        >
          <Sparkles size={16} aria-hidden="true" />
          {resume.tabs.interactive}
        </button>
      </div>

      {/* TAB 1: PDF VIEWER */}
      {activeTab === 'pdf' && (
        <section className="resume-pdf-container" aria-label={resume.tabs.pdf}>
          <div className="resume-pdf-toolbar">
            <div className="resume-pdf-toolbar__info">
              <span className="resume-pdf-toolbar__name">{resume.fileLabel}</span>
              <span className="resume-pdf-toolbar__meta">{resume.fileSize} · {resume.updatedDate}</span>
            </div>
            <div className="resume-pdf-toolbar__controls">
              <a
                className="resume-toolbar-action"
                href={resumePath}
                target="_blank"
                rel="noreferrer"
                title={resume.actions.openPdf}
              >
                <ExternalLink size={16} aria-hidden="true" />
                <span>{resume.actions.openPdf}</span>
              </a>
              <a
                className="resume-toolbar-action"
                href={resumePath}
                download="Nguyen-Minh-Long-Resume.pdf"
                title={resume.actions.downloadPdf}
              >
                <Download size={16} aria-hidden="true" />
                <span>{resume.actions.downloadPdf}</span>
              </a>
            </div>
          </div>

          <div className="resume-pdf-viewer">
            <object
              data={`${resumePath}#toolbar=0&navpanes=0`}
              type="application/pdf"
              className="resume-pdf-object"
            >
              <iframe
                src={`${resumePath}#toolbar=0&navpanes=0`}
                title="Nguyễn Minh Long Résumé PDF"
                className="resume-pdf-iframe"
              />
              <div className="resume-pdf-fallback">
                <FileText size={48} aria-hidden="true" />
                <h3>{language === 'vi' ? 'Xem trước tài liệu PDF' : 'PDF Document Preview'}</h3>
                <p>
                  {language === 'vi'
                    ? 'Trình duyệt của bạn không hỗ trợ nhúng trực tiếp PDF. Bạn có thể mở hoặc tải file bên dưới:'
                    : 'Your browser may not support inline PDF previews. You can view or download the document below:'}
                </p>
                <div className="hero__actions">
                  <a className="button button--primary" href={resumePath} target="_blank" rel="noreferrer">
                    <ExternalLink aria-hidden="true" />
                    {resume.actions.openPdf}
                  </a>
                  <a className="button button--secondary" href={resumePath} download>
                    <Download aria-hidden="true" />
                    {resume.actions.downloadPdf}
                  </a>
                </div>
              </div>
            </object>
          </div>
        </section>
      )}

      {/* TAB 2: INTERACTIVE BREAKDOWN */}
      {activeTab === 'interactive' && (
        <div className="resume-interactive-view">
          {/* Executive Summary */}
          <Reveal className="resume-card resume-card--highlight">
            <div className="resume-card__header">
              <div className="resume-card__icon">
                <BookOpen size={20} aria-hidden="true" />
              </div>
              <div>
                <p className="eyebrow">{resume.targetRole}</p>
                <h2>{resume.summaryTitle}</h2>
              </div>
            </div>
            <p className="resume-summary__text">{resume.summaryText}</p>
            <div className="resume-contact-bar">
              <span className="resume-contact-item">
                <MapPin size={15} aria-hidden="true" />
                Ho Chi Minh City, Vietnam
              </span>
              <a className="resume-contact-item" href="mailto:nguyenminhlongcntt@gmail.com">
                <Mail size={15} aria-hidden="true" />
                nguyenminhlongcntt@gmail.com
              </a>
              <a
                className="resume-contact-item"
                href="https://github.com/KLBMinhLong"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={15} aria-hidden="true" />
                GitHub
              </a>
              <a
                className="resume-contact-item"
                href="https://www.linkedin.com/in/minh-long-nguy%E1%BB%85n-09984a333"
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={15} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </Reveal>

          {/* Work Experience */}
          <Reveal className="resume-section-block">
            <div className="resume-section-title">
              <Briefcase size={22} aria-hidden="true" />
              <h2>{resume.experienceTitle}</h2>
            </div>
            <div className="resume-experience-list">
              {resume.experienceItems.map((item) => (
                <div key={item.company} className="resume-card">
                  <div className="resume-card__top">
                    <div>
                      <span className="eyebrow">
                        <Building2 size={13} aria-hidden="true" /> {item.company}
                      </span>
                      <h3>{item.role}</h3>
                    </div>
                    <div className="resume-item-meta">
                      <span><Calendar size={13} aria-hidden="true" /> {item.period}</span>
                      <span><MapPin size={13} aria-hidden="true" /> {item.location}</span>
                    </div>
                  </div>
                  <ul className="evidence-list">
                    {item.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                  {item.caseStudySlug && (
                    <div className="resume-card__footer">
                      <Link className="text-link text-link--strong" to={`/work/${item.caseStudySlug}`}>
                        {item.caseStudyLabel}
                        <ArrowUpRight aria-hidden="true" />
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Selected Projects */}
          <Reveal className="resume-section-block">
            <div className="resume-section-title">
              <Layers size={22} aria-hidden="true" />
              <h2>{resume.projectsTitle}</h2>
            </div>
            <div className="resume-projects-grid">
              {resume.projectItems.map((project) => (
                <div key={project.title} className="resume-card resume-project-card">
                  <div className="resume-card__top">
                    <div>
                      <span className="eyebrow">{project.period}</span>
                      <h3>{project.title}</h3>
                      <p className="resume-project__role">{project.role}</p>
                    </div>
                  </div>

                  <div className="resume-tech-pills">
                    {project.tech.map((tItem) => (
                      <span key={tItem} className="tech-pill">{tItem}</span>
                    ))}
                  </div>

                  <ul className="evidence-list">
                    {project.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>

                  <div className="resume-card__footer">
                    {project.slug && (
                      <Link className="text-link text-link--strong" to={`/work/${project.slug}`}>
                        {language === 'vi' ? 'Xem case study' : 'View case study'}
                        <ArrowUpRight aria-hidden="true" />
                      </Link>
                    )}
                    {project.githubUrl && (
                      <a
                        className="text-link"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub <ExternalLink size={14} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Technical Skills Matrix */}
          <Reveal className="resume-section-block">
            <div className="resume-section-title">
              <Code2 size={22} aria-hidden="true" />
              <h2>{resume.skillsTitle}</h2>
            </div>
            <div className="resume-skills-matrix">
              {resume.skillGroups.map((group) => (
                <div key={group.category} className="resume-card resume-skill-group">
                  <h3>{group.category}</h3>
                  <div className="resume-skill-tags">
                    {group.skills.map((skill) => (
                      <span key={skill} className="tech-pill tech-pill--accent">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Education & Certifications Dual Grid */}
          <div className="resume-dual-grid">
            {/* Education */}
            <Reveal className="resume-section-block">
              <div className="resume-section-title">
                <GraduationCap size={22} aria-hidden="true" />
                <h2>{resume.educationTitle}</h2>
              </div>
              {resume.educationItems.map((edu) => (
                <div key={edu.school} className="resume-card">
                  <span className="eyebrow">{edu.period}</span>
                  <h3>{edu.degree}</h3>
                  <p className="resume-edu-school">{edu.school}</p>
                  <ul className="evidence-list">
                    {edu.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Reveal>

            {/* Certifications */}
            <Reveal className="resume-section-block">
              <div className="resume-section-title">
                <Award size={22} aria-hidden="true" />
                <h2>{resume.certificationsTitle}</h2>
              </div>
              <div className="resume-cert-list">
                {resume.certificationItems.map((cert) => (
                  <div key={cert.title} className="resume-card resume-cert-card">
                    <span className="eyebrow">{cert.issuer}</span>
                    <h3>{cert.title}</h3>
                    {cert.detail && <p className="resume-cert-detail">{cert.detail}</p>}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Footer CTA */}
          <Reveal className="resume-cta-card">
            <p className="eyebrow">{resume.actions.contactMe}</p>
            <h3>{language === 'vi' ? 'Sẵn sàng cùng thảo luận cơ hội hợp tác' : 'Ready to discuss software engineering roles?'}</h3>
            <p>
              {language === 'vi'
                ? 'Mình mong muốn đóng góp cho các dự án thực tế với tinh thần học hỏi nhanh, cẩn trọng và trách nhiệm.'
                : 'I am excited to bring full-stack capabilities, backend discipline, and AI-accelerated workflows to engineering teams.'}
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href={`mailto:${emailAddress}`}>
                <Mail aria-hidden="true" />
                {emailAddress}
              </a>
              <a className="button button--secondary" href={resumePath} download>
                <Download aria-hidden="true" />
                {resume.actions.downloadPdf}
              </a>
            </div>
          </Reveal>
        </div>
      )}
    </div>
  );
}
