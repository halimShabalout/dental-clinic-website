export const languages = ["ar", "en"] as const
export type Locale = (typeof languages)[number]

export const defaultLocale: Locale = "ar"
export const rtlLocales: Locale[] = ["ar"]
