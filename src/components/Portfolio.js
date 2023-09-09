import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const projects = [
  
    {
      title: 'Pet Supply E-Commerce Site',
      description: 'A modern e-commerce platform for pet supplies.',
      techStack: 'React, Node.js, Express, MongoDB',
      demoLink: 'https://didriklindberg.github.io/savvy-chef/',
      repoLink: 'https://github.com/username/project1',
      image: 'dog e-com.png',
      altText: 'Project1',
    },
    {
      title: 'Cleaning Service Website',
      description: 'A website for booking cleaning services.',
      techStack: 'React, Node.js, Express, MongoDB',
      demoLink: 'https://memomates.herokuapp.com/login',
      repoLink: 'https://github.com/username/project2',
      image: 'Screenshot 2023-05-11 105012.png',
      altText: 'Project2',
    },
    {
      title: 'Personal Finance App',
      description: 'An app to manage personal finances and expenses.',
      techStack: 'React, Node.js, Express, MongoDB',
      demoLink: 'https://budgetbetter.herokuapp.com/',
      repoLink: 'https://github.com/sheaschwenn/budget-better',
      image: 'project3.png',
      altText: 'Project3',
    },
  ];

  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/pastel2.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  };

  

  function Portfolio() {
    return (
      <section id="portfolio" className="portfolio" style={backgroundStyle}>
  
        <div className="project-container">
          <h1 className="sub-title text-center">Featured Projects</h1>
          <div className="project-list d-flex justify-content-center flex-wrap">
            {projects.map((project, index) => (
              <div key={index} className="project-card text-center ">
                <div className="project-circle">
                  <a href={project.demoLink}>
                    <img
                      src={process.env.PUBLIC_URL + `/assets/images/${project.image}`}
                      alt={project.altText}
                      className="img-fluid rounded-circle project-image"
                    />
                  </a>
                </div>
                <h3 className="mt-3">{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  <p>{project.techStack}</p>
                </div>
                <div className="repo-link mt-3">
                  <a
                    href={project.repoLink}
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <FontAwesomeIcon icon={faGithub} /> View Repository
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Portfolio;