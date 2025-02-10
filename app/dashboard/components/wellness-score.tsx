"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function WellnessScore() {
  const score = 78

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Wellness Score</h2>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-4xl font-bold text-green-500">
            {score}%
          </motion.div>
        </div>
        <Progress value={score} className="h-4 bg-gray-100" />
        <div className="mt-4 text-sm text-gray-500">{score >= 70 ? "You're crushing it! 🔥" : "Keep going! 💪"}</div>
      </CardContent>
    </Card>
  )
}

