'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How do you handle proprietary enterprise data?',
    answer:
      'We architect "Sovereign AI" environments. All data processed through our engines is siloed in private, encrypted instances with zero-retention policies. Your intellectual property remains your competitive advantage—we simply build the pipes. We are GDPR compliant and follow SOC2 Type II framework standards.',
    id: 'data-sovereignty',
  },
  {
    question: 'Will this disrupt our existing technical infrastructure?',
    answer:
      "We don't replace your infrastructure; we orchestrate it. Wexel acts as the 'Intelligent Glue' between your legacy tools and modern AI. Our End-to-End approach ensures that deployment is a seamless layer, not a disruptive overhaul.",
    id: 'integration',
  },
  {
    question: 'How do we maintain oversight of AI decision-making?',
    answer:
      'Transparency is non-negotiable. Every workstream we deploy includes "Human-in-the-Loop" safeguards and real-time monitoring dashboards. You have full visibility into every decision the AI makes, with kill-switches and confidence-score thresholds built in from day one.',
    id: 'oversight',
  },
  {
    question: 'How do we stay ahead as AI technology evolves?',
    answer:
      "We build 'Adaptive Frameworks.' Our Continuous Optimization phase ensures your models are swapped or updated as newer, more efficient LLMs emerge. You aren't buying a static product; you're buying a future-proofed operations department.",
    id: 'evolution',
  },
  {
    question: 'What is the expected timeline for measurable impact?',
    answer:
      'Automation is a capital investment. During our Diagnostic Audit, we establish "Baseline Efficiency Metrics." We target a minimum of 30-50% reclamation of operational hours within the first 90 days, allowing your talent to shift from manual tasks to high-leverage strategy.',
    id: 'roi',
  },
]

export function FAQ() {
  return (
    <section className="py-32 px-6" id="faq">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-indigo-500 font-bold tracking-[0.2em] text-xs mb-4">GOVERNANCE & TRUST</p>
          <h2 className="text-4xl font-bold text-white tracking-tighter">Enterprise Readiness & ROI</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div 
                key={faq.id} 
                initial={{ opacity: 0, y: 10 }} 
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="w-full border-b border-zinc-800/40 last:border-b-0"
              >
                <AccordionItem 
                  value={faq.id} 
                  className="border-0 px-0 py-0"
                >
                  <AccordionTrigger className="py-6 text-left text-base font-medium text-white hover:text-indigo-400 hover:no-underline transition-colors duration-300 [&[data-state=open]>svg]:rotate-45">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-zinc-400 leading-relaxed text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
