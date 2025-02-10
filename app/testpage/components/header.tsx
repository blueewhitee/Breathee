"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DateRangePicker } from "@/components/ui/date-range-picker"
import { RefreshCcw } from "lucide-react"

interface HeaderProps {
  dateRange: { from: Date; to: Date }
  setDateRange: (range: { from: Date; to: Date }) => void
  onRefresh: () => void
  isLoading: boolean
}

export function Header({ dateRange, setDateRange, onRefresh, isLoading }: HeaderProps) {
  return (
    <Card className="sticky top-0 z-10 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 h-[10vh] flex items-center justify-between">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Browsing Analytics 📊
        </h1>
        <div className="flex items-center space-x-4">
          <DateRangePicker from={dateRange.from} to={dateRange.to} onSelect={setDateRange} />
          <Button onClick={onRefresh} disabled={isLoading} className="bg-blue-600 hover:bg-blue-700 text-white">
            <RefreshCcw className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>
      </div>
    </Card>
  )
}

