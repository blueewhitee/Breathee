"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown, ArrowUp, Clock, Globe, MousePointer, Video } from "lucide-react"

const metrics = [
  {
    title: "Active Browsing Time",
    value: "5h 23m",
    comparison: "+45m",
    icon: Clock,
  },
  {
    title: "Pages Visited",
    value: "127",
    trend: 15,
    icon: Globe,
  },
  {
    title: "Scroll Engagement",
    value: "68%",
    subtext: "Peak: 85%",
    icon: MousePointer,
  },
  {
    title: "Video Consumption",
    value: "2h 15m",
    subtext: "70% YouTube",
    icon: Video,
  },
]

export function KeyMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <Card key={metric.title} className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <metric.icon className="w-6 h-6 text-blue-600" />
              <span className="text-sm font-medium text-gray-500">{metric.title}</span>
            </div>
            <div className="text-2xl font-bold">{metric.value}</div>
            <div className="mt-2 text-sm">
              {metric.comparison && (
                <span
                  className={`flex items-center ${metric.comparison.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                >
                  {metric.comparison.startsWith("+") ? (
                    <ArrowUp className="w-4 h-4 mr-1" />
                  ) : (
                    <ArrowDown className="w-4 h-4 mr-1" />
                  )}
                  {metric.comparison}
                </span>
              )}
              {metric.trend && (
                <span className={`flex items-center ${metric.trend > 0 ? "text-green-600" : "text-red-600"}`}>
                  {metric.trend > 0 ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
                  {Math.abs(metric.trend)}%
                </span>
              )}
              {metric.subtext && <span className="text-gray-500">{metric.subtext}</span>}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

