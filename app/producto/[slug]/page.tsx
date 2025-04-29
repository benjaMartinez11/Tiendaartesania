import Header from "@/components/header"
import Link from "next/link"
import Image from "next/image"
import { getProductBySlug } from "@/lib/products"
import { formatCurrency } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import Navigation from "@/components/navigation"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />

      <div className="px-4 py-2">
        <Navigation />

        <Link
          href="/"
          className="bg-[#1d1b20] text-white px-4 py-1 rounded text-sm inline-block mb-4 flex items-center gap-1"
        >
          <ArrowLeft size={16} />
          <span>Volver</span>
        </Link>

        <div className="bg-[#f5f5f5] p-4 rounded">
          <div className="flex justify-center mb-4">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              width={300}
              height={300}
              className="object-cover"
            />
          </div>

          <h1 className="text-xl font-bold text-center mb-2">{product.title}</h1>

          <p className="text-2xl font-bold text-center mb-4">
            <sup className="text-sm">$</sup>
            {formatCurrency(product.price)}
          </p>

          <button className="w-full bg-[#1d1b20] text-white py-2 rounded text-sm mb-6">Comprar</button>

          <div className="mb-6">
            <h2 className="font-bold text-sm mb-2">Descripción</h2>
            <p className="text-sm">{product.longDescription}</p>
          </div>

          <div className="mb-6">
            <h2 className="font-bold text-sm mb-2">Características</h2>
            <ul className="text-sm space-y-1">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-sm mb-2">Especificaciones</h2>
            <div className="text-sm grid grid-cols-2 gap-2">
              <div className="font-medium">Material:</div>
              <div>{product.specifications.material}</div>

              <div className="font-medium">Altura:</div>
              <div>{product.specifications.height}</div>

              <div className="font-medium">Capacidad:</div>
              <div>{product.specifications.capacity}</div>

              <div className="font-medium">Peso:</div>
              <div>{product.specifications.weight}</div>

              <div className="font-medium">Origen:</div>
              <div>{product.specifications.origin}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
