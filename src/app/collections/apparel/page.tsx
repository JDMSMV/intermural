'use client';
import Hero from '@/components/Hero';
import CollectionCard from '@/components/CollectionCard';

const products = [
  { name: 'Heavyweight Fleece Crewneck', price: 'Starting at $95', imageUrl: '/images/collection-jackets.png', slug: 'heavyweight-fleece-crewneck', tag: 'Bestseller' },
  { name: 'Game Day Full-Zip Fleece', price: 'Starting at $110', imageUrl: '/images/collection-jackets.png', slug: 'game-day-full-zip-fleece' },
  { name: 'Intramural Logo Hoodie', price: 'Starting at $105', imageUrl: '/images/collection-jackets.png', slug: 'intramural-logo-hoodie', tag: 'New' },
  { name: 'Homecoming Event Tee', price: 'Starting at $32', imageUrl: '/images/collection-event-tees.png', slug: 'homecoming-event-tee' },
  { name: 'Big Game Edition Tee', price: 'Starting at $38', imageUrl: '/images/collection-event-tees.png', slug: 'big-game-tee' },
  { name: 'Premium Crew Socks', price: 'Starting at $24', imageUrl: '/images/collection-socks.png', slug: 'premium-crew-socks' },
  { name: 'Signature Knee-High Sock', price: 'Starting at $28', imageUrl: '/images/collection-socks.png', slug: 'signature-knee-high-sock' },
  { name: 'Spirit Pack Bundle', price: 'Starting at $220', imageUrl: '/images/collection-jackets.png', slug: 'spirit-pack-bundle', tag: 'Bundle' },
  { name: 'Back to School Drop Tee', price: 'Starting at $35', imageUrl: '/images/collection-event-tees.png', slug: 'back-to-school-drop-tee' },
  { name: 'Varsity Crewneck Sweatshirt', price: 'Starting at $88', imageUrl: '/images/collection-jackets.png', slug: 'varsity-crewneck' },
  { name: 'Performance Quarter-Zip', price: 'Starting at $115', imageUrl: '/images/philosophy-fleece.png', slug: 'performance-quarter-zip' },
  { name: 'Senior Week Oversized Tee', price: 'Starting at $42', imageUrl: '/images/collection-event-tees.png', slug: 'senior-week-tee' },
];

export default function ApparelPage() {
  return (
    <div className="min-h-screen bg-im-dark">
      <Hero
        headline="Apparel"
        subheadline="Premium athletic wear for every moment — from practice to the stands."
        imageUrl="/images/collection-jackets.png"
        size="sm"
      />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-im-gold text-xs uppercase tracking-widest-2 mb-2 font-medium">Full Collection</p>
          <h2 className="font-serif text-3xl font-light text-im-text-light">All Apparel</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map(p => <CollectionCard key={p.slug} {...p} href={`/products/${p.slug}`} />)}
        </div>
      </div>
    </div>
  );
}
