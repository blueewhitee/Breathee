"use client"

import { useState } from "react"
import { Header } from "./header"
import { StatsOverview } from "./stats-overview"
import { MainContent } from "./main-content"
import { BottomSection } from "./bottom-section"
import { SidePanel } from "./side-panel"

export function VibeInsights() {
  const [dateRange, setDateRange] = useState({ from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), to: new Date() })
  const [isLoading, setIsLoading] = useState(false)

  const handleRefresh = () => {
    setIsLoading(true)
    // Simulating data fetch
    setTimeout(() => setIsLoading(false), 1500)
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 font-sans">
      <Header dateRange={dateRange} setDateRange={setDateRange} onRefresh={handleRefresh} isLoading={isLoading} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <StatsOverview />
        <MainContent />
        <BottomSection />
      </main>
      <SidePanel />
    </div>
  )
}

