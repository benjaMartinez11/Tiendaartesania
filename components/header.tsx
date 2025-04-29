import { Menu, Search } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-[#ece6f0] p-4 flex items-center justify-between">
      <div className="text-xs text-center w-full">
        <h1>Bienvenidos a la plataforma online de productos artesanales</h1>
      </div>
      <div className="flex items-center gap-2 absolute right-4">
        <Menu size={20} />
        <Search size={20} />
      </div>
    </header>
  )
}
