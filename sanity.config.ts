import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { schemaTypes } from "./sanity/schemas"
import { deskStructure, singletonTypeNames } from "./sanity/lib/deskStructure"

export default defineConfig({
  name: "patriot-prava",
  title: "Patriot Prava CMS",
  
  projectId: "tegzgdyt",
  dataset: "production",
  
  basePath: "/studio",
  
  plugins: [
    structureTool({
      structure: deskStructure,
    }),
  ],
  
  schema: {
    types: schemaTypes,
    // Фильтруем singleton типы из глобального "Create new document"
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypeNames.includes(schemaType)),
  },
  
  document: {
    // Запрещаем создание новых документов для singleton типов
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === "global") {
        return prev.filter(
          (templateItem) => !singletonTypeNames.includes(templateItem.templateId)
        )
      }
      return prev
    },
    // Запрещаем удаление и дублирование singleton документов
    actions: (prev, { schemaType }) => {
      if (singletonTypeNames.includes(schemaType)) {
        return prev.filter(
          ({ action }) => action && !["unpublish", "delete", "duplicate"].includes(action)
        )
      }
      return prev
    },
  },
})
