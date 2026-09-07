import { expertiseAreas } from '@/data/expertise';
import { Reveal } from '@/components/Reveal';
import { CTA } from '@/components/CTA';
import './shared-page.css';
import './Expertise.css';

export function Expertise() {
  return (
    <div className="container">
      <div className="page-hero">
        <Reveal>
          <span className="text-label">Expertise</span>
          <h1 className="text-display-lg page-hero__title" style={{ marginTop: 'var(--space-4)' }}>
            Six disciplines, one direction.
          </h1>
          <p className="text-body-lg page-hero__sub">
            Each area below is a lens on the same practice, not a separate service line —
            most projects draw on three or four of these at once.
          </p>
        </Reveal>
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        <div className="expertise-grid">
          {expertiseAreas.map((area, i) => (
            <Reveal key={area.title} delay={(i % 2) * 60}>
              <div className="expertise-card">
                <h2 className="text-heading expertise-card__title">{area.title}</h2>
                <p className="text-body">{area.description}</p>
                <div className="expertise-card__tags">
                  {area.disciplines.map((d) => (
                    <span key={d} className="expertise-card__tag">{d}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="section hairline" style={{ textAlign: 'center' }}>
        <Reveal>
          <CTA to="/work">See it applied in the work</CTA>
        </Reveal>
      </div>
    </div>
  );
}
