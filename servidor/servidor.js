//paquetes necesarios para el proyecto
const env = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const buscadorPelicula = require('./controladores/buscadorPelicula');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/peliculas', buscadorPelicula.buscarPeliculas);
// app.get('/peliculas/:id', buscadorPelicula.buscarPelicula);
// app.get('/generos', buscadorControlador.buscarGeneros);

//seteamos el puerto en el cual va a escuchar los pedidos la aplicación
const puerto = '8080';

app.listen(puerto, function () {
  console.log( "Yeahhh! Escuchando en el puerto " + puerto );
});

