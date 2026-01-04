import type { Metadata } from "next";
import { DoctorProfile } from "@/components/about/doctor-profile";
import { CTASection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "عن الدكتور أيمن زين | أخصائي تقويم الأسنان",
  description:
    "تعرّف على الدكتور أيمن زين، أخصائي تقويم الأسنان بخبرة تزيد عن 23 عامًا.",
  keywords: [
    "تقويم أسنان",
    "تقويم شفاف",
    "دكتور تقويم أسنان مكة",
    "تقويم بدون أسلاك",
    "تقويم الأسنان للأطفال والكبار",
    "تقويم الأسنان مكة",
    "Dr Ayman Zain",
    "Orthodontist Mecca",
  ],
};

export default function AboutPage() {
  return (
    <>
      <DoctorProfile />
      <CTASection />
    </>
  );
}
