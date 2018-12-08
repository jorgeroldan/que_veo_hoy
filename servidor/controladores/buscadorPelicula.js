const con = require('../lib/conexion_bd'); 

function buscarPeliculas(req, res) {
    
    const sql = "select * from pelicula"
    console.log(con.config)

        // console.log('process.env.DB_HOST'+process.env.DB_HOST)
    // console.log('process.env.DB_HOST'+process.env.DB_PASS)
    // console.log('process.env.DB_HOST'+process.env.)
    // console.log('process.env.DB_HOST'+process.env.DB_HOST)
    // console.log('process.env.DB_HOST'+process.env.DB_HOST)
    
    con.query(sql, function(error, resultado, fields) {
        if (error) {
            console.log("Chann hubo un error en la consulta", error.message);
            return res.status(404).send("Hubo un error en la consulta");
        }
        let response = {
            peliculas: resultado
        };
        res.send(JSON.stringify(response));
    });
}

module.exports = {
    buscarPeliculas: buscarPeliculas
};

