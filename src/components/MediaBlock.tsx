import type { MediaItem } from '@/data/types';
import './MediaBlock.css';

interface MediaBlockProps {
  media?: MediaItem;
  className?: string;
  loading?: 'lazy' | 'eager';
}

// Renders a single image gracefully — omits itself entirely when no
// media is provided, never showing a broken placeholder box.
export function MediaBlock({ media, className = '', loading = 'lazy' }: MediaBlockProps) {
  if (!media || !media.src) return null;

  const aspectClass = `media-block--${media.aspect ?? 'landscape'}`;

  return (
    <figure className={`media-block ${aspectClass} ${className}`.trim()}>
      <img src={media.src} alt={media.alt} loading={loading} />
      {media.caption && <figcaption className="text-caption media-block__caption">{media.caption}</figcaption>}
    </figure>
  );
}
