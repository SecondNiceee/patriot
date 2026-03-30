import { client, urlFor, sanityFetch } from "@/sanity/lib/client"
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

// GROQ Queries - order by _updatedAt desc to get the most recently updated document
export const queries = {
  hero: `*[_type == "hero"] | order(_updatedAt desc)[0]`,
  stats: `*[_type == "stats"] | order(_updatedAt desc)[0]`,
  features: `*[_type == "features"] | order(_updatedAt desc)[0]`,
  services: `*[_type == "services"] | order(_updatedAt desc)[0]`,
  process: `*[_type == "process"] | order(_updatedAt desc)[0]`,
  guarantees: `*[_type == "guarantees"] | order(_updatedAt desc)[0]`,
  license: `*[_type == "license"] | order(_updatedAt desc)[0]`,
  testimonials: `*[_type == "testimonials"] | order(_updatedAt desc)[0]`,
  faq: `*[_type == "faq"] | order(_updatedAt desc)[0]`,
  contact: `*[_type == "contact"] | order(_updatedAt desc)[0]`,
  header: `*[_type == "header"] | order(_updatedAt desc)[0]`,
  footer: `*[_type == "footer"] | order(_updatedAt desc)[0]`,
  siteSettings: `*[_type == "siteSettings"] | order(_updatedAt desc)[0]`,
}

// Fetch functions - using sanityFetch to bypass Next.js cache
export async function getHero(): Promise<HeroData | null> {
  return sanityFetch<HeroData | null>(queries.hero)
}

export async function getStats(): Promise<StatsData | null> {
  return sanityFetch<StatsData | null>(queries.stats)
}

export async function getFeatures(): Promise<FeaturesData | null> {
  return sanityFetch<FeaturesData | null>(queries.features)
}

export async function getServices(): Promise<ServicesData | null> {
  return sanityFetch<ServicesData | null>(queries.services)
}

export async function getProcess(): Promise<ProcessData | null> {
  return sanityFetch<ProcessData | null>(queries.process)
}

export async function getGuarantees(): Promise<GuaranteesData | null> {
  return sanityFetch<GuaranteesData | null>(queries.guarantees)
}

export async function getLicense(): Promise<LicenseData | null> {
  return sanityFetch<LicenseData | null>(queries.license)
}

export async function getTestimonials(): Promise<TestimonialsData | null> {
  return sanityFetch<TestimonialsData | null>(queries.testimonials)
}

export async function getFaq(): Promise<FaqData | null> {
  return sanityFetch<FaqData | null>(queries.faq)
}

export async function getContact(): Promise<ContactData | null> {
  return sanityFetch<ContactData | null>(queries.contact)
}

export async function getHeader(): Promise<HeaderData | null> {
  return sanityFetch<HeaderData | null>(queries.header)
}

export async function getFooter(): Promise<FooterData | null> {
  return sanityFetch<FooterData | null>(queries.footer)
}

export async function getSiteSettings(): Promise<SiteSettingsData | null> {
  return sanityFetch<SiteSettingsData | null>(queries.siteSettings)
}

// Helper to get image URL
export function getSanityImageUrl(source: SanityImageSource | undefined): string | null {
  if (!source) return null
  return urlFor(source).url()
}

// Default values for fallback
const DEFAULT_SERVICES: ServicesData = {
  title: "Наши услуги",
  description: "Полный спектр услуг по оформлению водительских прав",
  items: [
    {
      title: "Права категории B",
      description: "Самая популярная категория для легковых автомобилей. Быстрое оформление, гарантия законности",
      price: "65 000 руб.",
      duration: "3-7 дней",
      tags: ["Категория: B"],
    },
    {
      title: "Права категории A",
      description: "Права на мотоциклы и мопеды. Быстрое оформление без экзаменов. Официальное внесение в базу ГИБДД за 3-5 дней",
      price: "55 000 руб.",
      duration: "3-5 дней",
      tags: ["Категория: A, A1"],
    },
    {
      title: "Права категории C",
      description: "Права на грузовые автомобили до 7,5 тонн. Профессиональное оформление с гарантией качества документов",
      price: "75 000 руб.",
      duration: "5-10 дней",
      tags: ["Категория: C, C1"],
    },
    {
      title: "Права категории D",
      description: "Права на пассажирский транспорт и автобусы. Полное оформление с гарантией качества",
      price: "85 000 руб.",
      duration: "7-14 дней",
      tags: ["Категория: D, D1"],
    },
    {
      title: "Помощь в восстановлении после лишения",
      description: "Комплексное сопровождение при возврате водительских прав после лишения",
      price: "50 000 руб.",
      duration: "7-14 дней",
      tags: ["Юридическая помощь", "Полное сопровождение"],
    },
    {
      title: "Свидетельство об окончании автошколы",
      description: "Получение свидетельства об окончании автошколы в кратчайшие сроки",
      price: "35 000 руб.",
      duration: "1-3 дня",
      tags: ["Официальный документ"],
    },
  ],
}

