'use client';
import Hero from '@/components/Hero';
import CollectionCard from '@/components/CollectionCard';
import Link from 'next/link';

const products = [
  { name: 'Custom Football Uniform Set', price: 'Custom quote', imageUrl: '/images/built-for-schools.png', slug: 'football-uniform-set', tag: 'Most Popular' },
  { name: 'Basketball Uniform Set', price: 'Custom quote', imageUrl: '/images/built-for-schools.png', slug: 'basketball-uniform-set' },
  { name: 'Soccer Uniform Set', price: 'Custom quote', imageUrl: '/images/built-for-schools.png', slug: 'soccer-uniform-set' },
  { name: 'Track & Field Kit', price: 'Custom quote', imageUrl: '/images/built-for-schools.png', slug: 'track-field-kit' },
  { name: 'Baseball / Softball Set', price: 'Custom quote', imageUrl: '/images/built-for-schools.png', slug: 'baseball-softball-set' },
  { name: 'Lacrosse Uniform Set', price: 'Custom quote', imageUrl: '/images/built-for-schools.png', slug: 'lacrosse-uniform-set' },
  { name: 'Wrestling Singlet Program', price: 'Custom quote', imageUrl: '/images/built-for-schools.png', slug: 'wrestling-singlet' },
  { name: 'Warm-Up / Shootaround Set', price: 'Custom quote', imageUrl: '/images/collection-jackets.png', slug: 'warmup-set' },
];

export default function UniformsPage() {
  return (
    <div className="min-h-screen bg-im-dark">
      <Hero
        tagline="Uniforms"
        subheadline="Custom cut-and-sew athletic uniforms built to perform — designed to make your team look like a program."
        imageUrl="/images/built-for-schools.png"
      />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-im-gold text-xs uppercase tracking-widest-2 mb-2 font-medium">Custom Programs</p>
            <h2 className="font-serif text-3xl font-light text-im-text-light">Athletic Uniforms</h2>
            <p className="text-im-text-muted text-sm mt-3 max-w-xl">Every uniform is custom — built to your school colors, designed with your athletic director, and manufactured to spec. No MOQ minimums. Contact us for a quote.</p>
          </div>
          <Link href="/schools" className="inline-block px-8 py-3 bg-im-gold text-im-dark text-sm font-medium uppercase tracking-widest rounded-full hover:bg-im-text-light transition-colors whitespace-nowrap">
            Request a Quote
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map(p => <CollectionCard key={p.slug} {...p} href="/schools" />)}
        </div>
      </div>
    </div>
  );
}
