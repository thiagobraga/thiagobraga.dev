#!/bin/bash

echo '==============================================='
echo 'Testando versão do node e npm'
echo '==============================================='
echo ''

node -v
npm -v

echo ''
echo '==============================================='
echo 'Instalação dos pacotes do projeto'
echo '==============================================='
echo ''

npm i -g gulp
npm i

echo ''
echo '==============================================='
echo "Executando no ambiente de desenvolvimento"
echo '==============================================='
echo ''

gulp
