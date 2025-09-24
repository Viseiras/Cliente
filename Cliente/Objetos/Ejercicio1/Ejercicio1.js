'use strict';

const pelicula = {
    titulo:"Terminator 2",
    anyo:1984,
    reparto:["Arnold Schwazenegger","James Cameron"]
};

console.log(pelicula.titulo);
//console.log(pelicula['titulo']);
//console.log(pelicula.anyo);
//console.log(pelicula.reparto[0]);

pelicula.productora = 'Columbia';
console.log(pelicula);

delete pelicula.anyo;

console.log(pelicula);

console.log(Object.keys(pelicula));