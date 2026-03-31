import { Link } from 'react-router-dom'

import fotoAbdu from '../abdu-foto-profil.jpg'
import fotoAtha from '../foto-atha.jpg'

const teamMembers = [
  {
    name: "Abdurrahman Ichwan",
    role: "Anggota 1",
    url: "/abdu",
    image: fotoAbdu,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Teuku Atha Athaya Nafi",
    role: "Anggota 3",
    url: "/teuku-atha-athaya-nafi",
    image: fotoAtha,
    color: "from-purple-500 to-pink-500",
  },
]

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">

      {/* Background Glow */}
      <div className="fixed top-0 left-1/3 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-1/3 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
              UB
            </div>
            <div>
              <h1 className="text-white font-bold text-lg leading-tight">Tim Kami</h1>
              <p className="text-slate-500 text-xs font-mono">Universitas Brawijaya</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-slate-400 font-mono">{teamMembers.length} anggota</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-16">

        {/* Judul */}
        <div className="text-center mb-12">
          <p className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-3">Project Team</p>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-3">Halaman Profil Tim</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
            Klik kartu profil di bawah untuk melihat detail masing-masing anggota tim.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full">

          {teamMembers.map((member, index) => (
            <Link
              key={index}
              to={member.url}
              className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Gradient top bar */}
              <div className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Foto */}
              <div className="flex justify-center mb-5">
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${member.color} p-[2px] group-hover:scale-105 transition-transform duration-300`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-white font-semibold text-base mb-1 group-hover:text-blue-300 transition-colors">
                  {member.name}
                </h3>
                <p className="text-slate-500 text-xs font-mono">{member.role}</p>
              </div>

              {/* Arrow indicator */}
              <div className="absolute bottom-4 right-4 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}

        </div>

        {/* Footer note */}
        <p className="mt-12 text-[11px] text-slate-600 font-mono">
          ReactJS + Tailwind CSS — Tugas Project Implementation
        </p>
      </main>
    </div>
  )
}

export default Dashboard