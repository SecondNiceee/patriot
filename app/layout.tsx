import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { HeadScripts } from "@/components/head-scripts"
import { DynamicHead } from "@/components/dynamic-head"
import { getSiteSettings } from "@/lib/sanity"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#1a1a1a",
}

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettings()
  const siteUrl = siteSettings?.siteUrl || "https://patriot-prava.ru"
  const faviconUrl = `${siteUrl}/favicon.ico`

  return {
    title: siteSettings?.seoTitle || "Купить права, Приобрести водительские права | Patriot Prava",
    description: siteSettings?.seoDescription || "Купить водительские права быстро и официально. Приобрести права без автошколы с гарантией. Оформить удостоверение B, C, D - по низким ценам на Patriot Prava.",
    keywords: [
      // Ключевые поисковые запросы
      "купить права",
      "купить водительские права",
      "приобрести права",
      "приобрести водительские права",
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
      "водительское удостоверение купить",
      "водительское удостоверение приобрести",
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
      "купить права Москва",
      "приобрести права Москва",
      "получить права Москва",
      "оформить права Россия",
      "водительские права РФ",
      // Помощь
      "помощь в получении прав",
      "содействие в получении прав",
      "юридическая помощь права",
    ],
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    alternates: {
      canonical: siteUrl,
    },
    generator: "v0.app",
    icons: {
      icon: faviconUrl,
      apple: faviconUrl,
    },
    openGraph: {
      title: siteSettings?.seoTitle || "Купить права | Приобрести водительские права официально",
      description: siteSettings?.seoDescription || "Купить водительские права быстро и безопасно. Приобрести удостоверение без автошколы с гарантией качества.",
      type: "website",
      locale: "ru_RU",
      url: siteUrl,
    },
  }
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
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}#business`,
        name: "Patriot Prava - Купить и приобрести водительские права",
        description:
          "Купить водительские права официально. Приобрести удостоверение всех категорий без автошколы с полной гарантией.",
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
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}#service-main`,
        name: "Получение и приобретение водительских прав",
        description: "Купить водительские права всех категорий: A, B, C, D, E официально и безопасно",
        provider: {
          "@type": "LocalBusiness",
          "@id": `${siteUrl}#business`,
        },
        areaServed: "RU",
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Как купить водительские права?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Свяжитесь с нами через форму или телефон, и наши специалисты помогут вам приобрести права любой категории официально и быстро.",
            },
          },
          {
            "@type": "Question",
            name: "Можно ли приобрести права без автошколы?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Да, мы помогаем получить права без прохождения автошколы с полной гарантией качества и легальности.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Главная",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Услуги",
            item: `${siteUrl}#services`,
          },
        ],
      },
    ],
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
        <DynamicHead />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
