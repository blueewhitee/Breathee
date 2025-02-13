"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/ui/navbar"
import { usePathname } from 'next/navigation'
import Link from "next/link"

const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Insights", href: "/insights" },
  { name: "Friends", href: "/friends" },
  { name: "Rewards", href: "/rewards" },
  { name: "Challenges", href: "/challenges" },
  { name: "Vibe Insights", href: "/vibe-insights" },
]

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isLandingPage = pathname === '/'
  const isAuthPage = ['/login', '/register'].includes(pathname)

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {isAuthPage ? (
        // Minimal header for auth pages
        <header className="sticky top-0 z-10 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Breathee
            </Link>
          </div>
        </header>
      ) : (
        // Full Navbar for other pages (except landing page)
        !isLandingPage && <Navbar items={navItems} />
      )}
      <main>{children}</main>
    </ThemeProvider>
  )
} 