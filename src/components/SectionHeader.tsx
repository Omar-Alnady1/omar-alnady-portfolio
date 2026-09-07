import type { ReactNode } from 'react';
import './SectionHeader.css';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  aside?: ReactNode;
}

export function SectionHeader({ eyebrow, title, aside }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <div className="section-header__text">
        {eyebrow && <span className="text-label section-header__eyebrow">{eyebrow}</span>}
        <h2 className="text-display-md">{title}</h2>
      </div>
      {aside && <div className="section-header__aside text-body">{aside}</div>}
    </div>
  );
}
