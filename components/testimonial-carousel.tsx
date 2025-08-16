"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote, Play, Pause } from "lucide-react"
import { testimonials } from "@/lib/mock-data"

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-foreground mb-4">
          Was unsere <span className="text-primary">Kunden</span> sagen
        </h3>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Echte Bewertungen von zufriedenen Kunden aus ganz Deutschland.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <Card className="border-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 shadow-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="relative">
              {/* Main Testimonial */}
              <div className="p-8 lg:p-12 text-center">
                <Quote className="h-12 w-12 text-primary/30 mx-auto mb-6" />

                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                  ))}
                </div>

                <blockquote className="text-xl lg:text-2xl text-foreground font-medium leading-relaxed mb-8 italic">
                  "{currentTestimonial.text}"
                </blockquote>

                <div className="space-y-2">
                  <div className="text-lg font-bold text-foreground">{currentTestimonial.name}</div>
                  {currentTestimonial.company && (
                    <div className="text-muted-foreground">{currentTestimonial.company}</div>
                  )}
                  <div className="text-primary font-medium">
                    {currentTestimonial.service} • {currentTestimonial.location}
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-background/90 hover:bg-background"
                  onClick={prevTestimonial}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </div>

              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-background/90 hover:bg-background"
                  onClick={nextTestimonial}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Auto-play Control */}
              <div className="absolute top-4 right-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="bg-background/50 hover:bg-background/70"
                  onClick={toggleAutoPlay}
                >
                  {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            {/* Indicators */}
            <div className="flex items-center justify-center gap-2 p-6 bg-muted/30">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 h-3 bg-primary rounded-full"
                      : "w-3 h-3 bg-muted-foreground/30 rounded-full hover:bg-muted-foreground/50"
                  }`}
                  onClick={() => goToTestimonial(index)}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Thumbnail Navigation */}
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`cursor-pointer transition-all duration-300 border-0 ${
                index === currentIndex
                  ? "bg-primary/10 shadow-lg scale-105"
                  : "bg-muted/30 hover:bg-muted/50 hover:scale-102"
              }`}
              onClick={() => goToTestimonial(index)}
            >
              <CardContent className="p-4 text-center">
                <div className="text-sm font-medium text-foreground mb-1 truncate">{testimonial.name}</div>
                <div className="text-xs text-muted-foreground truncate">{testimonial.service}</div>
                <div className="flex items-center justify-center gap-1 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
