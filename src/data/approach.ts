export interface ApproachStep {
  index: string;
  title: string;
  description: string;
}

export const approachSteps: ApproachStep[] = [
  {
    index: '01',
    title: 'Listen first',
    description:
      'Every project starts with understanding the constraint underneath the brief — the budget, the timeline, the internal politics — before a single mood board opens.',
  },
  {
    index: '02',
    title: 'Find the one idea',
    description:
      'Resisting the urge to present five directions. A campaign is strongest when it commits early to a single idea and spends the rest of the process sharpening it.',
  },
  {
    index: '03',
    title: 'Build the system, not the artifact',
    description:
      'A logo, a hero film, a single ad — none of it holds up alone. The deliverable is the system that lets a brand keep making good decisions after the engagement ends.',
  },
  {
    index: '04',
    title: 'Direct in the room',
    description:
      'Being present on set, in the edit bay, and in production reviews — creative direction that only happens in a deck rarely survives contact with execution.',
  },
  {
    index: '05',
    title: 'Measure what mattered',
    description:
      'Closing the loop after launch: what moved, what did not, and what that means for the next round of work.',
  },
];

export interface ExperienceEntry {
  period: string;
  title: string;
  organization: string;
  summary: string;
}

export const experience: ExperienceEntry[] = [
  {
    period: '2022 — Present',
    title: 'Independent Creative Director',
    organization: 'Studio practice',
    summary:
      'Leading brand and campaign work for clients across healthcare, hospitality, and consumer categories, from initial strategy through final production.',
  },
  {
    period: '2018 — 2022',
    title: 'Executive Creative Director',
    organization: 'Placeholder Agency',
    summary:
      'Ran a cross-disciplinary creative team spanning brand, content, and motion, overseeing output for a roster of mid-market and enterprise clients.',
  },
  {
    period: '2014 — 2018',
    title: 'Senior Art Director',
    organization: 'Placeholder Agency',
    summary:
      'Directed visual identity and campaign work across print, digital, and experiential channels for clients in retail and technology.',
  },
];
