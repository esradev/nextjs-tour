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
    try {
      if (!tourSteps || !Array.isArray(tourSteps) || tourSteps.length === 0) {
        console.error("Invalid tour steps provided")
        return
      }
      if (!key || typeof key !== "string") {
        console.error("Invalid tour key provided")
        return
      }

      setSteps(tourSteps)
      setTourKey(key)
      setCurrentStep(0)
      setIsActive(true)

      // Execute action for first step if it exists
      if (tourSteps[0]?.action && typeof tourSteps[0].action === "function") {
        try {
          tourSteps[0].action()
        } catch (e) {
          console.error("Error executing tour step action:", e)
        }
      }
    } catch (e) {
      console.error("Error starting tour:", e)
    }
  }, [])

  const nextStep = useCallback(() => {
    try {
      if (currentStep < steps.length - 1) {
        const newStep = currentStep + 1
        setCurrentStep(newStep)
        // Execute action for the new step if it exists
        if (
          steps[newStep]?.action &&
          typeof steps[newStep].action === "function"
        ) {
          try {
            steps[newStep].action!()
          } catch (e) {
            console.error("Error executing tour step action:", e)
          }
        }
      } else {
        completeTour()
      }
    } catch (e) {
      console.error("Error moving to next step:", e)
    }
  }, [currentStep, steps])

  const previousStep = useCallback(() => {
    try {
      if (currentStep > 0) {
        const newStep = currentStep - 1
        setCurrentStep(newStep)
        // Execute action for the new step if it exists
        if (
          steps[newStep]?.action &&
          typeof steps[newStep].action === "function"
        ) {
          try {
            steps[newStep].action!()
          } catch (e) {
            console.error("Error executing tour step action:", e)
          }
        }
      }
    } catch (e) {
      console.error("Error moving to previous step:", e)
    }
  }, [currentStep, steps])

  const skipTour = useCallback(() => {
    try {
      if (tourKey && typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem(`tour-completed-${tourKey}`, "true")
      }
      setIsActive(false)
    } catch (e) {
      console.error("Error skipping tour:", e)
      setIsActive(false) // Still deactivate even if localStorage fails
    }
  }, [tourKey])

  const completeTour = useCallback(() => {
    try {
      if (tourKey && typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem(`tour-completed-${tourKey}`, "true")
      }
      setIsActive(false)
    } catch (e) {
      console.error("Error completing tour:", e)
      setIsActive(false) // Still deactivate even if localStorage fails
    }
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
        completeTour,
        lottieAnimationUrl,
        theme
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
