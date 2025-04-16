import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactSection from "@/components/contact-section"
import Image from "next/image"

export default function EmpresaPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Banner de empresa con imagen de fondo */}
      <div className="relative h-[200px] md:h-[250px]">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image src="/empresa-banner.jpg" alt="Empresa banner" fill className="object-cover brightness-50" priority />
        </div>

        {/* Texto centrado */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wider">EMPRESA</h1>
        </div>
      </div>

      {/* Sección: Trayectoria con propósito */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="overflow-hidden rounded shadow-md h-[220px] w-full max-w-[400px] mx-auto">
              <img
                src="/empresa1.jpg"
                alt="Artesanos trabajando con madera"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="elegant-title text-3xl mb-6">Trayectoria con propósito</h2>
              <p className="text-gray-700">
                Somos una empresa familiar con más de 30 años de experiencia en el diseño y fabricación de mobiliario
                doméstico y comercial en Venezuela. En 2001 dimos un giro que marcó el inicio de una nueva etapa,
                combinando tradición, innovación y una visión fresca para seguir evolucionando con nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Hecho en casa, con calidad garantizada */}
      <section className="py-12 px-4 bg-beige">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              {/* Título con línea decorativa */}
              <div className="relative text-center mb-6">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-white/30"></div>
                <h2 className="elegant-title text-3xl relative inline-block bg-beige px-8 text-white">
                  Hecho en casa, con calidad garantizada
                </h2>
              </div>
              <p className="text-white">
                Fabricamos en el país utilizando materiales de primera, cuidadosamente seleccionados para asegurar la
                durabilidad, resistencia y estética de cada pieza. Nuestro compromiso es ofrecer productos que no solo
                se vean bien, sino que se mantengan impecables con el tiempo.
              </p>
            </div>
            <div className="order-1 md:order-2 overflow-hidden rounded shadow-md h-[220px] w-full max-w-[400px] mx-auto">
              <img
                src="/empresa2.jpg"
                alt="Materiales de carpintería"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Atención personalizada en cada proyecto */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="overflow-hidden rounded shadow-md h-[220px] w-full max-w-[400px] mx-auto">
              <img
                src="/empresa3.jpg"
                alt="Diseño personalizado con cliente"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="elegant-title text-3xl mb-6">Atención personalizada en cada proyecto</h2>
              <p className="text-gray-700">
                Acompañamos a cada cliente desde la idea hasta la instalación final. Escuchamos, asesoramos y nos
                adaptamos a cada necesidad para crear espacios funcionales, modernos y únicos. Nuestra atención cercana
                y detallada es el corazón de todo lo que hacemos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de contacto */}
      <ContactSection />

      <Footer />
    </main>
  )
}
