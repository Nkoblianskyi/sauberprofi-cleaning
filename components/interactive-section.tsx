"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Settings, MapPin, Calendar, ArrowRight, CheckCircle } from "lucide-react"

export function InteractiveSection() {
  const [selectedService, setSelectedService] = useState("")
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedFrequency, setSelectedFrequency] = useState("")

  const services = [
    { id: "buero", name: "Büroreinigung", description: "Professionelle Büroreinigung" },
    { id: "haushalt", name: "Haushaltsreinigung", description: "Gründliche Haushaltsreinigung" },
    { id: "fenster", name: "Fensterreinigung", description: "Streifenfreie Fensterreinigung" },
    { id: "grundreinigung", name: "Grundreinigung", description: "Intensive Tiefenreinigung" },
  ]

  const sizes = [
    { id: "small", name: "Klein (bis 50m²)" },
    { id: "medium", name: "Mittel (50-150m²)" },
    { id: "large", name: "Groß (150-300m²)" },
    { id: "xlarge", name: "Sehr groß (300m²+)" },
  ]

  const frequencies = [
    { id: "weekly", name: "Wöchentlich", description: "Regelmäßige wöchentliche Reinigung" },
    { id: "biweekly", name: "14-täglich", description: "Alle zwei Wochen" },
    { id: "monthly", name: "Monatlich", description: "Einmal pro Monat" },
    { id: "onetime", name: "Einmalig", description: "Einmalige Reinigung" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Service <span className="text-primary">Konfigurator</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Konfigurieren Sie Ihren individuellen Reinigungsservice und erhalten Sie ein maßgeschneidertes Angebot.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl bg-background/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Settings className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">Konfigurieren Sie Ihren Service</h3>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-4">
                    <label className="text-lg font-semibold text-foreground">Welchen Service benötigen Sie?</label>
                    <div className="grid grid-cols-1 gap-3">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => setSelectedService(service.id)}
                          className={`p-4 rounded-xl border-2 transition-all text-left ${
                            selectedService === service.id
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className="font-medium">{service.name}</div>
                          <div className="text-sm opacity-70">{service.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Size Selection */}
                  <div className="space-y-4">
                    <label className="text-lg font-semibold text-foreground">Wie groß ist der Bereich?</label>
                    <div className="space-y-2">
                      {sizes.map((size) => (
                        <button
                          key={size.id}
                          onClick={() => setSelectedSize(size.id)}
                          className={`w-full p-3 rounded-lg border transition-all text-left ${
                            selectedSize === size.id
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          {size.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Frequency Selection */}
                  <div className="space-y-4">
                    <label className="text-lg font-semibold text-foreground">Wie oft soll gereinigt werden?</label>
                    <div className="grid grid-cols-2 gap-3">
                      {frequencies.map((frequency) => (
                        <button
                          key={frequency.id}
                          onClick={() => setSelectedFrequency(frequency.id)}
                          className={`p-3 rounded-lg border transition-all text-center ${
                            selectedFrequency === frequency.id
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className="font-medium">{frequency.name}</div>
                          <div className="text-xs text-muted-foreground">{frequency.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Ihre Auswahl</h4>

                    {selectedService && selectedSize && selectedFrequency ? (
                      <>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-secondary" />
                            <span className="font-medium">Service konfiguriert</span>
                          </div>

                          <div className="p-4 bg-background/50 rounded-xl">
                            <div className="text-sm space-y-2">
                              <div>
                                <strong>Service:</strong> {services.find((s) => s.id === selectedService)?.name}
                              </div>
                              <div>
                                <strong>Größe:</strong> {sizes.find((s) => s.id === selectedSize)?.name}
                              </div>
                              <div>
                                <strong>Häufigkeit:</strong> {frequencies.find((f) => f.id === selectedFrequency)?.name}
                              </div>
                            </div>
                          </div>

                          <div className="text-center text-secondary font-medium">
                            Bereit für Ihr individuelles Angebot!
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="text-muted-foreground text-center">
                        Wählen Sie alle Optionen für eine Zusammenfassung
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4">
                    <Button size="lg" className="w-full" asChild>
                      <a href="/contact">
                        Kostenloses Angebot anfordern
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Deutschlandweit
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Flexible Termine
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
