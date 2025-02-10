import type { Metadata } from "next"
import { ActiveChallenge } from "./components/active-challenge"
import { ChallengesList } from "./components/challenges-list"
import { Leaderboard } from "./components/leaderboard"
import { PageTransition } from "@/components/ui/page-transition"

export const metadata: Metadata = {
  title: "Daily Challenges | Breathee",
  description: "Complete daily challenges to earn rewards",
}

export default function ChallengesPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
          Daily Challenges 🎯
        </h1>
        <div className="grid gap-8">
          <ActiveChallenge />
          <div className="grid gap-8 lg:grid-cols-2">
            <ChallengesList />
            <Leaderboard />
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

