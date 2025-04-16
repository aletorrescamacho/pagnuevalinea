import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactSection from "@/components/contact-section"

export default function GaleriaPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Banner de la galería con imagen de fondo */}
      <div className="relative h-[200px] md:h-[250px]">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75"
          style={{ backgroundImage: "url('/banner-galeria.jpg')" }}
        ></div>

        {/* Overlay oscuro para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Texto centrado */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wider">GALERÍA</h1>
        </div>
      </div>

      {/* Título de la sección */}
      <div className="relative text-center my-8">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-beige-dark/30"></div>
        <h2 className="elegant-title text-3xl relative inline-block bg-white px-8">Algunos de nuestros trabajos</h2>
      </div>

      {/* Galería de imágenes con HTML básico */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Fila 1 */}
          <div className="flex justify-center">
            <div className="w-[250px] overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-[20/21] overflow-hidden">
                <img
                  src="/galeria1.jpg"
                  alt="Cocina con acabados en verde"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[250px] overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-[20/21] overflow-hidden">
                <img
                  src="/galeria2.jpg"
                  alt="Cocina moderna con acabados en beige"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[250px] overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-[20/21] overflow-hidden">
                <img
                  src="/galeria3.jpg"
                  alt="Oficina con estanterías"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Fila 2 */}
          <div className="flex justify-center">
            <div className="w-[250px] overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-[20/21] overflow-hidden">
                <img
                  src="/galeria4.jpg"
                  alt="Mueble de televisión"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[250px] overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-[20/21] overflow-hidden">
                <img
                  src="/galeria5.jpg"
                  alt="Armario con puertas de madera"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[250px] overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-[20/21] overflow-hidden">
                <img
                  src="/galeria6.jpg"
                  alt="Baño moderno"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Fila 3 */}
          <div className="flex justify-center">
            <div className="w-[250px] overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-[20/21] overflow-hidden">
                <img
                  src="/galeria7.jpg"
                  alt="Closet con estantes"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[250px] overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-[20/21] overflow-hidden">
                <img
                  src="/galeria8.jpg"
                  alt="Lavamanos con encimera de mármol"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[250px] overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-[20/21] overflow-hidden">
                <img
                  src="/galeria9.jpg"
                  alt="Oficina completa"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Fila 4 */}
          <div className="flex justify-center">
            <div className="w-[250px] overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-[20/21] overflow-hidden">
                <img
                  src="/galeria10.jpg"
                  alt="Estantería con iluminación"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[250px] overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-[20/21] overflow-hidden">
                <img
                  src="/galeria11.jpg"
                  alt="Cocina en tonos grises"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[250px] overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-[20/21] overflow-hidden">
                <img
                  src="/galeria12.jpg"
                  alt="Cocina con isla central"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Fila 5 */}
          <div className="flex justify-center">
            <div className="w-[250px] overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-[20/21] overflow-hidden">
                <img
                  src="/galeria13.jpg"
                  alt="Escalera con peldaños de madera"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[250px] overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-[20/21] overflow-hidden">
                <img
                  src="/galeria14.jpg"
                  alt="Mueble de entrada"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[250px] overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-[20/21] overflow-hidden">
                <img
                  src="/galeria15.jpg"
                  alt="Vitrina para copas"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de contacto */}
      <ContactSection />

      <Footer />
    </main>
  )
}
