import type { Metadata } from "next"
import { WellnessScore } from "./components/wellness-score"
import { StatsGrid } from "./components/stats-grid"
import { ActionButtons } from "./components/action-buttons"
import { Achievements } from "./components/achievements"
import { MoodTracker } from "./components/mood-tracker"
import { PageTransition } from "@/components/ui/page-transition"

export const metadata: Metadata = {
  title: "Vibe Check | Breathee",
  description: "Track your digital wellness journey",
}

export default function DashboardPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8">
          <header className="flex items-center justify-between">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Your Vibe Today ✨
            </h1>
            <MoodTracker />
          </header>
          <WellnessScore />
          <StatsGrid />
          <ActionButtons />
          <Achievements />
        </div>
      </div>
    </PageTransition>
  )
}

