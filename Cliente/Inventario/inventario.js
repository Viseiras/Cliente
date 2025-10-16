'use strict';

//CONSTANTES GLOBALES
const input = document.getElementById("nombre");
const categoria = document.getElementById("categoria");
const nota = document.getElementById("nota");
const disponibles = document.getElementById("disponibles");
const prestados = document.getElementById("prestados");
var contador = 0;
//FUNCIONES

/**
 * Función que añade un producto al div disponibles
 */
function anadir(){
    let elemento = document.createElement("p");
    if(input.value!=="" && categoria.value!==""){
        contador++;
        let id=contador;
        elemento.setAttribute("id",id);
        elemento.setAttribute("style","display:flex")
        elemento.textContent = `${input.value}--${categoria.value}`;
        if(nota.value!==""){
            elemento.textContent+=`--${nota.value}`;
        }
        let div = document.createElement("div");
        div.setAttribute("style","margin-left:auto");

        let botonPrestado = document.createElement("button");
        botonPrestado.textContent="Prestar";
        botonPrestado.setAttribute("onclick",`moverPrestado(${id})`);

        let botonArchivar = document.createElement("button");
        botonArchivar.textContent="Archivar";
        botonArchivar.setAttribute("onclick",`archivar(${id})`);

        div.append(botonPrestado,botonArchivar);
        elemento.append(div);

        disponibles.append(elemento);
    }
}
/**
 * Función que mueve el produdcto de disponibles a prestados
 * 
 * @param {number} id 
 */
function moverPrestado(id){

    let elemento = document.getElementById(id);
    let div = elemento.children[0];
    let boton = div.children[0];
    boton.setAttribute("onclick",`moverDevuelto(${id})`);
    boton.textContent="Devolver";
    prestados.append(elemento);
}

/**
 * Función que mueve el produdcto de prestados a disponibles
 * 
 * @param {number} id 
 */
function moverDevuelto(id){

    let elemento = document.getElementById(id);
    let div = elemento.children[0];
    let boton = div.children[0];
    boton.setAttribute("onclick",`moverPrestado(${id})`);
    boton.textContent="Prestar";
    disponibles.append(elemento);
}

function archivar(id){
    const confirmar = confirm("¿Estás seguro de que quieres eliminar este producto?");

    if(confirmar){
        let elemento = document.getElementById(id);
        elemento.remove();
    }
}
//MAIN

//FIN