# Pontos Turísticos
 
## Descrição do Projeto
<p>Projeto para adicionar e listar pontos turísticos</p>

Pré Requisitos
============
Node e Banco de Dados MySQL

Clonando o repositório
============
```
git clone https://github.com/juliafritegotto/pontosturisticos.git
```

Configurando o backend
============
Primeiro é preciso instalar as dependências na pasta do backend.

```
yarn install
```

Então rodar o servidor 

```
yarn start
```

O servidor iniciará na porta 3003,  acesse: <http://localhost:3003>

Com o  MySQL rodando, é possível utilizar as rotas da API para criar uma database e uma tabela.

Para criar a database primeiro recorte a linha que específica a database  no connection.js (database: 'dbpontosturisticos') e então acesse: <http://localhost:3003/createdb>

Agora cole de volta para criar a tabela pontosturisticos através de <http://localhost:3003/createtable>

