"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar } from "recharts"

const dailyActivityData = [
  { date: "2024-02-04", activity: 120 },
  { date: "2024-02-05", activity: 150 },
  { date: "2024-02-06", activity: 180 },
  { date: "2024-02-07", activity: 200 },
  { date: "2024-02-08", activity: 160 },
  { date: "2024-02-09", activity: 140 },
  { date: "2024-02-10", activity: 190 },
]

const topWebsitesData = [
  { name: "YouTube", visits: 50 },
  { name: "Google", visits: 45 },
  { name: "Facebook", visits: 40 },
  { name: "Twitter", visits: 35 },
  { name: "Instagram", visits: 30 },
  { name: "LinkedIn", visits: 25 },
  { name: "GitHub", visits: 20 },
  { name: "Stack Overflow", visits: 15 },
  { name: "Reddit", visits: 10 },
  { name: "Netflix", visits: 5 },
]

export function Analytics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Daily Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailyActivityData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="activity" stroke="#2563eb" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Top 10 Websites</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topWebsitesData} layout="vertical">
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={100} />
                <Tooltip />
                <Bar dataKey="visits" fill="#2563eb" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

