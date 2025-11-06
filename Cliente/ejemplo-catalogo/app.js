'use strict';

import { datosJuegosIniciales } from "./data/datos.js";

let datosJuegos = [...datosJuegosIniciales];
let siguienteId = datosJuegos.length;

const listaJuegos = document.getElementById("listaJuegos");
const formularioJuego = document.getElementById("formularioJuego");
const contenedorFiltros = document.getElementById("filtros");
const divMensaje = document.getElementById("divMensaje");

const tituloEntrada = document.getElementById("tituloEntrada");
const selectorGenero = document.getElementById("selectorGenero");
const anioEntrada = document.getElementById("anioEntrada");

const etiquetaTitulo = formularioJuego.querySelector('label[for="tituloEntrada"]');
const etiquetaAnio = formularioJuego.querySelector('label[for="anioEntrada"]');



function crearTarjetaJuego(juego){
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-juego");
    tarjeta.setAttribute("data-genero",juego.genero);
    tarjeta.innerHTML=`
        <h3>${juego.titulo}</h3>
        <p><strong>Género:</strong> ${juego.genero}</p>
        <p><strong>Año:</strong> ${juego.anio}</p>
    `;

    return tarjeta;
}

function renderizarListaJuegos(generoFiltro = "all"){
    listaJuegos.innerHTML="";
    const juegosARenderizar = datosJuegos.filter(juego =>
        generoFiltro === "all" || juego.genero === generoFiltro
    );

    if(juegosARenderizar.length===0){
        listaJuegos.innerHTML="<p>No hay juegos que coincidan con el filtro</p>"
        return;
    }

    juegosARenderizar.forEach(juego => {
        const tarjeta = crearTarjetaJuego(juego);
        listaJuegos.appendChild(tarjeta);
    });
}

function validarFormulario(){
    let esValido = true;
    let mensajesError = [];

    divMensaje.innerHTML="";
    tituloEntrada.classList.remove("entrada-error");
    anioEntrada.classList.remove("entrada-error");
    selectorGenero.classList.remove("entrada-error");

    etiquetaTitulo.classList.remove("etiqueta-error");
    etiquetaAnio.classList.remove("etiqueta-error");

    //Validamos el titulo
    if(tituloEntrada.value.trim().length < 2){
        mensajesError.push("El titulo debe tener al menos 2 caracteres");
        esValido=false;
        tituloEntrada.classList.add("entrada-error");
        etiquetaTitulo.classList.add("etiqueta-error");
    }

    //Validamos el año
    if(isNaN(anioEntrada.value) || anioEntrada.value.length!==4){
        mensajesError.push("El año no es válido");
        esValido=false;
        anioEntrada.classList.add("entrada-error");
        etiquetaAnio.classList.add("etiqueta-error");
    }

    //Validamos el genero
    if(selectorGenero.value===""){
        mensajesError.push("Debes seleccionar un género");
        esValido=false;
        selectorGenero.classList.add("entrada-error");
    }

    if(!esValido){
        const ul = document.createElement("ul");
        mensajesError.forEach(msg => {
            const li = document.createElement("li");
            li.textContent=`ERROR: ${msg}`;
            ul.append(li);
        });

        divMensaje.append(ul);
    }

    return esValido;
}


function manejarEnvioFormulario(evento){
    evento.preventDefault();

    if(!validarFormulario()){
        return;
    }

    const nuevoJuego = {
        id:siguienteId++,
        titulo:tituloEntrada.value.trim(),
        genero:selectorGenero.value,
        anio:parseInt(anioEntrada.value)
    };

    datosJuegos.push(nuevoJuego);

    renderizarListaJuegos("all");
    formularioJuego.reset();

    divMensaje.textContent="Juego añadido correctamente";
}

function manejarClickFiltro(evento){
    if(evento.target.classList.contains("boton-filtro")){
        const generoSeleccionado = evento.target.getAttribute("data-genero");

        contenedorFiltros.querySelectorAll(".boton-filtro").forEach(btn => {
            btn.classList.remove("activo");
        })

        evento.target.classList.add("activo");

        renderizarListaJuegos(generoSeleccionado);
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    
    formularioJuego.addEventListener("submit",manejarEnvioFormulario,false);

    contenedorFiltros.addEventListener("click",manejarClickFiltro,false);

    tituloEntrada.addEventListener("input",()=>{
        tituloEntrada.classList.remove("entrada-error");
        etiquetaTitulo.classList.remove("etiqueta-error");
        divMensaje.textContent = "";
    });

    anioEntrada.addEventListener("input",()=>{
        anioEntrada.classList.remove("entrada-error");
        etiquetaAnio.classList.remove("etiqueta-error");
        divMensaje.textContent = "";
    });

    renderizarListaJuegos("all");
})