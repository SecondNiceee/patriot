import { defineField, defineType } from "sanity"

export default defineType({
  name: "testimonials",
  title: "Блок отзывов",
  type: "document",
  fields: [
    defineField({
      name: "sectionBadge",
      title: "Значок секции",
      type: "string",
      initialValue: "Отзывы",
    }),
    defineField({
      name: "title",
      title: "Заголовок секции",
      type: "string",
      initialValue: "Что говорят клиенты",
    }),
    defineField({
      name: "description",
      title: "Описание секции",
      type: "text",
      initialValue: "Реальные отзывы тех, кто уже получил права с нами",
    }),
    defineField({
      name: "items",
      title: "Список отзывов",
      type: "array",
      initialValue: [
        {
          _type: "object",
          name: "Анна",
          age: 28,
          rating: 5,
          text: "Очень переживала, но ребята всё объяснили и помогли быстро получить права. Спасибо Патриот!",
        },
        {
          _type: "object",
          name: "Игорь",
          age: 32,
          rating: 5,
          text: "Все сделали без нервов, сопровождение на каждом этапе. Рекомендую!",
        },
        {
          _type: "object",
          name: "Дмитрий",
          age: 41,
          rating: 5,
          text: "Права получил в срок, как и обещали. Отличная автошкола!",
        },
      ],
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Имя",
              type: "string",
            }),
            defineField({
              name: "age",
              title: "Возраст",
              type: "number",
            }),
            defineField({
              name: "rating",
              title: "Оценка",
              type: "number",
              validation: (Rule) => Rule.min(1).max(5),
              initialValue: 5,
            }),
            defineField({
              name: "text",
              title: "Текст отзыва",
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
        title: "Блок отзывов",
      }
    },
  },
})
