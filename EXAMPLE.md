# Simple Next.js Tour Example

This example demonstrates the basic usage of `nextjs-tour` package.

## Installation

```bash
npm install nextjs-tour
npm install react react-dom next framer-motion
# Optional for animations:
npm install lottie-react
```

## Basic Setup

### 1. Layout Component (app/layout.tsx)

```tsx
import { TourProvider, GlobalTourOverlay } from "nextjs-tour"

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <TourProvider>
          {children}
          <GlobalTourOverlay />
        </TourProvider>
      </body>
    </html>
  )
}
```

### 2. Tour Configuration (lib/tour-steps.ts)

```tsx
import type { TourStep } from "nextjs-tour"

export const onboardingTour: TourStep[] = [
  {
    id: "welcome",
    target: ".welcome-message",
    title: "Welcome! 👋",
    content: "Thanks for joining us! Let's show you around.",
    position: "center"
  },
  {
    id: "navigation",
    target: ".main-nav",
    title: "Navigation",
    content: "Use this menu to navigate between pages.",
    position: "bottom"
  },
  {
    id: "profile",
    target: ".user-profile",
    title: "Your Profile",
    content: "Access your account settings here.",
    position: "left"
  }
]
```

### 3. Component Usage (components/TourButton.tsx)

```tsx
"use client"

import { useTourContext } from "nextjs-tour"
import { onboardingTour } from "../lib/tour-steps"

export function TourButton() {
  const { startTour } = useTourContext()

  return (
    <button
      onClick={() => startTour(onboardingTour, "onboarding")}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Start Tour
    </button>
  )
}
```

### 4. Page Component (app/page.tsx)

```tsx
import { TourButton } from "../components/TourButton"

export default function HomePage() {
  return (
    <div>
      <nav className="main-nav">
        <h1>My App</h1>
        <TourButton />
      </nav>

      <main>
        <div className="welcome-message">
          <h2>Welcome to our application!</h2>
          <p>This is your starting point.</p>
        </div>

        <div className="user-profile">
          <h3>User Profile</h3>
          <p>Manage your account here.</p>
        </div>
      </main>
    </div>
  )
}
```

## Advanced Features

### With Lottie Animations

```tsx
<TourProvider lottieAnimationUrl="/celebration.json">
  {children}
  <GlobalTourOverlay />
</TourProvider>
```

### Custom Themes

```tsx
<TourProvider
  theme={{
    primaryColor: "#3b82f6",
    backgroundColor: "#ffffff",
    textColor: "#1f2937",
    borderRadius: "8px",
    zIndex: 1000
  }}
>
  {children}
  <GlobalTourOverlay />
</TourProvider>
```

### Using the useTour Hook

```tsx
import { useTour } from "nextjs-tour"

function MyComponent() {
  const { isActive, isFirstVisit, startTour, restartTour } = useTour({
    tourKey: "feature-tour",
    steps: myTourSteps,
    onTourComplete: () => {
      console.log("Tour completed!")
    }
  })

  return (
    <div>
      {isFirstVisit && <p>Welcome! Starting tour...</p>}
      <button onClick={startTour}>Start Tour</button>
      <button onClick={restartTour}>Restart Tour</button>
    </div>
  )
}
```

## Position Options

- `top` - Above element, centered
- `bottom` - Below element, centered
- `left` - Left of element, centered
- `right` - Right of element, centered
- `top-left` - Above element, left-aligned
- `top-right` - Above element, right-aligned
- `bottom-left` - Below element, left-aligned
- `bottom-right` - Below element, right-aligned
- `left-top` - Left of element, top-aligned
- `left-bottom` - Left of element, bottom-aligned
- `right-top` - Right of element, top-aligned
- `right-bottom` - Right of element, bottom-aligned
- `center` - Center of viewport
- `auto` - Automatically calculated (default)

## TypeScript Support

The package includes full TypeScript definitions. Import types as needed:

```tsx
import type { TourStep, PositionType, TourContextValue } from "nextjs-tour"
```
