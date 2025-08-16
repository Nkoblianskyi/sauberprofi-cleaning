import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Cookie, Shield, Settings, Info } from "lucide-react"
import Link from "next/link"
import { companyInfo } from "@/lib/mock-data"

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      icon: Shield,
      title: "Notwendige Cookies",
      description: "Diese Cookies sind für das Funktionieren der Website unerlässlich.",
      examples: ["Sitzungs-IDs", "Sicherheits-Tokens", "Spracheinstellungen"],
      duration: "Sitzung oder bis zu 1 Jahr",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Settings,
      title: "Funktionale Cookies",
      description: "Diese Cookies ermöglichen erweiterte Funktionalitäten und Personalisierung.",
      examples: ["Benutzereinstellungen", "Formulardaten", "Chat-Verlauf"],
      duration: "Bis zu 2 Jahre",
      color: "text-secondary",
      bg: "bg-secondary/10",
    },
    {
      icon: Info,
      title: "Analytische Cookies",
      description: "Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen.",
      examples: ["Seitenaufrufe", "Verweildauer", "Klickverhalten"],
      duration: "Bis zu 2 Jahre",
      color: "text-accent",
      bg: "bg-accent/10",
    },
  ]

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
              <span className="text-foreground">Cookie-Richtlinie</span>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Cookie className="h-10 w-10 text-primary" />
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Cookie-<span className="text-primary">Richtlinie</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Transparenz über die Verwendung von Cookies auf unserer Website. Erfahren Sie, welche Daten wir sammeln
                und wie wir sie verwenden.
              </p>

              <Button variant="outline" asChild className="bg-transparent">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Zurück zur Startseite
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                Arten von <span className="text-primary">Cookies</span>
              </h2>

              <div className="space-y-8">
                {cookieTypes.map((type, index) => {
                  const Icon = type.icon

                  return (
                    <Card key={type.title} className="border-0 bg-gradient-to-r from-card to-muted/30">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-6">
                          <div
                            className={`w-16 h-16 rounded-2xl ${type.bg} flex items-center justify-center flex-shrink-0`}
                          >
                            <Icon className={`h-8 w-8 ${type.color}`} />
                          </div>

                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-foreground mb-4">{type.title}</h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">{type.description}</p>

                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold text-foreground mb-2">Beispiele:</h4>
                                <ul className="space-y-1">
                                  {type.examples.map((example, idx) => (
                                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                                      <div
                                        className={`w-1.5 h-1.5 rounded-full ${type.color.replace("text-", "bg-")}`}
                                      ></div>
                                      {example}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-semibold text-foreground mb-2">Speicherdauer:</h4>
                                <p className="text-sm text-muted-foreground">{type.duration}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Policy */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
              <Card className="border-0 bg-background">
                <CardContent className="p-8 space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-6">Was sind Cookies?</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Cookies sind kleine Textdateien, die auf Ihrem Computer oder mobilen Gerät gespeichert werden,
                      wenn Sie unsere Website besuchen. Sie ermöglichen es der Website, Ihre Aktionen und Präferenzen
                      über einen bestimmten Zeitraum zu speichern, sodass Sie diese nicht bei jedem Besuch der Website
                      oder beim Navigieren von einer Seite zur anderen erneut eingeben müssen.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-6">Wie verwenden wir Cookies?</h2>
                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        Wir verwenden Cookies für verschiedene Zwecke, um Ihre Erfahrung auf unserer Website zu
                        verbessern:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">
                            <strong>Funktionalität:</strong> Speicherung Ihrer Präferenzen und Einstellungen
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">
                            <strong>Sicherheit:</strong> Schutz vor betrügerischen Aktivitäten und Verbesserung der
                            Sicherheit
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">
                            <strong>Analyse:</strong> Verständnis der Website-Nutzung zur Verbesserung unserer
                            Dienstleistungen
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">
                            <strong>Personalisierung:</strong> Anpassung von Inhalten an Ihre Interessen
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-6">Ihre Cookie-Einstellungen</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Sie haben die volle Kontrolle über die Verwendung von Cookies auf unserer Website. Sie können Ihre
                      Einstellungen jederzeit ändern oder Cookies vollständig deaktivieren. Beachten Sie jedoch, dass
                      dies die Funktionalität der Website beeinträchtigen kann.
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-foreground">Cookie-Verwaltung im Browser:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">
                            <strong>Chrome:</strong> Einstellungen → Datenschutz und Sicherheit → Cookies
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">
                            <strong>Firefox:</strong> Einstellungen → Datenschutz & Sicherheit → Cookies
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">
                            <strong>Safari:</strong> Einstellungen → Datenschutz → Cookies verwalten
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-6">Kontakt</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, kontaktieren Sie uns gerne:
                    </p>
                    <div className="mt-4 space-y-2">
                      <p className="text-muted-foreground">
                        <strong>E-Mail:</strong> {companyInfo.contact.email}
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Telefon:</strong> {companyInfo.contact.phone}
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Adresse:</strong> {companyInfo.address.street}, {companyInfo.address.postal}{" "}
                        {companyInfo.address.city}, {companyInfo.address.country}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <p className="text-sm text-muted-foreground">
                      <strong>Letzte Aktualisierung:</strong> 16. Januar 2025
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
