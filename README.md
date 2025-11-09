# Next.js Tour

A beautiful, customizable tour/onboarding system for Next.js applications with Lottie animation support.

## Features

- 🎯 **Spotlight Effect**: Highlights specific elements with smooth animations
- 🎨 **Customizable Positioning**: 13 different positioning options (top, bottom, left, right, center, and combinations)
- 🎬 **Lottie Animations**: Optional celebration animations on tour completion
- 📱 **Responsive Design**: Works seamlessly on all device sizes
- ⚡ **TypeScript Support**: Fully typed for better development experience
- 🎪 **Framer Motion**: Smooth animations and transitions
- 💾 **Persistent State**: Remembers completed tours via localStorage
- 🔧 **Highly Configurable**: Customizable themes, colors, and behaviors

## Installation

```bash
npm install nextjs-tour
# or
yarn add nextjs-tour
```

### Peer Dependencies

This package requires the following peer dependencies:

```bash
npm install react react-dom next framer-motion
```

### Optional Dependencies

For Lottie animation support:

```bash
npm install lottie-react
```

## Quick Start

### 1. Import the CSS styles

Add the tour styles to your app:

```tsx
// app/layout.tsx or app/globals.css
import "nextjs-tour/styles.css"
```

### 2. Wrap your app with TourProvider

```tsx
// app/layout.tsx or pages/_app.tsx
import "nextjs-tour/styles.css"
import { TourProvider } from "nextjs-tour"

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <TourProvider>{children}</TourProvider>
      </body>
    </html>
  )
}
```

### 3. Add GlobalTourOverlay to your layout

```tsx
// app/layout.tsx
import "nextjs-tour/styles.css"
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
```

### 4. Define your tour steps

```tsx
// lib/tour-config.ts
import type { TourStep } from "nextjs-tour"

export const dashboardTourSteps: TourStep[] = [
  {
    id: "welcome",
    target: ".welcome-section",
    title: "Welcome! 🎉",
    content: "Welcome to our amazing application! Let's take a quick tour.",
    position: "center",
    showPrevious: false,
    showSkip: true
  },
  {
    id: "navigation",
    target: "[data-tour='navigation']",
    title: "Navigation Menu 📱",
    content:
      "Use this navigation menu to access different sections of the app.",
    position: "right",
    action: () => {
      // Optional: scroll to element or perform other actions
      console.log("Showing navigation step")
    }
  },
  {
    id: "profile",
    target: ".user-profile",
    title: "Your Profile",
    content: "Manage your account settings and preferences here.",
    position: "bottom-left"
  }
]
```

### 5. Start the tour

```tsx
// components/TourButton.tsx
import { useTourContext } from "nextjs-tour"
import { dashboardTourSteps } from "../lib/tour-config"

export function TourButton() {
  const { startTour } = useTourContext()

  const handleStartTour = () => {
    startTour(dashboardTourSteps, "dashboard-tour")
  }

  return <button onClick={handleStartTour}>Start Tour</button>
}
```

## Advanced Usage

### Custom Lottie Animation

```tsx
<TourProvider lottieAnimationUrl="/animations/custom-celebration.json">
  {children}
  <GlobalTourOverlay />
</TourProvider>
```

### Custom Theme

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
  const {
    isActive,
    isFirstVisit,
    startTour,
    nextStep,
    previousStep,
    skipTour,
    completeTour,
    restartTour
  } = useTour({
    tourKey: "my-feature-tour",
    steps: myTourSteps,
    onTourComplete: () => {
      console.log("Tour completed!")
    },
    onTourSkip: () => {
      console.log("Tour skipped!")
    }
  })

  return (
    <div>
      {isFirstVisit && <div>Welcome! This seems to be your first visit.</div>}
      <button onClick={startTour}>Start Tour</button>
      <button onClick={restartTour}>Restart Tour</button>
    </div>
  )
}
```

## Positioning Options

The tour supports 13 different positioning options:

- `top` - Above the element, centered
- `top-left` - Above the element, left-aligned
- `top-right` - Above the element, right-aligned
- `bottom` - Below the element, centered
- `bottom-left` - Below the element, left-aligned
- `bottom-right` - Below the element, right-aligned
- `left` - Left of the element, vertically centered
- `left-top` - Left of the element, top-aligned
- `left-bottom` - Left of the element, bottom-aligned
- `right` - Right of the element, vertically centered
- `right-top` - Right of the element, top-aligned
- `right-bottom` - Right of the element, bottom-aligned
- `center` - Center of the viewport
- `auto` - Automatically calculated based on available space (default)

## API Reference

### TourStep

```tsx
interface TourStep {
  id: string
  target: string // CSS selector
  title: string
  content: string
  position?: PositionType
  showNext?: boolean
  showPrevious?: boolean
  showSkip?: boolean
  action?: () => void
}
```

### TourProvider Props

```tsx
interface TourProviderProps {
  children: React.ReactNode
  lottieAnimationUrl?: string
  theme?: {
    primaryColor?: string
    backgroundColor?: string
    textColor?: string
    borderRadius?: string
    zIndex?: number
  }
}
```

### useTourContext Hook

```tsx
interface TourContextValue {
  isActive: boolean
  currentStep: number
  totalSteps: number
  isFirstStep: boolean
  isLastStep: boolean
  getCurrentStep: () => TourStep | null
  startTour: (steps: TourStep[], tourKey: string) => void
  nextStep: () => void
  previousStep: () => void
  skipTour: () => void
  completeTour: () => void
}
```

## Examples

### E-commerce Product Tour

```tsx
const productTourSteps: TourStep[] = [
  {
    id: "product-image",
    target: ".product-gallery",
    title: "Product Images 📸",
    content: "Browse through high-quality images of the product.",
    position: "right"
  },
  {
    id: "add-to-cart",
    target: ".add-to-cart-btn",
    title: "Add to Cart 🛒",
    content: "Click here to add this item to your shopping cart.",
    position: "top"
  },
  {
    id: "reviews",
    target: ".reviews-section",
    title: "Customer Reviews ⭐",
    content: "Read what other customers think about this product.",
    position: "bottom"
  }
]
```

### Dashboard Onboarding

```tsx
const dashboardSteps: TourStep[] = [
  {
    id: "sidebar",
    target: ".dashboard-sidebar",
    title: "Navigation Sidebar",
    content: "Access different sections of your dashboard from here.",
    position: "right"
  },
  {
    id: "stats",
    target: ".stats-cards",
    title: "Your Statistics",
    content: "View your key metrics and performance indicators.",
    position: "bottom"
  }
]
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- 📧 Email: wpstormdev@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/esradev/nextjs-tour/issues)
- 📖 Documentation: [GitHub Wiki](https://github.com/esradev/nextjs-tour/wiki)
