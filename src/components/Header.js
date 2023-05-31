import React from 'react';

function Header({ setActiveComponent }) {
  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button className="navbar-brand" onClick={() => handleButtonClick('About')}>Didrik Lindberg</button>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <button className="nav-link" onClick={() => handleButtonClick('About')}>About</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => handleButtonClick('Portfolio')}>Portfolio</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => handleButtonClick('Contact')}>Contact</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => handleButtonClick('Resume')}>Resume</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
