'use strict';

/**
 * Sumando
 * ----------------------------
 * PROGRAMA QUE SUMA TODOS LOS ARGUMENTOS Y LOS ENSEÑA FORMATEADOS
 * ----------------------------
 */

//FUNCIONES
/**
 * Función que suma todos los argumentos que se pasen a la hora de ejecución de la función
 * 
 * @param {number} total - Variable que guarda el total de la suma
 * @param {number} validos - Variable que dice cuantos numeros válidos hay
 * 
 * @returns {number} 
 */
function sumaArgumentos(){
    let total=0;
    let validos = 0;

    
    for (let i = 0; i < arguments.length; i++) {
        if (!isNaN(parseFloat(arguments[i]))) {
            validos++;
        }
    }

    if(validos>=2){
        for(let i=0;i<arguments.length;i++){
            if(!isNaN(parseFloat(arguments[i]))){
                console.log(`${total} + ${arguments[i]} = ${total+arguments[i]}`);
                total+=arguments[i];
            }else{
                console.error(`El elemento ${arguments[i]} no es un número`);
            }
        }
        console.log(`El total de la suma de todos los argumentos es: ${total}`);
    }else{
        console.error("No hay suficientes argumentos válidos para ejecutar el programa");
    }
    return total;
}

//MAIN
//Ejemplo solo numeros
sumaArgumentos(1,2,3,4,5,6,7,8,101);
//Ejemplo elemento no válido
sumaArgumentos(12,24,"huevo",124,15,12.2,12,575);
//Ejemplo solo 1 argumento
sumaArgumentos(77);
//Ejemplo solo con valores no válidos
sumaArgumentos("Do","Re","Mi","Fa","Sol","La","Si","Do");
//Ejemplo con solo 2 valores válidos
sumaArgumentos("A","B","C","D",155,"E","F",45);

//FIN