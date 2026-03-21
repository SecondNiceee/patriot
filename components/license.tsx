"use client"

import { useState } from "react"
import Image from "next/image"
import { Award, X, ChevronLeft, ChevronRight } from "lucide-react"
import { useLicense } from "@/hooks/use-sanity"
import { getSanityImageUrl } from "@/lib/sanity"

// Default data
const defaultLicenseImages = [
  {
    src: "/license1.jpg",
    alt: "Лицензия на осуществление образовательной деятельности №6651",
    title: "Лицензия №6651",
  },
  {
    src: "/license2.jpg",
    alt: "Приложение к лицензии — профессиональное обучение",
    title: "Приложение к лицензии",
  },
  {
    src: "/license3.jpg",
    alt: "Оборотная сторона лицензии — бессрочная",
    title: "Оборот лицензии",
  },
]

const defaultData = {
  title: "Лицензия и документы",
  description: "Мы работаем полностью официально. Наша деятельность лицензирована Региональной службой по надзору и контролю в сфере образования Ростовской области.",
  licenseNumber: "Лицензия № 6651 — Серия 61Л01 № 0004324 — Бессрочная",
}

export function License() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const { data, isLoading } = useLicense()

  const title = data?.title ?? defaultData.title
  const description = data?.description ?? defaultData.description
  const licenseNumber = data?.licenseNumber ?? defaultData.licenseNumber
  const licenseImages = data?.images?.length
    ? data.images.map((img, index) => ({
        src: img.image ? getSanityImageUrl(img.image) : defaultLicenseImages[index]?.src || "/license1.jpg",
        alt: img.alt || defaultLicenseImages[index]?.alt || "Лицензия",
        title: img.title || defaultLicenseImages[index]?.title || `Лицензия ${index + 1}`,
      }))
    : defaultLicenseImages

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prev = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + licenseImages.length) % licenseImages.length : null))
  const next = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % licenseImages.length : null))

  return (
    <section className="py-16 bg-secondary/40">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-2">
            <Award className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {title}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Info badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/20 rounded-2xl px-6 py-3">
            <Award className="h-5 w-5 text-accent flex-shrink-0" />
            <span className="text-sm font-medium text-foreground">
              {licenseNumber}
            </span>
          </div>
        </div>

        {/* Images grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {licenseImages.map((img, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`Открыть: ${img.title}`}
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={img.src || "/license1.jpg"}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              </div>
              <div className="p-4 text-left">
                <p className="text-sm font-semibold text-foreground">{img.title}</p>
                <p className="text-xs text-muted-foreground mt-1">Нажмите для увеличения</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            onClick={closeLightbox}
            aria-label="Закрыть"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            className="absolute left-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Предыдущий"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div
            className="relative max-w-2xl w-full mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={licenseImages[lightboxIndex].src || "/license1.jpg"}
              alt={licenseImages[lightboxIndex].alt}
              width={800}
              height={1067}
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            <p className="text-center text-white/80 text-sm mt-3">
              {licenseImages[lightboxIndex].title} — {lightboxIndex + 1} / {licenseImages.length}
            </p>
          </div>

          <button
            className="absolute right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Следующий"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  )
}
