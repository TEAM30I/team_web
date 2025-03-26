"use client"

import { useLanguage } from "@/contexts/language-context"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-1 text-xs">
      <button
        onClick={() => setLanguage("ko")}
        className={`px-1.5 py-1 rounded-md ${
          language === "ko"
            ? "font-bold text-[#e6603d]"
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
      >
        KO
      </button>
      <span className="text-gray-400">|</span>
      <button
        onClick={() => setLanguage("en")}
        className={`px-1.5 py-1 rounded-md ${
          language === "en"
            ? "font-bold text-[#e6603d]"
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
      >
        EN
      </button>
    </div>
  )
}

