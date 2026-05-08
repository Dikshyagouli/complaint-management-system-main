@echo off
echo Starting Complaint Management System...
echo.

echo Starting Backend Server...
cd sever
start "Backend Server" cmd /k "npm start"
cd ..

echo.
echo Starting Frontend Server...
cd client
start "Frontend Server" cmd /k "npm run dev"
cd ..

echo.
echo Both servers are starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:5173
echo.
echo Press any key to exit this window...
pause > nul 