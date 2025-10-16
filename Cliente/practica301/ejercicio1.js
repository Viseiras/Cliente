'use strict';

/**
 * Contando elementos del DOM
 * --------------------------------
 * PROGRAMA QUE CUENTA LOS ELEMENTOS DEL DOM
 * --------------------------------
 */

//CONSTANTES GLOBALES
const informacion = document.getElementById("info");
//FUNCIONES
function cuentaElemento(elemento){
    const contador = document.getElementsByTagName(`${elemento}`);
    
    return `Hay ${contador.length} elementos del tipo ${elemento}`;
}


//MAIN
let adiciones = [];

//Numero de parrafos
//console.log(cuentaElemento("p"));
adiciones.push(cuentaElemento("p"));

//Contenido textual del segundo parrafo
const listaParrafos = document.getElementsByTagName("p");
const parrafo2 = listaParrafos[1];
//console.log(parrafo2.textContent);
adiciones.push(parrafo2.textContent);

//Lista de enlaces
console.log(cuentaElemento("a"));

//Dirección del primer enlance
const listaEnlaces = document.getElementsByTagName("a");
const enlace1 = listaEnlaces[0];

//console.log(enlace1.href);
adiciones.push(enlace1.href);

//Dirección del penultimo enlace
const enlacePenultimo = listaEnlaces[listaEnlaces.length-2];

//console.log(enlacePenultimo.href);
adiciones.push(enlacePenultimo.href);

for(let i=0;i<adiciones.length;i++){
    let parrafoNuevo = document.createElement("p");
    parrafoNuevo.textContent = adiciones[i];
    parrafoNuevo.style.backgroundColor = "yellow";
    informacion.appendChild(parrafoNuevo);
}
//FIN