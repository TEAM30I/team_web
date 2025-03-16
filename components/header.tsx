"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">TEAM 301</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
            소개
          </Link>
          <Link href="#team" className="text-sm font-medium hover:underline underline-offset-4">
            팀원
          </Link>
          <Link href="#stats" className="text-sm font-medium hover:underline underline-offset-4">
            통계
          </Link>
          <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
            서비스
          </Link>
          <Link href="#portfolio" className="text-sm font-medium hover:underline underline-offset-4">
            포트폴리오
          </Link>
          <Link href="#roadmap" className="text-sm font-medium hover:underline underline-offset-4">
            로드맵
          </Link>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-4 p-4 border-t">
            <Link href="#about" className="text-sm font-medium" onClick={toggleMenu}>
              소개
            </Link>
            <Link href="#team" className="text-sm font-medium" onClick={toggleMenu}>
              팀원
            </Link>
            <Link href="#stats" className="text-sm font-medium" onClick={toggleMenu}>
              통계
            </Link>
            <Link href="#services" className="text-sm font-medium" onClick={toggleMenu}>
              서비스
            </Link>
            <Link href="#portfolio" className="text-sm font-medium" onClick={toggleMenu}>
              포트폴리오
            </Link>
            <Link href="#roadmap" className="text-sm font-medium" onClick={toggleMenu}>
              로드맵
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

