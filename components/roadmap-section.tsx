const milestones = [
  {
    date: "2023년 4분기",
    title: "TEAM 301 설립",
    description: "불교 및 사찰을 위한 디지털 솔루션 제공을 목표로 TEAM 301 설립",
  },
  {
    date: "2024년 1분기",
    title: "첫 번째 프로젝트 출시",
    description: "10개 사찰 웹사이트 구축 및 SaaS 서비스 베타 버전 출시",
  },
  {
    date: "2024년 2분기",
    title: "불교 통합 플랫폼 개발",
    description: "법회 일정, 명상 가이드, 온라인 기부 등을 포함한 통합 플랫폼 개발 시작",
  },
  {
    date: "2024년 3분기",
    title: "모바일 앱 출시",
    description: "불교 명상 및 교리 학습을 위한 모바일 앱 출시",
  },
  {
    date: "2024년 4분기",
    title: "서비스 확장",
    description: "전국 100개 이상의 사찰 및 불교 단체로 서비스 확장",
  },
  {
    date: "2025년",
    title: "글로벌 진출",
    description: "해외 불교 단체를 위한 다국어 서비스 제공 시작",
  },
]

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">로드맵</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              TEAM 301의 향후 계획과 마일스톤을 소개합니다.
            </p>
          </div>
        </div>
        <div className="mt-12 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-amber-200 hidden md:block" />
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-4 md:gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2 flex justify-center md:justify-end items-center">
                  <div className="bg-white p-6 rounded-lg shadow-sm border w-full md:max-w-md">
                    <h3 className="text-lg font-bold">{milestone.title}</h3>
                    <p className="text-sm text-amber-600 mt-1">{milestone.date}</p>
                    <p className="mt-2 text-gray-500">{milestone.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex md:w-0 items-center justify-center relative">
                  <div className="h-4 w-4 rounded-full bg-amber-600 z-10" />
                </div>
                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

