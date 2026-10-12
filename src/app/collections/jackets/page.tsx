import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'

export const metadata: Metadata = {
  title: 'Jackets — Inter Mural',
  description: 'Premium varsity jackets and fleece for your school. Custom designs, expert quality, built to last.',
}

const products = [
  { name: 'Intramural Varsity Jacket', price: 'Starting at $185', imageUrl: '/images/collection-jackets.png', slug: 'intramural-varsity-jacket', tag: 'Bestseller' },
  { name: 'Inter Mural Heavy Fleece Hoodie', price: 'Starting at $95', imageUrl: '/images/philosophy-fleece.png', slug: 'inter-mural-heavy-fleece-hoodie' },
  { name: 'Varsity Letter Jacket (Custom)', price: 'Starting at $220', imageUrl: '/images/collection-jackets.png', slug: 'varsity-letter-jacket-custom', tag: 'Custom' },
  { name: 'Game Day Full-Zip Fleece', price: 'Starting at $110', imageUrl: '/images/collection-jackets.png', slug: 'game-day-full-zip-fleece' },
  { name: 'Intramural Crew Sweatshirt', price: 'Starting at $85', imageUrl: '/images/philosophy-fleece.png', slug: 'intramural-crew-sweatshirt' },
  { name: 'Custom Spirit Jacket', price: 'Starting at $145', imageUrl: '/images/collection-jackets.png', slug: 'custom-spirit-jacket', tag: 'New' },
]

export default function JacketsPage() {
  return (
    <>
      <Hero
        eyebrow="Collection"
        tagline="Fleece & Varsity"
        sub="The anchor of every school wardrobe. Premium outerwear built to carry your school's identity from opening day through championship season."
        height="partial"
        align="left"
        imageUrl="/images/collection-jackets.png"
      />

      <section className="bg-im-deep py-16 border-b border-white/10">
        <div className="max-w-content mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-im-gold text-[10px] tracking-[0.2em] uppercase mb-4 font-medium">The Outerwear Program</p>
            <h2 className="text-im-cream font-light text-3xl md:text-4xl uppercase" style={{ letterSpacing: '0.05em' }}>
              Built for Champions
            </h2>
          </div>
          <p className="text-im-muted text-base leading-relaxed">
            Every jacket in the Inter Mural line is designed to outlast the season. Heavyweight materials, custom embroidery, and meticulous finishing — because your school deserves better.
          </p>
        </div>
      </section>

      <section className="bg-im-black py-24 md:py-32">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <ProductCard key={p.slug} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-im-deep py-20 border-t border-white/10">
        <div className="max-w-content mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-im-cream font-light text-2xl md:text-3xl uppercase mb-2" style={{ letterSpacing: '0.05em' }}>
              Custom Jacket Program for Your School
            </h3>
            <p className="text-im-muted text-sm">Pre-order model. No minimums. Dedicated account manager.</p>
          </div>
          <a href="/schools" className="flex-shrink-0 inline-block bg-im-gold text-im-black px-8 py-3.5 text-[10px] tracking-[0.15em] uppercase font-medium hover:bg-im-cream transition-colors duration-200">
            Apply Now →
          </a>
        </div>
      </section>
    </>
  )
}
