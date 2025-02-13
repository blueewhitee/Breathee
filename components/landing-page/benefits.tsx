import { CheckCircle } from "lucide-react"

const benefits = [
  "Increase productivity and focus",
  "Reduce digital distractions",
  "Improve work-life balance",
  "Gain valuable insights into your online habits",
  "Foster a healthier relationship with technology",
  "Join a supportive community of like-minded individuals",
]

export function Benefits() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Benefits of Digital Wellness</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

