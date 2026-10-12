import Link from 'next/link'

interface ProductCardProps {
  name: string
  price: string
  slug: string
  imageSrc?: string
  imageUrl?: string   // legacy alias
  image?: string      // legacy alias
  tag?: string        // optional tag badge
}

export default function ProductCard({ name, price, slug, imageSrc, imageUrl, image, tag }: ProductCardProps) {
  const src = imageSrc || imageUrl || image || `https://placehold.co/600x800/0d0d0d/c8a96e?text=${encodeURIComponent(name)}`

  return (
    <Link href={`/products/${slug}`} className="group block">
      <div className="relative overflow-hidden bg-im-deep aspect-[3/4] mb-4">
        <img
          src={src}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-im-black/0 group-hover:bg-im-black/20 transition-all duration-300" />
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-im-gold px-4 py-3 text-center">
          <span className="text-im-black text-[10px] font-medium tracking-[0.15em] uppercase">Customize →</span>
        </div>
        {tag && (
          <div className="absolute top-3 left-3 bg-im-gold px-2 py-1">
            <span className="text-im-black text-[9px] font-medium tracking-[0.1em] uppercase">{tag}</span>
          </div>
        )}
      </div>
      <div>
        <p className="text-[11px] tracking-[0.12em] uppercase text-im-text-light mb-1">{name}</p>
        <p className="text-[11px] text-im-muted">{price.startsWith('Starting') ? price : `Starting at ${price}`}</p>
      </div>
    </Link>
  )
}
