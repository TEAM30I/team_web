import { forwardRef } from "react"

interface TeamMember {
  name: string
  role: string
  image: string
  isLeader?: boolean
}

const TeamSection = forwardRef<HTMLElement>((_props, ref) => {
  const teamMembers: TeamMember[] = [
    {
      name: "김시훈",
      role: "프론트, AI",
      image: "/sihun.png?height=200&width=200",
      isLeader: true,
    },
    {
      name: "김수빈",
      role: "프론트, AI",
      image: "/subin.png?height=200&width=200",
    },
    {
      name: "박준범",
      role: "백엔드, AI",
      image: "/park.png?height=200&width=200",
    },
    {
      name: "조수빈",
      role: "UI/UX 디자인",
      image: "/josubin.png?height=200&width=200",
    },
  ]

  return (
    <section ref={ref} className="min-h-[80vh] flex flex-col justify-center items-center py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="text-[#e6603d] mb-2 scroll-animation">팀원</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 scroll-animation">Softmax 301 팀원을 소개합니다.</h2>
        <p className="text-lg text-[#3c3c3c] mb-16 max-w-2xl mx-auto scroll-animation">
          기술과 디자인, 그리고 불교에 대한 이해를 바탕으로
          <br />
          사찰과 신도를 위한 디지털 공간을 함께 만들어가고 있습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="scroll-animation" style={{ transitionDelay: `${index * 0.1}s` }}>
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold">
                {member.isLeader ? `[대표] ${member.name}` : member.name} / {member.role}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

TeamSection.displayName = "TeamSection"
export default TeamSection
