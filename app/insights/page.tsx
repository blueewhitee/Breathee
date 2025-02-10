import type { Metadata } from "next"
import { UsageStats } from "./components/usage-stats"
import { TrendAnalysis } from "./components/trend-analysis"
import { WeeklyReport } from "./components/weekly-report"
import { MoodInsights } from "./components/mood-insights"

export const metadata: Metadata = {
  title: "Insights | Breathee",
  description: "Deep dive into your digital wellness trends",
}

export default function InsightsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        Your Wellness Journey 📊
      </h1>
      <div className="grid gap-8">
        <UsageStats />
        <TrendAnalysis />
        <WeeklyReport />
        <MoodInsights />
      </div>
    </div>
  )
}

