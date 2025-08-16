import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { testimonials } from "@/lib/mock-data"

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Was unsere <span className="text-primary">Kunden</span> sagen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lesen Sie echte Bewertungen von zufriedenen Kunden aus ganz Deutschland.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`group hover:shadow-xl transition-all duration-300 border-0 ${
                index % 2 === 0 ? "bg-background" : "bg-card"
              } hover:scale-105`}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  {testimonial.company && <div className="text-sm text-muted-foreground">{testimonial.company}</div>}
                  <div className="text-sm text-primary mt-1">
                    {testimonial.service} • {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
