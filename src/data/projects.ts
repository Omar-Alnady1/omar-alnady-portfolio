import type { Project } from './types';
import { cmsProjects } from './cmsLoader';

// Temporary fallback projects. Once real CMS projects are added, the CMS data
// becomes the primary source automatically.
export const projects: Project[] = cmsProjects.length > 0 ? cmsProjects : [];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((project) => project.featured)
    .sort((a, b) => (a.displayOrder ?? 99) - (b.displayOrder ?? 99));
}

export function getAllProjectsSorted(): Project[] {
  return [...projects].sort((a, b) => (a.displayOrder ?? 99) - (b.displayOrder ?? 99));
}

export function getRelatedProjects(project: Project, limit = 3): Project[] {
  return projects
    .filter((p) => p.id !== project.id)
    .filter((p) => p.categories.some((c) => project.categories.includes(c)) || p.disciplines.some((d) => project.disciplines.includes(d)))
    .slice(0, limit);
}
