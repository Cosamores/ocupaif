// VideoModal.js
import React from 'react';
import Card from './Card';
import styles from '../styles/VideoModal.module.css';

const VideoModal = ({ video, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <Card>
          <h3>{video.title}</h3>
          <iframe
            width="560"
            height="315"
            src={video.embedUrl}
            title={video.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p>{video.description}</p>
          <div className={styles.presenterInfo}>
            <img src={video.presenterImage} alt={video.presenter} />
            <p>{video.presenterBio}</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default VideoModal;
