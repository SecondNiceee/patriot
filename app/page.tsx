import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Features } from "@/components/features"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Guarantees } from "@/components/guarantees"
import { Faq } from "@/components/faq"
import { ContactForm } from "@/components/contact-form"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Services />
      <Process />
      <Guarantees />
      <ContactForm />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  )
}
