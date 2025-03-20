
import React, { useEffect, useRef } from 'react';
import StarBackground from '../components/StarBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const blogPosts = [
  {
    id: 1,
    title: "The Future of Interplanetary Travel",
    excerpt: "Exploring the latest advancements in propulsion systems that could make Mars a three-month journey instead of nine.",
    date: "June 15, 2023",
    author: "Dr. Elena Vasquez",
    category: "Technology"
  },
  {
    id: 2,
    title: "Life on Europa: What We Might Find",
    excerpt: "Jupiter's moon Europa has a vast ocean beneath its icy crust. Here's what scientists believe we might discover there.",
    date: "May 22, 2023",
    author: "Dr. Michael Chen",
    category: "Research"
  },
  {
    id: 3,
    title: "The Psychology of Long-Duration Space Missions",
    excerpt: "Understanding the mental challenges astronauts face during multi-year missions and how we're preparing them.",
    date: "April 10, 2023",
    author: "Dr. Sarah Johnson",
    category: "Human Factors"
  },
  {
    id: 4,
    title: "Quantum Computing and Space Navigation",
    excerpt: "How quantum computing could revolutionize the way spacecraft navigate through deep space.",
    date: "March 5, 2023",
    author: "Dr. James Wilson",
    category: "Technology"
  },
  {
    id: 5,
    title: "The Search for Earth 2.0",
    excerpt: "Reviewing the most promising exoplanets that could potentially support human life in the future.",
    date: "February 18, 2023",
    author: "Dr. Aisha Patel",
    category: "Astronomy"
  }
];

const Blog = () => {
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
        <div className="max-w-5xl mx-auto">
          <div
            ref={(el) => addToRefs(el, 0)}
            className="opacity-0 translate-y-10 transition-all duration-1000 delay-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="index-number">03 — 03</span>
            </div>
          </div>
          
          <div
            ref={(el) => addToRefs(el, 1)}
            className="opacity-0 translate-y-10 transition-all duration-1000 delay-500"
          >
            <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-8">
              Latest Research.
            </h1>
          </div>
          
          <div className="space-y-12">
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                ref={(el) => addToRefs(el, index + 2)}
                className="opacity-0 translate-y-10 transition-all duration-1000"
                style={{ transitionDelay: `${700 + index * 200}ms` }}
              >
                <article className="border-b border-white/10 pb-8">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
                    <span className="text-xs px-3 py-1 bg-white/10 text-white/70">{post.category}</span>
                    <span className="text-xs text-white/50">{post.date}</span>
                    <span className="text-xs text-white/50">By {post.author}</span>
                  </div>
                  
                  <h2 className="text-2xl font-serif mb-3 hover:text-white/80 transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  
                  <p className="text-white/70 mb-6">
                    {post.excerpt}
                  </p>
                  
                  <button className="text-sm flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
                    Read Article
                    <span className="h-px w-6 bg-white group-hover:w-10 transition-all"></span>
                  </button>
                </article>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
