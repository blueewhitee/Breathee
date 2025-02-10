"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUp, ArrowDown } from "lucide-react"

const metrics = [
  {
    title: "Average Daily Screen Time",
    value: "2h 15m",
    change: -15,
    changeLabel: "vs last week",
  },
  {
    title: "Productivity Score",
    value: "85/100",
    change: 8,
    changeLabel: "vs last week",
  },
  {
    title: "Focus Sessions",
    value: "12",
    change: 3,
    changeLabel: "vs last week",
  },
  {
    title: "Wellness Streak",
    value: "5 days",
    change: 2,
    changeLabel: "vs last week",
  },
]

export function WeeklyReport() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Report</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <Card key={metric.title}>
              <CardContent className="pt-6">
                <div className="text-sm font-medium text-gray-500">{metric.title}</div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <Badge variant={metric.change > 0 ? "success" : "destructive"} className="flex items-center gap-1">
                    {metric.change > 0 ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                    {Math.abs(metric.change)}%
                  </Badge>
                </div>
                <div className="mt-2 text-xs text-gray-500">{metric.changeLabel}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

