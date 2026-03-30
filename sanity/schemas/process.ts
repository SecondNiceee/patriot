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
      initialValue: [
        {
          _type: "object",
          step: 1,
          title: "Оставьте заявку на получение прав",
          description: "Свяжитесь с нами через форму на сайте, WhatsApp, Telegram или позвоните напрямую.",
        },
        {
          _type: "object",
          step: 2,
          title: "Бесплатная консультация",
          description: "Наш специалист проконсультирует вас, расскажет как получить права и подберёт оптимальное решение.",
        },
        {
          _type: "object",
          step: 3,
          title: "Оформление документов",
          description: "Собираем и оформляем все необходимые документы для получения водительского удостоверения.",
        },
        {
          _type: "object",
          step: 4,
          title: "Обучение и подготовка",
          description: "Проводим обучение по теории и практике вождения с опытными инструкторами.",
        },
        {
          _type: "object",
          step: 5,
          title: "Сдача экзаменов",
          description: "Сопровождаем вас на экзаменах в ГИБДД, помогаем со всеми организационными вопросами.",
        },
        {
          _type: "object",
          step: 6,
          title: "Получение водительского удостоверения",
          description: "Вы получаете водительские права и можете законно управлять автомобилем.",
        },
      ],
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
