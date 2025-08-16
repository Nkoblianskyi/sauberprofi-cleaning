import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Building, Home, Sparkles } from "lucide-react"
import Link from "next/link"
import { services } from "@/lib/mock-data"

const iconMap = {
  building: Building,
  home: Home,
  sparkles: Sparkles,
}

export function ServicesPreview() {
  const featuredServices = services.slice(0, 3)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Unsere <span className="text-primary">Dienstleistungen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Von der Büroreinigung bis zur Industriereinigung - wir bieten maßgeschneiderte Lösungen für jeden Bedarf.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Building

            return (
              <Card
                key={service.id}
                className={`group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br ${
                  index === 0
                    ? "from-primary/5 to-primary/10"
                    : index === 1
                      ? "from-secondary/5 to-secondary/10"
                      : "from-accent/5 to-accent/10"
                } hover:scale-105`}
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                      index === 0
                        ? "bg-primary text-primary-foreground"
                        : index === 1
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-accent text-accent-foreground"
                    }`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.shortDescription}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    asChild
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <Link href={`/services/${service.id}`}>
                      Mehr erfahren
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/services">
              Alle Dienstleistungen ansehen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
