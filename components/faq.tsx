"use client"

import { useState } from "react"
import { Plus, Minus, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Сколько времени занимает получение водительских прав?",
    answer:
      "В среднем процесс оформления прав занимает от 2 до 4 недель в зависимости от выбранной программы. Мы стараемся оптимизировать все этапы для максимально быстрого результата.",
  },
  {
    question: "Какие документы нужны чтобы заказать права?",
    answer:
      "Базово требуется паспорт гражданина РФ и медицинская справка. Все остальные документы мы поможем собрать и оформить в процессе получения водительского удостоверения.",
  },
  {
    question: "Что входит в стоимость оформления прав?",
    answer:
      "В стоимость входит: теоретическое обучение, практические занятия по вождению, учебные материалы, сопровождение на экзаменах в ГИБДД, все необходимые документы.",
  },
  {
    question: "Можно ли получить права без посещения автошколы?",
    answer:
      "Да, мы предлагаем программы получения водительского удостоверения с минимальным посещением. Гибкий график позволяет совмещать оформление прав с работой.",
  },
  {
    question: "Что делать, если не получилось сдать экзамен?",
    answer:
      "Не переживайте! Мы предоставляем дополнительные занятия для подготовки к пересдаче и сопровождаем вас до успешного получения прав.",
  },
  {
    question: "Есть ли рассрочка на оформление водительских прав?",
    answer:
      "Да, мы предлагаем удобную рассрочку платежа для получения прав без процентов и переплат. Детали можно уточнить при консультации.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 px-6 relative overflow-hidden bg-background">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0v40M0 20h40' stroke='%2338bdf8' strokeWidth='0.3' opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/20 rounded-2xl">
                <HelpCircle className="h-7 w-7 text-accent" />
              </div>
              <div className="space-y-3">
                <span className="text-sm font-semibold text-accent uppercase tracking-wider block">FAQ</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Вопросы о получении прав
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
                  Ответы на популярные вопросы об оформлении водительского удостоверения. Не нашли ответ? Свяжитесь с
                  нами!
                </p>
              </div>
              <div className="pt-2">
                <p className="text-sm text-muted-foreground">
                  Есть вопросы? Напишите нам в{" "}
                  <button className="text-accent hover:underline font-medium">WhatsApp</button> или{" "}
                  <button className="text-accent hover:underline font-medium">Telegram</button>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "bg-accent/10 border-accent/50"
                    : "bg-muted/50 border-border hover:border-border/80"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-accent/60 w-6 shrink-0">0{index + 1}</span>
                    <h3 className="text-base md:text-lg font-semibold text-foreground leading-tight">{faq.question}</h3>
                  </div>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      openIndex === index ? "bg-accent" : "bg-muted"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className="h-4 w-4 text-accent-foreground" />
                    ) : (
                      <Plus className="h-4 w-4 text-foreground" />
                    )}
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5 ml-10">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
