<div align=center ><h1>Teste Poligonos</h1>

        
</div>

<ol>
    <li> <a href="#introducao"> Introdução</a> •</li>
        <li> <a href="#comoinstalar"> Como instalar</a> •</li>
        <li> <a href="#comousar"> Como usar</a> •</li>
        <li> <a href="#consideracoesfinais"> Considerações finais</a> •</li>
    </ol>
<div>
<h3>Introdução</h3>
<div> Tem o intuito de avalição das competências requiridas, criando 3 rotas de cadastro de polígonos na API.</div>
<br>
</div>
<div>
<h3>Como instalar</h3>
</div>  

1. Tenha um **NODE** e **PostgresSQL 11** instalado.
2. Clone o projeto.

3. Abrá o pgadmin ou plataforma de banco de dados que deseja.
4. Crie dois bancos de dados um para testes e outra para desenvolvimento.

Exemplo abaixo:

    CREATE DATABASE poligonos_db;
    CREATE DATABASE poligonos_db_test;


6. Entre na pasta /assets na raiz do projeto
7. Pegue o arquivo abaixo da base de dados e importe-o na
banco de dados postgresSQL para cada uma dos banco acima;


Nome do arquivo de backup:
        20221123db_poligonos.sql

**Ou usar as migrações clique abaixo para conferir (Opcional), mas se não quizer basta continuar as configurações abaixo:**

<h3>Configuração Migrations/ ou migrações (Opcional)</h3>
<details>
<summary>
    Clique aqui para saber mais!
</summary>


1. Entre no terminal de preferencia
2. Acesse a pasta /database-migrations via terminal
3. Crie um arquivo .env com o seguinte modelo abaixo:

Exemplo abaixo:

        # DEV
        DB_HOST=
        DB_PORT=
        DB_DATABASE=
        DB_USER=
        DB_PASSWORD=
        DB_DIALECT=

        # TEST
        DB_HOST_TEST=
        DB_PORT_TEST=
        DB_DATABASE_TEST=
        DB_USER_TEST=
        DB_PASSWORD_TEST=
        DB_DIALECT_TEST=


4. Preenchar os com as informações da configuração do banco de dados quanto o test(testes) quanto o (dev)desenvolvimento para conectar com a base de preferencia. Como abaixo:

Exemplo:

        # DEV
        DB_HOST='localhost'
        DB_PORT=5432
        DB_DATABASE='poligonos_db'
        DB_USER='postgres'
        DB_PASSWORD='admin'
        DB_DIALECT='postgres'

        # TEST
        DB_HOST_TEST='localhost'
        DB_PORT_TEST=5432
        DB_DATABASE_TEST='poligonos_db_test'
        DB_USER_TEST='postgres'
        DB_PASSWORD_TEST='admin'
        DB_DIALECT_TEST='postgres'


**Criar Base de dados**

5. Digite o **NODE_ENV=test npx sequelize-cli db:create** para criar banco de dados de testes.

6. Em seguida digite o **NODE_ENV=dev npx sequelize-cli db:create** para criar banco de dados de desenvolvimento.


**Criar Tabelas**

5. Digite o **NODE_ENV=test npx sequelize-cli db:migrate** para criar tabelas de testes.

6. Em seguida digite o **NODE_ENV=dev npx sequelize-cli db:migrate** para criar tabelas de desenvolvimento.

7. Verifique e a base de dados foram criadas
Agora basta ir para próxima configuração.

</details>

**Continuando .... após as bases de dados importadas**.

3. Digite na pasta do projeto npm install.
5. Crie um .env e env.test na /raiz do projeto com as configuracao abaixo:


                DB_HOST=
                DB_PORT=
                DB_DATABASE=
                DB_USER=
                DB_PASSWORD=
                DB_DIALECT=

Preencha as configurações como o exemplo abaixo:

Exemplo preenchido .env:

                #DEV & PRODUTIONS   

                DB_HOST='localhost'
                DB_PORT=5432
                DB_DATABASE='poligonos_db'
                DB_USER='postgres'
                DB_PASSWORD='admin'
                DB_DIALECT='postgres'


E configure o para rodar os teste;

Exemplo preenchido .env.test:

                # TEST
                DB_HOST='localhost'
                DB_PORT=5432
                DB_DATABASE='poligonos_db_test'
                DB_USER='postgres'
                DB_PASSWORD='admin'
                DB_DIALECT='postgres'


                PORT_SERVER=3000





</div>
<br>
<h3>Como usar</h3>
<div>


0. Após tudo instalado
1. Entre na pasta raiz
2. npm start ou npm run prod para iniciar o projeto
3. Pronto funcionando..
4. Caso queira importa a collections para api de teste basta entrar na pasta /assets no arquivo api_collection_2022-11-23.json

Confira a documentação mais detalhada da API-><a href='https://poligono-teste-docs-api.netlify.app'>Clicando aqui</a>

A api tem 3 rotas principais.
/estatísticas/soma-todos-area-poligonos = Traz o calculo de soma de todas as áreas de todos os polígonos.


/retangulo = Duas rotas onde inserir um retângulo e listá-los

/triangulo = Duas rotas onde inserir um triangulo e listá-los


</div>
<br>
</div><div>
<h3>Considerações finais</h3>
<div> 

Qualquer coisa entre em contato. 
Agradeço desde já!

<br>
<br>
Atenciosamente: João Guilherme

</div>
<br>
</div>
