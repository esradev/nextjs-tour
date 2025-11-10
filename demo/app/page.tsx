"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTourContext } from "nextjs-tour"
import type { TourStep } from "nextjs-tour"

// Define the main demo tour steps
const demoTourSteps: TourStep[] = [
  {
    id: "welcome",
    target: ".hero-section",
    title: "Welcome to Next.js Tour",
    content:
      "A powerful tour system for Next.js applications. Let's explore the key features!",
    position: "center",
    showPrevious: false,
    showSkip: true
  },
  {
    id: "features",
    target: ".features-section",
    title: "Core Features",
    content:
      "Discover the main capabilities that make this tour system powerful and flexible.",
    position: "bottom"
  },
  {
    id: "installation",
    target: ".installation-section",
    title: "Quick Installation",
    content: "Get started with nextjs-tour in just a few simple steps.",
    position: "top"
  },
  {
    id: "examples",
    target: ".examples-section",
    title: "Live Examples",
    content:
      "See different positioning options in action with these interactive examples.",
    position: "left"
  },
  {
    id: "documentation",
    target: ".documentation-section",
    title: "Complete Documentation",
    content:
      "Access comprehensive guides, API references, and advanced usage patterns.",
    position: "right"
  }
]

function TourControls() {
  const { startTour, isActive } = useTourContext()

  const handleStartTour = () => {
    startTour(demoTourSteps, "main-demo-tour")
  }

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handleStartTour}
        disabled={isActive}
        className={`px-6 py-3 rounded-lg font-medium transition-all ${
          isActive
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl"
        }`}
      >
        {isActive ? "Tour Active..." : "Take a Tour"}
      </button>

      <button
        onClick={() => {
          localStorage.removeItem("tour-completed-main-demo-tour")
          window.location.reload()
        }}
        className="px-4 py-3 text-gray-600 hover:text-gray-800 transition-colors text-sm"
      >
        Reset Tour
      </button>
    </div>
  )
}

