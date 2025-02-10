"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Award, Gift, Star, Trophy } from "lucide-react"

export function RewardsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Trophy className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Total Points</div>
              <div className="text-2xl font-bold">1,234</div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Badges Earned</div>
              <div className="text-2xl font-bold">15/24</div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Star className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Current Level</div>
              <div className="text-2xl font-bold">Level 8</div>
            </div>
          </div>
          <Progress value={75} className="mt-4" />
          <div className="mt-2 text-xs text-gray-500">75% to Level 9</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Gift className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Available Rewards</div>
              <div className="text-2xl font-bold">3</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

