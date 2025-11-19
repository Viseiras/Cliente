"use strict";

/**
 * Saludar
 * ---------------------------------------------
 * EJERCICIO QUE NOS MANDA UN SALUDO CADA 2 SEGUNDOS HASTA QUE PULSAMOS UN BOTÓN DE DETENER
 * ---------------------------------------------
 */

//Iniciamos las referencias a los botones
const btnSaludos = document.getElementById("iniciarSaludos");
const btnDetener = document.getElementById("detenerSaludos");

//Variable para almacenar el intervalo (La incializamos fuera de la función para que sea global)
let intervalo;

//Añadimos el evento de los saludos
btnSaludos.addEventListener("click", () => {

    intervalo = setInterval(() => {
        const h1 = document.createElement("h1");
        h1.textContent = "¡Hola Feo!";
        document.body.appendChild(h1);
    }, 2000); //Este 2000 es en milisegundos, por lo que equivale a 2 segundos
});

//Añadimos el evento para detener los saludos
btnDetener.addEventListener("click", () => {
    clearInterval(intervalo);
});

//FIN