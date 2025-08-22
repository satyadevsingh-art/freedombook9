@echo off
echo Starting Freedombook9 Landing Page Server...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js is not installed or not in PATH.
    echo Please install Node.js from https://nodejs.org/
    echo.
    echo Alternative: You can open index.html directly in your browser.
    pause
    exit /b 1
)

REM Check if npm packages are installed
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
    if %errorlevel% neq 0 (
        echo Failed to install dependencies.
        pause
        exit /b 1
    )
)

REM Start the development server
echo Starting development server...
npm start
