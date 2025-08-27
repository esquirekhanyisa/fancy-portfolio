import React from "react";
import "./Skills.css";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "Git", level: 85 },
  {name:"C#", level: 85},
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-list">
        {skills.map(({ name, level }) => (
          <div key={name} className="skill-item">
            <div className="skill-name">{name}</div>
            <div className="skill-bar">
              <div
                className="skill-level"
                style={{ width: `${level}%` }}
                aria-label={`${name} skill level: ${level}%`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
