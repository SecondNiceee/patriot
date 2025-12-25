"use client"

import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Получить права с нуля",
    description: "Полное сопровождение для оформления водительского удостоверения категории B быстро и официально.",
    price: "от 25 000 ₽",
    features: ["Теория и практика", "Сопровождение на экзамен", "Все документы"],
  },
  {
    title: "Восстановить права",
    description: "Помощь в восстановлении утерянных или украденных водительских удостоверений без лишних хлопот.",
    price: "от 15 000 ₽",
    features: ["Быстрое оформление", "Минимум документов", "Юридическое сопровождение"],
  },
  {
    title: "Заказать дополнительные категории",
    description: "Оформление дополнительных категорий водительских прав (A, C, D, E) в короткие сроки.",
    price: "от 20 000 ₽",
    features: ["Любые категории", "Гибкий график", "Опытные инструкторы"],
  },
  {
    title: "Обменять иностранные права",
    description: "Содействие в обмене иностранных водительских удостоверений на российские без экзаменов.",
    price: "от 18 000 ₽",
    features: ["Без экзаменов", "Все страны", "Быстро и легально"],
  },
]

export function Services() {
  return (
    <section className="py-16 px-6 relative overflow-hidden bg-gradient-to-br from-slate-900 via-primary to-slate-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30h60M30 0v60' stroke='%2338bdf8' strokeWidth='0.5' opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Услуги</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Оформить водительские права — наши услуги
          </h2>
          <p className="text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
            Полный спектр услуг для получения, восстановления и заказа водительского удостоверения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/50 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="space-y-5">
                <div className="flex items-start justify-between">
                  <span className="text-6xl font-black text-accent/20 group-hover:text-accent/40 transition-colors leading-none">
                    0{index + 1}
                  </span>
                  <div className="text-right mt-2">
                    <span className="text-xl font-bold text-white">{service.price}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white leading-tight">{service.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{service.description}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-4 h-px bg-accent" />
                      <span className="text-xs text-white/50">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full rounded-xl border-white/20 hover:border-accent hover:bg-accent/10 font-semibold bg-transparent text-white"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Узнать больше
                </Button>
              </div>

              <div className="absolute -bottom-px left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
