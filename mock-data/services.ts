import type { Service } from "@/types"

export const servicesData: Service[] = [

  // ══════════════════════════════════════════
  // 1. التقويم الشفاف — Featured
  // ══════════════════════════════════════════
  {
    id: "1",
    slug: "clear-aligners",
    imageUrl: "/clear-dental-aligners-invisible-braces.jpg",
    featured: true,
    translated: {
      en: {
        name: "Clear Aligners (Invisible Braces)",
        description:
          "Straighten your teeth discreetly with custom clear aligners — virtually invisible, removable, and comfortable for adults and teens.",
        longDescription:
          "Clear aligners represent the pinnacle of modern orthodontics. Using advanced 3D digital imaging, we design a series of custom-fabricated transparent trays that gradually and precisely move your teeth into their ideal positions — without metal brackets or wires.\n\nEach aligner set is worn for 1–2 weeks before progressing to the next stage. You can remove them to eat, drink, brush, and floss, making them the most lifestyle-friendly orthodontic option available. Dr. Ayman Zain has treated hundreds of clear aligner cases in Mecca, from simple crowding to complex bite corrections.",
        benefits: [
          "Nearly invisible — no one will know you're in treatment",
          "Removable for eating, drinking, and oral hygiene",
          "No metal wires or brackets — far more comfortable",
          "Precise 3D treatment planning with predictable results",
          "Fewer clinic visits than traditional braces",
          "Effective for crowding, spacing, overbites, and underbites",
          "Suitable for teens and adults",
        ],
        duration: "6–18 months depending on case complexity",
      },
      ar: {
        name: "التقويم الشفاف (تقويم غير مرئي)",
        description:
          "قوّم أسنانك بشكل غير ملحوظ باستخدام تقويم شفاف مخصص — شبه غير مرئي، قابل للإزالة، ومريح للكبار والمراهقين.",
        longDescription:
          "يُمثّل التقويم الشفاف أعلى مستويات تقنيات تقويم الأسنان الحديثة. باستخدام التصوير الرقمي ثلاثي الأبعاد، نصمم سلسلة من الأطباق الشفافة المخصصة التي تحرك أسنانك تدريجياً وبدقة عالية نحو مواضعها المثالية — بدون أسلاك أو حاصرات معدنية.\n\nيُرتدى كل طبق من التقويم لمدة 1–2 أسبوع قبل الانتقال للمرحلة التالية. يمكنك إزالته عند الأكل والشرب وتنظيف الأسنان، مما يجعله الخيار الأكثر ملاءمة لنمط الحياة. علاج الدكتور أيمن زين لمئات من حالات التقويم الشفاف في مكة المكرمة، من الحالات البسيطة إلى الحالات المعقدة.",
        benefits: [
          "شبه غير مرئي — لن يلاحظ أحد أنك تخضع للعلاج",
          "قابل للإزالة عند الأكل والشرب والعناية بالأسنان",
          "بدون أسلاك أو حاصرات معدنية — أكثر راحة بكثير",
          "تخطيط علاجي ثلاثي الأبعاد بنتائج متوقعة ودقيقة",
          "زيارات أقل للعيادة مقارنةً بالتقويم التقليدي",
          "فعّال لعلاج التكدس والفراغات والعضة العميقة والعكسية",
          "مناسب للمراهقين والبالغين",
        ],
        duration: "من 6 إلى 18 شهراً حسب تعقيد الحالة",
      },
    },
  },

  // ══════════════════════════════════════════
  // 2. التقويم المعدني التقليدي
  // ══════════════════════════════════════════
  {
    id: "2",
    slug: "traditional-metal-braces",
    imageUrl: "/dental-braces-orthodontics-treatment.jpg",
    featured: true,
    translated: {
      en: {
        name: "Traditional Metal Braces",
        description:
          "Proven and reliable metal braces for comprehensive correction of complex orthodontic cases in children, teens, and adults.",
        longDescription:
          "Traditional metal braces remain the gold standard for treating complex dental and skeletal orthodontic issues. Today's brackets are smaller, more comfortable, and more efficient than ever before, using high-grade stainless steel or titanium.\n\nMetal braces work by applying continuous, gentle pressure through brackets bonded to each tooth and connected by an archwire. Dr. Ayman Zain regularly adjusts this wire to guide your teeth precisely toward their target positions. This method is highly effective for severe crowding, significant bite problems, and cases that require maximum control over tooth movement.",
        benefits: [
          "Most effective for severe crowding and complex bite corrections",
          "Lower cost compared to clear aligners",
          "No risk of losing the appliance",
          "Highly precise control over tooth movement",
          "Suitable for all ages including young children",
          "Works well even in non-compliant patients",
          "Durable and resilient throughout treatment",
        ],
        duration: "18–36 months depending on the complexity of the case",
      },
      ar: {
        name: "التقويم المعدني التقليدي",
        description:
          "تقويم معدني مجرّب وفعّال للتصحيح الشامل لحالات تقويم الأسنان المعقدة لدى الأطفال والمراهقين والبالغين.",
        longDescription:
          "لا يزال التقويم المعدني التقليدي المعيار الذهبي لعلاج مشاكل الأسنان والهيكل العظمي الفكي المعقدة. تُصنع الحاصرات اليوم أصغر حجماً وأكثر راحة وكفاءة من أي وقت مضى، باستخدام الفولاذ المقاوم للصدأ عالي الجودة أو التيتانيوم.\n\nيعمل التقويم المعدني عن طريق تطبيق ضغط خفيف ومستمر من خلال الحاصرات الملصقة على كل سن والمتصلة بسلك التقويم. يقوم الدكتور أيمن زين بضبط هذا السلك بانتظام لتوجيه أسنانك بدقة نحو مواضعها المستهدفة. هذه الطريقة بالغة الفعالية في حالات التكدس الشديد ومشاكل الإطباق الكبيرة، والحالات التي تستلزم تحكماً أقصى في حركة الأسنان.",
        benefits: [
          "الأكثر فعالية لحالات التكدس الشديد وتصحيح الإطباق المعقد",
          "تكلفة أقل مقارنةً بالتقويم الشفاف",
          "لا خطر من فقدان الجهاز",
          "تحكم دقيق للغاية في حركة الأسنان",
          "مناسب لجميع الأعمار بما في ذلك الأطفال الصغار",
          "يُحقق نتائج ممتازة حتى في حالات التزام المريض المحدود",
          "متين ومقاوم طوال فترة العلاج",
        ],
        duration: "من 18 إلى 36 شهراً حسب تعقيد الحالة",
      },
    },
  },

  // ══════════════════════════════════════════
  // 3. التقويم الخزفي (الشفاف الثابت)
  // ══════════════════════════════════════════
  {
    id: "3",
    slug: "ceramic-braces",
    imageUrl: "/clear-aligner-technology-3d-imaging.jpg",
    featured: false,
    translated: {
      en: {
        name: "Ceramic (Clear) Braces",
        description:
          "The aesthetic alternative to metal braces — tooth-colored ceramic brackets that blend seamlessly with your natural smile.",
        longDescription:
          "Ceramic braces work exactly like metal braces but use tooth-colored or clear ceramic brackets that are far less visible on your teeth. They are an excellent choice for patients who need the precision of fixed braces but are concerned about aesthetics — particularly adults and older teens.\n\nThe ceramic material is carefully matched to your natural tooth shade, making the brackets blend in rather than stand out. The archwire can also be tooth-colored for even greater discretion. Ceramic braces offer the same treatment effectiveness as metal braces while being significantly more aesthetically pleasing.",
        benefits: [
          "Much less visible than metal braces",
          "Same treatment effectiveness as metal braces",
          "Tooth-colored brackets blend with your smile",
          "Ideal for adults who value aesthetics",
          "Strong and resistant to staining with proper care",
          "Compatible with all orthodontic techniques",
          "Great for complex cases requiring fixed appliances",
        ],
        duration: "18–30 months depending on case complexity",
      },
      ar: {
        name: "التقويم الخزفي (الشفاف الثابت)",
        description:
          "البديل الجمالي للتقويم المعدني — حاصرات خزفية بلون الأسنان تنسجم بسلاسة مع ابتسامتك الطبيعية.",
        longDescription:
          "يعمل التقويم الخزفي بالضبط مثل التقويم المعدني، لكنه يستخدم حاصرات خزفية بلون الأسنان أو شفافة أقل ظهوراً بكثير على أسنانك. إنه خيار ممتاز للمرضى الذين يحتاجون إلى دقة التقويم الثابت لكنهم يهتمون بالمظهر الجمالي — خاصة البالغين والمراهقين الأكبر سناً.\n\nتُطابق مادة الخزف ظل أسنانك الطبيعي بعناية، مما يجعل الحاصرات تنسجم مع أسنانك بدلاً من أن تبرز عليها. يمكن أن يكون سلك التقويم أيضاً بلون الأسنان لمزيد من التمويه. يوفر التقويم الخزفي نفس فعالية العلاج كالتقويم المعدني مع كونه أكثر جاذبية جمالياً.",
        benefits: [
          "أقل ظهوراً بكثير من التقويم المعدني",
          "نفس فعالية العلاج كالتقويم المعدني",
          "حاصرات بلون الأسنان تنسجم مع ابتسامتك",
          "مثالي للبالغين الذين يُولون الجماليات أهمية",
          "قوي ومقاوم للتصبغ مع العناية الجيدة",
          "متوافق مع جميع التقنيات التقويمية",
          "مناسب للحالات المعقدة التي تستلزم أجهزة ثابتة",
        ],
        duration: "من 18 إلى 30 شهراً حسب تعقيد الحالة",
      },
    },
  },

  // ══════════════════════════════════════════
  // 4. تقويم الأطفال والمراهقين
  // ══════════════════════════════════════════
  {
    id: "4",
    slug: "children-orthodontics",
    imageUrl: "/happy-female-patient-smiling.jpg",
    featured: true,
    translated: {
      en: {
        name: "Children & Teen Orthodontics",
        description:
          "Early orthodontic assessment and treatment for children and teens — guiding jaw growth and preventing complex problems before they develop.",
        longDescription:
          "Orthodontic treatment for children and teenagers is most effective when started at the right developmental stage. The American Association of Orthodontists recommends a first evaluation by age 7, when Dr. Ayman Zain can identify potential issues with jaw growth, bite development, and tooth eruption patterns.\n\nEarly intervention — known as Phase 1 treatment — can guide jaw growth, create space for permanent teeth, and reduce the need for more complex treatment later. For teens, we offer a range of options including metal braces, ceramic braces, and teen-specific clear aligners designed to accommodate still-erupting teeth. Treatment during teenage years is highly effective as the jaw is still growing and more responsive to orthodontic forces.",
        benefits: [
          "Early detection prevents more complex issues later",
          "Guides jaw and facial development at the ideal age",
          "Creates space for permanent teeth naturally",
          "Options include metal, ceramic, and teen clear aligners",
          "Reduces overall treatment time when started early",
          "Builds confidence and self-esteem during formative years",
          "Tailored to the child's stage of dental development",
        ],
        duration: "Phase 1: 12–18 months | Phase 2 (teens): 18–24 months",
      },
      ar: {
        name: "تقويم الأطفال والمراهقين",
        description:
          "تقييم وعلاج تقويمي مبكر للأطفال والمراهقين — لتوجيه نمو الفك ومنع المشاكل المعقدة قبل أن تتطور.",
        longDescription:
          "يكون علاج تقويم الأسنان للأطفال والمراهقين أكثر فعالية عند بدئه في المرحلة التطورية الصحيحة. تُوصي جمعية تقويم الأسنان الأمريكية بأول تقييم في سن السابعة، حيث يستطيع الدكتور أيمن زين تحديد المشاكل المحتملة في نمو الفك وتطور الإطباق وأنماط بزوغ الأسنان.\n\nالتدخل المبكر — المعروف بعلاج المرحلة الأولى — يُوجّه نمو الفك، ويُوفر مساحة لأسنان دائمة، ويُقلل الحاجة لعلاج أكثر تعقيداً لاحقاً. للمراهقين، نوفر مجموعة خيارات تشمل التقويم المعدني والخزفي والتقويم الشفاف المخصص للمراهقين والمصمم لاستيعاب الأسنان التي لا تزال في طور البزوغ.",
        benefits: [
          "الكشف المبكر يمنع المشاكل الأكثر تعقيداً مستقبلاً",
          "يُوجّه نمو الفك والوجه في السن المثالية",
          "يُوفر مساحة طبيعية لأسنان دائمة",
          "خيارات متنوعة: معدني، خزفي، وتقويم شفاف للمراهقين",
          "يُقلل إجمالي وقت العلاج عند البدء مبكراً",
          "يُعزز الثقة بالنفس خلال سنوات التكوين المهمة",
          "مُصمم وفق مرحلة النمو السنية للطفل",
        ],
        duration: "المرحلة الأولى: 12–18 شهراً | المرحلة الثانية (المراهقون): 18–24 شهراً",
      },
    },
  },

  // ══════════════════════════════════════════
  // 5. تصحيح الإطباق والفك
  // ══════════════════════════════════════════
  {
    id: "5",
    slug: "bite-correction",
    imageUrl: "/dentist-consultation-modern-clinic.jpg",
    featured: false,
    translated: {
      en: {
        name: "Bite Correction (Malocclusion Treatment)",
        description:
          "Specialized treatment for overbites, underbites, crossbites, and open bites — restoring proper jaw alignment and function.",
        longDescription:
          "Malocclusion — or an incorrect bite — is one of the most common reasons patients seek orthodontic care. Left untreated, a bad bite can cause uneven tooth wear, jaw pain, difficulty chewing, speech problems, and long-term joint issues (TMJ disorders).\n\nDr. Ayman Zain specializes in diagnosing and treating all types of malocclusion, including overbites (upper teeth too far forward), underbites (lower jaw protrudes), crossbites (teeth don't align side-to-side), and open bites (front teeth don't meet). Treatment may involve braces, clear aligners, functional appliances, or in severe skeletal cases, a combination with surgical consultation. Each plan is completely individualized.",
        benefits: [
          "Corrects overbites, underbites, crossbites, and open bites",
          "Eliminates jaw pain and TMJ-related discomfort",
          "Prevents uneven tooth wear and premature damage",
          "Improves chewing function and speech clarity",
          "Tailored treatment combining multiple approaches",
          "Long-term results with proper retention",
          "Addresses both dental and skeletal causes",
        ],
        duration: "12–36 months depending on type and severity of the bite problem",
      },
      ar: {
        name: "تصحيح الإطباق واضطرابات الفك",
        description:
          "علاج متخصص للعضة العميقة والعكسية والمتقاطعة والمفتوحة — لاستعادة المحاذاة الصحيحة للفك ووظيفته.",
        longDescription:
          "سوء الإطباق — أو الإطباق غير الصحيح — من أكثر الأسباب شيوعاً التي تدفع المرضى لطلب رعاية تقويم الأسنان. إذا تُرك دون علاج، يمكن أن يتسبب في تآكل غير متساوٍ للأسنان وألم في الفك وصعوبة في المضغ ومشاكل في النطق واضطرابات المفصل الصدغي الفكي على المدى البعيد.\n\nيتخصص الدكتور أيمن زين في تشخيص وعلاج جميع أنواع سوء الإطباق، بما في ذلك العضة العميقة والعضة العكسية والعضة المتقاطعة والعضة المفتوحة. قد يشمل العلاج التقويم التقليدي أو الشفاف أو الأجهزة الوظيفية أو في الحالات الهيكلية الشديدة التنسيق مع استشارة جراحية. كل خطة علاج مخصصة بالكامل لحالة المريض.",
        benefits: [
          "يصحح العضة العميقة والعكسية والمتقاطعة والمفتوحة",
          "يُزيل ألم الفك والانزعاج المرتبط بمفصل الفك الصدغي",
          "يمنع التآكل غير المتساوي للأسنان والتلف المبكر",
          "يحسن وظيفة المضغ ووضوح النطق",
          "خطة علاج مخصصة تجمع بين أساليب متعددة",
          "نتائج طويلة الأمد مع تثبيت الأسنان المناسب",
          "يعالج الأسباب السنية والهيكلية معاً",
        ],
        duration: "من 12 إلى 36 شهراً حسب نوع مشكلة الإطباق وشدتها",
      },
    },
  },

  // ══════════════════════════════════════════
  // 6. مُثبّتات ما بعد التقويم (Retainers)
  // ══════════════════════════════════════════
  {
    id: "6",
    slug: "retainers-post-treatment",
    imageUrl: "/perfect-smile-after-dental.png",
    featured: false,
    translated: {
      en: {
        name: "Retainers & Post-Treatment Care",
        description:
          "Protect your orthodontic results for life with custom retainers and professional post-treatment maintenance care.",
        longDescription:
          "Completing orthodontic treatment is a milestone — but it's only the beginning of keeping your smile perfect. After braces or aligners are removed, teeth naturally have a tendency to shift back toward their original positions. Retainers are the essential final step that preserves everything you've worked for.\n\nDr. Ayman Zain provides personalized retainer solutions including removable clear retainers (Essix), removable Hawley retainers, and permanent bonded wire retainers fixed behind the front teeth for lifelong protection. We also provide a comprehensive post-treatment care program including polishing, fluoride treatment, and scheduled check-ups to ensure your results remain stable for years to come.",
        benefits: [
          "Prevents teeth from shifting after treatment",
          "Choice of removable or permanent retainer options",
          "Custom-fitted for maximum comfort and effectiveness",
          "Protects your smile investment long-term",
          "Includes professional cleaning and polishing",
          "Regular monitoring to catch any minor shifts early",
          "Clear retainers are invisible when worn",
        ],
        duration: "Lifelong wear (removable retainers nightly, bonded retainers permanent)",
      },
      ar: {
        name: "مثبّتات الأسنان والعناية بعد التقويم",
        description:
          "احمِ نتائج تقويمك مدى الحياة بمثبّتات مخصصة وبرنامج متكامل للعناية بعد انتهاء العلاج التقويمي.",
        longDescription:
          "الانتهاء من علاج تقويم الأسنان إنجاز رائع — لكنه مجرد بداية للحفاظ على ابتسامتك مثالية. بعد إزالة التقويم أو الأطباق الشفافة، تميل الأسنان بشكل طبيعي للعودة نحو مواضعها الأصلية. المثبّتات هي الخطوة الأخيرة الأساسية التي تحافظ على كل ما أنجزته.\n\nيوفر الدكتور أيمن زين حلول مثبّتات مخصصة تشمل المثبّتات الشفافة القابلة للإزالة (Essix)، ومثبّتات هاولي القابلة للإزالة، والمثبّتات السلكية الدائمة الملصقة خلف الأسنان الأمامية للحماية مدى الحياة. كما نوفر برنامجاً متكاملاً للعناية بعد العلاج يشمل التلميع وعلاج الفلورايد والمتابعة الدورية.",
        benefits: [
          "يمنع تحرك الأسنان بعد انتهاء العلاج",
          "خيار بين مثبّتات قابلة للإزالة أو دائمة",
          "مُصمم خصيصاً لأقصى راحة وفعالية",
          "يحمي استثمارك في ابتسامتك على المدى البعيد",
          "يشمل تنظيفاً وتلميعاً احترافياً",
          "متابعة منتظمة للكشف المبكر عن أي تحركات طفيفة",
          "المثبّتات الشفافة غير مرئية تماماً عند الارتداء",
        ],
        duration: "ارتداء مدى الحياة (مثبّتات قابلة للإزالة ليلاً، مثبّتات ملصقة دائمة)",
      },
    },
  },

  // ══════════════════════════════════════════
  // 7. الاستشارة التقويمية الشاملة
  // ══════════════════════════════════════════
  {
    id: "7",
    slug: "orthodontic-consultation",
    imageUrl: "/dentist-consultation-modern-clinic.jpg",
    featured: false,
    translated: {
      en: {
        name: "Orthodontic Consultation & 3D Scanning",
        description:
          "Your smile journey starts here — a thorough examination, digital X-rays, 3D intraoral scanning, and a fully personalized treatment plan.",
        longDescription:
          "The first step to a perfect smile is an accurate, comprehensive evaluation. During your initial consultation with Dr. Ayman Zain, we conduct a complete clinical examination of your teeth, gums, and jaw. We use state-of-the-art digital X-rays to assess bone levels and root positions, and a 3D intraoral scanner to capture precise digital impressions — no more uncomfortable impression trays.\n\nUsing these records, Dr. Ayman Zain creates a detailed, fully personalized treatment plan with clear timelines, options, and transparent costs. We'll walk you through each treatment option, explain what to expect, and answer all your questions. There is no obligation — our goal is to help you make the most informed decision about your smile.",
        benefits: [
          "Complete clinical and radiographic examination",
          "Digital X-rays for root and bone assessment",
          "3D intraoral scan — no messy impression trays",
          "Personalized treatment plan with clear timeline",
          "Full explanation of all available options",
          "Transparent, itemized cost breakdown",
          "No-obligation — take time to decide",
        ],
        duration: "60–90 minutes",
      },
      ar: {
        name: "الاستشارة التقويمية والمسح الثلاثي الأبعاد",
        description:
          "رحلة ابتسامتك تبدأ هنا — فحص شامل وأشعة رقمية ومسح داخل الفم ثلاثي الأبعاد وخطة علاج مخصصة بالكامل لك.",
        longDescription:
          "الخطوة الأولى نحو ابتسامة مثالية هي تقييم دقيق وشامل. خلال استشارتك الأولى مع الدكتور أيمن زين، نُجري فحصاً سريرياً كاملاً لأسنانك ولثتك وفكك. نستخدم أشعة رقمية متطورة لتقييم مستويات العظام ومواضع الجذور، وجهاز مسح داخل الفم ثلاثي الأبعاد للحصول على بصمات رقمية دقيقة — دون الحاجة لأطباق البصمة غير المريحة.\n\nباستخدام هذه السجلات، يضع الدكتور أيمن زين خطة علاج مفصلة ومخصصة بالكامل مع جداول زمنية واضحة وخيارات وتكاليف شفافة. سنشرح لك كل خيار علاجي ونوضح ما يمكن توقعه ونجيب على جميع أسئلتك. لا يوجد أي التزام — هدفنا مساعدتك على اتخاذ القرار الأنسب لابتسامتك.",
        benefits: [
          "فحص سريري وإشعاعي شامل",
          "أشعة رقمية لتقييم الجذور والعظام",
          "مسح ثلاثي الأبعاد داخل الفم — دون أطباق بصمة",
          "خطة علاج مخصصة بجدول زمني واضح",
          "شرح كامل لجميع الخيارات المتاحة",
          "تفاصيل التكلفة بشكل شفاف وواضح",
          "لا التزام — خذ وقتك للتفكير والقرار",
        ],
        duration: "من 60 إلى 90 دقيقة",
      },
    },
  },
]
