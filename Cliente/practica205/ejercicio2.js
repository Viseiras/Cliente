'use strict';

/**
 * Descomponiendo el problema II: el avance
 * ----------------------------
 * PROGRAMA QUE RELLENA UN ARRAY CON NUMEROS NO REPETIDOS Y COMPRUEBA SI HAY NUMEROS REPETIDOS AHORA BIDIMENSIONAL
 * ----------------------------
 */

//FUNCIONES
/**
 * Función que rellena un array con numeros del 1 al 9 sin repetir
 * 
 * @returns {Array}
 */
function rellenaArray(){
    let array=[];

    for(let i=0;i<9;i++){
        let repetido = false;
        let num = (Math.floor(Math.random()*9)+1);

        for(let j=0;j<array.length;j++){
            if(array[j]===num){
                repetido=true;
            }
        }
        if(repetido){
            i--;
        }else{
            array[i]=num;
        }
    }

    //Dividir en un array bidimensional 3x3
    let arrayBidimensional = [];
    for (let i = 0; i < 3; i++) {
        arrayBidimensional.push(array.slice(i * 3, i * 3 + 3));
    }
    
    return arrayBidimensional;
}

/**
 * Función que comprueba si el array tiene numeros repetidos en su longitud (obligatoriamente 9)
 * 
 * @param {Array} array - Array que se pasa como parametro de 9 de longitud
 * @returns {boolean}
 */
function compruebaArray(array) {
    let repetido = false;
    let elementos = [];

    //Convertir el array bidimensional en un array plano
    for (let fila of array) {
        if (Array.isArray(fila)) { // Solo si fila es un array
            for (let num of fila) {
                elementos.push(num);
            }
        }
    }

    //Comprobar si hay repetidos en el array plano
    for (let i = 0; i < elementos.length; i++) {
        for (let j = i + 1; j < elementos.length; j++) {
            if (elementos[i] === elementos[j]) {
                repetido = true;
                break;
            }
        }
        if (repetido) break; //Salir del bucle si ya encontramos repetido
    }

    return repetido;
}



//MAIN
let arrayRellenado = rellenaArray();
console.log(arrayRellenado);
console.log(compruebaArray(arrayRellenado));
console.log(compruebaArray([[1,2,3],[4,5,6],[7,8,8]]));
//FIN