const DEFAULT_FEATURES: FeaturesData = {
  title: "Почему выбирают нас",
  sectionBadge: "Преимущества",
  items: [
    {
      icon: "Car",
      title: "Полное сопровождение",
      description: "Ведём вас от первой консультации до момента получения удостоверения в руки.",
      stat: "100%",
      statLabel: "поддержка",
    },
    {
      icon: "Zap",
      title: "Быстрые сроки",
      description: "Оптимизированный процесс позволяет получить права в кратчайшие сроки.",
      stat: "14",
      statLabel: "дней",
    },
    {
      icon: "FileCheck",
      title: "Юридическая чистота",
      description: "Все документы оформляются официально с соблюдением законодательства.",
      stat: "100%",
      statLabel: "легально",
    },
    {
      icon: "Shield",
      title: "Гарантия результата",
      description: "Гарантируем получение водительского удостоверения или возврат средств.",
      stat: "5 лет",
      statLabel: "гарантия",
    },
    {
      icon: "Clock",
      title: "Поддержка 24/7",
      description: "Наши специалисты всегда на связи и готовы ответить на ваши вопросы.",
      stat: "24/7",
      statLabel: "онлайн",
    },
    {
      icon: "Users",
      title: "Индивидуальный подход",
      description: "Учитываем особенности каждого клиента и подбираем оптимальное решение.",
      stat: "2500+",
      statLabel: "клиентов",
    },
  ],
}

const DEFAULT_PROCESS: ProcessData = {
  title: "Процесс получения прав",
  sectionBadge: "Как это работает",
  steps: [
    {
      step: 1,
      title: "Оставьте заявку на получение прав",
      description: "Свяжитесь с нами через форму на сайте, WhatsApp, Telegram или позвоните напрямую.",
    },
    {
      step: 2,
      title: "Бесплатная консультация",
      description: "Наш специалист проконсультирует вас, расскажет как получить права и подберёт оптимальное решение.",
    },
    {
      step: 3,
      title: "Оформление документов",
      description: "Собираем и оформляем все необходимые документы для получения водительского удостоверения.",
    },
    {
      step: 4,
      title: "Обучение и подготовка",
      description: "Проводим обучение по теории и практике вождения с опытными инструкторами.",
    },
    {
      step: 5,
      title: "Сдача экзаменов",
      description: "Сопровождаем вас на экзаменах в ГИБДД, помогаем со всеми организационными вопросами.",
    },
    {
      step: 6,
      title: "Получение водительского удостоверения",
      description: "Вы получаете водительские права и можете законно управлять автомобилем.",
    },
  ],
}

const DEFAULT_GUARANTEES: GuaranteesData = {
  title: "Наши гарантии",
  description: "Мы отвечаем за качество нашей работы",
  items: [
    {
      icon: "FileCheck",
      title: "Официальное оформление",
      description: "100% официальное оформление всех документов",
    },
    {
      icon: "Banknote",
      title: "Возврат средств",
      description: "Возврат средств, если не получите права",
    },
    {
      icon: "Lock",
      title: "Конфиденциальность",
      description: "Конфиденциальность ваших данных",
    },
    {
      icon: "Award",
      title: "Прозрачные цены",
      description: "Прозрачное ценообразование без скрытых платежей",
    },
    {
      icon: "Shield",
      title: "Юридическое сопровождение",
      description: "Юридическое сопровождение на всех этапах",
    },
    {
      icon: "Headphones",
      title: "Поддержка после получения",
      description: "Поддержка после получения прав",
    },
  ],
}

