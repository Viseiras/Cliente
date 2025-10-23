"use strict";

/**
 * Ocultar DOM
 * -------------------------------
 * PROGRAMA QUE NOS OCULTA LOS ELEMENTOS QUE PULSAMOS Y NOS CAMBIA EL FONDO DE LOS QUE TOCAMOS CON EL RATÓN, EL BOTÓN REINCIA A SU ESTADO ORIGINAL LOS ELEMENTOS OCULTOS
 * -------------------------------
 */

const body = document.getElementsByTagName("body")[0];

/**
 * Función que nos limpia el style y la clase oculto
 */
function reaparecer(){
    const ocultos = document.getElementsByClassName("oculto");

    //Hacemos una lectura del array inverso porque vamos eliminando las posiciones y eso cambia la indexación
    for(let i=ocultos.length-1;i>=0;i--){
        ocultos[i].removeAttribute("style");
        ocultos[i].classList.remove("oculto");
    }
}
//Añadimos el evento click a todos los elementos p de la página
document.addEventListener("click", function(event) {
  if (event.target.tagName.toLowerCase() === "p") {
    event.target.classList.add("oculto");
  }
});

//Añadimos el evento mouseout y añadimos el background-color como atributo
document.addEventListener("mouseout", function(event) {
  if (event.target.tagName.toLowerCase() === "p") {
    event.target.setAttribute("style",`background-color : rgb(${Math.floor(Math.random()*255+1)},${Math.floor(Math.random()*255+1)},${Math.floor(Math.random()*255+1)})`)
  }
});

//Creamos el botón y añadimos el evento reaparecer
const botonVisible = document.createElement("button");
botonVisible.textContent="Reaparecer";
botonVisible.addEventListener("click",reaparecer);
body.append(botonVisible);