import Header from "@/components/header"
import Navigation from "@/components/navigation"

export default function AboutUs() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="px-4 py-2">
        <Navigation />

        <div className="bg-[#f5f5f5] p-4 rounded">
          <p className="text-sm mb-3">
            En MateParaVos, celebramos la pasión por el mate y su cultura. Somos una tienda especializada en ofrecer
            mates, bombillas, térmicas y accesorios seleccionados cuidadosamente para brindarte la mejor experiencia en
            tu ritual diario. Creemos que el mate es mucho más que una bebida: es encuentro, es pausa, es tradición.
          </p>
          <p className="text-sm mb-3">
            Desde nuestros comienzos, nos propusimos traer productos de calidad que reflejen la autenticidad y
            originalidad. Trabajamos con artesanos locales y marcas reconocidas para ofrecerte mates de calabaza,
            cerámica, madera, vidrio, silicona, vidrio, adaptaciones a todos los estilos y necesidades.
          </p>
          <p className="text-sm">
            Si el mate es parte de toda tu vida o estás dando tus primeros pasos en esta hermosa costumbre, en Provincia
            de la Pampa nos encontrarás para asesorarte en lo que necesitás. Te invitamos a visitarnos y a ser parte de
            esta comunidad donde el mate es protagonista de los mejores momentos. ¡Bienvenido a tu nuevo espacio matero!
          </p>
        </div>
      </div>
    </main>
  )
}
