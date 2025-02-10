"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const moods = [
  { emoji: "😊", label: "Vibing" },
  { emoji: "🔥", label: "On Fire" },
  { emoji: "😴", label: "Sleepy" },
  { emoji: "🤔", label: "Confused" },
  { emoji: "😤", label: "Grinding" },
  { emoji: "🥳", label: "Celebrating" },
]

export function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState(moods[0])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="text-xl p-6 h-auto hover:bg-gray-100 dark:hover:bg-gray-800">
          <motion.div
            key={selectedMood.emoji}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex items-center gap-2"
          >
            <span>{selectedMood.emoji}</span>
            <span className="text-sm font-normal">{selectedMood.label}</span>
          </motion.div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2">
        <div className="grid grid-cols-3 gap-2">
          {moods.map((mood) => (
            <DropdownMenuItem
              key={mood.label}
              onClick={() => setSelectedMood(mood)}
              className="flex flex-col items-center justify-center p-3 cursor-pointer"
            >
              <span className="text-2xl">{mood.emoji}</span>
              <span className="text-xs mt-1">{mood.label}</span>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

