export function Stats() {
  const stats = [
    { value: "2500+", label: "Довольных клиентов" },
    { value: "98%", label: "Успешных кейсов" },
    { value: "6 лет", label: "На рынке" },
    { value: "24/7", label: "Поддержка клиентов" },
  ]

  return (
    <section className="py-10 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,var(--primary)_0%,transparent_50%)] opacity-5" />
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-4 md:p-5 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center space-y-1">
                <div className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground font-medium leading-tight">{stat.label}</div>
              </div>
              <div className="absolute inset-0 bg-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
