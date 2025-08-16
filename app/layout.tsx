import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "SauberProfi.online - Premium Reinigungsservice in Deutschland",
  description:
    "Professionelle Reinigungsdienstleistungen in Deutschland. Büroreinigung, Haushaltsreinigung und mehr. Vertrauen Sie auf unsere Expertise.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${dmSans.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
