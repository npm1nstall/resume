// DownloadCV.js
import React from 'react';
import './DownloadCV.css';
import CVFile from '../assets/RizkyRamadhanHidayat_CV.pdf'; // Pastikan file CV ada

function DownloadCV() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CVFile;
    link.download = 'RizkyRamadhanHidayat_CV.pdf';
    link.click();
  };

  return (
    <div className="download-cv-container">
      <button className="download-cv-button" onClick={handleDownload}>
        <i className="fas fa-download"></i>
        Download CV
      </button>
    </div>
  );
}

export default DownloadCV;