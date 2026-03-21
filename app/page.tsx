import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Features } from "@/components/features"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Guarantees } from "@/components/guarantees"
import { License } from "@/components/license"
import { Faq } from "@/components/faq"
import { ContactForm } from "@/components/contact-form"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { FloatingSocials } from "@/components/floating-socials"
import { PopupForm } from "@/components/popup-form"
import { getSiteSettings } from "@/lib/sanity"

export default async function HomePage() {
  const siteSettings = await getSiteSettings()

  return (
    <main className="min-h-screen">
      <Header />
      <FloatingSocials />
      <PopupForm siteSettings={siteSettings} />
      <Hero />
      <Stats />
      <Features />
      <Services />
      <Process />
      <Guarantees />
      <License />
      <ContactForm siteSettings={siteSettings} />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  )
}
