'use strict';

/**
 * Cruz
 * ----------------------------
 * PROGRAMA QUE DIBUJA UNA CRUZ SI EL NUMERO RECIBIDO ES MULTIPLO DE 3
 * ----------------------------
 * 
 */

//FUNCIONES
/**
 * Función que recibe un parametro y si es multiplo de 3 dibuja una cruz
 * 
 * @param {number} numero - Parametro que indica el tamaño de la cruz, de ancho y de alto
 */
function dibujarCruz(numero){
    //Comprobamos si es multiplo de 3
    if(numero%3!==0){
        console.error("El numero introducido no es multiplo de 3");
    }else{
        let anchoSector = numero/3;

        for(let fila=0;fila<numero;fila++){
            let linea="";
            for(let col=0;col<numero;col++){
                //Si el dibujo esta dentro del sector de la parte central rellena con un * y si no con una #
                if(col>=anchoSector && col<2*anchoSector || fila>=anchoSector && fila<2*anchoSector){
                    linea+="*"
                }else{
                    linea+="#";
                }
            }
            //Dibujamos en tiempo real la fila
            console.log(linea);
        }
    }
}
//MAIN
dibujarCruz(21);
//FIN