import { defineField, defineType } from "sanity"

export default defineType({
  name: "license",
  title: "Лицензия и документы",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Заголовок секции",
      type: "string",
      initialValue: "Лицензия и документы",
    }),
    defineField({
      name: "description",
      title: "Описание секции",
      type: "text",
      initialValue: "Мы работаем полностью официально. Наша деятельность лицензирована Региональной службой по надзору и контролю в сфере образования Ростовской области.",
    }),
    defineField({
      name: "licenseNumber",
      title: "Номер лицензии (значок)",
      type: "string",
      initialValue: "Лицензия № 6651 — Серия 61Л01 № 0004324 — Бессрочная",
    }),
    defineField({
      name: "images",
      title: "Изображения лицензий",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Изображение",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: "alt",
              title: "Альтернативный текст",
              type: "string",
            }),
            defineField({
              name: "title",
              title: "Название изображения",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Лицензия и документы",
      }
    },
  },
})
