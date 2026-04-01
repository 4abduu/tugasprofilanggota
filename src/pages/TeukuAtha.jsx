import { motion } from 'framer-motion'
import profileImg from '../assets/profile.jpg'
import { Link } from 'react-router-dom'


<img src={profileImg} />

const GithubIcon = (p) => (
  <svg {...p} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const InstagramIcon = (p) => (
  <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const LinkedinIcon = (p) => (
  <svg {...p} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const PhoneIcon = (p) => (
  <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
)

/* Tool Icons */
const GitBranch = (p) => (
  <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" x2="6" y1="3" y2="15" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </svg>
)

const Code2 = (p) => (
  <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m18 16 4-4-4-4" />
    <path d="m6 8-4 4 4 4" />
    <path d="m14.5 4-5 16" />
  </svg>
)

const Package = (p) => (
  <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m7.5 4.27 9 5.15" />
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </svg>
)

const socialLinks = [
  {
    name: 'Github',
    icon: GithubIcon,
    url: 'https://4abduu.github.io/tugasprofilanggota/teuku-atha-athaya-nafi',
    desc: 'Link Deploy GitHub Pages',
  },
  {
    name: 'LinkedIn',
    icon: LinkedinIcon,
    url: 'https://linkedin.com/in/teuku-atha-athaya-nafi-276505373',
    desc: 'linkedin.com',
  },
  {
    name: 'Instagram',
    icon: InstagramIcon,
    url: 'https://www.instagram.com/athnfio',
    desc: '@athnfio',
  },
  {
    name: 'WhatsApp',
    icon: PhoneIcon,
    url: 'https://wa.me/6281385179438',
    desc: '+62 813-8517-9438',
  },
]

const infoItems = [
  { label: 'Kelas', value: 'T2F' },
  { label: 'Jurusan', value: 'Teknologi Informasi' },
  { label: 'Domisili', value: 'Malang, Jawa Timur' },
  { label: 'Status', value: 'Mahasiswa Aktif' },
]

const tools = [
  { name: 'Git', icon: GitBranch, color: '#f05032', desc: 'Version Control' },
  { name: 'GitHub', icon: GithubIcon, color: '#ffffff', desc: 'Git Hosting' },
  { name: 'VS Code', icon: Code2, color: '#007acc', desc: 'Code Editor' },
  { name: 'NPM', icon: Package, color: '#cb3837', desc: 'Package Manager' },
]

function TeukuAtha() {
  return (
    <div
      className="min-h-screen relative overflow-hidden text-white"
      style={{
        background: 'linear-gradient(180deg, #0f0b2e 0%, #1e1152 25%, #3b1f7e 50%, #7c3aed 75%, #a855f7 100%)',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <main className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full max-w-4xl"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
            <header className="border-b border-white/5">
              <div className="px-5 sm:px-6 py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="max-w-2xl mx-auto px-6 py-4 flex items-center gap-4">
                    <Link
                      to="/"
                      className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/[0.06] flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/[0.12] transition-all">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium hidden sm:inline">Kembali</span>
                    </Link>
                    <div className="flex-1" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Teuku Atha Athaya Nafi</p>
                    <p className="text-xs text-slate-400">Personal Profile</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs text-slate-500 font-mono">Online</span>
                </div>
              </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-0">
              <div className="p-6 sm:p-8 lg:border-r lg:border-white/5 flex flex-col items-center text-center">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[3px] mb-5">
                  <img
                    src={profileImg}
                    alt="Foto Profil Teuku Atha"
                    className="w-full h-full rounded-full object-cover border-4 border-slate-900"
                  />
                </div>

                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-[11px] font-mono text-slate-300 tracking-widest uppercase">Profil Mahasiswa</span>
                </div>

                <p className="text-blue-300 text-sm font-medium mb-6">Mahasiswa Teknologi Informasi</p>

                <div className="w-full grid grid-cols-2 gap-3 text-left mb-6">
                  {infoItems.map((item) => (
                    <div key={item.label} className="bg-white/5 rounded-2xl p-4 border border-white/5">
                      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-sm text-white font-medium leading-snug">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="w-full">
                  <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3 text-left">My Tools</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {tools.map((tool) => (
                      <motion.div
                        key={tool.name}
                        whileHover={{ y: -3, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white/5 rounded-2xl p-4 border border-white/5 hover:border-white/20 transition-all cursor-default group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3 group-hover:bg-white/15 transition-colors mx-auto">
                          <tool.icon className="w-5 h-5" style={{ color: tool.color }} />
                        </div>
                        <p className="text-xs font-medium text-white text-center mb-1">{tool.name}</p>
                        <p className="text-[10px] text-slate-400 text-center">{tool.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="mb-8">
                  <h2 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">Tentang Diri</h2>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-justify">
                    Saya orang yang sedang belajar di dunia teknologi informasi. Saya memiliki ketertarikan besar
                    dalam pengembangan teknologi, terutama dalam bidang cybersecurity. Untuk saat ini saya sedang
                    mendalami berbagai teknologi seperti React, JavaScript, Node.js, dan Tailwind CSS untuk
                    membangun aplikasi web yang menarik dan fungsional. Saya percaya bahwa teknologi dapat
                    mengubah dunia menjadi lebih baik, dan saya ingin menjadi bagian dari perubahan tersebut.
                    Saya selalu senang mempelajari hal-hal baru pada dunia coding. Selain coding, saya juga aktif
                    mengikuti komunitas developer yang diselenggarakan kampus dan berbagi pengetahuan melalui
                    berbagai platform. Tujuan saya adalah menjadi developer yang handal dan berkontribusi pada
                    proyek-proyek open source yang bermanfaat bagi banyak orang.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">Social Links</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.15 }}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                      >
                        <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                          <social.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-white">{social.name}</p>
                          <p className="text-xs text-slate-400 truncate">{social.desc}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <span className="text-[10px] font-mono text-slate-600">Universitas Brawijaya</span>
                  <span className="text-[10px] font-mono text-slate-600">2026</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  )
}

export default TeukuAtha