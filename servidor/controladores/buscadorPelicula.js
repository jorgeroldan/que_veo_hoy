const con = require('../lib/conexion_bd'); 

function buscarPeliculas(req, res) {
    
    const sql = "select * from pelicula"
    
    console.log(req.query)
    con.query(sql, function(error, resultado, fields) {
        if (error) {
            console.log("Chann hubo un error en la consulta", error.message);
            return res.status(404).send("Hubo un error en la consulta");
        }
        let response = {
            peliculas: resultado
        };
        console.log("esta")
        res.send(JSON.stringify(response));
    });
}

// function buscarPelicula(req, res) {
//     const id = req.params.id;
//     const sql = "select * from pelicula where id = " + id;
//     con.query(sql, function(error, resultado, fields) {
//         if (error) {
//             console.log("Upssss Hubo un error en la consulta", error.message);
//             return res.status(404).send("Hubo un error en la consulta");
//         }
//         if (resultado.length == 0) {
//             console.log("No se encontro ningún nombre con ese id");
//             return res.status(404).send("No se encontro ningún nombre con ese id");
//         } else {
//             const response = {
//                 'peliculas': resultado[0]
//             };

//             res.send(JSON.stringify(response));
//         }

//     });
// }

module.exports = {
    buscarPeliculas: buscarPeliculas
};

