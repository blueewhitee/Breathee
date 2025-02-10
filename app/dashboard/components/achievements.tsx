"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const achievements = [
  {
    title: "Early Bird",
    description: "No screen time before 9 AM",
    emoji: "🌅",
    status: "Unlocked",
    rarity: "Common",
  },
  {
    title: "Touch Grass",
    description: "2 hours outside without phone",
    emoji: "🌿",
    status: "In Progress",
    rarity: "Rare",
  },
  {
    title: "Zen Master",
    description: "7-day meditation streak",
    emoji: "🧘‍♂️",
    status: "Locked",
    rarity: "Epic",
  },
  {
    title: "No Cap",
    description: "Share progress with friends",
    emoji: "🧢",
    status: "Unlocked",
    rarity: "Common",
  },
]

const rarityColors = {
  Common: "bg-gray-100 text-gray-600",
  Rare: "bg-blue-100 text-blue-600",
  Epic: "bg-purple-100 text-purple-600",
}

export function Achievements() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Latest Achievements
          <span className="text-2xl">🏆</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-2">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{achievement.emoji}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{achievement.title}</h4>
                    <p className="text-sm text-gray-500">{achievement.description}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge
                      variant="secondary"
                      className={rarityColors[achievement.rarity as keyof typeof rarityColors]}
                    >
                      {achievement.rarity}
                    </Badge>
                    <span className="text-sm text-gray-500">{achievement.status}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  )
}