function FeatureCard({
  title,
  description,
  icon,
  position = "top"
}: {
  title: string
  description: string
  icon: string
  position?: string
}) {
  const { startTour } = useTourContext()

  const singleStepTour: TourStep[] = [
    {
      id: `demo-${title.toLowerCase().replace(/\s+/g, "-")}`,
      target: `[data-demo="${title.toLowerCase().replace(/\s+/g, "-")}"]`,
      title: `${title}`,
      content: `${description} This demonstrates the '${position}' positioning option.`,
      position: position as any
    }
  ]

  return (
    <div
      data-demo={`${title.toLowerCase().replace(/\s+/g, "-")}`}
      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
      onClick={() =>
        startTour(
          singleStepTour,
          `demo-${title.toLowerCase().replace(/\s+/g, "-")}-tour`
        )
      }
    >
      <div className="text-2xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <span className="inline-block text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">
        Position: {position}
      </span>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-gray-900">
                  Next.js Tour
                </span>
              </div>
              <div className="hidden md:ml-8 md:flex md:items-center md:space-x-8">
                <a
                  href="#features"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#installation"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Installation
                </a>
                <a
                  href="#examples"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Examples
                </a>
                <a
                  href="#documentation"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Documentation
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/esradev/nextjs-tour"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.npmjs.com/package/nextjs-tour"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Install
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Beautiful Tour System
              <br />
              <span className="text-blue-600">for Next.js</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Create engaging onboarding experiences with smooth animations,
              flexible positioning, and Lottie celebration effects. Fully
              customizable and TypeScript ready.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <TourControls />
              <a
                href="#installation"
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:border-gray-400 transition-colors font-medium"
              >
                View Documentation
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">13+</div>
                <div className="text-sm text-gray-600">Position Options</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">TypeScript</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">0</div>
                <div className="text-sm text-gray-600">Dependencies</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Next.js Tour?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for Next.js with modern best practices,
              TypeScript support, and professional-grade features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Smart Positioning
              </h3>
              <p className="text-gray-600">
                13 intelligent positioning options with automatic overflow
                detection and responsive behavior.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 text-xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Performance First
              </h3>
              <p className="text-gray-600">
                Lightweight, zero dependencies, and optimized for Next.js App
                Router and Pages Router.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl">🎨</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fully Customizable
              </h3>
              <p className="text-gray-600">
                Custom themes, colors, animations, and Lottie celebration
                effects.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-yellow-600 text-xl">📝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                TypeScript Ready
              </h3>
              <p className="text-gray-600">
                Complete type definitions with IntelliSense support and
                compile-time safety.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-red-600 text-xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Mobile Optimized
              </h3>
              <p className="text-gray-600">
                Responsive design that works seamlessly across all device sizes
                and orientations.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-indigo-600 text-xl">💾</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Smart Memory
              </h3>
              <p className="text-gray-600">
                Automatic progress tracking with localStorage integration and
                tour completion detection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="installation" className="installation-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quick Installation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with Next.js Tour in less than 5 minutes. No complex
              configuration required.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    1
                  </span>
                  Install Package
                </h3>
                <div className="bg-gray-900 rounded-lg p-4 text-sm">
                  <code className="text-green-400">
                    npm install nextjs-tour
                  </code>
                </div>
                <p className="text-gray-600 text-sm mt-3">
                  Installs the package with all required peer dependencies
                  automatically detected.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    2
                  </span>
                  Add Provider
                </h3>
                <div className="bg-gray-900 rounded-lg p-4 text-sm overflow-x-auto">
                  <pre className="text-green-400">{`import { TourProvider } from "nextjs-tour"

export default function Layout({ children }) {
  return (
    <TourProvider>
      {children}
    </TourProvider>
  )
}`}</pre>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  3
                </span>
                Create Your First Tour
              </h3>
              <div className="bg-gray-900 rounded-lg p-4 text-sm overflow-x-auto">
                <pre className="text-green-400">{`import { useTourContext } from "nextjs-tour"

const tourSteps = [
  {
    id: "welcome",
    target: ".welcome-section",
    title: "Welcome!",
    content: "Let's take a quick tour of our app!",
    position: "center"
  }
]

function MyComponent() {
  const { startTour } = useTourContext()

  return (
    <button onClick={() => startTour(tourSteps, "my-tour")}>
      Start Tour
    </button>
  )
}`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="examples-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Live Examples
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click any card below to see different positioning options in
              action. Each example demonstrates real tour functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              title="Top Position"
              description="Tooltip appears above the target element with smart collision detection"
              icon="↑"
              position="top"
            />
            <FeatureCard
              title="Bottom Position"
              description="Tooltip appears below the target element, perfect for headers"
              icon="↓"
              position="bottom"
            />
            <FeatureCard
              title="Left Position"
              description="Tooltip appears to the left, ideal for right-side elements"
              icon="←"
              position="left"
            />
            <FeatureCard
              title="Right Position"
              description="Tooltip appears to the right, perfect for sidebar elements"
              icon="→"
              position="right"
            />
            <FeatureCard
              title="Center Position"
              description="Modal-style tooltip in the center, great for welcome messages"
              icon="⊙"
              position="center"
            />
            <FeatureCard
              title="Top-Left"
              description="Advanced positioning with precise alignment control"
              icon="↖"
              position="top-left"
            />
            <FeatureCard
              title="Bottom-Right"
              description="Corner positioning for compact interface elements"
              icon="↘"
              position="bottom-right"
            />
            <FeatureCard
              title="Auto Position"
              description="Intelligent positioning that adapts to available space"
              icon="🎯"
              position="auto"
            />
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="documentation" className="documentation-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Documentation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to implement professional tour experiences.
              From basic setup to advanced customization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                API Reference
              </h3>
              <p className="text-gray-600 mb-4">
                Complete TypeScript definitions and API documentation for all
                components and hooks.
              </p>
              <a
                href="https://github.com/esradev/nextjs-tour/blob/main/README.md#api-reference"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                View API Docs →
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 text-xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Position Guide
              </h3>
              <p className="text-gray-600 mb-4">
                Learn about all 13 positioning options and when to use each one
                effectively.
              </p>
              <a
                href="https://github.com/esradev/nextjs-tour/blob/main/README.md#positioning-options"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Position Guide →
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl">🎨</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Customization
              </h3>
              <p className="text-gray-600 mb-4">
                Custom themes, colors, animations, and Lottie integration
                examples.
              </p>
              <a
                href="https://github.com/esradev/nextjs-tour/blob/main/README.md#advanced-usage"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Customization →
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-yellow-600 text-xl">💡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Examples
              </h3>
              <p className="text-gray-600 mb-4">
                Real-world examples including e-commerce, dashboard, and
                onboarding tours.
              </p>
              <a
                href="https://github.com/esradev/nextjs-tour/blob/main/README.md#examples"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                View Examples →
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-red-600 text-xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Advanced Usage
              </h3>
              <p className="text-gray-600 mb-4">
                Custom hooks, tour state management, and integration patterns.
              </p>
              <a
                href="https://github.com/esradev/nextjs-tour/blob/main/README.md#using-the-usetour-hook"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Advanced Guide →
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-indigo-600 text-xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Migration
              </h3>
              <p className="text-gray-600 mb-4">
                Migrate from other tour libraries and upgrade guides for version
                updates.
              </p>
              <a
                href="https://github.com/esradev/nextjs-tour/wiki"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Migration Guide →
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Need Help Getting Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Join our community or check out additional resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/esradev/nextjs-tour"
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm border"
              >
                View on GitHub
              </a>
              <a
                href="https://www.npmjs.com/package/nextjs-tour"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Install Package
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="font-bold text-lg">Next.js Tour</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                The most professional tour system for Next.js applications.
                Built with modern best practices and TypeScript.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/esradev/nextjs-tour"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.npmjs.com/package/nextjs-tour"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  NPM
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Documentation</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#installation"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Installation
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/esradev/nextjs-tour/blob/main/README.md#api-reference"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    API Reference
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/esradev/nextjs-tour/blob/main/README.md#examples"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Examples
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/esradev/nextjs-tour/wiki"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Wiki
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/esradev/nextjs-tour/issues"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Issues
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/esradev/nextjs-tour/discussions"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Discussions
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/esradev/nextjs-tour/blob/main/CONTRIBUTING.md"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contributing
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:wpstormdev@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/esradev/nextjs-tour/blob/main/LICENSE"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    MIT License
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/esradev/nextjs-tour/blob/main/CHANGELOG.md"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2025 Next.js Tour. Made with ❤️ for the React community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
