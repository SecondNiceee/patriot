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
  getServicesWithDefaults,
  getFeaturesWithDefaults,
  getProcessWithDefaults,
  getGuaranteesWithDefaults,
  getFaqWithDefaults,
  getTestimonialsWithDefaults,
  getHeaderWithDefaults,
  getFooterWithDefaults,
} from "@/lib/sanity"

export const revalidate = 0 // Always fetch fresh data from Sanity
export const dynamic = 'force-dynamic' // Force dynamic rendering, no caching

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
    getHeaderWithDefaults(),
    getStats(),
    getFeaturesWithDefaults(),
    getServicesWithDefaults(),
    getProcessWithDefaults(),
    getGuaranteesWithDefaults(),
    getLicense(),
    getTestimonialsWithDefaults(),
    getFaqWithDefaults(),
    getContact(),
    getFooterWithDefaults(),
    getSiteSettings(),
  ])

  // Debug: log fetched data to see what Sanity returns
  console.log("[v0] Hero data from Sanity:", JSON.stringify(heroData, null, 2))
  console.log("[v0] Services data from Sanity:", JSON.stringify(servicesData?.title, null, 2))

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
