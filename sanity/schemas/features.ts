import { defineField, defineType } from "sanity"
import { iconOptions } from "../lib/iconOptions"

export default defineType({
  name: "features",
  title: "Блок преимуществ",
  type: "document",
  fields: [
    defineField({
      name: "sectionBadge",
      title: "Значок секции",
      type: "string",
      initialValue: "Преимущества",
    }),
    defineField({
      name: "title",
      title: "Заголовок секции",
      type: "string",
      initialValue: "Почему стоит заказать права у нас",
    }),
    defineField({
      name: "description",
      title: "Описание секции",
      type: "text",
      initialValue: "Получить водительское удостоверение с профессиональной поддержкой на каждом этапе",
    }),
    defineField({
      name: "items",
      title: "Список преимуществ",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Иконка",
              type: "string",
              options: {
                list: iconOptions,
                layout: "dropdown",
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              title: "Заголовок",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Описание",
              type: "text",
            }),
            defineField({
              name: "stat",
              title: "Значение статистики",
              type: "string",
              description: "например: 100%, 14, 24/7",
            }),
            defineField({
              name: "statLabel",
              title: "Подпись статистики",
              type: "string",
              description: "например: поддержка, дней, онлайн",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Блок преимуществ",
      }
    },
  },
})
