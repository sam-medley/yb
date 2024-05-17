import React from 'react';
import VIDEOS from '../utils/constants';
import VideoItem from './VideoItem';
import styles from '../styles/Home.module.css';

const VideoGrid: React.FC = () => {
  return (
    <section className={styles.videoGrid}>
      {VIDEOS.slice(3).map((video: string, index: number) => (
        <VideoItem key={index} videoSrc={`/videos/${video}`} />
      ))}
    </section>
  );
};

export default VideoGrid;