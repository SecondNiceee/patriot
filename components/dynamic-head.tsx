"use client"

import { useEffect } from "react"

const SANITY_PROJECT_ID = "tegzgdyt"
const SANITY_DATASET = "production"
const SANITY_API_VERSION = "2024-01-01"

const QUERY = encodeURIComponent(`*[_type == "siteSettings"][0]{seoTitle, seoDescription, siteUrl, headScripts}`)
const SANITY_URL = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${QUERY}`

interface SanitySettings {
  seoTitle?: string
  seoDescription?: string
  siteUrl?: string
  headScripts?: Array<{
    name?: string
    code?: string
    isEnabled?: boolean
  }>
}

export function DynamicHead() {
  useEffect(() => {
    fetch(SANITY_URL)
      .then((res) => res.json())
      .then(({ result }: { result: SanitySettings }) => {
        if (!result) return

        // Обновляем title
        if (result.seoTitle) {
          document.title = result.seoTitle
        }

        // Обновляем meta description
        if (result.seoDescription) {
          let metaDesc = document.querySelector('meta[name="description"]')
          if (!metaDesc) {
            metaDesc = document.createElement("meta")
            metaDesc.setAttribute("name", "description")
            document.head.appendChild(metaDesc)
          }
          metaDesc.setAttribute("content", result.seoDescription)
        }

        // Обновляем favicon
        if (result.siteUrl) {
          const faviconUrl = `${result.siteUrl}/favicon.ico`
          
          // Обновляем или создаём link[rel="icon"]
          let faviconLink = document.querySelector('link[rel="icon"]') as HTMLLinkElement
          if (!faviconLink) {
            faviconLink = document.createElement("link")
            faviconLink.rel = "icon"
            document.head.appendChild(faviconLink)
          }
          faviconLink.href = faviconUrl

          // Обновляем или создаём apple-touch-icon
          let appleIcon = document.querySelector('link[rel="apple-touch-icon"]') as HTMLLinkElement
          if (!appleIcon) {
            appleIcon = document.createElement("link")
            appleIcon.rel = "apple-touch-icon"
            document.head.appendChild(appleIcon)
          }
          appleIcon.href = faviconUrl
        }

        // Инжектируем скрипты
        if (result.headScripts && result.headScripts.length > 0) {
          result.headScripts
            .filter((s) => s.isEnabled && s.code)
            .forEach((script) => {
              // Проверяем что скрипт ещё не вставлен
              const marker = `data-sanity-script="${script.name}"`
              if (document.querySelector(`[${marker}]`)) return

              const wrapper = document.createElement("div")
              wrapper.innerHTML = script.code || ""

              Array.from(wrapper.children).forEach((child) => {
                if (child.tagName === "SCRIPT") {
                  const newScript = document.createElement("script")
                  // Копируем атрибуты
                  Array.from(child.attributes).forEach((attr) => {
                    newScript.setAttribute(attr.name, attr.value)
                  })
                  newScript.textContent = child.textContent
                  newScript.setAttribute("data-sanity-script", script.name || "")
                  document.head.appendChild(newScript)
                } else {
                  const el = child as HTMLElement
                  el.setAttribute("data-sanity-script", script.name || "")
                  document.head.appendChild(el)
                }
              })
            })
        }
      })
      .catch(() => {
        // Тихо игнорируем ошибки — статический fallback остается
      })
  }, [])

  return null
}
