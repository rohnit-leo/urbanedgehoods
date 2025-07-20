"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createClient } from "@/lib/supabase"

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const router = useRouter()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setMessage("")

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setLoading(false)
      return
    }

    const supabase = createClient()

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      })

      if (error) throw error

      setMessage("Check your email for the confirmation link!")
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">CREATE ACCOUNT</h2>
          <p className="mt-2 text-zinc-400">Join the UrbanEdge community</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-6">
          <div>
            <Label htmlFor="fullName" className="text-white">
              Full Name
            </Label>
            <Input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="mt-1 bg-zinc-900 border-zinc-700 text-white"
              placeholder="Your full name"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 bg-zinc-900 border-zinc-700 text-white"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-white">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 bg-zinc-900 border-zinc-700 text-white"
              placeholder="••••••••"
            />
          </div>

          <div>
            <Label htmlFor="confirmPassword" className="text-white">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="mt-1 bg-zinc-900 border-zinc-700 text-white"
              placeholder="••••••••"
            />
          </div>

          {error && <div className="text-red-500 text-sm">{error}</div>}

          {message && <div className="text-green-500 text-sm">{message}</div>}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
          >
            {loading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
          </Button>
        </form>

        <div className="text-center">
          <p className="text-zinc-400">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-red-500 hover:text-red-400">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
