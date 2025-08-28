# Grateful Graffiti - Local Development Server
# This script launches a local web server for the static website

param(
    [int]$Port = 8080
)

Write-Host "🚀 Starting Grateful Graffiti website..." -ForegroundColor Green
Write-Host "📁 Serving from: $(Get-Location)\site\" -ForegroundColor Cyan
Write-Host "🌐 Local URL: http://localhost:$Port" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Gray
Write-Host "----------------------------------------" -ForegroundColor Gray

# Change to the site directory
Set-Location -Path "site"

try {
    # Check if Python is available
    $pythonVersion = python --version 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Using Python: $pythonVersion" -ForegroundColor Green
        
        # Start Python HTTP server
        python -m http.server $Port
    }
    else {
        # Fallback: try Node.js
        Write-Host "❌ Python not found, trying Node.js..." -ForegroundColor Yellow
        
        npx serve . -p $Port
    }
}
catch {
    Write-Host "❌ Error starting server: $_" -ForegroundColor Red
    Write-Host ""
    Write-Host "📋 Manual setup instructions:" -ForegroundColor Cyan
    Write-Host "1. Install Python: https://python.org/downloads" -ForegroundColor White
    Write-Host "2. OR install Node.js: https://nodejs.org" -ForegroundColor White
    Write-Host "3. Run: python -m http.server $Port" -ForegroundColor White
    Write-Host "4. Open: http://localhost:$Port" -ForegroundColor White
}
finally {
    # Return to original directory
    Set-Location -Path ".."
}

Write-Host ""
Write-Host "👋 Thanks for using Grateful Graffiti!" -ForegroundColor Green
