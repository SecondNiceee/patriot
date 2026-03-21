import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { HeadScripts } from "@/components/head-scripts"
import { getSiteSettings } from "@/lib/sanity"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettings()
  const siteUrl = siteSettings?.siteUrl || "https://patriot-prava.ru"
  const faviconUrl = `${siteUrl}/favicon.ico`

  return {
    title: siteSettings?.seoTitle || "Получить водительские права | Оформить права без автошколы | Заказать водительское удостоверение",
    description: siteSettings?.seoDescription || "Получить водительские права быстро и надёжно. Оформить права без автошколы. Заказать водительское удостоверение с гарантией. Сделать права категории B, C, D официально.",
    keywords: [
      // Основные запросы
      "получить водительские права",
      "получить права",
      "заказать права",
      "заказать водительские права",
      "оформить водительские права",
      "оформить права",
      "сделать права",
      "сделать водительские права",
      // Расширенные запросы
      "водительское удостоверение получить",
      "водительское удостоверение оформить",
      "водительское удостоверение заказать",
      "права без обучения",
      "права без автошколы",
      "права без экзаменов",
      "права быстро",
      "права срочно",
      "права недорого",
      "права с гарантией",
      "права онлайн",
      // По категориям
      "права категории B",
      "права категории C",
      "права категории D",
      "права категории A",
      "права категории E",
      // Дополнительные услуги
      "восстановить права",
      "восстановление водительских прав",
      "обмен иностранных прав",
      "замена водительского удостоверения",
      // Локальные запросы
      "получить права Москва",
      "оформить права Россия",
      "водительские права РФ",
      // Помощь
      "помощь в получении прав",
      "содействие в получении прав",
      "юридическая помощь права",
    ],
    generator: "v0.app",
    icons: {
      icon: faviconUrl,
      apple: faviconUrl,
    },
    openGraph: {
      title: siteSettings?.seoTitle || "Получить водительские права | Оформить права быстро и официально",
      description: siteSettings?.seoDescription || "Быстрое оформление водительских прав. Получить права без автошколы с полной гарантией. Все категории: A, B, C, D, E.",
      type: "website",
      locale: "ru_RU",
      url: siteUrl,
    },
  }
}

export const metadata: Metadata = {
  title: "Получить водительские права | Оформить права без автошколы | Заказать водительское удостоверение",
  description:
    "Получить водительские права быстро и надёжно. Оформить права без автошколы. Заказать водительское удостоверение с гарантией. Сделать права категории B, C, D официально.",
  keywords: [
    // Основные запросы
    "получить водительские права",
    "получить права",
    "заказать права",
    "заказать водительские права",
    "оформить водительские права",
    "оформить права",
    "сделать права",
    "сделать водительские права",
    // Расширенные запросы
    "водительское удостоверение получить",
    "водительское удостоверение оформить",
    "водительское удостоверение заказать",
    "права без обучения",
    "права без автошколы",
    "права без экзаменов",
    "права быстро",
    "права срочно",
    "права недорого",
    "права с гарантией",
    "права онлайн",
    // По категориям
    "права категории B",
    "права категории C",
    "права категории D",
    "права категории A",
    "права категории E",
    // Дополнительные услуги
    "восстановить права",
    "восстановление водительских прав",
    "обмен иностранных прав",
    "замена водительского удостоверения",
    // Локальные запросы
    "получить права Москва",
    "оформить права Россия",
    "водительские права РФ",
    // Помощь
    "помощь в получении прав",
    "содействие в получении прав",
    "юридическая помощь права",
  ],
  generator: "v0.app",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Получить водительские права | Оформить права быстро и официально",
    description:
      "Быстрое оформление водительских прав. Получить права без автошколы с полной гарантией. Все категории: A, B, C, D, E.",
    type: "website",
    locale: "ru_RU",
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const siteSettings = await getSiteSettings()
  const siteUrl = siteSettings?.siteUrl || "https://patriot-prava.ru"

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Patriot Prava - Получение водительских прав",
    description:
      "Получить водительские права быстро и надёжно. Оформить права без автошколы с гарантией качества.",
    url: siteUrl,
    telephone: siteSettings?.phone || "+7 (914) 064-75-20",
    address: {
      "@type": "PostalAddress",
      addressCountry: "RU",
      addressLocality: "Россия",
    },
    sameAs: [siteSettings?.telegram, siteSettings?.whatsapp].filter(Boolean),
    priceRange: "$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "150",
    },
  }

  return (
    <html lang="ru">
      <head>
        <link rel="icon" href={`${siteUrl}/favicon.ico`} />
        <link rel="apple-touch-icon" href={`${siteUrl}/favicon.ico`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
        <HeadScripts scripts={siteSettings?.headScripts} />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
