"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Bell, LineChart, Users, Gift, Sparkles } from "lucide-react"
import Link from "next/link"

const actions = [
  {
    title: "Set Daily Goals",
    description: "Create your vibe targets",
    icon: Target,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Customize Alerts",
    description: "Stay in the zone",
    icon: Bell,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "View Insights",
    description: "See your progress",
    icon: LineChart,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Friend Activity",
    description: "See what the squad's up to",
    icon: Users,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Claim Rewards",
    description: "Get cool stuff",
    icon: Gift,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Daily Challenge",
    description: "Push your limits",
    icon: Sparkles,
    color: "bg-yellow-100 text-yellow-600",
  },
]

export function ActionButtons() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {actions.map((action, index) => (
        <motion.div
          key={action.title}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1">
            <CardContent className="p-6">
              <Button asChild variant="ghost" className="w-full h-auto p-4 flex flex-col items-center gap-2">
                <Link href={
                  action.title === "View Insights" ? "/vibe-insights" :
                  action.title === "Friend Activity" ? "/friends" :
                  action.title === "Set Daily Goals" || action.title === "Daily Challenge" ? "/challenges" :
                  action.title === "Claim Rewards" ? "/rewards" : "#"
                }>
                  <div className={`p-3 rounded-full ${action.color}`}>
                    <action.icon className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold">{action.title}</h3>
                    <p className="text-sm text-gray-500">{action.description}</p>
                  </div>
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

