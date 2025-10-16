'use strict';

/**
 * 
 */

//GLOBALES
const p2 = document.getElementsByTagName("p")[1];
//FUNCIONES
function instertAfter(nuevoElemento, existenteElemento) {
    const parent = existenteElemento.parentNode;
    const next = existenteElemento.nextSibling;

    if(next){
        // Insertar antes del siguiente, sin usar insertBefore:
        // Primero quitamos el siguiente nodo,
        // añadimos el nuevo nodo,
        // y luego volvemos a añadir el siguiente nodo.
        parent.removeChild(next);
        parent.appendChild(nuevoElemento);
        parent.appendChild(next);
        }else{
        // Si no hay siguiente hermano, solo añadimos al final
        parent.appendChild(nuevoElemento);
    }
}

//MAIN
let p2_5 = document.createElement("p");
p2_5.textContent="Me he colado";

instertAfter(p2_5,p2);
//FIN