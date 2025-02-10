import type { Metadata } from "next"
import { TestPage } from "./components/test-page"

export const metadata: Metadata = {
  title: "Browsing Analytics | Breathee",
  description: "Analyze your browsing behavior and engagement",
}

export default function TestPageRoute() {
  return <TestPage />
}