const DEFAULT_FAQ: FaqData = {
  title: "Частые вопросы",
  items: [
    {
      question: "Сколько времени занимает получение водительских прав?",
      answer: "В среднем процесс оформления прав занимает от 2 до 4 недель в зависимости от выбранной программы. Мы стараемся оптимизировать все этапы для максимально быстрого результата.",
    },
    {
      question: "Какие документы нужны чтобы заказать права?",
      answer: "Базово требуется паспорт гражданина РФ и медицинская справка. Все остальные документы мы поможем собрать и оформить в процессе получения водительского удостоверения.",
    },
    {
      question: "Что входит в стоимость оформления прав?",
      answer: "В стоимость входит: теоретическое обучение, практические занятия по вождению, учебные материалы, сопровождение на экзаменах в ГИБДД, все необходимые документы.",
    },
    {
      question: "Можно ли получить права без посещения автошколы?",
      answer: "Да, мы предлагаем программы получения водительского удостоверения с минимальным посещением. Гибкий график позволяет совмещать оформление прав с работой.",
    },
    {
      question: "Что делать, если не получилось сдать экзамен?",
      answer: "Не переживайте! Мы предоставляем дополнительные занятия для подготовки к пересдаче и сопровождаем вас до успешного получения прав.",
    },
    {
      question: "Есть ли рассрочка на оформление водительских прав?",
      answer: "Да, мы предлагаем удобную рассрочку платежа для получения прав без процентов и перепла��. Детали можно уточнить при консультации.",
    },
  ],
}

const DEFAULT_TESTIMONIALS: TestimonialsData = {
  title: "Отзывы клиентов",
  sectionBadge: "Они нам доверяют",
  items: [
    {
      name: "Анна",
      age: 28,
      rating: 5,
      text: "Очень переживала, но ребята всё объяснили и помогли быстро получить права. Спасибо Патриот!",
    },
    {
      name: "Игорь",
      age: 32,
      rating: 5,
      text: "Все сделали без нервов, сопровождение на каждом этапе. Рекомендую!",
    },
    {
      name: "Дмитрий",
      age: 41,
      rating: 5,
      text: "Права получил в срок, как и обещали. Отличная автошкола!",
    },
  ],
}

const DEFAULT_HEADER: HeaderData = {
  siteName: "Patriot Prava",
  navigation: [
    { label: "Услуги", href: "#services" },
    { label: "Преимущества", href: "#features" },
    { label: "Процесс", href: "#process" },
    { label: "Гарантии", href: "#guarantees" },
    { label: "Отзывы", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  ctaButtonText: "Получить консультацию",
}

const DEFAULT_FOOTER: FooterData = {
  siteName: "Patriot Prava",
  quickLinks: [
    { label: "Услуги", href: "#services" },
    { label: "Преимущества", href: "#features" },
    { label: "Процесс", href: "#process" },
    { label: "Гарантии", href: "#guarantees" },
    { label: "Отзывы", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Контакты", href: "#contact" },
  ],
  copyrightText: "© 2024 Patriot Prava. Все права защищены.",
}

// Fetch functions with fallbacks
export async function getServicesWithDefaults(): Promise<ServicesData> {
  const data = await getServices()
  return data || DEFAULT_SERVICES
}

export async function getFeaturesWithDefaults(): Promise<FeaturesData> {
  const data = await getFeatures()
  return data || DEFAULT_FEATURES
}

export async function getProcessWithDefaults(): Promise<ProcessData> {
  const data = await getProcess()
  return data || DEFAULT_PROCESS
}

export async function getGuaranteesWithDefaults(): Promise<GuaranteesData> {
  const data = await getGuarantees()
  return data || DEFAULT_GUARANTEES
}

export async function getFaqWithDefaults(): Promise<FaqData> {
  const data = await getFaq()
  return data || DEFAULT_FAQ
}

export async function getTestimonialsWithDefaults(): Promise<TestimonialsData> {
  const data = await getTestimonials()
  return data || DEFAULT_TESTIMONIALS
}

export async function getHeaderWithDefaults(): Promise<HeaderData> {
  const data = await getHeader()
  return data || DEFAULT_HEADER
}

export async function getFooterWithDefaults(): Promise<FooterData> {
  const data = await getFooter()
  return data || DEFAULT_FOOTER
}
