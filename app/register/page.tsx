import type { Metadata } from "next"
import { RegistrationProcess } from "./components/registration-process"

export const metadata: Metadata = {
  title: "Register | Digital Wellness Hub",
  description: "Join Digital Wellness Hub and start your journey to better digital habits",
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12">
      <RegistrationProcess />
    </div>
  )
}

