"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, Users, Award } from "lucide-react"
import { companyInfo } from "@/lib/mock-data"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Telefon",
      value: companyInfo.contact.phone,
      description: "Rufen Sie uns direkt an",
      color: "text-primary",
      bg: "bg-primary/10",
      action: `tel:${companyInfo.contact.phone}`,
    },
    {
      icon: Mail,
      title: "E-Mail",
      value: companyInfo.contact.email,
      description: "Schreiben Sie uns eine Nachricht",
      color: "text-secondary",
      bg: "bg-secondary/10",
      action: `mailto:${companyInfo.contact.email}`,
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: `${companyInfo.address.street}, ${companyInfo.address.postal} ${companyInfo.address.city}`,
      description: "Besuchen Sie uns vor Ort",
      color: "text-accent",
      bg: "bg-accent/10",
      action: "#",
    },
    {
      icon: Clock,
      title: "Öffnungszeiten",
      value: companyInfo.contact.hours,
      description: "Wir sind für Sie da",
      color: "text-muted-foreground",
      bg: "bg-muted/50",
      action: "#",
    },
  ]

  const quickFacts = [
    { icon: Users, label: "Mitarbeiter", value: companyInfo.employees },
    { icon: Award, label: "Jahre Erfahrung", value: companyInfo.experience },
    { icon: MessageCircle, label: "Antwortzeit", value: "< 2 Stunden" },
    { icon: Calendar, label: "Verfügbarkeit", value: "7 Tage/Woche" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section with Creative Layout */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-primary/20 to-transparent transform -skew-x-12 origin-bottom-left"></div>
          <div className="absolute top-0 right-0 w-1/4 h-1/2 bg-gradient-to-bl from-secondary/20 to-transparent transform skew-y-12 origin-top-right"></div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Lassen Sie uns <span className="text-primary">sprechen</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Haben Sie Fragen zu unseren Dienstleistungen? Benötigen Sie ein individuelles Angebot? Unser
                Expertenteam steht Ihnen gerne zur Verfügung.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {quickFacts.map((fact, index) => {
                const Icon = fact.icon

                return (
                  <Card
                    key={fact.label}
                    className={`text-center border-0 hover:shadow-lg transition-all duration-300 ${
                      index % 2 === 0 ? "bg-gradient-to-br from-primary/5 to-primary/10" : "bg-background"
                    } hover:scale-105`}
                  >
                    <CardContent className="p-6">
                      <Icon
                        className={`h-8 w-8 mx-auto mb-3 ${
                          index % 4 === 0
                            ? "text-primary"
                            : index % 4 === 1
                              ? "text-secondary"
                              : index % 4 === 2
                                ? "text-accent"
                                : "text-muted-foreground"
                        }`}
                      />
                      <div className="text-2xl font-bold text-foreground mb-1">{fact.value}</div>
                      <div className="text-sm text-muted-foreground">{fact.label}</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Nachricht senden</h2>
                  <p className="text-muted-foreground">
                    Füllen Sie das Formular aus und wir melden uns innerhalb von 2 Stunden bei Ihnen zurück.
                  </p>
                </div>

                <ContactForm />
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Kontaktmöglichkeiten</h2>
                  <p className="text-muted-foreground">
                    Wählen Sie den für Sie bequemsten Weg, um mit uns in Kontakt zu treten.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon

                    return (
                      <Card
                        key={method.title}
                        className="group hover:shadow-xl transition-all duration-300 border-0 bg-background"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-xl ${method.bg} flex items-center justify-center`}>
                              <Icon className={`h-6 w-6 ${method.color}`} />
                            </div>

                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-foreground mb-1">{method.title}</h3>
                              <p className="text-foreground font-medium mb-1">{method.value}</p>
                              <p className="text-sm text-muted-foreground">{method.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>

                {/* Map Placeholder */}
                <Card className="border-0 bg-background overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="text-lg font-bold text-foreground mb-2">Unser Standort</h3>
                        <p className="text-muted-foreground">
                          {companyInfo.address.street}
                          <br />
                          {companyInfo.address.postal} {companyInfo.address.city}
                          <br />
                          {companyInfo.address.country}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Häufig gestellte <span className="text-primary">Fragen</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Hier finden Sie Antworten auf die wichtigsten Fragen zu unseren Dienstleistungen.
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "Wie schnell können Sie einen Termin anbieten?",
                  answer:
                    "In der Regel können wir innerhalb von 24-48 Stunden einen Termin anbieten. Für Notfälle bieten wir auch einen 24/7 Service.",
                },
                {
                  question: "Sind Ihre Reinigungsmittel umweltfreundlich?",
                  answer:
                    "Ja, wir verwenden ausschließlich ökologische und biologisch abbaubare Reinigungsmittel, die sicher für Menschen, Tiere und die Umwelt sind.",
                },
                {
                  question: "Bieten Sie auch Reinigung außerhalb der Geschäftszeiten?",
                  answer:
                    "Selbstverständlich! Wir passen uns Ihrem Zeitplan an und bieten Reinigungsdienstleistungen auch abends, am Wochenende oder an Feiertagen an.",
                },
                {
                  question: "Wie wird die Qualität Ihrer Arbeit sichergestellt?",
                  answer:
                    "Wir führen regelmäßige Qualitätskontrollen durch und sind ISO 9001:2015 zertifiziert. Außerdem bieten wir eine 100% Zufriedenheitsgarantie.",
                },
              ].map((faq, index) => (
                <Card
                  key={index}
                  className={`border-0 hover:shadow-lg transition-all duration-300 ${
                    index % 2 === 0
                      ? "bg-gradient-to-br from-primary/5 to-primary/10"
                      : "bg-gradient-to-br from-secondary/5 to-secondary/10"
                  } hover:scale-105`}
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
