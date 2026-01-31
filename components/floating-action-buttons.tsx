'use client'

import { useEffect, useState } from 'react'
import { useLocale } from "@/lib/locale-context"

const FloatingActionButtons = () => {
  const [isMobile, setIsMobile] = useState(false)
  const { locale } = useLocale()

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const whatsapp = '966532664001'
  const phone = '966532664001'

  return (
    <>
      {isMobile && phone && (
        <a
          href={`tel:${phone}`}
          className="fixed bottom-8 left-8 z-40 w-16 h-16 rounded-full bg-blue-600 text-white shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          aria-label={locale === 'ar' ? 'اتصال' : 'Call'}
        >
          <svg
            className="w-7 h-7"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </a>
      )}

      {whatsapp && (
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-40 w-16 h-16 rounded-full bg-green-600 text-white shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732.737 5.291 2.022 7.491l-0.038-0.07-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507zm-10.514 22.865c-2.319 0-4.489-.64-6.342-1.753l-0.451-.267-4.675 1.227 1.247-4.559-.294-.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353zm6.776-9.251c-0.371-.186-2.197-1.083-2.537-1.208-0.341-.124-.589-.185-.837.187-0.246.371-.958 1.207-1.175 1.455-0.216.249-0.434.279-0.805.094-1.15-0.466-2.138-1.087-2.997-1.852-0.799-0.74-1.484-1.587-2.037-2.521-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604 0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-.01-0.464-.012-0.712-.012-0.395 0.01-0.746 0.188-0.988 0.463-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079 0.131 1.467 0.681 2.784 1.527 3.857 1.604 2.379 3.742 4.282 6.251 5.564 0.548 0.248 1.25 0.513 1.968 0.74 0.149 0.041 0.442 0.14 0.951 0.221 0.303 0 0.601-0.027 0.889-0.078 1.069-0.223 1.956-0.868 2.497-1.749 0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542-0.092-0.155-0.34-0.247-0.712-0.434z" />
          </svg>
        </a>
      )}
    </>
  )
}

export default FloatingActionButtons
