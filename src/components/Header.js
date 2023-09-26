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
      <ul className="nav-list">
        <li><a className="nav-link" href="#about">About</a></li>
        <li><a className="nav-link" href="#portfolio">Projects</a></li>
      </ul>

    </header>
  );
}

export default Header;
