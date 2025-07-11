#!/bin/bash

echo "===================================="
echo "    Baby Luiza - Convite Digital"
echo "===================================="
echo

echo "Iniciando o projeto..."
echo

cd frontend

echo "Verificando dependências..."
if [ ! -d "node_modules" ]; then
    echo "Instalando dependências..."
    npm install
    echo
fi

echo "Iniciando servidor de desenvolvimento..."
echo
echo "O projeto será aberto em: http://localhost:3000"
echo
echo "Pressione Ctrl+C para parar o servidor"
echo

npm start
