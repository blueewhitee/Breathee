"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Trophy } from "lucide-react"

const challenges = [
  {
    id: 1,
    title: "Mindful Morning",
    description: "No phone usage in the first hour after waking up",
    duration: "24h",
    participants: 32,
    points: 300,
    difficulty: "Easy",
  },
  {
    id: 2,
    title: "Focus Flow",
    description: "Complete 4 focused work sessions of 25 minutes each",
    duration: "12h",
    participants: 28,
    points: 400,
    difficulty: "Medium",
  },
  {
    id: 3,
    title: "Social Media Detox",
    description: "Stay off social media for 24 hours straight",
    duration: "24h",
    participants: 15,
    points: 500,
    difficulty: "Hard",
  },
]

const difficultyColors = {
  Easy: "bg-green-100 text-green-600",
  Medium: "bg-yellow-100 text-yellow-600",
  Hard: "bg-red-100 text-red-600",
}

export function ChallengesList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Available Challenges</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {challenges.map((challenge) => (
            <Card key={challenge.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{challenge.title}</h3>
                  <Badge
                    variant="secondary"
                    className={difficultyColors[challenge.difficulty as keyof typeof difficultyColors]}
                  >
                    {challenge.difficulty}
                  </Badge>
                </div>
                <p className="text-sm text-gray-500 mb-4">{challenge.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {challenge.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {challenge.participants}
                    </div>
                    <div className="flex items-center">
                      <Trophy className="w-4 h-4 mr-1" />
                      {challenge.points} pts
                    </div>
                  </div>
                  <Button size="sm">Join Challenge</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

