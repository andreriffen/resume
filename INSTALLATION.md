# Rodar localmente

## Requisitos

- Node.js 20 ou superior
- Git

## Instalação

```bash
git clone https://github.com/andreriffen/resume.git
cd resume
npm ci
npm run dev
```

Abra http://localhost:3000.

## Conteúdo

- Edite projetos, experiência, redes e e-mail em `app/data.ts`.
- A página inicial fica em `app/page.tsx`.
- Cada artigo fica em `app/blog/<slug>/page.mdx`.
- Rode `npm run build` para gerar a versão estática em `out/`.

O GitHub Actions publica o site no GitHub Pages quando há push para `main`.
