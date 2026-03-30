import { createClient } from "@sanity/client"

const client = createClient({
  projectId: "tegzgdyt",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: "skGxvX7AOFlbYBHD2xSxaPCfwvTIg2uE6uQS7YbdlAzb7pNUMgEhqqF9sG6XYCdHXb5QCyOYxTMnr4yNi9zihhvKHqiBiSKFkpN8ULfWUX7VqsrECtN923NUgpLUUbuLg6Jwpyilj952cAXSkW12p6WR7vUpWLUKTH1ospHXK2ExHczMAMoZ",
})

async function seed() {
  console.log("Seeding Sanity content...")

  // Hero - fields must match schema: badge, title, highlightedText, description, buttonText, telegramButtonText
  await client.createOrReplace({
    _id: "hero",
    _type: "hero",
    badge: "Более 2500 довольных клиентов с 2019 года",
    title: "Получить водительские права",
    highlightedText: "Оформить права быстро, официально и с гарантией результата",
    description: "Заказать водительское удостоверение категории B, C, D без лишних хлопот. Полное юридическое сопровождение и прозрачные цены.",
    buttonText: "Бесплатная консультация",
    telegramButtonText: "Telegram",
  })
  console.log("✓ Hero")

  // Header
  await client.createOrReplace({
    _id: "header",
    _type: "header",
    siteName: "Patriot Prava",
    ctaButtonText: "Получить консультацию",
    navigation: [
      { _key: "nav1", _type: "object", label: "Услуги", href: "#services" },
      { _key: "nav2", _type: "object", label: "Преимущества", href: "#features" },
      { _key: "nav3", _type: "object", label: "Процесс", href: "#process" },
      { _key: "nav4", _type: "object", label: "Гарантии", href: "#guarantees" },
      { _key: "nav5", _type: "object", label: "Отзывы", href: "#testimonials" },
      { _key: "nav6", _type: "object", label: "FAQ", href: "#faq" },
    ],
  })
  console.log("✓ Header")

  // Stats
  await client.createOrReplace({
    _id: "stats",
    _type: "stats",
    items: [
      { _key: "stat1", _type: "object", value: "2500+", label: "Довольных клиентов" },
      { _key: "stat2", _type: "object", value: "98%", label: "Успешных случаев" },
      { _key: "stat3", _type: "object", value: "7 лет", label: "На рынке" },
      { _key: "stat4", _type: "object", value: "24/7", label: "Поддержка" },
    ],
  })
  console.log("✓ Stats")

  // Services
  await client.createOrReplace({
    _id: "services",
    _type: "services",
    title: "Наши услуги",
    description: "Полный спектр услуг по оформлению водительских прав",
    items: [
      {
        _key: "svc1",
        _type: "object",
        title: "Права категории B",
        description: "Самая популярная категория для легковых автомобилей. Быстрое оформление, гарантия законности",
        price: "65 000 руб.",
        duration: "3-7 дней",
        tags: ["Категория: B"],
      },
      {
        _key: "svc2",
        _type: "object",
        title: "Права категории A",
        description: "Права на мотоциклы и мопеды. Быстрое оформление без экзаменов. Официальное внесение в базу ГИБДД за 3-5 дней",
        price: "55 000 руб.",
        duration: "3-5 дней",
        tags: ["Категория: A, A1"],
      },
      {
        _key: "svc3",
        _type: "object",
        title: "Права категории C",
        description: "Права на грузовые автомобили до 7,5 тонн. Профессиональное оформление с гарантией качества документов",
        price: "75 000 руб.",
        duration: "5-10 дней",
        tags: ["Категория: C, C1"],
      },
      {
        _key: "svc4",
        _type: "object",
        title: "Права категории D",
        description: "Права на пассажирский транспорт и автобусы. Полное оформление с гарантией качества",
        price: "85 000 руб.",
        duration: "7-14 дней",
        tags: ["Категория: D, D1"],
      },
      {
        _key: "svc5",
        _type: "object",
        title: "Помощь в восстановлении после лишения",
        description: "Комплексное сопровождение при возврате водительских прав после лишения",
        price: "50 000 руб.",
        duration: "7-14 дней",
        tags: ["Юридическая помощь", "Полное сопровождение"],
      },
      {
        _key: "svc6",
        _type: "object",
        title: "Свидетельство об окончании автошколы",
        description: "Получение свидетельства об окончании автошколы в кратчайшие сроки",
        price: "35 000 руб.",
        duration: "1-3 дня",
        tags: ["Официальный документ"],
      },
    ],
  })
  console.log("✓ Services")

  // Features
  await client.createOrReplace({
    _id: "features",
    _type: "features",
    title: "Почему выбирают нас",
    sectionBadge: "Преимущества",
    items: [
      {
        _key: "feat1",
        _type: "object",
        icon: "Car",
        title: "Полное сопровождение",
        description: "Ведём вас от первой консультации до момента получения удостоверения в руки.",
        stat: "100%",
        statLabel: "поддержка",
      },
      {
        _key: "feat2",
        _type: "object",
        icon: "Zap",
        title: "Быстрые сроки",
        description: "Оптимизированный процесс позволяет получить права в кратчайшие сроки.",
        stat: "14",
        statLabel: "дней",
      },
      {
        _key: "feat3",
        _type: "object",
        icon: "FileCheck",
        title: "Юридическая чистота",
        description: "Все документы оформляются официально с соблюдением законодательства.",
        stat: "100%",
        statLabel: "легально",
      },
      {
        _key: "feat4",
        _type: "object",
        icon: "Shield",
        title: "Гарантия результата",
        description: "Гарантируем получение водительского удостоверения или возврат средств.",
        stat: "5 лет",
        statLabel: "гарантия",
      },
      {
        _key: "feat5",
        _type: "object",
        icon: "Clock",
        title: "Поддержка 24/7",
        description: "Наши специалисты всегда на связи и готовы ответить на ваши вопросы.",
        stat: "24/7",
        statLabel: "онлайн",
      },
      {
        _key: "feat6",
        _type: "object",
        icon: "Users",
        title: "Индивидуальный подход",
        description: "Учитываем особенности каждого клиента и подбираем оптимальное решение.",
        stat: "2500+",
        statLabel: "клиентов",
      },
    ],
  })
  console.log("✓ Features")

  // Process
  await client.createOrReplace({
    _id: "process",
    _type: "process",
    title: "Процесс получения прав",
    sectionBadge: "Как это работает",
    steps: [
      {
        _key: "step1",
        _type: "object",
        step: 1,
        title: "Оставьте заявку на получение прав",
        description: "Свяжитесь с нами через форму на сайте, WhatsApp, Telegram или позвоните напрямую.",
      },
      {
        _key: "step2",
        _type: "object",
        step: 2,
        title: "Бесплатная консультация",
        description: "Наш специалист проконсультирует вас, расскажет как получить права и подберёт оптимальное решение.",
      },
      {
        _key: "step3",
        _type: "object",
        step: 3,
        title: "Оформление документов",
        description: "Собираем и оформляем все необходимые документы для получения водительского удостоверения.",
      },
      {
        _key: "step4",
        _type: "object",
        step: 4,
        title: "Обучение и подготовка",
        description: "Проводим обучение по теории и практике вождения с опытными инструкторами.",
      },
      {
        _key: "step5",
        _type: "object",
        step: 5,
        title: "Сдача экзаменов",
        description: "Сопровождаем вас на экзаменах в ГИБДД, помогаем со всеми организационными вопросами.",
      },
      {
        _key: "step6",
        _type: "object",
        step: 6,
        title: "Получение водительского удостоверения",
        description: "Вы получаете водительские права и можете законно управлять автомобилем.",
      },
    ],
  })
  console.log("✓ Process")

  // Guarantees
  await client.createOrReplace({
    _id: "guarantees",
    _type: "guarantees",
    title: "Наши гарантии",
    description: "Мы отвечаем за качество нашей работы",
    items: [
      {
        _key: "guar1",
        _type: "object",
        icon: "FileCheck",
        title: "Официальное оформление",
        description: "100% официальное оформление всех документов",
      },
      {
        _key: "guar2",
        _type: "object",
        icon: "Banknote",
        title: "Возврат средств",
        description: "Возврат средств, если не получите права",
      },
      {
        _key: "guar3",
        _type: "object",
        icon: "Lock",
        title: "Конфиденциальность",
        description: "Конфиденциальность ваших данных",
      },
      {
        _key: "guar4",
        _type: "object",
        icon: "Award",
        title: "Прозрачные цены",
        description: "Прозрачное ценообразование без скрытых платежей",
      },
      {
        _key: "guar5",
        _type: "object",
        icon: "Shield",
        title: "Юридическое сопровождение",
        description: "Юридическое сопровождение на всех этапах",
      },
      {
        _key: "guar6",
        _type: "object",
        icon: "Headphones",
        title: "Поддержка после получения",
        description: "Поддержка после получения прав",
      },
    ],
  })
  console.log("✓ Guarantees")

  // Testimonials
  await client.createOrReplace({
    _id: "testimonials",
    _type: "testimonials",
    title: "Отзывы клиентов",
    sectionBadge: "Они нам доверяют",
    items: [
      {
        _key: "test1",
        _type: "object",
        name: "Анна",
        age: 28,
        rating: 5,
        text: "Очень переживала, но ребята всё объяснили и помогли быстро получить права. Спасибо Патриот!",
      },
      {
        _key: "test2",
        _type: "object",
        name: "Игорь",
        age: 32,
        rating: 5,
        text: "Все сделали без нервов, сопровождение на каждом этапе. Рекомендую!",
      },
      {
        _key: "test3",
        _type: "object",
        name: "Дмитрий",
        age: 41,
        rating: 5,
        text: "Права получил в срок, как и обещали. Отличная автошкола!",
      },
    ],
  })
  console.log("✓ Testimonials")

  // FAQ
  await client.createOrReplace({
    _id: "faq",
    _type: "faq",
    title: "Частые вопросы",
    items: [
      {
        _key: "faq1",
        _type: "object",
        question: "Сколько времени занимает получение водительских прав?",
        answer: "В среднем процесс оформления прав занимает от 2 до 4 недель в зависимости от выбранной программы. Мы стараемся оптимизировать все этапы для максимально быстрого результата.",
      },
      {
        _key: "faq2",
        _type: "object",
        question: "Какие документы нужны чтобы заказать права?",
        answer: "Базово требуется паспорт гражданина РФ и медицинская справка. Все остальные документы мы поможем собрать и оформить в процессе получения водительского удостоверения.",
      },
      {
        _key: "faq3",
        _type: "object",
        question: "Что входит в стоимость оформления прав?",
        answer: "В стоимость входит: теоретическое обучение, практические занятия по вождению, учебные материалы, сопровождение на экзаменах в ГИБДД, все необходимые документы.",
      },
      {
        _key: "faq4",
        _type: "object",
        question: "Можно ли получить права без посещения автошколы?",
        answer: "Да, мы предлагаем программы получения водительского удостоверения с минимальным посещением. Гибкий график позволяет совмещать оформление прав с работой.",
      },
      {
        _key: "faq5",
        _type: "object",
        question: "Что делать, если не получилось сдать экзамен?",
        answer: "Не переживайте! Мы предоставляем дополнительные занятия для подготовки к пересдаче и сопровождаем вас до успешного получения прав.",
      },
      {
        _key: "faq6",
        _type: "object",
        question: "Есть ли рассрочка на оформление водительских прав?",
        answer: "Да, мы предлагаем удобную рассрочку платежа для получения прав без процентов и переплат. Детали можно уточнить при консультации.",
      },
    ],
  })
  console.log("✓ FAQ")

  // Contact - fields must match schema: title, description, buttonText, formFields
  await client.createOrReplace({
    _id: "contact",
    _type: "contact",
    title: "Оставьте заявку",
    description: "Заполните форму и мы свяжемся с вами в ближайшее время",
    buttonText: "Отправить заявку",
    formFields: {
      nameLabel: "Ваше имя",
      phoneLabel: "Номер телефона",
    },
  })
  console.log("✓ Contact")

  // Footer
  await client.createOrReplace({
    _id: "footer",
    _type: "footer",
    siteName: "Patriot Prava",
    copyrightText: "© 2024 Patriot Prava. Все права защищены.",
    quickLinks: [
      { _key: "link1", _type: "object", label: "Услуги", href: "#services" },
      { _key: "link2", _type: "object", label: "Преимущества", href: "#features" },
      { _key: "link3", _type: "object", label: "Процесс", href: "#process" },
      { _key: "link4", _type: "object", label: "Гарантии", href: "#guarantees" },
      { _key: "link5", _type: "object", label: "Отзывы", href: "#testimonials" },
      { _key: "link6", _type: "object", label: "FAQ", href: "#faq" },
      { _key: "link7", _type: "object", label: "Контакты", href: "#contact" },
    ],
  })
  console.log("✓ Footer")

  // License
  await client.createOrReplace({
    _id: "license",
    _type: "license",
    title: "Наши лицензии",
    description: "Официальные документы, подтверждающие законность нашей деятельности",
    images: [],
  })
  console.log("✓ License")

  // Site Settings - fields must match schema
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    seoTitle: "Получить водительские права | Оформить права без автошколы",
    seoDescription: "Получить водительские права быстро и надёжно. Оформить права без автошколы с гарантией качества.",
    siteUrl: "https://patriot-prava.ru",
    phone: "+7 (914) 064-75-20",
    email: "robert.byrd.942@mail.ru",
    telegram: "https://t.me/aprawa",
    whatsapp: "https://wa.me/79140647520",
    workingHours: "Пн-Вс: 9:00 - 21:00",
    address: "Москва, ул. Примерная, 1",
  })
  console.log("✓ Site Settings")

  console.log("\nDone! All content seeded successfully.")
}

seed().catch(console.error)
