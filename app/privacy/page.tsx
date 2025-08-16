import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Eye, FileText, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { companyInfo } from "@/lib/mock-data"

export default function PrivacyPolicyPage() {
  const dataTypes = [
    {
      icon: FileText,
      title: "Kontaktdaten",
      description: "Name, E-Mail-Adresse, Telefonnummer, Adresse",
      purpose: "Kommunikation und Serviceerbringung",
      retention: "Bis zu 3 Jahre nach letztem Kontakt",
    },
    {
      icon: Eye,
      title: "Nutzungsdaten",
      description: "IP-Adresse, Browser-Informationen, Besuchszeiten",
      purpose: "Website-Optimierung und Sicherheit",
      retention: "Bis zu 2 Jahre",
    },
    {
      icon: Mail,
      title: "Kommunikationsdaten",
      description: "E-Mail-Korrespondenz, Chat-Nachrichten, Anrufe",
      purpose: "Kundenservice und Qualitätssicherung",
      retention: "Bis zu 5 Jahre",
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
              <span className="text-foreground">Datenschutzerklärung</span>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Shield className="h-10 w-10 text-primary" />
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Datenschutz-<span className="text-primary">erklärung</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Ihre Privatsphäre ist uns wichtig. Hier erfahren Sie, wie wir Ihre personenbezogenen Daten sammeln,
                verwenden und schützen.
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

        {/* Data Types */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                Welche <span className="text-primary">Daten</span> sammeln wir?
              </h2>

              <div className="space-y-8">
                {dataTypes.map((type, index) => {
                  const Icon = type.icon

                  return (
                    <Card key={type.title} className="border-0 bg-gradient-to-r from-card to-muted/30">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-6">
                          <div
                            className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                              index % 3 === 0
                                ? "bg-primary/10 text-primary"
                                : index % 3 === 1
                                  ? "bg-secondary/10 text-secondary"
                                  : "bg-accent/10 text-accent"
                            }`}
                          >
                            <Icon className="h-8 w-8" />
                          </div>

                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-foreground mb-4">{type.title}</h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">{type.description}</p>

                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold text-foreground mb-2">Verwendungszweck:</h4>
                                <p className="text-sm text-muted-foreground">{type.purpose}</p>
                              </div>

                              <div>
                                <h4 className="font-semibold text-foreground mb-2">Speicherdauer:</h4>
                                <p className="text-sm text-muted-foreground">{type.retention}</p>
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
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 bg-background">
                <CardContent className="p-8 space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-6">1. Verantwortlicher</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
                    </p>
                    <div className="bg-muted/50 p-6 rounded-lg">
                      <p className="font-semibold text-foreground">{companyInfo.name}</p>
                      <p className="text-muted-foreground">{companyInfo.address.street}</p>
                      <p className="text-muted-foreground">
                        {companyInfo.address.postal} {companyInfo.address.city}
                      </p>
                      <p className="text-muted-foreground">{companyInfo.address.country}</p>
                      <p className="text-muted-foreground mt-2">
                        E-Mail: {companyInfo.contact.email}
                        <br />
                        Telefon: {companyInfo.contact.phone}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-6">2. Datenerfassung auf dieser Website</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3">Server-Log-Dateien</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                          Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                        </p>
                        <ul className="mt-4 space-y-2">
                          {[
                            "Browsertyp und Browserversion",
                            "Verwendetes Betriebssystem",
                            "Referrer URL",
                            "Hostname des zugreifenden Rechners",
                            "Uhrzeit der Serveranfrage",
                            "IP-Adresse",
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3">Kontaktformular</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                          Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                          Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-6">3. Ihre Rechte</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          title: "Recht auf Auskunft",
                          description: "Sie können Auskunft über Ihre gespeicherten Daten verlangen.",
                        },
                        {
                          title: "Recht auf Berichtigung",
                          description: "Sie können die Berichtigung unrichtiger Daten verlangen.",
                        },
                        {
                          title: "Recht auf Löschung",
                          description: "Sie können die Löschung Ihrer Daten verlangen.",
                        },
                        {
                          title: "Recht auf Datenübertragbarkeit",
                          description: "Sie können Ihre Daten in einem strukturierten Format erhalten.",
                        },
                        {
                          title: "Widerspruchsrecht",
                          description: "Sie können der Verarbeitung Ihrer Daten widersprechen.",
                        },
                        {
                          title: "Beschwerderecht",
                          description: "Sie können sich bei einer Aufsichtsbehörde beschweren.",
                        },
                      ].map((right, idx) => (
                        <Card key={idx} className="border border-border bg-muted/30">
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-foreground mb-2">{right.title}</h4>
                            <p className="text-sm text-muted-foreground">{right.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-6">4. Datensicherheit</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in
                      Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird.
                      Zusätzlich sichern wir unsere Website und sonstigen Systeme durch technische und organisatorische
                      Maßnahmen gegen Verlust, Zerstörung, Zugriff, Veränderung oder Verbreitung Ihrer Daten durch
                      unbefugte Personen.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-6">5. Kontakt bei Datenschutzfragen</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:
                    </p>
                    <div className="bg-primary/10 p-6 rounded-lg">
                      <div className="flex items-center gap-4 mb-4">
                        <Mail className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-semibold text-foreground">E-Mail</p>
                          <p className="text-muted-foreground">{companyInfo.contact.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Phone className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-semibold text-foreground">Telefon</p>
                          <p className="text-muted-foreground">{companyInfo.contact.phone}</p>
                        </div>
                      </div>
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
