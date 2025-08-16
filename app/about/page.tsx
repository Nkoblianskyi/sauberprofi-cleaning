import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, Users, Calendar, Shield, Heart, Target, Lightbulb, CheckCircle, Star } from "lucide-react"
import Link from "next/link"
import { companyInfo } from "@/lib/mock-data"

export default function AboutPage() {
  const milestones = [
    { year: "2009", title: "Gründung", description: "Start als kleines Familienunternehmen in München" },
    { year: "2012", title: "Expansion", description: "Erweiterung auf 5 deutsche Großstädte" },
    { year: "2015", title: "ISO Zertifizierung", description: "Erhalt der ISO 9001:2015 Qualitätszertifizierung" },
    { year: "2018", title: "Digitalisierung", description: "Einführung modernster Reinigungstechnologien" },
    { year: "2021", title: "Nachhaltigkeit", description: "100% umweltfreundliche Reinigungsmittel" },
    { year: "2025", title: "Marktführer", description: "Über 1000 zufriedene Kunden deutschlandweit" },
  ]

  const values = [
    {
      icon: Heart,
      title: "Leidenschaft",
      description: "Wir lieben was wir tun und setzen uns mit vollem Herzen für makellose Sauberkeit ein.",
      color: "text-red-500",
      bg: "bg-red-50",
    },
    {
      icon: Target,
      title: "Präzision",
      description: "Jedes Detail zählt. Wir arbeiten systematisch und gründlich für perfekte Ergebnisse.",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Modernste Technologien und Methoden für effiziente und nachhaltige Reinigung.",
      color: "text-secondary",
      bg: "bg-secondary/10",
    },
    {
      icon: Shield,
      title: "Vertrauen",
      description: "Zuverlässigkeit und Diskretion sind die Grundpfeiler unserer Kundenbeziehungen.",
      color: "text-accent",
      bg: "bg-accent/10",
    },
  ]

  const team = [
    {
      name: "Michael Weber",
      role: "Geschäftsführer & Gründer",
      experience: "15+ Jahre",
      specialty: "Unternehmensführung & Qualitätssicherung",
    },
    {
      name: "Sarah Schmidt",
      role: "Leiterin Kundenservice",
      experience: "8 Jahre",
      specialty: "Kundenbetreuung & Projektmanagement",
    },
    {
      name: "Thomas Müller",
      role: "Technischer Leiter",
      experience: "12 Jahre",
      specialty: "Reinigungstechnologien & Schulungen",
    },
    {
      name: "Anna Hoffmann",
      role: "Qualitätsmanagerin",
      experience: "6 Jahre",
      specialty: "Qualitätskontrolle & Zertifizierungen",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section with Diagonal Design */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent transform skew-x-12 origin-top-right"></div>

          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    <Calendar className="h-4 w-4" />
                    Seit {companyInfo.founded}
                  </div>

                  <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                    Unsere <span className="text-primary">Geschichte</span> beginnt mit einer Vision
                  </h1>

                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Was als kleines Familienunternehmen begann, ist heute Deutschlands vertrauenswürdigster
                    Reinigungsservice. Erfahren Sie, wie Leidenschaft für Sauberkeit zu unserem Erfolg wurde.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-background/80 backdrop-blur-sm rounded-2xl border border-border">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{companyInfo.employees}</div>
                    <div className="text-sm text-muted-foreground">Mitarbeiter</div>
                  </div>

                  <div className="text-center p-4 bg-background/80 backdrop-blur-sm rounded-2xl border border-border">
                    <Award className="h-8 w-8 text-secondary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">4</div>
                    <div className="text-sm text-muted-foreground">Zertifikate</div>
                  </div>

                  <div className="text-center p-4 bg-background/80 backdrop-blur-sm rounded-2xl border border-border">
                    <Star className="h-8 w-8 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">1000+</div>
                    <div className="text-sm text-muted-foreground">Kunden</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative">
                  <img
                    src="/7a9b38b2ffb276c1c5b974467ea08c7d.jpg"
                    alt="Unser Team"
                    className="w-full h-auto rounded-3xl shadow-2xl"
                  />

                  {/* Floating elements */}
                  <div className="absolute -top-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl transform -rotate-6">
                    <div className="text-2xl font-bold">{companyInfo.experience}</div>
                    <div className="text-sm opacity-90">Erfahrung</div>
                  </div>

                  <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-2xl shadow-xl transform rotate-6">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm opacity-90">Zufriedenheit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        

        {/* Values Section with Creative Layout */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Unsere <span className="text-primary">Werte</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Diese Grundsätze leiten uns in allem, was wir tun, und machen uns zu dem vertrauenswürdigen Partner, der
                wir heute sind.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon

                return (
                  <Card
                    key={value.title}
                    className={`group hover:shadow-2xl transition-all duration-300 border-0 ${
                      index % 2 === 0 ? "md:transform md:translate-y-8" : ""
                    } hover:scale-105`}
                  >
                    <CardContent className="p-8">
                      <div className={`w-20 h-20 rounded-full ${value.bg} flex items-center justify-center mb-6`}>
                        <Icon className={`h-10 w-10 ${value.color}`} />
                      </div>

                      <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>

                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Unser <span className="text-primary">Führungsteam</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Lernen Sie die Experten kennen, die SauberProfi zu dem machen, was es heute ist.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card
                  key={member.name}
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-background/80 backdrop-blur-sm hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white ${
                        index % 4 === 0
                          ? "bg-primary"
                          : index % 4 === 1
                            ? "bg-secondary"
                            : index % 4 === 2
                              ? "bg-accent"
                              : "bg-muted-foreground"
                      }`}
                    >
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                    <div className="text-primary font-medium mb-2">{member.role}</div>
                    <div className="text-sm text-muted-foreground mb-3">{member.experience}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{member.specialty}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Unsere <span className="text-primary">Zertifizierungen</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Qualität und Sicherheit stehen bei uns an erster Stelle. Unsere Zertifizierungen belegen unser
                Engagement für höchste Standards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {companyInfo.certifications.map((cert, index) => (
                <Card
                  key={cert}
                  className="group hover:shadow-lg transition-all duration-300 border-0 bg-background text-center hover:scale-105"
                >
                  <CardContent className="p-6">
                    <CheckCircle
                      className={`h-12 w-12 mx-auto mb-4 ${
                        index % 4 === 0
                          ? "text-primary"
                          : index % 4 === 1
                            ? "text-secondary"
                            : index % 4 === 2
                              ? "text-accent"
                              : "text-muted-foreground"
                      }`}
                    />
                    <h3 className="font-bold text-foreground">{cert}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Werden Sie Teil unserer Erfolgsgeschichte</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam für die Sauberkeit sorgen, die Sie verdienen. Kontaktieren Sie uns noch heute.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Jetzt Kontakt aufnehmen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
