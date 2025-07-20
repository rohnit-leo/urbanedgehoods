import Header from "@/components/header"
import Hero from "@/components/hero"
import FeaturedProducts from "@/components/featured-products"
import TrustBadges from "@/components/trust-badges"
import WhyChooseUs from "@/components/why-choose-us"
import StatsSection from "@/components/stats-section"
import Testimonials from "@/components/testimonials"
import InstagramFeed from "@/components/instagram-feed"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedProducts />
      <TrustBadges />
      <WhyChooseUs />
      <StatsSection />
      <Testimonials />
      <InstagramFeed />
      <Footer />
    </main>
  )
}
