import type { Testimonial } from "@/types"

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    patientName: "Sarah Ahmed",
    rating: 5,
    comment:
      "Dr. Ayman transformed my smile in just 10 months with clear aligners. The process was so comfortable and convenient - I could remove them while eating and no one even noticed I was wearing them. Highly recommend!",
    treatment: "Clear Aligners",
    date: "2024-11-15",
    imageUrl: "/happy-female-patient-smiling.jpg",
    translated: {
      en: {
        patientName: "Sarah Ahmed",
        comment:
          "Dr. Ayman transformed my smile in just 10 months with clear aligners. The process was so comfortable and convenient - I could remove them while eating and no one even noticed I was wearing them. Highly recommend!",
        treatment: "Clear Aligners",
      },
      ar: {
        patientName: "سارة أحمد",
        comment:
          "قام الدكتور أيمن بتحويل ابتسامتي خلال 10 أشهر فقط باستخدام التقويم الشفاف. كانت العملية مريحة جدًا ويمكنني إزالته أثناء الأكل دون أن يلاحظ أحد، أنصح به بشدة!",
        treatment: "التقويم الشفاف",
      },
    },
  },
  {
    id: "2",
    patientName: "Mohamed Hassan",
    rating: 5,
    comment:
      "I was hesitant about getting braces as an adult, but Dr. Ayman made the entire experience seamless. The clear aligners were perfect for my professional life. Amazing results and exceptional care!",
    treatment: "Clear Aligners",
    date: "2024-10-22",
    imageUrl: "/professional-male-smiling-portrait.jpg",
    translated: {
      en: {
        patientName: "Mohamed Hassan",
        comment:
          "I was hesitant about getting braces as an adult, but Dr. Ayman made the entire experience seamless. The clear aligners were perfect for my professional life. Amazing results and exceptional care!",
        treatment: "Clear Aligners",
      },
      ar: {
        patientName: "محمد حسن",
        comment:
          "كنت مترددًا في تركيب التقويم كبالغ، لكن الدكتور أيمن جعل التجربة سلسة تمامًا. كان التقويم الشفاف مثاليًا لحياتي المهنية. نتائج مذهلة ورعاية ممتازة!",
        treatment: "التقويم الشفاف",
      },
    },
  },
  {
    id: "3",
    patientName: "Layla Ibrahim",
    rating: 5,
    comment:
      "Outstanding expertise and warm patient care. Dr. Ayman explained everything clearly and the treatment timeline was exactly as predicted. My confidence has soared with my new smile!",
    treatment: "Clear Aligners",
    date: "2024-09-08",
    imageUrl: "/confident-woman-smiling.jpg",
    translated: {
      en: {
        patientName: "Layla Ibrahim",
        comment:
          "Outstanding expertise and warm patient care. Dr. Ayman explained everything clearly and the treatment timeline was exactly as predicted. My confidence has soared with my new smile!",
        treatment: "Clear Aligners",
      },
      ar: {
        patientName: "ليلى إبراهيم",
        comment:
          "خبرة رائعة ورعاية دافئة للمرضى. شرح الدكتور أيمن كل شيء بوضوح وكان جدول العلاج مطابقًا تمامًا للتوقعات. ارتفعت ثقتي بنفسي مع ابتسامتي الجديدة!",
        treatment: "التقويم الشفاف",
      },
    },
  },
]
