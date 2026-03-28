'use client'

import { motion } from 'framer-motion'

export function Navigation() {
  return (
    <motion.header
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 h-16 px-8 rounded-full backdrop-blur-xl bg-zinc-950/60 border border-zinc-800/40 shadow-lg"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between h-full gap-12">
        {/* Brand */}
        <div className="text-lg font-black tracking-tighter text-white whitespace-nowrap">Wexel</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          {['Methodology', 'Workstreams', 'Security', 'FAQ'].map((item, idx) => (
            <a
              key={`nav-${idx}`}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300 cursor-pointer"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <button className="px-5 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-all duration-300 whitespace-nowrap">
          Book Audit
        </button>
      </div>
    </motion.header>
  )
}
