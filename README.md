# Blogs API
Esse projeto se trata de uma RESTful API e um banco de dados para a produção de conteúdo para um blog! A aplicação foi desenvolvida em Node.js usando o pacote Sequelize para fazer um CRUD de postagens.

## Funcionalidades
Os endpoints desenvolvidos estão conectados ao banco de dados seguindo os princípios do REST, permitindo as seguintes funcionalidades:

Criação de usuário e login
Criação de postagem
Atualização de postagem
Exclusão de postagem
Listagem de postagens
Além disso, a aplicação trabalha a relação entre usuário e postagem e a associação de postagens para categorias e de categorias para postagens.

## Instalação e Execução
Para executar o projeto, siga os seguintes passos:

 1. Clone o repositório para a sua máquina.
  ```bash
  git clone git@github.com:Leckar/Projeto-Blogs-API.git
  ```
 2. Instale todas as dependências.
  ```bash
  npm install
  ```
 3. Crie o arquivo .env com as seguintes variáveis de ambiente;
  ```shell
  NODE_ENV=development
  API_PORT=3000
  API_HOST=localhost
  MYSQL_HOST=localhost
  MYSQL_PORT=3306
  MYSQL_DB_NAME=blogs-api
  MYSQL_USER=root
  MYSQL_PASSWORD=1234
  ```
 4. Execute o comando npm start para iniciar a aplicação;
  ```bash
  npm start
  ```
 5. Acesse a API pelo <a href="http://localhost:3000" target="_blank">navegador</a> ou ferramentas como o Postman e Thunderclient.
