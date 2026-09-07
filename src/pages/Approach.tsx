import { approachSteps } from '@/data/approach';
import { Reveal } from '@/components/Reveal';
import { CTA } from '@/components/CTA';
import './shared-page.css';
import './Approach.css';

export function Approach() {
  return (
    <div className="container">
      <div className="page-hero">
        <Reveal>
          <span className="text-label">Approach</span>
          <h1 className="text-display-lg page-hero__title" style={{ marginTop: 'var(--space-4)' }}>
            A process built to survive contact with a deadline.
          </h1>
          <p className="text-body-lg page-hero__sub">
            Five commitments that shape how a project runs, from the first call to the
            final delivery.
          </p>
        </Reveal>
      </div>

      <div className="section approach-steps" style={{ paddingTop: 0 }}>
        {approachSteps.map((step) => (
          <Reveal key={step.index}>
            <div className="approach-step">
              <span className="approach-step__index">{step.index}</span>
              <div>
                <h2 className="text-heading approach-step__title">{step.title}</h2>
                <p className="text-body-lg approach-step__body">{step.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="section hairline" style={{ textAlign: 'center' }}>
        <Reveal>
          <CTA to="/contact" variant="primary">Bring a project</CTA>
        </Reveal>
      </div>
    </div>
  );
}
