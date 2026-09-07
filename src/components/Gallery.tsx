import type { MediaItem } from '@/data/types';
import { MediaBlock } from './MediaBlock';
import './Gallery.css';

interface GalleryProps {
  media?: MediaItem[];
}

export function Gallery({ media }: GalleryProps) {
  if (!media || media.length === 0) return null;

  return (
    <div className="gallery">
      {media.map((item, i) => (
        <div key={`${item.src}-${i}`} className={`gallery__item gallery__item--${item.aspect ?? 'landscape'}`}>
          <MediaBlock media={item} className="media-block--natural" />
        </div>
      ))}
    </div>
  );
}

interface ImageGridProps {
  media?: MediaItem[];
}

export function ImageGrid({ media }: ImageGridProps) {
  if (!media || media.length === 0) return null;

  return (
    <div className="image-grid">
      {media.map((item, i) => (
        <MediaBlock key={`${item.src}-${i}`} media={item} />
      ))}
    </div>
  );
}
