import React from 'react';
import { Download } from 'lucide-react'; // Icon Download
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Label */}
      <span className="hero-label">PERSONAL PORTFOLIO</span>

      {/* Judul */}
      <h1 className="hero-title">
        Hello, I'm Frederick Malcolm.
      </h1>

      {/* Sub-judul */}
      <h2 className="hero-subtitle">
      Computer Science Student | Software & AI Engineer
      </h2>

      {/* Deskripsi */}
      <div className="hero-desc-container">
        <p className="hero-desc">
        Interested in software development, deep learning, and data-driven applications, with hands-on experience through academic and personal projects.
        </p>
      </div>

      {/* Tombol Aksi */}
      <div className="hero-buttons">
        <a href="#projects" className="btn-primary">View Projects</a>
        <a href="#contact" className="btn-outline">Contact Me</a>
        
        {/* Tombol Download CV */}
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline btn-icon">
          Download CV <Download size={18} />
        </a>
      </div>
    </section>
  );
};

export default Hero;