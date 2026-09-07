import type { VideoItem } from '@/data/types';
import './VideoBlock.css';

interface VideoBlockProps {
  video?: VideoItem;
}

// Renders an actual <video> when a real source exists; otherwise falls
// back to the poster with a decorative play affordance. Omits itself
// entirely when neither is present.
export function VideoBlock({ video }: VideoBlockProps) {
  if (!video || (!video.src && !video.poster)) return null;

  return (
    <figure className="video-block">
      {video.src ? (
        <video src={video.src} poster={video.poster} controls preload="metadata" aria-label={video.alt} />
      ) : (
        <>
          <img src={video.poster} alt={video.alt} loading="lazy" />
          <div className="video-block__play" aria-hidden="true">
            <span className="video-block__play-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4 2.5v13l12-6.5-12-6.5z" fill="#E7DFD3" />
              </svg>
            </span>
          </div>
        </>
      )}
      {video.caption && <figcaption className="text-caption">{video.caption}</figcaption>}
    </figure>
  );
}

interface VideoGridProps {
  videos?: VideoItem[];
}

export function VideoGrid({ videos }: VideoGridProps) {
  if (!videos || videos.length === 0) return null;

  return (
    <div className="video-grid">
      {videos.map((v, i) => (
        <VideoBlock key={`${v.poster ?? v.src}-${i}`} video={v} />
      ))}
    </div>
  );
}
