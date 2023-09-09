import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="social-icons py-6">
          <a href="https://github.com/didriklindberg" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a href="https://www.youtube.com/watch?v=eBGIQ7ZuuiU" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a href="https://www.youtube.com/watch?v=eBGIQ7ZuuiU" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faStackOverflow} className="icon" />
          </a>
          <a href="https://www.youtube.com/watch?v=eBGIQ7ZuuiU" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
