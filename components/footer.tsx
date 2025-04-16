export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gray-100 py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">© {currentYear} Nueva Línea. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a
              href="https://www.instagram.com/nuevalineaccs/?hl=es-la"
              className="text-gray-600 hover:text-beige-dark text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/584142411332"
              className="text-gray-600 hover:text-beige-dark text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
