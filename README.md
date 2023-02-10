# API Express, TypeScript, MongoDB, Express-Validator, Winston-Logger
API construída com Express, TypeScript, MongoDB. Ela fornece rotas para criar, obter, atualizar e deletar filmes. E outras funcionalidades(gerenciamento de logs e validações de dados de entrada).

## Instalação
1 - Clone este repositório:
```bash
git clone https://github.com/LucasLuccaCode/api-restful-typescript.git
```

2 - Instale as dependências:
```bash
npm install
```

ou

```bash
yarn install
```

## Configuração
Crie um arquivo `.env` na raiz do projeto e adicione a variável de ambiente `MONGO_URL` com o valor da sua string de conexão no mongodb, exemplo:

```js
MONGO_URL=mongodb://<hostname>:<port>/<database>
```

## Execução
Execute o comando abaixo para iniciar o servidor:

```bash
npm start
```

ou

```bash
yarn start
```

## Rotas
- `GET /api/movies`: Obtém todos os filmes
- `GET /api/movies/:movieId`: Obtém um filme específico pelo ID
- `POST /api/movies`: Cria um novo filme
- `PATCH /api/movies/:movieId`: Atualiza um filme específico pelo ID
- `DELETE /api/movies/:movieId`: Deleta um filme específico pelo ID

## Logging
Este projeto usa o pacote `Winston` para gerenciamento de logs. As informações de log são registradas em arquivos separados para erros e informações gerais.

## Validação de dados
Este projeto também usa o pacote `Express-Validator` para validação de dados de entrada antes de criar ou atualizar um filme para garantir que as informações sejam válidas.

## Tecnologias usadas

- Express
- Typescript
- Mongodb
- Mongoose
- Winston
- Express-validator
- Morgan
- Config
- dotenv

![Preview demo](https://github.com/LucasLuccaCode/api-restful-typescript/blob/main/docs/img/demo.png)