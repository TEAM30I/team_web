import Image from "next/image"
import Link from "next/link"

const portfolioItems = [
  {
    title: "봉은사 웹사이트",
    description: "서울 봉은사의 공식 웹사이트로, 사찰 소개, 법회 일정, 템플스테이 예약 등의 기능을 제공합니다.",
    image: "/placeholder.svg?height=300&width=500",
    link: "#",
  },
  {
    title: "한국불교문화재단 플랫폼",
    description: "불교 문화재 보존 및 홍보를 위한 통합 플랫폼으로, 온라인 전시와 기부 시스템을 포함합니다.",
    image: "/placeholder.svg?height=300&width=500",
    link: "#",
  },
  {
    title: "불교 명상 앱",
    description: "일상에서 명상을 쉽게 실천할 수 있도록 돕는 모바일 앱으로, 다양한 명상 가이드와 타이머를 제공합니다.",
    image: "/placeholder.svg?height=300&width=500",
    link: "#",
  },
]

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">포트폴리오</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              TEAM 301이 제작한 프로젝트를 소개합니다.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-12">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="bg-white p-4">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{item.description}</p>
                <Link
                  href={item.link}
                  className="mt-4 inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-700"
                >
                  자세히 보기
                  <svg
                    className="ml-1 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

