import type { Project } from './types';

// Vite imports every JSON project created by the CMS at build time.
const modules = import.meta.glob('/content/projects/*.json', {
  eager: true,
  import: 'default',
}) as Record<string, Project>;

export const cmsProjects: Project[] = Object.values(modules).map((project) => ({
  ...project,
  id: project.id || slugify(project.title),
}));

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\u0600-\u06ff]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
