import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'

export const metadata: Metadata = {
  title: 'Event Tees — Inter Mural',
  description: 'Custom event tees for homecoming, big game, back to school, and senior week. Made for the moment.',
}

const categories = ['All', 'Homecoming', 'Big Game', 'Back to School', 'Senior Week']

const products = [
  { name: 'Homecoming Classic Tee', price: 'Starting at $32', imageUrl: '/images/collection-event-tees.png', slug: 'homecoming-classic-tee', tag: 'Homecoming' },
  { name: 'Big Game Edition Tee', price: 'Starting at $38', imageUrl: '/images/collection-event-tees.png', slug: 'big-game-edition-tee', tag: 'Big Game' },
  { name: 'Back to School Drop Tee', price: 'Starting at $35', imageUrl: '/images/collection-event-tees.png', slug: 'back-to-school-drop-tee', tag: 'Back to School' },
  { name: 'Senior Week Oversized Tee', price: 'Starting at $42', imageUrl: '/images/collection-event-tees.png', slug: 'senior-week-oversized-tee', tag: 'Senior Week' },
  { name: 'Rally Day Graphic Tee', price: 'Starting at $34', imageUrl: '/images/collection-event-tees.png', slug: 'rally-day-graphic-tee' },
  { name: 'Championship Game Tee', price: 'Starting at $40', imageUrl: '/images/collection-event-tees.png', slug: 'championship-game-tee', tag: 'New' },
]

export default function EventTeesPage() {
  return (
    <>
      <Hero
        eyebrow="Limited Drops"
        tagline="Made for the Moment"
        sub="Every event deserves a tee worth keeping. Limited-run designs for your biggest school moments — custom, premium, built to become a memory."
        height="partial"
        align="center"
        imageUrl="/images/collection-event-tees.png"
      />

      {/* Category Filter */}
      <section className="bg-im-deep border-b border-white/10">
        <div className="max-w-content mx-auto px-6 py-6 flex flex-wrap gap-2">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-5 py-2 text-[10px] tracking-[0.15em] uppercase transition-colors duration-200 ${
                i === 0
                  ? 'bg-im-gold text-im-black font-medium'
                  : 'border border-white/20 text-im-muted hover:border-im-gold/50 hover:text-im-cream'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-im-black py-24 md:py-32">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <ProductCard key={p.slug} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="bg-im-deep py-20 border-t border-white/10">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Limited Runs', desc: 'Every event tee is designed for its moment. Once the event passes, the design retires.' },
              { title: 'Min Order: 24', desc: 'Low minimums so every school can access premium event tees without the risk.' },
              { title: '2-Week Turnaround', desc: 'Order by the deadline, receive before the event. We make it happen.' },
            ].map((item) => (
              <div key={item.title} className="border-t border-white/10 pt-8">
                <h3 className="text-im-cream font-light text-lg uppercase mb-3" style={{ letterSpacing: '0.05em' }}>
                  {item.title}
                </h3>
                <p className="text-im-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
