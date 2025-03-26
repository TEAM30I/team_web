import { forwardRef } from "react"
import Image from "next/image"

interface ServiceItemProps {
  imageUrl: string
  imageAlt: string
  stepNumber: number
  title: string
  description: string
  isReversed?: boolean
  isLastItem?: boolean
}

const ServiceItem = forwardRef<HTMLElement, ServiceItemProps>(
  ({ imageUrl, imageAlt, stepNumber, title, description, isReversed = false, isLastItem = false }, ref) => {
    return (
      <section ref={ref} className={`py-8 ${isLastItem ? "pb-16" : ""} bg-white`}>
        <div className="container mx-auto px-4">
          <div className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12`}>
            <div className="md:w-1/2 scroll-animation">
              <Image src={imageUrl || "/placeholder.svg"} alt={imageAlt} width={400} height={400} className="mx-auto" />
            </div>
            <div className="md:w-1/2 scroll-animation">
              <div className="flex mb-4">
                {[1, 2, 3].map((num) => (
                  <span
                    key={num}
                    className={`${
                      num === stepNumber ? "bg-[#e6603d] text-white" : "bg-white text-[#3c3c3c]"
                    } rounded-full w-8 h-8 flex items-center justify-center mr-2`}
                  >
                    {num}
                  </span>
                ))}
              </div>
              <div className="text-sm text-[#e6603d] mb-2">{title}</div>
              <h3 className="text-2xl font-bold mb-4">{description}</h3>
            </div>
          </div>
        </div>
      </section>
    )
  },
)

ServiceItem.displayName = "ServiceItem"
export default ServiceItem

