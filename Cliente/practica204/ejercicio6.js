'use strict';

/**
 * Numeros
 * ----------------------------
 * PROGRAMA NOS CALCULA CUANTOS NUMEROS HAY PRIMOS Y A LA VEZ CAPICUA EN EL INTERVALO 0 - 100000
 * ----------------------------
 * Escribe una función que calcule cuántos números son a la vez primos y palíndromos (capicua)
hasta 100000 y los meta todos en un array. Luego muestra el listado por consola debidamente
formateado.
 */



//FUNCIONES

function esCapicua(inicio, fin){
    let coincidencias = [];
    for(let i = inicio; i <= fin; i++){
        let numStr = i.toString();
        let numRevertido = numStr.split('').reverse().join('');
        if(numStr === numRevertido){
            coincidencias.push(i);
        }
    }
    return coincidencias;
}

function esPrimo(inicio, fin){
    let coincidencias = [];
    for(let i = Math.max(2, inicio); i <= fin; i++){
        let esPrimo = true;
        for(let j = 2; j*j <= i; j++){
            if(i % j === 0){
                esPrimo = false;
                break;
            }
        }
        if(esPrimo){
            coincidencias.push(i);
        }
    }
    return coincidencias;
}


//MAIN
//Ejecución con el intervalo designado y la letra que nos dicen
let arrayCapicua = esCapicua(0,100000);
let arrayPrimo = esPrimo(0,100000);

let set= new Set(arrayPrimo);

let coincidencias = arrayCapicua.filter(valor => valor > 1 && set.has(valor));

console.log(coincidencias);

//FIN