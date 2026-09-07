import { useParams, Navigate, Link } from 'react-router-dom';
import { getProjectById, getRelatedProjects } from '@/data/projects';
import { CaseStudy } from '@/components/CaseStudy';
import { MediaBlock } from '@/components/MediaBlock';
import { ProjectGrid } from '@/components/ProjectGrid';
import { SectionHeader } from '@/components/SectionHeader';
import { Reveal } from '@/components/Reveal';
import './ProjectDetail.css';

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? getProjectById(projectId) : undefined;

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const related = getRelatedProjects(project);
  const tags = [...project.categories, ...project.disciplines];

  return (
    <article>
      <div className="container project-detail__hero">
        <Reveal>
          <Link to="/work" className="project-detail__back">← Back to work</Link>
          <h1 className="text-display-lg project-detail__title">{project.title}</h1>
          <p className="text-body-lg" style={{ maxWidth: '60ch', marginBottom: 'var(--space-6)' }}>
            {project.shortDescription}
          </p>
          <div className="project-detail__tags">
            {tags.map((tag) => (
              <span key={tag} className="project-detail__tag">{tag}</span>
            ))}
          </div>
        </Reveal>

        {project.heroMedia && (
          <Reveal>
            <div className="project-detail__hero-media">
              <MediaBlock media={project.heroMedia} loading="eager" />
            </div>
          </Reveal>
        )}

        <CaseStudy project={project} />
      </div>

      {related.length > 0 && (
        <div className="container section project-detail__related hairline">
          <SectionHeader eyebrow="Related" title="More from the same range." />
          <ProjectGrid projects={related} />
        </div>
      )}
    </article>
  );
}
