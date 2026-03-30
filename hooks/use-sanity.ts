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

// SWR конфигурация с минимальным кэшированием
const swrConfig = {
  revalidateOnFocus: true,
  revalidateOnReconnect: true,
  dedupingInterval: 5000,
  refreshInterval: 0,
}

export function useHero() {
  return useSWR<HeroData | null>(queries.hero, fetcher, swrConfig)
}

export function useStats() {
  return useSWR<StatsData | null>(queries.stats, fetcher, swrConfig)
}

export function useFeatures() {
  return useSWR<FeaturesData | null>(queries.features, fetcher, swrConfig)
}

export function useServices() {
  return useSWR<ServicesData | null>(queries.services, fetcher, swrConfig)
}

export function useProcess() {
  return useSWR<ProcessData | null>(queries.process, fetcher, swrConfig)
}

export function useGuarantees() {
  return useSWR<GuaranteesData | null>(queries.guarantees, fetcher, swrConfig)
}

export function useLicense() {
  return useSWR<LicenseData | null>(queries.license, fetcher, swrConfig)
}

export function useTestimonials() {
  return useSWR<TestimonialsData | null>(queries.testimonials, fetcher, swrConfig)
}

export function useFaq() {
  return useSWR<FaqData | null>(queries.faq, fetcher, swrConfig)
}

export function useContact() {
  return useSWR<ContactData | null>(queries.contact, fetcher, swrConfig)
}

export function useHeader() {
  return useSWR<HeaderData | null>(queries.header, fetcher, swrConfig)
}

export function useFooter() {
  return useSWR<FooterData | null>(queries.footer, fetcher, swrConfig)
}

export function useSiteSettings() {
  return useSWR<SiteSettingsData | null>(queries.siteSettings, fetcher, swrConfig)
}
