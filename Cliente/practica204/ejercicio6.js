'use strict';

/**
 * Numeros
 * ----------------------------
 * PROGRAMA NOS CALCULA CUANTOS NUMEROS HAY PRIMOS Y A LA VEZ CAPICUA EN EL INTERVALO 0 - 100000
 */

//FUNCIONES
/**
 * Función que nos calcula los primos que a la vez son capicua entre 0 y 100k 
 * 
 * @returns {Array}
 */
function esPrimoCapicua() {
    let coincidencias = [];

    for (let i = 0; i < 100000; i++) {
        let esCapicua = false;
        let esPrimo = true;
        let indiceString = i.toString();

        //Comprobamos si es capicúa
        if (indiceString.split("").reverse().join("") === indiceString) {
            esCapicua = true;

            //Si el numero ya es capicúa comprobamos si no es primo, menores de 2 no son primos
            if (i < 2) {
                esPrimo = false;
            } else if (i > 2 && i % 2 === 0) { //Que sean mayores de 2 y multiplos de 2 no son primos
                esPrimo = false;
            } else { //Hacemos un bucle que comprueba de la manera más eficiente posible si son divisbles por otro numeros empezando por 3 y subiendo de 2 en 2
                for (let j = 3; j * j <= i; j += 2) { //Finaliza el bucle si j^2 es mayor a i (no podría seguir siendo divisible por un numero que sea más de su mitad) por lo tanto es primo 
                    //Si i es divisble por j no es primo
                    if (i % j === 0) {
                        esPrimo = false;
                        break; // corta el bucle al primer divisor
                    }
                }
            }
        }

        //Si es primo y a la vez capicua lo añadimos al array
        if (esPrimo && esCapicua) {
            coincidencias.push(i);
        }
    }

    return coincidencias;
}

//MAIN
let arrayCapicuaPrimo = esPrimoCapicua();
console.log("Números primos y capicúa (0 - 100000)");
console.log(arrayCapicuaPrimo);
console.log("Total encontrados:", arrayCapicuaPrimo.length);
//FIN