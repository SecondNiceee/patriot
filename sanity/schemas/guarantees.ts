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
