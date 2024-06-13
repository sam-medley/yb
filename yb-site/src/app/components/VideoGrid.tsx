import React from 'react';
import VIDEOS from '../utils/constants';
import VideoItem from './VideoItem';
import styles from '../styles/Home.module.css';

const VideoGrid: React.FC = () => {

  return (
      <div className={styles.videoContainer}>
        {VIDEOS.map((video: string, index: number) => (
          <div key={index} className={styles.videoColumn}>
            <VideoItem videoSrc={`/videos/${video}`} />
          </div>
        ))}
      </div>
  );
};

export default VideoGrid;