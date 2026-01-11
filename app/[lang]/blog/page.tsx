import type { Metadata } from "next";
import { BlogGrid } from "@/components/blog/blog-grid";
import { getAllBlogPosts } from "@/services/blog-service";

interface PageProps {
  params: Promise<{ lang: string }>;
}

/* =========================
   Metadata 
========================= */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: routeLang } = await params;
  const lang: "en" | "ar" = routeLang === "en" ? "en" : "ar";

  if (lang === "ar") {
    return {
      title: "مدونة تقويم الأسنان – نصائح، مقالات وإرشادات | د. أيمن زين",
      description:
        "استكشف مقالات متخصصة حول التقويم الشفاف، تقويم الأسنان، العناية بالأسنان، وتحويل الابتسامة. تابع أحدث النصائح والإرشادات من د. أيمن زين.",
      keywords: [
        "مدونة تقويم الأسنان",
        "تقويم شفاف",
        "نصائح العناية بالأسنان",
        "تصحيح الابتسامة",
        "دكتور تقويم أسنان",
        "تقويم الأسنان للأطفال والكبار",
      ],
      alternates: { canonical: "/ar/blog" },
      openGraph: {
        title: "مدونة تقويم الأسنان – نصائح، مقالات وإرشادات | د. أيمن زين",
        description:
          "استكشف مقالات متخصصة حول التقويم الشفاف، تقويم الأسنان، العناية بالأسنان، وتحويل الابتسامة. تابع أحدث النصائح والإرشادات من د. أيمن زين.",
        url: "/ar/blog",
        siteName: "Dr. Ayman Zain Orthodontics",
        type: "website",
      },
    };
  }

  return {
    title: "Orthodontics Blog – Tips, Articles & Guides | Dr. Ayman Zain",
    description:
      "Explore specialized articles on clear aligners, orthodontics, dental care, and smile transformations. Follow the latest tips and guides from Dr. Ayman Zain.",
    keywords: [
      "Orthodontics Blog",
      "Clear Aligners",
      "Dental Care Tips",
      "Smile Correction",
      "Orthodontist Mecca",
    ],
    alternates: { canonical: "/en/blog" },
    openGraph: {
      title: "Orthodontics Blog – Tips, Articles & Guides | Dr. Ayman Zain",
      description:
        "Explore specialized articles on clear aligners, orthodontics, dental care, and smile transformations. Follow the latest tips and guides from Dr. Ayman Zain.",
      url: "/en/blog",
      siteName: "Dr. Ayman Zain Orthodontics",
      type: "website",
    },
  };
}

/* =========================
   Page Component
========================= */
export default async function BlogPage({ params }: PageProps) {
  const { lang: routeLang } = await params;
  const lang: "en" | "ar" = routeLang === "en" ? "en" : "ar";
  const posts = await getAllBlogPosts();

  return <BlogGrid lang={lang} posts={posts} />;
}
