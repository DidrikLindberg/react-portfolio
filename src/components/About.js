import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faCogs, faPaintBrush, faDatabase, faCode, faBug, faCodeBranch } from '@fortawesome/free-solid-svg-icons';


const backgroundStyle = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/teamwork.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.6)',
  pointerEvents: 'none',
};



function AboutMe() {
  return (
    <section id="about-me" className=" py-5" style={backgroundStyle}>
      <div className="overlay" style={overlayStyle}></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-card p-4">
              <h2 className="section-title">About Me</h2>
              <p className="lead">
                Hello! I'm Didrik, a passionate Full-Stack Developer with a strong
                foundation in web and software development.
              </p>
              <p>
                I'm on a mission to create digital experiences that are not only functional
                but also beautifully crafted. My love for coding goes beyond just writing
                lines of code; it's about solving real-world problems and making a positive
                impact.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="skills-card p-4">
              <h2 className="section-title">My Skills</h2>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <FontAwesomeIcon icon={faLaptopCode} className="me-2" /> Full-Stack Development
                </li>
                <li className="mb-2">
                  <FontAwesomeIcon icon={faCogs} className="me-2" /> Agile Methodologies
                </li>
                <li className="mb-2">
                  <FontAwesomeIcon icon={faPaintBrush} className="me-2" /> UI/UX Design
                </li>
                <li className="mb-2">
                  <FontAwesomeIcon icon={faDatabase} className="me-2" /> Database Management
                </li>
                <li className="mb-2">
                  <FontAwesomeIcon icon={faCode} className="me-2" /> API Integration
                </li>
                <li className="mb-2">
                  <FontAwesomeIcon icon={faBug} className="me-2" /> Testing and QA
                </li>
                <li className="mb-2">
                  <FontAwesomeIcon icon={faCodeBranch} className="me-2" /> CI/CD
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
