"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const history = [
  {
    id: 1,
    reward: "Custom Theme Pack",
    date: "2024-02-08",
    points: 500,
    status: "Completed",
  },
  {
    id: 2,
    reward: "$5 Gift Card",
    date: "2024-02-05",
    points: 1000,
    status: "Processing",
  },
  {
    id: 3,
    reward: "Profile Badge",
    date: "2024-02-01",
    points: 750,
    status: "Completed",
  },
]

const statusColors = {
  Completed: "bg-green-100 text-green-600",
  Processing: "bg-yellow-100 text-yellow-600",
}

export function RedeemHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Redemption History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {history.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-medium">{item.reward}</h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
              <div className="text-right">
                <div className="font-medium text-gray-500">-{item.points} pts</div>
                <Badge variant="secondary" className={statusColors[item.status as keyof typeof statusColors]}>
                  {item.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

