#!/bin/bash

echo "🚀 Building nextjs-tour package..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run linting
echo "🔍 Running ESLint..."
npm run lint

# Build the package
echo "🏗️  Building package..."
npm run build

# Check if dist folder was created
if [ -d "dist" ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Built files are in the 'dist' directory"
    echo ""
    echo "📋 Package contents:"
    ls -la dist/
    echo ""
    echo "🚀 Ready to publish!"
    echo ""
    echo "To publish to npm:"
    echo "  1. npm login"
    echo "  2. npm publish"
    echo ""
    echo "To test locally:"
    echo "  1. npm pack"
    echo "  2. npm install /path/to/nextjs-tour-1.0.0.tgz"
else
    echo "❌ Build failed!"
    exit 1
fi
