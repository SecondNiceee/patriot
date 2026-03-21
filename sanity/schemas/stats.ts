import { defineField, defineType } from "sanity"

export default defineType({
  name: "stats",
  title: "Блок статистики",
  type: "document",
  fields: [
    defineField({
      name: "items",
      title: "Показатели статистики",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "value",
              title: "Значение",
              type: "string",
            }),
            defineField({
              name: "label",
              title: "Подпись",
              type: "string",
            }),
          ],
        },
      ],
      initialValue: [
        { value: "10+", label: "Лет опыта работы" },
        { value: "5000+", label: "Довольных клиентов" },
        { value: "99%", label: "Успешных оформлений" },
        { value: "3-7", label: "Дней на оформление" },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Блок статистики",
      }
    },
  },
})
