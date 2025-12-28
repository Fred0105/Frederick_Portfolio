import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import CSS yang tadi dibuat

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Fungsi untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        {/* Logo / Nama Brand */}
        <a href="#home" className="logo">
          Frederick Malcolm
        </a>

        {/* Menu Navigasi */}
        <ul className="nav-links">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;