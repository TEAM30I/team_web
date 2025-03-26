"use client"

import { forwardRef } from "react"
import { ChevronDown } from "lucide-react"

interface IntroSectionProps {
  onScrollDown: () => void
}

const IntroSection = forwardRef<HTMLElement, IntroSectionProps>(({ onScrollDown }, ref) => {
  return (
    <section ref={ref} className="min-h-[80vh] flex flex-col justify-center items-center pt-16">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 scroll-animation">
          신뢰와 스님을 위한
          <br />
          디지털 사찰 관리 서비스
        </h2>
        <p className="text-lg text-[#3c3c3c] mb-12 scroll-animation">
          더 편리한 운영, 더 가까운 소통.
          <br />
          불교의 실천과 연결을 하나의 플랫폼에서 이야기합니다.
        </p>
        <button className="bg-[#e6603d] text-white px-8 py-3 rounded-full font-medium scroll-animation">
          서비스 살펴보기
        </button>
        <div className="mt-16 scroll-down" onClick={onScrollDown}>
          <ChevronDown size={32} className="mx-auto text-[#3c3c3c] cursor-pointer" />
        </div>
      </div>
    </section>
  )
})

IntroSection.displayName = "IntroSection"
export default IntroSection

