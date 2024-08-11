import React from 'react';
import "./Skills.css"

const Skills = () => {
  const skills = [
    { color: '#fcfc04', percentage: 95, name: 'HTML' },
    { color: '#04fc43', percentage: 95, name: 'CSS' },
    { color: '#fc00eb', percentage: 75, name: 'JavaScript' },
    { color: '#fcfc04', percentage: 85, name: 'Python' },
    { color: '#04fc43', percentage: 95, name: 'Flask' },
    { color: '#044efc', percentage: 80, name: 'Django' },
    { color: '#fc00eb', percentage: 65, name: 'MS Excel' },
    { color: '#044efc', percentage: 95, name: 'Git/GitHub' },
  ];

  return (
    <section className="progressskills" id="progressskills">
      <div className="projecttitle">
        <h2>SKILLS</h2>
      </div>
      <div className="container">
        {skills.map((skill, index) => (
          <div key={index} className={`cardz ${getCardClass(index)}`}>
            <div
              className="percent"
              style={{ '--clr': skill.color, '--num': skill.percentage }}
            >
              <div className="dot"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="num">
                <h2>
                  {skill.percentage}
                  <span>%</span>
                </h2>
                <p>{skill.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Utility function to get the class for each card (first, second, etc.)
const getCardClass = (index) => {
  const classes = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth'];
  return classes[index] || '';
};

export default Skills
