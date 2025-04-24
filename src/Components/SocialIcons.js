import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faGithub,
  faWhatsapp 
} from '@fortawesome/free-brands-svg-icons';
import './SocialIcons.css';

function SocialIcons() {
  const handleContactClick = (platform) => {
    switch(platform) {
      case 'email':
        window.location.href = 'mailto:rizkyfomma19@gmail.com';
        break;
      case 'whatsapp':
        window.open('https://wa.me/6281333903531', '_blank');
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/in/rizky-fomma-669a9922b/', '_blank');
        break;
      case 'github':
        window.open('https://github.com/npm1nstall', '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <div className="social-icons-container">
      <div className="social-icons">
        <FontAwesomeIcon 
          icon={faEnvelope} 
          className="social-icon" 
          onClick={() => handleContactClick('email')}
        />
        <FontAwesomeIcon 
          icon={faWhatsapp} 
          className="social-icon" 
          onClick={() => handleContactClick('whatsapp')}
        />
        <FontAwesomeIcon 
          icon={faLinkedin} 
          className="social-icon" 
          onClick={() => handleContactClick('linkedin')}
        />
        <FontAwesomeIcon 
          icon={faGithub} 
          className="social-icon" 
          onClick={() => handleContactClick('github')}
        />
      </div>
    </div>
  );
}

export default SocialIcons;
