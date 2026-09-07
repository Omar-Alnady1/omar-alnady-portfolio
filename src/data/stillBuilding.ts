export interface BuildingItem {
  title: string;
  status: 'In progress' | 'Exploring' | 'Paused';
  description: string;
}

// "Still Building" is an honest, in-progress-work page — placeholder
// entries only, no real project details.
export const buildingItems: BuildingItem[] = [
  {
    title: 'A framework for measuring creative work',
    status: 'In progress',
    description:
      'A lightweight scoring model for evaluating campaign concepts against business goals before production begins, instead of after a launch underperforms.',
  },
  {
    title: 'Short-form direction playbook',
    status: 'Exploring',
    description:
      'Documenting a repeatable process for directing social-first video at volume without losing the craft that separates it from template content.',
  },
  {
    title: 'A studio, not just a practice',
    status: 'Paused',
    description:
      'Early thinking on what it would take to build a small, opinionated creative studio rather than continuing as an independent director-for-hire.',
  },
];
