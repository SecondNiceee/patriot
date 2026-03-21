import { defineField, defineType } from "sanity"

export default defineType({
  name: "contact",
  title: "Форма связи",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Заголовок секции",
      type: "string",
      initialValue: "Оставьте заявку",
    }),
    defineField({
      name: "description",
      title: "Описание секции",
      type: "text",
      initialValue: "Заполните форму и мы свяжемся с вами в ближайшее время",
    }),
    defineField({
      name: "buttonText",
      title: "Текст кнопки",
      type: "string",
      initialValue: "Отправить заявку",
    }),
    defineField({
      name: "formFields",
      title: "Подписи полей формы",
      type: "object",
      fields: [
        defineField({
          name: "nameLabel",
          title: "Подпись поля имени",
          type: "string",
          initialValue: "Ваше имя",
        }),
        defineField({
          name: "phoneLabel",
          title: "Подпись поля телефона",
          type: "string",
          initialValue: "Номер телефона",
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Форма связи",
      }
    },
  },
})
