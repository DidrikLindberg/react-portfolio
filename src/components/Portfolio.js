import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Project 1 description',
      demoLink: 'https://didriklindberg.github.io/savvy-chef/',
      repoLink: 'https://github.com/username/project1',
      imageSrc: './assets/images/2023-04-13 23.03.34.gif',
      altText: 'Project1',
    },
    {
      title: 'Project 2',
      description: 'Project 2 description',
      demoLink: 'https://memomates.herokuapp.com/login',
      repoLink: 'https://github.com/username/project2',
      imageSrc: './assets/images/Screenshot 2023-05-11 105012.png',
      altText: 'Project2',
    },
    {
      title: 'Project 3',
      description: 'Project 3 description',
      demoLink: 'https://budgetbetter.herokuapp.com/',
      repoLink: 'https://github.com/sheaschwenn/budget-better',
      imageSrc: './assets/images/project3.png',
      altText: 'Project3',
    },    {
      title: 'Social Network Backend API Endpoints',
      description: 'Project 4 description',
      demoLink: 'https://github.com/DidrikLindberg/social-network-API',
      repoLink: 'https://github.com/username/social-network-API',
      imageSrc: './assets/images/coming-soon.png',
      altText: 'Project4',
    },    {
      title: 'Full Stack E-Commerce MVC',
      description: 'Project 5 description',
      demoLink: 'https://github.com/DidrikLindberg/full-stack-e-commerce-mvc',
      repoLink: 'https://github.com/DidrikLindberg/full-stack-e-commerce-mvc',
      imageSrc: './assets/images/coming-soon.png',
      altText: 'Project5',
    },    {
      title: 'Tech Blog',
      description: 'Project 6 description',
      demoLink: 'https://github.com/DidrikLindberg/tech-blog',
      repoLink: 'https://github.com/DidrikLindberg/tech-blog',
      imageSrc: './assets/images/coming-soon.png',
      altText: 'Project6',
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <h1 className="sub-title">Projects</h1>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <h3>{project.title}</h3>
              <p>
                {project.description}
                <a href={project.demoLink}>
                  <img src={project.imageSrc} alt={project.altText} />
                </a>
              </p>
              <a href={project.repoLink} className="repo-link" style={{ textDecoration: 'none', color: 'black' }}>
                <FontAwesomeIcon icon={faGithub} />
                View Repository
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
