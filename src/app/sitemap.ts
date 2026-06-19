import { MetadataRoute } from 'next'
import { SITE_COPY } from '@/content/site-copy'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alphatechnology.ai'
  const currentDate = new Date()

  const portfolioEntries: MetadataRoute.Sitemap = SITE_COPY.en.portfolio.projects.map((p) => ({
    url: `${baseUrl}/portfolio/${p.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.6,
    alternates: {
      languages: {
        en: `${baseUrl}/portfolio/${p.slug}`,
        it: `${baseUrl}/it/portfolio/${p.slug}`,
      },
    },
  }))

  return [
    ...portfolioEntries,
    {
      url: `${baseUrl}/bandi`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/bandi`,
          it: `${baseUrl}/it/bandi`,
        },
      },
    },
    {
      url: `${baseUrl}/it/bandi`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/bandi`,
          it: `${baseUrl}/it/bandi`,
        },
      },
    },
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}`,
          it: `${baseUrl}/it`,
        },
      },
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: {
        languages: {
          en: `${baseUrl}/privacy`,
          it: `${baseUrl}/it/privacy`,
        },
      },
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: {
        languages: {
          en: `${baseUrl}/cookies`,
          it: `${baseUrl}/it/cookies`,
        },
      },
    },
    {
      url: `${baseUrl}/it/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: {
        languages: {
          en: `${baseUrl}/privacy`,
          it: `${baseUrl}/it/privacy`,
        },
      },
    },
    {
      url: `${baseUrl}/it/cookies`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: {
        languages: {
          en: `${baseUrl}/cookies`,
          it: `${baseUrl}/it/cookies`,
        },
      },
    },
    // Future Italian version
    {
      url: `${baseUrl}/it`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1.0,
      alternates: {
        languages: {
          en: baseUrl,
          it: `${baseUrl}/it`,
        },
      },
    },
  ]
}
