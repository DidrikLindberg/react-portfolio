import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


function About() {
  return (
    <section id="about" className="container">
      <div className="avatar">
          <FontAwesomeIcon icon={faUserCircle} size="4x" />
        </div>
      <h1 className="sub-title">About Me</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">About</h3>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget interdum lorem odio in est. Nam commodo urna eget nunc cursus interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis laoreet eros quis odio tincidunt euismod. Proin ut diam ipsum. Donec vulputate, erat sit amet rutrum rutrum, odio nulla semper sem, id pulvinar felis velit at neque.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Experience</h3>
              <ul className="list-group">
                <li className="list-group-item">Company A - Software Developer</li>
                <li className="list-group-item">Company B - Web Developer</li>
                <li className="list-group-item">Company C - Frontend Engineer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
