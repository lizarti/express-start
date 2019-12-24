# express-start

Projeto básico de api em express com uma ligeira organização.

## Instalação


```
npm install
```
O `npm` vem instalado junto do Node. Isso vai instalar todas as dependências e dependências de desenvolvimento da aplicação.

>Dependências de desenvolvimento são dependências que se usa enquanto desenvolve a aplicação, e não estarão no build final. Ex. ferramenta que converte typescript para javascript, ou de sass para css.

## Como usar
Na raiz do projeto, basta rodar o comando

```
npm start
```

Isso vai abrir o arquivo server.js (ponto de entrada) no nodemon.
O nodemon é uma ferramente que automaticamente reinicia o processo node toda vez que alguma alteração é feita no projeto.

## Estrutura do projeto

```
express-start
└─ src
   ├─ app.js (arquivo principal da aplicação express)
   ├─ controllers
   │  ├─ index.js (arquivo centralizador de controllers)
   │  └─ UsuarioController.js
   ├─ models
   │  └─ Usuario.js
   ├─ routes
   │  └─ api.js (arquivo de rotas de API)
   ├─ server.js (arquivo de entrada, que inicia o servidor)
   └─ utils (otras cositas mas)
      └─ UUID.js

```

## Licença
[MIT](https://choosealicense.com/licenses/mit/)

