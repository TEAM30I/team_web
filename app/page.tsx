"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

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
    <main className="relative">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f5f1]/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Softmax 301</h1>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <button onClick={() => scrollToSection(0)} className={`${activeSection === 0 ? "text-[#e6603d]" : ""}`}>
                  소개
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(1)}
                  className={`${activeSection >= 1 && activeSection <= 3 ? "text-[#e6603d]" : ""}`}
                >
                  서비스
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection(5)} className={`${activeSection === 5 ? "text-[#e6603d]" : ""}`}>
                  팀원
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <ul className="section-indicator">
        {sectionRefs.map((_, index) => (
          <li key={index} className={activeSection === index ? "active" : ""} onClick={() => scrollToSection(index)} />
        ))}
      </ul>

      <section ref={sectionRefs[0]} className="min-h-[80vh] flex flex-col justify-center items-center pt-16">
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
          <div className="mt-16 scroll-down">
            <ChevronDown size={32} className="mx-auto text-[#3c3c3c]" />
          </div>
        </div>
      </section>

      <section ref={sectionRefs[1]} className="min-h-[80vh] flex flex-col justify-center items-center py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-[#e6603d] mb-2 scroll-animation">소개</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 max-w-3xl mx-auto scroll-animation">
            사찰과 불교의 가치를 이어주는
            <br />
            디지털 서비스를 함께 만나보세요.
          </h2>
          <p className="text-lg text-[#3c3c3c] mb-16 max-w-2xl mx-auto scroll-animation">
            Softmax301은 전통과 기술이 조화롭게 어우러진
            <br />
            불교 맞춤형 웹페이지와 통합 플랫폼을 통해
            <br />
            스님과 신도가 더욱 깊이 소통할 수 있는 환경을 만들어갑니다.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-12">
            <div className="flex-1 max-w-xs scroll-animation">
              <div className="bg-white p-6 rounded-xl shadow-sm mb-4 aspect-square flex items-center justify-center">
                <Image src="/placeholder.svg?height=120&width=120" alt="웹사이트 아이콘" width={120} height={120} />
              </div>
              <h3 className="text-xl font-bold mb-2">사찰의 정체성을 담은 맞춤 웹사이트</h3>
              <p className="text-[#3c3c3c] text-sm">
                템플릿이 아닌 사찰만의 이야기를 담은 디자인으로
                <br />
                신뢰감 있는 온라인 공간을 만드실 수 있어요.
              </p>
            </div>
            <div className="flex-1 max-w-xs scroll-animation" style={{ transitionDelay: "0.2s" }}>
              <div className="bg-white p-6 rounded-xl shadow-sm mb-4 aspect-square flex items-center justify-center">
                <Image src="/placeholder.svg?height=120&width=120" alt="SaaS 아이콘" width={120} height={120} />
              </div>
              <h3 className="text-xl font-bold mb-2">운영 부담 줄어주는 SaaS 시스템</h3>
              <p className="text-[#3c3c3c] text-sm">
                콘텐츠 등록, 일정 관리, 공지 알림 등 번복적인 운영을
                <br />
                별도 인력 없이 쉽게 관리할 수 있도록 도와드립니다.
              </p>
            </div>
            <div className="flex-1 max-w-xs scroll-animation" style={{ transitionDelay: "0.4s" }}>
              <div className="bg-white p-6 rounded-xl shadow-sm mb-4 aspect-square flex items-center justify-center">
                <Image src="/placeholder.svg?height=120&width=120" alt="통합 플랫폼 아이콘" width={120} height={120} />
              </div>
              <h3 className="text-xl font-bold mb-2">신도와 함께하는 불교 통합 플랫폼</h3>
              <p className="text-[#3c3c3c] text-sm">
                기도, 보시, 명상 등 신앙 실천을 한 곳에 담아
                <br />
                신도와 사찰이 자연스럽게 연결되는 공간을 만들어보세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={sectionRefs[2]} className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-[#e6603d] text-center mb-2 scroll-animation">서비스</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center scroll-animation">
            사찰과 신도가 더 가까워지는 세상,
            <br />
            Softmax301이 만들어갑니다
          </h2>
        </div>
      </section>

      <section ref={sectionRefs[3]} className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 scroll-animation">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="메가폰 일러스트"
                width={400}
                height={400}
                className="mx-auto"
              />
            </div>
            <div className="md:w-1/2 scroll-animation">
              <div className="flex mb-4">
                <span className="bg-[#e6603d] text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                  1
                </span>
                <span className="bg-white text-[#3c3c3c] rounded-full w-8 h-8 flex items-center justify-center mr-2">
                  2
                </span>
                <span className="bg-white text-[#3c3c3c] rounded-full w-8 h-8 flex items-center justify-center">3</span>
              </div>
              <div className="text-sm text-[#e6603d] mb-2">사찰의 이야기를 담는 웹사이트 제작</div>
              <h3 className="text-2xl font-bold mb-4">
                맞춤형 웹사이트로
                <br />
                사찰의 정체성과 가치를
                <br />
                아름답게 표현합니다.
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section ref={sectionRefs[4]} className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2 scroll-animation">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="전구 일러스트"
                width={400}
                height={400}
                className="mx-auto"
              />
            </div>
            <div className="md:w-1/2 scroll-animation">
              <div className="flex mb-4">
                <span className="bg-white text-[#3c3c3c] rounded-full w-8 h-8 flex items-center justify-center mr-2">
                  1
                </span>
                <span className="bg-[#e6603d] text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                  2
                </span>
                <span className="bg-white text-[#3c3c3c] rounded-full w-8 h-8 flex items-center justify-center">3</span>
              </div>
              <div className="text-sm text-[#e6603d] mb-2">운영 부담을 줄여주는 SaaS 구독 서비스</div>
              <h3 className="text-2xl font-bold mb-4">
                운영 부담 없이,
                <br />
                사찰은 본연의 일에 집중하도록 지원합니다.
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 scroll-animation">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="문서 일러스트"
                width={400}
                height={400}
                className="mx-auto"
              />
            </div>
            <div className="md:w-1/2 scroll-animation">
              <div className="flex mb-4">
                <span className="bg-white text-[#3c3c3c] rounded-full w-8 h-8 flex items-center justify-center mr-2">
                  1
                </span>
                <span className="bg-white text-[#3c3c3c] rounded-full w-8 h-8 flex items-center justify-center mr-2">
                  2
                </span>
                <span className="bg-[#e6603d] text-white rounded-full w-8 h-8 flex items-center justify-center">3</span>
              </div>
              <div className="text-sm text-[#e6603d] mb-2">불교 실천을 돕는 통합 플랫폼</div>
              <h3 className="text-2xl font-bold mb-4">
                기도, 보시, 명상 등 불교 실천을
                <br />한 곳에 담아 신도와의 소통과 수행을 돕습니다.
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section ref={sectionRefs[5]} className="min-h-[80vh] flex flex-col justify-center items-center py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-[#e6603d] mb-2 scroll-animation">팀원</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 scroll-animation">Softmax 301 팀원을 소개합니다.</h2>
          <p className="text-lg text-[#3c3c3c] mb-16 max-w-2xl mx-auto scroll-animation">
            기술과 디자인, 그리고 불교에 대한 이해를 바탕으로
            <br />
            사찰과 신도를 위한 디지털 공간을 함께 만들어가고 있습니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="scroll-animation">
              <div className="w-48 h-48 bg-[#d9d9d9] rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold">[대표] 김시훈 / 프론트, AI</h3>
            </div>
            <div className="scroll-animation" style={{ transitionDelay: "0.1s" }}>
              <div className="w-48 h-48 bg-[#d9d9d9] rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold">김수빈 / 프론트, AI</h3>
            </div>
            <div className="scroll-animation" style={{ transitionDelay: "0.2s" }}>
              <div className="w-48 h-48 bg-[#d9d9d9] rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold">박준범 / 백엔드, AI</h3>
            </div>
            <div className="scroll-animation" style={{ transitionDelay: "0.3s" }}>
              <div className="w-48 h-48 bg-[#d9d9d9] rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold">조수빈 / UI/UX 디자인</h3>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-[#d9d9d9]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-2">(주)Softmax301</h3>
          </div>

          <div className="max-w-3xl mx-auto text-sm text-[#3c3c3c] text-center">
            <p className="mb-1">대표: 김시훈 | 주소: 서울특별시 강남구 테헤란로 1, 301호</p>
            <p className="mb-1">사업자 등록번호: 123-45-67890</p>
            <p className="mb-1">회사이메일: contact@team301.com</p>
            <p className="mb-1">서비스문의: contact@team301.com</p>
            <p className="mt-4">
              <span className="mr-2">개인정보 처리방침</span> |<span className="mx-2">소개</span> |
              <span className="mx-2">서비스</span> |<span className="mx-2">포트폴리오</span> |
              <span className="ml-2">문의하기</span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

