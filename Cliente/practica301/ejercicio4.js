'use strict';

// FUNCIONES
/**
 * Función que inserta un elemento del DOM justo después del elemento seleccionado
 * 
 * @param {Element} nuevoElemento - Elemento DOM que vamos a añadir después del existenteElemento
 * @param {Element} existenteElemento - Elemento DOM que usamos de referencia para añadir nuevoElemento
 */
function insterAfter(nuevoElemento, existenteElemento) {
    //Constante del elemento padre del elemento que queremos añadir
    const padre = existenteElemento.parentElement;
    //Recogemos el siguiente hermano al mismo nivel
    let hermano = existenteElemento.nextElementSibling;
    //Array para guardar los elementos que hemos eliminado para volver a añadir después
    const elementosEliminados = [];

    //Insertar el nuevo elemento justo después del existenteElemento
    if (existenteElemento.nextSibling){
        //Añadimos el elemento antes de la siguiente posición
        padre.insertBefore(nuevoElemento, existenteElemento.nextSibling);
    } else {
        //Si no hay siguiente hermano lo ponemos como el último
        padre.appendChild(nuevoElemento);
    }

    //Añadir al final los elementos eliminados, en el orden original
    elementosEliminados.forEach(elem => padre.appendChild(elem));
}

// MAIN
//Recogemos el elemento 
const p2 = document.getElementsByTagName("p")[1];

//Creamos un elemento p que añadiremos
const p2_5 = document.createElement("p");
p2_5.textContent = "Me he colado";

insterAfter(p2_5,p2);

//Recogemos el elemento cite
const cite = document.getElementsByTagName("cite")[0];

//Creamos un botón para añadirlo después de la cite
const button = document.createElement("button");
button.textContent="Botón saltarín";

insterAfter(button,cite);
//FIN