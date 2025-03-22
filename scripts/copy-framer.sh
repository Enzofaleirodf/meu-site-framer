#!/bin/bash
echo "Copiando arquivos de framer para components..."

mkdir -p components

cp -r framer/* components

echo "Componentes copiados com sucesso!"
