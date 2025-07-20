"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, XCircle, Loader2, Package, Truck, CreditCard } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import confetti from "canvas-confetti"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  status: "loading" | "success" | "error"
  orderDetails?: {
    orderId: string
    amount: number
    productName: string
  }
  errorMessage?: string
}

export default function PaymentModal({ isOpen, onClose, status, orderDetails, errorMessage }: PaymentModalProps) {
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    if (status === "success" && isOpen) {
      // Trigger confetti animation
      const duration = 3000
      const animationEnd = Date.now() + duration
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min
      }

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now()

        if (timeLeft <= 0) {
          return clearInterval(interval)
        }

        const particleCount = 50 * (timeLeft / duration)
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          }),
        )
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          }),
        )
      }, 250)

      return () => clearInterval(interval)
    }
  }, [status, isOpen])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md"
        >
          <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
            <CardContent className="p-0">
              {status === "loading" && (
                <div className="text-center py-12 px-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="inline-block mb-6"
                  >
                    <Loader2 className="h-16 w-16 text-amber-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">Processing Payment</h3>
                  <p className="text-zinc-400">Please wait while we process your payment securely...</p>
                  <div className="mt-6 flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              )}

              {status === "success" && (
                <div className="text-center py-8 px-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="inline-block mb-6"
                  >
                    <div className="relative">
                      <CheckCircle className="h-20 w-20 text-green-500" />
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1.2, opacity: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute inset-0 border-4 border-green-500 rounded-full"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-3xl font-bold text-white mb-2">Payment Successful! 🎉</h3>
                    <p className="text-green-400 text-lg mb-6">Your order has been confirmed</p>

                    {orderDetails && (
                      <div className="bg-zinc-800/50 rounded-xl p-6 mb-6 text-left">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-zinc-400">Order ID:</span>
                          <span className="text-white font-mono text-sm">{orderDetails.orderId}</span>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-zinc-400">Product:</span>
                          <span className="text-white text-sm">{orderDetails.productName}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-zinc-400">Amount Paid:</span>
                          <span className="text-amber-500 font-bold text-lg">₹{orderDetails.amount}</span>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <CreditCard className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                        <p className="text-xs text-zinc-400">Payment Confirmed</p>
                      </div>
                      <div className="text-center">
                        <Package className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                        <p className="text-xs text-zinc-400">Order Processing</p>
                      </div>
                      <div className="text-center">
                        <Truck className="h-8 w-8 text-zinc-500 mx-auto mb-2" />
                        <p className="text-xs text-zinc-400">Ships Soon</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button
                        onClick={() => setShowDetails(!showDetails)}
                        variant="outline"
                        className="w-full border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black"
                      >
                        {showDetails ? "Hide Details" : "View Order Details"}
                      </Button>
                      <Button
                        onClick={onClose}
                        className="w-full bg-amber-500 hover:bg-amber-400 text-black font-semibold"
                      >
                        Continue Shopping
                      </Button>
                    </div>
                  </motion.div>
                </div>
              )}

              {status === "error" && (
                <div className="text-center py-8 px-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="inline-block mb-6"
                  >
                    <XCircle className="h-20 w-20 text-red-500" />
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-3xl font-bold text-white mb-2">Payment Failed</h3>
                    <p className="text-red-400 text-lg mb-4">Something went wrong with your payment</p>

                    {errorMessage && (
                      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6">
                        <p className="text-red-400 text-sm">{errorMessage}</p>
                      </div>
                    )}

                    <div className="space-y-3">
                      <Button
                        onClick={onClose}
                        className="w-full bg-amber-500 hover:bg-amber-400 text-black font-semibold"
                      >
                        Try Again
                      </Button>
                      <Button
                        onClick={onClose}
                        variant="outline"
                        className="w-full border-zinc-600 text-zinc-400 bg-transparent"
                      >
                        Back to Product
                      </Button>
                    </div>
                  </motion.div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
