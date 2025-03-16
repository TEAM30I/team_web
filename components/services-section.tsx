import { Globe, Server, Layout } from "lucide-react"

const services = [
  {
    title: "웹페이지 제작",
    description:
      "사찰과 불교 단체를 위한 맞춤형 웹사이트를 제작합니다. 반응형 디자인과 사용자 친화적인 인터페이스로 방문자들에게 최상의 경험을 제공합니다.",
    icon: <Layout className="h-10 w-10 text-amber-600" />,
    features: ["반응형 디자인", "SEO 최적화", "사용자 친화적 인터페이스", "콘텐츠 관리 시스템"],
  },
  {
    title: "SaaS 구독 서비스",
    description:
      "월 구독 방식으로 웹사이트 관리, 콘텐츠 업데이트, 기술 지원 등을 제공하는 서비스입니다. 별도의 IT 인력 없이도 웹사이트를 효과적으로 운영할 수 있습니다.",
    icon: <Server className="h-10 w-10 text-amber-600" />,
    features: ["정기 업데이트 및 유지보수", "기술 지원", "콘텐츠 관리 지원", "보안 모니터링"],
  },
  {
    title: "불교 통합 플랫폼",
    description:
      "법회 일정, 불교 교리, 명상 가이드, 온라인 기부 등 다양한 기능을 제공하는 통합 플랫폼을 구축합니다. 신도들과의 소통을 강화하고 불교 활동을 활성화합니다.",
    icon: <Globe className="h-10 w-10 text-amber-600" />,
    features: ["법회 일정 관리", "온라인 기부 시스템", "명상 가이드", "커뮤니티 기능"],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">우리의 서비스</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              불교 및 사찰을 위한 맞춤형 디지털 솔루션을 제공합니다.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="flex items-center space-x-4">
                {service.icon}
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
              <p className="text-gray-500">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-amber-600" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

