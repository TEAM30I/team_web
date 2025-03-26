"use client"

import { forwardRef } from "react"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface IntroSectionProps {
  onScrollDown: () => void
}

const IntroSection = forwardRef<HTMLElement, IntroSectionProps>(({ onScrollDown }, ref) => {
  const { language } = useLanguage()

  const content = {
    ko: {
      title: "신도와 스님을 위한\n디지털 서비스",
      subtitle: "더 편리한 운영, 더 가까운 소통.\n불교의 실천과 연결을 하나의 플랫폼에서 이야기합니다.",
      button: "서비스 살펴보기",
    },
    en: {
      title: "Digital Temple Management Service\nfor Trust and Monks",
      subtitle:
        "More convenient operation, closer communication.\nWe talk about Buddhist practice and connection on one platform.",
      button: "Explore Services",
    },
  }

  return (
    <section ref={ref} className="min-h-[80vh] flex flex-col justify-center items-center pt-16 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 scroll-animation dark:text-white">
          {content[language].title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < content[language].title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h2>
        <p className="text-lg text-[#3c3c3c] dark:text-gray-300 mb-12 scroll-animation">
          {content[language].subtitle.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < content[language].subtitle.split("\n").length - 1 && <br />}
            </span>
          ))}
        </p>
        <button className="bg-[#e6603d] text-white px-8 py-3 rounded-full font-medium scroll-animation">
          {content[language].button}
        </button>
        <div className="mt-16 scroll-down" onClick={onScrollDown}>
          <ChevronDown size={32} className="mx-auto text-[#3c3c3c] dark:text-gray-300 cursor-pointer" />
        </div>
      </div>
    </section>
  )
})

IntroSection.displayName = "IntroSection"
export default IntroSection

