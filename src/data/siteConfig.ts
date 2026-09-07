export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  social: { label: string; url: string }[];
  availability: string;
}

// Placeholder identity and contact details — fictional, clearly not real.
export const siteConfig: SiteConfig = {
  name: 'Marlowe Vance',
  role: 'Creative Director',
  tagline: 'Building brand worlds and the campaigns that live inside them.',
  location: 'Based between two coasts',
  email: 'hello@example-placeholder.com',
  social: [
    { label: 'Instagram', url: 'https://example.com/placeholder' },
    { label: 'LinkedIn', url: 'https://example.com/placeholder' },
    { label: 'Are.na', url: 'https://example.com/placeholder' },
  ],
  availability: 'Currently scoping select projects for late 2026.',
};
