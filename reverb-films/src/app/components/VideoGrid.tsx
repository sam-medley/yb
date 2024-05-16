import React from 'react';
import VideoItem from './VideoItem';
import { VIDEOS } from '../utils/constants';
import styles from '../styles/Home.module.css';

const VideoGrid: React.FC = () => {
  return (
    <section className={styles.videoGrid}>
      {VIDEOS.slice(3).map((video, index) => (
        <VideoItem key={index} videoSrc={`/videos/${video}`} />
      ))}
    </section>
  );
};

export default VideoGrid;