"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, Mail, Phone, Clock, MapPin, Loader2, CheckCircle } from "lucide-react"
import { MaxIcon } from "@/components/icons/max-icon"
import { useSiteSettings } from "@/hooks/use-sanity"

// WhatsApp icon component
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )
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

export function ContactForm() {
  // Загружаем настройки динамически на клиенте (не запекается при билде)
  const { data: siteSettings } = useSiteSettings()
  
  // Extract settings with fallbacks
  const phone = siteSettings?.phone || "+7 (914) 064-75-20"
  const workingHours = siteSettings?.workingHours || "Пн-Вс: 9:00 - 21:00"
  const address = siteSettings?.address || "Москва, ул. Примерная, 1"
  const telegram = siteSettings?.telegram
  const whatsapp = siteSettings?.whatsapp
  const max = siteSettings?.max
  const email = siteSettings?.email || "robert.byrd.942@mail.ru"
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [errors, setErrors] = useState<{ name?: string; phone?: string; privacy?: string }>({})

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setFormData({ ...formData, phone: formatted })
    if (errors.phone) {
      setErrors({ ...errors, phone: undefined })
    }
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, name: e.target.value })
    if (errors.name) {
      setErrors({ ...errors, name: undefined })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: { name?: string; phone?: string; privacy?: string } = {}

    if (!formData.name.trim()) {
      newErrors.name = "Введите ваше имя"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Введите номер телефона"
    } else if (!validateRussianPhone(formData.phone)) {
      newErrors.phone = "Введите корректный российский номер"
    }

    if (!privacyAccepted) {
      newErrors.privacy = "Необходимо согласие с политикой конфиденциальности"
    }

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
    .message-field { border-left-color: #2563eb; }
    .footer { background: #f8f9fa; padding: 16px 24px; text-align: center; font-size: 12px; color: #888; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Новая заявка с сайта</h1>
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
      ${
        formData.message
          ? `
      <div class="field message-field">
        <div class="field-label">Сообщение</div>
        <div class="field-value">${formData.message}</div>
      </div>
      `
          : ""
      }
    </div>
    <div class="footer">
      Отправлено с сайта получения водительских прав
    </div>
  </div>
</body>
</html>
      `.trim()

      const response = await fetch("https://email-backend21738.vercel.app/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: email,
          subject: `Новая заявка от ${formData.name} | ${formData.phone}`,
          message: messageHtml,
          fromName: "Патриот",
        }),
      })

      if (!response.ok) {
        throw new Error("Ошибка отправки")
      }

      setIsSuccess(true)
      setFormData({ name: "", phone: "", message: "" })
    } catch (error) {
      console.error("Error sending form:", error)
      setErrors({ name: "Ошибка отправки. Попробуйте позже." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-16 px-6 relative overflow-hidden bg-gradient-to-br from-muted/50 via-background to-muted/50"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-block">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Контакты</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Заказать водительские права — оставьте заявку
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Получите бесплатную консультацию по оформлению прав в течение 15 минут
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Позвоните нам</p>
                  <a
                    href={`tel:${phone.replace(/\D/g, "")}`}
                    className="font-bold text-card-foreground hover:text-accent transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Время работы</p>
                  <p className="font-bold text-card-foreground">{workingHours}</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Адрес</p>
                  <p className="font-bold text-card-foreground">{address}</p>
                </div>
              </div>
            </div>

            {(telegram || whatsapp || max) && (
              <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20">
                <p className="text-sm font-semibold text-foreground mb-4">Напишите нам в мессенджер</p>
                <div className="flex flex-wrap gap-3">
                  {max && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border/50 rounded-xl hover:bg-accent/10 hover:border-accent bg-card"
                      onClick={() => window.open(max, "_blank")}
                    >
                      <MaxIcon className="mr-2 h-4 w-4" />
                      Max
                    </Button>
                  )}
                  {telegram && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border/50 rounded-xl hover:bg-accent/10 hover:border-accent bg-card"
                      onClick={() => window.open(telegram, "_blank")}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Telegram
                    </Button>
                  )}
                  {whatsapp && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border/50 rounded-xl hover:bg-accent/10 hover:border-accent bg-card"
                      onClick={() => window.open(whatsapp, "_blank")}
                    >
                      <WhatsAppIcon className="mr-2 h-4 w-4" />
                      WhatsApp
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-3">
            <div className="relative p-8 md:p-10 rounded-3xl border border-border bg-card shadow-xl">
              <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-t-3xl" />

              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">Заявка отправлена!</h3>
                  <p className="text-muted-foreground text-center">Мы свяжемся с вами в ближайшее время</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-card-foreground">
                        Ваше имя <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={handleNameChange}
                        className={`h-12 text-base rounded-xl border-border/50 focus:border-accent ${
                          errors.name ? "border-red-500 focus:border-red-500" : ""
                        }`}
                      />
                      {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-card-foreground">
                        Ваш телефон <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="+7 966 182 83 44"
                        type="tel"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className={`h-12 text-base rounded-xl border-border/50 focus:border-accent ${
                          errors.phone ? "border-red-500 focus:border-red-500" : ""
                        }`}
                      />
                      {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-card-foreground">Ваш вопрос (необязательно)</label>
                    <Textarea
                      placeholder="Расскажите, что вас интересует..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-28 text-base rounded-xl border-border/50 focus:border-accent resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="privacy"
                        checked={privacyAccepted}
                        onCheckedChange={(checked) => {
                          setPrivacyAccepted(checked === true)
                          if (errors.privacy) {
                            setErrors({ ...errors, privacy: undefined })
                          }
                        }}
                        className={errors.privacy ? "border-red-500" : ""}
                      />
                      <label htmlFor="privacy" className="text-sm text-muted-foreground leading-tight cursor-pointer">
                        Я согласен с{" "}
                        <Link href="/privacy" className="text-accent hover:underline">
                          политикой конфиденциальности
                        </Link>{" "}
                        и даю согласие на обработку персональных данных
                      </label>
                    </div>
                    {errors.privacy && <p className="text-sm text-red-500">{errors.privacy}</p>}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-14 text-base font-semibold rounded-xl shadow-lg disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      <>
                        <Mail className="mr-2 h-5 w-5" />
                        Отправить заявку
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
