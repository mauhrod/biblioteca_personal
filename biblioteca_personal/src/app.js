/*



*/

const app = require('../../../Ejemplos/nodejs-intermedio-m1u4_cancion_hbs/controllers/artistaAPIController');


express = require('express');
morgan = require('morgan'); // Muestra por consola lo que recibe el servidor
mysql = require('mysql');

app = expres()

// Settings
app.set('port', process.env.PORT || 3000);


// Midlewares
app.use(morgan, (dev));
app.use(express.json());
app.use(urlencoded()); // Todavía no lo usaremos pero va a ser necesario para trabajar con formularios



// Routes

app.use('api/category', require('./routes/category'));
app.use('api/persons', require('./routes/persons'));
app.use('api/book', require('./routes/book'));




// Server
app.listen(app.get('port'), ()=> {
    console.log(`Escuchando en el puerto ${app.get('port')}`);
})