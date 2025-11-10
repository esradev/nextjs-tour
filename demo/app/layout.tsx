import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Sidebar } from "@/components/sidebar"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next.js Tour - Beautiful Tour System for Next.js",
  description: "Create engaging onboarding experiences with smooth animations and flexible positioning.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        <Sidebar />
        <main className="lg:pl-64">
          <div className="max-w-5xl mx-auto px-6 lg:px-12 py-8 lg:py-12">{children}</div>
        </main>
        <Analytics />
      </body>
    </html>
  )
}
