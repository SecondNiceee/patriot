import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Анна",
    age: 28,
    text: "Очень переживала, но ребята всё объяснили и помогли быстро получить права. Спасибо Патриот!",
    rating: 5,
  },
  {
    name: "Игорь",
    age: 32,
    text: "Все сделали без нервов, сопровождение на каждом этапе. Рекомендую!",
    rating: 5,
  },
  {
    name: "Дмитрий",
    age: 41,
    text: "Права получил в срок, как и обещали. Отличная автошкола!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-muted/50 via-secondary/30 to-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Отзывы</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Что говорят клиенты</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Реальные отзывы тех, кто уже получил права с нами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group p-8 rounded-2xl border border-border bg-card hover:border-accent/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                <Quote className="h-6 w-6 text-accent-foreground" />
              </div>

              <div className="space-y-6 pt-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed text-pretty">{testimonial.text}</p>

                <div className="pt-4 border-t border-border">
                  <p className="font-bold text-card-foreground text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.age} лет</p>
                </div>
              </div>

              <div className="absolute inset-0 bg-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
