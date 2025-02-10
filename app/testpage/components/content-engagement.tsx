"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts"

const scrollDepthData = [
  { depth: "0%", engagement: 100 },
  { depth: "25%", engagement: 80 },
  { depth: "50%", engagement: 60 },
  { depth: "75%", engagement: 40 },
  { depth: "100%", engagement: 20 },
]

const contentTypeData = [
  { type: "Text", value: 60 },
  { type: "Video", value: 30 },
  { type: "Image", value: 10 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"]

export function ContentEngagement() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Scroll Depth Heatmap</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={scrollDepthData}>
                <XAxis dataKey="depth" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="engagement" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Content Type Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={contentTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {contentTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

