interface EditorialSectionProps {
  headline: string;
  body: string;
  /** Background/accent image */
  imageSrc?: string;
  /** Alias for imageSrc */
  imageUrl?: string;
  /** Alias for imageSrc (used by some pages) */
  image?: string;
  imageAlt?: string;
  /** 'left' | 'right' — which side the image appears */
  imagePosition?: 'left' | 'right';
  /** Alias for imagePosition=false → 'left'; true → 'right' */
  imageRight?: boolean;
  /** Section eyebrow label */
  label?: string;
  /** Alias for label */
  eyebrow?: string;
  dark?: boolean;
}

export default function EditorialSection({
  headline,
  body,
  imageSrc,
  imageUrl,
  image,
  imageAlt = '',
  imagePosition,
  imageRight,
  label,
  eyebrow,
  dark = true,
}: EditorialSectionProps) {
  const src =
    imageSrc || imageUrl || image ||
    'https://placehold.co/800x1000/1a1a1a/c8a96e?text=Inter+Mural';

  // Resolve image side: imagePosition wins, then imageRight, default right
  const showImageRight =
    imagePosition === 'left'
      ? false
      : imagePosition === 'right'
      ? true
      : imageRight !== undefined
      ? imageRight
      : true;

  const displayLabel = label || eyebrow;
  const bg = dark ? 'bg-[#0d0d0d]' : 'bg-[#f5f0e8]';
  const textPrimary = dark ? 'text-[#f5f5f5]' : 'text-[#111111]';
  const textMuted = dark ? 'text-[#f5f5f5]/55' : 'text-[#111111]/55';

  const TextCol = (
    <div className="flex flex-col justify-center py-12 lg:py-0">
      {displayLabel && (
        <p className="text-[#c8a96e] text-[10px] uppercase tracking-[0.2em] mb-6">
          {displayLabel}
        </p>
      )}
      <h2
        className={`font-light leading-tight mb-7 ${textPrimary}`}
        style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', letterSpacing: '-0.025em' }}
      >
        {headline}
      </h2>
      <p className={`text-base font-light leading-relaxed max-w-md ${textMuted}`}>{body}</p>
    </div>
  );

  const ImgCol = (
    <div className="aspect-[4/5] overflow-hidden">
      <img src={src} alt={imageAlt} className="w-full h-full object-cover" />
    </div>
  );

  return (
    <section className={`${bg} py-20 lg:py-32`}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {showImageRight ? (
          <>
            {TextCol}
            {ImgCol}
          </>
        ) : (
          <>
            {ImgCol}
            {TextCol}
          </>
        )}
      </div>
    </section>
  );
}
