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
