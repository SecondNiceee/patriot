"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useServices } from "@/hooks/use-sanity"
import { getSanityImageUrl } from "@/lib/sanity"

// Default data
const defaultServices = [
  {
    title: "Права категории B",
    description: "Самая популярная категория для легковых автомобилей. Быстрое оформление, гарантия законности",
    price: "65 000 руб.",
    image: "/categoryB.jpg",
    duration: "3-7 дней",
    tags: ["Категория: B"],
  },
  {
    title: "Права категории A",
    description: "Права на мотоциклы и мопеды. Быстрое оформление без экзаменов. Официальное внесение в базу ГИБДД за 3-5 дней",
    price: "55 000 руб.",
    image: "/categoryA.jpg",
    duration: "3-5 дней",
    tags: ["Категория: A, A1"],
  },
  {
    title: "Права категории C",
    description: "Права на грузовые автомобили до 7,5 тонн. Профессиональное оформление с гарантией качества документов",
    price: "75 000 руб.",
    image: "/categoryC.jpg",
    duration: "5-10 дней",
    tags: ["Категория: C, C1"],
  },
  {
    title: "Права категории D",
    description: "Права на пассажирский транспорт и автобусы. Полное оформление с гарантией качества",
    price: "85 000 руб.",
    image: "/categoryD.jpg",
    duration: "7-14 дней",
    tags: ["Категория: D, D1"],
  },
  {
    title: "Помощь в восстановлении после лишения",
    description: "Комплексное сопровождение при возврате водительских прав после лишения",
    price: "50 000 руб.",
    image: "/help.jpg",
    duration: "7-14 дней",
    tags: ["Юридическая помощь", "Полное сопровождение"],
  },
  {
    title: "Свидетельство об окончании автошколы",
    description: "Получение свидетельства об окончании автошколы в кратчайшие сроки",
    price: "35 000 руб.",
    image: "/categoryB.jpg",
    duration: "1-3 дня",
    tags: ["Официальный документ"],
  },
]

const defaultData = {
  title: "Услуги по покупке водительских прав",
  description: "Предоставляем полный спектр услуг по получению водительских прав любой категории. От консультации до готового удостоверения в руках.",
}

export function Services() {
  const { data, isLoading } = useServices()

  const title = data?.title ?? defaultData.title
  const description = data?.description ?? defaultData.description
  const services = data?.items?.length 
    ? data.items.map(item => ({
        ...item,
        image: item.image ? getSanityImageUrl(item.image) : "/categoryB.jpg",
        tags: item.tags || [],
      }))
    : defaultServices

  return (
    <section id="services" className="py-16 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {title}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden border-2 border-accent/60 rounded-t-2xl m-3 mb-0">
                <Image
                  src={service.image || "/categoryB.jpg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold text-foreground leading-tight">{service.title}</h3>
                  <span className="shrink-0 px-3 py-1 bg-accent text-accent-foreground text-sm font-bold rounded-lg">
                    {service.price}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>

                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span className="px-2 py-1 bg-muted rounded">Срок: {service.duration}</span>
                  {service.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-muted rounded">{tag}</span>
                  ))}
                </div>

                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  ЗАКАЗАТЬ
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-xl border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Получить консультацию по услугам
          </Button>
        </div>
      </div>
    </section>
  )
}
