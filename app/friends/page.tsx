import type { Metadata } from "next"
import { FriendsList } from "./components/friends-list"
import { ActivityFeed } from "./components/activity-feed"
import { Challenges } from "./components/challenges"
import { PageTransition } from "@/components/ui/page-transition"

export const metadata: Metadata = {
  title: "Friend Activity | Breathee",
  description: "See what your friends are up to",
}

export default function FriendsPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
          Squad Check 👥
        </h1>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <FriendsList />
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-8">
              <ActivityFeed />
              <Challenges />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

