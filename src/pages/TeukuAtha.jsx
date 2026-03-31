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
      <main className="flex-1 flex items-center justify-center">
        <p className="text-gray-400 text-sm">Membuat portofolio</p>
      </main>
    </div>
  );
}