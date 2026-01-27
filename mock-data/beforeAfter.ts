import type { BeforeAfter } from "@/types"

export const beforeAfterData: BeforeAfter[] = [
  {
    id: "1",
    beforeImageUrl: "/before-dental-treatment-crooked-teeth.jpg",
    afterImageUrl: "/perfect-smile-after-dental.png",
    translated: {
      en: {
        treatment: "Clear Aligners",
        duration: "12 months",
        description: "Corrected severe crowding and misalignment",
      },
      ar: {
        treatment: "تقويم شفاف",
        duration: "12 شهر",
        description: "تم تصحيح ازدحام الأسنان الشديد وسوء الاصطفاف",
      },
    },
  },
  {
    id: "2",
    beforeImageUrl: "/before-orthodontic-treatment-gap-teeth.jpg",
    afterImageUrl: "/after-orthodontic-treatment-closed-gap.jpg",
    translated: {
      en: {
        treatment: "Clear Aligners",
        duration: "8 months",
        description: "Closed gaps and aligned bite",
      },
      ar: {
        treatment: "تقويم شفاف",
        duration: "8 أشهر",
        description: "تم إغلاق الفجوات ومحاذاة العضّة",
      },
    },
  },
  {
    id: "3",
    beforeImageUrl: "/before-braces-treatment-overbite.jpg",
    afterImageUrl: "/after-braces-treatment-perfect-bite.jpg",
    translated: {
      en: {
        treatment: "Traditional Orthodontics",
        duration: "18 months",
        description: "Corrected overbite and aligned teeth",
      },
      ar: {
        treatment: "تقويم تقليدي",
        duration: "18 شهر",
        description: "تم تصحيح فرط العضة ومحاذاة الأسنان",
      },
    },
  },
];