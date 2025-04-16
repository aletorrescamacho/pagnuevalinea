import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactSection from "@/components/contact-section"
import Image from "next/image"

export default function ServiciosPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Banner de servicios con imagen de fondo */}
      <div className="relative h-[200px] md:h-[250px]">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image
            src="/servicios-banner.jpg"
            alt="Servicios banner"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Texto centrado */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wider">SERVICIOS</h1>
        </div>
      </div>

      {/* Sección: Diseño Personalizado */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Título con línea decorativa */}
          <div className="relative text-center mb-10">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-beige-dark/30"></div>
            <h2 className="elegant-title text-3xl relative inline-block bg-white px-8">Diseño Personalizado</h2>
          </div>

          {/* Contenido */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="w-[250px] overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/servicios1.jpg"
                  alt="Plano técnico 2D"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="w-[250px] overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/servicios2.jpg"
                  alt="Diseño 3D wireframe"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="w-[250px] overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/servicios3.jpg"
                  alt="Cocina terminada"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <p className="text-gray-700 text-center max-w-4xl mx-auto">
            Ofrecemos un servicio de diseño personalizado para crear cocinas, closets y muebles de baño que se ajusten a
            sus necesidades y presupuesto. Nuestro equipo de expertos trabajará con usted para comprender su visión,
            tomar medidas precisas de su espacio y crear diseños en 3D renderizados que le permitan visualizar cómo se
            verá el resultado final.
          </p>
        </div>
      </section>

      {/* Sección: Fabricación */}
      <section className="py-12 px-4 bg-beige">
        <div className="max-w-6xl mx-auto">
          {/* Título con línea decorativa */}
          <div className="relative text-center mb-10">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/30"></div>
            <h2 className="elegant-title text-3xl relative inline-block bg-beige px-8 text-white">Fabricación</h2>
          </div>

          {/* Contenido */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="w-[250px] overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/servicios4.jpg"
                  alt="Carpintero trabajando"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="w-[250px] overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/servicios5.jpg"
                  alt="Materiales de madera"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <p className="text-white text-center max-w-4xl mx-auto">
            En Cocinas Nueva Línea, no solo creamos diseños excepcionales, sino que también los materializamos con la
            más alta calidad y precisión en nuestro taller de fabricación. Contamos con un equipo de artesanos
            experimentados que utilizan técnicas de vanguardia y materiales de primera línea para darle vida a su diseño
            personalizado.
          </p>
        </div>
      </section>

      {/* Sección: Instalación */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Título con línea decorativa */}
          <div className="relative text-center mb-10">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-beige-dark/30"></div>
            <h2 className="elegant-title text-3xl relative inline-block bg-white px-8">Instalación</h2>
          </div>

          {/* Contenido */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="w-[250px] overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/servicios6.jpg"
                  alt="Instalación de muebles"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="w-[250px] overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/servicios7.jpg"
                  alt="Instalación de muebles"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="w-[250px] overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/servicios8.jpg"
                  alt="Instalación de muebles"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <p className="text-gray-700 text-center max-w-4xl mx-auto">
            Nuestro equipo se encarga de instalar cocinas, closets y muebles con precisión, cuidado y compromiso,
            asegurando que cada pieza encaje a la perfección, respetando el diseño acordado y utilizando materiales de
            alta calidad para garantizar durabilidad, funcionalidad y un acabado impecable.
          </p>
        </div>
      </section>

      {/* Sección de contacto */}
      <ContactSection />

      <Footer />
    </main>
  )
}
