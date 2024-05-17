"use client";

import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

interface VideoItemProps {
  videoSrc: string;
}

const VideoItem: React.FC<VideoItemProps> = ({ videoSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`${styles.videoItem} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video src={videoSrc} loop muted autoPlay />
    </div>
  );
};

export default VideoItem;