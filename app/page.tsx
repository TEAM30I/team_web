import type { Metadata } from "next/types"
import Header from "../components/header"
import HeroSection from "../components/hero-section"
import TeamSection from "../components/team-section"
import StatsSection from "../components/stats-section"
import ServicesSection from "../components/services-section"
import PortfolioSection from "../components/portfolio-section"
import RoadmapSection from "../components/roadmap-section"
import Footer from "../components/footer"

export const metadata: Metadata = {
  title: "TEAM 301 - 불교 디지털 솔루션",
  description: "불교 및 사찰을 위한 웹페이지 제작 및 SaaS 구독형 서비스를 제공하는 TEAM 301입니다.",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TeamSection />
      <StatsSection />
      <ServicesSection />
      <PortfolioSection />
      <RoadmapSection />
      <Footer />
    </main>
  )
}

