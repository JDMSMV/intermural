'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

// In production this would be a real data fetch
function getProduct(slug: string) {
  const name = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  const prices: Record<string, string> = {
    'intramural-varsity-jacket': '$185',
    'inter-mural-heavy-fleece-hoodie': '$95',
    'varsity-letter-jacket-custom': '$220',
    'game-day-full-zip-fleece': '$110',
    'intramural-crew-sweatshirt': '$85',
    'custom-spirit-jacket': '$145',
    'crew-athletic-sock': '$18',
    'no-show-performance-sock': '$15',
    'signature-knee-high-sock': '$24',
    'ankle-sport-sock': '$16',
  };

  return {
    name,
    price: prices[slug] ?? '$95',
    description:
      'Crafted from premium materials selected for both performance and longevity. Every Inter Mural piece is made to order — fully customized with your school colors, mascot, and lettering. Not a template. Not a catalog reprint. Yours.',
    details: [
      'Fully customizable — school colors, mascots, lettering',
      'Made-to-order production (no dead stock)',
      'Premium materials selected per silhouette',
      'Embroidery and screen print options available',
      'Quality guaranteed — we make it right or remake it',
    ],
    sizingGuide: [
      'XS — Chest 32–34"',
      'S — Chest 35–37"',
      'M — Chest 38–40"',
      'L — Chest 41–43"',
      'XL — Chest 44–46"',
      '2XL — Chest 47–49"',
    ],
    orderingInfo: [
      'All items are made-to-order',
      '3–4 week production window after order close',
      'Custom embroidery + print options included',
      'School colors matched via Pantone',
      'Minimum 24 units per style for school programs',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colors: ['#0d0d0d', '#c8a96e', '#2d4a3e', '#1a3a6e', '#8b1a1a'],
    imageUrl: `https://placehold.co/900x1100/1a1a1a/c8a96e?text=${encodeURIComponent(name.split(' ').slice(0, 2).join('+'))}`,
    collection: slug.includes('sock') ? 'Socks' : slug.includes('tee') ? 'Event Tees' : 'Jackets',
    collectionHref: slug.includes('sock')
      ? '/collections/socks'
      : slug.includes('tee')
      ? '/collections/event-tees'
      : '/collections/jackets',
  };
}

const accordionSections = [
  { id: 'details', label: 'Materials & Details' },
  { id: 'sizing', label: 'Sizing Guide' },
  { id: 'ordering', label: 'Custom Ordering' },
];

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [openSection, setOpenSection] = useState<string | null>('details');

  const accordionContent: Record<string, string[]> = {
    details: product.details,
    sizing: product.sizingGuide,
    ordering: product.orderingInfo,
  };

  return (
    <>
      <div className="bg-[#0d0d0d] min-h-screen pt-[60px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-10 lg:py-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10 text-[9px] uppercase tracking-[0.15em] text-[#555]">
            <Link href="/" className="hover:text-[#c8a96e] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href={product.collectionHref} className="hover:text-[#c8a96e] transition-colors">
              {product.collection}
            </Link>
            <span>/</span>
            <span className="text-[#888]">{product.name}</span>
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* ── Image (60%) ── */}
            <div className="lg:col-span-3">
              <div className="aspect-[3/4] overflow-hidden bg-[#1a1a1a] sticky top-[80px]">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* ── Details (40%) ── */}
            <div className="lg:col-span-2 flex flex-col">
              {/* Title block */}
              <div className="mb-6">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#c8a96e] mb-3">
                  Inter Mural
                </p>
                <h1
                  className="font-light text-[28px] md:text-[32px] text-[#f5f5f5] mb-2 leading-tight"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {product.name}
                </h1>
                <p className="text-xl text-[#f5f5f5]/60 font-light">
                  Starting at {product.price}
                </p>
              </div>

              <div className="border-t border-white/8 my-6" />

              {/* Description */}
              <p className="text-sm text-[#f5f5f5]/55 font-light leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Color Selector */}
              <div className="mb-7">
                <p className="text-[9px] uppercase tracking-[0.15em] text-[#888] mb-3">
                  School Color{' '}
                  {selectedColor && (
                    <span className="text-[#c8a96e] ml-2">— Selected</span>
                  )}
                </p>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      aria-label={`Select color ${color}`}
                      className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                        selectedColor === color
                          ? 'border-[#c8a96e] scale-110'
                          : 'border-white/15 hover:border-white/40'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="mb-8">
                <p className="text-[9px] uppercase tracking-[0.15em] text-[#888] mb-3">
                  Size{' '}
                  {selectedSize && (
                    <span className="text-[#c8a96e] ml-2">— {selectedSize}</span>
                  )}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-[10px] uppercase tracking-[0.1em] border transition-colors duration-200 ${
                        selectedSize === size
                          ? 'border-[#c8a96e] text-[#c8a96e] bg-[#c8a96e]/5'
                          : 'border-white/15 text-[#f5f5f5]/50 hover:border-white/35 hover:text-[#f5f5f5]/80'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3 mb-8">
                <button className="w-full py-4 bg-[#c8a96e] text-[#0d0d0d] text-[10px] uppercase tracking-[0.15em] font-medium hover:bg-[#c8a96e]/85 transition-colors duration-300">
                  Pre-Order — Starting at {product.price}
                </button>
                <button className="w-full py-4 border border-white/15 text-[#f5f5f5] text-[10px] uppercase tracking-[0.15em] font-light hover:border-[#c8a96e] hover:text-[#c8a96e] transition-colors duration-300">
                  Add to Waitlist
                </button>
              </div>

              {/* Note */}
              <p className="text-[9px] text-[#555] font-light mb-8 leading-relaxed">
                All Inter Mural products are made-to-order. Final pricing confirmed after school
                colors and customization options are selected with your account manager.
              </p>

              {/* Accordion */}
              <div className="border-t border-white/8">
                {accordionSections.map((section) => (
                  <div key={section.id} className="border-b border-white/8">
                    <button
                      onClick={() =>
                        setOpenSection(openSection === section.id ? null : section.id)
                      }
                      className="w-full flex items-center justify-between py-4 text-[10px] uppercase tracking-[0.14em] text-[#f5f5f5] hover:text-[#c8a96e] transition-colors duration-200 text-left"
                    >
                      <span>{section.label}</span>
                      <span className="text-[#555] ml-4">
                        {openSection === section.id ? '−' : '+'}
                      </span>
                    </button>
                    {openSection === section.id && (
                      <div className="pb-5">
                        <ul className="space-y-2">
                          {accordionContent[section.id].map((item) => (
                            <li
                              key={item}
                              className="text-xs text-[#888] font-light flex items-start gap-2 leading-relaxed"
                            >
                              <span className="text-[#c8a96e] mt-0.5 shrink-0">—</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* School CTA */}
              <div className="mt-8 p-5 border border-white/8 bg-white/[0.02]">
                <p className="text-[10px] uppercase tracking-[0.15em] text-[#c8a96e] mb-2">
                  School Program
                </p>
                <p className="text-xs text-[#888] font-light leading-relaxed mb-4">
                  Need 24+ units for your school? Apply for a school account and get dedicated
                  design support, pre-order storefront, and bulk pricing.
                </p>
                <Link
                  href="/schools"
                  className="text-[10px] uppercase tracking-[0.14em] text-[#c8a96e] hover:text-[#c8a96e]/70 transition-colors"
                >
                  Apply for a School Account →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
