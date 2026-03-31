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

/* ── TYPEWRITER ── */
function TypeWriter({ texts, speed = 80, deleteSpeed = 50, pauseDuration = 1500 }) {
  const [displayText, setDisplayText] = useState('');
  const phaseRef = useRef('typing');
  const indexRef = useRef(0);
  const timerRef = useRef();

  useEffect(() => {
    const tick = () => {
      const idx = indexRef.current;
      const currentText = texts[idx];
      const phase = phaseRef.current;
      if (phase === 'typing') {
        if (displayText.length < currentText.length) { timerRef.current = setTimeout(() => setDisplayText(currentText.slice(0, displayText.length + 1)), speed); }
        else { phaseRef.current = 'paused'; timerRef.current = setTimeout(tick, pauseDuration); }
      } else if (phase === 'paused') { phaseRef.current = 'deleting'; timerRef.current = setTimeout(tick, 0); }
      else if (phase === 'deleting') {
        if (displayText.length > 0) { timerRef.current = setTimeout(() => setDisplayText(displayText.slice(0, -1)), deleteSpeed); }
        else { phaseRef.current = 'switching'; timerRef.current = setTimeout(tick, 0); }
      } else { indexRef.current = (idx + 1) % texts.length; phaseRef.current = 'typing'; timerRef.current = setTimeout(tick, 0); }
    };
    tick();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [displayText, texts, speed, deleteSpeed, pauseDuration]);

  return (
    <span className="inline-flex items-center">
      {displayText}
      <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.7, ease: 'steps(2)' }} className="ml-0.5 inline-block w-[3px] h-[1em] bg-[#60a5fa] align-middle" />
    </span>
  );
}

/* ── TOOLS ICONS ── */
const GitBranch = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>;
const GithubIcon = (p) => <svg {...p} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;
const Code2 = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>;
const Package = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>;

/* ── TOOLS ── */
const tools = [
  { name: 'Git', icon: GitBranch, color: '#f05032', desc: 'Version Control' },
  { name: 'Github', icon: GithubIcon, color: '#ffffff', desc: 'Git Hosting' },
  { name: 'Vscode', icon: Code2, color: '#007acc', desc: 'Code Editor' },
  { name: 'Npm', icon: Package, color: '#cb3837', desc: 'Package Manager' },
];

function ToolCard({ tool }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="bg-[#6366f1]/80 hover:bg-[#7c3aed] rounded-2xl p-6 sm:p-8 flex flex-col items-center gap-1 sm:gap-2 cursor-default transition-colors overflow-hidden"
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center bg-white/10">
        <tool.icon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: tool.color }} />
      </div>
      <span className="text-white font-medium text-sm sm:text-base mt-1">{tool.name}</span>
      <motion.p
        initial={false}
        animate={hovered ? { opacity: 1, height: 'auto', marginTop: 4 } : { opacity: 0, height: 0, marginTop: 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="text-yellow-300 font-medium text-[10px] sm:text-xs overflow-hidden"
      >
        {tool.desc}
      </motion.p>
    </motion.div>
  );
}

function ToolsSection() {
  return (
    <section id="tools" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12">My Tools</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {tools.map((tool) => <ToolCard key={tool.name} tool={tool} />)}
      </div>
    </section>
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
          <span className="text-[#AE75DA]">WEB</span>{' '}
          <span className="text-white">DEVELOPER</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-white/80 text-base sm:text-lg md:text-xl mb-3 sm:mb-4 h-7 sm:h-8 md:h-9 flex items-center justify-center"
        >
          <TypeWriter texts={['Tech Enthusiast', 'Technology Information Student']} speed={80} deleteSpeed={45} pauseDuration={1500} />
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
        <ToolsSection />
      </main>
    </div>
  );
}