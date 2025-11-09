# PowerShell build script for Windows
Write-Host "🚀 Building nextjs-tour package..." -ForegroundColor Blue

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install dependencies!" -ForegroundColor Red
    exit 1
}

# Build the package
Write-Host "🏗️  Building package..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build completed successfully!" -ForegroundColor Green
    Write-Host "📁 Built files are in the 'dist' directory" -ForegroundColor Green
    Write-Host ""
    Write-Host "📋 Package contents:" -ForegroundColor Cyan
    Get-ChildItem dist/ | Format-Table Name, Length, LastWriteTime
    Write-Host ""
    Write-Host "🚀 Ready to publish!" -ForegroundColor Green
    Write-Host ""
    Write-Host "To publish to npm:" -ForegroundColor Cyan
    Write-Host "  1. npm login" -ForegroundColor Gray
    Write-Host "  2. npm publish" -ForegroundColor Gray
    Write-Host ""
    Write-Host "To test locally:" -ForegroundColor Cyan
    Write-Host "  1. npm pack" -ForegroundColor Gray
    Write-Host "  2. npm install /path/to/nextjs-tour-1.0.0.tgz" -ForegroundColor Gray
} else {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}
