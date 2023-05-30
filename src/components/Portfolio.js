import React from 'react';

function Portfolio() {
  return (
    <section id="projects">
      <div className="container">
        <h1 className="sub-title">Projects</h1>
        <div className="project-list">
          <div className="card">
            <h3>Project 1</h3>
            <p>
              Project 1 description
              <a href="https://didriklindberg.github.io/savvy-chef/">
                <img src="./assets/2023-04-13 23.03.34.gif" alt="Project1" />
              </a>
            </p>
          </div>
          <div className="card">
            <h3>Project 2</h3>
            <p>
              Project 2 description
              <a href="https://memomates.herokuapp.com/login">
                <img src="./assets/images/Screenshot 2023-05-11 105012.png" alt="Project2" />
              </a>
            </p>
          </div>
          <div className="card">
            <h3>Project 3</h3>
            <p>
              Project 3 description
              <a href="https://www.youtube.com/watch?v=eBGIQ7ZuuiU">
                <img src="./assets/images/7365622-middle.png" alt="Project3" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
