"use client"

import type React from "react"
import type { SiteSettingsData } from "@/lib/sanity"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { X, Loader2, CheckCircle, Phone } from "lucide-react"

interface PopupFormProps {
  siteSettings?: SiteSettingsData | null
}

function formatPhoneNumber(value: string): string {
  const digits = value.replace(/\D/g, "")
  let normalized = digits
  if (normalized.startsWith("8")) {
    normalized = "7" + normalized.slice(1)
  }
  if (!normalized.startsWith("7") && normalized.length > 0) {
    normalized = "7" + normalized
  }
  normalized = normalized.slice(0, 11)

  if (normalized.length === 0) return ""
  if (normalized.length <= 1) return `+${normalized}`
  if (normalized.length <= 4) return `+${normalized[0]} ${normalized.slice(1)}`
  if (normalized.length <= 7) return `+${normalized[0]} ${normalized.slice(1, 4)} ${normalized.slice(4)}`
  if (normalized.length <= 9)
    return `+${normalized[0]} ${normalized.slice(1, 4)} ${normalized.slice(4, 7)} ${normalized.slice(7)}`
  return `+${normalized[0]} ${normalized.slice(1, 4)} ${normalized.slice(4, 7)} ${normalized.slice(7, 9)} ${normalized.slice(9)}`
}

function validateRussianPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "")
  return digits.length === 11 && (digits.startsWith("7") || digits.startsWith("8"))
}

export function PopupForm({ siteSettings }: PopupFormProps) {
  const email = siteSettings?.email || "robert.byrd.942@mail.ru"
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({ name: "", phone: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [errors, setErrors] = useState<{ name?: string; phone?: string; privacy?: string }>({})

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("popupSeen")
    if (hasSeenPopup) return

    const timer = setTimeout(() => {
      setIsOpen(true)
      sessionStorage.setItem("popupSeen", "true")
    }, 60000) // 1 minute

    return () => clearTimeout(timer)
  }, [])

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setFormData({ ...formData, phone: formatted })
    if (errors.phone) setErrors({ ...errors, phone: undefined })
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, name: e.target.value })
    if (errors.name) setErrors({ ...errors, name: undefined })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: { name?: string; phone?: string; privacy?: string } = {}

    if (!formData.name.trim()) newErrors.name = "Введите ваше имя"
    if (!formData.phone.trim()) {
      newErrors.phone = "Введите номер телефона"
    } else if (!validateRussianPhone(formData.phone)) {
      newErrors.phone = "Введите корректный российский номер"
    }
    if (!privacyAccepted) newErrors.privacy = "Необходимо согласие"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      const messageHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(135deg, #1a1a2e, #16213e); padding: 24px; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; color: #ffd700; }
    .content { padding: 32px; }
    .field { margin-bottom: 20px; padding: 16px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #dc2626; }
    .field-label { font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
    .field-value { font-size: 18px; color: #1a1a2e; font-weight: 600; }
    .footer { background: #f8f9fa; padding: 16px 24px; text-align: center; font-size: 12px; color: #888; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Заявка из всплывающего окна</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="field-label">Имя клиента</div>
        <div class="field-value">${formData.name}</div>
      </div>
      <div class="field">
        <div class="field-label">Номер телефона</div>
        <div class="field-value">${formData.phone}</div>
      </div>
    </div>
    <div class="footer">
      Отправлено с сайта (всплывающая форма)
    </div>
  </div>
</body>
</html>
      `.trim()

      const response = await fetch("https://email-backend21738.vercel.app/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: email,
          subject: `Заявка из popup от ${formData.name} | ${formData.phone}`,
          message: messageHtml,
          fromName: "Патриот",
        }),
      })

      if (!response.ok) throw new Error("Ошибка отправки")

      setIsSuccess(true)
      setFormData({ name: "", phone: "" })
    } catch (error) {
      console.error("Error sending form:", error)
      setErrors({ name: "Ошибка отправки. Попробуйте позже." })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-card rounded-2xl border border-border shadow-2xl overflow-hidden">
        <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
        
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors z-10"
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </button>

        <div className="p-6 pt-8">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground">Заявка отправлена!</h3>
              <p className="text-muted-foreground text-center">Мы свяжемся с вами в ближайшее время</p>
              <Button onClick={() => setIsOpen(false)} className="mt-4">Закрыть</Button>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Phone className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">Получите бесплатную консультацию</h3>
                <p className="text-sm text-muted-foreground">Оставьте заявку и мы перезвоним вам в течение 15 минут</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleNameChange}
                    className={`h-12 rounded-xl ${errors.name ? "border-red-500" : ""}`}
                  />
                  {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Input
                    placeholder="+7 900 000 00 00"
                    type="tel"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className={`h-12 rounded-xl ${errors.phone ? "border-red-500" : ""}`}
                  />
                  {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="popup-privacy"
                      checked={privacyAccepted}
                      onCheckedChange={(checked) => {
                        setPrivacyAccepted(checked === true)
                        if (errors.privacy) setErrors({ ...errors, privacy: undefined })
                      }}
                      className={errors.privacy ? "border-red-500" : ""}
                    />
                    <label htmlFor="popup-privacy" className="text-xs text-muted-foreground leading-tight cursor-pointer">
                      Согласен с{" "}
                      <Link href="/privacy" className="text-accent hover:underline">
                        политикой конфиденциальности
                      </Link>
                    </label>
                  </div>
                  {errors.privacy && <p className="text-sm text-red-500">{errors.privacy}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 font-semibold rounded-xl"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    "Получить консультацию"
                  )}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
