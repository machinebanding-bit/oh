'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  title: string
  company: string
  industry: string
  metric?: {
    value: string
    label: string
  }
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Wexel transformed our deal pipeline completely. What used to take our team weeks now happens in days. The AI-driven qualification is remarkably accurate.",
    author: 'Marcus Chen',
    title: 'Managing Partner',
    company: 'Apex Capital Partners',
    industry: 'Private Equity',
    metric: {
      value: '47%',
      label: 'Faster Deal Processing',
    },
  },
  {
    quote:
      "Our document review process was drowning us. Wexel's automation cut our manual review time dramatically while improving accuracy. It's been a game-changer for our firm.",
    author: 'Sarah Mitchell',
    title: 'Chief Operations Officer',
    company: 'Sterling Legal Group',
    industry: 'Legal Services',
    metric: {
      value: '3x',
      label: 'Faster Document Review',
    },
  },
  {
    quote:
      "The e-commerce intelligence platform they built understands our customers better than we did. Our conversion rates speak for themselves now.",
    author: 'David Park',
    title: 'VP of Growth',
    company: 'Luxe Commerce',
    industry: 'E-Commerce',
    metric: {
      value: '+24%',
      label: 'Conversion Lift',
    },
  },
  {
    quote:
      "We were skeptical about AI voice agents, but Wexel's solution is indistinguishable from our top reps. They're booking qualified meetings around the clock.",
    author: 'Elena Rodriguez',
    title: 'Head of Sales',
    company: 'Finova Systems',
    industry: 'FinTech',
    metric: {
      value: '60%',
      label: 'More Qualified Leads',
    },
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      className="rounded-[2rem] p-8 bg-zinc-900/40 border border-zinc-800 backdrop-blur-md hover:bg-zinc-900/60 hover:border-zinc-700 transition-all duration-300 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
    >
      {/* Quote Icon */}
      <Quote className="w-10 h-10 text-indigo-500/40 mb-6" />

      {/* Quote Text */}
      <p className="text-zinc-300 text-lg leading-relaxed mb-8 flex-grow">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Metric Badge */}
      {testimonial.metric && (
        <div className="mb-6">
          <div className="inline-flex items-center gap-3 rounded-full bg-zinc-800/60 px-4 py-2">
            <span className="text-2xl font-bold text-emerald-400">{testimonial.metric.value}</span>
            <span className="text-xs text-zinc-400 uppercase tracking-wider">
              {testimonial.metric.label}
            </span>
          </div>
        </div>
      )}

      {/* Author Info */}
      <div className="flex items-center gap-4 pt-6 border-t border-zinc-800/60">
        {/* Avatar with Initials */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center text-white font-semibold text-sm">
          {testimonial.author
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>

        <div className="flex-1">
          <p className="text-white font-medium">{testimonial.author}</p>
          <p className="text-zinc-500 text-sm">{testimonial.title}</p>
          <p className="text-zinc-600 text-sm">{testimonial.company}</p>
        </div>

        {/* Industry Badge */}
        <div className="hidden sm:block">
          <span className="rounded-full bg-zinc-800 px-3 py-1 text-[10px] font-mono text-zinc-400">
            {testimonial.industry}
          </span>
        </div>
      </div>

      {/* Star Rating */}
      <div className="flex gap-1 mt-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
    </motion.div>
  )
}

export function Testimonials() {
  return (
    <section className="py-32 px-6" id="testimonials" style={{ background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.12) 0%, rgba(79, 70, 229, 0.04) 100%)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-500 font-bold tracking-[0.2em] text-xs mb-4">
            CLIENT OUTCOMES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Real results from enterprise clients who transformed their operations with Wexel.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.author} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
