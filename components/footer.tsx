import Link from "next/link"
import { Phone, Mail } from "lucide-react"
import type { FooterData, SiteSettingsData } from "@/lib/sanity"

// Default data
const defaultData = {
  siteName: "Патриот",
  description: "Помогаем получать водительские права быстро и без стресса с 2019 года",
  quickLinks: [
    { label: "О нас", href: "#features" },
    { label: "Услуги", href: "#services" },
    { label: "Контакты", href: "#contact" },
    { label: "Политика конфиденциальности", href: "/privacy" },
  ],
  copyrightText: "2019-2024 Автошкола Патриот. Все права защищены.",
}

const defaultSettings = {
  phone: "+7 (914) 064-75-20",
  email: "robert.byrd.942@mail.ru",
}

interface FooterProps {
  data: FooterData | null
  siteSettings: SiteSettingsData | null
}

export function Footer({ data, siteSettings }: FooterProps) {
  const siteName = data?.siteName ?? defaultData.siteName
  const description = data?.description ?? defaultData.description
  const quickLinks = data?.quickLinks?.length ? data.quickLinks : defaultData.quickLinks
  const copyrightText = data?.copyrightText ?? defaultData.copyrightText
  
  const phone = siteSettings?.phone ?? defaultSettings.phone
  const email = siteSettings?.email ?? defaultSettings.email

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
              <h3 className="text-3xl font-bold text-white">{siteName}</h3>
              <p className="text-white/70 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">Контакты</h4>
              <div className="space-y-3 text-white/70">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <span>{phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <span>{email}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">Быстрые ссылки</h4>
              <nav className="space-y-2 text-white/70">
                {quickLinks.map((link, index) => (
                  <Link 
                    key={index} 
                    href={link.href} 
                    className="block hover:text-accent transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-white/50">{copyrightText}</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    </footer>
  )
}
