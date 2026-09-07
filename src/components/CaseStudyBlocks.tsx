import type { CreditItem, StatItem } from '@/data/types';
import './CaseStudyBlocks.css';

export function TextBlock({ heading, body }: { heading?: string; body?: string }) {
  if (!body) return null;
  return (
    <div className="text-block">
      {heading && <h3 className="text-heading text-block__heading">{heading}</h3>}
      <p className="text-body-lg">{body}</p>
    </div>
  );
}

export function QuoteBlock({ quote, attribution }: { quote?: string; attribution?: string }) {
  if (!quote) return null;
  return (
    <blockquote className="quote-block">
      <p className="quote-block__text">"{quote}"</p>
      {attribution && <cite className="text-caption quote-block__attribution">{attribution}</cite>}
    </blockquote>
  );
}

export function StatsBlock({ heading, stats }: { heading?: string; stats?: StatItem[] }) {
  if (!stats || stats.length === 0) return null;
  return (
    <div>
      {heading && <h3 className="text-heading text-block__heading">{heading}</h3>}
      <div className="stats-block">
        {stats.map((s) => (
          <div key={s.label} className="stats-block__item">
            <span className="stats-block__value">{s.value}</span>
            <span className="text-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CreditsBlock({ credits }: { credits?: CreditItem[] }) {
  if (!credits || credits.length === 0) return null;
  return (
    <div className="credits-block">
      {credits.map((c) => (
        <div key={`${c.role}-${c.name}`} className="credits-block__item">
          <p className="text-label credits-block__role">{c.role}</p>
          <p className="text-body">{c.name}</p>
        </div>
      ))}
    </div>
  );
}
