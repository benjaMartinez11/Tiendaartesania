import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  slug: string;
  features: string[];
}

interface ProductListingProps {
  product: Product;
  showPriceAndButton?: boolean;
}

export default function ProductListing({
  product,
  showPriceAndButton = true,
}: ProductListingProps) {
  return (
    <div className="bg-[#f5f5f5] p-4 rounded">
      <Link href={`/producto/${product.slug}`} className="block">
        <div className="flex justify-center mb-2">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
        <h3 className="font-medium text-sm text-center mb-1">
          {product.title}
        </h3>
      </Link>
      {showPriceAndButton && (
        <>
          <p className="text-xl font-bold text-center mb-2">
            <sup className="text-sm">$</sup>
            {formatCurrency(product.price)}
          </p>
          <Link href={`/producto/${product.slug}`} className="block w-full">
            <button className="w-full bg-[#1d1b20] text-white py-1 rounded text-sm mb-3">
              Comprar
            </button>
          </Link>
        </>
      )}
      <ul className="text-xs space-y-1">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-1">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
