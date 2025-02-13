import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, BarChart2, Zap, Users } from "lucide-react"

const features = [
  {
    title: "Time Tracking",
    description: "Monitor your online activity and gain insights into your digital habits.",
    icon: Clock,
  },
  {
    title: "Productivity Analytics",
    description: "Visualize your productivity trends and identify areas for improvement.",
    icon: BarChart2,
  },
  {
    title: "Focus Mode",
    description: "Boost your concentration with customizable distraction-free sessions.",
    icon: Zap,
  },
  {
    title: "Community Challenges",
    description: "Join like-minded individuals in fun, productivity-boosting challenges.",
    icon: Users,
  },
]

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="bg-blue-50 hover:bg-blue-100 transition-colors duration-300 transform hover:scale-105"
            >
              <CardHeader>
                <feature.icon className="w-10 h-10 text-blue-600 mb-4" />
                <CardTitle className="text-blue-800">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

