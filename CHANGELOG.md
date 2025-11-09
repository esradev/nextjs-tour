# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2025-11-09

### Fixed

- Fixed "use client" directives being ignored during bundling by removing individual directives and relying on the Rollup banner
- Fixed GlobalTourOverlay not properly passing lottieAnimationUrl prop to TourOverlay
- Fixed TourProvider not exposing lottieAnimationUrl and theme through TourContext
- Improved tooltip positioning calculations with better SSR handling and viewport boundary checks
- Added comprehensive error handling for missing target elements with retry logic
- Enhanced Lottie animation loading with proper error handling and validation
- Added safe guards for localStorage operations and action execution
- Improved element visibility detection and error reporting
- Added fallback values for tooltip dimensions during positioning calculations

### Improved

- Better SSR compatibility with typeof window checks
- More robust element finding with retry mechanism
- Enhanced error logging for debugging tour issues
- Safer action execution with try-catch blocks

## [1.0.1] - 2025-11-09

### Fixed

- Fixed TypeScript type definitions for TourStep and UseTourOptions
- Corrected import paths in GlobalTourOverlay and useTour hook

## [1.0.0] - 2025-11-09

### Added

- Initial release of nextjs-tour package
- TourOverlay component with spotlight effect
- TourProvider context for global state management
- GlobalTourOverlay component for easy integration
- useTour and useTourContext hooks
- 13 different positioning options (top, bottom, left, right, center, combinations)
- Lottie animation support for celebration on tour completion
- TypeScript support with full type definitions
- Responsive design with automatic positioning adjustment
- localStorage integration for tour completion persistence
- Framer Motion animations and transitions
- Auto-scroll functionality to keep highlighted elements in view
- Customizable themes and styling options
- Progress indicator and step navigation
- Skip functionality and step controls
- Action execution support for custom behaviors per step

### Features

- 🎯 Spotlight effect with smooth cutout animations
- 🎨 13 positioning options with intelligent auto-positioning
- 🎬 Optional Lottie celebration animations
- 📱 Fully responsive design
- ⚡ TypeScript support
- 🎪 Smooth Framer Motion animations
- 💾 LocalStorage persistence
- 🔧 Highly configurable and customizable

### Documentation

- Comprehensive README with examples
- Complete API reference
- TypeScript type definitions
- Usage examples for common scenarios
