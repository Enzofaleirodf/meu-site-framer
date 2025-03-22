# Meu Site com Framer + Next.js + Tailwind

Este projeto é um boilerplate para importar seus componentes exportados do Framer via plugin `unframer`.

## Como usar

1. Clone o projeto:
```bash
git clone https://github.com/seu-usuario/meu-site-framer.git
cd meu-site-framer
npm install
```

2. Exporte seus componentes com o plugin do Framer:
```bash
npx unframer@latest [id-do-seu-projeto]
```

3. Copie os arquivos para o projeto:
```bash
./scripts/copy-framer.sh
```

4. Rode localmente:
```bash
npm run dev
```

## Deploy

Você pode conectar esse projeto à sua conta da Vercel para deploy automático.
