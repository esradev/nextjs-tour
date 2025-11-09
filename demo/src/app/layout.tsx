import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { TourProvider, GlobalTourOverlay } from "nextjs-tour"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next.js Tour Demo",
  description: "A comprehensive demonstration of the nextjs-tour package"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TourProvider lottieAnimationUrl="/nextjs-tour/celebration.json">
          {children}
          <GlobalTourOverlay />
        </TourProvider>
      </body>
    </html>
  )
}
