'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { TrendingUp, Clock, DollarSign, Users, ArrowRight } from 'lucide-react'

interface Result {
  icon: React.ReactNode
  value: string
  label: string
}

interface CaseStudy {
  title: string
  industry: string
  challenge: string
  solution: string
  results: Result[]
  accentColor: string
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Private Equity Portfolio Transformation',
    industry: 'Private Equity',
    challenge:
      'A mid-market PE firm was drowning in manual due diligence processes, with deal teams spending 60% of their time on repetitive document review and data extraction.',
    solution:
      'We deployed an intelligent document processing pipeline with AI-powered extraction, automated financial modeling, and real-time portfolio monitoring dashboards.',
    results: [
      { icon: <Clock className="w-5 h-5" />, value: '47%', label: 'Faster Deal Processing' },
      { icon: <Users className="w-5 h-5" />, value: '60%', label: 'Less Manual Work' },
      { icon: <DollarSign className="w-5 h-5" />, value: '$2.3M', label: 'Annual Capacity Recovered' },
    ],
    accentColor: 'from-indigo-600/20 to-indigo-600/5',
  },
  {
    title: 'Legal Services Automation',
    industry: 'Legal Infrastructure',
    challenge:
      'A national law firm struggled with contract review bottlenecks, inconsistent document templates, and an inability to scale their operations without proportional headcount increases.',
    solution:
      'We built a comprehensive legal operations platform featuring AI contract analysis, automated template generation, and intelligent case routing with priority scoring.',
    results: [
      { icon: <TrendingUp className="w-5 h-5" />, value: '3x', label: 'Review Speed Increase' },
      { icon: <Clock className="w-5 h-5" />, value: '40hrs', label: 'Saved Weekly Per Attorney' },
      { icon: <DollarSign className="w-5 h-5" />, value: '99.2%', label: 'Extraction Accuracy' },
    ],
    accentColor: 'from-emerald-600/20 to-emerald-600/5',
  },
  {
    title: 'E-Commerce Revenue Acceleration',
    industry: 'Luxury E-Commerce',
    challenge:
      'A premium e-commerce brand faced declining conversion rates, high cart abandonment, and an inability to personalize experiences across their growing customer base.',
    solution:
      'We implemented predictive analytics for customer behavior, dynamic pricing optimization, AI-powered product recommendations, and automated cart recovery sequences.',
    results: [
      { icon: <TrendingUp className="w-5 h-5" />, value: '+24%', label: 'Conversion Rate Lift' },
      { icon: <DollarSign className="w-5 h-5" />, value: '+38%', label: 'Average Order Value' },
      { icon: <Users className="w-5 h-5" />, value: '52%', label: 'Cart Recovery Rate' },
    ],
    accentColor: 'from-amber-600/20 to-amber-600/5',
  },
]

function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    if (!isInView) return

    // Extract numeric part
    const numericMatch = value.match(/[\d.]+/)
    if (!numericMatch) {
      setDisplayValue(value)
      return
    }

    const targetNumber = parseFloat(numericMatch[0])
    const prefix = value.slice(0, value.indexOf(numericMatch[0]))
    const postfix = value.slice(value.indexOf(numericMatch[0]) + numericMatch[0].length)

    let start = 0
    const duration = 1500
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = start + (targetNumber - start) * eased

      // Format based on original value
      let formatted: string
      if (value.includes('.')) {
        formatted = current.toFixed(1)
      } else if (targetNumber >= 100) {
        formatted = Math.round(current).toString()
      } else {
        formatted = Math.round(current).toString()
      }

      setDisplayValue(`${prefix}${formatted}${postfix}${suffix}`)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }, [isInView, value, suffix])

  return <span ref={ref}>{displayValue}</span>
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <motion.div
      className={`rounded-[2.5rem] p-8 md:p-10 bg-gradient-to-br ${study.accentColor} border border-zinc-800 backdrop-blur-md hover:border-zinc-700 transition-all duration-300`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Industry Badge */}
      <div className="mb-6">
        <span className="rounded-full bg-zinc-800/80 px-4 py-1.5 text-xs font-mono text-zinc-300">
          {study.industry}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
        {study.title}
      </h3>

      {/* Challenge & Solution */}
      <div className="space-y-6 mb-8">
        <div>
          <p className="text-indigo-400 text-xs font-bold tracking-wider mb-2">THE CHALLENGE</p>
          <p className="text-zinc-400 leading-relaxed">{study.challenge}</p>
        </div>
        <div>
          <p className="text-emerald-400 text-xs font-bold tracking-wider mb-2">OUR SOLUTION</p>
          <p className="text-zinc-400 leading-relaxed">{study.solution}</p>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-3 gap-4 pt-8 border-t border-zinc-800/60">
        {study.results.map((result, idx) => (
          <div key={idx} className="text-center">
            <div className="flex justify-center mb-2 text-zinc-500">{result.icon}</div>
            <p className="text-2xl md:text-3xl font-bold text-white mb-1">
              <AnimatedCounter value={result.value} />
            </p>
            <p className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-wider">
              {result.label}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Link */}
      <div className="mt-8">
        <a
          href="#booking"
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-300 text-sm font-medium"
        >
          Explore a Similar Approach
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  )
}

export function CaseStudies() {
  return (
    <section className="py-32 px-6">
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
            PROVEN RESULTS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
            Transformation in Action
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Anonymized case studies showcasing how we&apos;ve helped enterprise clients achieve measurable operational excellence.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.title} study={study} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="#booking"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-all duration-300"
          >
            Start Your Transformation
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
