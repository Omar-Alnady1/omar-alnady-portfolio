import type { Project } from '@/data/types';
import { ProjectCard } from './ProjectCard';
import { Reveal } from './Reveal';
import './ProjectGrid.css';

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="project-grid__empty">
        <p className="text-body-lg">No projects match this combination of filters yet.</p>
        <p className="text-caption">Try clearing a filter to see more work.</p>
      </div>
    );
  }

  return (
    <div className="project-grid">
      {projects.map((project, i) => (
        <Reveal key={project.id} delay={(i % 3) * 80}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}
