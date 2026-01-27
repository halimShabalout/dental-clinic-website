import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Page() {
  const cookieStore = await cookies()
  
  const lang = cookieStore.get('NEXT_LOCALE')?.value || 'ar'

  redirect(`/${lang}`)
}
