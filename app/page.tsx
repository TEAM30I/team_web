"use client"

import { useEffect, useRef, useState } from "react"
import Header from "@/components/header"
import SectionIndicator from "@/components/section-indicator"
import IntroSection from "@/components/intro-section"
import OverviewSection from "@/components/overview-section"
import ServiceHeaderSection from "@/components/service-header-section"
import ServiceItem from "@/components/service-item"
import TeamSection from "@/components/team-section"
import Footer from "@/components/footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState(0)
  const sectionRefs = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sectionRefs.forEach((ref, index) => {
        if (!ref.current) return

        const offsetTop = ref.current.offsetTop
        const height = ref.current.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          setActiveSection(index)
        }
      })

      // Animate elements when they come into view
      document.querySelectorAll(".scroll-animation").forEach((element) => {
        const position = element.getBoundingClientRect()

        if (position.top < window.innerHeight) {
          element.classList.add("visible")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (index: number) => {
    sectionRefs[index].current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="relative dark:bg-gray-900">
      <Header activeSection={activeSection} onNavigate={scrollToSection} />

      <SectionIndicator activeSection={activeSection} sectionCount={sectionRefs.length} onNavigate={scrollToSection} />

      <IntroSection ref={sectionRefs[0]} onScrollDown={() => scrollToSection(1)} />

      <OverviewSection ref={sectionRefs[1]} />

      <ServiceHeaderSection ref={sectionRefs[2]} />

      <ServiceItem
        ref={sectionRefs[3]}
        imageUrl="/placeholder.svg?height=400&width=400"
        imageAlt="메가폰 일러스트"
        stepNumber={1}
        title="사찰의 이야기를 담는 웹사이트 제작"
        description="맞춤형 웹사이트로 사찰의 정체성과 가치를 아름답게 표현합니다."
      />

      <ServiceItem
        ref={sectionRefs[4]}
        imageUrl="/placeholder.svg?height=400&width=400"
        imageAlt="전구 일러스트"
        stepNumber={2}
        title="운영 부담을 줄여주는 SaaS 구독 서비스"
        description="운영 부담 없이, 사찰은 본연의 일에 집중하도록 지원합니다."
        isReversed
      />

      <ServiceItem
        imageUrl="/placeholder.svg?height=400&width=400"
        imageAlt="문서 일러스트"
        stepNumber={3}
        title="불교 실천을 돕는 통합 플랫폼"
        description="기도, 보시, 명상 등 불교 실천을 한 곳에 담아 신도와의 소통과 수행을 돕습니다."
        isLastItem
      />

      <TeamSection ref={sectionRefs[5]} />

      <Footer />
    </main>
  )
}

