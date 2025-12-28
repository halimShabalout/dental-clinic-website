import type { Service } from "@/types"

export const servicesData: Service[] = [
  {
    id: "1",
    slug: "clear-aligners",
    imageUrl: "/clear-dental-aligners-invisible-braces.jpg",
    featured: true,

    translated: {
      en: {
        name: "Clear Aligners (Invisible Braces)",
        description:
          "Achieve a perfect smile discreetly with our advanced clear aligner technology - virtually invisible, removable, and comfortable.",
        longDescription:
          "Clear aligners represent the pinnacle of modern orthodontics. Using advanced 3D imaging and custom-fabricated aligners, we gradually move your teeth into their ideal positions without the discomfort and appearance of traditional braces. Each aligner is precisely manufactured to fit your unique dental structure.",
        benefits: [
          "Nearly invisible - no one will know you're straightening your teeth",
          "Removable for eating and cleaning - maintain your lifestyle",
          "More comfortable than traditional braces - no metal brackets or wires",
          "Predictable results with 3D treatment planning",
          "Fewer dental visits required",
          "Effective for a wide range of orthodontic issues",
        ],
        duration: "6–18 months (depending on case complexity)",
      },
      ar: {
        name: "التقويم الشفاف (تقويم غير مرئي)",
        description:
          "احصل على ابتسامة مثالية بشكل غير ملحوظ باستخدام تقنية التقويم الشفاف المتقدمة، فهو شبه غير مرئي وقابل للإزالة ومريح.",
        longDescription:
          "يمثل التقويم الشفاف قمة تطور تقنيات تقويم الأسنان الحديثة. باستخدام التصوير ثلاثي الأبعاد وتقويمات مصممة خصيصًا، نقوم بتحريك الأسنان تدريجيًا إلى مواضعها المثالية دون الانزعاج أو المظهر التقليدي للتقويم المعدني. يتم تصنيع كل تقويم بدقة ليتناسب مع بنية أسنانك الفريدة.",
        benefits: [
          "شبه غير مرئي – لن يلاحظ أحد أنك تقوم بتقويم أسنانك",
          "قابل للإزالة عند الأكل والتنظيف – حافظ على نمط حياتك",
          "أكثر راحة من التقويم التقليدي – بدون أسلاك أو حاصرات معدنية",
          "نتائج متوقعة بفضل التخطيط ثلاثي الأبعاد",
          "زيارات أقل لطبيب الأسنان",
          "فعال لمعظم مشاكل تقويم الأسنان",
        ],
        duration: "من 6 إلى 18 شهرًا (حسب تعقيد الحالة)",
      },
    },
  },

  {
    id: "2",
    slug: "traditional-orthodontics",
    imageUrl: "/dental-braces-orthodontics-treatment.jpg",
    featured: false,

    translated: {
      en: {
        name: "Traditional Orthodontics",
        description:
          "Time-tested metal and ceramic braces for comprehensive orthodontic treatment of complex cases.",
        longDescription:
          "Traditional orthodontics remains an excellent solution for complex dental alignment issues. We offer both metal and ceramic braces options, utilizing the latest in bracket technology for faster, more comfortable treatment.",
        benefits: [
          "Effective for complex orthodontic cases",
          "Ceramic options for improved aesthetics",
          "Proven track record of success",
          "Suitable for all ages",
          "Comprehensive bite correction",
        ],
        duration: "18–36 months (varies by case)",
      },
      ar: {
        name: "التقويم التقليدي",
        description:
          "تقويم معدني وخزفي مجرّب وفعّال لعلاج حالات تقويم الأسنان المعقدة بشكل شامل.",
        longDescription:
          "لا يزال التقويم التقليدي خيارًا ممتازًا لحالات عدم انتظام الأسنان المعقدة. نوفر خيارات التقويم المعدني والخزفي باستخدام أحدث تقنيات الحاصرات لتحقيق نتائج أسرع وأكثر راحة.",
        benefits: [
          "فعال للحالات التقويمية المعقدة",
          "خيارات خزفية لمظهر جمالي أفضل",
          "نتائج مثبتة وموثوقة",
          "مناسب لجميع الأعمار",
          "تصحيح شامل للإطباق",
        ],
        duration: "من 18 إلى 36 شهرًا (حسب الحالة)",
      },
    },
  },

  {
    id: "3",
    slug: "orthodontic-consultation",
    imageUrl: "/dentist-consultation-modern-clinic.jpg",
    featured: false,

    translated: {
      en: {
        name: "Orthodontic Consultation",
        description:
          "Comprehensive evaluation and personalized treatment planning for your perfect smile journey.",
        longDescription:
          "Our initial consultation includes a complete orthodontic examination, digital imaging, 3D scanning, and detailed treatment planning. We'll discuss your goals, concerns, and the best treatment options for your unique situation.",
        benefits: [
          "Comprehensive oral examination",
          "Digital X-rays and 3D scans",
          "Personalized treatment recommendations",
          "Transparent cost breakdown",
          "No-obligation consultation",
        ],
        duration: "60–90 minutes",
      },
      ar: {
        name: "استشارة تقويم الأسنان",
        description:
          "تقييم شامل وخطة علاج مخصصة لرحلتك نحو الابتسامة المثالية.",
        longDescription:
          "تشمل الاستشارة الأولى فحصًا كاملاً لتقويم الأسنان، وتصويرًا رقميًا، ومسحًا ثلاثي الأبعاد، مع وضع خطة علاج مفصلة. سنناقش أهدافك ومخاوفك وأفضل خيارات العلاج المناسبة لحالتك.",
        benefits: [
          "فحص شامل للفم والأسنان",
          "أشعة رقمية ومسح ثلاثي الأبعاد",
          "توصيات علاج مخصصة",
          "توضيح كامل للتكاليف",
          "استشارة بدون أي التزام",
        ],
        duration: "من 60 إلى 90 دقيقة",
      },
    },
  },
]
