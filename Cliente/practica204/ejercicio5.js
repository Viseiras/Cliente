'use strict';

/**
 * Más DNI
 * ----------------------------
 * PROGRAMA QUE MUESTRA LOS DNI CON UNA LETRA EN EL INTERVALO DESIGNADO
 * ----------------------------
 */


//CONSTANTES GLOBALES
const arrayLetraDNI = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];


//FUNCIONES
/**
 * Función que imprime todos los DNI que le pases en un array
 * 
 * @param {Array} arrayDNIs - Array que almacena todos los DNI que queremos enseñar
 */
function imprimeDNI(arrayDNIs){

    let cadena ="";

    for(let i=0;i<arrayDNIs.length;i++){
        //Calculamos la letra
        let letra=arrayLetraDNI[arrayDNIs[i]%23];
        //Añadimos unos 0 al principio para que llegue hasta 8, en caso de que el numero de DNI sea menor a 8 digitos (sigue siendo válido) y le añadimos la letra
        let dniFinal = arrayDNIs[i].toString().padStart(8,"0")+""+letra;
        
        if(i%8===0){
            cadena+="\n";
        }
        cadena+=dniFinal+"  ";
        
    }

    console.log(cadena);
}

/**
 * Función que separa los DNI de un intervalo según la letra que se le pase
 * 
 * @param {number} numeroInicio - Parametro que nos indica en que numero empieza el intervalo
 * @param {number} numeroFinal - Parametro que nos indica en que numero acaba el intervalo
 * @param {string} letra - Letra que usaremos para separar los numeros que necesitamos
 * @returns {Array}
 */
function separaDNI(numeroInicio,numeroFinal,letra){

    //Conviertimos a numero la letra que hemos pasado
    let indice = arrayLetraDNI.indexOf(letra);
    let arrayDNIs = [];

    //Recorremos el intervalo
    for(let i=numeroInicio;i<numeroFinal;i++){
        //Comprobamos si el indice coincide con el resto del numero actual y si coincide lo añadimos al array
        if(indice===(i%23)){
            arrayDNIs.push(i);
        }
    }

    return arrayDNIs;
}

//MAIN
//Ejecución con el intervalo designado y la letra que nos dicen
let dniSeparados = separaDNI(48357001,48357999,"H");
imprimeDNI(dniSeparados);

//FIN