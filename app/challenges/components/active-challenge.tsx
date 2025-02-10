"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Timer, Users, Trophy } from "lucide-react"

export function ActiveChallenge() {
  return (
    <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
      <CardHeader>
        <CardTitle>Active Challenge</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold mb-2">Digital Detox Challenge</h2>
            <p className="text-gray-600 mb-4">
              Reduce your screen time by 50% for the next 24 hours. Stay focused and mindful!
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Timer className="w-4 h-4 mr-1" />
                12h remaining
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                45 participants
              </div>
              <div className="flex items-center">
                <Trophy className="w-4 h-4 mr-1" />
                500 pts
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2 text-sm">
                <span>Progress</span>
                <span className="font-medium">4/8 hours completed</span>
              </div>
              <Thinking>
                I'll continue the code exactly from the cut-off point, maintaining the same structure and style for the
                ActiveChallenge component and completing the remaining challenge components.
              </Thinking>
              ```tsx file="app/challenges/components/active-challenge.tsx" continued
              <div className="flex justify-between mb-2 text-sm">
                <span>Progress</span>
                <span className="font-medium">4/8 hours completed</span>
              </div>
              <Progress value={50} />
            </div>
            <div className="flex gap-2">
              <Button className="flex-1">Give Up</Button>
              <Button className="flex-1" variant="default">
                Check In
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

