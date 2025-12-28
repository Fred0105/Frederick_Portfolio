import React from 'react';
import { ArrowRight } from 'lucide-react'; // Icon Panah
import './Projects.css';

const Projects = () => {
  // Data Project (Bisa ditambah/dikurangi)
  const projectList = [
    {
      category: "Software Application",
      title: "ExploreID",
      desc: "A high-frequency trading bot designed to detect and execute arbitrage opportunities between stocks and derivatives using Python and WebSocket API.",
      tags: ["Python", "Asyncio", "Pandas", "WebSockets"],
      link: "https://exploreid-one.vercel.app" 
    },
    {
      category: "Computer Vision",
      title: "Real-time Traffic Analysis System",
      desc: "Developed a YOLOv8-based model to classify and count vehicle types on toll roads, assisting in congestion monitoring and data collection.",
      tags: ["PyTorch", "YOLOv8", "OpenCV", "Deep Learning"],
      link: "#"
    },
    {
      category: "Financial Research",
      title: "Sentiment Analysis on Market News",
      desc: "Utilizing NLP transformers (BERT) to scrape and analyze 10,000+ financial news articles for predicting market bullish/bearish trends.",
      tags: ["NLP", "Transformers", "Scikit-learn", "Data Science"],
      link: "#"
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