"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()

    // Siempre navegar a la página principal con el hash
    router.push("/#contacto")

    // Cerrar el menú móvil si está abierto
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  // Función para determinar si un enlace está activo
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }

  return (
    <nav className="bg-white py-4 px-6 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl">
          <Link href="/" className="text-gray-800 hover:text-beige-dark">
            <span className="font-playfair italic font-light tracking-wider">Nueva Línea</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className={isActive("/") ? "text-beige-dark" : "text-gray-600 hover:text-beige-dark"}>
            INICIO
          </Link>
          <Link
            href="/galeria"
            className={isActive("/galeria") ? "text-beige-dark" : "text-gray-600 hover:text-beige-dark"}
          >
            GALERÍA
          </Link>
          <Link
            href="/servicios"
            className={isActive("/servicios") ? "text-beige-dark" : "text-gray-600 hover:text-beige-dark"}
          >
            SERVICIOS
          </Link>
          <Link
            href="/empresa"
            className={isActive("/empresa") ? "text-beige-dark" : "text-gray-600 hover:text-beige-dark"}
          >
            EMPRESA
          </Link>
          <a
            href="/#contacto"
            onClick={handleContactClick}
            className="text-gray-600 hover:text-beige-dark cursor-pointer"
          >
            CONTACTO
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-beige-dark">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white py-2 px-4">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              className={isActive("/") ? "text-beige-dark" : "text-gray-600 hover:text-beige-dark py-2"}
              onClick={() => setIsMenuOpen(false)}
            >
              INICIO
            </Link>
            <Link
              href="/galeria"
              className={isActive("/galeria") ? "text-beige-dark" : "text-gray-600 hover:text-beige-dark py-2"}
              onClick={() => setIsMenuOpen(false)}
            >
              GALERÍA
            </Link>
            <Link
              href="/servicios"
              className={isActive("/servicios") ? "text-beige-dark" : "text-gray-600 hover:text-beige-dark py-2"}
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICIOS
            </Link>
            <Link
              href="/empresa"
              className={isActive("/empresa") ? "text-beige-dark" : "text-gray-600 hover:text-beige-dark py-2"}
              onClick={() => setIsMenuOpen(false)}
            >
              EMPRESA
            </Link>
            <a
              href="/#contacto"
              onClick={handleContactClick}
              className="text-gray-600 hover:text-beige-dark py-2 cursor-pointer"
            >
              CONTACTO
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
