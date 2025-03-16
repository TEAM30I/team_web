import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="w-full border-t bg-white py-6 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">TEAM 301</h3>
            <p className="max-w-xs text-sm text-gray-500">
              불교 및 사찰을 위한 디지털 솔루션을 제공하는 전문 팀입니다.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">연락처</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                <span>02-123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                <span>contact@team301.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                <span>서울특별시 관악구 관악로 1 301</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">바로가기</h3>
            <nav className="flex flex-col space-y-2 text-sm text-gray-500">
              <Link href="#about" className="hover:text-amber-600">
                소개
              </Link>
              <Link href="#services" className="hover:text-amber-600">
                서비스
              </Link>
              <Link href="#portfolio" className="hover:text-amber-600">
                포트폴리오
              </Link>
              <Link href="#roadmap" className="hover:text-amber-600">
                로드맵
              </Link>
              <Link href="#contact" className="hover:text-amber-600">
                문의하기
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 border-t pt-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} TEAM 301. 모든 권리 보유. | 대표: 김시훈 | 사업자등록번호: 123-45-67890
          </p>
        </div>
      </div>
    </footer>
  )
}

