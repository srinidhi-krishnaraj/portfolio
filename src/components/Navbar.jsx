import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Srinidhi 💫</h2>
      <ul className="nav-links">
        <li onClick={() => scrollToSection('about')}>About</li>
        <li onClick={() => scrollToSection('projects')}>Projects</li>
        <li onClick={() => scrollToSection('achievements')}>Achievements</li>
        <li onClick={() => scrollToSection('experience')}>Experience</li>
        <li onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
