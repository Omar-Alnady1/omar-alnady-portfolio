import { Link } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';

export function NotFound() {
  return (
    <div className="container" style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 'var(--space-9)' }}>
      <Reveal>
        <span className="text-label">404</span>
        <h1 className="text-display-lg" style={{ marginTop: 'var(--space-4)', maxWidth: '20ch' }}>
          That page didn't make the final cut.
        </h1>
        <p className="text-body-lg" style={{ marginTop: 'var(--space-5)', maxWidth: '48ch' }}>
          The page you're looking for doesn't exist, or has moved.
        </p>
        <div style={{ marginTop: 'var(--space-7)' }}>
          <Link to="/" className="cta cta--primary">Back to home</Link>
        </div>
      </Reveal>
    </div>
  );
}
