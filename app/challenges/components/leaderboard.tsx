"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Medal } from "lucide-react"

const leaderboard = [
  { rank: 1, name: "Sarah K.", points: 2500, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 2, name: "Alex M.", points: 2350, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 3, name: "Jordan P.", points: 2200, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 4, name: "Taylor R.", points: 2100, avatar: "/placeholder.svg?height=40&width=40" },
  { rank: 5, name: "Jamie L.", points: 2000, avatar: "/placeholder.svg?height=40&width=40" },
]

const medalColors = {
  1: "text-yellow-500",
  2: "text-gray-400",
  3: "text-amber-600",
}

export function Leaderboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Challenge Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {leaderboard.map((user) => (
            <div key={user.rank} className="flex items-center gap-4">
              <div className="w-8 text-center font-bold">
                {user.rank <= 3 ? (
                  <Medal className={`w-6 h-6 ${medalColors[user.rank as keyof typeof medalColors]}`} />
                ) : (
                  user.rank
                )}
              </div>
              <Avatar>
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-medium">{user.name}</div>
                <div className="text-sm text-gray-500">{user.points} points</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

