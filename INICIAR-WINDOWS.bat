@echo off
cd /d "%~dp0"
echo Iniciando Sendway...
start "" http://localhost:3000
node server.js
pause
