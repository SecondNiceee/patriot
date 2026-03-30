import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "tegzgdyt",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  perspective: "published",
  // Disable Next.js fetch cache - critical for seeing updates
  stega: { enabled: false },
})

// Client with no-cache fetch options for server components
export async function sanityFetch<T>(query: string, params = {}): Promise<T> {
  return client.fetch(query, params, {
    next: { revalidate: 0 }, // Disable Next.js cache
  })
}

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
