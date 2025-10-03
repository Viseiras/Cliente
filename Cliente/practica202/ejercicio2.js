'use strict';

/**
 * Mutliplicando
 * ----------------------------
 * PROGRAMA QUE MUESTRA LAS TABLAS DE MULTIPLICAR
 * ----------------------------
 * DOCUMENTACION
 * Ejercicio 2 - Multiplicando
Genera una función que imprima por consola las tablas de multiplicar de los números que van
desde el indicado como parámetro (entero positivo mayor a dos) hasta dos. Para ello recibe
dos parámetros: un número y una función.
• La función pasada como parámetro será la que calcule la tabla de multiplicar. Habrá
que diseñar primero esa función y luego pasarla como parámetro. Esta función recibe
un número como parámetro e imprime su tabla de multiplicar (debidamente
formateada).
• Por ejemplo, si se ejecuta tablas(5, multiplicar) imprimirá por consola las tablas del dps.
La del tres, la del cuatro y la del cinco, eso sí, debidamente formateadas
 */

//FUNCIONES
function mutliplicar(numero) {
    let tabla = `TABLA DE MULTIPLICAR DEL ${numero}\n`;

    for (let i = 1; i <= 10; i++) {
        tabla += `${numero} x ${i} = ${numero * i}\n`;
    }

    console.log(tabla);
}

function tablas(numero, funcion) {
    funcion(numero);

}

// MAIN
tablas(1, mutliplicar);


//FIN