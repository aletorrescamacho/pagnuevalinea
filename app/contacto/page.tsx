import Navbar from "@/components/navbar"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function ContactoPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
