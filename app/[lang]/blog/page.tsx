import type { Metadata } from "next"
import { BlogGrid } from "@/components/blog/blog-grid"

export const metadata: Metadata = {
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
}

export default function BlogPage() {
  return <BlogGrid />
}
