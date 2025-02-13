import {  Headerlanding } from "./landing-page/header"
import { Hero } from "./landing-page/hero"
import { Features } from "./landing-page/features"
import { Benefits } from "./landing-page/benefits"
import { Testimonials } from "./landing-page/testimonials"
import { CallToAction } from "./landing-page/call-to-action"
import { Footer } from "./landing-page/footer"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 font-sans">
      <Headerlanding />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

