"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Send } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 50h100M50 0v100' stroke='%2338bdf8' strokeWidth='0.5' opacity='0.3'/%3E%3Ccircle cx='50' cy='50' r='30' fill='none' stroke='%2338bdf8' strokeWidth='0.5' opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="container relative z-10 px-6 mx-auto pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left content */}
          <div className="space-y-8 py-20">
            <div className="inline-block">
              <div className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <p className="text-sm font-medium text-white/90">Более 2500 довольных клиентов с 2019 года</p>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-none">
                Получить водительские права
              </h1>
              <div className="w-24 h-1 bg-cyan-400 rounded-full" />
            </div>

            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90 leading-tight max-w-xl">
              Оформить права быстро, официально и с гарантией результата
            </p>

            <p className="text-lg text-white/70 max-w-xl leading-relaxed">
              Заказать водительское удостоверение категории B, C, D без лишних хлопот. Полное юридическое сопровождение
              и прозрачные цены.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-white text-base font-semibold px-8 h-14 rounded-full shadow-xl hover:shadow-2xl transition-all"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Бесплатная консультация
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 hover:bg-white/10 text-white text-base font-semibold px-8 h-14 rounded-full backdrop-blur-sm bg-transparent"
                onClick={() => window.open("https://t.me/PravaZaDarom", "_blank")}
              >
                <Send className="mr-2 h-5 w-5" />
                Telegram
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-cyan-400/10 rounded-3xl blur-3xl" />
            <div className="relative h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm">
              <img
                src="/images/license-document.png"
                alt="Водительское удостоверение и свидетельство"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
