"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin, ArrowRight, Heart } from "lucide-react"

const footerLinks = {
  shop: [
    { name: "UE Hoods Bomber Jackets", href: "/collections/ue-hoods-bomber-jackets" },
    { name: "Cuban Collar Shirts", href: "/collections/shirts" },
    { name: "Sweatshirts & Hoodies", href: "/collections/sweatshirts-hoodies" },
    { name: "All Collections", href: "/collections" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Brand Works & Partnerships", href: "/brand-works" },
    { name: "Custom Sportswear", href: "/sportswear" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "Size Guide", href: "/size-guide" },
    { name: "Shipping Info", href: "/shipping" },
    { name: "Returns & Exchanges", href: "/returns" },
    { name: "Care Instructions", href: "/care" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Refund Policy", href: "/refund" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
}

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/urbanedgehoods", color: "hover:text-pink-500" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/urbanedgehoods", color: "hover:text-blue-500" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/urbanedgehoods", color: "hover:text-blue-400" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/urbanedgehoods", color: "hover:text-red-500" },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 border-b border-amber-500">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-center text-center">
            <p className="text-sm font-medium text-white">
              💌 <span className="font-bold">SUBSCRIBE</span> to our newsletter and get 10% OFF your first order +
              exclusive drops
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/logo-dark.png" alt="UrbanEdge Hoods" width={50} height={50} className="object-contain" />
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-amber-400 to-white bg-clip-text text-transparent">
                  URBANEDGE
                </h3>
                <p className="text-xs text-gray-400 font-medium tracking-wider">PREMIUM STREETWEAR</p>
              </div>
            </Link>

            <p className="text-gray-300 leading-relaxed">
              Redefining streetwear with premium quality, authentic designs, and unmatched style. Join our community of
              urban fashion enthusiasts.
            </p>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 flex-1"
                />
                <Button className="bg-amber-500 hover:bg-amber-600 text-black px-4">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-400">Get 10% off your first order when you subscribe</p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-gray-700`}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Shop Links */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Shop</h4>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5 text-black" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email Us</p>
                <p className="text-white font-medium">hello@urbanedgehoods.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                <Phone className="h-5 w-5 text-black" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Call Us</p>
                <p className="text-white font-medium">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                <MapPin className="h-5 w-5 text-black" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Visit Us</p>
                <p className="text-white font-medium">Mumbai, India</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-gray-400 text-sm">© 2024 UrbanEdge Hoods. All rights reserved.</p>
            <div className="flex items-center space-x-4 text-sm">
              {footerLinks.legal.map((link, index) => (
                <span key={link.name} className="flex items-center">
                  <Link href={link.href} className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                    {link.name}
                  </Link>
                  {index < footerLinks.legal.length - 1 && <span className="text-gray-600 ml-4">|</span>}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
