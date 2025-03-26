import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Noto_Sans_KR } from "next/font/google"
import { ThemeProvider } from "@/contexts/theme-context"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"

// Initialize the Noto Sans KR font with the weights we need
const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-kr",
})

export const metadata: Metadata = {
  title: "Softmax 301",
  description: "신도와 스님을 위한 디지털 서비스",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={notoSansKr.className}>
      <body>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

