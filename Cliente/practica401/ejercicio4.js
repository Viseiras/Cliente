"use strict";

/**
 * Acordeón
 * ---------------------------------------------
 * Programa que crea un acordeón con varios apartados que se pueden expandir y contraer al hacer click en el elemento superior
 * ---------------------------------------------    
 */

const main = document.querySelector("main");

/**
 * Función que oculta el elemento siguiente al elemento recibido y lo muestra si ya está oculto
 * @param {HTMLElement} node 
 */

function ocultarContenido(node){
    const contenido = node.nextElementSibling;

    if(contenido.style.display === "none"){
        contenido.style.display = "block";
    } else {
        contenido.style.display = "none";
    }
}

//MUY IMPORTANTE ESTA CONVERSIÓN  DE HTMLCOLLECTION A ARRAY PARA PODER USAR FOREACH
Array.from(main.children).forEach((node, index) => {
    console.log(index);
    if(index%2 === 0) {
        node.addEventListener("click", () => ocultarContenido(node));
    }
}); 
