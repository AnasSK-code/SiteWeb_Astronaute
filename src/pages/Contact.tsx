
import React, { useEffect, useRef, useState } from 'react';
import StarBackground from '../components/StarBackground';
import Navbar from '../components/Navbar';
import { toast } from "../components/ui/use-toast";
import Footer from '../components/Footer';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "We'll get back to you soon.",
      });
      setName('');
      setEmail('');
      setMessage('');
      setSubmitting(false);
    }, 1500);
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
              <span className="index-number">02 — 03</span>
            </div>
          </div>
          
          <div
            ref={(el) => addToRefs(el, 1)}
            className="opacity-0 translate-y-10 transition-all duration-1000 delay-500"
          >
            <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-8">
              Contact Us.
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div
              ref={(el) => addToRefs(el, 2)}
              className="opacity-0 translate-y-10 transition-all duration-1000 delay-700"
            >
              <div className="space-y-6">
                <p className="text-white/80">
                  Interested in our research or collaboration opportunities? Get in touch with our team. We're always looking for partners who share our vision for the future of space exploration.
                </p>
                
                <div className="space-y-4">
                  <div className="border-b border-white/10 pb-4">
                    <p className="text-sm text-white/60 mb-1">Email</p>
                    <p className="text-white">contact@space-exploration.com</p>
                  </div>
                  
                  <div className="border-b border-white/10 pb-4">
                    <p className="text-sm text-white/60 mb-1">Headquarters</p>
                    <p className="text-white">1234 Cosmic Boulevard<br />Houston, TX 77058</p>
                  </div>
                  
                  <div className="border-b border-white/10 pb-4">
                    <p className="text-sm text-white/60 mb-1">Phone</p>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div
              ref={(el) => addToRefs(el, 3)}
              className="opacity-0 translate-y-10 transition-all duration-1000 delay-900"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/60 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-white/30 transition"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm text-white/60 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-white/30 transition"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm text-white/60 mb-2">Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-white/30 transition"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
                >
                  {submitting ? (
                    <>Sending...<span className="ml-2 animate-pulse">·</span></>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />

    </div>
  );
};

export default Contact;
