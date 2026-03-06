"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { label: "Услуги", href: "#services" },
    { label: "Процесс", href: "#process" },
    { label: "Гарантии", href: "#guarantees" },
    { label: "Отзывы", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-lg border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logotip-VwnCpdJjURxGRO1YXtLXkkVNHmfLOE.png"
              alt="За Рулем"
              width={120}
              height={60}
              className="h-auto w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-white/70 hover:text-white transition-colors font-medium cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-6 cursor-pointer"
            >
              Связаться
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2 cursor-pointer">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-lg rounded-b-2xl">
            <nav className="flex flex-col gap-2 px-4">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white/70 hover:text-white hover:bg-white/5 transition-colors font-medium text-left py-3 px-4 rounded-lg cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 mt-2 border-t border-white/10 px-4">
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full w-full cursor-pointer"
                >
                  Связаться
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
