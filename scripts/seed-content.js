import { createClient } from "@sanity/client"

const client = createClient({
  projectId: "tegzgdyt",
  dataset: "production",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const defaultContent = {
  hero: {
    _type: "hero",
    _id: "singleton.hero",
    title: "Получите водительские права за 2-4 недели",
    subtitle:
      "Официальное оформление прав без лишних сложностей. Гарантия результата или возврат денег",
    description:
      "Более 2500 довольных клиентов получили водительское удостоверение через наш сервис. Мы гарантируем официальное оформление, быстрые сроки и полное сопровождение на каждом этапе.",
    cta: "Начать процесс",
    ctaHref: "#contact",
    image: {
      alt: "Водительское удостоверение",
      title: "Водительское удостоверение",
    },
  },

  services: {
    _type: "services",
    _id: "singleton.services",
    title: "Наши услуги",
    description: "Полный спектр услуг для получения водительского удостоверения",
    items: [
      {
        _type: "object",
        title: "Права категории B",
        description:
          "Самая популярная категория для легковых автомобилей. Быстрое оформление, гарантия законности",
        price: "65 000 руб.",
        duration: "3-7 дней",
        tags: ["Категория: B"],
      },
      {
        _type: "object",
        title: "Права категории A",
        description:
          "Права на мотоциклы и мопеды. Быстрое оформление без экзаменов. Официальное внесение в базу ГИБДД за 3-5 дней",
        price: "55 000 руб.",
        duration: "3-5 дней",
        tags: ["Категория: A, A1"],
      },
      {
        _type: "object",
        title: "Права категории C",
        description:
          "Права на грузовые автомобили до 7,5 тонн. Профессиональное оформление с гарантией качества документов",
        price: "75 000 руб.",
        duration: "5-10 дней",
        tags: ["Категория: C, C1"],
      },
      {
        _type: "object",
        title: "Права категории D",
        description:
          "Права на пассажирский транспорт и автобусы. Полное оформление с гарантией качества",
        price: "85 000 руб.",
        duration: "7-14 дней",
        tags: ["Категория: D, D1"],
      },
      {
        _type: "object",
        title: "Помощь в восстановлении после лишения",
        description:
          "Комплексное сопровождение при возврате водительских прав после лишения",
        price: "50 000 руб.",
        duration: "7-14 дней",
        tags: ["Юридическая помощь", "Полное сопровождение"],
      },
      {
        _type: "object",
        title: "Свидетельство об окончании автошколы",
        description: "Получение свидетельства об окончании автошколы в кратчайшие сроки",
        price: "35 000 руб.",
        duration: "1-3 дня",
        tags: ["Официальный документ"],
      },
    ],
  },

  features: {
    _type: "features",
    _id: "singleton.features",
    title: "Почему выбирают нас",
    description: "Основные преимущества нашего сервиса",
    items: [
      {
        _type: "object",
        icon: "Car",
        title: "Полное сопровождение",
        description:
          "Ведём вас от первой консультации до момента получения удостоверения в руки.",
        stat: "100%",
        statLabel: "поддержка",
      },
      {
        _type: "object",
        icon: "Zap",
        title: "Быстрые сроки",
        description:
          "Оптимизированный процесс позволяет получить права в кратчайшие сроки.",
        stat: "14",
        statLabel: "дней",
      },
      {
        _type: "object",
        icon: "FileCheck",
        title: "Юридическая чистота",
        description:
          "Все документы оформляются официально с соблюдением законодательства.",
        stat: "100%",
        statLabel: "легально",
      },
      {
        _type: "object",
        icon: "Shield",
        title: "Гарантия результата",
        description:
          "Гарантируем получение водительского удостоверения или возврат средств.",
        stat: "5 лет",
        statLabel: "гарантия",
      },
      {
        _type: "object",
        icon: "Clock",
        title: "Поддержка 24/7",
        description:
          "Наши специалисты всегда на связи и готовы ответить на ваши вопросы.",
        stat: "24/7",
        statLabel: "онлайн",
      },
      {
        _type: "object",
        icon: "Users",
        title: "Индивидуальный подход",
        description:
          "Учитываем особенности каждого клиента и подбираем оптимальное решение.",
        stat: "2500+",
        statLabel: "клиентов",
      },
    ],
  },

  process: {
    _type: "process",
    _id: "singleton.process",
    title: "Процесс получения прав",
    description: "Как мы помогаем получить водительское удостоверение",
    steps: [
      {
        _type: "object",
        step: 1,
        title: "Оставьте заявку на получение прав",
        description:
          "Свяжитесь с нами через форму на сайте, WhatsApp, Telegram или позвоните напрямую.",
      },
      {
        _type: "object",
        step: 2,
        title: "Бесплатная консультация",
        description:
          "Наш специалист проконсультирует вас, расскажет как получить права и подберёт оптимальное решение.",
      },
      {
        _type: "object",
        step: 3,
        title: "Оформление документов",
        description:
          "Собираем и оформляем все необходимые документы для получения водительского удостоверения.",
      },
      {
        _type: "object",
        step: 4,
        title: "Обучение и подготовка",
        description:
          "Проводим обучение по теории и практике вождения с опытными инструкторами.",
      },
      {
        _type: "object",
        step: 5,
        title: "Сдача экзаменов",
        description:
          "Сопровождаем вас на экзаменах в ГИБДД, помогаем со всеми организационными вопросами.",
      },
      {
        _type: "object",
        step: 6,
        title: "Получение водительского удостоверения",
        description:
          "Вы получаете водительские права и можете законно управлять автомобилем.",
      },
    ],
  },

  guarantees: {
    _type: "guarantees",
    _id: "singleton.guarantees",
    title: "Наши гарантии",
    description: "Полная гарантия качества и результата",
    items: [
      {
        _type: "object",
        icon: "FileCheck",
        title: "Официальное оформление",
        description: "100% официальное оформление всех документов",
      },
      {
        _type: "object",
        icon: "Banknote",
        title: "Возврат средств",
        description: "Возврат средств, если не получите права",
      },
      {
        _type: "object",
        icon: "Lock",
        title: "Конфиденциальность",
        description: "Конфиденциальность ваших данных",
      },
      {
        _type: "object",
        icon: "Award",
        title: "Прозрачные цены",
        description: "Прозрачное ценообразование без скрытых платежей",
      },
      {
        _type: "object",
        icon: "Shield",
        title: "Юридическое сопровождение",
        description: "Юридическое сопровождение на всех этапах",
      },
      {
        _type: "object",
        icon: "Headphones",
        title: "Поддержка после получения",
        description: "Поддержка после получения прав",
      },
    ],
  },

  faq: {
    _type: "faq",
    _id: "singleton.faq",
    title: "Часто задаваемые вопросы",
    description: "Ответы на популярные вопросы о получении прав",
    items: [
      {
        _type: "object",
        question: "Сколько времени занимает получение водительских прав?",
        answer:
          "В среднем процесс оформления прав занимает от 2 до 4 недель в зависимости от выбранной программы. Мы стараемся оптимизировать все этапы для максимально быстрого результата.",
      },
      {
        _type: "object",
        question: "Какие документы нужны чтобы заказать права?",
        answer:
          "Базово требуется паспорт гражданина РФ и медицинская справка. Все остальные документы мы поможем собрать и оформить в процессе получения водительского удостоверения.",
      },
      {
        _type: "object",
        question: "Что входит в стоимость оформления прав?",
        answer:
          "В стоимость входит: теоретическое обучение, практические занятия по вождению, учебные материалы, сопровождение на экзаменах в ГИБДД, все необходимые документы.",
      },
      {
        _type: "object",
        question: "Можно ли получить права без посещения автошколы?",
        answer:
          "Да, мы предлагаем программы получения водительского удостоверения с минимальным посещением. Гибкий график позволяет совмещать оформление прав с работой.",
      },
      {
        _type: "object",
        question: "Что делать, если не получилось сдать экзамен?",
        answer:
          "Не переживайте! Мы предоставляем дополнительные занятия для подготовки к пересдаче и сопровождаем вас до успешного получения прав.",
      },
      {
        _type: "object",
        question: "Есть ли рассрочка на оформление водительских прав?",
        answer:
          "Да, мы предлагаем удобную рассрочку платежа для получения прав без процентов и переплат. Детали можно уточнить при консультации.",
      },
    ],
  },

  testimonials: {
    _type: "testimonials",
    _id: "singleton.testimonials",
    title: "Отзывы клиентов",
    description: "Что говорят о нас наши клиенты",
    items: [
      {
        _type: "object",
        name: "Анна",
        age: 28,
        rating: 5,
        text: "Очень переживала, но ребята всё объяснили и помогли быстро получить права. Спасибо Патриот!",
      },
      {
        _type: "object",
        name: "Игорь",
        age: 32,
        rating: 5,
        text: "Все сделали без нервов, сопровождение на каждом этапе. Рекомендую!",
      },
      {
        _type: "object",
        name: "Дмитрий",
        age: 41,
        rating: 5,
        text: "Права получил в срок, как и обещали. Отличная автошкола!",
      },
    ],
  },

  stats: {
    _type: "stats",
    _id: "singleton.stats",
    title: "Наша статистика",
    description: "Результаты работы сервиса",
    items: [
      {
        _type: "object",
        label: "Довольных клиентов",
        value: "2500+",
      },
      {
        _type: "object",
        label: "Успешных оформлений",
        value: "98%",
      },
      {
        _type: "object",
        label: "Среднее время",
        value: "14 дней",
      },
      {
        _type: "object",
        label: "Лет на рынке",
        value: "5+",
      },
    ],
  },

  header: {
    _type: "header",
    _id: "singleton.header",
    logo: "Patriot",
    navigation: [
      { _type: "object", label: "Услуги", href: "#services" },
      { _type: "object", label: "Преимущества", href: "#features" },
      { _type: "object", label: "Процесс", href: "#process" },
      { _type: "object", label: "Гарантии", href: "#guarantees" },
      { _type: "object", label: "Отзывы", href: "#testimonials" },
      { _type: "object", label: "FAQ", href: "#faq" },
    ],
    cta: "Получить консультацию",
    ctaHref: "#contact",
  },

  footer: {
    _type: "footer",
    _id: "singleton.footer",
    company: "Patriot",
    description:
      "Сервис по официальному оформлению водительских прав и удостоверений с гарантией качества",
    quickLinks: [
      { _type: "object", label: "Услуги", href: "#services" },
      { _type: "object", label: "Преимущества", href: "#features" },
      { _type: "object", label: "Процесс", href: "#process" },
      { _type: "object", label: "Гарантии", href: "#guarantees" },
      { _type: "object", label: "Отзывы", href: "#testimonials" },
      { _type: "object", label: "FAQ", href: "#faq" },
      { _type: "object", label: "Контакты", href: "#contact" },
    ],
    socialLinks: [
      { _type: "object", label: "WhatsApp", href: "https://wa.me/79999999999" },
      { _type: "object", label: "Telegram", href: "https://t.me/patriot" },
      { _type: "object", label: "VK", href: "https://vk.com/patriot" },
    ],
    contact: {
      phone: "+7 (999) 999-99-99",
      email: "info@patriot.ru",
    },
    copyright: "© 2024 Patriot. Все права защищены.",
  },

  license: {
    _type: "license",
    _id: "singleton.license",
    title: "Лицензии и документы",
    description: "Официальные лицензии и документы",
    images: [
      {
        _type: "object",
        alt: "Лицензия на образовательную деятельность",
        title: "Лицензия",
      },
      {
        _type: "object",
        alt: "Приложение к лицензии",
        title: "Приложение",
      },
    ],
  },

  contact: {
    _type: "contact",
    _id: "singleton.contact",
    title: "Свяжитесь с нами",
    description: "Готовы ответить на все ваши вопросы",
    phone: "+7 (999) 999-99-99",
    email: "info@patriot.ru",
    address: "г. Москва, ул. Примерная, д. 123",
    whatsapp: "https://wa.me/79999999999",
    telegram: "https://t.me/patriot",
    vk: "https://vk.com/patriot",
  },
}

async function seedContent() {
  try {
    console.log("🌱 Starting seed process...")

    for (const [key, doc] of Object.entries(defaultContent)) {
      try {
        // Проверяем существует ли документ
        const exists = await client.fetch(`*[_id == "${doc._id}"][0]`)

        if (exists) {
          // Обновляем существующий документ
          const updated = await client.patch(doc._id).set(doc).commit()
          console.log(`✅ Updated ${key}:`, updated._id)
        } else {
          // Создаем новый документ
          const created = await client.create(doc)
          console.log(`✨ Created ${key}:`, created._id)
        }
      } catch (error) {
        console.error(`❌ Error with ${key}:`, error.message)
      }
    }

    console.log("\n✨ Seed completed successfully!")
  } catch (error) {
    console.error("❌ Seed failed:", error)
    process.exit(1)
  }
}

seedContent()
