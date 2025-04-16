"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import ExperienceSection from "@/components/experience-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  // Efecto para manejar el desplazamiento a la sección de contacto cuando se carga la página
  useEffect(() => {
    // Verificar si hay un hash en la URL
    if (window.location.hash === "#contacto") {
      // Pequeño retraso para asegurar que todos los elementos estén cargados
      setTimeout(() => {
        const contactSection = document.getElementById("contacto")
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [])

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
