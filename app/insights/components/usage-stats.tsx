"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts"

const data = [
  { day: "Mon", screenTime: 120, wellness: 75 },
  { day: "Tue", screenTime: 90, wellness: 82 },
  { day: "Wed", screenTime: 150, wellness: 68 },
  { day: "Thu", screenTime: 85, wellness: 88 },
  { day: "Fri", screenTime: 130, wellness: 72 },
  { day: "Sat", screenTime: 60, wellness: 90 },
  { day: "Sun", screenTime: 95, wellness: 85 },
]

export function UsageStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Weekly Usage Stats
          <span className="text-sm text-gray-500">vs Wellness Score</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="day" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="screenTime" name="Screen Time (min)" fill="#8884d8" />
              <Bar yAxisId="right" dataKey="wellness" name="Wellness Score" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

