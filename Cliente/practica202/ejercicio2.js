'use strict';

/**
 * Mutliplicando
 * ----------------------------
 * PROGRAMA QUE MUESTRA LAS TABLAS DE MULTIPLICAR
 * ----------------------------
 * 
 */

//FUNCIONES
/**
 * Función que al recibir un numero nos imprime por consola de comandos su tabla de multiplicar
 * 
 * @param {number} numero - Parametro que nos indica el indice de la tabla que vamos a multiplicar 
 */
function mutliplicar(numero) {
    let tabla = `TABLA DE MULTIPLICAR DEL ${numero}\n`;

    for (let i = 1; i <= 10; i++) {
        tabla += `${numero} x ${i} = ${numero * i}\n`;
    }

    tabla+="\n";

    console.log(tabla);
}

/**
 * Función que recibe un método o función y un numero para ejecutar varias veces la función con numeros descendientes
 * 
 * @param {number} numero - Parametro que nos indica por que numero empezaremos
 * @param {Function} funcion - Función que se usará para escribir las tablas
 */
function tablas(numero, funcion) {
    if(numero<2){
        funcion(numero);
    }else{
        for(let i=1;i<=numero;i++){
            funcion(i);
        }
    }

}

// MAIN
//Ejemplo con 1 
tablas(1, mutliplicar);
//Ejemplo con 5
tablas(5, mutliplicar);
//Ejemplo con 10
tablas(10, mutliplicar);

//FIN