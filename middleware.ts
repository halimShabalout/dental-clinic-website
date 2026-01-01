import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const langCookie = request.cookies.get("language")?.value

  const lang =
    langCookie === "en" || langCookie === "ar"
      ? langCookie
      : "ar"

  const response = NextResponse.next()
  response.headers.set("x-language", lang)

  return response
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"],
}
