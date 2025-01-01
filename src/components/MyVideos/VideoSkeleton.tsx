import React from 'react'
import './VideoSkeleton.css'

export const VideoSkeleton: React.FC = () => {
  return (
    <div className="video-skeleton">
      <div className="skeleton-thumbnail"></div>
      <div className="skeleton-info">
        <div className="skeleton-title"></div>
        <div className="skeleton-meta"></div>
      </div>
    </div>
  )
} 