import type { CaseStudyBlock, Project } from '@/data/types';
import { MediaBlock } from './MediaBlock';
import { Gallery, ImageGrid } from './Gallery';
import { VideoBlock, VideoGrid } from './VideoBlock';
import { TextBlock, QuoteBlock, StatsBlock, CreditsBlock } from './CaseStudyBlocks';
import { Reveal } from './Reveal';
import './CaseStudy.css';

function renderBlock(block: CaseStudyBlock, key: string) {
  switch (block.type) {
    case 'intro':
      return <TextBlock key={key} heading={block.heading} body={block.body} />;
    case 'text':
      return <TextBlock key={key} heading={block.heading} body={block.body} />;
    case 'challenge':
      return <TextBlock key={key} heading="The Challenge" body={block.body} />;
    case 'approach':
      return <TextBlock key={key} heading="The Approach" body={block.body} />;
    case 'execution':
      return <TextBlock key={key} heading="Execution" body={block.body} />;
    case 'outcome':
      return <TextBlock key={key} heading="Outcome" body={block.body} />;
    case 'quote':
      return <QuoteBlock key={key} quote={block.quote} attribution={block.attribution} />;
    case 'image':
      return <MediaBlock key={key} media={block.media} />;
    case 'imageGrid':
      return <ImageGrid key={key} media={block.media} />;
    case 'gallery':
      return <Gallery key={key} media={block.media} />;
    case 'video':
      return <VideoBlock key={key} video={block.video} />;
    case 'videoGrid':
      return <VideoGrid key={key} videos={block.videos} />;
    case 'stats':
      return <StatsBlock key={key} heading={block.heading} stats={block.stats} />;
    case 'credits':
      return <CreditsBlock key={key} credits={block.credits} />;
    default:
      return null;
  }
}

interface CaseStudyProps {
  project: Project;
}

export function CaseStudy({ project }: CaseStudyProps) {
  const hasMeta = project.role || project.year || (project.services && project.services.length > 0) || project.client;

  return (
    <div>
      {hasMeta && (
        <div className="case-study__meta">
          {project.client && (
            <div className="case-study__meta-item">
              <span className="text-label">Client</span>
              <span className="text-body">{project.client}</span>
            </div>
          )}
          {project.role && (
            <div className="case-study__meta-item">
              <span className="text-label">Role</span>
              <span className="text-body">{project.role}</span>
            </div>
          )}
          {project.year && (
            <div className="case-study__meta-item">
              <span className="text-label">Year</span>
              <span className="text-body">{project.year}</span>
            </div>
          )}
          {project.services && project.services.length > 0 && (
            <div className="case-study__meta-item">
              <span className="text-label">Services</span>
              <span className="text-body">{project.services.join(', ')}</span>
            </div>
          )}
        </div>
      )}

      {project.sections?.map((block, i) => (
        <Reveal key={`${block.type}-${i}`} className="case-study__block">
          {renderBlock(block, `${block.type}-${i}`)}
        </Reveal>
      ))}
    </div>
  );
}
