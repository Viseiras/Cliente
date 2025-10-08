'use strict';

/**
 * Sumando Vectores
 * ----------------------------
 * PROGRAMA QUE RECIBE TRES FUNCIONES O METODOS Y LOS EJECUTA SEGÚN LAS ORDENES DEL EJERCICIO
 * ----------------------------
 * 
 */


//FUNCIONES
/**
 * Función calcular que recibe las funciones y ejecuta todas según lo que dicta el enunciado del ejercicio
 * 
 * @param {Function} funcion1 - Función que se recibe por parametros y que rellena un array en la longitud que se recibe como parametro
 * @param {Function} funcion2 - Función que suma 2 vectores o arrays y rellena el resultado en otro Array
 * @param {Function} funcion3 - Función que imprime por consola el resultado en filas de 5
 */
function calcular(funcion1, funcion2, funcion3){
    let vector1,vector2,vector3;

    vector1=funcion1(10);
    vector2=funcion1(10);

    vector3=funcion2(vector1,vector2);

    funcion3(vector1);
    funcion3(vector2);
    funcion3(vector3);
}

/**
 * Función que recibe el indice y rellena todas las posiciones del array con numeros aleatorios del 1 al 100
 * 
 * @param {number} maximo - Indice máximo al que rellenaremos con numeros aleatorios
 * @returns {Array}
 */
function generaArray(maximo){
    let numerosAleatorios=[];

    for(let i=0;i<maximo;i++){
        //Vamos metiendo en el array numeros comprendidos entre maximo y 1
        numerosAleatorios[i]=Math.floor(Math.random()*100)+1;
    }

    return numerosAleatorios;
}

/**
 * Función que recibe 2 array y los suma en un tercer array si la longitud de los dos es igual
 * 
 * @param {Array} arrayInicio - Array inicial, el que usaremos como indice y se recorrerá de manera ascendiente
 * @param {Array} arrayFinal  - Array final, el que recorreremos de manera descendente
 * @returns {Array}
 */
function sumaArrays(arrayInicio,arrayFinal){
    let arraySumado=[];
    
    //Comprobamos que sean de la misma longitud
    if(arrayFinal.length===arrayInicio.length){
        for(let i=0;i<arrayInicio.length;i++){
            //Aquí hacemos que la primera posición que va con el indice del bucle se encuentre con la última posición que es length-1 (los indices empiezan en 0 y length devuelve entero) menos el indice para ir moviendo en sentido contrario el indice desde el final
            arraySumado[i]=(arrayInicio[i]+arrayFinal[(arrayFinal.length-i)-1]);
        }
    }else{
        console.error("Los array deben tener la misma longitud");
    }

    return arraySumado;
}

/**
 * Función que nos imprime por consola el Array devidamente formateado
 * 
 * @param {Array} arrayImpreso 
 */
function imprimeArray(arrayImpreso){
    let cadena="";
    for(let i=0;i<arrayImpreso.length;i++){
        //Si el indice es multiplo de 5 saltamos de linea para hacerlo más fácil de leer, si molesta se puede comentar este if
        if(i%5===0 && i!==0){
            cadena+=`\n`;
        }
        cadena+=`${arrayImpreso[i]}\t`;
    }

    console.log(cadena);
}
//MAIN
calcular(generaArray, sumaArrays, imprimeArray);
//FIN