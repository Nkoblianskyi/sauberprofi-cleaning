"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle, Send, X } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setShowSuccess(true)

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Card className="border-0 bg-background shadow-xl">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-muted/50 border-border focus:border-primary"
                  placeholder="Ihr vollständiger Name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  E-Mail *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-muted/50 border-border focus:border-primary"
                  placeholder="ihre.email@beispiel.de"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Telefon
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-muted/50 border-border focus:border-primary"
                  placeholder="+49 123 456 7890"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium text-foreground">
                  Unternehmen
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-muted/50 border-border focus:border-primary"
                  placeholder="Ihr Unternehmen (optional)"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="service" className="text-sm font-medium text-foreground">
                Gewünschter Service
              </Label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-muted/50 border border-border rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="">Bitte wählen Sie einen Service</option>
                <option value="bueroreinigung">Büroreinigung</option>
                <option value="haushaltsreinigung">Haushaltsreinigung</option>
                <option value="fensterreinigung">Fensterreinigung</option>
                <option value="teppichreinigung">Teppichreinigung</option>
                <option value="grundreinigung">Grundreinigung</option>
                <option value="industriereinigung">Industriereinigung</option>
                <option value="beratung">Allgemeine Beratung</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-foreground">
                Nachricht *
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-muted/50 border-border focus:border-primary resize-none"
                placeholder="Beschreiben Sie Ihre Anforderungen oder stellen Sie Ihre Fragen..."
              />
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2"></div>
                  Wird gesendet...
                </>
              ) : (
                <>
                  Nachricht senden
                  <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Mit dem Absenden stimmen Sie unserer{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Datenschutzerklärung
              </a>{" "}
              zu.
            </p>
          </form>
        </CardContent>
      </Card>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="border-0 shadow-2xl max-w-md w-full">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">Nachricht erfolgreich gesendet!</h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Vielen Dank für Ihre Anfrage. Wir haben Ihre Nachricht erhalten und werden uns innerhalb von 2 Stunden
                bei Ihnen melden.
              </p>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Antwortzeit:</span>
                  <span className="font-medium text-primary">{"< 2 Stunden"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Referenz-Nr:</span>
                  <span className="font-medium text-foreground">
                    #{Math.random().toString(36).substr(2, 9).toUpperCase()}
                  </span>
                </div>
              </div>

              <Button onClick={() => setShowSuccess(false)} className="w-full">
                Verstanden
              </Button>

              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
