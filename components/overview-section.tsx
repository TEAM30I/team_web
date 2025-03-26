import { forwardRef } from "react"
import Image from "next/image"

const OverviewSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section ref={ref} className="min-h-[80vh] flex flex-col justify-center items-center py-12">
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
          <ServiceFeature
            icon="/placeholder.svg?height=120&width=120"
            title="사찰의 정체성을 담은 맞춤 웹사이트"
            description="템플릿이 아닌 사찰만의 이야기를 담은 디자인으로 신뢰감 있는 온라인 공간을 만드실 수 있어요."
            delay={0}
          />
          <ServiceFeature
            icon="/placeholder.svg?height=120&width=120"
            title="운영 부담 줄어주는 SaaS 시스템"
            description="콘텐츠 등록, 일정 관리, 공지 알림 등 번복적인 운영을 별도 인력 없이 쉽게 관리할 수 있도록 도와드립니다."
            delay={0.2}
          />
          <ServiceFeature
            icon="/placeholder.svg?height=120&width=120"
            title="신도와 함께하는 불교 통합 플랫폼"
            description="기도, 보시, 명상 등 신앙 실천을 한 곳에 담아 신도와 사찰이 자연스럽게 연결되는 공간을 만들어보세요."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  )
})

interface ServiceFeatureProps {
  icon: string
  title: string
  description: string
  delay: number
}

function ServiceFeature({ icon, title, description, delay }: ServiceFeatureProps) {
  return (
    <div className="flex-1 max-w-xs scroll-animation" style={{ transitionDelay: `${delay}s` }}>
      <div className="bg-white p-6 rounded-xl shadow-sm mb-4 aspect-square flex items-center justify-center">
        <Image src={icon || "/placeholder.svg"} alt={title} width={120} height={120} />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-[#3c3c3c] text-sm">{description}</p>
    </div>
  )
}

OverviewSection.displayName = "OverviewSection"
export default OverviewSection

