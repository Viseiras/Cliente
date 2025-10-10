'use strict';

/**
 * Descomponiendo el problema I: el inicio
 * ----------------------------
 * PROGRAMA QUE RELLENA UN ARRAY CON NUMEROS NO REPETIDOS Y COMPRUEBA SI HAY NUMEROS REPETIDOS
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

    return array;
}

/**
 * Función que comprueba si el array tiene numeros repetidos en su longitud (obligatoriamente 9)
 * 
 * @param {Array} array - Array que se pasa como parametro de 9 de longitud
 * @returns {boolean}
 */
function compruebaArray(array) {
    let repetido = false;

    if (array.length===9) {
        for (let i=0;i<array.length;i++) {
            for (let j=i+1;j<array.length;j++) {
                if (array[i]===array[j]) {
                    repetido=true;
                }
            }
        }
    }

    return repetido;
}

//MAIN
let arrayRellenado = rellenaArray();
console.log(arrayRellenado);
console.log(compruebaArray(arrayRellenado));
console.log(compruebaArray([1,2,3,4,5,6,7,8,8]));
//FIN