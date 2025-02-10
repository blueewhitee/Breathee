"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown, ArrowUp, Clock, Activity, Zap } from "lucide-react"

const stats = [
  {
    title: "Total Pages Visited",
    value: "1,234",
    trend: 5.6,
    icon: Activity,
  },
  {
    title: "Total Browsing Time",
    value: "12:45",
    comparison: "2:30 above avg",
    icon: Clock,
  },
  {
    title: "Peak Activity Time",
    value: "2 PM",
    heatLevel: "High",
    icon: Zap,
  },
  {
    title: "Avg Time per Page",
    value: "2:30",
    trendDirection: "up",
    icon: Clock,
  },
]

export function StatsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="hover:shadow-lg transition-shadow duration-300 hover:scale-105">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <stat.icon className="w-6 h-6 text-blue-600" />
              <span className="text-sm font-medium text-gray-500">{stat.title}</span>
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="mt-2 text-sm">
              {stat.trend && (
                <span className={`flex items-center ${stat.trend > 0 ? "text-green-600" : "text-red-600"}`}>
                  {stat.trend > 0 ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
                  {Math.abs(stat.trend)}%
                </span>
              )}
              {stat.comparison && <span className="text-gray-500">{stat.comparison}</span>}
              {stat.heatLevel && (
                <span className="flex items-center">
                  <span
                    className={`w-2 h-2 rounded-full mr-1 ${stat.heatLevel === "High" ? "bg-red-500" : "bg-yellow-500"}`}
                  ></span>
                  {stat.heatLevel} Activity
                </span>
              )}
              {stat.trendDirection && (
                <span
                  className={`flex items-center ${stat.trendDirection === "up" ? "text-green-600" : "text-red-600"}`}
                >
                  {stat.trendDirection === "up" ? (
                    <ArrowUp className="w-4 h-4 mr-1" />
                  ) : (
                    <ArrowDown className="w-4 h-4 mr-1" />
                  )}
                  Trending
                </span>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

