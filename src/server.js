const express = require('express');
const favicon = require('serve-favicon');
const app = express();
const productosRoutes = require('./routes/productos.routes').router;
const indexRoutes = require('./routes/index.routes.js').router;

//* AGREGAR PÁGINA ESTÁTICA
app.use(express.static('public'));

//* AGREGAR FAVICON A TODAS LAS PÁGINAS.
app.use(favicon('public/IMG/favicon.ico'));

//* MIDDLEWARE - Para darle acceso al core de que pueda manipular MYSQL.
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//* MIDDLEWARE - Sirve para parsear el body del POST para poderlo obtener.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//* Recibe los datos y los convierte en JSON para después mandarlos a las rutas siguientes.
app.use(express.json());

//! END POINTS
//* PARA USAR LA ROUTES DE PRODUCTOS.
app.use(indexRoutes);
app.use('/api',productosRoutes);

app.listen(5050, () => {
    console.log('Servidor escuchando en el puerto 5050...');
});