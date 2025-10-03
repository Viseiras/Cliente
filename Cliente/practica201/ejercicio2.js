'use strict';

/**
 * Juego mejor que tu
 * --------------------
 * PROGRAMA QUE CALCULA LA MEDIA Y ENSEÑA QUIEN GANA
 * --------------------
 */

//FUNCIONES
/**
 * Función que imprime el equipo con sus puntos y el nombre formateado
 * 
 * @param {string} nombre - Nombre del equipo 
 * @param {Array} puntosEquipo - Puntos del equipo desde el que se calcula la media
 */
function imprimeEquipo(nombre,puntosEquipo){
    let respuesta=`El equipo ${nombre} ha marcado: `;
    if(Array.isArray(puntosEquipo)){
        for(let i=0;i<puntosEquipo.length;i++){
            respuesta+=`${puntosEquipo[i]}, `;
        }
        respuesta=respuesta.trim();
    }else{
        console.error();
    }
    console.log(respuesta);
}

/**
 * Función que nos calcula la media y devuelve la media redondeada
 * 
 * @param {Array} puntosEquipo - Array que guarda los puntos del equipo que usamos para calcular la media
 * 
 * @returns {number} Devuelve la media de los puntos que ha marcado el equipo
 */
function calcularMedia(puntosEquipo){
    let media=0;
    for(let i=0;i<puntosEquipo.length;i++){
        media+=puntosEquipo[i];
    }
    media=Math.round(media/puntosEquipo.length);

    return media;
}

/**
 * Función que nos compara la media y nos dice quien ha ganado o si han empatado
 * 
 * @param {number} mediaA - Variable que guarda el valor de la primera media que se introduce
 * @param {number} mediaB - Variable que guarda el valor de la segunda media que se introduce
 * 
 * @returns {Array} Array con 2 booleanos que nos guarda si la primera media es mayor y otro si han empatado
 */
function comparaMedia(mediaA, mediaB){
    let ganadorEsA;
    let empate = false;
    if(mediaA>mediaB){
        ganadorEsA=true;
    }else if(mediaA===mediaB){
        ganadorEsA=false;
        empate=true;
    }else{
        ganadorEsA=false;
    }

    return [ganadorEsA,empate];
}

/**
 * Función que imprime quien ha ganado con sus respectivos puntos
 * 
 * @param {boolean} ganadorEsJuan - Booleano que dice si Juan ha ganado
 * @param {boolean} empate - Booleano que dice si han empatado
 * @param {number} mediaJuan - Variable que guarda el valor de la media de Juan para mostrarlo
 * @param {number} mediaMiguel - Variable que guarda el valor de la media de Miguel para mostrarlo 
 */
function imprimeGanador(ganadorEsJuan,empate,mediaJuan,mediaMiguel){
    let cadena="";
    if(ganadorEsJuan){
        cadena+=`El ganador es Juan y ha ganado con ${mediaJuan} puntos`;
    }else if(empate){
        cadena+=`Juan y Miguel han empatado con ${mediaJuan} puntos`;
    }else if(!ganadorEsJuan){
        cadena+=`El ganador es Miguel y ha ganado con ${mediaMiguel} puntos`;
    }

    console.log(cadena);
}
//MAIN

//Arrays para probar el programa comentar para probar diferentes valores

//Puntos por defecto
let puntosJuan=[89,120,103];
let puntosMiguel=[116,94,123];

//Gana Juan
//let puntosJuan=[89,120,153];
//let puntosMiguel=[116,94,123];

//Empatan
//let puntosJuan=[116,94,123];
//let puntosMiguel=[116,94,123];

//Imprimimos los equipos y sus puntos
imprimeEquipo("Juan",puntosJuan);
imprimeEquipo("Miguel",puntosMiguel);

//Calculamos las medias y las guardamos como variable
let mediaJuan =calcularMedia(puntosJuan), mediaMiguel = calcularMedia(puntosMiguel);

//Guardamos en variable las variables del Ganador y si han empatado
let [ganaJuan,empate] = comparaMedia(mediaJuan,mediaMiguel);

//Imprimimos el ganador con sus puntos
imprimeGanador(ganaJuan,empate,mediaJuan,mediaMiguel);

//FIN