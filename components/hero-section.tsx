"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Puedes reemplazar estas URLs con tus propias imágenes
const slides = [
  {
    url: "/carruselppal1.jpg",
    alt: "Cocina moderna con gabinetes oscuros",
  },
  {
    url: "/carruselppal2.jpg",
    alt: "Cocina elegante con gabinetes de madera",
  },
  {
    url: "/carruselppal3.jpg",
    alt: "Cocina de lujo con encimeras de mármol",
  },
]

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(slideInterval)
  }, [currentIndex])

  return (
    <div className="relative w-full h-[250px] md:h-[350px]">
      <div className="w-full h-full relative">
        <Image
          src={slides[currentIndex].url || "/placeholder.svg"}
          alt={slides[currentIndex].alt}
          fill
          priority
          className="object-cover"
        />

        {/* Overlay para asegurar que el texto sea legible */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Botones de navegación */}
      <div className="absolute top-1/2 -translate-y-1/2 left-5 text-2xl p-2 bg-white/30 backdrop-blur-sm rounded-full cursor-pointer">
        <ChevronLeft onClick={prevSlide} className="text-white" size={24} />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-5 text-2xl p-2 bg-white/30 backdrop-blur-sm rounded-full cursor-pointer">
        <ChevronRight onClick={nextSlide} className="text-white" size={24} />
      </div>

      {/* Indicadores de diapositivas */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              slideIndex === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}