# Pontos Turísticos
 
## Descrição do Projeto
<p>Projeto para adicionar e listar pontos turísticos</p>

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [React](https://reactjs.org)

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

*Se já possui uma database que deseja utilizar é só alterar para o nome dela no arquivo connection.js

*Agora, para criar a database, recorte a linha que específica da database  no connection.js (database: 'dbpontosturisticos') e então acesse: <http://localhost:3003/createdb>

Para criar a tabela pontosturisticos, coloque de volta a linha da database se caso tenha tirado, e acesse <http://localhost:3003/createtable>  


Configurando o frontend
============
Com o backend rodando, basta na pasta do projeto frontend, frontpt, instalar as dependências com o comando

```
yarn install
```
E rodar a aplicação

```
yarn start
```
Pronto ela está pronta para uso.


