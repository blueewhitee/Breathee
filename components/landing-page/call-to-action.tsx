import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CallToAction() {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Life?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of users who have already improved their online habits and boosted their productivity.
        </p>
        <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
          <Link href="/register">
            Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

