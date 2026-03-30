import { defineField, defineType } from "sanity"

export default defineType({
  name: "siteSettings",
  title: "Настройки сайта",
  type: "document",
  fields: [
    defineField({
      name: "seoTitle",
      title: "SEO Название сайта",
      type: "string",
      description: "Название сайта для поисковых систем (отображается во вкладке браузера)",
      initialValue: "Получить водительские права | Оформить права без автошколы",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Описание сайта",
      type: "text",
      description: "Описание сайта для поисковых систем (отображается в результатах поиска)",
      initialValue: "Получить водительские права быстро и надёжно. Оформить права без автошколы с гарантией качества.",
    }),
    defineField({
      name: "siteUrl",
      title: "URL сайта",
      type: "url",
      description: "Основной адрес сайта (для SEO и социальных сетей)",
      initialValue: "https://patriot-prava.ru",
    }),
    defineField({
      name: "phone",
      title: "Номер телефона",
      type: "string",
      description: "Основной телефон для связи (отображается в контактах и футере)",
      initialValue: "+7 (914) 064-75-20",
    }),
    defineField({
      name: "email",
      title: "Электронная почта",
      type: "string",
      description: "Email для связи (отображается в контактах и футере)",
      initialValue: "robert.byrd.942@mail.ru",
    }),
    defineField({
      name: "telegram",
      title: "Ссылка на Telegram",
      type: "string",
      description: "Полная ссылка на Telegram (если не указана — иконка не показывается)",
      initialValue: "https://t.me/aprawa",
    }),
    defineField({
      name: "whatsapp",
      title: "Ссылка на WhatsApp",
      type: "string",
      description: "Полная ссылка на WhatsApp (если не указана — иконка не показывается)",
      initialValue: "https://wa.me/79140647520",
    }),
    defineField({
      name: "max",
      title: "Ссылка на Max",
      type: "string",
      description: "Полная ссылка на Max (если не указана — иконка не показывается)",
      initialValue: "https://max.ru/u/f9LHodD0cOJDbqEKxy6Fw982QLGp4w0kSzluuMZ7jODiE16H1-IRL-XSWsI",
    }),
    defineField({
      name: "workingHours",
      title: "Время работы",
      type: "string",
      description: "Время работы (отображается в контактах)",
      initialValue: "Пн-Вс: 9:00 - 21:00",
    }),
    defineField({
      name: "address",
      title: "Адрес",
      type: "string",
      description: "Адрес офиса или пункта выдачи (отображается в контактах)",
      initialValue: "Москва, ул. Примерная, 1",
    }),
    defineField({
      name: "headScripts",
      title: "Скрипты в head",
      type: "array",
      description: "Скрипты для вставки в head (Яндекс.Метрика, Google Analytics и т.д.)",
      of: [
        {
          type: "object",
          name: "script",
          title: "Скрипт",
          fields: [
            defineField({
              name: "name",
              title: "Название",
              type: "string",
              description: "Название скрипта для удобства (например: Яндекс.Метрика)",
            }),
            defineField({
              name: "code",
              title: "Код скрипта",
              type: "text",
              description: "Полный код скрипта (включая теги <script>)",
            }),
            defineField({
              name: "isEnabled",
              title: "Включен",
              type: "boolean",
              initialValue: true,
              description: "Включить/выключить скрипт без удаления",
            }),
          ],
          preview: {
            select: {
              title: "name",
              enabled: "isEnabled",
            },
            prepare({ title, enabled }) {
              return {
                title: title || "Без названия",
                subtitle: enabled ? "Включен" : "Выключен",
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Настройки сайта",
      }
    },
  },
})
