import React from 'react';

function About() {
  return (
    <section id="about">
      <div className="container">
        <h1 className="sub-title">About Me</h1>
        <div className="about-list">
          <div className="about">
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget interdum lorem odio in est. Nam commodo urna eget nunc cursus interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis laoreet eros quis odio tincidunt euismod. Proin ut diam ipsum. Donec vulputate, erat sit amet rutrum rutrum, odio nulla semper sem, id pulvinar felis velit at neque.
            </p>
          </div>
          <div className="about">
            <h3>Experience</h3>
            <ul>
              <li>Company A - Software Developer</li>
              <li>Company B - Web Developer</li>
              <li>Company C - Frontend Engineer</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
