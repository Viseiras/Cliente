"use strict";

// FUNCIONES
function pedirJugada() {
    let eleccion = "";
    while (true) {
        eleccion = prompt("Elige piedra, papel o tijera (o escribe 'salir' para terminar):");
        if (!eleccion) continue; // Si el usuario cancela o no escribe nada

        eleccion = eleccion.toLowerCase();

        if (eleccion === "salir") {
            return "salir";
        } else if (eleccion==="piedra" || eleccion==="papel" || eleccion==="tijera") {
            return eleccion;
        } else {
            alert("Opción no válida. Intenta de nuevo.");
        }
    }
}

function jugadaRival() {
    const opciones = ["piedra", "papel", "tijera"];
    let indice = Math.floor(Math.random() * 3);
    return opciones[indice];
}

function determinarGanador(jugadaUsuario, jugadaRival) {
    if (jugadaUsuario === jugadaRival) {
        return "Empate";
    } else if (
        (jugadaUsuario === "piedra" && jugadaRival === "tijera") ||
        (jugadaUsuario === "tijera" && jugadaRival === "papel") ||
        (jugadaUsuario === "papel" && jugadaRival === "piedra")
    ) {
        return "Gana el usuario";
    } else {
        return "Gana el rival";
    }
}

function jugar() {
    let jugadaUsuario = pedirJugada();
    
    // Verificamos si el usuario quiere salir
    if (jugadaUsuario === "salir") {
        alert("Gracias por jugar. ¡Hasta la próxima!");
        return false; // Señal para terminar el juego
    }

    let eleccionRival = jugadaRival();

    console.log(`Has elegido: ${jugadaUsuario}`);
    console.log(`Tu rival ha elegido: ${eleccionRival}`);

    alert("El resultado es: " + determinarGanador(jugadaUsuario, eleccionRival));
    return true; // Señal para seguir jugando
}

// MAIN
alert("Bienvenido al juego de piedra, papel o tijera.\nEscribe 'salir' cuando quieras terminar.");

while (true) {
    const seguirJugando = jugar();
    if (!seguirJugando) break;
}
