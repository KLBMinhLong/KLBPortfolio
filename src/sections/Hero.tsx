import type { CSSProperties } from 'react';
import { ArrowDown, ArrowUpRight, BadgeCheck, Code2, MapPin, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero__intro">
        <h1 id="hero-title" className="hero__name">
          <span>Nguyễn</span> <span>Minh Long</span>
        </h1>
        <p className="hero__role">{t.hero.role}</p>
        <p className="hero__lead">{t.hero.intro}</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#experience">
            {t.hero.primaryCta}
            <ArrowDown aria-hidden="true" />
          </a>
          <Link className="button button--secondary" to="/resume">
            {t.hero.secondaryCta}
          </Link>
        </div>
        <ul className="hero__meta">
          <li><MapPin aria-hidden="true" />{t.hero.location}</li>
          <li>
            <a href="https://github.com/KLBMinhLong" target="_blank" rel="noreferrer">
              <Code2 aria-hidden="true" />GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/minh-long-nguyễn-09984a333" target="_blank" rel="noreferrer">
              <Network aria-hidden="true" />LinkedIn
            </a>
          </li>
        </ul>
      </div>

      <figure className="hero__portrait">
        <img src="/assets/profile/nguyen-minh-long.jpg" alt={t.hero.portraitAlt} width="683" height="911" />
      </figure>

      <section className="ledger" aria-labelledby="ledger-title">
        <h2 id="ledger-title" className="ledger__title">{t.hero.ledgerTitle}</h2>
        <ol className="ledger__list">
          {t.hero.ledger.map((entry, index) => (
            <li className="ledger__row" key={entry.claim} style={{ '--row': index } as CSSProperties}>
              <BadgeCheck className="ledger__mark" aria-hidden="true" />
              <p className="ledger__claim">{entry.claim}</p>
              {entry.href ? (
                <a className="ledger__source" href={entry.href} target="_blank" rel="noreferrer">
                  {entry.source}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              ) : (
                <span className="ledger__source ledger__source--plain">{entry.source}</span>
              )}
            </li>
          ))}
        </ol>
      </section>
    </section>
  );
}
