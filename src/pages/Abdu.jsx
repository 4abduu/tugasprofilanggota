import profileImg from '../abdu-foto-profil.jpg'
import { Link } from 'react-router-dom'

function Abdu() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">

      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Card */}
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl max-w-lg w-full p-8">

      {/* Top Bar + Tombol Back */}
      <header className="relative z-10 border-b border-white/5">
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
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-slate-500 font-mono">Online</span>
          </div>
        </div>
      </header>
      
        {/* Header Label */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <span className="text-xs font-mono text-slate-400 tracking-widest uppercase">Profil Mahasiswa</span>
        </div>

        {/* Foto Profil */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[3px]">
              <img
                src={profileImg}
                alt="Foto Profil"
                className="w-full h-full rounded-full object-cover border-4 border-slate-900"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900" />
          </div>
        </div>

        {/* Nama */}
        <h1 className="text-2xl font-bold text-white text-center mb-1">
          Abdurrahman Ichwan
        </h1>
        <p className="text-blue-400 text-sm text-center font-medium mb-6">
          Mahasiswa Aktif
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white/5 rounded-xl p-3 border border-white/5">
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">Kelas</p>
            <p className="text-sm text-white font-medium">T2F</p>
          </div>
          <div className="bg-white/5 rounded-xl p-3 border border-white/5">
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">Jurusan</p>
            <p className="text-sm text-white font-medium">Teknologi Informasi</p>
          </div>
          <div className="bg-white/5 rounded-xl p-3 border border-white/5 col-span-2">
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">Domisili</p>
            <p className="text-sm text-white font-medium">Malang, Jawa Timur</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-6" />

        {/* Tentang Diri */}
        <div>
          <h2 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">Tentang Diri</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Saya merupakan pribadi yang memiliki rasa ingin tahu yang tinggi, terutama dalam hal pembelajaran dan pengembangan diri. Dalam mengerjakan tugas atau proyek, saya cenderung berusaha memahami setiap proses secara mendalam, tidak hanya berfokus pada hasil akhir. Saya juga terbiasa untuk teliti dan detail dalam menyelesaikan pekerjaan, meskipun terkadang saya memerlukan waktu lebih untuk memastikan semuanya berjalan dengan baik dan sesuai harapan.

            Selain itu, saya adalah pribadi yang mudah beradaptasi dan mampu menjalin komunikasi yang baik dengan orang lain, khususnya dengan lingkungan yang sudah saya kenal. Saya juga memiliki sikap loyal dan menghargai hubungan dengan orang lain, sehingga saya cenderung menjaga kepercayaan dan menghormati perasaan orang di sekitar saya.

            Di sisi lain, saya memiliki ketertarikan dalam bidang teknologi, khususnya dalam pengembangan website. Hal ini mendorong saya untuk terus belajar dan mengasah kemampuan agar dapat menghasilkan karya yang bermanfaat. Secara keseluruhan, saya adalah pribadi yang mengutamakan keseimbangan antara pemikiran logis dan perasaan dalam menjalani kehidupan sehari-hari.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-[10px] font-mono text-slate-600">Universitas Brawijaya</span>
          <span className="text-[10px] font-mono text-slate-600">2026</span>
        </div>
      </div>
    </div>
  )
}

export default Abdu