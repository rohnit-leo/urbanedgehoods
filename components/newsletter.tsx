"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { createClient } from "@/lib/supabase"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const supabase = createClient()

    try {
      const { error } = await supabase.from("newsletter_subscribers").insert([{ email }])

      if (error) throw error

      setMessage("Thanks for subscribing!")
      setEmail("")
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 bg-zinc-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">STAY IN THE LOOP</h2>
        <p className="text-zinc-400 text-lg mb-8">
          Get early access to drops, exclusive offers, and street culture updates
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-black border-zinc-700 text-white placeholder:text-zinc-500 flex-1"
          />
          <Button
            type="submit"
            disabled={loading}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8"
          >
            {loading ? "SUBSCRIBING..." : "SUBSCRIBE"}
          </Button>
        </form>

        {message && <p className="mt-4 text-sm text-zinc-400">{message}</p>}
      </div>
    </section>
  )
}
