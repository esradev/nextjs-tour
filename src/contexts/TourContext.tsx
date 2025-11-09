"use client"

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode
} from "react"
import type { TourStep, TourContextValue, TourProviderProps } from "../types"

const TourContext = createContext<TourContextValue | undefined>(undefined)

export function TourProvider({
  children,
  lottieAnimationUrl,
  theme
}: TourProviderProps) {
  const [isActive, setIsActive] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [steps, setSteps] = useState<TourStep[]>([])
  const [tourKey, setTourKey] = useState<string>("")

  const getCurrentStep = useCallback(() => {
    return steps[currentStep] || null
  }, [steps, currentStep])

  const startTour = useCallback((tourSteps: TourStep[], key: string) => {
    setSteps(tourSteps)
    setTourKey(key)
    setCurrentStep(0)
    setIsActive(true)

    // Execute action for first step if it exists
    if (tourSteps[0]?.action) {
      tourSteps[0].action()
    }
  }, [])

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
    if (tourKey) {
      localStorage.setItem(`tour-completed-${tourKey}`, "true")
    }
    setIsActive(false)
  }, [tourKey])

  const completeTour = useCallback(() => {
    if (tourKey) {
      localStorage.setItem(`tour-completed-${tourKey}`, "true")
    }

    setIsActive(false)
  }, [tourKey])

  const isFirstStep = currentStep === 0
  const isLastStep = currentStep === steps.length - 1

  return (
    <TourContext.Provider
      value={{
        isActive,
        currentStep,
        totalSteps: steps.length,
        isFirstStep,
        isLastStep,
        getCurrentStep,
        startTour,
        nextStep,
        previousStep,
        skipTour,
        completeTour
      }}
    >
      {children}
    </TourContext.Provider>
  )
}

export function useTourContext() {
  const context = useContext(TourContext)
  if (context === undefined) {
    throw new Error("useTourContext must be used within a TourProvider")
  }
  return context
}
