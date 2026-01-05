import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alphatechnology.ai'
  const currentDate = new Date()

  return [
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
