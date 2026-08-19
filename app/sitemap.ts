import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.kbk-mornar.hr';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      alternates: {
        languages: {
          hr: `${baseUrl}/`,
          en: `${baseUrl}/en`,
          'x-default': `${baseUrl}/`,
        },
      },
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      alternates: {
        languages: {
          hr: `${baseUrl}/blog`,
          en: `${baseUrl}/en/blog`,
          'x-default': `${baseUrl}/blog`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      alternates: {
        languages: {
          hr: `${baseUrl}/`,
          en: `${baseUrl}/en`,
          'x-default': `${baseUrl}/`,
        },
      },
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified: new Date(),
      alternates: {
        languages: {
          hr: `${baseUrl}/blog`,
          en: `${baseUrl}/en/blog`,
          'x-default': `${baseUrl}/blog`,
        },
      },
    },
  ];
}
