import { siteConfig } from '@/data/siteConfig';
import { experience } from '@/data/approach';
import { SectionHeader } from '@/components/SectionHeader';
import { MediaBlock } from '@/components/MediaBlock';
import { Reveal } from '@/components/Reveal';
import { CTA } from '@/components/CTA';
import '../pages/shared-page.css';
import './About.css';

export function About() {
  return (
    <div className="container">
      <div className="page-hero">
        <Reveal>
          <span className="text-label">About</span>
          <h1 className="text-display-lg page-hero__title" style={{ marginTop: 'var(--space-4)' }}>
            Direction, built on decisions.
          </h1>
        </Reveal>
      </div>

      <div className="section about-grid" style={{ paddingTop: 0 }}>
        <Reveal>
          <div className="about-body">
            <p className="text-body-lg">
              I'm {siteConfig.name}, a {siteConfig.role.toLowerCase()} who has spent the
              better part of the last decade moving between agency leadership and
              independent practice — never fully settling into either, because the work
              itself kept changing shape.
            </p>
            <p className="text-body-lg">
              What stayed consistent was a belief that creative direction is not about
              generating options. It is about narrowing them, quickly and with conviction,
              so a team can spend its energy on execution instead of deliberation.
            </p>
            <p className="text-body-lg">
              I work across brand systems, campaigns, content, and physical experience —
              treating each as an expression of the same underlying idea rather than
              separate disciplines requiring separate specialists.
            </p>
            <p className="text-body-lg">{siteConfig.availability}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="about-portrait">
            <MediaBlock media={{ src: '/placeholders/ph-portrait-01.svg', alt: `${siteConfig.name} portrait placeholder`, aspect: 'portrait' }} />
          </div>
        </Reveal>
      </div>

      <div className="section hairline">
        <SectionHeader eyebrow="Experience" title="Where the work has happened." />
        <div className="timeline">
          {experience.map((entry) => (
            <Reveal key={entry.title} as="div">
              <div className="timeline-entry">
                <span className="text-caption">{entry.period}</span>
                <div>
                  <h3 className="text-heading timeline-entry__title">{entry.title}</h3>
                  <p className="text-caption timeline-entry__org">{entry.organization}</p>
                  <p className="text-body">{entry.summary}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="section hairline" style={{ textAlign: 'center' }}>
        <Reveal>
          <CTA to="/contact" variant="primary">Start a conversation</CTA>
        </Reveal>
      </div>
    </div>
  );
}
