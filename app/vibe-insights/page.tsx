import type { Metadata } from "next"
import { VibeInsights } from "./components/vibe-insights"
import { PageTransition } from "@/components/ui/page-transition"

export const metadata: Metadata = {
  title: "Vibe Insights | Breathee",
  description: "Dive deep into your browsing insights and digital habits",
}

export default function VibeInsightsPage() {
  return (
    <PageTransition>
      <VibeInsights />
    </PageTransition>
  )
}

