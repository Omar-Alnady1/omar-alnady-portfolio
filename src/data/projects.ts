import type { Project } from './types';

// Fictional placeholder projects only. Field combinations are
// intentionally uneven — some projects have full case studies, others
// only a thumbnail and short description — to prove the UI adapts.

export const projects: Project[] = [
  {
    id: 'project-alpha',
    title: 'Project Alpha',
    client: 'Placeholder Client A',
    year: 2025,
    categories: ['Dermatology & Aesthetics', 'Retail'],
    disciplines: ['Brand Strategy', 'Brand Development', 'Art Direction'],
    shortDescription:
      'A full identity and packaging system for a category entering a crowded retail shelf.',
    role: 'Creative Director',
    services: ['Brand Strategy', 'Identity', 'Packaging', 'Campaign'],
    thumbnail: { src: '/placeholders/ph-square-01.svg', alt: 'Project Alpha thumbnail' },
    heroMedia: { src: '/placeholders/ph-wide-01.svg', alt: 'Project Alpha hero image', aspect: 'wide' },
    gallery: [
      { src: '/placeholders/ph-landscape-01.svg', alt: 'Project Alpha packaging on shelf', aspect: 'landscape' },
      { src: '/placeholders/ph-portrait-01.svg', alt: 'Project Alpha product detail', aspect: 'portrait' },
      { src: '/placeholders/ph-square-02.svg', alt: 'Project Alpha logo mark', aspect: 'square' },
      { src: '/placeholders/ph-landscape-02.svg', alt: 'Project Alpha campaign still', aspect: 'landscape' },
    ],
    videos: [{ src: '', poster: '/placeholders/ph-video-01.svg', alt: 'Project Alpha launch film' }],
    featured: true,
    displayOrder: 1,
    sections: [
      { type: 'intro', body: 'A ground-up identity system built to stand out on a shelf dominated by clinical white packaging, then extended into a full launch campaign.' },
      { type: 'challenge', body: 'The category had trained customers to associate credibility with sterile, colorless packaging — but the client needed to signal warmth and approachability without losing clinical trust.' },
      { type: 'imageGrid', media: [
        { src: '/placeholders/ph-square-02.svg', alt: 'Logo exploration', aspect: 'square' },
        { src: '/placeholders/ph-square-01.svg', alt: 'Color system', aspect: 'square' },
      ] },
      { type: 'approach', body: 'We built a restrained warm palette anchored by a single accent, then tested it against clinical claims language until the two stopped feeling in conflict.' },
      { type: 'image', media: { src: '/placeholders/ph-landscape-03.svg', alt: 'Packaging system overview', aspect: 'landscape' } },
      { type: 'execution', body: 'The system rolled out across primary packaging, secondary displays, and a six-piece launch film series shot over two production days.' },
      { type: 'stats', stats: [
        { value: '6', label: 'Launch film variants' },
        { value: '3', label: 'Retail formats' },
        { value: '11 wk', label: 'Strategy to shelf' },
      ] },
      { type: 'quote', quote: 'The brand finally looks like it belongs on the shelf next to the brands people already trust.', attribution: 'Placeholder Client A, VP Marketing' },
      { type: 'outcome', body: 'The system shipped across all retail formats and became the reference identity for two subsequent product-line extensions.' },
      { type: 'credits', credits: [
        { role: 'Creative Direction', name: 'Marlowe Vance' },
        { role: 'Design Lead', name: 'Priya Okonkwo-Reyes' },
        { role: 'Motion', name: 'Théo Bramwell' },
      ] },
    ],
  },
  {
    id: 'project-beta',
    title: 'Project Beta',
    client: 'Placeholder Client B',
    year: 2024,
    categories: ['Real Estate', 'Investment'],
    disciplines: ['Creative Direction', 'Visual Direction', 'Experience Design'],
    shortDescription: 'Positioning and launch materials for a mixed-use development.',
    role: 'Creative Director',
    services: ['Positioning', 'Visual Identity', 'Sales Gallery Experience'],
    thumbnail: { src: '/placeholders/ph-landscape-02.svg', alt: 'Project Beta thumbnail', aspect: 'landscape' },
    heroMedia: { src: '/placeholders/ph-landscape-03.svg', alt: 'Project Beta hero image', aspect: 'landscape' },
    gallery: [
      { src: '/placeholders/ph-portrait-02.svg', alt: 'Sales gallery interior', aspect: 'portrait' },
      { src: '/placeholders/ph-landscape-01.svg', alt: 'Development exterior render', aspect: 'landscape' },
    ],
    featured: true,
    displayOrder: 2,
    sections: [
      { type: 'intro', body: 'A visual identity and physical sales gallery experience for a mixed-use development positioned toward a younger buyer than the category typically targets.' },
      { type: 'gallery', media: [
        { src: '/placeholders/ph-landscape-01.svg', alt: 'Gallery view one', aspect: 'landscape' },
        { src: '/placeholders/ph-portrait-02.svg', alt: 'Gallery view two', aspect: 'portrait' },
        { src: '/placeholders/ph-square-01.svg', alt: 'Gallery view three', aspect: 'square' },
      ] },
      { type: 'outcome', body: 'The sales gallery experience became the template the developer now reuses for two subsequent properties in the same portfolio.' },
    ],
  },
  {
    id: 'project-gamma',
    title: 'Project Gamma',
    client: 'Placeholder Client C',
    year: 2024,
    categories: ['Food & Beverage', 'Hospitality'],
    disciplines: ['Content Strategy', 'Content Direction', 'Social Content'],
    shortDescription: 'An ongoing social content system for a regional restaurant group.',
    thumbnail: { src: '/placeholders/ph-square-02.svg', alt: 'Project Gamma thumbnail' },
    gallery: [
      { src: '/placeholders/ph-square-01.svg', alt: 'Content grid sample one', aspect: 'square' },
      { src: '/placeholders/ph-square-02.svg', alt: 'Content grid sample two', aspect: 'square' },
      { src: '/placeholders/ph-square-01.svg', alt: 'Content grid sample three', aspect: 'square' },
    ],
    displayOrder: 5,
    sections: [
      { type: 'text', heading: 'A system, not a shoot', body: 'Rather than a single campaign, the brief called for a repeatable content system a small internal team could run without a director on every shoot.' },
      { type: 'imageGrid', media: [
        { src: '/placeholders/ph-square-01.svg', alt: 'Content sample', aspect: 'square' },
        { src: '/placeholders/ph-square-02.svg', alt: 'Content sample', aspect: 'square' },
        { src: '/placeholders/ph-square-01.svg', alt: 'Content sample', aspect: 'square' },
      ] },
    ],
  },
  {
    id: 'project-delta',
    title: 'Project Delta',
    client: 'Placeholder Client D',
    year: 2023,
    categories: ['Technology', 'Marketing'],
    disciplines: ['Campaign Development', 'Video', 'Motion'],
    shortDescription: 'A launch film and campaign for a developer-facing product release.',
    role: 'Director',
    thumbnail: { src: '/placeholders/ph-video-02.svg', alt: 'Project Delta thumbnail', aspect: 'landscape' },
    heroMedia: { src: '/placeholders/ph-wide-02.svg', alt: 'Project Delta hero image', aspect: 'wide' },
    videos: [
      { src: '', poster: '/placeholders/ph-video-01.svg', alt: 'Project Delta primary launch film' },
      { src: '', poster: '/placeholders/ph-video-02.svg', alt: 'Project Delta behind the scenes' },
    ],
    featured: true,
    displayOrder: 3,
    sections: [
      { type: 'intro', body: 'A single ninety-second film built to explain a technically dense product in language a non-engineer could follow, without talking down to the engineers watching too.' },
      { type: 'videoGrid', videos: [
        { src: '', poster: '/placeholders/ph-video-01.svg', alt: 'Primary launch film' },
        { src: '', poster: '/placeholders/ph-video-02.svg', alt: 'Behind the scenes' },
      ] },
      { type: 'challenge', body: 'Technical accuracy and broad appeal are usually in tension. The film needed both to survive review from an engineering team and an executive audience.' },
      { type: 'execution', body: 'We wrote three scripts before landing on one built around a single analogy, then shot it over a single day with a four-person crew.' },
    ],
  },
  {
    id: 'project-epsilon',
    title: 'Project Epsilon',
    client: 'Placeholder Client E',
    year: 2023,
    categories: ['Education', 'Social Impact'],
    disciplines: ['Brand Strategy', 'Storytelling'],
    shortDescription: 'A rebrand for a nonprofit education initiative expanding into new regions.',
    thumbnail: { src: '/placeholders/ph-portrait-01.svg', alt: 'Project Epsilon thumbnail', aspect: 'portrait' },
    displayOrder: 6,
    sections: [
      { type: 'intro', body: 'A modest rebrand for a nonprofit outgrowing its founding visual identity as it expanded from a single city to a multi-region program.' },
    ],
  },
  {
    id: 'project-zeta',
    title: 'Project Zeta',
    client: 'Placeholder Client F',
    year: 2022,
    categories: ['Fashion', 'Entertainment'],
    disciplines: ['Art Direction', 'Visual Direction', 'Production'],
    shortDescription: 'Seasonal campaign direction for an apparel line, shot across two cities.',
    role: 'Creative Director',
    services: ['Art Direction', 'Casting', 'Production Oversight'],
    thumbnail: { src: '/placeholders/ph-landscape-01.svg', alt: 'Project Zeta thumbnail', aspect: 'landscape' },
    heroMedia: { src: '/placeholders/ph-landscape-03.svg', alt: 'Project Zeta hero image', aspect: 'landscape' },
    gallery: [
      { src: '/placeholders/ph-portrait-01.svg', alt: 'Campaign still one', aspect: 'portrait' },
      { src: '/placeholders/ph-portrait-02.svg', alt: 'Campaign still two', aspect: 'portrait' },
      { src: '/placeholders/ph-landscape-02.svg', alt: 'Campaign still three', aspect: 'landscape' },
      { src: '/placeholders/ph-square-01.svg', alt: 'Campaign detail', aspect: 'square' },
      { src: '/placeholders/ph-portrait-01.svg', alt: 'Campaign still four', aspect: 'portrait' },
    ],
    displayOrder: 4,
    sections: [
      { type: 'intro', body: 'A two-city shoot built around a single wardrobe concept, extended across stills, motion, and in-store signage.' },
      { type: 'gallery', media: [
        { src: '/placeholders/ph-portrait-01.svg', alt: 'Campaign still', aspect: 'portrait' },
        { src: '/placeholders/ph-portrait-02.svg', alt: 'Campaign still', aspect: 'portrait' },
        { src: '/placeholders/ph-landscape-02.svg', alt: 'Campaign still', aspect: 'landscape' },
        { src: '/placeholders/ph-square-01.svg', alt: 'Campaign detail', aspect: 'square' },
      ] },
      { type: 'credits', credits: [
        { role: 'Creative Direction', name: 'Marlowe Vance' },
        { role: 'Photography', name: 'Iida Sørensen' },
      ] },
    ],
  },
  {
    id: 'project-eta',
    title: 'Project Eta',
    client: 'Placeholder Client G',
    year: 2022,
    categories: ['Legal & Consulting', 'Medical Business'],
    disciplines: ['Creative Direction', 'Marketing'],
    shortDescription: 'A quiet, credibility-first identity refresh for a professional services firm.',
    thumbnail: { src: '/placeholders/ph-square-01.svg', alt: 'Project Eta thumbnail' },
    displayOrder: 8,
  },
  {
    id: 'project-theta',
    title: 'Project Theta',
    client: 'Placeholder Client H',
    year: 2021,
    categories: ['Tourism', 'Hospitality'],
    disciplines: ['Experience Design', 'Spatial Experience', 'Content Direction'],
    shortDescription: 'An arrival experience redesign for a boutique hospitality group.',
    thumbnail: { src: '/placeholders/ph-landscape-02.svg', alt: 'Project Theta thumbnail', aspect: 'landscape' },
    heroMedia: { src: '/placeholders/ph-wide-01.svg', alt: 'Project Theta hero image', aspect: 'wide' },
    gallery: [
      { src: '/placeholders/ph-landscape-01.svg', alt: 'Lobby experience', aspect: 'landscape' },
      { src: '/placeholders/ph-square-02.svg', alt: 'Signage detail', aspect: 'square' },
    ],
    displayOrder: 7,
    sections: [
      { type: 'intro', body: 'A redesign of the first five minutes of a guest stay, from curb to room, treated as a single directed sequence rather than a set of disconnected touchpoints.' },
      { type: 'imageGrid', media: [
        { src: '/placeholders/ph-landscape-01.svg', alt: 'Lobby sequence', aspect: 'landscape' },
        { src: '/placeholders/ph-square-02.svg', alt: 'Signage system', aspect: 'square' },
      ] },
      { type: 'approach', body: 'We mapped the arrival as a storyboard before touching any physical materials, treating lighting, signage, and staff scripting as one continuous scene.' },
    ],
  },
];

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
