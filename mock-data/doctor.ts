import type { Doctor } from "@/types"

export const doctorData: Doctor = {
  id: "1",
  imageUrl: "/dr-ayman.png",

  translated: {
    en: {
      name: "Dr. Ayman Zain",
      title: "Orthodontist & Clear Aligner Specialist",
      specialization: "Orthodontics & Clear Aligners",
      bio: "Dr. Ayman Zain is a leading orthodontist with over 23 years of experience in transforming smiles through innovative clear aligner technology. His passion for combining cutting-edge orthodontic techniques with personalized patient care has helped thousands achieve their dream smiles.",
      education: [
        "Bachelor of Dental Surgery (BDS) – Damascus University, 1995",
        "Board Certification in Orthodontics, 2002"
      ],
      experience: [
        "Practicing orthodontics in Makkah since 2005",
        "Extensive experience in diagnosing and treating a wide range of orthodontic cases",
        "Providing comprehensive treatment plans using modern orthodontic techniques"
      ]
      ,
      philosophy:
        "I believe every smile tells a story. My mission is to help patients write their best chapter through personalized, comfortable, and technologically advanced orthodontic treatment. Clear aligners have revolutionized how we approach smile transformation, making it more accessible and convenient than ever before.",
    },
    ar: {
      name: "د. أيمن زين",
      title: "أخصائي تقويم الأسنان وتقويم الشفاف",
      specialization: "تقويم الأسنان والتقويم الشفاف",
      bio: "د. أيمن زين هو أحد أطباء التقويم الرائدين ولديه أكثر من 23 عامًا من الخبرة في تحويل الابتسامات باستخدام تقنية التقويم الشفاف المبتكرة. شغفه في دمج تقنيات التقويم المتقدمة مع رعاية شخصية للمرضى ساعد آلاف الأشخاص في تحقيق ابتسامات أحلامهم.",
      education: [
        "بكالوريوس طب وجراحة الأسنان – جامعة دمشق، 1995",
        "البورد في تقويم الأسنان، 2002"
      ],
      experience: [
        "يعمل في مجال تقويم الأسنان في مكة المكرمة منذ عام 2005",
        "خبرة طويلة في تشخيص وعلاج مختلف حالات تقويم الأسنان",
        "تقديم خطط علاجية متكاملة باستخدام أحدث تقنيات التقويم الحديثة"
      ],
      philosophy:
        "أؤمن أن كل ابتسامة تروي قصة. مهمتي هي مساعدة المرضى على كتابة أفضل فصول حياتهم من خلال علاج تقويم أسنان شخصي ومريح ومتطور تقنيًا. لقد أحدث التقويم الشفاف ثورة في طريقة تعاملنا مع تحسين الابتسامات، مما جعله أكثر سهولة وراحة من أي وقت مضى.",
    },
  },
}
