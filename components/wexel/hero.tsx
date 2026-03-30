'use client'

import { motion } from 'framer-motion'
import InteractiveNeuralVortex from '@/components/ui/interactive-neural-vortex-background'

export function Hero() {
  return (
    <section className="relative py-32 px-6 flex flex-col items-center justify-center text-center min-h-screen pt-20 overflow-hidden">
      {/* Neural Vortex Background */}
      <InteractiveNeuralVortex />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-full"
      >
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-balance mb-8" style={{ marginTop: '51px' }}>
          <span className="bg-gradient-to-b from-zinc-100 to-zinc-500 bg-clip-text text-transparent">
            Accelerated Operations. Intelligent Growth.
          </span>
        </h1>

        {/* Sub-Headline */}
        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-12">
          We architect bespoke AI ecosystems that eliminate manual bottlenecks, allowing your team to focus on high-leverage strategy. Enterprise-grade automation delivered at high-velocity.
        </p>

        {/* Primary Button */}
        <motion.button
          className="px-10 py-5 bg-indigo-600 text-white font-semibold rounded-full shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Your Efficiency Audit
        </motion.button>
      </motion.div>
    </section>
  )
}
