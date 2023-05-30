import React from 'react';

function Header() {
  return (
    <header>
      <h1>Didrik</h1>
      <nav>
        <ul>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="welcome-text">
        <h2>
          Welcome, <br />
          <span className="Greetings">view some of my projects below!</span>
        </h2>
      </div>
    </header>
  );
}

export default Header;
