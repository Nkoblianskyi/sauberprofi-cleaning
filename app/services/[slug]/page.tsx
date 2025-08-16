import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock,
  Calendar,
  Star,
  Building,
  Home,
  Sparkles,
  Factory,
  AppWindowIcon as Window,
  CarIcon as Carpet,
} from "lucide-react"
import Link from "next/link"
import { services, testimonials } from "@/lib/mock-data"
import { notFound } from "next/navigation"

const iconMap = {
  building: Building,
  home: Home,
  sparkles: Sparkles,
  factory: Factory,
  window: Window,
  carpet: Carpet,
}

const categoryColors = {
  buero: "bg-primary/10 text-primary border-primary/20",
  haushalt: "bg-secondary/10 text-secondary border-secondary/20",
  spezial: "bg-accent/10 text-accent border-accent/20",
  industrie: "bg-muted text-muted-foreground border-muted/20",
}

interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.id === params.slug)

  if (!service) {
    notFound()
  }

  const Icon = iconMap[service.icon as keyof typeof iconMap] || Building
  const relatedServices = services.filter((s) => s.id !== service.id && s.category === service.category).slice(0, 2)
  const serviceTestimonials = testimonials
    .filter((t) => t.service.toLowerCase().includes(service.title.toLowerCase()))
    .slice(0, 2)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Breadcrumb */}
        <section className="py-6 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Startseite
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-primary transition-colors">
                Dienstleistungen
              </Link>
              <span>/</span>
              <span className="text-foreground">{service.title}</span>
            </div>
          </div>
        </section>

        {/* Service Hero */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" asChild className="bg-transparent">
                    <Link href="/services">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Zurück zu Services
                    </Link>
                  </Button>

                  <Badge className={categoryColors[service.category]}>
                    {service.category === "buero" && "Büroreinigung"}
                    {service.category === "haushalt" && "Haushaltsreinigung"}
                    {service.category === "spezial" && "Spezialreinigung"}
                    {service.category === "industrie" && "Industriereinigung"}
                  </Badge>
                </div>

                <div className="space-y-6">
                  <h1 className="text-4xl lg:text-6xl font-bold text-foreground">{service.title}</h1>

                  <p className="text-xl text-muted-foreground leading-relaxed">{service.description}</p>
                </div>

                {/* Service Details */}
                <div className="flex flex-wrap gap-6">
                  {service.duration && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="font-medium">Dauer: {service.duration}</span>
                    </div>
                  )}

                  {service.frequency && service.frequency.length > 0 && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-5 w-5 text-secondary" />
                      <span className="font-medium">Verfügbar: {service.frequency.join(", ")}</span>
                    </div>
                  )}
                </div>

                <Button size="lg" asChild>
                  <Link href="/contact">
                    Kostenloses Angebot anfordern
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
                Was ist <span className="text-primary">inbegriffen</span>?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {service.features.map((feature, index) => (
                  <Card
                    key={index}
                    className="border-0 bg-gradient-to-r from-card to-muted/30 hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{feature}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">
                Unser <span className="text-primary">Ablauf</span>
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Beratung & Angebot</h3>
                  <p className="text-muted-foreground">
                    Kostenlose Beratung vor Ort und individuelles Angebot nach Ihren Wünschen.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Terminplanung</h3>
                  <p className="text-muted-foreground">
                    Flexible Terminvereinbarung nach Ihrem Zeitplan - auch außerhalb der Geschäftszeiten.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Professionelle Reinigung</h3>
                  <p className="text-muted-foreground">
                    Unser geschultes Team führt die Reinigung mit modernster Technik und Qualitätskontrolle durch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {serviceTestimonials.length > 0 && (
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
                  Kundenbewertungen für <span className="text-primary">{service.title}</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {serviceTestimonials.map((testimonial) => (
                    <Card key={testimonial.id} className="border-0 bg-gradient-to-br from-card to-muted/30">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                          ))}
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                        <div className="border-t border-border pt-4">
                          <div className="font-semibold text-foreground">{testimonial.name}</div>
                          {testimonial.company && (
                            <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                          )}
                          <div className="text-sm text-primary mt-1">{testimonial.location}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
                  Ähnliche <span className="text-primary">Dienstleistungen</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {relatedServices.map((relatedService, index) => {
                    const RelatedIcon = iconMap[relatedService.icon as keyof typeof iconMap] || Building

                    return (
                      <Card
                        key={relatedService.id}
                        className="group hover:shadow-xl transition-all duration-300 border-0 bg-background hover:scale-105"
                      >
                        <CardContent className="p-8">
                          <div
                            className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                              index % 2 === 0
                                ? "bg-secondary text-secondary-foreground"
                                : "bg-accent text-accent-foreground"
                            }`}
                          >
                            <RelatedIcon className="h-8 w-8" />
                          </div>

                          <h3 className="text-2xl font-bold text-foreground mb-4">{relatedService.title}</h3>

                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {relatedService.shortDescription}
                          </p>

                          <Button
                            asChild
                            variant="outline"
                            className="bg-transparent group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                          >
                            <Link href={`/services/${relatedService.id}`}>
                              Mehr erfahren
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Bereit für {service.title}?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Kontaktieren Sie uns noch heute für ein kostenloses, unverbindliches Angebot. Unser Expertenteam berät Sie
              gerne zu allen Aspekten der {service.title}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Kostenlos anfragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/services">Alle Services ansehen</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }))
}
