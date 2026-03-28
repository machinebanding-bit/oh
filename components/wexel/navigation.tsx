'use client'

import { motion } from 'framer-motion'

export function Navigation() {
  return (
    <motion.header
      className="fixed h-20 w-full z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between h-full px-6 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="text-2xl font-black tracking-tighter text-white">Wexel</div>

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
        <button className="px-5 py-2 rounded-full bg-transparent border border-zinc-700 text-white text-sm font-medium hover:bg-white hover:text-black transition-all duration-300">
          Book an Efficiency Audit
        </button>
      </div>
    </motion.header>
  )
}
