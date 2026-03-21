import { defineField, defineType } from "sanity"
import { sectionOptions } from "../lib/sectionOptions"

export default defineType({
  name: "header",
  title: "Шапка сайта",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      title: "Логотип",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "siteName",
      title: "Название сайта",
      type: "string",
      initialValue: "Patriot Prava",
    }),
    defineField({
      name: "navigation",
      title: "Пункты навигации",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Название пункта",
              type: "string",
              description: "Текст, который будет отображаться в меню",
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
      name: "ctaButtonText",
      title: "Текст кнопки действия",
      type: "string",
      initialValue: "Связаться",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Шапка сайта",
      }
    },
  },
})
