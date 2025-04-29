import Header from "@/components/header"
import ProductListing from "@/components/product-listing"
import { products } from "@/lib/products"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="px-4 py-2">
        <Navigation />

        <div className="grid grid-cols-1 gap-4">
          {products.map((product) => (
            <ProductListing key={product.id} product={product} showPriceAndButton={false} />
          ))}
        </div>
      </div>
    </main>
  )
}
