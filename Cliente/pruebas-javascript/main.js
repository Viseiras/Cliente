"use strict";

/**
*   COMO DOCUMENTAR UNA FUNCIÓN EN JAVASCRIPT (aunque esto no es una función) 
* 
*   Calcula edad y jubilación
*
*   @param {string} nombre - Nombre de la persona que usa el programa.
*   @param {number} any - Año actual
*   @param {number} anyNacimineto - Año en el que nació la persona
*  
*/

const any =  new Date().getFullYear();

let nombre = prompt("Introduce tu nombre:");
let anyNacimineto = parseInt(prompt("Introduce tu año de nacimiento:"));

if (isNaN(anyNacimineto) || anyNacimineto>any){
    console.error("Error, el año de nacimiento no es válido");
}else{
    let edad = any-anyNacimineto;
    console.log(`${nombre} tienes ${edad} años`);

    if(edad>=67){
        console.warn("Atención ya deberías estar jubilado");
    }else{
        let faltaEdad = 67-edad;
        console.info(`Te faltan ${faltaEdad} años para jubilarte`);
    }
}

/*
Calcular IMC

let nombre = prompt("Introduce tu nombre: ");
let peso = prompt("Introduce tu peso en kilos: ");
let altura = prompt("Introduce tu altura en metros: ");

let imc = peso/(altura**2);

console.log(`El IMC de ${nombre} es`,imc.toFixed(2));
*/