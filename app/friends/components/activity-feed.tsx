"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle } from "lucide-react"

const activities = [
  {
    id: 1,
    user: { name: "Sarah K.", avatar: "/placeholder.svg?height=40&width=40" },
    action: "completed a challenge",
    target: "30-min Focus Session",
    time: "5m ago",
    likes: 12,
    comments: 3,
  },
  {
    id: 2,
    user: { name: "Alex M.", avatar: "/placeholder.svg?height=40&width=40" },
    action: "earned a badge",
    target: "Early Bird 🌅",
    time: "15m ago",
    likes: 8,
    comments: 1,
  },
  {
    id: 3,
    user: { name: "Jordan P.", avatar: "/placeholder.svg?height=40&width=40" },
    action: "reached a milestone",
    target: "7-day Wellness Streak",
    time: "1h ago",
    likes: 15,
    comments: 4,
  },
]

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Feed</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-4">
              <Avatar>
                <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{activity.user.name}</span>
                  <span className="text-gray-500">{activity.action}</span>
                  <span className="font-medium">{activity.target}</span>
                </div>
                <div className="text-sm text-gray-500 mt-1">{activity.time}</div>
                <div className="flex items-center gap-4 mt-3">
                  <Button variant="ghost" size="sm" className="text-gray-500">
                    <Heart className="w-4 h-4 mr-1" />
                    {activity.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-500">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    {activity.comments}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

