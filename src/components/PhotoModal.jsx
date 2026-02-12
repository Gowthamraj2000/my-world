import React from 'react';
import './PhotoModal.css';

const PhotoModal = ({ photo, onClose }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={e => e.stopPropagation()}>
      <button className="modal-close" onClick={onClose}>&times;</button>
      <img src={photo.src} alt={photo.caption} className="modal-image" />
      <p className="modal-caption">{photo.caption}</p>
    </div>
  </div>
);

export default PhotoModal;