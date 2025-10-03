"use strict";

/**
 * Estas Delgado
 * ----------------------------
 * PROGRAMA QUE CALCULA EL IMC
 * ----------------------------
 * VARIABLES DE MARCOS
 * @param {number} masaMarcos - Masa en kilogramos de Marcos
 * @param {number} alturaMarcos - Altura en metros de Marcos
 * @param {number} imcMarcos - Variable que almacena el IMC de Marcos
 * 
 * VARIABLES DE JUAN
 * @param {number} masaJuan - Masa en kilogramos de Juan 
 * @param {number} alturaJuan - Altura en metros de Juan
 * @param {number} imcJuan - Variable que almacena el IMC de Juan
 * 
 * VARIABLES IMC
 * @param {boolean} marcosImcMayor - Booleano que guarda si el IMC de Marcos es mayor que el de Juan 
 * @param {boolean} imcIguales - Booleano que guardo si el IMC de Marcos y Juan son iguales
 * 
 */


//MAIN
//Pedimos los datos de Marcos y calculamos su IMC
let masaMarcos = compruebaDatos(prompt("Introduce la masa en kilogramos de Marcos: "),"Float");
let alturaMarcos = prompt("Introduce la altura en metros de Marcos: ");
let imcMarcos = masaMarcos/alturaMarcos**2;

//Pedimos los datos de Juan y calculamos su IMC
let masaJuan = prompt("Introduce la masa en kilogramos de Juan: ");
let alturaJuan = prompt("Introduce la altura en metros de Juan: ");
let imcJuan = masaJuan/alturaJuan**2;

//Comprobamos si el IMC de Marcos es mayor al de Juan
let marcosImcMayor;
let imcIguales;

//Si es mayor el IMC de Marcos que el IMC de Juan nos devuelve verdadero
if(imcMarcos>imcJuan){
    marcosImcMayor=true;
}
else{
    //Si el IMC de ambos es igual nos devuelve falso pero verdadero a imcIguales
    if(imcMarcos===imcJuan){
        imcIguales=true;
        marcosImcMayor=false;
    }
    //Si el IMC de Marcos no es mayor ni igual al de Juan devuelve falso
    else{
        marcosImcMayor=false;
    }
}

//Imprimimos el IMC de Marcos y Juan por consola
console.log(`El IMC de Marcos es ${imcMarcos.toFixed(2)} y el IMC de Juan es ${imcJuan.toFixed(2)}`);

//Comparamos que IMC es mayor. 
if(marcosImcMayor){
    console.log("El IMC de Marcos es mayor");
}else if(imcIguales){
    console.log("Los IMC de los dos son iguales");
}else{
    console.log("El IMC de Juan es mayor");
}

//FIN