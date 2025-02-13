import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { SelfReflectionQuiz } from "./self-reflection-quiz"
import Link from "next/link"

export function Hero() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Empower Your Digital Life
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover a more mindful and productive online experience with our cutting-edge digital wellness tools.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
          <Link href="/register">
            Get Started 
            </Link> 
            </Button>
        </div>
        <div className="mt-12">
          <SelfReflectionQuiz />
        </div>
      </div>
    </section>
  )
}

