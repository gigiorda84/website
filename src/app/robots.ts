import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/it/admin/'],
      },
    ],
    sitemap: 'https://alphatechnology.ai/sitemap.xml',
  }
}
