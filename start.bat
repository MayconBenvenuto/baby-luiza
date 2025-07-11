@echo off
echo ====================================
echo     Baby Luiza - Convite Digital
echo ====================================
echo.
echo Iniciando o projeto...
echo.

cd frontend

echo Verificando dependencias...
if not exist "node_modules" (
    echo Instalando dependencias...
    npm install
    echo.
)

echo Iniciando servidor de desenvolvimento...
echo.
echo O projeto sera aberto em: http://localhost:3000
echo.
echo Pressione Ctrl+C para parar o servidor
echo.

npm start

pause
