"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, HelpCircle } from "lucide-react"

export function FAQAccordion() {
  const [openItems, setOpenItems] = useState<number[]>([0])

  const faqs = [
    {
      question: "Wie schnell können Sie einen Termin anbieten?",
      answer:
        "In der Regel können wir innerhalb von 24-48 Stunden einen Termin anbieten. Für Notfälle bieten wir auch einen 24/7 Service an. Bei regelmäßigen Reinigungen planen wir gerne feste Termine nach Ihren Wünschen.",
    },
    {
      question: "Sind Ihre Reinigungsmittel umweltfreundlich?",
      answer:
        "Ja, wir verwenden ausschließlich ökologische und biologisch abbaubare Reinigungsmittel, die sicher für Menschen, Tiere und die Umwelt sind. Alle unsere Produkte sind zertifiziert und entsprechen den höchsten Umweltstandards.",
    },
    {
      question: "Bieten Sie auch Reinigung außerhalb der Geschäftszeiten?",
      answer:
        "Selbstverständlich! Wir passen uns Ihrem Zeitplan an und bieten Reinigungsdienstleistungen auch abends, am Wochenende oder an Feiertagen an. Dies ist besonders für Büroreinigungen sehr beliebt.",
    },
    {
      question: "Wie wird die Qualität Ihrer Arbeit sichergestellt?",
      answer:
        "Wir führen regelmäßige Qualitätskontrollen durch und sind ISO 9001:2015 zertifiziert. Außerdem bieten wir eine 100% Zufriedenheitsgarantie - sollten Sie nicht zufrieden sein, kommen wir kostenlos zurück.",
    },
    {
      question: "Was kostet eine professionelle Reinigung?",
      answer:
        "Die Kosten variieren je nach Art der Reinigung, Größe der Räumlichkeiten und Häufigkeit. Nutzen Sie unseren Kostenrechner für eine erste Schätzung oder kontaktieren Sie uns für ein individuelles Angebot.",
    },
    {
      question: "Sind Sie versichert und was passiert bei Schäden?",
      answer:
        "Ja, wir sind vollständig versichert (Haftpflicht- und Betriebshaftpflichtversicherung). Im unwahrscheinlichen Fall eines Schadens übernimmt unsere Versicherung die Kosten. Zusätzlich sind alle Mitarbeiter bonded.",
    },
    {
      question: "Muss ich während der Reinigung anwesend sein?",
      answer:
        "Nein, das ist nicht erforderlich. Viele unserer Kunden geben uns einen Schlüssel oder Zugangscode. Alle unsere Mitarbeiter sind vertrauenswürdig und durchlaufen eine gründliche Hintergrundprüfung.",
    },
    {
      question: "Welche Zahlungsmöglichkeiten bieten Sie an?",
      answer:
        "Wir akzeptieren Barzahlung, Überweisung, EC-Karte und alle gängigen Kreditkarten. Für Geschäftskunden bieten wir auch Rechnungskauf mit verschiedenen Zahlungszielen an.",
    },
  ]

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <HelpCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-3xl font-bold text-foreground mb-4">
          Häufig gestellte <span className="text-primary">Fragen</span>
        </h3>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Hier finden Sie Antworten auf die wichtigsten Fragen zu unseren Reinigungsdienstleistungen.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openItems.includes(index)

          return (
            <Card
              key={index}
              className={`border-0 transition-all duration-300 cursor-pointer hover:shadow-lg ${
                isOpen ? "bg-gradient-to-r from-primary/5 to-secondary/5 shadow-md" : "bg-background hover:bg-muted/30"
              }`}
              onClick={() => toggleItem(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-foreground pr-4">{faq.question}</h4>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
