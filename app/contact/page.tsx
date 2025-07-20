"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Clock, MapPin, MessageCircle, Instagram, Facebook, Send, User, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setSubmitted(true)
    setLoading(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "general",
    })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 px-6 py-2 text-lg mb-8">
              GET IN TOUCH
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              CONTACT <span className="text-amber-500">US</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-4xl mx-auto leading-relaxed">
              We'd love to hear from you! Whether you have questions, feedback, or want to discuss partnerships, the
              team at UrbanEdge Hoods is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-amber-500">REACH US</h2>
              <p className="text-lg text-zinc-300 mb-12 leading-relaxed">
                Whether you have questions, feedback, or just want to say hello, we're here to assist you with all your
                fashion and sportswear needs.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                    <p className="text-zinc-400 mb-1">support@urbanedgehoods.com</p>
                    <p className="text-sm text-zinc-500">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                    <p className="text-zinc-400 mb-1">+91 7798984147</p>
                    <p className="text-sm text-zinc-500">Available for calls and WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Business Hours</h3>
                    <p className="text-zinc-400 mb-1">Monday to Friday, 10 AM - 6 PM (IST)</p>
                    <p className="text-sm text-zinc-500">Weekend support via email</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                    <p className="text-zinc-400 mb-1">India</p>
                    <p className="text-sm text-zinc-500">Serving customers worldwide</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-zinc-800 to-zinc-900 border-zinc-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-6"
                    >
                      <p className="text-green-400 font-semibold">
                        Thank you for your message! We'll get back to you soon.
                      </p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-zinc-700 border-zinc-600 text-white placeholder-zinc-400"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-2">
                          Phone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-zinc-700 border-zinc-600 text-white placeholder-zinc-400"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-zinc-700 border-zinc-600 text-white placeholder-zinc-400"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-zinc-300 mb-2">
                        Inquiry Type
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full bg-zinc-700 border border-zinc-600 text-white rounded-md px-3 py-2"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="wholesale">Wholesale/Partnership</option>
                        <option value="sportswear">Custom Sportswear</option>
                        <option value="order">Order Support</option>
                        <option value="collaboration">Collaboration</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-zinc-700 border-zinc-600 text-white placeholder-zinc-400"
                        placeholder="Brief subject of your message"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="bg-zinc-700 border-zinc-600 text-white placeholder-zinc-400"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-amber-500 hover:bg-amber-400 text-black font-semibold py-3"
                    >
                      {loading ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media & Quick Contact */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              FOLLOW <span className="text-amber-500">THE UE HOOD</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Stay connected with our community and get the latest updates on new collections and exclusive offers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="bg-gradient-to-br from-pink-500/10 to-purple-600/10 border-pink-500/20 h-full">
                <CardContent className="p-6 text-center">
                  <Instagram className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Instagram</h3>
                  <p className="text-zinc-400 mb-4">@urbanedgehoods</p>
                  <a
                    href="https://instagram.com/urbanedgehoods"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Follow Us
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-blue-500/20 h-full">
                <CardContent className="p-6 text-center">
                  <Facebook className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Facebook</h3>
                  <p className="text-zinc-400 mb-4">Urbanedge Hoods</p>
                  <a
                    href="https://facebook.com/urbanedgehoods"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Like Page
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-500/20 h-full">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                  <p className="text-zinc-400 mb-4">+91 7798984147</p>
                  <a
                    href="https://wa.me/917798984147"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Chat Now
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-gradient-to-br from-amber-500/10 to-red-500/10 border-amber-500/20 h-full">
                <CardContent className="p-6 text-center">
                  <Mail className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-zinc-400 mb-4">Quick Response</p>
                  <a
                    href="mailto:support@urbanedgehoods.com"
                    className="inline-block bg-gradient-to-r from-amber-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Email Us
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500/10 to-red-500/10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              COLLABORATE <span className="text-amber-500">WITH US</span>
            </h2>
            <p className="text-xl text-zinc-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Interested in collaborations, bulk orders, or media inquiries? We're always open to exciting partnerships
              and creative collaborations that align with our brand values.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <User className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Influencer Partnerships</h3>
                <p className="text-zinc-400">Collaborate with us to showcase UrbanEdge Hoods to your audience</p>
              </div>
              <div className="text-center">
                <MessageSquare className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Media Inquiries</h3>
                <p className="text-zinc-400">Press releases, interviews, and media coverage opportunities</p>
              </div>
              <div className="text-center">
                <MessageCircle className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Brand Partnerships</h3>
                <p className="text-zinc-400">Strategic partnerships with complementary brands and businesses</p>
              </div>
            </div>

            <Button className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-4 text-lg">
              <Mail className="h-5 w-5 mr-2" />
              Discuss Collaboration
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
