"use strict";

/**
 * Localizador 
 * ---------------------------------------------
 * Programa que nos muestra en tiempo real la posición del ratón en la pantalla en coordenadas cartesianas
 * ---------------------------------------------
 */

const p = document.createElement("p");

document.addEventListener("mousemove", (event) => {
    //Recogemos las coordenadas del ratón
    const x = event.clientX;
    const y = event.clientY;

    //Mostramos las coordenadas en el elemento p
    p.textContent = `Coordenadas: X=${x}, Y=${y}`;
    document.body.appendChild(p);
});

//FIN