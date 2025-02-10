"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Laptop, Chrome, Maximize2 } from "lucide-react"

export function SidePanel() {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <Card
      className={`fixed right-0 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${isExpanded ? "w-64" : "w-12"}`}
    >
      <CardHeader className="p-2">
        <CardTitle className="text-sm flex items-center justify-between">
          {isExpanded && "Device Info"}
          <Button variant="ghost" size="icon" onClick={() => setIsExpanded(!isExpanded)} className="h-8 w-8">
            {isExpanded ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </CardTitle>
      </CardHeader>
      {isExpanded && (
        <CardContent className="p-4 space-y-4">
          <div className="flex items-center space-x-2">
            <Laptop className="h-4 w-4" />
            <span className="text-sm">MacBook Pro</span>
          </div>
          <div className="flex items-center space-x-2">
            <Chrome className="h-4 w-4" />
            <span className="text-sm">Chrome 98.0.4758.102</span>
          </div>
          <div className="flex items-center space-x-2">
            <Maximize2 className="h-4 w-4" />
            <span className="text-sm">1920x1080</span>
          </div>
          <div className="text-sm">
            <strong>Session ID:</strong> ABC123XYZ
          </div>
        </CardContent>
      )}
    </Card>
  )
}

