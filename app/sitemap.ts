import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/services/blog-service";
import { getAllServices } from "@/services/service-service";

const BASE_URL = "https://makkahorthodontist.com";
const LANGS = ["ar", "en"] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // ──────────────────────────────────────────
  // 1. Static Pages — For all languages
  // ──────────────────────────────────────────
  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "daily" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  const staticPages: MetadataRoute.Sitemap = [];

  for (const lang of LANGS) {
    for (const route of staticRoutes) {
      staticPages.push({
        url: `${BASE_URL}/${lang}${route.path}`,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        // hreflang alternates لكل صفحة
        alternates: {
          languages: {
            "ar-SA": `${BASE_URL}/ar${route.path}`,
            "en-US": `${BASE_URL}/en${route.path}`,
          },
        },
      });
    }
  }

  // ──────────────────────────────────────────
  // 2. Dynamic Service Pages — For all language
  // ──────────────────────────────────────────
  const services = await getAllServices();
  const servicePages: MetadataRoute.Sitemap = [];

  for (const lang of LANGS) {
    for (const service of services) {
      servicePages.push({
        url: `${BASE_URL}/${lang}/services/${service.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: {
          languages: {
            "ar-SA": `${BASE_URL}/ar/services/${service.slug}`,
            "en-US": `${BASE_URL}/en/services/${service.slug}`,
          },
        },
      });
    }
  }

  // ──────────────────────────────────────────
  // 3. Dynamic Blog Pages — For all languages
  // ──────────────────────────────────────────
  const posts = await getAllBlogPosts();
  const blogPages: MetadataRoute.Sitemap = [];

  for (const lang of LANGS) {
    for (const post of posts) {
      blogPages.push({
        url: `${BASE_URL}/${lang}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt),
        changeFrequency: "monthly" as const,
        priority: 0.6,
        alternates: {
          languages: {
            "ar-SA": `${BASE_URL}/ar/blog/${post.slug}`,
            "en-US": `${BASE_URL}/en/blog/${post.slug}`,
          },
        },
      });
    }
  }

  return [...staticPages, ...servicePages, ...blogPages];
}
