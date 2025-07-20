"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  shop: [
    { name: "All Products", href: "/collections" },
    { name: "Bomber Jackets", href: "/collections/ue-hoods-bomber-jackets" },
    { name: "Cuban Shirts", href: "/collections/shirts" },
    { name: "Hoodies & Sweatshirts", href: "/collections/sweatshirts-hoodies" },
    { name: "New Arrivals", href: "/collections?filter=new" },
    { name: "Sale Items", href: "/collections?filter=sale" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Brand Works", href: "/brand-works" },
    { name: "Custom Sportswear", href: "/sportswear" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
  ],
  support: [
    { name: "Size Guide", href: "/size-guide" },
    { name: "Shipping Info", href: "/shipping" },
    { name: "Returns & Exchanges", href: "/returns" },
    { name: "FAQ", href: "/faq" },
    { name: "Customer Service", href: "/support" },
    { name: "Track Your Order", href: "/track" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Accessibility", href: "/accessibility" },
  ],
}

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/urbanedgehoods",
    gradient: "from-pink-500 to-purple-600",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/urbanedgehoods",
    gradient: "from-blue-600 to-blue-800",
  },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white relative overflow-hidden border-t border-gray-200">
      {/* Third Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-100 via-yellow-50 to-amber-100 border-b border-amber-200 py-3 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          <span className="inline-block px-8 text-gray-800 font-medium">
            🏆 AWARD-WINNING STREETWEAR BRAND 🏆
          </span>
          <span className="inline-block px-8 text-gray-800 font-medium">
            🌍 SHIPPING WORLDWIDE - MADE IN INDIA 🌍
          </span>
          <span className="inline-block px-8 text-gray-800 font-medium">
            💯 100% AUTHENTIC PRODUCTS GUARANTEED 💯
          </span>
          <span className="inline-block px-8 text-gray-800 font-medium">
            📞 24/7 CUSTOMER SUPPORT AVAILABLE 📞
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-amber-600 bg-clip-text text-transparent mb-4">
              Stay in the Loop
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Get exclusive access to new drops, sales, and style inspiration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:border-amber-500"
              />
              <Button className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white font-bold px-8">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">Join 50,000+ subscribers. Unsubscribe anytime.</p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur-lg opacity-30" />
                  <Image
                    src="/logo-light.png"
                    alt="UrbanEdge Hoods"
                    fill
                    className="object-contain relative z-10"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-amber-600 bg-clip-text text-transparent">
                    UrbanEdge
                  </h1>
                  <p className="text-xs text-amber-600 font-semibold -mt-1">HOODS</p>
                </div>
              </Link>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Redefining urban streetwear with premium quality, unique designs, and authentic style. Join the movement
                and express your individuality.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="w-5 h-5 text-amber-600" />
                  <span>support@urbanedgehoods.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="w-5 h-5 text-amber-600" />
                  <span>+91 7798984147</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <span>Made in India 🇮🇳</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 rounded-full bg-gradient-to-r ${social.gradient} flex items-center justify-center text-white hover:scale-110 transition-transform duration-300`}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="text-gray-900 font-bold text-lg mb-6">Shop</h4>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-amber-600 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-gray-900 font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-amber-600 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-gray-900 font-bold text-lg mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-amber-600 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-gray-900 font-bold text-lg mb-6">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-amber-600 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600 text-sm">© 2024 UrbanEdge Hoods. All rights reserved.</div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>We accept:</span>
                <div className="flex space-x-2">
                  <div className="w-8 h-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded text-white text-xs flex items-center justify-center font-bold">
                    VISA
                  </div>
                  <div className="w-8 h-5 bg-gradient-to-r from-red-600 to-red-800 rounded text-white text-xs flex items-center justify-center font-bold">
                    MC
                  </div>
                  <div className="w-8 h-5 bg-gradient-to-r from-blue-500 to-blue-700 rounded text-white text-xs flex items-center justify-center font-bold">
                    AMEX
                  </div>
                  <div className="w-8 h-5 bg-gradient-to-r from-purple-600 to-purple-800 rounded text-white text-xs flex items-center justify-center font-bold">
                    PP
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
