import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Building, Mail, Phone, MapPin, FileText, Scale } from "lucide-react"
import Link from "next/link"
import { companyInfo } from "@/lib/mock-data"

export default function ImpressumPage() {
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
              <span className="text-foreground">Impressum</span>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <FileText className="h-10 w-10 text-primary" />
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                <span className="text-primary">Impressum</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Rechtliche Informationen und Angaben gemäß § 5 TMG über den Anbieter dieser Website.
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

        {/* Impressum Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Company Information */}
                <Card className="border-0 bg-gradient-to-br from-primary/5 to-primary/10">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <Building className="h-8 w-8 text-primary" />
                      <h2 className="text-2xl font-bold text-foreground">Unternehmensdaten</h2>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Firmenname</h3>
                        <p className="text-muted-foreground">{companyInfo.name} GmbH</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Geschäftsführer</h3>
                        <p className="text-muted-foreground">Michael Weber</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Handelsregister</h3>
                        <p className="text-muted-foreground">
                          HRB 123456
                          <br />
                          Amtsgericht München
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Umsatzsteuer-ID</h3>
                        <p className="text-muted-foreground">DE123456789</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card className="border-0 bg-gradient-to-br from-secondary/5 to-secondary/10">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <Mail className="h-8 w-8 text-secondary" />
                      <h2 className="text-2xl font-bold text-foreground">Kontaktdaten</h2>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Anschrift</h3>
                          <p className="text-muted-foreground">
                            {companyInfo.address.street}
                            <br />
                            {companyInfo.address.postal} {companyInfo.address.city}
                            <br />
                            {companyInfo.address.country}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                          <p className="text-muted-foreground">{companyInfo.contact.phone}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Mail className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">E-Mail</h3>
                          <p className="text-muted-foreground">{companyInfo.contact.email}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Legal Information */}
              <Card className="border-0 bg-gradient-to-r from-card to-muted/30">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <Scale className="h-8 w-8 text-accent" />
                    <h2 className="text-2xl font-bold text-foreground">Rechtliche Hinweise</h2>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-4">Haftung für Inhalte</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                        allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
                        nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen
                        oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-4">Haftung für Links</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
                        haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                        Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
                        verantwortlich.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-4">Urheberrecht</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                        deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                        Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                        jeweiligen Autors bzw. Erstellers.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-4">Streitschlichtung</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                        <a
                          href="https://ec.europa.eu/consumers/odr/"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://ec.europa.eu/consumers/odr/
                        </a>
                        . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet,
                        an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6 mt-8">
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
