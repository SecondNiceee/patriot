import type { StructureBuilder } from "sanity/structure"

// Список всех singleton типов
const singletonTypes = [
  { id: "siteSettings", title: "Настройки сайта" },
  { id: "header", title: "Шапка сайта" },
  { id: "hero", title: "Главный экран" },
  { id: "stats", title: "Статистика" },
  { id: "features", title: "Преимущества" },
  { id: "services", title: "Услуги" },
  { id: "process", title: "Процесс работы" },
  { id: "guarantees", title: "Гарантии" },
  { id: "license", title: "Лицензия" },
  { id: "testimonials", title: "Отзывы" },
  { id: "faq", title: "FAQ" },
  { id: "contact", title: "Контактная форма" },
  { id: "footer", title: "Подвал сайта" },
]

export const singletonTypeNames = singletonTypes.map((t) => t.id)

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title("Контент")
    .items([
      // Группа "Общие настройки"
      S.listItem()
        .title("Общие настройки")
        .child(
          S.list()
            .title("Общие настройки")
            .items([
              S.listItem()
                .title("Настройки сайта")
                .id("siteSettings")
                .child(
                  S.document()
                    .schemaType("siteSettings")
                    .documentId("siteSettings")
                ),
              S.listItem()
                .title("Шапка сайта")
                .id("header")
                .child(
                  S.document()
                    .schemaType("header")
                    .documentId("header")
                ),
              S.listItem()
                .title("Подвал сайта")
                .id("footer")
                .child(
                  S.document()
                    .schemaType("footer")
                    .documentId("footer")
                ),
            ])
        ),
      S.divider(),
      // Группа "Секции главной страницы"
      S.listItem()
        .title("Секции главной страницы")
        .child(
          S.list()
            .title("Секции")
            .items([
              S.listItem()
                .title("Главный экран")
                .id("hero")
                .child(
                  S.document()
                    .schemaType("hero")
                    .documentId("hero")
                ),
              S.listItem()
                .title("Статистика")
                .id("stats")
                .child(
                  S.document()
                    .schemaType("stats")
                    .documentId("stats")
                ),
              S.listItem()
                .title("Преимущества")
                .id("features")
                .child(
                  S.document()
                    .schemaType("features")
                    .documentId("features")
                ),
              S.listItem()
                .title("Услуги")
                .id("services")
                .child(
                  S.document()
                    .schemaType("services")
                    .documentId("services")
                ),
              S.listItem()
                .title("Процесс работы")
                .id("process")
                .child(
                  S.document()
                    .schemaType("process")
                    .documentId("process")
                ),
              S.listItem()
                .title("Гарантии")
                .id("guarantees")
                .child(
                  S.document()
                    .schemaType("guarantees")
                    .documentId("guarantees")
                ),
              S.listItem()
                .title("Лицензия")
                .id("license")
                .child(
                  S.document()
                    .schemaType("license")
                    .documentId("license")
                ),
              S.listItem()
                .title("Отзывы")
                .id("testimonials")
                .child(
                  S.document()
                    .schemaType("testimonials")
                    .documentId("testimonials")
                ),
              S.listItem()
                .title("FAQ")
                .id("faq")
                .child(
                  S.document()
                    .schemaType("faq")
                    .documentId("faq")
                ),
              S.listItem()
                .title("Контактная форма")
                .id("contact")
                .child(
                  S.document()
                    .schemaType("contact")
                    .documentId("contact")
                ),
            ])
        ),
    ])
