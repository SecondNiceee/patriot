import { defineField, defineType } from "sanity"
import { iconOptions } from "../lib/iconOptions"

export default defineType({
  name: "features",
  title: "Блок преимуществ",
  type: "document",
  fields: [
    defineField({
      name: "sectionBadge",
      title: "Значок секции",
      type: "string",
      initialValue: "Преимущества",
    }),
    defineField({
      name: "title",
      title: "Заголовок секции",
      type: "string",
      initialValue: "Почему стоит заказать права у нас",
    }),
    defineField({
      name: "description",
      title: "Описание секции",
      type: "text",
      initialValue: "Получить водительское удостоверение с профессиональной поддержкой на каждом этапе",
    }),
    defineField({
      name: "items",
      title: "Список преимуществ",
      type: "array",
      initialValue: [
        {
          _type: "object",
          icon: "Car",
          title: "Полное сопровождение",
          description: "Ведём вас от первой консультации до момента получения удостоверения в руки.",
          stat: "100%",
          statLabel: "поддержка",
        },
        {
          _type: "object",
          icon: "Zap",
          title: "Быстрые сроки",
          description: "Оптимизированный процесс позволяет получить права в кратчайшие сроки.",
          stat: "14",
          statLabel: "дней",
        },
        {
          _type: "object",
          icon: "FileCheck",
          title: "Юридическая чистота",
          description: "Все документы оформляются официально с соблюдением законодательства.",
          stat: "100%",
          statLabel: "легально",
        },
        {
          _type: "object",
          icon: "Shield",
          title: "Гарантия результата",
          description: "Гарантируем получение водительского удостоверения или возврат средств.",
          stat: "5 лет",
          statLabel: "гарантия",
        },
        {
          _type: "object",
          icon: "Clock",
          title: "Поддержка 24/7",
          description: "Наши специалисты всегда на связи и готовы ответить на ваши вопросы.",
          stat: "24/7",
          statLabel: "онлайн",
        },
        {
          _type: "object",
          icon: "Users",
          title: "Индивидуальный подход",
          description: "Учитываем особенности каждого клиента и подбираем оптимальное решение.",
          stat: "2500+",
          statLabel: "клиентов",
        },
      ],
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Иконка",
              type: "string",
              options: {
                list: iconOptions,
                layout: "dropdown",
              },
              validation: (Rule) => Rule.required(),
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
            defineField({
              name: "stat",
              title: "Значение статистики",
              type: "string",
              description: "например: 100%, 14, 24/7",
            }),
            defineField({
              name: "statLabel",
              title: "Подпись статистики",
              type: "string",
              description: "например: поддержка, дней, онлайн",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Блок преимуществ",
      }
    },
  },
})
