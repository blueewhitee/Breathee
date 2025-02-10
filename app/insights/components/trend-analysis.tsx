"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const data = [
  { date: "1/1", productivity: 85, focus: 75, energy: 80 },
  { date: "1/2", productivity: 78, focus: 80, energy: 75 },
  { date: "1/3", productivity: 90, focus: 85, energy: 85 },
  { date: "1/4", productivity: 88, focus: 82, energy: 88 },
  { date: "1/5", productivity: 92, focus: 88, energy: 90 },
  { date: "1/6", productivity: 85, focus: 85, energy: 82 },
  { date: "1/7", productivity: 95, focus: 90, energy: 92 },
]

export function TrendAnalysis() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Trend Analysis</CardTitle>
        <Select defaultValue="7d">
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Select range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 90 days</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="productivity" name="Productivity" stroke="#8884d8" />
              <Line type="monotone" dataKey="focus" name="Focus" stroke="#82ca9d" />
              <Line type="monotone" dataKey="energy" name="Energy" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

