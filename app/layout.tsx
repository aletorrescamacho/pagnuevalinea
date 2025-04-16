import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

// Configuración de la fuente Inter para el texto general
const inter = Inter({ subsets: ["latin"] })

// Configuración de la fuente Playfair Display para títulos
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Diseño y Fabricación de Cocinas y Muebles",
  description:
    "Empresa especializada en la fabricación de cocinas, muebles y carpintería con más de 30 años de experiencia en Venezuela.",
    icons: {
      icon: "/favicon.png",
    },


}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${playfair.variable}`}>{children}</body>
    </html>
  )
}


import './globals.css'