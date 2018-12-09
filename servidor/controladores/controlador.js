const con = require('../lib/conexion_bd'); 


// function obtenerPeliculas(req, res) {
    
//     const sql = "select * from pelicula"
//     console.log(con.config)
    
//     con.query(sql, function(error, resultado) {
//         if (error) {
//             console.log("Chann hubo un error en la consulta", error.message);
//             return res.status(404).send("Hubo un error en la consulta");
//         }
//         let response = {
//             peliculas: resultado
//         };
//         res.send(JSON.stringify(response));
//     });
// }

function obtenerGeneros(req, res){
    const sql = "select * from genero"

    con.query(sql, function(error, resultado) {
        if (error) {
            console.log("Chann hubo un error en la consulta", error.message);
            return res.status(404).send("Hubo un error en la consulta");
        }
        let response = {
            generos: resultado
        };
        res.send(JSON.stringify(response));
    });
}

// 
function obtenerPeliculasPorFiltos(req,res){
    let sql = con.peliculas(req.query.columna_orden, req.query.tipo_orden)
    let parametros = obtenerParametros(req.query)

    con.query(sql, parametros, (error, resultados)=>{
        if (error) {
            console.log("Chann hubo un error en la consulta", error.message);
            return res.status(404).send("Hubo un error en la consulta");
        }
        let response = {};
        response.peliculas = resultados;
       
        sql = consulta.totalPeliculas 
        con.query(sql, parametros, (error, resultados) =>{
            if(error){
                return res.status(404).send("Hubo un error en la consulta");
            }
            response.total = resultados[0].total
        })
        res.send(JSON.stringify(response));
    })
}

function obtenerParametros(querys, inicio, cantidad){
    let cantidad = parseInt(req.query.cantidad)
    let valoresFiltros = obtener
    let parametros = [...valoresFiltros, inicio, cantidad]
    return parametros;
}

function obtenerValoresFiltrosPeliculas(){

    return valoresFiltros
}

//Consultas 
// Esta parte es colaboración de Angel Verdu como Mentor

//Consulta de peliculas dependiendo de los filtros elegidos
const peliculas = function( columnaOrden, tipoOrden ) {
    return "SELECT id, titulo, duracion, director, anio, " + 
           "fecha_lanzamiento, puntuacion, poster, trama  " + 
           "FROM pelicula " +
           "WHERE   ( ? IS NULL OR genero_id = ? ) AND " +
           "        ( ? IS NULL OR titulo LIKE ? ) AND " +
           "        ( ? IS NULL OR anio = ? ) " + 
           "ORDER BY  " + columnaOrden + " " + tipoOrden + " " +
           "LIMIT ?, ? ";
  };

//   SELECT COUNT(*) AS total



module.exports = {
    obtenerPeliculasPorFiltos, 
    obtenerGeneros
};

