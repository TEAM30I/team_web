import { forwardRef } from "react"

const ServiceHeaderSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section ref={ref} className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-[#e6603d] text-center mb-2 scroll-animation">서비스</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center scroll-animation">
          사찰과 신도가 더 가까워지는 세상,
          <br />
          Softmax301이 만들어갑니다
        </h2>
      </div>
    </section>
  )
})

ServiceHeaderSection.displayName = "ServiceHeaderSection"
export default ServiceHeaderSection

