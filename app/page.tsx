import { Hero } from "@/components/hero"
import { ServicesPreview } from "@/components/services-preview"
import { AboutPreview } from "@/components/about-preview"
import { Advantages } from "@/components/advantages"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { InteractiveSection } from "@/components/interactive-section"
import { ServiceAreaChecker } from "@/components/service-area-checker"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { FAQAccordion } from "@/components/faq-accordion"
import { CookieBanner } from "@/components/cookie-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ServicesPreview />
        <AboutPreview />
        <Advantages />

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <TestimonialCarousel />
          </div>
        </section>


        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <BeforeAfterSlider />
          </div>
        </section>

        <InteractiveSection />

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <ServiceAreaChecker />
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <FAQAccordion />
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
