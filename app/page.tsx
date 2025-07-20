import Hero from "@/components/hero"
import FeaturedProducts from "@/components/featured-products"
import Collections from "@/components/collections"
import Newsletter from "@/components/newsletter"
import TrustBadges from "@/components/trust-badges"
import WhyChooseUs from "@/components/why-choose-us"
import StatsSection from "@/components/stats-section"
import Testimonials from "@/components/testimonials"
import InstagramFeed from "@/components/instagram-feed"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <TrustBadges />
      <FeaturedProducts />
      <WhyChooseUs />
      <Collections />
      <StatsSection />
      <Testimonials />
      <InstagramFeed />
      <Newsletter />
    </main>
  )
}
