"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <Link
        href="/"
        className={`px-4 py-2 rounded text-sm ${isActive("/") ? "bg-[#1d1b20] text-white" : "bg-[#d9d9d9] text-black"}`}
      >
        MateParaVos
      </Link>
      <Link
        href="/sobre-nosotros"
        className={`px-4 py-2 rounded text-sm ${
          isActive("/sobre-nosotros") ? "bg-[#1d1b20] text-white" : "bg-[#d9d9d9] text-black"
        }`}
      >
        Sobre nosotros
      </Link>
      <Link
        href="/contactos"
        className={`px-4 py-2 rounded text-sm ${
          isActive("/contactos") ? "bg-[#1d1b20] text-white" : "bg-[#d9d9d9] text-black"
        }`}
      >
        Contactos
      </Link>
    </div>
  )
}
