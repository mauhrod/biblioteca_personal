
const express = require('express');
const morgan = require('morgan'); // Muestra por consola lo que recibe el servidor
const mysql = require('mysql');

const app = expres()

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
