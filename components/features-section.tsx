import Image from "next/image"

export default function FeaturesSection() {
  return (
    <section className="w-full bg-beige py-12">
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row gap-10 px-4">
          {/* Experiencia */}
          <div className="bg-white rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition-shadow w-[280px]">
            <div className="flex justify-center mb-5">
              <div className="w-16 h-16 flex items-center justify-center">
                <Image src="/tarjeta1.png" alt="Ícono de experiencia" width={64} height={64} />
              </div>
            </div>
            <h3 className="text-2xl font-medium text-[#8a7a5c] mb-4 font-playfair">Experiencia</h3>
            <p className="text-gray-600 leading-relaxed">
              Tenemos más de 30 años en el mercado de la carpintería en Venezuela, siendo reconocidos por la confianza
              de nuestros clientes.
            </p>
          </div>

          {/* Calidad */}
          <div className="bg-white rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition-shadow w-[280px]">
            <div className="flex justify-center mb-5">
              <div className="w-16 h-16 flex items-center justify-center">
                <Image src="/tarjeta2.png" alt="Ícono de calidad" width={64} height={64} />
              </div>
            </div>
            <h3 className="text-2xl font-medium text-[#8a7a5c] mb-4 font-playfair">Calidad</h3>
            <p className="text-gray-600 leading-relaxed">
              Ofrecemos atención personalizada y mobiliario elaborado con materiales y acabados de primera, siempre
              adaptándonos a las necesidades del cliente.
            </p>
          </div>

          {/* Diseño */}
          <div className="bg-white rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition-shadow w-[280px]">
            <div className="flex justify-center mb-5">
              <div className="w-16 h-16 flex items-center justify-center">
                <Image src="/tarjeta3.png" alt="Ícono de diseño" width={64} height={64} />
              </div>
            </div>
            <h3 className="text-2xl font-medium text-[#8a7a5c] mb-4 font-playfair">Diseño</h3>
            <p className="text-gray-600 leading-relaxed">
              Creamos cocinas que se adaptan a tu estilo y necesidades. Diseñamos espacios funcionales y modernos, con
              una amplia gama de materiales y acabados.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
