"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-1.5 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label={theme === "light" ? "다크 모드로 전환" : "라이트 모드로 전환"}
    >
      {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  )
}

