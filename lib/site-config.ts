export const siteConfig = {
  "name": "phone shop",
  "tagline": "Beautiful, fast, on-brand.",
  "theme": "saas",
  "colorScheme": "neutral",
  "pages": [
    {
      "path": "/",
      "title": "Home"
    }
  ]
} as const

export type SiteConfig = typeof siteConfig
