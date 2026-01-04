import { redirect } from "next/navigation";

export default function Page() {
  const lang =
    (typeof document !== "undefined"
      ? document.cookie
          .split("; ")
          .find((c) => c.startsWith("NEXT_LOCALE="))
          ?.split("=")[1]
      : null) || "en";

  redirect(`/${lang}`);
}
