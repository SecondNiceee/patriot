import { defineField, defineType } from "sanity"
import { sectionOptions } from "../lib/sectionOptions"

export default defineType({
  name: "footer",
  title: "Подвал сайта",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Название сайта",
      type: "string",
      initialValue: "Patriot Prava",
    }),
    defineField({
      name: "description",
      title: "Описание",
      type: "text",
      initialValue: "Профессиональное оформление водительских прав с гарантией качества и безопасности.",
    }),
    defineField({
      name: "quickLinks",
      title: "Быстрые ссылки",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Название",
              type: "string",
            }),
            defineField({
              name: "href",
              title: "Секция для скролла",
              type: "string",
              options: {
                list: sectionOptions,
                layout: "dropdown",
              },
              description: "Выберите секцию, к которой будет прокручиваться страница",
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "href",
            },
          },
        },
      ],
    }),
    defineField({
      name: "copyrightText",
      title: "Текст авторских прав",
      type: "string",
      initialValue: "Все права защищены.",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Подвал сайта",
      }
    },
  },
})
