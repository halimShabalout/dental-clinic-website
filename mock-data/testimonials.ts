import type { Testimonial } from "@/types"

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    patientName: "Sarah Alqahtani",
    rating: 5,
    comment:
      "Dr. Ayman transformed my smile in just 10 months with clear aligners. The process was so comfortable and convenient - I could remove them while eating and no one even noticed I was wearing them. Highly recommend!",
    treatment: "Clear Aligners",
    date: "2024-11-15",
    imageUrl: "/placeholder-user.jpg",
    translated: {
      en: {
        patientName: "Sarah Alqahtani",
        comment:
          "Dr. Ayman transformed my smile in just 10 months with clear aligners. The process was so comfortable and convenient - I could remove them while eating and no one even noticed I was wearing them. Highly recommend!",
        treatment: "Clear Aligners",
      },
      ar: {
        patientName: "سارة القحطاني",
        comment:
          "تجربتي مع الدكتور أيمن كانت رائعة. التقويم الشفاف كان مريح جدًا وعملي، وأقدر أشيله وقت الأكل بدون أي إزعاج، وما كان أحد يلاحظ وجوده. النتيجة ممتازة وأنصح فيه بكل ثقة.",
        treatment: "التقويم الشفاف",
      },
    },
  },
  {
    id: "2",
    patientName: "Halim Shabalout",
    rating: 5,
    comment:
      "I was hesitant about getting braces as an adult, but Dr. Ayman made the entire experience seamless. The clear aligners were perfect for my professional life. Amazing results and exceptional care!",
    treatment: "Clear Aligners",
    date: "2024-10-22",
    imageUrl: "/patient-1.jpg",
    translated: {
      en: {
        patientName: "Halim Shabalout",
        comment:
          "The treatment experience was excellent from start to finish. Dr. Ayman was highly professional, respectful, and very clear in explaining every step of the process. Appointments were always on time, and the results exceeded my expectations. I highly recommend him with full confidence.",
        treatment: "Metal Braces",
      },
      ar: {
        patientName: "حليم شبلوط",
        comment:
          "ما شاء الله، كانت التجربة العلاجية ممتازة كتير. تعامل الدكتور أيمن راقٍ ومحترف لآخر درجة، وكان ملتزم بالمواعيد وشرح كل خطوة من العلاج بطريقة واضحة. تجربة مريحة ونتائجها رائعة، بنصح فيه وبكل ثقة.",
        treatment: "التقويم المعدني",
      },
    },
  },
  {
    id: "3",
    patientName: "Layla Alharbi",
    rating: 5,
    comment:
      "Outstanding expertise and warm patient care. Dr. Ayman explained everything clearly and the treatment timeline was exactly as predicted. My confidence has soared with my new smile!",
    treatment: "Clear Aligners",
    date: "2024-09-08",
    imageUrl: "/placeholder-user.jpg",
    translated: {
      en: {
        patientName: "Layla Alharbi",
        comment:
          "Outstanding expertise and warm patient care. Dr. Ayman explained everything clearly and the treatment timeline was exactly as predicted. My confidence has soared with my new smile!",
        treatment: "Clear Aligners",
      },
      ar: {
        patientName: "ليلى الحربي",
        comment:
          "تعامل الدكتور أيمن كان راقٍ جدًا، وشرح الخطة العلاجية بكل وضوح من البداية. مدة العلاج كانت مثل ما قال بالضبط، والنتيجة فرّقت معي كثير. مبسوطة بابتسامتي الجديدة وأنصح فيه بكل ثقة.",
        treatment: "التقويم الشفاف",
      },
    },
  },
]
