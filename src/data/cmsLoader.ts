import type { Project } from './types';

type ViteGlob = (pattern: string, options: { eager: boolean; import: string }) => Record<string, Project>;

const glob = (import.meta as ImportMeta & { glob: ViteGlob }).glob;
const modules = glob('/content/projects/*.json', {
  eager: true,
  import: 'default',
});

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
