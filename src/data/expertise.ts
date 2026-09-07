export interface ExpertiseArea {
  title: string;
  description: string;
  disciplines: string[];
}

export const expertiseAreas: ExpertiseArea[] = [
  {
    title: 'Brand Systems',
    description:
      'Defining the visual and verbal architecture a brand runs on — identity, tone, and the rules that keep both coherent as a team scales past one designer.',
    disciplines: ['Brand Strategy', 'Brand Development', 'Visual Direction'],
  },
  {
    title: 'Campaigns',
    description:
      'Taking a single idea and building the full expression of it across formats — film, stills, out-of-home, social — without diluting it on the way.',
    disciplines: ['Campaign Development', 'Art Direction', 'Storytelling'],
  },
  {
    title: 'Content Direction',
    description:
      'Setting the editorial voice and visual grammar for ongoing content, then building the systems that let a team produce it without a director in every room.',
    disciplines: ['Content Strategy', 'Content Direction', 'Social Content'],
  },
  {
    title: 'Motion & Film',
    description:
      'Directing short-form and long-form video from treatment through final cut, with an eye for pacing that holds attention without over-cutting.',
    disciplines: ['Video', 'Motion', 'Production'],
  },
  {
    title: 'Experience Design',
    description:
      'Extending a brand into physical and spatial moments — launches, installations, environments — where the work has to hold up in three dimensions.',
    disciplines: ['Experience Design', 'Spatial Experience'],
  },
  {
    title: 'Marketing Strategy',
    description:
      'Connecting creative output back to the business problem it is meant to solve, so the work is judged on more than how it looks.',
    disciplines: ['Marketing', 'Creative Direction'],
  },
];
