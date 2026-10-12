import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import CollectionCard from '@/components/CollectionCard'
import EditorialSection from '@/components/EditorialSection'

export const metadata: Metadata = {
  title: 'Inter Mural — Wear the School. Own the Story.',
  description: 'Premium high school spirit wear and custom uniforms. Kith-inspired athletic luxury for champions.',
}

const featuredProducts = [
  { name: 'Intramural Varsity Jacket', price: 'Starting at $185', image: '/images/featured-varsity-jacket.png', slug: 'intramural-varsity-jacket', tag: 'Bestseller' },
  { name: 'Heavy Fleece Hoodie', price: 'Starting at $95', image: '/images/featured-fleece-hoodie.png', slug: 'inter-mural-heavy-fleece-hoodie' },
  { name: 'Signature Knee-High Sock', price: 'Starting at $24', image: '/images/featured-knee-high-sock.png', slug: 'signature-knee-high-sock', tag: 'New' },
  { name: 'Game Day Full-Zip Fleece', price: 'Starting at $110', image: '/images/featured-game-day-fleece.png', slug: 'game-day-full-zip-fleece' },
]

const collections = [
  { name: 'Jackets', itemCount: 6, image: '/images/collection-jackets.png', href: '/collections/jackets' },
  { name: 'Socks', itemCount: 4, image: '/images/collection-socks.png', href: '/collections/socks' },
  { name: 'Event Tees', itemCount: 6, image: '/images/collection-event-tees.png', href: '/collections/event-tees' },
]

export default function HomePage() {
  return (
    <>
      <Hero
        tagline="Wear the School. Own the Story."
        subheadline="Premium school spirit wear built for champions. Kith-inspired athletic luxury — designed for your school, built to last."
        ctaPrimary={{ label: 'Shop Collections', href: '/collections/jackets' }}
        ctaSecondary={{ label: 'For Schools', href: '/schools' }}
        backgroundImage="/images/hero-1.png"
        align="center"
        minHeight="100vh"
      />

      {/* Featured Products */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-12 lg:mb-16">
            <div>
              <p className="text-im-gold text-xs uppercase tracking-widest-2 mb-3 font-medium">Featured</p>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[#111111] uppercase" style={{ letterSpacing: '0.06em' }}>Most Wanted</h2>
            </div>
            <Link href="/collections/jackets" className="hidden md:block text-xs uppercase tracking-widest text-im-gold border-b border-im-gold pb-0.5 hover:text-[#111111] hover:border-im-text-light transition-colors duration-200">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredProducts.map((p) => <ProductCard key={p.slug} {...p} />)}
          </div>
        </div>
      </section>

      <EditorialSection
        eyebrow="The Philosophy"
        headline="We don't do junk. We do legacy."
        body="Inter Mural was built on a simple belief: your school deserves better. Better materials. Better design. Better fit. We bring the same obsessive craft that goes into luxury sportswear and put it on every back, across every school that earns it."
        image="/images/philosophy-fleece.png"
        imageAlt="Inter Mural Philosophy"
        imagePosition="right"
      />

      {/* Collections */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="mb-12 lg:mb-16">
            <p className="text-im-gold text-xs uppercase tracking-widest-2 mb-3 font-medium">Collections</p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#111111] uppercase" style={{ letterSpacing: '0.06em' }}>Shop by Category</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.map((col) => <CollectionCard key={col.name} {...col} />)}
          </div>
        </div>
      </section>

      {/* Built for Schools */}
      <section className="py-24 lg:py-40 bg-im-deep border-y border-black/10">
        <div className="max-w-content mx-auto px-6 lg:px-12 text-center">
          <p className="text-im-gold text-xs uppercase tracking-widest-2 mb-6 font-medium">Built for Schools</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-[#111111] uppercase leading-none mb-8 mx-auto max-w-3xl" style={{ letterSpacing: '0.06em' }}>
            Premium materials. Expert design. Built for your school.
          </h2>
          <p className="text-[#111111]/50 font-light text-base max-w-lg mx-auto mb-12">
            We work directly with schools on a pre-order model — no inventory risk, no minimums that hurt. Just premium product your students will actually want to wear.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 text-left max-w-3xl mx-auto">
            {[
              { label: 'Premium Quality', desc: 'Athletic-grade materials sourced for durability and feel.' },
              { label: 'Expert Design', desc: 'Our team handles everything from concept to final artwork.' },
              { label: 'Pre-Order Model', desc: 'Zero inventory risk. We only produce what is ordered.' },
            ].map((item) => (
              <div key={item.label} className="border-t border-black/10 pt-6">
                <p className="text-im-gold text-xs uppercase tracking-widest mb-3 font-medium">{item.label}</p>
                <p className="text-[#111111]/50 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/schools" className="inline-block bg-im-gold text-im-black text-xs uppercase tracking-widest px-10 py-4 font-medium hover:bg-im-gold/90 transition-colors duration-200">
            Bring Inter Mural to Your School
          </Link>
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-24 lg:py-32 bg-im-black">
        <div className="max-w-content mx-auto px-6 lg:px-12 text-center">
          <p className="text-im-gold text-xs uppercase tracking-widest-2 mb-4 font-medium">Waitlist</p>
          <h2 className="text-3xl md:text-5xl font-light text-[#111111] uppercase mb-4" style={{ letterSpacing: '0.06em' }}>Be First.</h2>
          <p className="text-[#111111]/50 font-light text-sm mb-10 max-w-sm mx-auto">
            Join the waitlist for early access to new collections, school drops, and limited collabs.
          </p>
          <form className="flex gap-0 max-w-md mx-auto">
            <input type="email" placeholder="your@school.edu" className="flex-1 bg-im-deep border border-black/20 border-r-0 px-5 py-4 text-[#111111] text-sm font-light placeholder-im-text-light/30 focus:outline-none focus:border-im-gold transition-colors duration-200" />
            <button type="submit" className="bg-im-gold text-im-black text-xs uppercase tracking-widest px-6 py-4 font-medium hover:bg-im-gold/90 transition-colors duration-200 whitespace-nowrap">Join</button>
          </form>
        </div>
      </section>
    </>
  )
}
