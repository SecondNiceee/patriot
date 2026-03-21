import { defineField, defineType } from "sanity"

export default defineType({
  name: "faq",
  title: "Вопросы и ответы",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Заголовок секции",
      type: "string",
      initialValue: "Часто задаваемые вопросы",
    }),
    defineField({
      name: "description",
      title: "Описание секции",
      type: "text",
      initialValue: "Ответы на популярные вопросы о получении водительских прав",
    }),
    defineField({
      name: "items",
      title: "Список вопросов",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "question",
              title: "Вопрос",
              type: "string",
            }),
            defineField({
              name: "answer",
              title: "Ответ",
              type: "text",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Вопросы и ответы",
      }
    },
  },
})
