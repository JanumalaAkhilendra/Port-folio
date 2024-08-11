import React, { useState, useEffect } from 'react';
import "./Navbar.css"

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavBar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="header" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <div
        className={`topnav ${isNavOpen ? 'responsive' : ''}`}
        id="myTopnav"
        style={{
          width: isScrolled ? '100%' : '80%',
          backgroundColor: isScrolled ? 'rgba(6, 18, 33, 1)' : 'rgba(6, 18, 33, 0.8)',
          transition: 'all 0.3s ease',
        }}
      >
        <a href="#home" style={{ marginLeft: '5%' }}>Home</a>
        <a href="#educations" style={{ marginLeft: '5%' }}>Education</a>
        <a href="#Experience" style={{ marginLeft: '5%' }}>Experience</a>
        <a href="#progressskills" style={{ marginLeft: '5%' }}>Skills</a>
        <a href="#projectsection" style={{ marginLeft: '5%' }}>Projects</a>
        <a href="#factz" style={{ marginLeft: '5%' }}>Facts</a>
        <a href="#footer" style={{ marginLeft: '5%' }}>Contact</a>
        <a  style={{ fontSize: '15px' }} className="icon" onClick={toggleNavBar}>
        </a>
      </div>
    </header>
  );
};

export default Header;
