import { defineField, defineType } from "sanity"

export default defineType({
  name: "services",
  title: "Блок услуг",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Заголовок секции",
      type: "string",
      initialValue: "Услуги по покупке водительских прав",
    }),
    defineField({
      name: "description",
      title: "Описание секции",
      type: "text",
      initialValue: "Предоставляем полный спектр услуг по получению водительских прав любой категории. От консультации до готового удостоверения в руках.",
    }),
    defineField({
      name: "items",
      title: "Список услуг",
      type: "array",
      initialValue: [
        {
          _type: "object",
          title: "Права категории B",
          description: "Самая популярная категория для легковых автомобилей. Быстрое оформление, гарантия законности",
          price: "65 000 руб.",
          duration: "3-7 дней",
          tags: ["Категория: B"],
        },
        {
          _type: "object",
          title: "Права категории A",
          description: "Права на мотоциклы и мопеды. Быстрое оформление без экзаменов. Официальное внесение в базу ГИБДД за 3-5 дней",
          price: "55 000 руб.",
          duration: "3-5 дней",
          tags: ["Категория: A, A1"],
        },
        {
          _type: "object",
          title: "Права категории C",
          description: "Права на грузовые автомобили до 7,5 тонн. Профессиональное оформление с гарантией качества документов",
          price: "75 000 руб.",
          duration: "5-10 дней",
          tags: ["Категория: C, C1"],
        },
        {
          _type: "object",
          title: "Права категории D",
          description: "Права на пассажирский транспорт и автобусы. Полное оформление с гарантией качества",
          price: "85 000 руб.",
          duration: "7-14 дней",
          tags: ["Категория: D, D1"],
        },
        {
          _type: "object",
          title: "Помощь в восстановлении после лишения",
          description: "Комплексное сопровождение при возврате водительских прав после лишения",
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
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Название",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Описание",
              type: "text",
            }),
            defineField({
              name: "price",
              title: "Цена",
              type: "string",
            }),
            defineField({
              name: "image",
              title: "Изображение",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: "duration",
              title: "Срок выполнения",
              type: "string",
              description: "например: 3-7 дней",
            }),
            defineField({
              name: "tags",
              title: "Теги",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Блок услуг",
      }
    },
  },
})
