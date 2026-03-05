import Image from "next/image"

const socials = [
  {
    name: "Telegram",
    href: "https://t.me/aprawa",
    icon: "/icons/telegram.svg",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/79140647520?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82...",
    icon: "/icons/whatsapp.svg",
  },
  {
    name: "Max",
    href: "https://max.ru/u/f9LHodD0cOJDbqEKxy6Fw982QLGp4w0kSzluuMZ7jODiE16H1-IRL-XSWsI",
    icon: "/icons/max.svg",
  },
]

export function FloatingSocials() {
  return (
    <div className="fixed right-4 bottom-6 z-50 flex flex-col gap-3">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="flex h-20 w-20 items-center justify-center rounded-2xl shadow-xl transition-transform hover:scale-105 bg-white"
        >
          <Image
            src={social.icon}
            alt={social.name}
            width={64}
            height={64}
            className="h-16 w-16 object-contain"
          />
        </a>
      ))}
    </div>
  )
}
