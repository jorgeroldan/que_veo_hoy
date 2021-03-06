//paquetes necesarios para el proyecto
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controlador = require('./controladores/controlador');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/peliculas', controlador.obtenerPeliculasConFiltros);
app.get('/peliculas/:id', controlador.obtenerPeliculasPorId);
app.get('/generos', controlador.obtenerGeneros);
// app.get('/recomendacion', controlador.recomendarPelicula);

//seteamos el puerto en el cual va a escuchar los pedidos la aplicación
const puerto = '8080';

app.listen(puerto, function () {
  console.log( "Yeahhh! Escuchando en el puerto " + puerto );
});

