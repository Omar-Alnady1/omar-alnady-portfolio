// Core content types. UI components consume this shape only.
export type Industry = string;
export type Discipline = string;
export type MediaAspect = 'landscape' | 'portrait' | 'square' | 'wide';

export interface MediaItem {
  src: string;
  alt: string;
  aspect?: MediaAspect;
  caption?: string;
}

export interface VideoItem {
  src: string;
  poster?: string;
  alt: string;
  caption?: string;
}

export interface ContentLink {
  title: string;
  platform: string;
  type: string;
  url: string;
  thumbnail?: string;
}

export interface StatItem { value: string; label: string; }
export interface CreditItem { role: string; name: string; }

export type CaseStudyBlock =
  | { type: 'intro'; heading?: string; body: string }
  | { type: 'text'; heading?: string; body: string }
  | { type: 'quote'; quote: string; attribution?: string }
  | { type: 'image'; media: MediaItem }
  | { type: 'imageGrid'; media: MediaItem[] }
  | { type: 'gallery'; media: MediaItem[] }
  | { type: 'video'; video: VideoItem }
  | { type: 'videoGrid'; videos: VideoItem[] }
  | { type: 'stats'; heading?: string; stats: StatItem[] }
  | { type: 'challenge'; body: string }
  | { type: 'approach'; body: string }
  | { type: 'execution'; body: string }
  | { type: 'outcome'; body: string }
  | { type: 'credits'; credits: CreditItem[] };

export interface Project {
  id: string;
  title: string;
  client?: string;
  year?: number;
  categories: Industry[];
  disciplines: Discipline[];
  shortDescription: string;
  role?: string;
  services?: string[];
  thumbnail: MediaItem;
  heroMedia?: MediaItem;
  gallery?: MediaItem[];
  videos?: VideoItem[];
  sections?: CaseStudyBlock[];
  credits?: CreditItem[];
  contentLinks?: ContentLink[];
  featured?: boolean;
  displayOrder?: number;
}

export interface NavItem { label: string; path: string; }
