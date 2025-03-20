
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoimg from '../image/logo.png';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-md py-4' : 'py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="logo">
          <NavLink to="/" className="flex items-center">
          <div className="h-18 w-12 rounded-full border border-white/30 flex items-center justify-center overflow-hidden">
            <img 
              src = {logoimg} // Remplace par le chemin correct de ton image
              alt="Icon" 
              className="h-full w-full object-cover"
            />
          </div>

          </NavLink>
        </div>
        
        <nav className="flex items-center gap-10">
          <NavLink to="/about" className="nav-link">
            .About
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            .Contact
          </NavLink>
          <NavLink to="/blog" className="nav-link">
            .Blog
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
