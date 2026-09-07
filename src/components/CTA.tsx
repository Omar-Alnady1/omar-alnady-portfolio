import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import './CTA.css';

interface CTAProps {
  to: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  external?: boolean;
}

export function CTA({ to, children, variant = 'ghost', external = false }: CTAProps) {
  const classes = `cta ${variant === 'primary' ? 'cta--primary' : ''}`.trim();

  if (external) {
    return (
      <a href={to} target="_blank" rel="noreferrer" className={classes}>
        {children}
        <span className="cta__arrow" aria-hidden="true">→</span>
      </a>
    );
  }

  return (
    <Link to={to} className={classes}>
      {children}
      <span className="cta__arrow" aria-hidden="true">→</span>
    </Link>
  );
}
