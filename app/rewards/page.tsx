import type { Metadata } from "next"
import { RewardsOverview } from "./components/rewards-overview"
import { RewardsList } from "./components/rewards-list"
import { RedeemHistory } from "./components/redeem-history"
import { PageTransition } from "@/components/ui/page-transition"

export const metadata: Metadata = {
  title: "Rewards | Breathee",
  description: "Earn and redeem rewards for your wellness journey",
}

export default function RewardsPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
          Rewards & Achievements 🏆
        </h1>
        <div className="grid gap-8">
          <RewardsOverview />
          <div className="grid gap-8 lg:grid-cols-2">
            <RewardsList />
            <RedeemHistory />
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

