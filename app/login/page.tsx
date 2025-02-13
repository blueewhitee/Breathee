import type { Metadata } from "next"
import { LoginForm } from "./components/login-form"

export const metadata: Metadata = {
  title: "Login | Digital Wellness Hub",
  description: "Log in to your Digital Wellness Hub account",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center">
      <LoginForm />
    </div>
  )
}

