import './FilterBar.css';

interface FilterBarProps {
  categories: string[];
  disciplines: string[];
  activeCategories: string[];
  activeDisciplines: string[];
  onToggleCategory: (value: string) => void;
  onToggleDiscipline: (value: string) => void;
  onClear: () => void;
}

export function FilterBar({
  categories,
  disciplines,
  activeCategories,
  activeDisciplines,
  onToggleCategory,
  onToggleDiscipline,
  onClear,
}: FilterBarProps) {
  const hasActive = activeCategories.length > 0 || activeDisciplines.length > 0;

  return (
    <div className="filter-bar" role="group" aria-label="Filter projects">
      <div className="filter-bar__group">
        <span className="text-label filter-bar__label">Industry</span>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`filter-chip ${activeCategories.includes(cat) ? 'is-active' : ''}`}
            aria-pressed={activeCategories.includes(cat)}
            onClick={() => onToggleCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="filter-bar__group">
        <span className="text-label filter-bar__label">Discipline</span>
        {disciplines.map((disc) => (
          <button
            key={disc}
            type="button"
            className={`filter-chip ${activeDisciplines.includes(disc) ? 'is-active' : ''}`}
            aria-pressed={activeDisciplines.includes(disc)}
            onClick={() => onToggleDiscipline(disc)}
          >
            {disc}
          </button>
        ))}

        {hasActive && (
          <button type="button" className="filter-bar__clear" onClick={onClear}>
            Clear filters
          </button>
        )}
      </div>
    </div>
  );
}
