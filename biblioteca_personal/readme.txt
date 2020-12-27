Dependencias:
	npm i express morgan mysql
	npm i nodemon -D

Generar los archivos de configuración
	npm init

Modificar package.json agregando dentro de "scripts"{}
	"start": "node src/app.js",
    	"dev": "nodemosn src.js"


Arbol de diectorios:
	raiz: /biblioteca_personal   // Acá van los archivos packaje.json, package.lock.json y la carpeta node_modules
	src: /biblioteca personal/src  /Acá van archivos como app.js
	routes: //biblioteca personal/src/routes // Acá va la API Rest: categoty.js, persons.js, books.js 


Iniciar el servidor:
    Sin Nodemon, dos opciones
	* node src/app.js
	* npm run start
    Con nodemon, dos opciones
	* nodemon src/app
	* npm run dev

Crear la base de datos pero desde la linea de comando usando(asumiendo que es user: root, pass:root) (Cuando hablemos les explico lo que pensé con esto)
	Creado el archivo "src/dev/database.sql" con instruccciónes SQL
	para crear la base de datos, las tablas y sus relaciones ejecutar en consola desde el directorio raiz del proyecto (WIN y LINUX(falta probar):
	
	* mysql -u root -proot biblioteca_personal < src/db/create_db.sql (Falta hacerlo bien) (Cuando hablemos les explico lo que pensé con esto, VER FINAL DEL ARCHIVO)

Populación inicial de la base de datos:
	Idem al anteior	pero para poblar la base de datos
	* mysql -u root -proot biblioteca_personal < src/db/populate.sql (Falta hacerlo, VER FINAL DEL ARCHIVO)

Completar la API, sólo puse la ruta de los diferentes métodos que hay que usar obligatoriamente y, como comentario,
lo que nos pide la profesora desarrollar.
books.js
category.js
personas.js

La profesora dijo que: "Se evaluara la correcta implementacion, el uso de try/catch, async-await, cors, express, validacion de los datos solicitados, manejo de errores."
"cors" lo voy a googlear porque no lo escuché antes

Y ademas habría que hacer una breve documentación sobre la API 


* LOS PROFESORES RECIBIDO EL TRABAJO SIN node_modules NI EXPORTACION DE LA BASE DE DATOS (PRESUPONEMOS QUE TIENE NODE.JS Y MySQL) 
  TENDRIAN QUE HACER

npm init
mysql -u root -proot biblioteca_personal < src/db/create_db.sql
mysql -u root -proot biblioteca_personal < src/db/populate.sql

y listo ya tienen funcionando el backend con los datos de MySQL
