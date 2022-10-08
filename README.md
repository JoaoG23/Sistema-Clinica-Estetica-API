

<div  align=center >

<h1>ZauEstetica-API 💅🏽 🚨Em Desenvolvimento<h1>

<img width='200px' src="./assets/logo.svg" />

</div>

### Indice 👨‍💻

<p align=center>
 <li> <a href="#introdução">1 - 🚪Introdução</a> •</li>
 <li> <a href="#desenvolvimento">2 - 👩🏽‍🌾 Criação e Tecnologias</a> • </li>
 <li> <a href="#instalar">3 - 👇🤘 Como instalar</a> • </li>
 <li> <a href="#usar">4 - 🤘Como Usar</a> • </li>
 <li> <a href="#consideraçoesfinais">5 - Considerações finais </a> • </li>
 <li> <a href="#autor">6 -🧑‍💻 Autor</a> • </li>
 <li> <a href="#licensa"> 7- Licença</a> • </li>
</p>

## Edições ✏️📑

|             Alterações             |   Data   | Versão |
| :--------------------------------: | :------: | :----: |
| Emissão Inicial | 08/10/22 | 1.0.1  |

<h2 id='introdução' color=green ><b>1 - Introdução</b></h2>

<img width="300px" src="https://media.tenor.com/lpkeOfuQaNsAAAAi/hair-flip-shiny-hair.gif">

**API em desenvolvimento ainda 🚨** ,sistema Zau-estetica é um voltado para o gestão de agendamento de clientes, o nome ZAU e homenagem a minha mãe. 

<h2 id='desenvolvimento'><b>2- Criação e Tecnologias 👩🏽‍🌾😰 </b></h2>
<img width="450px" src="https://media.tenor.com/40A4taEpX78AAAAM/tom-and-jerry-preparing.gif">

### Check list de desenvolvimentos em andamento

**Funcionalidade**

- [x]  Rota de Usuário e Autenticação
- [ ]  Rota de Agendamento
- [ ]  Rota de Clientes
- [ ]  Rota de Funcionarios
- [ ]  Rota de Tipo de Serviços

### 👥 Principais Tecnologia usadas até o momento

**• Typescript**
**• PostgresSQL**
**• Express**
**• Sequelize**
**• Nodejs**

<section>  
    <img width="70px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
    <img width="70px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
   <img width="70px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />     
   <img width="70px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" />     
   <img width="70px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />     
</section>

<br>

Novamente, como sempre como nos projetos anteriores utilizei arquitura **MVC**

<h2 id='instalar'><b>3- Como instalar 🧑‍🔧</b></h2>

<h3><b>DATABASE</b></h3

**ATENCÃO🚨**

<!-- Se não quizer usar as **migrações** importe a base de dados que está na pasta /assets/**backup-db-wow-06-10-2022.sql** -->

**MIGRATIONS**

1. Tenha um **NODEjs** e **PostgresSQL 11** instalado.
2. Clone o projeto.
3. Digite na pasta do projeto npm install.
4. Entre na pasta /database-migrations
5. Crie um .env na /database-migrations com as configuracao abaixo:

                DB_HOST=
                DB_PORT=
                DB_DATABASE=
                DB_USER=
                DB_PASSWORD=
                DB_DIALECT=

Preencha as configurações como o exemplo abaixo:

Exemplo preenchido .env:



                DB_HOST='localhost'
                DB_PORT=5432
                DB_DATABASE='db_zauestetica'
                DB_USER='postgres'
                DB_PASSWORD='admin'
                DB_DIALECT='postgres'


6. Digite **npx sequelize-cli db:migrate** dentro da pasta /database-migrations.

7. **ATENÇAO🚨** 

Se ele der algum erro, digite o comando acima novamente.

<h2><b>SISTEMA</b></h2>


7. Após isso crie um **.env** na pasta raiz **/** e configure apontando para sua base de dados. Conforme abaixo ou como sua preferencia :

Exemplo nao preenchido no arquivo .env.example:

                DB_HOST=
                DB_PORT=
                DB_DATABASE=
                DB_USER=
                DB_PASSWORD=
                DB_DIALECT=

                PORT_SERVER=
                TOKEN_SECRET=

Exemplo preenchido .env:

                DB_HOST='localhost'
                DB_PORT=5432
                DB_DATABASE='db_zauestetica'
                DB_USER='postgres'
                DB_PASSWORD='admin'
                DB_DIALECT='postgres'


                PORT_SERVER=3000
                TOKEN_SECRET='segredotoken'

8. Após volte para pasta **/** e digite seguinte comando abaixo:

   npm run build

9. Em seguida para roda o projeto digite npm run prod

10 . Dentro da pasta /**assets** há a collection da API chamada **collection_api_har-date**, poderá usar para Usar na API de
Teste, **_Insomnia ou postman_** de sua preferencia. 

<h2 id='usar'><b>4- Como usar 👩‍💻</b></h2>


<!-- <img width='700px' src="./assets/fluxo.png" /> -->

Cada usuário usuario pode ser logar 

Basicamente tem 2 Rotas principais ainda!

1. /session = Controlas as sessões de login do usuário.
2. /users = manipula os dados do usuários


De uma olhada na documentação para melhor entendimento.

<!-- <h3>👉🏽<a href='https://wayoftheweights-docs-api.netlify.app'>Clique aqui para acessa a documentacão</a></h3> -->

<h2 id='consideraçoesfinais'><b>5 -🥺😭 Considerações finais</b></h2>

Ahhh, mas você já vai ir embora 😢 ...

Esse projeto ainda esta sendo criado. adicionar as funcionalidade ao poucos, até que ele chegue ao seu padrão definitivo.
no mais muito obrigado!
🤗🙋‍♂️!

### Autor ✍🏻
---


![avatar](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/80895578?v=4?v=4&h=100&w=100&fit=cover&mask=circle&maxage=7d
)

 <sub><b>Joao Guilherme</b></sub></h4> <a href="https://github.com/JoaoG23/">🚀</a>

Feito com 🤭 por Joao Guilherme 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Joao-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jaoo/)](https://www.linkedin.com/in/joaog123/)
[![Badge](https://img.shields.io/badge/-joaoguilherme94@live.com-c80?style=flat-square&logo=Microsoft&logoColor=white&link=mailto:joaoguilherme94@live.com)](mailto:joaoguilherme94@live.com)

<h2 id='licenca'><b>7 - Licença</b></h2>

[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)

