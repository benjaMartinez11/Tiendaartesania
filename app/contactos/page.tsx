import Header from "@/components/header"
import { Facebook, Instagram, Mail, Phone } from "lucide-react"
import Navigation from "@/components/navigation"

export default function Contactos() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="px-4 py-2">
        <Navigation />

        <div className="bg-[#f5f5f5] p-6 rounded">
          <div className="space-y-4">
            <a
              href="https://facebook.com/MateParaVos"
              className="flex items-center gap-2 bg-[#333333] text-white p-3 rounded-full"
            >
              <Facebook size={20} />
              <span className="text-sm">www.facebook.com/MateParaVos</span>
            </a>

            <a
              href="https://instagram.com/MateParaVos"
              className="flex items-center gap-2 bg-[#333333] text-white p-3 rounded-full"
            >
              <Instagram size={20} />
              <span className="text-sm">www.instagram.com/MateParaVos</span>
            </a>

            <a
              href="mailto:mateparavos@gmail.com"
              className="flex items-center gap-2 bg-[#333333] text-white p-3 rounded-full"
            >
              <Mail size={20} />
              <span className="text-sm">mateparavos@gmail.com</span>
            </a>

            <a href="tel:+5491123456789" className="flex items-center gap-2 bg-[#333333] text-white p-3 rounded-full">
              <Phone size={20} />
              <span className="text-sm">+5491123456789</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
