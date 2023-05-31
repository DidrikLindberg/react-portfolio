import React from 'react';

function Resume() {
  const proficiencies = [
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Web Design'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'RESTful APIs'],
    },
    {
      title: 'Other Skills',
      skills: ['Git', 'Pseudo-Code', 'Problem Solving', 'Debugging'],
    },
  ];

  return (
    <section id="resume" className="resume">
      <div className="container">
        <h1 className="sub-title">Resume</h1>
        <div className="resume-content">
          <a href="/path/to/resume.pdf" download="resume.pdf" className="btn btn-primary">
            Download Resume
          </a>
          <div className="proficiency-list">
            {proficiencies.map((proficiency, index) => (
              <div key={index} className="proficiency-section">
                <h2 className="section-title">{proficiency.title}</h2>
                <ul className="skills-list">
                  {proficiency.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="skill-item">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
