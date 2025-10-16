'use strict';

/**
 * Números DOM
 * --------------------------------
 * PROGRAMA QUE RELLENA POSICIONES EN UNA LISTA CON UN BOTÓN
 * --------------------------------
 */

//CONSTANTES GLOBALES
const ul = document.getElementsByTagName("ul")[0];
//FUNCIONES
function anyadeLi(){
    let li = document.createElement("li");
    li.textContent=Math.floor((Math.random()*1000)+1);
    ul.appendChild(li);
}
//MAIN
const botonAnyadir = document.createElement("button");
botonAnyadir.textContent = "Nuevo Número";
botonAnyadir.addEventListener("click",anyadeLi);
document.body.insertBefore(botonAnyadir,ul);
//FIN