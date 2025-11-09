import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "nextjs-tour/styles.css"
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
  // Use different animation URL based on environment
  const lottieUrl =
    process.env.NODE_ENV === "production"
      ? "/nextjs-tour/celebration.json"
      : "/celebration.json"

  return (
    <html lang="en">
      <body className={inter.className}>
        <TourProvider lottieAnimationUrl={lottieUrl}>
          {children}
          <GlobalTourOverlay />
          {/* Debug indicator */}
          <div
            id="tour-debug"
            style={{
              position: "fixed",
              top: "10px",
              right: "10px",
              background: "red",
              color: "white",
              padding: "5px",
              fontSize: "12px",
              zIndex: 9999,
              display: "none"
            }}
          >
            Tour Debug Active
          </div>
        </TourProvider>
      </body>
    </html>
  )
}
