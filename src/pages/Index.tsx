
import React, { useEffect, useRef } from 'react';
import StarBackground from '../components/StarBackground';
import DestinationCard from '../components/DestinationCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bgImage from '/src/image/background.webp';

const Index = () => {
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="fixed inset-0 z-0">
        <img
          src={bgImage} // Utilisation de l'import
          alt="Space background"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => (e.currentTarget.src = '/fallback-image.jpg')} // Image de secours si erreur
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>
      
      {/* Star animation overlay */}
      <StarBackground />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen text-white">
        <Navbar />
        
        <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
  {/* Section titre et description */}
  <div className="space-y-6 max-w-4xl">
    {/* Index + Numéro */}
    <div
      ref={(el) => addToRefs(el, 0)}
      className="opacity-0 translate-y-10 transition-all duration-1000 delay-500"
    >
      <div className="flex items-center justify-center gap-4">
        <span className="index-number">01 — 03</span>
      </div>
    </div>

    {/* Titre principal */}
    <div
      ref={(el) => addToRefs(el, 1)}
      className="opacity-0 translate-y-10 transition-all duration-1000 delay-700"
    >
      <h1 className="text-6xl md:text-8xl font-serif leading-tight 
               text-white 
               drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] 
               md:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] 
               lg:drop-shadow-[0_0_30px_rgba(0,150,255,0.7)]">
  Space<br />
  Exploration
</h1>

    </div>

    {/* Description */}
    <div
      ref={(el) => addToRefs(el, 2)}
      className="opacity-0 translate-y-10 transition-all duration-1000 delay-900"
    >
      <p className="text-lg text-white/70 max-w-lg mx-auto">
        The ongoing discovery and exploration of celestial structures in outer space
        by means of continuously evolving and growing space technology.
      </p>
    </div>
  </div>

  {/* Section Cartes de Destination */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-5xl">
    <div
      ref={(el) => addToRefs(el, 3)}
      className="opacity-0 translate-y-10 transition-all duration-1000 delay-1100"
    >
      <DestinationCard
        title="The Moon"
        description="The Earth's largest natural satellite and the fifth largest satellite in the solar system."
      />
    </div>

    <div
      ref={(el) => addToRefs(el, 4)}
      className="opacity-0 translate-y-10 transition-all duration-1000 delay-1300"
    >
      <DestinationCard
        title="The Sun"
        description="The star at the center of the Solar System, a nearly perfect sphere of hot plasma."
      />
    </div>

    <div
      ref={(el) => addToRefs(el, 5)}
      className="opacity-0 translate-y-10 transition-all duration-1000 delay-1500"
    >
      <DestinationCard
        title="Mars"
        description="The fourth planet from the Sun and the second-smallest planet in the Solar System."
      />
    </div>
  </div>
</main>

        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
