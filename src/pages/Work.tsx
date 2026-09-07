import { useMemo, useState } from 'react';
import { getAllProjectsSorted } from '@/data/projects';
import { FilterBar } from '@/components/FilterBar';
import { ProjectGrid } from '@/components/ProjectGrid';
import { Reveal } from '@/components/Reveal';
import './Work.css';

export function Work() {
  const allProjects = getAllProjectsSorted();
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [activeDisciplines, setActiveDisciplines] = useState<string[]>([]);

  const availableCategories = useMemo(() => {
    const set = new Set<string>();
    allProjects.forEach((p) => p.categories.forEach((c) => set.add(c)));
    return Array.from(set).sort();
  }, [allProjects]);

  const availableDisciplines = useMemo(() => {
    const set = new Set<string>();
    allProjects.forEach((p) => p.disciplines.forEach((d) => set.add(d)));
    return Array.from(set).sort();
  }, [allProjects]);

  const filtered = useMemo(() => {
    return allProjects.filter((p) => {
      const matchesCategory = activeCategories.length === 0 || p.categories.some((c) => activeCategories.includes(c));
      const matchesDiscipline = activeDisciplines.length === 0 || p.disciplines.some((d) => activeDisciplines.includes(d));
      return matchesCategory && matchesDiscipline;
    });
  }, [allProjects, activeCategories, activeDisciplines]);

  const toggle = (list: string[], setList: (v: string[]) => void, value: string) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  return (
    <div className="container work-hero">
      <Reveal>
        <span className="text-label">Work</span>
        <h1 className="text-display-lg work-hero__title" style={{ marginTop: 'var(--space-4)' }}>
          A range of problems, one point of view.
        </h1>
      </Reveal>

      <div className="section" style={{ paddingBottom: 0 }}>
        <FilterBar
          categories={availableCategories}
          disciplines={availableDisciplines}
          activeCategories={activeCategories}
          activeDisciplines={activeDisciplines}
          onToggleCategory={(v) => toggle(activeCategories, setActiveCategories, v)}
          onToggleDiscipline={(v) => toggle(activeDisciplines, setActiveDisciplines, v)}
          onClear={() => {
            setActiveCategories([]);
            setActiveDisciplines([]);
          }}
        />

        <p className="text-caption work-count">
          {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
        </p>

        <ProjectGrid projects={filtered} />
      </div>
    </div>
  );
}
