"use client"

import useSWR from "swr"
import { client } from "@/sanity/lib/client"
import { queries } from "@/lib/sanity"
import type {
  HeroData,
  StatsData,
  FeaturesData,
  ServicesData,
  ProcessData,
  GuaranteesData,
  LicenseData,
  TestimonialsData,
  FaqData,
  ContactData,
  HeaderData,
  FooterData,
  SiteSettingsData,
} from "@/lib/sanity"

const fetcher = <T>(query: string): Promise<T> => client.fetch(query)

export function useHero() {
  return useSWR<HeroData | null>(queries.hero, fetcher)
}

export function useStats() {
  return useSWR<StatsData | null>(queries.stats, fetcher)
}

export function useFeatures() {
  return useSWR<FeaturesData | null>(queries.features, fetcher)
}

export function useServices() {
  return useSWR<ServicesData | null>(queries.services, fetcher)
}

export function useProcess() {
  return useSWR<ProcessData | null>(queries.process, fetcher)
}

export function useGuarantees() {
  return useSWR<GuaranteesData | null>(queries.guarantees, fetcher)
}

export function useLicense() {
  return useSWR<LicenseData | null>(queries.license, fetcher)
}

export function useTestimonials() {
  return useSWR<TestimonialsData | null>(queries.testimonials, fetcher)
}

export function useFaq() {
  return useSWR<FaqData | null>(queries.faq, fetcher)
}

export function useContact() {
  return useSWR<ContactData | null>(queries.contact, fetcher)
}

export function useHeader() {
  return useSWR<HeaderData | null>(queries.header, fetcher)
}

export function useFooter() {
  return useSWR<FooterData | null>(queries.footer, fetcher)
}

export function useSiteSettings() {
  return useSWR<SiteSettingsData | null>(queries.siteSettings, fetcher)
}
