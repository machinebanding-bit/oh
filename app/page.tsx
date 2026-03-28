import { Navigation } from '@/components/wexel/navigation'
import { Hero } from '@/components/wexel/hero'
import { Marquee } from '@/components/ui/marquee'
import { Methodology } from '@/components/wexel/methodology'
import { Capabilities } from '@/components/wexel/capabilities'
import { FAQ } from '@/components/wexel/faq'
import { Footer } from '@/components/wexel/footer'

export const metadata = {
  title: 'Wexel - Elite AI Automation Agency',
  description:
    'Accelerated Operations. Intelligent Growth. We architect bespoke AI ecosystems that eliminate manual bottlenecks and drive enterprise automation.',
}

export default function Home() {
  return (
    <main className="bg-zinc-950 text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <div className="py-12 border-y border-zinc-800">
        <Marquee duration={30} pauseOnHover>
          <span className="mx-8 text-2xl font-medium">PRIVATE EQUITY</span>
          <span className="mx-8 text-2xl font-medium">LEGAL INFRASTRUCTURE</span>
          <span className="mx-8 text-2xl font-medium">REAL ESTATE ENTERPRISE</span>
          <span className="mx-8 text-2xl font-medium">FINTECH ARCHITECTURE</span>
          <span className="mx-8 text-2xl font-medium">LUXURY E-COMMERCE</span>
        </Marquee>
      </div>
      <Methodology />
      <Capabilities />
      <FAQ />
      <Footer />
    </main>
  )
}
