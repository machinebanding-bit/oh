'use client'

import { motion } from 'framer-motion'
import { Database, PhoneIncoming, Send, ShoppingBag, Monitor, TrendingUp } from 'lucide-react'

interface CapabilityCard {
  icon: React.ReactNode
  title: string
  description: string
  badge?: {
    label: string
    value: string
    color: string
  }
  metric?: {
    value: string
    label: string
  }
  visualization?: 'audio' | 'sentiment' | 'performance'
}

const firstRow: CapabilityCard[] = [
  {
    icon: <Database size={28} className="text-indigo-400 mb-6" />,
    title: 'Intelligent AI CRM',
    description:
      'A pipeline you can actually trust. Our engine drives engagement, scores leads in real-time, and identifies exactly where deals stall with cross-channel automation.',
    badge: {
      label: 'Lead Score: 98% | High Intent',
      value: 'Lead Quality',
      color: 'text-emerald-400',
    },
  },
  {
    icon: <PhoneIncoming size={28} className="text-indigo-400 mb-6" />,
    title: 'AI Voice Solutions',
    description:
      'Human-scale voice agents that qualify leads and book appointments 24/7. Indistinguishable from your elite team, ensuring you never miss a high-value conversation.',
    visualization: 'audio',
  },
  {
    icon: <Send size={28} className="text-indigo-400 mb-6" />,
    title: 'Mass Outreach Automation',
    description:
      'Hyper-personalized at scale. We move beyond mail-merge with AI that writes unique, data-backed outreach for every prospect, ensuring high-authority inbox delivery.',
    metric: {
      value: '99.8%',
      label: 'Inbound Placement Rate',
    },
  },
]

const secondRow: CapabilityCard[] = [
  {
    icon: <ShoppingBag size={28} className="text-indigo-400 mb-6" />,
    title: 'E-Commerce Intelligence',
    description:
      'Predictive Market Dominance. AI that knows what your customers want before they do. Dynamic pricing, automated cart recovery, and inventory that stays right-sized.',
    badge: {
      label: 'Conversion Lift: +24%',
      value: 'Conversion Lift',
      color: 'text-emerald-400',
    },
  },
  {
    icon: <Monitor size={28} className="text-indigo-400 mb-6" />,
    title: 'Autonomous Brand Presence',
    description:
      'The 24/7 Authority. AI that orchestrates your brand sentiment and community engagement across all platforms. Stay active and authoritative without manual posting.',
    visualization: 'sentiment',
  },
  {
    icon: <Monitor size={28} className="text-indigo-400 mb-6" />,
    title: 'Next-Gen Web Experiences',
    description:
      'The Foundation of Conversion. Websites that rank, load, and convert. No bloated templates. Just clean code, strategic design, and SEO built into the bedrock.',
    metric: {
      value: '100/100',
      label: 'Core Web Vitals',
    },
  },
]

function AudioWaveform() {
  return (
    <div className="flex items-end gap-1 h-6 mt-4">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="flex-1 bg-emerald-400/60 rounded-sm"
          animate={{ height: ['20px', '12px', '20px'] }}
          transition={{
            duration: 0.6,
            delay: i * 0.1,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  )
}

function SentimentRing() {
  return (
    <div className="flex items-center gap-4 mt-4">
      <motion.div
        className="relative w-12 h-12 rounded-full border-2 border-zinc-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-emerald-400 border-r-transparent"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          style={{ clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)' }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-zinc-300">92%</div>
      </motion.div>
      <div>
        <p className="text-[10px] font-mono text-zinc-500">Sentiment: Positive (92%)</p>
      </div>
    </div>
  )
}

function PerformanceScore() {
  return (
    <div className="mt-4 flex items-center justify-between">
      <div>
        <p className="text-3xl font-bold text-zinc-200">100/100</p>
        <p className="text-[10px] uppercase tracking-tighter text-zinc-500">Core Web Vitals</p>
      </div>
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-3 h-3 rounded-full bg-emerald-400" />
      </motion.div>
    </div>
  )
}

function CapabilityCard({ card }: { card: CapabilityCard }) {
  return (
    <motion.div
      className="rounded-[2.5rem] p-10 bg-zinc-900/40 border border-zinc-800 backdrop-blur-md hover:bg-zinc-900/60 hover:border-zinc-700 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
      whileHover={{ y: -4 }}
    >
      {card.icon}
      <h3 className="text-xl font-semibold text-zinc-100 mb-4">{card.title}</h3>
      <p className="text-base text-zinc-400 leading-relaxed mb-6">{card.description}</p>

      {card.badge && (
        <div className="rounded-full bg-zinc-800 px-3 py-1 text-[10px] font-mono inline-block">
          <span className={card.badge.color}>{card.badge.label}</span>
        </div>
      )}

      {card.visualization === 'audio' && <AudioWaveform />}
      {card.visualization === 'sentiment' && <SentimentRing />}

      {card.metric && (
        <div className="mt-6">
          <p className="text-3xl font-bold text-zinc-200">{card.metric.value}</p>
          <p className="text-[10px] uppercase tracking-tighter text-zinc-500">{card.metric.label}</p>
        </div>
      )}
    </motion.div>
  )
}

export function Capabilities() {
  return (
    <section className="py-32 px-6" id="workstreams" style={{ background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.10) 0%, rgba(16, 185, 129, 0.10) 100%)' }}>
      <div className="max-w-7xl mx-auto">
        {/* First Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-indigo-500 font-bold tracking-[0.2em] text-xs mb-4">CORE WORKSTREAMS</p>
          <h2 className="text-4xl font-bold text-white tracking-tighter">Growth Engines</h2>
        </motion.div>

        {/* First Row - 3 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {firstRow.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <CapabilityCard card={card} />
            </motion.div>
          ))}
        </div>

        {/* Second Row - 3 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {secondRow.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <CapabilityCard card={card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
