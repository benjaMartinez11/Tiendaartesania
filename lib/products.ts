export interface Product {
  id: number
  title: string
  description: string
  longDescription: string
  price: number
  image: string
  slug: string
  features: string[]
  specifications: {
    material: string
    height: string
    capacity: string
    weight: string
    origin: string
  }
}

export const products: Product[] = [
  {
    id: 1,
    title: "Mate Artesanal - Diseño flores y hojas",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    longDescription:
      "Este mate artesanal con diseño de flores y hojas es una pieza única elaborada por artesanos locales. Cada detalle ha sido cuidadosamente trabajado a mano, lo que garantiza que no hay dos iguales. El diseño floral representa la conexión con la naturaleza y la tradición.",
    price: 35999,
    image: "/placeholder.svg?height=200&width=200",
    slug: "mate-artesanal-diseno-flores-hojas",
    features: [
      "Mate artesanal de calabaza y alpaca",
      "Virola de alpaca fina",
      "Diseño de alpaca con motivos florales",
      "Suave y pasa de alpaca",
      "Comprá tu mate artesanal en MateParaVos",
    ],
    specifications: {
      material: "Calabaza natural y alpaca",
      height: "10 cm",
      capacity: "70 ml",
      weight: "120 g",
      origin: "Provincia de la Pampa, Argentina",
    },
  },
  {
    id: 2,
    title: "Mate de Calabaza - Trabajado a Mano",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    longDescription:
      "Este mate de calabaza trabajado a mano es un clásico de la tradición argentina. La calabaza ha sido seleccionada por su calidad y curada mediante un proceso tradicional que garantiza durabilidad y un sabor excepcional. Los detalles en alpaca le dan un toque distintivo y elegante.",
    price: 29999,
    image: "/placeholder.svg?height=200&width=200",
    slug: "mate-calabaza-trabajado-mano",
    features: [
      "Mate artesanal de calabaza y alpaca",
      "Virola de alpaca fina",
      "Diseño de alpaca de caballo",
      "Suave y pasa de alpaca",
      "Comprá tu mate artesanal en MateParaVos",
    ],
    specifications: {
      material: "Calabaza natural y alpaca",
      height: "9 cm",
      capacity: "60 ml",
      weight: "100 g",
      origin: "Provincia de la Pampa, Argentina",
    },
  },
  {
    id: 3,
    title: "Mate artesanal - cabeza de caballo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    longDescription:
      "Este mate artesanal con diseño de cabeza de caballo es una pieza única que combina tradición y arte. Elaborado en calabaza natural con detalles en alpaca, este mate representa la cultura gauchesca y la conexión con el campo argentino. Su diseño detallado lo convierte en una pieza de colección.",
    price: 40999,
    image: "/placeholder.svg?height=200&width=200",
    slug: "mate-artesanal-cabeza-caballo",
    features: [
      "Mate artesanal de calabaza y alpaca",
      "Virola de alpaca fina",
      "Diseño de alpaca de caballo",
      "Suave y pasa de alpaca",
      "Comprá tu mate artesanal en MateParaVos",
    ],
    specifications: {
      material: "Calabaza natural y alpaca",
      height: "11 cm",
      capacity: "80 ml",
      weight: "140 g",
      origin: "Provincia de la Pampa, Argentina",
    },
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}
