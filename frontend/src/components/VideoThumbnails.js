// VideoThumbnails.js
import React, { useState } from 'react';
import VideoModal from './VideoModal';
import styles from '../styles/VideoThumbnails.module.css';

const VideoThumbnails = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className={styles.videoThumbnails}>
        <div class={styles.title}>Videos</div>
      {videos.map((video, index) => (
        <div
          key={index}
          className={styles.thumbnail}
          onClick={() => openVideo(video)}
          style={{ backgroundImage: `url(${video.thumbnail})` }}
        ></div>
        
      ))}
  
      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={closeVideo} />
      )}
    </div>
    
  );
};

export default VideoThumbnails;
