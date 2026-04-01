'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOpen])

  return (
    <>
      <motion.header
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 h-16 px-6 md:px-8 rounded-full backdrop-blur-xl bg-zinc-950/60 border border-zinc-800/40 shadow-lg w-[calc(100%-24px)] md:w-auto"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between h-full gap-12">
          {/* Brand */}
          <div className="text-xl font-bold tracking-widest text-white whitespace-nowrap uppercase" style={{ fontFamily: 'var(--font-blanka)' }}>Wexel</div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 items-center">
            {['Methodology', 'Workstreams', 'FAQ'].map((item, idx) => (
              <a
                key={`nav-${idx}`}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <a
            href="#booking"
            className="hidden md:block px-5 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-all duration-300 whitespace-nowrap"
          >
            Book Audit
          </a>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-8 h-8 text-white hover:text-indigo-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu Drawer */}
            <motion.div
              className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-24px)] rounded-3xl backdrop-blur-xl bg-zinc-950/60 border border-zinc-800/40 shadow-xl overflow-hidden"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col divide-y divide-zinc-800/40">
                {['Methodology', 'Workstreams', 'FAQ'].map((item, idx) => (
                  <a
                    key={`mobile-nav-${idx}`}
                    href={`#${item.toLowerCase()}`}
                    className="px-6 py-4 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/40 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                ))}

                {/* Mobile CTA Button */}
                <a
                  href="#booking"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-6 py-4 text-sm font-medium text-white text-center bg-indigo-600 hover:bg-indigo-500 transition-colors duration-300"
                >
                  Book Audit
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
