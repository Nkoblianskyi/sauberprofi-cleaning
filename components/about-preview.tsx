import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Shield } from "lucide-react"
import Link from "next/link"
import { companyInfo } from "@/lib/mock-data"

export function AboutPreview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
                Über <span className="text-primary">SauberProfi</span>
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed">{companyInfo.description}</p>

              <p className="text-lg text-muted-foreground">
                Unser Erfolgsgeheimnis liegt in der Kombination aus modernster Technik, umweltfreundlichen
                Reinigungsmitteln und einem hochqualifizierten Team, das mit Leidenschaft für Sauberkeit arbeitet.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-background rounded-2xl border border-border">
                <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{companyInfo.experience}</div>
                <div className="text-sm text-muted-foreground">Erfahrung</div>
              </div>

              <div className="text-center p-4 bg-background rounded-2xl border border-border">
                <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{companyInfo.employees}</div>
                <div className="text-sm text-muted-foreground">Mitarbeiter</div>
              </div>

              <div className="text-center p-4 bg-background rounded-2xl border border-border">
                <Shield className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">4</div>
                <div className="text-sm text-muted-foreground">Zertifikate</div>
              </div>
            </div>

            <Button size="lg" asChild>
              <Link href="/about">
                Mehr über uns erfahren
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="relative">
              <img
                src="/7a9b38b2ffb276c1c5b974467ea08c7d.jpg"
                alt="Unser Team bei der Arbeit"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-secondary text-secondary-foreground p-4 rounded-2xl shadow-xl">
                <div className="text-lg font-bold">ISO 9001</div>
                <div className="text-xs opacity-90">Zertifiziert</div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-4 rounded-2xl shadow-xl">
                <div className="text-lg font-bold">Seit {companyInfo.founded}</div>
                <div className="text-xs opacity-90">Ihr Partner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
