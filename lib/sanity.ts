import { client, urlFor } from "@/sanity/lib/client"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

// Types for Sanity data
export interface HeroData {
  badge?: string
  title?: string
  highlightedText?: string
  subtitle?: string
  description?: string
  buttonText?: string
  telegramButtonText?: string
  backgroundImage?: SanityImageSource
}

export interface StatsData {
  items?: Array<{
    value: string
    label: string
  }>
}

export interface FeaturesData {
  sectionBadge?: string
  title?: string
  description?: string
  items?: Array<{
    icon?: string
    title: string
    description: string
    stat?: string
    statLabel?: string
  }>
}

export interface ServicesData {
  title?: string
  description?: string
  items?: Array<{
    title: string
    description: string
    price: string
    image?: SanityImageSource
    duration: string
    tags?: string[]
  }>
}

export interface ProcessData {
  sectionBadge?: string
  title?: string
  description?: string
  steps?: Array<{
    step?: number
    title: string
    description: string
    icon?: string
  }>
}

export interface GuaranteesData {
  title?: string
  description?: string
  items?: Array<{
    icon?: string
    title: string
    description: string
  }>
}

export interface LicenseData {
  title?: string
  description?: string
  licenseNumber?: string
  images?: Array<{
    image?: SanityImageSource
    alt?: string
    title?: string
  }>
}

export interface TestimonialsData {
  sectionBadge?: string
  title?: string
  description?: string
  items?: Array<{
    name: string
    age?: number
    location?: string
    rating: number
    text: string
    date?: string
    avatar?: SanityImageSource
  }>
}

export interface FaqData {
  title?: string
  description?: string
  items?: Array<{
    question: string
    answer: string
  }>
}

export interface ContactData {
  sectionBadge?: string
  title?: string
  description?: string
  buttonText?: string
  phone?: string
  workHours?: string
  address?: string
  formFields?: {
    nameLabel?: string
    phoneLabel?: string
    messageLabel?: string
  }
}

export interface HeaderData {
  logo?: SanityImageSource
  siteName?: string
  navigation?: Array<{
    label: string
    href: string
  }>
  ctaButtonText?: string
}

export interface FooterData {
  siteName?: string
  description?: string
  quickLinks?: Array<{
    label: string
    href: string
  }>
  copyrightText?: string
}

export interface HeadScript {
  name?: string
  code?: string
  isEnabled?: boolean
}

export interface SiteSettingsData {
  seoTitle?: string
  seoDescription?: string
  siteUrl?: string
  phone?: string
  email?: string
  telegram?: string
  whatsapp?: string
  max?: string
  workingHours?: string
  address?: string
  headScripts?: HeadScript[]
}

// GROQ Queries
export const queries = {
  hero: `*[_type == "hero"][0]`,
  stats: `*[_type == "stats"][0]`,
  features: `*[_type == "features"][0]`,
  services: `*[_type == "services"][0]`,
  process: `*[_type == "process"][0]`,
  guarantees: `*[_type == "guarantees"][0]`,
  license: `*[_type == "license"][0]`,
  testimonials: `*[_type == "testimonials"][0]`,
  faq: `*[_type == "faq"][0]`,
  contact: `*[_type == "contact"][0]`,
  header: `*[_type == "header"][0]`,
  footer: `*[_type == "footer"][0]`,
  siteSettings: `*[_type == "siteSettings"][0]`,
}

// Fetch functions
export async function getHero(): Promise<HeroData | null> {
  return client.fetch(queries.hero)
}

export async function getStats(): Promise<StatsData | null> {
  return client.fetch(queries.stats)
}

export async function getFeatures(): Promise<FeaturesData | null> {
  return client.fetch(queries.features)
}

export async function getServices(): Promise<ServicesData | null> {
  return client.fetch(queries.services)
}

export async function getProcess(): Promise<ProcessData | null> {
  return client.fetch(queries.process)
}

export async function getGuarantees(): Promise<GuaranteesData | null> {
  return client.fetch(queries.guarantees)
}

export async function getLicense(): Promise<LicenseData | null> {
  return client.fetch(queries.license)
}

export async function getTestimonials(): Promise<TestimonialsData | null> {
  return client.fetch(queries.testimonials)
}

export async function getFaq(): Promise<FaqData | null> {
  return client.fetch(queries.faq)
}

export async function getContact(): Promise<ContactData | null> {
  return client.fetch(queries.contact)
}

export async function getHeader(): Promise<HeaderData | null> {
  return client.fetch(queries.header)
}

export async function getFooter(): Promise<FooterData | null> {
  return client.fetch(queries.footer)
}

export async function getSiteSettings(): Promise<SiteSettingsData | null> {
  return client.fetch(queries.siteSettings)
}

// Helper to get image URL
export function getSanityImageUrl(source: SanityImageSource | undefined): string | null {
  if (!source) return null
  return urlFor(source).url()
}
