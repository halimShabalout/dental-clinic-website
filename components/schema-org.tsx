const BASE_URL = "https://makkahorthodontist.com";

interface SchemaOrgProps {
  lang: "ar" | "en";
  page?: "home" | "about" | "service" | "blog";
  extra?: Record<string, unknown>;
}

export function SchemaOrg({ lang, page = "home", extra }: SchemaOrgProps) {
  const isAr = lang === "ar";

  // ──────────────────────────────────────────
  // 1. MedicalBusiness 
  // ──────────────────────────────────────────
  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${BASE_URL}/#clinic`,
    name: isAr ? "عيادة د. أيمن زين لتقويم الأسنان" : "Dr. Ayman Zain Orthodontics",
    alternateName: isAr ? "Dr. Ayman Zain Orthodontics" : "عيادة د. أيمن زين",
    url: `${BASE_URL}/${lang}`,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/icon.svg`,
      width: 200,
      height: 200,
    },
    image: `${BASE_URL}/dr-ayman.png`,
    description: isAr
      ? "عيادة متخصصة في تقويم الأسنان في مكة المكرمة بقيادة د. أيمن زين. نقدم تقويم شفاف، تقويم أسلاك، واستشارات متكاملة بخبرة تزيد عن 23 عاماً."
      : "Specialized orthodontic clinic in Mecca led by Dr. Ayman Zain. We offer clear aligners, traditional braces, and comprehensive consultations with 23+ years of experience.",
    medicalSpecialty: "Orthodontics",
    priceRange: "$$",
    // العنوان — مكة المكرمة
    address: {
      "@type": "PostalAddress",
      addressLocality: isAr ? "مكة المكرمة" : "Mecca",
      addressRegion: isAr ? "منطقة مكة" : "Makkah Region",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.3891,
      longitude: 39.8579,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"],
        opens: "09:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Thursday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    availableLanguage: [
      { "@type": "Language", name: "Arabic" },
      { "@type": "Language", name: "English" },
    ],
    employee: { "@id": `${BASE_URL}/#doctor` },
    founder: { "@id": `${BASE_URL}/#doctor` },
    sameAs: [
      // "https://www.instagram.com/dr_ayman_zain",
      // "https://twitter.com/dr_ayman_zain",
    ],
  };

  // ──────────────────────────────────────────
  // 2. Physician 
  // ──────────────────────────────────────────
  const doctorSchema = {
    "@context": "https://schema.org",
    "@type": ["Physician", "Person"],
    "@id": `${BASE_URL}/#doctor`,
    name: isAr ? "د. أيمن زين" : "Dr. Ayman Zain",
    givenName: isAr ? "أيمن" : "Ayman",
    familyName: isAr ? "زين" : "Zain",
    jobTitle: isAr
      ? "أخصائي تقويم الأسنان"
      : "Orthodontist & Clear Aligner Specialist",
    description: isAr
      ? "أكثر من 23 عاماً من الخبرة في تقويم الأسنان. متخصص في التقويم الشفاف والأسلاك وتصحيح الإطباق."
      : "Over 23 years of experience in orthodontics. Specialist in clear aligners, braces, and bite correction.",
    image: `${BASE_URL}/dr-ayman.png`,
    url: `${BASE_URL}/${lang}/about`,
    worksFor: { "@id": `${BASE_URL}/#clinic` },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: isAr ? "جامعة دمشق" : "Damascus University",
        url: "https://www.damascusuniversity.edu.sy",
      },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: isAr
          ? "بكالوريوس طب وجراحة الأسنان"
          : "Bachelor of Dental Surgery (BDS)",
        dateCreated: "1995",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: isAr
          ? "البورد في تقويم الأسنان"
          : "Board Certification in Orthodontics",
        dateCreated: "2002",
      },
    ],
    knowsAbout: isAr
      ? ["تقويم الأسنان", "التقويم الشفاف", "الأسلاك التقويمية", "تصحيح الإطباق"]
      : ["Orthodontics", "Clear Aligners", "Traditional Braces", "Bite Correction"],
    knowsLanguage: [
      { "@type": "Language", name: "Arabic" },
      { "@type": "Language", name: "English" },
    ],
  };

  // ──────────────────────────────────────────
  // 3. WebSite — لـ Sitelinks search box
  // ──────────────────────────────────────────
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: isAr ? "عيادة د. أيمن زين لتقويم الأسنان" : "Dr. Ayman Zain Orthodontics",
    inLanguage: isAr ? "ar-SA" : "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/${lang}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // ──────────────────────────────────────────
  // 4. BreadcrumbList
  // ──────────────────────────────────────────
  const breadcrumbSchema =
    page === "home"
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: isAr ? "الرئيسية" : "Home",
              item: `${BASE_URL}/${lang}`,
            },
          ],
        }
      : null;

  const schemas = [clinicSchema, doctorSchema, websiteSchema];
  if (breadcrumbSchema) schemas.push(breadcrumbSchema as unknown as typeof clinicSchema);

  if (extra) schemas.push(extra as typeof clinicSchema);

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

// ──────────────────────────────────────────────────────────
// Helper: BlogPosting Schema
// ──────────────────────────────────────────────────────────
export function BlogPostingSchema({
  lang,
  title,
  excerpt,
  slug,
  imageUrl,
  publishedAt,
  updatedAt,
}: {
  lang: "ar" | "en";
  title: string;
  excerpt: string;
  slug: string;
  imageUrl: string;
  publishedAt: string;
  updatedAt: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: excerpt,
    image: `${BASE_URL}${imageUrl}`,
    url: `${BASE_URL}/${lang}/blog/${slug}`,
    datePublished: publishedAt,
    dateModified: updatedAt,
    inLanguage: lang === "ar" ? "ar-SA" : "en-US",
    author: {
      "@id": `${BASE_URL}/#doctor`,
      "@type": "Physician",
      name: lang === "ar" ? "د. أيمن زين" : "Dr. Ayman Zain",
    },
    publisher: {
      "@id": `${BASE_URL}/#clinic`,
      "@type": "MedicalBusiness",
      name: "Dr. Ayman Zain Orthodontics",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/icon.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/${lang}/blog/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ──────────────────────────────────────────────────────────
// Helper: Service Schema
// ──────────────────────────────────────────────────────────
export function ServiceSchema({
  lang,
  name,
  description,
  slug,
  imageUrl,
}: {
  lang: "ar" | "en";
  name: string;
  description: string;
  slug: string;
  imageUrl: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    image: `${BASE_URL}${imageUrl}`,
    url: `${BASE_URL}/${lang}/services/${slug}`,
    procedureType: "https://schema.org/TherapeuticProcedure",
    status: "https://schema.org/ActiveActionStatus",
    followup: lang === "ar"
      ? "متابعة دورية مع الطبيب"
      : "Regular follow-up with the doctor",
    provider: {
      "@id": `${BASE_URL}/#clinic`,
      "@type": "MedicalBusiness",
      name: "Dr. Ayman Zain Orthodontics",
    },
    recognizingAuthority: {
      "@type": "MedicalOrganization",
      name: lang === "ar" ? "الهيئة السعودية للتخصصات الصحية" : "Saudi Commission for Health Specialties",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
