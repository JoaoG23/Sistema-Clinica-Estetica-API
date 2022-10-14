mkdir src assets 
copy null .env

cd src

mkdir controllers models routers  
cd controllers
copy NUL controllers.ts
cd ..

cd models
mkdir schemas
cd schemas
copy NUL schema.ts
cd ..
copy NUL database.ts
cd ..

cd routers
copy NUL routers.ts
cd ..

copy NUL app.ts
copy NUL server.ts


