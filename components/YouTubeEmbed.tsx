import React, { useState } from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  autoplay?: boolean;
  className?: string;
}

/**
 * Professional YouTube embed component with responsive aspect ratio
 * and enhanced loading states.
 *
 * Usage:
 * <YouTubeEmbed videoId="dQw4w9WgXcQ" title="Video Title" />
 */
export const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  title = 'YouTube video',
  autoplay = false,
  className = '',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const embedUrl = `https://www.youtube.com/embed/${videoId}?${new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    rel: '0', // Don't show related videos from other channels
    modestbranding: '1', // Minimal YouTube branding
  }).toString()}`;

  return (
    <div className={`youtube-embed-wrapper ${className}`}>
      <div className="relative w-full rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-slate-50">
        {/* 16:9 Aspect Ratio Container */}
        <div className="relative w-full pb-[56.25%]">
          {/* Loading Skeleton */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-100 animate-pulse">
              <div className="flex flex-col items-center gap-3">
                <span className="material-symbols-outlined text-5xl text-slate-300">
                  play_circle
                </span>
                <span className="text-sm text-slate-400 font-medium">Loading video...</span>
              </div>
            </div>
          )}

          {/* YouTube iFrame */}
          <iframe
            className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
};

interface VideoCardProps {
  videoId: string;
  title: string;
  description?: string;
  thumbnail?: string;
  duration?: string;
  publishDate?: string;
}

/**
 * Enhanced video card with custom thumbnail and metadata.
 * Shows thumbnail initially, loads iframe on click.
 *
 * Usage:
 * <VideoCard
 *   videoId="dQw4w9WgXcQ"
 *   title="SEO Strategy Tutorial"
 *   description="Learn advanced SEO techniques..."
 *   duration="12:34"
 * />
 */
export const VideoCard: React.FC<VideoCardProps> = ({
  videoId,
  title,
  description,
  thumbnail,
  duration,
  publishDate,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Use YouTube's high-quality thumbnail if not provided
  const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  // YouTube video URL
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

  if (isPlaying) {
    return (
      <div className="video-card">
        <YouTubeEmbed videoId={videoId} title={title} autoplay />
        {(title || description) && (
          <div className="mt-4">
            {title && (
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="font-bold text-lg text-slate-900">{title}</h3>
                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-primary hover:text-primary-dark transition-colors whitespace-nowrap"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                  YouTube
                </a>
              </div>
            )}
            {description && <p className="text-slate-600 text-sm leading-relaxed">{description}</p>}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="video-card group cursor-pointer" onClick={() => setIsPlaying(true)}>
      {/* Thumbnail with Play Overlay */}
      <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
        {/* Thumbnail Image */}
        <div className="relative w-full pb-[56.25%] bg-slate-800">
          <img
            src={thumbnailUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-primary shadow-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-primary/50">
              <span className="material-symbols-outlined text-white text-4xl translate-x-0.5">
                play_arrow
              </span>
            </div>
          </div>

          {/* Duration Badge */}
          {duration && (
            <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 backdrop-blur-sm rounded text-white text-xs font-semibold">
              {duration}
            </div>
          )}
        </div>
      </div>

      {/* Video Info */}
      {(title || description) && (
        <div className="mt-4">
          {title && (
            <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-2">{description}</p>
          )}
          <div className="flex items-center justify-between">
            {publishDate && (
              <p className="text-slate-400 text-xs">
                {publishDate}
              </p>
            )}
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-slate-500 hover:text-primary transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              Watch on YouTube
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

interface VideoGridProps {
  videos: VideoCardProps[];
  columns?: 1 | 2 | 3;
  className?: string;
}

/**
 * Grid layout for multiple video cards
 *
 * Usage:
 * <VideoGrid videos={[
 *   { videoId: "abc123", title: "Video 1", description: "..." },
 *   { videoId: "def456", title: "Video 2", description: "..." },
 * ]} columns={3} />
 */
export const VideoGrid: React.FC<VideoGridProps> = ({
  videos,
  columns = 3,
  className = '',
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-8 ${className}`}>
      {videos.map((video, index) => (
        <VideoCard key={video.videoId} {...video} />
      ))}
    </div>
  );
};
