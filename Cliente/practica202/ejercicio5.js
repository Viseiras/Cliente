'use strict';

/**
 * Marco
 * ----------------------------
 * PROGRAMA QUE DIBUJA UN MARCO BASANDOSE EN EL PROGRAMA ANTERIOR
 * ----------------------------
 * 
 */


//FUNCIONES
/**
 * Función que dibuja el marco interior de un cuadrado
 * 
 * @param {number} lado - parametro que representa lo largo que será el lado del cuadrado 
 * @param {*} marco - parametro que nos representa lo grande que el interior del marco
 */
function dibujarMarco(lado, marco) {

    //Comprobamos si el lado es multiplo de 3 y si no lo es damos un error
    if (lado%3!==0){
        console.error("El número tiene que ser múltiplo de 3");
    }else{
        //Centro del cuadrado
        let mitadLado = Math.floor(lado/2);
        let mitadMarco = Math.floor(marco/2);

        for (let fila=0;fila<lado;fila++){
            let linea="";
            for (let col=0;col<lado;col++){
                //Si el indice de la fila es mayor o igual a (mitad del lado(10) - mitad del marco(3) y a (10+3), que este entre 7 y 13 en fila y columna)
                if (fila >= (mitadLado-mitadMarco) && fila <= (mitadLado+mitadMarco) && 
                    col >= (mitadLado-mitadMarco) && col <= (mitadLado+mitadMarco)){
                    
                    linea += "*";
                } else {
                    linea += "#";
                }
            }
            console.log(linea);
        }
    }
}

//MAIN
dibujarMarco(21, 7);
//FIN
