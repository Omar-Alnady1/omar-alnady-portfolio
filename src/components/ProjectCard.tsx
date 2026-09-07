import { Link } from 'react-router-dom';
import type { Project } from '@/data/types';
import { MediaBlock } from './MediaBlock';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const tags = [...project.categories, ...project.disciplines].slice(0, 3);

  return (
    <Link to={`/work/${project.id}`} className="project-card" aria-label={`View case study: ${project.title}`}>
      <div className="project-card__media-wrap">
        <MediaBlock media={project.thumbnail} />
        <div className="project-card__overlay" aria-hidden="true" />
      </div>
      <div className="project-card__row">
        <h3 className="project-card__title">{project.title}</h3>
        {project.year && <span className="text-caption">{project.year}</span>}
      </div>
      <div className="project-card__tags">
        {tags.map((tag) => (
          <span key={tag} className="project-card__tag">{tag}</span>
        ))}
      </div>
    </Link>
  );
}
