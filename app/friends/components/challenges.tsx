"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Users } from "lucide-react"

const challenges = [
  {
    id: 1,
    title: "Digital Detox Weekend",
    participants: 15,
    progress: 65,
    timeLeft: "2 days",
  },
  {
    id: 2,
    title: "Meditation Marathon",
    participants: 8,
    progress: 40,
    timeLeft: "5 days",
  },
  {
    id: 3,
    title: "Productivity Sprint",
    participants: 12,
    progress: 80,
    timeLeft: "1 day",
  },
]

export function Challenges() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Group Challenges</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{challenge.title}</h3>
                <Button variant="outline" size="sm">
                  Join
                </Button>
              </div>
              <Progress value={challenge.progress} />
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {challenge.participants} participants
                </div>
                <div>{challenge.timeLeft} left</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

