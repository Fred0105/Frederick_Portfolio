import React from 'react';
import { Code2, Brain, Terminal } from 'lucide-react'; // Icon
import './Skills.css';

const Skills = () => {
  // Data Skill
  const categories = [
    {
      title: "Programming",
      icon: <Code2 size={35} color="#0f172a" />,
      skills: ["Python", "C", "JavaScript", "HTML & CSS", "Kotlin"]
    },
    {
      title: "AI Engineer",
      icon: <Brain size={35} color="#0f172a" />,
      skills: ["TensorFlow", "OpenCV", "Pandas & NumPy"]
    },
    {
      title: "Tools & Environment",
      icon: <Terminal size={35} color="#0f172a" />,
      skills: ["Git & GitHub", "Android Studio", "VS Code", "Jupyter Notebook"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        
        {/* Header Judul */}
        <div className="skills-header">
          <h2 className="skills-title">Technical Skills</h2>
          <p className="skills-subtitle">
          A flexible technical skill set for software development and AI-related tasks.
          </p>
        </div>

        {/* Grid Kartu */}
        <div className="skills-grid">
          {categories.map((item, index) => (
            <div key={index} className="skill-card">
              <div className="card-header">
                {item.icon}
                <h3 className="card-title">{item.title}</h3>
              </div>
              <div className="skill-tags">
                {item.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;