"use client"

import { useState, useEffect } from "react"
import ThemeToggle from "./theme-toggle"
import LanguageSwitcher from "./language-switcher"

interface HeaderProps {
  activeSection: number
  onNavigate: (index: number) => void
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#f5f5f1]/90 dark:bg-gray-900/90 backdrop-blur-sm transition-all ${scrolled ? "shadow-sm" : ""}`}
    >
      <div className="container mx-auto px-4">
        {/* 상단 유틸리티 바 */}
        <div className="flex justify-end items-center py-2 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>

        {/* 메인 헤더 */}
        <div className="py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold dark:text-white">Softmax 301</h1>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <button
                  onClick={() => onNavigate(0)}
                  className={`${activeSection === 0 ? "text-[#e6603d]" : "dark:text-white"}`}
                >
                  소개
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate(1)}
                  className={`${activeSection >= 1 && activeSection <= 4 ? "text-[#e6603d]" : "dark:text-white"}`}
                >
                  서비스
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate(5)}
                  className={`${activeSection === 5 ? "text-[#e6603d]" : "dark:text-white"}`}
                >
                  팀원
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

