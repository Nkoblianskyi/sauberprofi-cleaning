import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { companyInfo } from "@/lib/mock-data"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-background via-card to-muted py-8 lg:py-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/439db3839c94de2c2e04164843b5bfe2.jpg')] opacity-5"></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <CheckCircle className="h-4 w-4" />
                {companyInfo.experience} Erfahrung
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Premium <span className="text-primary">Reinigungsservice</span> in Deutschland
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                {companyInfo.tagline}. Vertrauen Sie auf unsere Expertise für makellose Sauberkeit in Büros, Haushalten
                und Industrieanlagen.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-lg px-8">
                <Link href="/contact">
                  Kostenlos anfragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button variant="outline" size="lg" asChild className="text-lg px-8 bg-transparent">
                <Link href="/services">Unsere Dienstleistungen</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{companyInfo.employees}</div>
                <div className="text-sm text-muted-foreground">Mitarbeiter</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Zufriedene Kunden</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Notfallservice</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-card rounded-3xl p-8 shadow-2xl border border-border">
              <img
                src="/439db3839c94de2c2e04164843b5bfe2.jpg"
                alt="Professionelles Reinigungsteam"
                className="w-full h-auto rounded-2xl"
              />

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-90">Zufriedenheitsgarantie</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
