import { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  const lang: "ar" | "en" = "ar"
  const isRTL = lang === "ar"

  return {
    name: isRTL
      ? "د. أيمن زين لتقويم الأسنان"
      : "Dr. Ayman Zain Orthodontics",

    short_name: isRTL
      ? "د. أيمن زين"
      : "Dr Ayman Zain",

    description: isRTL
      ? "عيادة الدكتور أيمن زين لتقويم الأسنان في مكة المكرمة. تقويم شفاف، تقويم للأطفال والكبار، ابتسامة صحية ومثالية بخبرة تتجاوز 23 عاماً."
      : "Dr. Ayman Zain Orthodontics clinic in Mecca. Clear aligners, orthodontics for adults and children, and perfect smiles with over 23 years of experience.",

    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f172a",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/main-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],

    categories: [
      "health",
      "medical",
      "orthodontics",
      "dental care",
      "business",
    ],

    lang: lang,
    dir: isRTL ? "rtl" : "ltr",
  }
}
