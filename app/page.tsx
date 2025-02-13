import type { Metadata } from "next"
import { LandingPage } from "@/components/landing-page"

export const metadata: Metadata = {
  title: "Breathee | Home",
  description: "Empower your digital life with mindful browsing and productivity tools",
}

export default function Home() {
  return <LandingPage />
}

