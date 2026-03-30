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
import {
  getHero,
  getHeader,
  getStats,
  getFeatures,
  getServices,
  getProcess,
  getGuarantees,
  getLicense,
  getTestimonials,
  getFaq,
  getContact,
  getFooter,
  getSiteSettings,
} from "@/lib/sanity"

export const revalidate = 60 // ISR: revalidate every 60 seconds

export default async function HomePage() {
  // Fetch all data on the server in parallel
  const [
    heroData,
    headerData,
    statsData,
    featuresData,
    servicesData,
    processData,
    guaranteesData,
    licenseData,
    testimonialsData,
    faqData,
    contactData,
    footerData,
    siteSettingsData,
  ] = await Promise.all([
    getHero(),
    getHeader(),
    getStats(),
    getFeatures(),
    getServices(),
    getProcess(),
    getGuarantees(),
    getLicense(),
    getTestimonials(),
    getFaq(),
    getContact(),
    getFooter(),
    getSiteSettings(),
  ])

  return (
    <main className="min-h-screen">
      <Header data={headerData} />
      <FloatingSocials data={siteSettingsData} />
      <PopupForm data={siteSettingsData} />
      <Hero data={heroData} />
      <Stats data={statsData} />
      <Features data={featuresData} />
      <Services data={servicesData} />
      <Process data={processData} />
      <Guarantees data={guaranteesData} />
      <License data={licenseData} />
      <ContactForm data={contactData} siteSettings={siteSettingsData} />
      <Testimonials data={testimonialsData} />
      <Faq data={faqData} />
      <Footer data={footerData} siteSettings={siteSettingsData} />
    </main>
  )
}
