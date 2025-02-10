"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {theme === "dark" ? (
                <Moon className="w-6 h-6" />
              ) : (
                <Sun className="w-6 h-6" />
              )}
              <span>Theme</span>
            </div>
            <Button
              variant="outline"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              Switch to {theme === "dark" ? "Light" : "Dark"} Mode
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 