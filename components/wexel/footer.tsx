'use client'

import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-zinc-800/50 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Column 1: Brand Identity (Span 5) */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-black tracking-tighter text-white mb-6">Wexel</h3>
            <p className="text-base text-zinc-500 max-w-sm leading-relaxed mb-8">
              Architecting the future of enterprise intelligence through secure, high-velocity automation. We transform
              operational friction into a competitive advantage.
            </p>
            <a href="#" className="inline-block text-zinc-500 hover:text-indigo-400 transition-colors duration-300">
              <Linkedin size={20} />
            </a>
          </motion.div>

          {/* Column 2: Capabilities (Span 3) */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">Workstreams</h4>
            <ul className="flex flex-col gap-3">
              {[
                'Intelligent AI CRM',
                'AI Voice Solutions',
                'Mass Outreach',
                'E-Commerce Intel',
                'Brand Presence',
                'Next-Gen Web',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Infrastructure Status (Span 4) */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">Infrastructure</h4>
            <div className="rounded-2xl bg-zinc-900/50 p-6 border border-zinc-800">
              <div className="flex items-center gap-3 mb-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-semibold text-zinc-200">Wexel Core: Systems Operational</span>
              </div>
              <p className="text-[10px] font-mono text-zinc-600 mb-4">
                Node: Global Integration Active | AES-256 Encrypted
              </p>
              <div className="flex gap-2">
                <span className="text-[8px] font-mono text-zinc-700 bg-zinc-800/50 px-2 py-1 rounded">SOC2 TYPE II</span>
                <span className="text-[8px] font-mono text-zinc-700 bg-zinc-800/50 px-2 py-1 rounded">GDPR</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sub-Footer */}
        <motion.div
          className="mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-zinc-700">Copyright © 2026 Wexel AI Agency. All Rights Reserved.</p>
          <div className="flex gap-6 text-xs text-zinc-700">
            <a href="#" className="hover:text-zinc-500 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-zinc-500 transition-colors duration-300">
              Data Sovereignty
            </a>
            <a href="#" className="hover:text-zinc-500 transition-colors duration-300">
              Terms of Intelligence
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
