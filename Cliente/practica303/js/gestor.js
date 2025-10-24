'use strict';

/**
 * Inventario
 * ---------------------
 * PROGRAMA QUE AÑADE TAREAS A UNA LISTA Y TE DEJA MARCARLAS COMO ACABADAS Y ARCHIVARLAS
 * ---------------------
 * 
 */
//CONSTANTES GLOBALES
const creador = document.getElementById("tareas");
const input = creador.children[0];
const pendientes = document.getElementById("pendientes");
const acabados = document.getElementById("acabadas");
const botonAnadir = document.getElementsByClassName("add")[0];
const botonShow = document.getElementsByClassName("sho")[0];
var contador = 0;
//FUNCIONES

/**
 * Función que añade un producto al div pendientes
 */
function anadir(){
    let elemento = document.createElement("div");
    if(input.value!==""){
        contador++;
        //Añadimos el ID al div
        let id="tarea"+contador;
        elemento.setAttribute("id",id);
        elemento.classList.add("tarea");
        //Creamos el parrafo textual
        let parrafoTexto = document.createElement("p");
        parrafoTexto.textContent = `${input.value}`;

        //Creamos el parrafo de botones
        let parrafoBotones = document.createElement("p");
        parrafoBotones.classList.add("botones");

        let botonBorrar = document.createElement("input");
        botonBorrar.classList.add("del");
        botonBorrar.setAttribute("type","button");
        botonBorrar.setAttribute("value","Borrar");
        botonBorrar.setAttribute("onclick",`borrar('${id}')`);
        //Añadimos un pequeño margin para que quede bonito
        botonBorrar.style.marginRight="5px";

        let botonAcabar = document.createElement("input");
        botonAcabar.classList.add("end");
        botonAcabar.setAttribute("type","button");
        botonAcabar.setAttribute("value","Acabar");
        botonAcabar.setAttribute("onclick",`moverAcabado('${id}')`);

        parrafoBotones.append(botonBorrar,botonAcabar);
        elemento.append(parrafoTexto,parrafoBotones);

        pendientes.append(elemento);
        input.value="";

        input.focus();
    }else{
        alert("La tarea debe estar rellenada para poderse añadir.");
    }
}

/**
 * Función que nos muestra los elementos ocultos
 */
function ensenar(){

    let listaOcultos = document.getElementsByClassName("oculto");
    for(let i=listaOcultos.length-1;i>=0;i--){
        listaOcultos[i].classList.remove("oculto");
    }
}

/**
 * Función que mueve el produdcto de pendientes a acabados
 * 
 * @param {string} id 
 */
function moverAcabado(id){

    let elemento = document.getElementById(id);
    elemento.classList.add("acabada");
    let parrafoBotones = elemento.children[1];
    let botonArchivar = parrafoBotones.children[0];
    let botonVolver = parrafoBotones.children[1];
    botonArchivar.setAttribute("onclick",`archivar('${id}')`);
    botonArchivar.value="Archivar";
    botonVolver.setAttribute("onclick",`moverPendiente('${id}')`);
    botonVolver.value="Volver";
    acabados.append(elemento);
}

/**
 * Función que mueve el produdcto de acabados a pendientes
 * 
 * @param {string} id 
 */
function moverPendiente(id){

    let elemento = document.getElementById(id);
    elemento.classList.remove("acabada");
    let parrafoBotones = elemento.children[1];
    let botonBorrar = parrafoBotones.children[0];
    let botonAcabar = parrafoBotones.children[1];
    botonBorrar.setAttribute("onclick",`borrar('${id}')`);
    botonBorrar.value="Borrar";
    botonAcabar.setAttribute("onclick",`moverAcabado('${id}')`);
    botonAcabar.value="Acabar";
    pendientes.append(elemento);
}

/**
 * Función que elimina las tareas de la lista con un pop up que confirma que lo queramos eliminar
 * 
 * @param {string} id 
 */
function borrar(id){
    const confirmar = confirm("¿Estás seguro de que quieres borrar esta tarea?");

    if(confirmar){
        let elemento = document.getElementById(id);
        elemento.remove();
    }
}

/**
 * Función que oculta las tareas con un pop up que confirma que la queremos ocultar
 * 
 * @param {string} id 
 */
function archivar(id){
    const confirmar = confirm("¿Estás seguro de que quieres archivar esta tarea?");

    if(confirmar){
        let elemento = document.getElementById(id);
        elemento.classList.add("oculto");
    }
}

//MAIN
botonAnadir.setAttribute("onclick","anadir()");
botonShow.setAttribute("onclick","ensenar()");

pendientes.innerHTML="";
acabados.innerHTML="";
//FIN