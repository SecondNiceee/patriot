import { defineField, defineType } from "sanity"
import { iconOptions } from "../lib/iconOptions"

export default defineType({
  name: "guarantees",
  title: "Блок гарантий",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Заголовок секции",
      type: "string",
      initialValue: "Наши гарантии",
    }),
    defineField({
      name: "description",
      title: "Описание секции",
      type: "text",
      initialValue: "Мы гарантируем качество и надежность на каждом этапе",
    }),
    defineField({
      name: "items",
      title: "Список гарантий",
      type: "array",
      initialValue: [
        {
          _type: "object",
          icon: "FileCheck",
          title: "Официальное оформление",
          description: "100% официальное оформление всех документов",
        },
        {
          _type: "object",
          icon: "Banknote",
          title: "Возврат средств",
          description: "Возврат средств, если не получите права",
        },
        {
          _type: "object",
          icon: "Lock",
          title: "Конфиденциальность",
          description: "Конфиденциальность ваших данных",
        },
        {
          _type: "object",
          icon: "Award",
          title: "Прозрачные цены",
          description: "Прозрачное ценообразование без скрытых платежей",
        },
        {
          _type: "object",
          icon: "Shield",
          title: "Юридическое сопровождение",
          description: "Юридическое сопровождение на всех этапах",
        },
        {
          _type: "object",
          icon: "Headphones",
          title: "Поддержка после получения",
          description: "Поддержка после получения прав",
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
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Блок гарантий",
      }
    },
  },
})
