import { buildingItems } from '@/data/stillBuilding';
import { Reveal } from '@/components/Reveal';
import './shared-page.css';
import './StillBuilding.css';

export function StillBuilding() {
  return (
    <div className="container">
      <div className="page-hero">
        <Reveal>
          <span className="text-label">Still Building</span>
          <h1 className="text-display-lg page-hero__title" style={{ marginTop: 'var(--space-4)' }}>
            Not everything worth showing is finished.
          </h1>
          <p className="text-body-lg page-hero__sub">
            A running, honest log of ideas and internal tools currently in progress —
            some of it will ship, some of it won't.
          </p>
        </Reveal>
      </div>

      <div className="section building-list" style={{ paddingTop: 0 }}>
        {buildingItems.map((item) => (
          <Reveal key={item.title}>
            <div className="building-item">
              <span className="text-label building-item__status">{item.status}</span>
              <div>
                <h2 className="text-heading building-item__title">{item.title}</h2>
                <p className="text-body">{item.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
