import React, { useState } from 'react';

function Header({ setActiveComponent }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
    setIsMenuOpen(false); // Close the menu when a menu item is clicked
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button className="navbar-brand" onClick={() => handleButtonClick('About')}>
            Didrik Lindberg
          </button>
          <button
            className={`navbar-toggler ${isMenuOpen ? 'collapsed' : ''}`}
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <button className="nav-link" onClick={() => handleButtonClick('About')}>
                  About
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => handleButtonClick('Portfolio')}>
                  Portfolio
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => handleButtonClick('Contact')}>
                  Contact
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => handleButtonClick('Resume')}>
                  Resume
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
      <div className={`menu-container ${isMenuOpen ? 'open' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className="nav-link" onClick={() => handleButtonClick('About')}>
              About
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => handleButtonClick('Portfolio')}>
              Portfolio
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => handleButtonClick('Contact')}>
              Contact
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => handleButtonClick('Resume')}>
              Resume
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
