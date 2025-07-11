# Deploy do Frontend na Vercel

Este guia mostra como publicar o frontend deste projeto (React) na Vercel.

## 1. Pré-requisitos

- Conta gratuita na [Vercel](https://vercel.com/)
- Projeto já versionado no GitHub, GitLab ou Bitbucket

## 2. Estrutura do Projeto

- O diretório correto para deploy é `frontend`.
- O backend Python **não** será hospedado na Vercel.

## 3. Passos para Deploy

### 3.1. Suba seu projeto para um repositório Git

Se ainda não estiver no GitHub, suba o projeto.

### 3.2. Crie um novo projeto na Vercel

1. Acesse [Vercel](https://vercel.com/)
2. Clique em **New Project**
3. Importe o repositório do seu projeto
4. Na configuração, selecione o diretório `frontend` como root
5. Comando de build: `npm run build`
6. Diretório de saída: `build`

### 3.3. Variáveis de Ambiente

Se usar variáveis de ambiente, configure-as em **Settings > Environment Variables**.

### 3.4. Ajuste as URLs de API

Se o frontend consome APIs, aponte para o backend hospedado externamente (não use `localhost`).

### 3.5. Teste localmente

No terminal, execute:

```sh
cd frontend
npm install
npm run build
```

Se não houver erros, está pronto para deploy.

## 4. Observações

- Imagens em `public/images` serão servidas normalmente.
- O backend Python pode ser hospedado em outro serviço (Render, Railway, etc).

---

Dúvidas? Consulte a [documentação oficial da Vercel](https://vercel.com/docs).
