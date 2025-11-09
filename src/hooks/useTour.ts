import { useState, useEffect, useCallback } from "react"
import type { TourStep, UseTourOptions } from "../types"

export function useTour({
  tourKey,
  steps,
  onTourComplete,
  onTourSkip,
  showCongratulations = false
}: UseTourOptions) {
  const [isActive, setIsActive] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [isFirstVisit, setIsFirstVisit] = useState(false)

  // Check if user has completed this tour before
  useEffect(() => {
    const hasCompletedTour = localStorage.getItem(`tour-completed-${tourKey}`)
    const hasVisitedBefore = localStorage.getItem(`app-visited-${tourKey}`)

    if (!hasCompletedTour && !hasVisitedBefore) {
      setIsFirstVisit(true)
      localStorage.setItem(`app-visited-${tourKey}`, "true")
      // Start tour after a small delay to ensure DOM is ready
      setTimeout(() => {
        setIsActive(true)
      }, 1000)
    }
  }, [tourKey])

  const startTour = useCallback(() => {
    setCurrentStep(0)
    setIsActive(true)
    // Execute action for first step if it exists
    if (steps[0]?.action) {
      steps[0].action()
    }
  }, [steps])

  const nextStep = useCallback(() => {
    if (currentStep < steps.length - 1) {
      const newStep = currentStep + 1
      setCurrentStep(newStep)
      // Execute action for the new step if it exists
      if (steps[newStep]?.action) {
        steps[newStep].action()
      }
    } else {
      completeTour()
    }
  }, [currentStep, steps])

  const previousStep = useCallback(() => {
    if (currentStep > 0) {
      const newStep = currentStep - 1
      setCurrentStep(newStep)
      // Execute action for the new step if it exists
      if (steps[newStep]?.action) {
        steps[newStep].action()
      }
    }
  }, [currentStep, steps])

  const skipTour = useCallback(() => {
    localStorage.setItem(`tour-completed-${tourKey}`, "true")
    setIsActive(false)
    onTourSkip?.()
  }, [tourKey, onTourSkip])

  const completeTour = useCallback(() => {
    localStorage.setItem(`tour-completed-${tourKey}`, "true")
    setIsActive(false)
    onTourComplete?.()
  }, [tourKey, onTourComplete])

  const restartTour = useCallback(() => {
    localStorage.removeItem(`tour-completed-${tourKey}`)
    startTour()
  }, [tourKey, startTour])

  const resetTour = useCallback(() => {
    localStorage.removeItem(`tour-completed-${tourKey}`)
    localStorage.removeItem(`app-visited-${tourKey}`)
  }, [tourKey])

  const getCurrentStep = useCallback(() => {
    return steps[currentStep]
  }, [steps, currentStep])

  const isLastStep = currentStep === steps.length - 1
  const isFirstStep = currentStep === 0

  return {
    isActive,
    isFirstVisit,
    currentStep,
    isLastStep,
    isFirstStep,
    totalSteps: steps.length,
    getCurrentStep,
    startTour,
    nextStep,
    previousStep,
    skipTour,
    completeTour,
    restartTour,
    resetTour
  }
}
