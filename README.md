# 🍔 Projeto React - Site de Delivery com Consumo de API

Este projeto simula um site de delivery utilizando **React + Vite**, onde os dados de comidas, restaurantes e promoções são consumidos de uma API e exibidos dinamicamente através de componentes React.

## 🛠 Tecnologias Utilizadas

- [React]
- [Vite]
- [Bootstrap]
- [Fetch API]

## 🎯 Objetivo

Demonstrar como construir uma aplicação **client-side** moderna com React, consumindo dados de uma API externa e exibindo essas informações de forma interativa e responsiva.

## 📄 Descrição do Projeto

O sistema é composto por diversos **componentes reutilizáveis** que representam:

- Restaurantes recomendados  
- Lista de tendências (Trending)  
- Cabeçalho (Header) e rodapé (Footer) da página

Todos os dados apresentados na aplicação são carregados dinamicamente a partir de uma API externa fake (`https://apifakedelivery.vercel.app/`), usando `fetch`.

## ⚙️ Estrutura dos Componentes

- `Header.jsx`: Componente de navegação no topo do site  
- `Footer.jsx`: Rodapé fixo na parte inferior da tela  
- `Promo.jsx`: Exibe uma promoção em destaque  
- `Trending.jsx`: Mostra uma lista de produtos populares  
- `Restaurants.jsx`: Lista de restaurantes recomendados 
- `App.jsx`: Componente principal que orquestra a renderização das seções

## 📁 Organização de Pastas (Estrutura Geral)

- `src/`
  - `Components/`
    - `Header/` → Componente de cabeçalho
    - `Footer/` → Rodapé fixo com opção de navegação
    - `Promo/` → Exibe promoções em destaque
    - `Trending/` → Lista de produtos populares ou em alta
    - `Restaurants/` → Mostra os restaurantes recomendados
  - `App.jsx` → Componente principal que renderiza toda a aplicação
  - `main.jsx` → Ponto de entrada da aplicação React
- `public/` → Contém o `index.html` usado como base pelo Vite
- `.env` → Arquivo de variáveis de ambiente para configuração da API

## 🚀 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://https://github.com/gabrielkazak/DeliveryReact
   cd DeliveryReact
   npm install
   crie um .env na raiz do projeto e adicione as URL alvo
   npm run dev
   acesse no navegador localhost:5173

## 👤 Autor

    Gabriel – Estudante de Informática
    Projeto desenvolvido como prática de utilização de React.
