import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-12 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0v40M0 20h40' stroke='%2338bdf8' strokeWidth='0.3' opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white">Патриот</h3>
              <p className="text-white/70 leading-relaxed">
                Помогаем получать водительские права быстро и без стресса с 2019 года
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">Контакты</h4>
              <div className="space-y-3 text-white/70">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <span>+7 (914) 064-75-20</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <span>robert.byrd.942@mail.ru</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-1" />
                  <span>Москва, ул. Примерная, д. 1</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">Быстрые ссылки</h4>
              <nav className="space-y-2 text-white/70">
                <Link href="/about" className="block hover:text-accent transition-colors cursor-pointer">
                  О нас
                </Link>
                <Link href="/services" className="block hover:text-accent transition-colors cursor-pointer">
                  Услуги
                </Link>
                <Link href="/contact" className="block hover:text-accent transition-colors cursor-pointer">
                  Контакты
                </Link>
                <Link href="/privacy" className="block hover:text-accent transition-colors cursor-pointer">
                  Политика конфиденциальности
                </Link>
              </nav>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-white/50">© 2019-2024 Автошкола Патриот. Все права защищены.</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    </footer>
  )
}
