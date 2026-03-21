import { defineField, defineType } from "sanity"

export default defineType({
  name: "hero",
  title: "Главный баннер",
  type: "document",
  fields: [
    defineField({
      name: "badge",
      title: "Текст значка",
      type: "string",
      initialValue: "Более 2500 довольных клиентов с 2019 года",
    }),
    defineField({
      name: "title",
      title: "Заголовок",
      type: "string",
      initialValue: "Получить водительские права",
    }),
    defineField({
      name: "highlightedText",
      title: "Подзаголовок / Выделенный текст",
      type: "string",
      initialValue: "Оформить права быстро, официально и с гарантией результата",
    }),
    defineField({
      name: "description",
      title: "Описание",
      type: "text",
      initialValue: "Заказать водительское удостоверение категории B, C, D без лишних хлопот. Полное юридическое сопровождение и прозрачные цены.",
    }),
    defineField({
      name: "buttonText",
      title: "Текст кнопки",
      type: "string",
      initialValue: "Бесплатная консультация",
    }),
    defineField({
      name: "telegramButtonText",
      title: "Текст кнопки Telegram",
      type: "string",
      initialValue: "Telegram",
    }),
    defineField({
      name: "backgroundImage",
      title: "Фоновое изображение",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare() {
      return {
        title: "Главный баннер",
      }
    },
  },
})
