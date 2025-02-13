"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const questions = [
  {
    id: 1,
    question: "How often do you feel overwhelmed by your digital habits?",
    options: ["Rarely", "Sometimes", "Often", "Always"],
  },
  {
    id: 2,
    question: "Do you struggle to focus on important tasks due to digital distractions?",
    options: ["Not at all", "Occasionally", "Frequently", "Constantly"],
  },
  {
    id: 3,
    question: "How would you rate your work-life balance in the digital age?",
    options: ["Excellent", "Good", "Fair", "Poor"],
  },
]

export function SelfReflectionQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
  }

  const getRecommendation = () => {
    const score = answers.reduce((total, answer) => {
      switch (answer) {
        case "Rarely":
        case "Not at all":
        case "Excellent":
          return total + 1
        case "Sometimes":
        case "Occasionally":
        case "Good":
          return total + 2
        case "Often":
        case "Frequently":
        case "Fair":
          return total + 3
        case "Always":
        case "Constantly":
        case "Poor":
          return total + 4
        default:
          return total
      }
    }, 0)

    if (score <= 6) {
      return "You're doing great! Our tools can help you maintain your excellent digital habits."
    } else if (score <= 9) {
      return "You're on the right track. Our platform can help you further improve your digital wellness."
    } else {
      return "It seems you could benefit from our digital wellness tools. Let's work together to improve your habits!"
    }
  }

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Digital Wellness Self-Reflection</CardTitle>
        <CardDescription>Take a moment to reflect on your digital habits</CardDescription>
      </CardHeader>
      <CardContent>
        {!showResults ? (
          <>
            <h3 className="text-lg font-semibold mb-4">{questions[currentQuestion].question}</h3>
            <RadioGroup onValueChange={handleAnswer}>
              {questions[currentQuestion].options.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </>
        ) : (
          <div>
            <h3 className="text-lg font-semibold mb-4">Your Digital Wellness Recommendation</h3>
            <p className="mb-4">{getRecommendation()}</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        {showResults && (
          <Button onClick={resetQuiz} variant="outline" className="w-full">
            Retake Quiz
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

