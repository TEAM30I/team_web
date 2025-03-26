import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Noto_Sans_KR } from "next/font/google"
import "./globals.css"

// Initialize the Noto Sans KR font with the weights we need
const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-kr",
})

export const metadata: Metadata = {
  title: "Softmax 301 - 디지털 사찰 관리 서비스",
  description: "신뢰와 스님을 위한 디지털 사찰 관리 서비스",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={notoSansKr.className}>
      <body>{children}</body>
    </html>
  )
}



import './globals.css'