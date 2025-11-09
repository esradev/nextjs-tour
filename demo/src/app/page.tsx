"use client"

import { useState } from "react"
import { motion } from "framer-motion"

// This is a simplified demo page that showcases the layout and design
// The actual tour functionality will be added once the package is properly installed

export default function HomePage() {
  const [stats] = useState({
    tours: 127,
    users: 1543,
    completions: 89.2
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="main-header bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">🚀</div>
              <h1 className="text-xl font-bold text-gray-800">
                Next.js Tour Demo
              </h1>
            </div>

            <nav className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Documentation
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Examples
              </a>
            </nav>

            <div className="flex items-center space-x-3">
              <button className="btn-secondary">Sign In</button>
              <button className="btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Beautiful Tour System
              <br />
              <span className="text-blue-600">for Next.js</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Create engaging onboarding experiences with smooth animations,
              flexible positioning, and Lottie celebration effects.
            </p>

            <div className="flex gap-4 justify-center">
              <button className="btn-primary">Start Tour (Demo)</button>

              <button className="btn-secondary">View Documentation</button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="dashboard-card card text-center">
                <div className="text-3xl font-bold text-blue-600">
                  {stats.tours}
                </div>
                <div className="text-gray-600">Active Tours</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-bold text-green-600">
                  {stats.users.toLocaleString()}
                </div>
                <div className="text-gray-600">Happy Users</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-bold text-purple-600">
                  {stats.completions}%
                </div>
                <div className="text-gray-600">Completion Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tour Position Options
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The nextjs-tour package supports 13 different positioning options
              for maximum flexibility.
            </p>
          </div>

          <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Top Position",
                icon: "⬆️",
                description: "Shows tooltip above the target element"
              },
              {
                title: "Bottom Position",
                icon: "⬇️",
                description: "Shows tooltip below the target element"
              },
              {
                title: "Left Position",
                icon: "⬅️",
                description: "Shows tooltip to the left of target"
              },
              {
                title: "Right Position",
                icon: "➡️",
                description: "Shows tooltip to the right of target"
              },
              {
                title: "Top-Left",
                icon: "↖️",
                description: "Combines top position with left alignment"
              },
              {
                title: "Top-Right",
                icon: "↗️",
                description: "Combines top position with right alignment"
              },
              {
                title: "Bottom-Left",
                icon: "↙️",
                description: "Combines bottom position with left alignment"
              },
              {
                title: "Center",
                icon: "🎯",
                description: "Shows tooltip in the center of viewport"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="card hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Quick Start
              </h2>
              <p className="text-gray-600">
                Get started with nextjs-tour in just a few simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold mb-4">📦 Installation</h3>
                <div className="bg-gray-100 p-4 rounded-md">
                  <code className="text-sm">npm install nextjs-tour</code>
                </div>
                <p className="text-gray-600 text-sm mt-3">
                  Install the package and its peer dependencies: react,
                  react-dom, next, and framer-motion.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-4">⚡ Basic Usage</h3>
                <div className="bg-gray-100 p-4 rounded-md text-xs">
                  <pre>{`import { TourProvider } from "nextjs-tour"

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

            <div className="mt-8 card">
              <h3 className="text-xl font-semibold mb-4">
                🎯 Define Tour Steps
              </h3>
              <div className="bg-gray-100 p-4 rounded-md text-xs overflow-x-auto">
                <pre>{`const tourSteps = [
  {
    id: "welcome",
    target: ".hero-section",
    title: "Welcome! 🎉",
    content: "Let's take a quick tour of our app!",
    position: "center"
  },
  {
    id: "features",
    target: ".features-grid",
    title: "Features",
    content: "Explore our amazing features here.",
    position: "top"
  }
]`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="demo-footer bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-xl">🚀</div>
                <span className="font-bold">Next.js Tour</span>
              </div>
              <p className="text-gray-400 text-sm">
                The most beautiful and customizable tour system for Next.js
                applications.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>13 Positioning Options</li>
                <li>Lottie Animations</li>
                <li>TypeScript Support</li>
                <li>Framer Motion</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Documentation</li>
                <li>GitHub Repository</li>
                <li>NPM Package</li>
                <li>Examples</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>GitHub Issues</li>
                <li>Discord Community</li>
                <li>Email Support</li>
                <li>Contributing Guide</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2025 Next.js Tour. Made with ❤️ for the React community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
