import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { schemaTypes } from "./sanity/schemas"

export default defineConfig({
  name: "patriot-prava",
  title: "Patriot Prava CMS",
  
  projectId: "tegzgdyt",
  dataset: "production",
  
  basePath: "/studio",
  
  plugins: [structureTool()],
  
  schema: {
    types: schemaTypes,
  },
})
