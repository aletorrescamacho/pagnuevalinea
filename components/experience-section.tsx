"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Áreas de experiencia
const areas = [
  {
    id: "residencial",
    title: "Hogar",
    image: "/carrusel2.1.jpg",
    description:
      "Creamos espacios a tu medida con estilo y funcionalidad: cocinas modernas, closets personalizados, estudios, centros de entretenimiento y muebles de baño, todo con materiales de alta calidad, acabados impecables y asesoría en cada etapa del proceso.",
  },
  {
    id: "comercial",
    title: "Comercial",
    image: "/carrusel2.2.jpg",
    description:
      "Diseñamos y fabricamos mobiliario comercial de alta calidad que atrae clientes y potencia tus ventas. Vitrinas, estanterías, mostradores y más, con asesoría experta para crear espacios funcionales y visualmente impactantes.",
  },
  {
    id: "oficina",
    title: "Oficina",
    image: "/carrusel2.3.jpg",
    description:
      "Diseñamos y fabricamos mobiliario de oficina funcional, estético y ergonómico que impulsa la productividad. Escritorios, mesas, estanterías y más, con materiales de alta calidad y acabados duraderos.",
  },
]

export default function ExperienceSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? areas.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === areas.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="w-full py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Título con línea decorativa */}
        <div className="relative text-center mb-6">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-beige-dark/30"></div>
          <h2 className="elegant-title text-3xl relative inline-block bg-white px-8">Áreas de experiencia</h2>
        </div>

        <div className="relative">
          {/* Carrusel simplificado */}
          <div className="relative h-[400px] overflow-hidden">
            {areas.map((area, index) => (
              <div
                key={area.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div className="relative h-full w-full group">
                  <Image
                    src={area.image || "/placeholder.svg"}
                    alt={area.title}
                    fill
                    className="object-cover"
                    priority={index === currentIndex}
                  />
                  {/* Overlay que solo aparece en hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-white text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-semibold mb-2 font-playfair">{area.title}</h3>
                      <p className="text-sm max-w-lg">{area.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botones de navegación */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-4 z-20 bg-white/70 rounded-full p-2 shadow-md hover:bg-white transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-4 z-20 bg-white/70 rounded-full p-2 shadow-md hover:bg-white transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-4">
            {areas.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? "bg-beige-dark" : "bg-gray-300"}`}
                aria-label={`Ir a diapositiva ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
