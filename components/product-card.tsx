import Image from "next/image"
import Link from "next/link"

interface Product {
  id: number
  title: string
  description: string
  image: string
  slug: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/producto/${product.slug}`} className="block">
      <div className="bg-[#f5f5f5] p-4 rounded flex gap-4 hover:bg-[#e5e5e5] transition-colors">
        <div className="shrink-0">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            width={80}
            height={80}
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-medium text-sm">{product.title}</h3>
          <p className="text-xs text-[#49454f] mt-1">{product.description}</p>
        </div>
      </div>
    </Link>
  )
}
