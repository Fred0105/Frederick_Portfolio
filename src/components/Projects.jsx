import React from 'react';
import { ArrowRight } from 'lucide-react'; // Icon Panah
import './Projects.css';

const Projects = () => {
  // Data Project (Bisa ditambah/dikurangi)
  const projectList = [
    {
      category: "Software Application",
      title: "ExploreID - University Project",
      desc: "A tourism software application that allows users to search for destinations and tour guides, while providing personalized recommendations using an AI-based recommender system.",
      tags: ["Python", "React", "Pandas", "SupaBase", "JavaScript"],
      link: "https://exploreid-one.vercel.app" 
    },
    {
      category: "Personal Portfolio",
      title: "Personal Portfolio Website",
      desc: "Designed and developed a responsive personal portfolio website to showcase projects, technical skills, and experience.",
      tags: ["JavaScript", "CSS", "HTML", "Vercel", "Json"],
      link: "https://frederickportfolio-nine.vercel.app/"
    },
    {
      category: "AI/Deep Learning",
      title: "ASL Recognition App",
      desc: "Developed a deep learning-based system to recognize American Sign Language (ASL) hand gestures in real time using computer vision techniques.",
      tags: ["MediaPipe", "OpenCV", "Data Science", "Python", "Sklearn"],
      link: "https://github.com/Fred0105/ASL-Hand-Pattern-Recognition"
    },
    {
      category: "Natural Language Processing",
      title: "Sentiment Analysis",
      desc: "Analyzed sentiment from Ethereum-related discussions on X (Twitter) and examined its correlation with price volatility using natural language processing techniques.",
      tags: ["Python", "Vader", "NLTK", "Matplotlib"],
      link: "https://colab.research.google.com/drive/1lrJ2Hv9uAPXytBbzm-GpR_1g0-7mogCY?usp=sharing"
    },
    {
      category: "Data Science / Machine Learning (Academic)",
      title: "Dividend-Based Stock Price Analysis Using Machine Learning",
      desc: "An academic machine learning project analyzing stock price behavior around dividend periods in Indonesia’s banking and energy sectors using Random Forest and XGBoost.",
      tags: ["Python", "RandomForest", "Data Analysis", "Machine Learning"],
      link: "/rm.pdf"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        
        <div className="projects-header">
          <h2 className="projects-title">Selected Projects</h2>
          <p className="projects-subtitle">
            A showcase of my research and technical projects in quantitative finance and AI.
          </p>
        </div>

        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>

                <a href={project.link} className="project-link">
                  View Projects <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;