@echo off
title Cinematic Portfolio Server
echo ==================================================
echo   Starting Cinematic Portfolio Development Server
echo ==================================================
echo.
echo Navigating to project directory...
cd /d "C:\Users\user\Desktop\business portolio\portfolio"

echo Opening browser...
start http://localhost:5173

echo Starting Vite server...
npm run dev

pause
