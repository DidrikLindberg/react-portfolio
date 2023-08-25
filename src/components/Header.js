import React, { useState, useEffect } from 'react';



function Header() {
  const [scrollingUp, setScrollingUp] = useState(true); // Track scrolling direction

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingUp(currentScrollY < prevScrollY);
      prevScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrollingUp ? 'visible' : ''}`}>
      <div className="logo-container">
        <img className="logo" src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="Logo" />
      </div>
      <ul className="nav-list">
        <li><a className="nav-link" href="#about">About</a></li>
        <li><a className="nav-link" href="#portfolio">Portfolio</a></li>
        <li><a className="nav-link" href="#contact">Contact</a></li>
        <li><a className="nav-link" href="#resume">Resume</a></li>
      </ul>
    </header>
  );
}

export default Header;
