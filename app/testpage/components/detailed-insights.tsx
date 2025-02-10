"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar } from "recharts"

const scrollPatternData = [
  { time: "0s", depth: 0 },
  { time: "10s", depth: 20 },
  { time: "20s", depth: 40 },
  { time: "30s", depth: 60 },
  { time: "40s", depth: 80 },
  { time: "50s", depth: 100 },
]

const videoAnalyticsData = [
  { platform: "YouTube", watchTime: 120 },
  { platform: "Netflix", watchTime: 90 },
  { platform: "Twitch", watchTime: 60 },
  { platform: "TikTok", watchTime: 30 },
]

export function DetailedInsights() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Scroll Patterns</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={scrollPatternData}>
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="depth" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Video Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={videoAnalyticsData}>
                <XAxis dataKey="platform" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="watchTime" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

