"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const rewards = [
  {
    id: 1,
    title: "Premium Theme Pack",
    description: "Unlock exclusive app themes",
    points: 500,
    type: "Customization",
  },
  {
    id: 2,
    title: "$5 Gift Card",
    description: "Redeem at popular stores",
    points: 1000,
    type: "Gift Card",
  },
  {
    id: 3,
    title: "Custom Badge",
    description: "Design your own profile badge",
    points: 750,
    type: "Profile",
  },
]

export function RewardsList() {
  const [selectedReward, setSelectedReward] = useState<(typeof rewards)[0] | null>(null)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Available Rewards</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {rewards.map((reward) => (
            <Card key={reward.id}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{reward.title}</h3>
                    <p className="text-sm text-gray-500">{reward.description}</p>
                    <Badge variant="secondary" className="mt-2">
                      {reward.type}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">{reward.points} pts</div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" onClick={() => setSelectedReward(reward)}>
                          Redeem
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Redeem Reward</DialogTitle>
                          <DialogDescription>
                            Are you sure you want to redeem {reward.title} for {reward.points} points?
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex justify-end gap-2">
                          <Button variant="outline">Cancel</Button>
                          <Button>Confirm</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

