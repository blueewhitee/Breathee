import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/ui/navbar"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Breathee",
  description: "Track and improve your digital well-being",
}

const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Insights", href: "/insights" },
  { name: "Friends", href: "/friends" },
  { name: "Rewards", href: "/rewards" },
  { name: "Challenges", href: "/challenges" },
  { name: "Vibe Insights", href: "/vibe-insights" },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar items={navItems} />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

