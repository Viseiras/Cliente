'use strict';
/**
 * El censor DOM
 * ------------------------------------
 * PRORGAMA QUE CENSURA LA PALABRA QUE QUIERAS DE UN TEXTO
 * ------------------------------------
 */
//CONSTANTES GLOBALES
const body = document.getElementsByTagName("body")[0];

//FUNCIONES
/**
 * Función que lee y censura todos los textos de un DOM
 * 
 * @param {Element} elementoPadre - Elemento DOM del que leeremos el texto
 */
function lectorTextual(elementoPadre) {
    //Convertimos los hijos en array
    let arrayPadre = Array.from(elementoPadre.children);

    for (let i = 0; i < arrayPadre.length; i++) {
        //Obtenemos el texto del hijo
        let texto = arrayPadre[i].textContent;
        let arrayHijo = texto.split(" ");

        //Reemplazamos las palabras censuradas
        for (let j = 0; j < arrayHijo.length; j++) {
            if(censurador(arrayHijo[j],"sexo")){
                arrayHijo[j] = `<span class="censurado">Contenido Bloqueado</span>`;
            }
        }

        arrayPadre[i].innerHTML = arrayHijo.join(" ");
    }
}

/**
 * Función que comprueba si una palabra es igual a la palabra a censurar
 * 
 * @param {string} palabra - Palabra que vamos a inspeccionar
 * @param {string} palabraCensurada - Palabra que queremos censurar
 * @returns {boolean}
 */
function censurador(palabra,palabraCensurada) {
    if(palabra.toLowerCase()===palabraCensurada) return true;
    else return false;
}

//MAIN
lectorTextual(body);
