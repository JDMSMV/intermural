import Link from 'next/link';

interface HeroButton {
  label: string;
  href: string;
  variant: 'gold' | 'outline';
}

interface HeroProps {
  tagline: string;
  /** Sub-headline / description */
  sub?: string;
  /** Alias for sub */
  subheadline?: string;
  eyebrow?: string;
  /** Array-style CTAs */
  buttons?: HeroButton[];
  /** Shorthand gold CTA */
  ctaPrimary?: { label: string; href: string };
  /** Shorthand outline CTA */
  ctaSecondary?: { label: string; href: string };
  height?: 'full' | 'half' | 'partial';
  /** minHeight override (e.g. "100vh") — mapped to CSS */
  minHeight?: string;
  align?: 'center' | 'left';
  /** Background image URL */
  imageUrl?: string;
  /** Alias for imageUrl */
  imageSrc?: string;
  /** Alias for imageUrl */
  backgroundImage?: string;
}

export default function Hero({
  tagline,
  sub,
  subheadline,
  eyebrow,
  buttons = [],
  ctaPrimary,
  ctaSecondary,
  height = 'full',
  minHeight,
  align = 'center',
  imageUrl,
  imageSrc,
  backgroundImage,
}: HeroProps) {
  const isCenter = align === 'center';
  const isFull = height === 'full';
  const bgSrc = imageUrl || imageSrc || backgroundImage;
  const subText = sub || subheadline;
  const hasCtAs = buttons.length > 0 || ctaPrimary || ctaSecondary;

  // minHeight prop overrides height class when provided
  const heightStyle = minHeight ? { minHeight } : {};
  const heightClass = !minHeight ? (isFull ? 'min-h-screen' : 'min-h-[65vh]') : '';

  return (
    <section
      className={`relative w-full flex items-end overflow-hidden bg-[#0d0d0d] ${heightClass}`}
      style={{
        ...heightStyle,
        ...(bgSrc
          ? {
              backgroundImage: `url(${bgSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}),
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/55 to-[#0d0d0d]/10" />
      {/* Side vignette */}
      {!isCenter && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/70 via-transparent to-transparent" />
      )}

      {/* Content */}
      <div
        className={`relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-12 pb-20 md:pb-28 ${
          isCenter ? 'text-center' : 'text-left'
        }`}
      >
        {eyebrow && (
          <p className="text-[#c8a96e] text-[10px] uppercase tracking-[0.2em] mb-8">{eyebrow}</p>
        )}

        <h1
          className={`font-light text-[#f5f5f5] leading-[0.92] ${
            isFull
              ? 'text-[60px] sm:text-[80px] md:text-[96px]'
              : 'text-[44px] sm:text-[60px] md:text-[72px]'
          }`}
          style={{ letterSpacing: '-0.025em' }}
        >
          {tagline}
        </h1>

        {subText && (
          <p
            className={`mt-7 text-[#f5f5f5]/55 font-light text-lg leading-relaxed ${
              isCenter ? 'max-w-xl mx-auto' : 'max-w-lg'
            }`}
          >
            {subText}
          </p>
        )}

        {hasCtAs && (
          <div
            className={`mt-10 flex flex-wrap gap-4 ${
              isCenter ? 'justify-center' : 'justify-start'
            }`}
          >
            {ctaPrimary && (
              <Link
                href={ctaPrimary.href}
                className="px-8 py-3.5 bg-[#c8a96e] text-[#0d0d0d] text-[10px] font-medium tracking-[0.15em] uppercase hover:bg-[#c8a96e]/85 transition-colors duration-300"
              >
                {ctaPrimary.label}
              </Link>
            )}
            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className="px-8 py-3.5 border border-[#f5f5f5]/25 text-[#f5f5f5] text-[10px] font-light tracking-[0.15em] uppercase hover:border-[#c8a96e] hover:text-[#c8a96e] transition-colors duration-300"
              >
                {ctaSecondary.label}
              </Link>
            )}
            {buttons.map((btn) =>
              btn.variant === 'gold' ? (
                <Link
                  key={btn.label}
                  href={btn.href}
                  className="px-8 py-3.5 bg-[#c8a96e] text-[#0d0d0d] text-[10px] font-medium tracking-[0.15em] uppercase hover:bg-[#c8a96e]/85 transition-colors duration-300"
                >
                  {btn.label}
                </Link>
              ) : (
                <Link
                  key={btn.label}
                  href={btn.href}
                  className="px-8 py-3.5 border border-[#f5f5f5]/25 text-[#f5f5f5] text-[10px] font-light tracking-[0.15em] uppercase hover:border-[#c8a96e] hover:text-[#c8a96e] transition-colors duration-300"
                >
                  {btn.label}
                </Link>
              )
            )}
          </div>
        )}

        {isFull && !minHeight && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#f5f5f5]">Scroll</span>
            <div className="w-px h-8 bg-[#f5f5f5]/50" />
          </div>
        )}
      </div>
    </section>
  );
}
