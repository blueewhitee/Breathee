"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ActivityLog } from "./activity-log"
import { Analytics } from "./analytics"

export function MainContent() {
  const [activeTab, setActiveTab] = useState("activity")

  return (
    <Card className="h-[45vh]">
      <CardHeader>
        <CardTitle>Browsing Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
          <TabsList>
            <TabsTrigger value="activity">Activity Log</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="activity" className="h-[calc(45vh-120px)] overflow-auto">
            <ActivityLog />
          </TabsContent>
          <TabsContent value="analytics" className="h-[calc(45vh-120px)] overflow-auto">
            <Analytics />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

