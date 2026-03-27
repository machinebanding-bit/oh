'use client'

import { motion } from 'framer-motion'

export function DomainTrustBar() {
  const domains = [
    'PRIVATE EQUITY',
    'LEGAL INFRASTRUCTURE',
    'REAL ESTATE ENTERPRISE',
    'FINTECH ARCHITECTURE',
    'LUXURY E-COMMERCE',
  ]

  return (
    <section className="w-full py-10 mt-20 border-y border-zinc-800/60">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-wrap justify-center items-center gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {domains.map((domain, index) => (
            <motion.div
              key={domain}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 hover:text-zinc-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {domain}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
