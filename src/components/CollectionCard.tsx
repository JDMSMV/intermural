import Link from 'next/link'

interface CollectionCardProps {
  name: string
  itemCount?: number
  count?: number       // legacy alias
  href: string
  imageSrc?: string
  imageUrl?: string    // legacy alias
}

export default function CollectionCard({ name, itemCount, count, href, imageSrc, imageUrl }: CollectionCardProps) {
  const src = imageSrc || imageUrl || `https://placehold.co/800x1000/1a1a1a/c8a96e?text=${encodeURIComponent(name)}`
  const qty = itemCount ?? count ?? 0

  return (
    <Link href={href} className="group relative block aspect-[4/5] overflow-hidden bg-im-deep">
      <img
        src={src}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-im-black/80 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        {qty > 0 && (
          <p className="text-[10px] tracking-[0.2em] uppercase text-im-gold mb-1">{qty} pieces</p>
        )}
        <p className="text-xl font-light text-im-cream mb-3" style={{ letterSpacing: '0.08em' }}>{name}</p>
        <span className="text-[10px] tracking-[0.15em] uppercase text-im-text-light/60 group-hover:text-im-gold transition-colors duration-200">
          Shop Now →
        </span>
      </div>
    </Link>
  )
}
