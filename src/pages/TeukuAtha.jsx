import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cloud = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>;
const ChevronDown = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f0b2e]/90 backdrop-blur-md shadow-lg shadow-purple-900/20' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => scrollTo('home')} className="hidden sm:flex items-center gap-2 bg-[#6366f1] hover:bg-[#7c3aed] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer">
            <Cloud className="w-4 h-4" /> Ready to innovate
          </motion.button>
          <button onClick={() => scrollTo('home')} className="sm:hidden flex items-center gap-2 text-white font-bold text-lg cursor-pointer">
            <Cloud className="w-5 h-5 text-[#6366f1]" /> Portfolio
          </button>
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Contact'].map((item) => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-white hover:text-[#a78bfa] font-medium text-sm sm:text-base transition-colors relative group cursor-pointer">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#a78bfa] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer">
            <motion.span animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 bg-white" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-0.5 bg-white" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 bg-white" />
          </button>
        </div>
      </div>
      <motion.div initial={false} animate={menuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }} className="md:hidden overflow-hidden bg-[#0f0b2e]/95 backdrop-blur-md">
        <div className="px-6 py-4 flex flex-col gap-4">
          {['Home', 'About', 'Contact'].map((item) => (
            <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-white hover:text-[#a78bfa] font-medium text-base transition-colors text-left cursor-pointer">{item}</button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}

const techStack = ['React', 'Javascript', 'Node.js', 'Tailwind'];

function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#6366f1]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-3xl" />
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-4 sm:mb-6"
        >
          <span className="text-[#60a5fa]">WEB</span>{' '}
          <span className="text-white">DEVELOPER</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-white/80 text-base sm:text-lg md:text-xl mb-3 sm:mb-4"
        >
          Tech Enthusiast / Technology Information Student
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-gray-400 text-sm sm:text-base md:text-lg italic mb-8 sm:mb-10"
        >
          Create. Connect. Captivate.
        </motion.p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {techStack.map((tech) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }}
              className="inline-block bg-[#6366f1] hover:bg-[#7c3aed] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-gray-400 text-xs">Scroll Down</span>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function TeukuAtha() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: 'linear-gradient(180deg, #0f0b2e 0%, #1e1152 25%, #3b1f7e 50%, #7c3aed 75%, #a855f7 100%)',
        backgroundAttachment: 'fixed',
        color: '#ffffff',
      }}
    >
      <Navbar />
      <main className="flex-1">
        <HeroSection />
      </main>
    </div>
  );
}