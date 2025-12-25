"use client"

import { Car, Zap, FileCheck, Shield, Clock, Users } from "lucide-react"

const features = [
  {
    icon: Car,
    title: "Полное сопровождение",
    description: "Ведём вас от первой консультации до момента получения удостоверения в руки.",
    stat: "100%",
    statLabel: "поддержка",
  },
  {
    icon: Zap,
    title: "Быстрые сроки",
    description: "Оптимизированный процесс позволяет получить права в кратчайшие сроки.",
    stat: "14",
    statLabel: "дней",
  },
  {
    icon: FileCheck,
    title: "Юридическая чистота",
    description: "Все документы оформляются официально с соблюдением законодательства.",
    stat: "100%",
    statLabel: "легально",
  },
  {
    icon: Shield,
    title: "Гарантия результата",
    description: "Гарантируем получение водительского удостоверения или возврат средств.",
    stat: "5 лет",
    statLabel: "гарантия",
  },
  {
    icon: Clock,
    title: "Поддержка 24/7",
    description: "Наши специалисты всегда на связи и готовы ответить на ваши вопросы.",
    stat: "24/7",
    statLabel: "онлайн",
  },
  {
    icon: Users,
    title: "Индивидуальный подход",
    description: "Учитываем особенности каждого клиента и подбираем оптимальное решение.",
    stat: "2500+",
    statLabel: "клиентов",
  },
]

export function Features() {
  return (
    <section className="py-16 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="absolute top-20 -left-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-block">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
              Преимущества
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Почему стоит заказать права у нас
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Получить водительское удостоверение с профессиональной поддержкой на каждом этапе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-muted/50 border border-border rounded-2xl p-5 hover:bg-muted hover:border-border/80 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/30 transition-colors">
                  <feature.icon className="h-5 w-5 text-accent" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-base font-bold text-foreground">{feature.title}</h3>
                    <div className="text-right">
                      <span className="text-lg font-bold text-accent">{feature.stat}</span>
                      <span className="text-[10px] text-muted-foreground block">{feature.statLabel}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
