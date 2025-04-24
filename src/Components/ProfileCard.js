// ProfileCard.js
import React from 'react';
import './ProfileCard.css';
import profilePic from '../assets/im.jpeg';

function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-content">
        <img 
          src={profilePic} 
          alt="Rizky Ramadhan Hidayat" 
          className="profile-image" 
        />
        <div className="profile-description">
          <h1>Rizky Ramadhan Hidayat</h1>
          <p className="profile-subtitle">
            Mahasiswa akhir Teknik Informatika yang passionate dengan pengembangan teknologi AI
          </p>
          <div className="profile-contact">
            <div className="contact-item">
              <i className="fas fa-user"></i>
              <span>Rizky Ramadhan</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-pin"></i>
              <span>Jl. Margorejo No. 67G, Surabaya</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;