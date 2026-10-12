import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'

export const metadata: Metadata = {
  title: 'The Sock Program — Inter Mural',
  description: 'Athletic socks engineered for performance and built for pride. Custom designs for your school.',
}

const products = [
  {
    name: 'Crew Athletic Sock',
    price: 'Starting at $18',
    imageUrl: '/images/collection-socks.png',
    slug: 'crew-athletic-sock',
    tag: 'Most Popular',
  },
  {
    name: 'No-Show Performance Sock',
    price: 'Starting at $15',
    imageUrl: '/images/collection-socks.png',
    slug: 'no-show-performance-sock',
  },
  {
    name: 'Signature Knee-High Sock',
    price: 'Starting at $24',
    imageUrl: '/images/collection-socks.png',
    slug: 'signature-knee-high-sock',
    tag: 'Statement',
  },
  {
    name: 'Ankle Sport Sock',
    price: 'Starting at $16',
    imageUrl: '/images/collection-socks.png',
    slug: 'ankle-sport-sock',
  },
]

export default function SocksPage() {
  return (
    <>
      <Hero
        eyebrow="The Program"
        tagline="The Sock Program"
        sub="The detail everyone notices. Custom athletic socks engineered for performance and designed to represent your school from heel to cuff."
        height="partial"
        align="center"
        imageSrc="/images/collection-socks.png"
      />

      {/* Editorial Intro */}
      <section className="bg-im-deep py-20 border-b border-white/10">
        <div className="max-w-content mx-auto px-6 max-w-3xl">
          <p className="text-im-gold text-[10px] tracking-[0.2em] uppercase mb-6 font-medium">The Manifesto</p>
          <blockquote className="text-im-cream font-light text-2xl md:text-3xl leading-relaxed" style={{ letterSpacing: '0.03em' }}>
            &ldquo;In athletic culture, the sock is a statement. It&apos;s the first thing you pull up before the game and the last thing you take off after. Inter Mural makes it count.&rdquo;
          </blockquote>
          <p className="text-im-muted text-sm mt-6">
            Every Inter Mural sock is made from performance-grade cotton blends with reinforced heel and toe construction. Custom woven logos, team colors, and school branding — not printed, woven.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-im-black py-24 md:py-32">
        <div className="max-w-content mx-auto px-6">
          <div className="flex items-end justify-between mb-14">
            <h2 className="text-im-cream font-light text-3xl uppercase" style={{ letterSpacing: '0.05em' }}>
              The Full Lineup
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* School CTA */}
      <section className="bg-im-deep py-24 border-t border-white/10">
        <div className="max-w-content mx-auto px-6 text-center">
          <p className="text-im-gold text-[10px] tracking-[0.2em] uppercase mb-5 font-medium">Schools & Teams</p>
          <h2
            className="text-im-cream font-light text-3xl md:text-4xl uppercase mb-4"
            style={{ letterSpacing: '0.05em' }}
          >
            Build Your Sock Program
          </h2>
          <p className="text-im-muted text-base max-w-md mx-auto mb-10">
            Custom sock programs for your entire student body. Coordinate across every team and every event — all in your school&apos;s exact colors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schools"
              className="inline-block bg-im-gold text-im-black px-8 py-3.5 text-[10px] tracking-[0.15em] uppercase font-medium hover:bg-im-cream transition-colors duration-200"
            >
              Apply for Your School
            </Link>
            <Link
              href="/collections/jackets"
              className="inline-block border border-im-cream/30 text-im-cream px-8 py-3.5 text-[10px] tracking-[0.15em] uppercase font-light hover:border-im-gold hover:text-im-gold transition-colors duration-200"
            >
              Explore Jackets
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
