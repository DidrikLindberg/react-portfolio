import React from 'react';

function Header({ setActiveComponent }) {
  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <header>
      <div className="container">
        <nav>
          <button onClick={() => handleButtonClick('About')}>About</button>
          <button onClick={() => handleButtonClick('Portfolio')}>Portfolio</button>
          <button onClick={() => handleButtonClick('Contact')}>Contact</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
