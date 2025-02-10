"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Trophy, Zap, Heart } from "lucide-react"

const stats = [
  {
    title: "Screen Time",
    value: "11m",
    subtext: "today",
    icon: Clock,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Streak",
    value: "5",
    subtext: "days",
    icon: Trophy,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Energy Level",
    value: "High",
    subtext: "based on activity",
    icon: Zap,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Wellness Points",
    value: "420",
    subtext: "nice! 😎",
    icon: Heart,
    color: "bg-pink-100 text-pink-600",
  },
]

export function StatsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-500">{stat.title}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">{stat.value}</span>
                    <span className="text-sm text-gray-500">{stat.subtext}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

