CREATE DATABASE peliculas;

USE peliculas;

-- Tabla Pelicula:
CREATE TABLE `pelicula` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `titulo` varchar(100) NOT NULL,
    `anio` numeric(5) DEFAULT NULL,
    `duracion` numeric(5) DEFAULT NULL,
    `director` varchar(400) DEFAULT NULL,
    `fecha_lanzamiento` date DEFAULT NULL,
    `puntuacion` numeric(2) DEFAULT NULL,
    `poster` varchar(300) DEFAULT NULL,
    `trama` varchar(700) DEFAULT NULL,
  PRIMARY KEY (`id`)
) 

-- Source pelicula.sql

-- Tabla Generos: 
CREATE TABLE `genero` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `nombre` varchar(100) NOT NULL, 
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `pelicula` ADD COLUMN `genero_id` int NOT NULL;

-- Tabla Actores: 
CREATE TABLE `actor` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `nombre` varchar(100) NOT NULL, 
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `actor_pelicula` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `actor_id` int NOT NULL, 
    `pelicula_id` int NOT NULL, 
  FOREIGN KEY (`actor_id`) REFERENCES `actor`(`id`), 
  FOREIGN KEY (`pelicula_id`) REFERENCES `pelicula`(`id`), 
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- Comandos SQL: 

-- Modificar el nombre de una tabla:
-- ALTER TABLE [nombre de la tabla] 
-- RENAME TO [nuevo nombre];

-- Agregar una columna a una tabla:
-- ALTER TABLE [nombre de la tabla] 
-- ADD COLUMN [nombre de la columna] [tipo de dato];

-- Eliminar una columna de una tabla:
-- ALTER TABLE [nombre de la tabla] 
-- DROP COLUMN [nombre de la columna];

-- Modificar el tipo de dato de una columna:
-- ALTER TABLE [nombre de la tabla] 
-- MODIFY COLUMN [nombre de la columna] [tipo de dato];

-- Agregar una clave primaria a una tabla:
-- ALTER TABLE [nombre de la tabla] 
-- ADD PRIMARY KEY ([nombre de la columna]);

-- Eliminar una tabla:
-- DROP TABLE [nombre de la tabla]; 

-- Eliminar una base de datos:
-- DROP DATABASE [nombre de la base de datos]; 