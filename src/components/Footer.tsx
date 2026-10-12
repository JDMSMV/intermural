import Link from 'next/link';

const collections = [
  { href: '/collections/jackets', label: 'Jackets & Fleece' },
  { href: '/collections/socks', label: 'The Sock Program' },
  { href: '/collections/event-tees', label: 'Event Tees' },
];

const schoolLinks = [
  { href: '/schools', label: 'For Schools' },
  { href: '/schools#apply', label: 'Apply Now' },
  { href: '/schools#how-it-works', label: 'How It Works' },
];

const connectLinks = [
  { href: '#', label: 'Instagram' },
  { href: '#', label: 'Twitter / X' },
  { href: 'mailto:hello@intermural.co', label: 'hello@intermural.co' },
];

export default function Footer() {
  return (
    <footer className="bg-[#faf9f7] border-t border-black/5 pt-16 pb-10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#111111] mb-4">
              Inter Mural
            </p>
            <p className="text-[11px] text-[#888] font-light leading-relaxed max-w-[180px]">
              Premium spirit wear for schools that take pride in everything.
            </p>
          </div>

          {/* Collections */}
          <div>
            <p className="text-[9px] uppercase tracking-[0.18em] text-[#c8a96e] mb-5">
              Collections
            </p>
            <div className="flex flex-col gap-3">
              {collections.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[11px] text-[#888] hover:text-[#c8a96e] transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Schools */}
          <div>
            <p className="text-[9px] uppercase tracking-[0.18em] text-[#c8a96e] mb-5">
              Schools
            </p>
            <div className="flex flex-col gap-3">
              {schoolLinks.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-[11px] text-[#888] hover:text-[#c8a96e] transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[9px] uppercase tracking-[0.18em] text-[#c8a96e] mb-5">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              {connectLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-[11px] text-[#888] hover:text-[#c8a96e] transition-colors duration-300"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[9px] uppercase tracking-[0.15em] text-[#555]">
            © 2024 Inter Mural. All rights reserved.
          </p>
          <p className="text-[9px] uppercase tracking-[0.15em] text-[#555]">
            Premium School Spirit Wear — New York
          </p>
        </div>
      </div>
    </footer>
  );
}
