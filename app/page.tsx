import { Navigation } from '@/components/wexel/navigation'
import { Hero } from '@/components/wexel/hero'
import { DomainTrustBar } from '@/components/wexel/domain-trust-bar'
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
      <DomainTrustBar />
      <Methodology />
      <Capabilities />
      <FAQ />
      <Footer />
    </main>
  )
}
