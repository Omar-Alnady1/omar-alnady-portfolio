import { siteConfig } from '@/data/siteConfig';
import { getFeaturedProjects } from '@/data/projects';
import { expertiseAreas } from '@/data/expertise';
import { approachSteps } from '@/data/approach';
import { buildingItems } from '@/data/stillBuilding';
import { SectionHeader } from '@/components/SectionHeader';
import { ProjectGrid } from '@/components/ProjectGrid';
import { CTA } from '@/components/CTA';
import { Reveal } from '@/components/Reveal';
import './Home.css';

export function Home() {
  const featured = getFeaturedProjects();

  return (
    <>
      <section className="hero container">
        <Reveal>
          <span className="text-label hero__eyebrow">{siteConfig.role}</span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="text-display-xl hero__title">
            Direction for brands that need to <em>mean something.</em>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-body-lg hero__sub">{siteConfig.tagline}</p>
        </Reveal>
        <Reveal delay={220}>
          <div className="hero__meta">
            <CTA to="/work" variant="primary">See the work</CTA>
            <CTA to="/contact">Start a project</CTA>
          </div>
        </Reveal>

        <div className="hero__scroll-cue" aria-hidden="true">
          <span className="hero__scroll-line" />
          <span className="text-caption">Scroll</span>
        </div>
      </section>

      <section className="section container">
        <SectionHeader
          eyebrow="Selected Work"
          title="A sample of the range."
          aside="Placeholder projects, standing in for the range of categories and formats real work will occupy."
        />
        <ProjectGrid projects={featured} />
        <Reveal>
          <div style={{ marginTop: 'var(--space-8)', textAlign: 'center' }}>
            <CTA to="/work">View all work</CTA>
          </div>
        </Reveal>
      </section>

      <section className="section container hairline">
        <SectionHeader eyebrow="Expertise" title="Where the direction happens." />
        <div className="home-expertise-grid">
          {expertiseAreas.slice(0, 4).map((area, i) => (
            <Reveal key={area.title} delay={i * 60}>
              <div className="home-expertise-card">
                <h3 className="text-heading">{area.title}</h3>
                <p className="text-body">{area.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div style={{ marginTop: 'var(--space-7)' }}>
            <CTA to="/expertise">See full expertise</CTA>
          </div>
        </Reveal>
      </section>

      <section className="section container hairline">
        <SectionHeader eyebrow="Approach" title="A process built on restraint." />
        <div className="home-approach-list">
          {approachSteps.slice(0, 3).map((step, i) => (
            <Reveal key={step.index} delay={i * 60}>
              <div className="home-approach-row">
                <span className="text-display-md text-accent">{step.index}</span>
                <div>
                  <h3 className="text-heading">{step.title}</h3>
                  <p className="text-body">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div style={{ marginTop: 'var(--space-7)' }}>
            <CTA to="/approach">Read the full approach</CTA>
          </div>
        </Reveal>
      </section>

      <section className="section container hairline">
        <SectionHeader eyebrow="Still Building" title="What's in progress right now." />
        <div className="home-building-grid">
          {buildingItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="home-building-card">
                <span className="text-label">{item.status}</span>
                <h3 className="text-heading">{item.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div style={{ marginTop: 'var(--space-7)' }}>
            <CTA to="/still-building">See what's building</CTA>
          </div>
        </Reveal>
      </section>

      <section className="section container hairline">
        <div className="home-about-preview">
          <Reveal>
            <span className="text-label">About</span>
            <h2 className="text-display-md" style={{ marginTop: 'var(--space-4)' }}>
              {siteConfig.name} — {siteConfig.role.toLowerCase()}.
            </h2>
            <p className="text-body-lg" style={{ marginTop: 'var(--space-5)', maxWidth: '54ch' }}>
              A decade-plus spent moving between agency and independent practice, with a
              consistent belief that direction is measured in decisions made, not decks
              produced.
            </p>
            <div style={{ marginTop: 'var(--space-6)' }}>
              <CTA to="/about">Read the full story</CTA>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section container hairline">
        <Reveal>
          <div className="home-contact-cta">
            <h2 className="text-display-lg">
              Have a brand that needs <span className="text-accent">direction?</span>
            </h2>
            <div style={{ marginTop: 'var(--space-7)' }}>
              <CTA to="/contact" variant="primary">Get in touch</CTA>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
