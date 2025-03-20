
import React, { useEffect, useRef } from 'react';
import StarBackground from '../components/StarBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const About = () => {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const addToRefs = (el: HTMLElement | null, index: number) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current[index] = el;
    }
  };

  return (
    <div className="min-h-screen bg-background text-white relative overflow-hidden">
      <StarBackground />
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl mx-auto">
          <div
            ref={(el) => addToRefs(el, 0)}
            className="opacity-0 translate-y-10 transition-all duration-1000 delay-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="index-number">01 — 03</span>
            </div>
          </div>
          
          <div
            ref={(el) => addToRefs(el, 1)}
            className="opacity-0 translate-y-10 scale-95 transition-all duration-1000 delay-300 will-change-transform"
          >
            <h1 className="text-6xl md:text-7xl font-serif leading-tight mb-8">
              About Us.
            </h1>
          </div>
          
          <div className="space-y-8">
            <div
              ref={(el) => addToRefs(el, 2)}
              className="opacity-0 translate-y-10 transition-all duration-1000 delay-300 will-change-transform"
            >
              <p className="text-lg text-white/90">
                We are a team of passionate researchers, engineers, and dreamers dedicated to exploring the vast unknown of our universe. Founded in 2020, our mission is to advance human knowledge of space and develop technologies that will one day allow humanity to become a multi-planetary species.
              </p>
            </div>
            
            <div
              ref={(el) => addToRefs(el, 3)}
              className="opacity-0 translate-y-10 transition-all duration-1000 delay-300"
            >
              <h2 className="text-2xl font-serif mb-4">Our Vision</h2>
              <p className="text-white/80">
                We envision a future where humanity has a sustainable presence beyond Earth, where we have unlocked the mysteries of our solar system and begun to explore the stars. Through technological innovation and scientific discovery, we aim to inspire the next generation of space explorers and contribute to humanity's greatest adventure.
              </p>
            </div>
            
            <div
              ref={(el) => addToRefs(el, 4)}
              className="opacity-0 translate-y-10 transition-all duration-1000 delay-300"
            >
              <h2 className="text-2xl font-serif mb-4">Our Approach</h2>
              <p className="text-white/80">
                We believe in collaborative innovation. By working with international space agencies, private companies, and academic institutions, we leverage collective expertise to solve the complex challenges of space exploration. Our interdisciplinary approach combines aerospace engineering, robotics, planetary science, and astronomy to push the boundaries of what's possible.
              </p>
            </div>
            
            <div
              ref={(el) => addToRefs(el, 5)}
              className="opacity-0 translate-y-10 transition-all duration-1000 delay-300"
            >
              <h2 className="text-2xl font-serif mb-4">Current Initiatives</h2>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>Developing advanced propulsion systems for interplanetary travel</li>
                <li>Creating sustainable life support systems for long-duration space missions</li>
                <li>Researching the effects of radiation on human physiology in deep space</li>
                <li>Building next-generation telescopes for exoplanet discovery</li>
                <li>Designing robotics for extraterrestrial resource utilization</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
