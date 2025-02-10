"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts"

const data = [
  { name: "Vibing", value: 35, color: "#8884d8" },
  { name: "On Fire", value: 25, color: "#ff7c43" },
  { name: "Grinding", value: 20, color: "#82ca9d" },
  { name: "Sleepy", value: 15, color: "#ffc658" },
  { name: "Confused", value: 5, color: "#a4a4a4" },
]

export function MoodInsights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mood Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={100} fill="#8884d8" dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

