'use client';

import React, { useState } from 'react';

interface VideoPlayerProps {
  src: string;
  title: string;
  className?: string;
}

export default function VideoPlayer({ src, title, className = '' }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    const video = document.getElementById(`video-${src}`) as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    handlePlayClick();
  };

  return (
    <div className={`relative aspect-video bg-black rounded-lg overflow-hidden ${className}`}>
      <video
        id={`video-${src}`}
        className="w-full h-full object-cover cursor-pointer"
        onClick={handleVideoClick}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        playsInline
        controls
      >
        <source src={src} type="video/mp4" />
        <source src={src} type="video/quicktime" />
        Your browser does not support the video tag.
      </video>

      {/* Play Button Overlay - only shown when paused */}
      {!isPlaying && (
        <button
          onClick={handlePlayClick}
          className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors cursor-pointer group"
          aria-label={`Play ${title}`}
        >
          <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all">
            <svg
              className="w-10 h-10 text-brand-orange ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}
