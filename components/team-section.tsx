import Image from "next/image"

const teamMembers = [
  {
    name: "김시훈",
    role: "대표 / 기획자",
    bio: "사용자 중심의 서비스 기획과 불교 단체의 요구사항을 정확히 파악하여 맞춤형 솔루션을 제안합니다.",
    image: "/sihun.png?height=400&width=400",
  },
  {
    name: "조수빈",
    role: "UI/UX 디자이너",
    bio: "불교의 미학적 요소를 현대적 디자인에 접목시키는 전문가로, 사용자 경험을 중심으로 한 직관적이고 아름다운 인터페이스를 설계합니다.",
    image: "/josubin.png?height=400&width=400",
  },
  {
    name: "김수빈",
    role: "프론트엔드 개발자",
    bio: "다양한 스타트업 경험과 기술을 바탕으로 불교의 문제점을 해결하고 최고의 경험을 제공합니다.",
    image: "/subin.png?height=400&width=400",
  },
  {
    name: "박준범",
    role: "풀스택 개발자",  
    bio: "10년 이상의 웹 개발 경험과 불교에 대한 깊은 이해를 바탕으로 사찰과 불교 단체를 위한 최적의 디지털 솔루션을 제공합니다.",
    image: "/park.png?height=400&width=400",
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">우리 팀원</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              TEAM 301을 이끌어가는 전문가들을 소개합니다.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-amber-600 font-medium">{member.role}</p>
                <p className="text-sm text-gray-500">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}