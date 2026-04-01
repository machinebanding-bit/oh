'use client'

import { motion } from 'framer-motion'
import { Zap, Layers, Users } from 'lucide-react'

const approaches = [
  {
    icon: Zap,
    title: 'Selective Intelligence',
    description:
      'We deploy AI where it moves the needle, not for the sake of novelty. Our focus is replacing the manual bottlenecks that specifically slow your unique business cycles.',
  },
  {
    icon: Layers,
    title: 'Innovation-Driven',
    description:
      'From initial diagnostic strategy through to final deployment. We handle the full build, integration, and security protocols. No handoffs. No operational gaps.',
  },
  {
    icon: Users,
    title: 'Operational Synergy',
    description:
      'Automation built around how your elite team actually functions. We design interfaces and logic that augment human talent rather than complicating it.',
  },
]

export function Methodology() {
  return (
    <section className="px-6" id="methodology" style={{ paddingTop: '128px', paddingBottom: '1px', background: 'radial-gradient(circle at 20% 0%, rgba(79, 70, 229, 0.12) 0%, transparent 60%)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-indigo-500 font-bold tracking-[0.2em] text-xs mb-4">THE WEXEL APPROACH</p>
          <h2 className="text-4xl font-bold text-white tracking-tighter">How We Get Results</h2>
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-zinc-800/50">
          {approaches.map((approach, index) => {
            const Icon = approach.icon
            return (
              <motion.div
                key={approach.title}
                className="group relative p-6 rounded-2xl transition-all duration-300 hover:border-indigo-500/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Icon size={40} strokeWidth={1.5} className="text-white mb-8" />
                <h3 className="text-xl font-semibold text-zinc-100 mb-4">{approach.title}</h3>
                <p className="text-base text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                  {approach.description}
                </p>
                <div className="absolute inset-0 border-t border-zinc-800/50 rounded-2xl group-hover:border-indigo-500/50 transition-all duration-300 pointer-events-none" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
