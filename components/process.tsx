"use client"

import { useState } from "react"
import { Check, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Оставьте заявку на получение прав",
    description: "Свяжитесь с нами через форму на сайте, WhatsApp, Telegram или позвоните напрямую.",
  },
  {
    number: "02",
    title: "Бесплатная консультация",
    description: "Наш специалист проконсультирует вас, расскажет как получить права и подберёт оптимальное решение.",
  },
  {
    number: "03",
    title: "Оформление документов",
    description: "Собираем и оформляем все необходимые документы для получения водительского удостоверения.",
  },
  {
    number: "04",
    title: "Обучение и подготовка",
    description: "Проводим обучение по теории и практике вождения с опытными инструкторами.",
  },
  {
    number: "05",
    title: "Сдача экзаменов",
    description: "Сопровождаем вас на экзаменах в ГИБДД, помогаем со всеми организационными вопросами.",
  },
  {
    number: "06",
    title: "Получение водительского удостоверения",
    description: "Вы получаете водительские права и можете законно управлять автомобилем.",
  },
]

export function Process() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='%23000' strokeWidth='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-block">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Процесс</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Как получить водительские права
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Простой и прозрачный путь к оформлению прав за 6 шагов
          </p>
        </div>

        {/* Horizontal timeline navigation */}
        <div className="mb-10">
          <div className="flex items-center justify-between max-w-4xl mx-auto relative">
            {/* Progress line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-border" />
            <div
              className="absolute top-6 left-0 h-0.5 bg-accent transition-all duration-500"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />

            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className="relative z-10 flex flex-col items-center group"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    index <= activeStep
                      ? "bg-accent text-accent-foreground scale-110"
                      : "bg-card border-2 border-border text-muted-foreground group-hover:border-accent/50"
                  }`}
                >
                  {index < activeStep ? <Check className="h-5 w-5" /> : step.number}
                </div>
                <span
                  className={`hidden md:block text-xs mt-2 font-medium transition-colors ${
                    index <= activeStep ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {step.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Active step content */}
        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 md:p-10 rounded-3xl bg-card border border-border shadow-xl">
            <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-t-3xl" />

            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center">
                <span className="text-4xl font-bold text-accent">{steps[activeStep].number}</span>
              </div>

              <div className="space-y-4 flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-card-foreground">{steps[activeStep].title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{steps[activeStep].description}</p>

                <div className="flex items-center gap-4 pt-4">
                  {activeStep > 0 && (
                    <button
                      onClick={() => setActiveStep(activeStep - 1)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                    >
                      <ArrowRight className="h-4 w-4 rotate-180" />
                      Назад
                    </button>
                  )}
                  {activeStep < steps.length - 1 && (
                    <button
                      onClick={() => setActiveStep(activeStep + 1)}
                      className="text-sm text-accent hover:text-accent/80 transition-colors flex items-center gap-1 font-medium"
                    >
                      Далее
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
