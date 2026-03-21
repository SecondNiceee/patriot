"use client"

import Image from "next/image"
import { useSiteSettings } from "@/hooks/use-sanity"

export function FloatingSocials() {
  const { data } = useSiteSettings()

  // Собираем только те соцсети, у которых указана ссылка
  const socials = [
    {
      name: "Telegram",
      href: data?.telegram,
      icon: "/icons/telegram.svg",
    },
    {
      name: "WhatsApp",
      href: data?.whatsapp,
      icon: "/icons/whatsapp.svg",
    },
    {
      name: "Max",
      href: data?.max,
      icon: "/icons/max.svg",
    },
  ].filter(social => social.href) // Показываем только если ссылка указана

  if (socials.length === 0) {
    return null
  }

  return (
    <div className="fixed right-4 bottom-6 z-50 flex flex-col gap-2">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className={`${social.name === "WhatsApp" ? "-translate-y-px" : ""} flex h-15 w-15 items-center justify-center transition-transform hover:scale-105`}
        >
          <Image
            src={social.icon}
            alt={social.name}
            width={64}
            height={64}
            className="h-13 w-13 object-contain"
          />
        </a>
      ))}
    </div>
  )
}
