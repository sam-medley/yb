"use client";

import React, { useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css';

interface VideoItemProps {
  videoSrc: string;
}

const VideoItem: React.FC<VideoItemProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const stopVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      console.log("Video attributes:", videoRef.current.attributes);
    }
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        onMouseOver={playVideo}
        onMouseOut={stopVideo}
        className={styles.video}
      />
    </div>
  );
};

export default VideoItem;
