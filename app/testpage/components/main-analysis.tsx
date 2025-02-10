"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UrlTimeAnalysis } from "./url-time-analysis"
import { ContentEngagement } from "./content-engagement"

export function MainAnalysis() {
  const [activeTab, setActiveTab] = useState("url-time")

  return (
    <Card className="h-[45vh]">
      <CardHeader>
        <CardTitle>Browsing Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
          <TabsList>
            <TabsTrigger value="url-time">URL & Time Analysis</TabsTrigger>
            <TabsTrigger value="content-engagement">Content Engagement</TabsTrigger>
          </TabsList>
          <TabsContent value="url-time" className="h-[calc(45vh-120px)] overflow-auto">
            <UrlTimeAnalysis />
          </TabsContent>
          <TabsContent value="content-engagement" className="h-[calc(45vh-120px)] overflow-auto">
            <ContentEngagement />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

