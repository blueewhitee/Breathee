"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, UserPlus } from "lucide-react"

const friends = [
  { id: 1, name: "Sarah K.", status: "Grinding", avatar: "/placeholder.svg?height=40&width=40", online: true },
  { id: 2, name: "Alex M.", status: "Vibing", avatar: "/placeholder.svg?height=40&width=40", online: true },
  { id: 3, name: "Jordan P.", status: "On Fire", avatar: "/placeholder.svg?height=40&width=40", online: false },
  { id: 4, name: "Taylor R.", status: "Sleepy", avatar: "/placeholder.svg?height=40&width=40", online: true },
]

export function FriendsList() {
  const [search, setSearch] = useState("")

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Friends
          <Button size="sm" variant="outline">
            <UserPlus className="w-4 h-4 mr-2" />
            Add Friend
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search friends..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="space-y-4">
          {friends.map((friend) => (
            <div key={friend.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
              <div className="relative">
                <img src={friend.avatar || "/placeholder.svg"} alt={friend.name} className="w-10 h-10 rounded-full" />
                {friend.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                )}
              </div>
              <div className="flex-1">
                <div className="font-medium">{friend.name}</div>
                <div className="text-sm text-gray-500">{friend.status}</div>
              </div>
              <Badge variant="secondary">{friend.online ? "Online" : "Offline"}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

