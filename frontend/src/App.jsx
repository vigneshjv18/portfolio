import React, { useEffect, useState } from 'react';
import { getPortfolioData } from './services/api';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPortfolioData();
      setData(result);
      setLoading(false);

      // Track viewer
      try {
        await fetch('http://localhost:8005/api/track', { method: 'POST' });
      } catch (e) {
        console.error("Tracking failed", e);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
        <p>Failed to load portfolio data. Please ensure the backend is running.</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 min-h-screen text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-purple-500">VJ.</a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
            <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
            <a href="#education" className="hover:text-purple-400 transition-colors">Education</a>
            <a href="#achievements" className="hover:text-purple-400 transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-white/10">
            <div className="flex flex-col p-4 space-y-4">
              <a href="#home" className="hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#skills" className="hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#experience" className="hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Experience</a>
              <a href="#education" className="hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Education</a>
              <a href="#achievements" className="hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Achievements</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero data={data.profile} />
        <Skills data={data.skills} />
        <Experience data={data.experience} />
        <Education data={data.education} />
        <Achievements data={data.achievements} />
        <Certifications data={data.certifications} />
        <Contact data={data.contact} />
      </main>

      <footer className="bg-slate-950 py-8 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Vignesh J. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
