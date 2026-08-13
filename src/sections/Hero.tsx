import { ArrowDownRight, ArrowUpRight, Bot, Braces, Code2, MapPin, Monitor, Network, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { Reveal } from '../components/ui/Reveal';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero__grid-pattern" aria-hidden="true" />
      <Reveal className="hero__content">
        <p className="eyebrow hero__eyebrow">
          <span className="status-dot" aria-hidden="true" />
          {t.hero.eyebrow}
        </p>
        <p className="hero__role">{t.hero.role}</p>
        <h1 id="hero-title">{t.hero.headline}</h1>
        <p className="hero__intro">{t.hero.intro}</p>
        <p className="availability-line">{t.hero.availability}</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#work">
            {t.hero.primaryCta}
            <ArrowDownRight aria-hidden="true" />
          </a>
          <Link className="button button--secondary" to="/resume">
            {t.hero.secondaryCta}
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <div className="hero__meta">
          <span><MapPin size={16} aria-hidden="true" />{t.hero.location}</span>
          <span>{t.hero.graduation}</span>
          <span className="hero__socials">
            <a href="https://github.com/KLBMinhLong" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Code2 aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/minh-long-nguyễn-09984a333"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Network aria-hidden="true" />
            </a>
          </span>
        </div>
      </Reveal>

      <Reveal className="hero__system-map" delay={0.12}>
        <div className="engineering-map">
          <div className="engineering-map__header">
            <span>{t.hero.systemMap.eyebrow}</span>
            <i aria-hidden="true" />
            <span>SYS.01</span>
          </div>
          <div className="engineering-map__canvas">
            <div className="engineering-map__core">
              <span>KLB.dev</span>
              <strong>{t.hero.systemMap.title}</strong>
            </div>
            <div className="engineering-node engineering-node--backend"><Braces aria-hidden="true" /><span>01</span><strong>{t.hero.systemMap.nodes[0]}</strong></div>
            <div className="engineering-node engineering-node--frontend"><Monitor aria-hidden="true" /><span>02</span><strong>{t.hero.systemMap.nodes[1]}</strong></div>
            <div className="engineering-node engineering-node--ai"><Bot aria-hidden="true" /><span>03</span><strong>{t.hero.systemMap.nodes[2]}</strong></div>
            <div className="engineering-node engineering-node--test"><ShieldCheck aria-hidden="true" /><span>04</span><strong>{t.hero.systemMap.nodes[3]}</strong></div>
          </div>
          <div className="engineering-map__footer"><span className="status-dot" aria-hidden="true" />{t.hero.systemMap.footer}</div>
        </div>
        <div className="system-trace" aria-hidden="true">
          <span>Problem</span><i /><span>Build</span><i /><span>Verify</span><i /><span>Ship</span>
        </div>
      </Reveal>
    </section>
  );
}
