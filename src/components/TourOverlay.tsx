import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { TourOverlayProps, ElementPosition } from "../types"

export function TourOverlay({
  isActive,
  currentStep,
  stepNumber,
  totalSteps,
  isLastStep,
  isFirstStep,
  onNext,
  onPrevious,
  onSkip,
  onComplete,
  className = "",
  lottieAnimationUrl
}: TourOverlayProps) {
  const [elementPosition, setElementPosition] =
    useState<ElementPosition | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const [showLottie, setShowLottie] = useState(false)
  const [LottieComp, setLottieComp] = useState<any>(null)
  const [animationData, setAnimationData] = useState<any>(null)
  const [isLottieLoading, setIsLottieLoading] = useState(false)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  // Load Lottie animation when approaching last step
  useEffect(() => {
    if (isLastStep && !LottieComp && !isLottieLoading && lottieAnimationUrl) {
      setIsLottieLoading(true)

      async function loadLottie() {
        try {
          // Fetch animation JSON with better error handling
          const res = await fetch(lottieAnimationUrl!)
          if (!res.ok) {
            throw new Error(
              `Failed to fetch Lottie animation: ${res.status} ${res.statusText}`
            )
          }
          const json = await res.json()
          if (!json || typeof json !== "object") {
            throw new Error("Invalid Lottie animation data received")
          }
          setAnimationData(json)

          // Dynamically import lottie-react with error handling
          const lottieModule = await import("lottie-react")
          if (!lottieModule.default) {
            throw new Error("Failed to import lottie-react component")
          }
          setLottieComp(() => lottieModule.default)
        } catch (e) {
          console.error("Failed to load Lottie animation:", e)
          setAnimationData(null)
          setLottieComp(null)
        } finally {
          setIsLottieLoading(false)
        }
      }

      loadLottie()
    }
  }, [isLastStep, LottieComp, isLottieLoading, lottieAnimationUrl])

  // Handle completing the last step with Lottie animation
  const handleLastStepComplete = () => {
    if (LottieComp && animationData) {
      setShowLottie(true)
      // Complete after animation plays
      setTimeout(() => {
        onComplete()
      }, 4000) // 4 seconds for animation
    } else {
      onComplete()
    }
  }

  useEffect(() => {
    if (!isActive || !currentStep) return

    console.log("Tour step changed:", {
      isActive,
      currentStepId: currentStep?.id,
      target: currentStep?.target,
      position: currentStep?.position
    })

    const updateElementPosition = () => {
      if (!currentStep?.target) {
        console.error("Tour step target is missing")
        return
      }

      console.log("Looking for element:", currentStep.target)

      const element = document.querySelector(currentStep.target)
      if (!element) {
        console.warn(`Tour target element not found: ${currentStep.target}`)
        // Try to wait a bit and retry once
        setTimeout(() => {
          const retryElement = document.querySelector(currentStep.target)
          if (!retryElement) {
            console.error(
              `Tour target element still not found after retry: ${currentStep.target}`
            )
            // For debugging, let's log all available elements
            console.log(
              "Available elements with classes:",
              Array.from(document.querySelectorAll("[class]")).map(
                el => el.className
              )
            )
            return
          }
          // If found on retry, continue with position calculation
          const retryRect = retryElement.getBoundingClientRect()
          if (retryRect.width === 0 && retryRect.height === 0) {
            console.warn(
              `Tour target element is not visible after retry: ${currentStep.target}`
            )
            return
          }

          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop
          const scrollLeft =
            window.pageXOffset || document.documentElement.scrollLeft

          const position: ElementPosition = {
            top: retryRect.top + scrollTop,
            left: retryRect.left + scrollLeft,
            width: retryRect.width,
            height: retryRect.height,
            centerX: retryRect.left + scrollLeft + retryRect.width / 2,
            centerY: retryRect.top + scrollTop + retryRect.height / 2
          }

          setElementPosition(position)
        }, 500)
        return
      }

      const rect = element.getBoundingClientRect()
      if (rect.width === 0 && rect.height === 0) {
        console.warn(
          `Tour target element is not visible: ${currentStep.target}`
        )
        return
      }

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft

      const position: ElementPosition = {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft,
        width: rect.width,
        height: rect.height,
        centerX: rect.left + scrollLeft + rect.width / 2,
        centerY: rect.top + scrollTop + rect.height / 2
      }

      setElementPosition(position)

      // Calculate tooltip position with better SSR handling
      if (tooltipRef.current && typeof window !== "undefined") {
        const tooltipRect = tooltipRef.current.getBoundingClientRect()
        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight

        // Default positioning
        let x = position.centerX - tooltipRect.width / 2
        let y = position.top - tooltipRect.height - 20

        // Position adjustments based on currentStep.position or auto-calculate
        switch (currentStep.position) {
          case "top":
            x = position.centerX - tooltipRect.width / 2
            y = position.top - tooltipRect.height - 20
            break
          case "top-left":
            x = position.left
            y = position.top - tooltipRect.height - 20
            break
          case "top-right":
            x = Math.max(0, position.left + position.width - tooltipRect.width)
            y = position.top - tooltipRect.height - 20
            break
          case "bottom":
            x = position.centerX - tooltipRect.width / 2
            y = position.top + position.height + 20
            break
          case "bottom-left":
            x = position.left
            y = position.top + position.height + 20
            break
          case "bottom-right":
            x = Math.max(0, position.left + position.width - tooltipRect.width)
            y = position.top + position.height + 20
            break
          case "left":
            x = position.left - tooltipRect.width - 20
            y = position.centerY - tooltipRect.height / 2
            break
          case "left-top":
            x = position.left - tooltipRect.width - 20
            y = position.top
            break
          case "left-bottom":
            x = position.left - tooltipRect.width - 20
            y = Math.max(0, position.top + position.height - tooltipRect.height)
            break
          case "right":
            x = position.left + position.width + 20
            y = position.centerY - tooltipRect.height / 2
            break
          case "right-top":
            x = position.left + position.width + 20
            y = position.top
            break
          case "right-bottom":
            x = position.left + position.width + 20
            y = Math.max(0, position.top + position.height - tooltipRect.height)
            break
          case "center":
            x = Math.max(0, viewportWidth / 2 - tooltipRect.width / 2)
            y = Math.max(0, viewportHeight / 2 - tooltipRect.height / 2)
            break
          default:
            // Auto-calculate best position based on available space
            const spaceTop = Math.max(0, position.top)
            const spaceBottom = Math.max(
              0,
              viewportHeight - (position.top + position.height)
            )
            const spaceLeft = Math.max(0, position.left)
            const spaceRight = Math.max(
              0,
              viewportWidth - (position.left + position.width)
            )
            const tooltipHeight = tooltipRect.height || 200 // fallback
            const tooltipWidth = tooltipRect.width || 320 // fallback

            // Determine best vertical position
            if (spaceTop > tooltipHeight + 40) {
              y = Math.max(0, position.top - tooltipHeight - 20)
            } else if (spaceBottom > tooltipHeight + 40) {
              y = position.top + position.height + 20
            } else if (spaceLeft > tooltipWidth + 40) {
              x = Math.max(0, position.left - tooltipWidth - 20)
              y = Math.max(0, position.centerY - tooltipHeight / 2)
            } else if (spaceRight > tooltipWidth + 40) {
              x = position.left + position.width + 20
              y = Math.max(0, position.centerY - tooltipHeight / 2)
            } else {
              x = Math.max(0, viewportWidth / 2 - tooltipWidth / 2)
              y = Math.max(0, viewportHeight / 2 - tooltipHeight / 2)
            }

            // Determine best horizontal position for top/bottom placements
            if (
              y === position.top - tooltipHeight - 20 ||
              y === position.top + position.height + 20
            ) {
              x = Math.max(0, position.centerX - tooltipWidth / 2)
            }
        }

        // Boundary checks to ensure tooltip stays within viewport
        const margin = 20
        if (x < margin) {
          x = margin
        } else if (x + tooltipRect.width > viewportWidth - margin) {
          x = Math.max(margin, viewportWidth - tooltipRect.width - margin)
        }

        if (y < margin) {
          y = margin
        } else if (y + tooltipRect.height > viewportHeight - margin) {
          y = Math.max(margin, viewportHeight - tooltipRect.height - margin)
        }

        setTooltipPosition({ x, y })
      }

      // Scroll element into view if needed
      if (typeof window !== "undefined" && element) {
        try {
          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center"
          })
        } catch (e) {
          console.warn("Failed to scroll element into view:", e)
        }
      }
    }

    // Delay initial calculation to ensure DOM is ready
    const timer = setTimeout(updateElementPosition, 100)

    // Update position on window resize or scroll
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateElementPosition)
      window.addEventListener("scroll", updateElementPosition)
    }

    return () => {
      clearTimeout(timer)
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateElementPosition)
        window.removeEventListener("scroll", updateElementPosition)
      }
    }
  }, [currentStep, isActive])

  if (!isActive || !currentStep) {
    return null
  }

  // Guard against missing target
  if (!currentStep.target) {
    console.error("Tour step is missing a target selector")
    return null
  }

  // If it's the last step and Lottie animation should show
  if (isLastStep && showLottie && LottieComp && animationData) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm flex items-center justify-center"
        >
          {/* Celebration Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                initial={{
                  x:
                    Math.random() *
                    (typeof window !== "undefined" ? window.innerWidth : 1000),
                  y: -10,
                  rotate: 0
                }}
                animate={{
                  y:
                    (typeof window !== "undefined"
                      ? window.innerHeight
                      : 1000) + 10,
                  rotate: 360,
                  x:
                    Math.random() *
                    (typeof window !== "undefined" ? window.innerWidth : 1000)
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>

          {/* Main Lottie Animation */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Lottie Container */}
            <div className="w-80 h-80 mb-8">
              <LottieComp
                animationData={animationData}
                loop={false}
                autoplay={true}
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            {/* Celebration Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Congratulations! 🎉
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
                Tour completed successfully!
              </p>
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
                onClick={onComplete}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-2xl"
              >
                Get Started
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  }

  // If elementPosition is not available yet, show a minimal overlay with just the tooltip in center
  // This prevents the tour from not showing at all if element positioning fails
  if (!elementPosition) {
    return (
      <AnimatePresence>
        <div
          ref={overlayRef}
          className={`fixed inset-0 z-50 pointer-events-none ${className}`}
          style={{ isolation: "isolate" }}
        >
          {/* Minimal overlay while waiting for element position */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 pointer-events-auto"
            onClick={onSkip}
          />

          {/* Centered tooltip as fallback */}
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="absolute pointer-events-auto"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <div className="w-80 max-w-sm shadow-2xl border-0 bg-white dark:bg-gray-900 backdrop-blur-sm rounded-lg p-6">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">
                      Step {stepNumber + 1} of {totalSteps}
                    </span>
                    <button
                      onClick={onSkip}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1"
                    >
                      ✕
                    </button>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 mb-4">
                  <div
                    className="bg-blue-500 h-1 rounded-full transition-all duration-300"
                    style={{
                      width: `${((stepNumber + 1) / totalSteps) * 100}%`
                    }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {currentStep.title}
                </h3>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {currentStep.content}
                </p>
                <p className="text-xs text-orange-500 mt-2">
                  Finding target element "{currentStep.target}"...
                </p>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div className="flex gap-2">
                  {!isFirstStep && currentStep.showPrevious !== false && (
                    <button
                      onClick={onPrevious}
                      className="px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      ← Previous
                    </button>
                  )}

                  {currentStep.showSkip !== false && !isLastStep && (
                    <button
                      onClick={onSkip}
                      className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                    >
                      Skip →
                    </button>
                  )}
                </div>

                {isLastStep ? (
                  <button
                    onClick={handleLastStepComplete}
                    className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  >
                    {isLottieLoading ? "Loading..." : "🎉 Complete Tour"}
                  </button>
                ) : (
                  currentStep.showNext !== false && (
                    <button
                      onClick={onNext}
                      className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                      Next →
                    </button>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    )
  }

  const progress = ((stepNumber + 1) / totalSteps) * 100

  return (
    <AnimatePresence>
      <div
        ref={overlayRef}
        className={`fixed inset-0 z-50 pointer-events-none ${className}`}
        style={{
          isolation: "isolate",
          overflow: "hidden" // Prevent horizontal scroll
        }}
      >
        {/* Overlay with cutout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 pointer-events-auto"
          style={{
            clipPath: `polygon(
              0% 0%,
              0% 100%,
              ${elementPosition.left}px 100%,
              ${elementPosition.left}px ${elementPosition.top}px,
              ${elementPosition.left + elementPosition.width}px ${
              elementPosition.top
            }px,
              ${elementPosition.left + elementPosition.width}px ${
              elementPosition.top + elementPosition.height
            }px,
              ${elementPosition.left}px ${
              elementPosition.top + elementPosition.height
            }px,
              ${elementPosition.left}px 100%,
              100% 100%,
              100% 0%
            )`
          }}
          onClick={onSkip}
        />

        {/* Highlighted element border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute border-4 border-blue-500 rounded-lg shadow-lg shadow-blue-500/20"
          style={{
            top: elementPosition.top - 4,
            left: elementPosition.left - 4,
            width: elementPosition.width + 8,
            height: elementPosition.height + 8,
            pointerEvents: "none"
          }}
        />

        {/* Pulse animation around highlighted element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.5, 0.2, 0.5],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute border-2 border-blue-500/30 rounded-lg"
          style={{
            top: elementPosition.top - 8,
            left: elementPosition.left - 8,
            width: elementPosition.width + 16,
            height: elementPosition.height + 16,
            pointerEvents: "none"
          }}
        />

        {/* Tooltip */}
        <motion.div
          ref={tooltipRef}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute pointer-events-auto"
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y
          }}
        >
          <div className="w-80 max-w-sm shadow-2xl border-0 bg-white dark:bg-gray-900 backdrop-blur-sm rounded-lg p-6">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">
                    Step {stepNumber + 1} of {totalSteps}
                  </span>
                  <button
                    onClick={onSkip}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 mb-4">
                <div
                  className="bg-blue-500 h-1 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {currentStep.title}
              </h3>
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {currentStep.content}
              </p>
            </div>

            <div className="flex items-center justify-between gap-3">
              <div className="flex gap-2">
                {!isFirstStep && currentStep.showPrevious !== false && (
                  <button
                    onClick={onPrevious}
                    className="px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    ← Previous
                  </button>
                )}

                {currentStep.showSkip !== false && !isLastStep && (
                  <button
                    onClick={onSkip}
                    className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                  >
                    Skip →
                  </button>
                )}
              </div>

              {isLastStep ? (
                <button
                  onClick={handleLastStepComplete}
                  className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  {isLottieLoading ? "Loading..." : "🎉 Complete Tour"}
                </button>
              ) : (
                currentStep.showNext !== false && (
                  <button
                    onClick={onNext}
                    className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  >
                    Next →
                  </button>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
