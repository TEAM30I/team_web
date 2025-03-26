"use client"

import { useState, useEffect } from "react"

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
      className={`fixed top-0 left-0 right-0 z-50 bg-[#f5f5f1]/90 backdrop-blur-sm transition-all ${scrolled ? "shadow-sm" : ""}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Softmax 301</h1>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <button onClick={() => onNavigate(0)} className={`${activeSection === 0 ? "text-[#e6603d]" : ""}`}>
                소개
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate(1)}
                className={`${activeSection >= 1 && activeSection <= 4 ? "text-[#e6603d]" : ""}`}
              >
                서비스
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate(5)} className={`${activeSection === 5 ? "text-[#e6603d]" : ""}`}>
                팀원
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

