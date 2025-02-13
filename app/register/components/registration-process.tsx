"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import Link from "next/link"
import { Icons } from "@/components/icons"

const steps = [
  {
    title: "Your Digital Habits",
    description: "Let's understand your current digital lifestyle",
    content: (
      <div className="space-y-4">
        <div>
          <Label>How many hours do you spend online daily?</Label>
          <Slider defaultValue={[4]} max={12} step={1} />
        </div>
        <div>
          <Label>What's your primary online activity?</Label>
          <RadioGroup defaultValue="social">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="social" id="social" />
              <Label htmlFor="social">Social Media</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="work" id="work" />
              <Label htmlFor="work">Work/Study</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="entertainment" id="entertainment" />
              <Label htmlFor="entertainment">Entertainment</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    ),
  },
  {
    title: "Your Goals",
    description: "What do you want to achieve with Digital Wellness Hub?",
    content: (
      <div className="space-y-4">
        <div>
          <Label>Select your primary goal:</Label>
          <RadioGroup defaultValue="productivity">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="productivity" id="productivity" />
              <Label htmlFor="productivity">Increase Productivity</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="balance" id="balance" />
              <Label htmlFor="balance">Improve Work-Life Balance</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="focus" id="focus" />
              <Label htmlFor="focus">Enhance Focus</Label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <Label>How committed are you to changing your digital habits?</Label>
          <Slider defaultValue={[7]} max={10} step={1} />
        </div>
      </div>
    ),
  },
  {
    title: "Create Your Account",
    description: "Set up your Digital Wellness Hub account",
    content: (
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="John Doe" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <Button variant="outline" className="w-full" onClick={() => console.log("Google sign up")}>
          <Icons.google className="mr-2 h-4 w-4" />
          Sign up with Google
        </Button>
      </div>
    ),
  },
]

export function RegistrationProcess() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Handle form submission
      console.log("Registration completed")
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>{steps[currentStep].title}</CardTitle>
        <CardDescription>{steps[currentStep].description}</CardDescription>
      </CardHeader>
      <CardContent>{steps[currentStep].content}</CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Button onClick={handleNext}>
          {currentStep === steps.length - 1 ? "Complete Registration" : "Next"}
        </Button>
      </CardFooter>
      {currentStep === steps.length - 1 && (
        <div className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Log in here
          </Link>
        </div>
      )}
    </Card>
  )
}

