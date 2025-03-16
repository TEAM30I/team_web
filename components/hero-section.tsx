import Link from "next/link"

export default function HeroSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">TEAM 301</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              불교 및 사찰을 위한 디지털 솔루션
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            <p className="text-gray-700 md:text-lg">
              TEAM 301은 불교 및 사찰을 위한 맞춤형 웹 솔루션을 제공합니다. 우리는 전통과 현대 기술을 조화롭게 융합하여
              사찰과 불교 단체가 디지털 시대에 효과적으로 소통하고 성장할 수 있도록 돕습니다.
            </p>
            <p className="text-gray-700 md:text-lg">
              우리의 비전은 불교의 가치와 지혜를 디지털 세계에서도 쉽게 접할 수 있도록 하여, 더 많은 사람들이 불교의
              평화와 지혜를 경험할 수 있게 하는 것입니다.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="#services"
              className="inline-flex h-10 items-center justify-center rounded-md bg-amber-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-700"
            >
              서비스 알아보기
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-md border border-amber-600 px-8 text-sm font-medium text-amber-600 shadow-sm transition-colors hover:bg-amber-50 hover:text-amber-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-700"
            >
              문의하기
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

