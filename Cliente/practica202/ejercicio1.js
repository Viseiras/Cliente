'use strict';

/**
 * Sumando
 * ----------------------------
 * PROGRAMA QUE SUMA TODOS LOS ARGUMENTOS Y MUESTRA EL TOTAL POR PANTALLA
 * ----------------------------
 * 
 */

//FUNCIONES
/**
 * Función que suma todos los argumentos que se pasen a la hora de ejecución de la función
 */
function sumaArgumentos(){
    let total=0;

    let validos = 0; // contador de valores numéricos válidos

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
    }else{
        console.error("No hay suficientes argumentos válidos para ejecutar el programa");
    }
    console.log(`El total de la suma de todos los argumentos es: ${total}`);
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
//FIN