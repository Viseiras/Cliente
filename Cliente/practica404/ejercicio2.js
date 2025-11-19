"use strict";

const textarea = document.getElementById("formTextarea");
const divResultado = document.getElementById("resultado");
const btnCrear = document.getElementById("btnCrear");
const formSelect = document.getElementById("formSelect");
const divErrores = document.getElementById("errores");

function crearParrafo(){
    divErrores.innerHTML="";
    const parrafo = document.createElement("p");
    let estilo = formSelect.value;
    let ok = true;
    if(textarea.value===""){
        const parrafoErrores = document.createElement("p");
        parrafoErrores.style.color="red";
        parrafoErrores.style.fontWeight=700;
        parrafoErrores.textContent="El area de texto no puede estar vacía";
        divErrores.append(parrafoErrores);
        ok=false;
    }
    
    switch(estilo){
        case("cursiva"):parrafo.style.fontStyle="italic"; break;
        case("negrita"):parrafo.style.fontWeight=700; break;
        case("espaciado"):parrafo.style.letterSpacing="4px"; break;
        default: 
            const parrafoErrores = document.createElement("p");
            parrafoErrores.style.color="red";
            parrafoErrores.style.fontWeight=700;
            parrafoErrores.textContent="Debes seleccionar un estilo";
            divErrores.append(parrafoErrores);
            ok=false;
    }
    parrafo.textContent=textarea.value;

    if(ok){
        divResultado.append(parrafo);
    }
}

btnCrear.addEventListener("click",crearParrafo);