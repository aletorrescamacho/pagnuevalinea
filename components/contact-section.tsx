"use client"

import { Instagram, MessageSquare } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contacto" className="w-full py-8 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        {/* Título con línea decorativa */}
        <div className="relative text-center mb-6">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-beige-dark/30"></div>
          <h2 className="elegant-title text-3xl relative inline-block bg-gray-50 px-8">Contacto</h2>
        </div>

        <div className="space-y-3 text-gray-600 mb-8">
          <p>nueva_linea@hotmail.com</p>
          <p>Telf: 0414-241.13.32</p>
          <p>Caracas, Venezuela</p>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <a
            href="https://wa.me/584142411332"
            className="text-gray-600 hover:text-beige-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare size={24} />
            <span className="sr-only">WhatsApp</span>
          </a>
          <a
            href="https://www.instagram.com/nuevalineaccs/?hl=es-la"
            className="text-gray-600 hover:text-beige-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={24} />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>
    </section>
  )
}
