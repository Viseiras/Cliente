"use strict";
/**
 * Primos DOM
 * -----------------------------
 * PROGRAMA QUE CREA UNA TABLA DINAMICAMENTE Y CON UN BOTÓN ILUMINAMOS LOS PRIMOS
 * -----------------------------
 */

//CONSTANTES GLOBALES
const body = document.getElementsByTagName("body")[0];
//FUNCIONES
/**
 * Función que crea la tabla con los numeros del 1 al 100
 * 
 * @param {number} filas - Filas de la tabla
 * @param {number} columnas - Columnas de la tabla (celdas por fila)
 */
function creaTabla(filas, columnas){
    const tabla = document.createElement("table");
    for(let i=0;i<filas;i++){
        let tr = document.createElement("tr");
        for(let j=0;j<columnas;j++){
            let td = document.createElement("td");
            td.textContent=`${(i*10)+j+1}`;
            tr.append(td);
        }
        tabla.append(tr);
    }

    body.append(tabla);
}

/**
 * Función que resalta todos los primos de la tabla
 */
function esPrimoTabla(){
    const tabla = document.getElementsByTagName("table")[0];

    //Separamos las tr
    let filas = tabla.children;

    //Recorremos las filas
    for(let i=0;i<filas.length;i++){
        //Separamos las celdas (td)
        let columnas = filas[i].children;
        for(let j=0;j<columnas.length;j++){
            //Comprobamos la celda exacta
            let celda = columnas[j];
            //Comprobamos si es primo
            if(esPrimo(parseInt(celda.textContent))){
                //Añadimos la clase primo en toggle
                celda.classList.toggle("primo");
            }
        }
    }
}

/**
 * Función que nos comprueba si el numero recibido es primo
 * 
 * @param {number} numero 
 * @returns {boolean}
 */
function esPrimo(numero) {
    //Los números menores que 2 no son primos
    if (numero<2) return false;

    //Solo necesitamos comprobar hasta la raíz cuadrada del número
    for(let i=2;i<=Math.sqrt(numero);i++) {
        if(numero%i===0){
            return false; //Si es divisible por i, no es primo
        }
    }

    return true; //Si no tiene divisores, es primo
}

//Creamos el botón, le añadimos el texto y le hacemos un eventListener del evento click
const botonPrimo = document.createElement("button");
botonPrimo.textContent = "Calcular números primos";
botonPrimo.addEventListener("click", esPrimoTabla);
//Añadimos el botón al main
body.append(botonPrimo);

//Creamos la tabla
creaTabla(10,10);