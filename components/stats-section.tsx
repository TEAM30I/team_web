"use client"

import { useEffect, useState } from "react"
import { BarChart, PieChart, Activity, Users } from "lucide-react"

export default function StatsSection() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 500) {
        setCount((prev) => Math.min(prev + 10, 500))
      } else {
        clearInterval(interval)
      }
    }, 20)

    return () => clearInterval(interval)
  }, [count])

  return (
    <section id="stats" className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">서비스 현황</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              TEAM 301의 서비스를 이용하고 있는 고객 통계입니다.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
          <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-white p-8 shadow-sm">
            <div className="rounded-full bg-amber-100 p-3">
              <Users className="h-6 w-6 text-amber-600" />
            </div>
            <div className="text-4xl font-bold">{count}+</div>
            <div className="text-sm text-gray-500">사찰 및 불교 단체</div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-white p-8 shadow-sm">
            <div className="rounded-full bg-amber-100 p-3">
              <BarChart className="h-6 w-6 text-amber-600" />
            </div>
            <div className="text-4xl font-bold">98%</div>
            <div className="text-sm text-gray-500">고객 만족도</div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-white p-8 shadow-sm">
            <div className="rounded-full bg-amber-100 p-3">
              <PieChart className="h-6 w-6 text-amber-600" />
            </div>
            <div className="text-4xl font-bold">30%</div>
            <div className="text-sm text-gray-500">방문자 증가율</div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-white p-8 shadow-sm">
            <div className="rounded-full bg-amber-100 p-3">
              <Activity className="h-6 w-6 text-amber-600" />
            </div>
            <div className="text-4xl font-bold">24/7</div>
            <div className="text-sm text-gray-500">고객 지원</div>
          </div>
        </div>
      </div>
    </section>
  )
}

