
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/10 py-8 mt-16 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full border border-white/30 flex items-center justify-center">
                <span className="font-serif text-sm tracking-wider">III</span>
              </div>
              <h3 className="font-serif text-lg">Space Exploration</h3>
            </div>
            <p className="text-sm text-white/70">
              Discover the mysteries of our universe through cutting-edge technology and human ingenuity.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-serif text-lg">Navigation</h3>
            <div className="flex flex-col space-y-2">
              <NavLink to="/" className="text-sm text-white/70 hover:text-white transition-colors">
                Home
              </NavLink>
              <NavLink to="/about" className="text-sm text-white/70 hover:text-white transition-colors">
                About
              </NavLink>
              <NavLink to="/contact" className="text-sm text-white/70 hover:text-white transition-colors">
                Contact
              </NavLink>
              <NavLink to="/blog" className="text-sm text-white/70 hover:text-white transition-colors">
                Blog
              </NavLink>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-serif text-lg">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                <span className="text-sm">X</span>
              </a>
              <a href="#" className="h-10 w-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                <span className="text-sm">IG</span>
              </a>
              <a href="#" className="h-10 w-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                <span className="text-sm">YT</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Space Exploration. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
