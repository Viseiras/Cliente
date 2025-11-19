"use strict";

/**
 * Colorines
 * ---------------------------------------------
 * Programa que al hacer doble click en la pantalla cambia el color de fondo a un color aleatorio
 * ---------------------------------------------
 */

document.addEventListener("dblclick", () => {
    //Generamos los valores RGB aleatorios
    const rojo = Math.floor(Math.random() * 256); 
    const verde = Math.floor(Math.random() * 256);
    const azul = Math.floor(Math.random() * 256); 
    //Cambiamos el color de fondo
    document.body.style.backgroundColor = `rgb(${rojo},${verde},${azul})`;
});