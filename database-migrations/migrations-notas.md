### Notas Sequelize e Migrations

O que o migrations resolve questao de versionamento de banco de dados.
code first
1. Instale sequelize CLI

**npm install --save-dev sequelize-cli**

1. Crie uma pasta database-migration na raiz do diretorio:

**mkdir database-migration**

1. Troque o arquivo config.json para dentro pasta /config **config.js**


1. iniciar o projeto :**npx sequelize-cli init**
1. Criar base de dados :**npx sequelize-cli db:create**

1. Criar migrations : **npx sequelize-cli migration:generate --name create-privilegies_users**

**Toda a migrations tem o comando de up (criar uma versão acima) down (voltar uma versao abaixo ou excluir o que foi feito)**

#### Criando Base de dados e estrutura.
##### Teste

1. Criar base de dados testes :**NODE_ENV=test npx sequelize-cli db:create**
1. Criar as tabelas;
**NODE_ENV=test npx sequelize-cli db:migrate**

##### Desenvolvimento

1. Criar base de dados testes :**NODE_ENV=dev npx sequelize-cli db:create**
1. Criar as tabelas;
**NODE_ENV=dev npx sequelize-cli db:migrate**

1. Criar suas table como esta no aquivo migrations
1. Digite o comando para execultar as alteracoes
1. **npx sequelize-cli db:migrate**


1. Desfazer as alteracoes:
npx sequelize-cli db:migrate:undo

1. Para criacao do Seeds 
npx sequelize-cli db:seed:undo:all
npx sequelize-cli db:seed:all


1. Criar um SEEDER 
npx sequelize-cli seed:generate --name demo-user