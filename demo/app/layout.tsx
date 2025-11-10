import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { TourProvider, GlobalTourOverlay } from "nextjs-tour"
import "nextjs-tour/styles.css"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next.js Tour - Beautiful Tour System for Next.js",
  description:
    "Create engaging onboarding experiences with smooth animations and flexible positioning.",
  generator: "v0.app"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TourProvider>
            <Header />
            <Sidebar />
            <main className="lg:pl-64">
              <div className="max-w-5xl mx-auto px-6 lg:px-12 py-8 lg:py-12">
                {children}
              </div>
            </main>
            <GlobalTourOverlay />
          </TourProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
