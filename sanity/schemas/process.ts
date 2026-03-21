import { defineField, defineType } from "sanity"

export default defineType({
  name: "process",
  title: "Этапы работы",
  type: "document",
  fields: [
    defineField({
      name: "sectionBadge",
      title: "Значок секции",
      type: "string",
      initialValue: "Процесс",
    }),
    defineField({
      name: "title",
      title: "Заголовок секции",
      type: "string",
      initialValue: "Как получить водительские права",
    }),
    defineField({
      name: "description",
      title: "Описание секции",
      type: "text",
      initialValue: "Простой и прозрачный путь к оформлению прав за 6 шагов",
    }),
    defineField({
      name: "steps",
      title: "Шаги процесса",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "step",
              title: "Номер шага",
              type: "number",
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
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Этапы работы",
      }
    },
  },
})
