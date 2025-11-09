// example/layout.tsx
import { TourProvider, GlobalTourOverlay } from "nextjs-tour"

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <TourProvider lottieAnimationUrl="/animations/celebration.json">
          {children}
          <GlobalTourOverlay />
        </TourProvider>
      </body>
    </html>
  )
}

// example/page.tsx
import { useTourContext } from "nextjs-tour"
import type { TourStep } from "nextjs-tour"

const tourSteps: TourStep[] = [
  {
    id: "welcome",
    target: ".welcome-section",
    title: "Welcome! 🎉",
    content: "Welcome to our amazing application! Let's take a quick tour.",
    position: "center",
    showPrevious: false
  },
  {
    id: "header",
    target: ".main-header",
    title: "Main Header",
    content: "This is the main header of the application.",
    position: "bottom"
  },
  {
    id: "sidebar",
    target: ".sidebar",
    title: "Navigation Sidebar",
    content: "Use this sidebar to navigate between different sections.",
    position: "right"
  }
]

function TourButton() {
  const { startTour } = useTourContext()

  const handleStartTour = () => {
    startTour(tourSteps, "example-tour")
  }

  return (
    <button onClick={handleStartTour} className="tour-trigger-btn">
      Start Tour
    </button>
  )
}

export default function HomePage() {
  return (
    <div>
      <header className="main-header">
        <h1>My Next.js App</h1>
        <TourButton />
      </header>

      <div className="app-layout">
        <aside className="sidebar">
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="welcome-section">
          <h2>Welcome to our app!</h2>
          <p>This is a simple example of how to use the nextjs-tour package.</p>
        </main>
      </div>
    </div>
  )
}
