import type { HeadScript } from "@/lib/sanity"

interface HeadScriptsProps {
  scripts?: HeadScript[]
}

export function HeadScripts({ scripts }: HeadScriptsProps) {
  if (!scripts || scripts.length === 0) return null

  const enabledScripts = scripts.filter((script) => script.isEnabled && script.code)

  if (enabledScripts.length === 0) return null

  return (
    <>
      {enabledScripts.map((script, index) => (
        <div
          key={index}
          dangerouslySetInnerHTML={{ __html: script.code || "" }}
        />
      ))}
    </>
  )
}
