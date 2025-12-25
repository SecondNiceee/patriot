import { Shield, Award, Lock, FileCheck, Headphones, Banknote } from "lucide-react"

const guarantees = [
  {
    icon: FileCheck,
    title: "Официальное оформление",
    description: "100% официальное оформление всех документов",
  },
  {
    icon: Banknote,
    title: "Возврат средств",
    description: "Возврат средств, если не получите права",
  },
  {
    icon: Lock,
    title: "Конфиденциальность",
    description: "Конфиденциальность ваших данных",
  },
  {
    icon: Award,
    title: "Прозрачные цены",
    description: "Прозрачное ценообразование без скрытых платежей",
  },
  {
    icon: Shield,
    title: "Юридическое сопровождение",
    description: "Юридическое сопровождение на всех этапах",
  },
  {
    icon: Headphones,
    title: "Поддержка после получения",
    description: "Поддержка после получения прав",
  },
]

export function Guarantees() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-slate-900" />
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 50h100M50 0v100' stroke='%2338bdf8' strokeWidth='0.5' opacity='0.3'/%3E%3Ccircle cx='50' cy='50' r='30' fill='none' stroke='%2338bdf8' strokeWidth='0.5' opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-2 border border-white/20">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Гарантии при оформлении прав</h2>
          <p className="text-base text-white/70 leading-relaxed max-w-2xl mx-auto">
            Заказать водительское удостоверение с полной ответственностью за результат
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <guarantee.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">{guarantee.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{guarantee.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
