'use strict';

/**
 * Números
 * --------------------
 * PROGRAMA QUE REPITE EL NUMERO Y LO VA MULTIPLICANDO POR 2
 * --------------------
 */

//FUNCIONES
/**
 * Función que nos imprime el numeroInicial por las repeticiones que le pedimos multiplicado por 2 cada vez
 * 
 * @param {*} repeticiones - Variable que te dice cuantas veces se va a mostrar por pantalla el numero además de la incial
 * @param {*} numeroInicial - Numero desde el que se inicia a imprimir
 */
function imprimeMultiplicacion(repeticiones,numeroInicial){
    let cadena = "";
    let numero = numeroInicial;
    for(let i=0;i<repeticiones;i++){
        cadena+=`${numero} `;
        numero*=2;
    }

    console.log(cadena);
}
//MAIN
imprimeMultiplicacion(4,6);

//FIN