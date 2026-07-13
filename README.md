# Portfólio — Michel Lutegar

Portfólio pessoal desenvolvido em React, apresentando projetos, experiência e formas de contato.

🔗 **Online:** https://mlutegar.github.io/portfolio_site

## Tecnologias

- React
- SCSS
- GitHub Pages (deploy)

## Rodando localmente

Pré-requisitos: [Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/download/) (com npm).

```bash
# Clonar o repositório
git clone https://github.com/mlutegar/portfolio_site.git
cd portfolio_site

# Instalar dependências
npm install

# Iniciar em modo desenvolvimento (http://localhost:3000)
npm start
```

## Build de produção

```bash
npm run build
```

## Deploy (GitHub Pages)

```bash
npm run deploy
```

## Docker

```bash
docker build -t portfolio-michel-lutegar:latest .
docker run -t -p 3000:3000 portfolio-michel-lutegar:latest
```

## Personalização

O conteúdo do portfólio (projetos, textos, links) fica centralizado em
`src/portfolio.js`.

## Créditos

Estrutura inicial baseada no template open-source
[developerFolio](https://github.com/saadpasta/developerFolio) (licença MIT).

## Licença

MIT — veja o arquivo [LICENSE](LICENSE).
