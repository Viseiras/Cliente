"use strict";

export function validador(disco){
    let valido=true;
    document.querySelectorAll("*").forEach(element=>{
        element.classList.remove("error");
    });
    let nombreStr = disco.nombre.toString();
    if(nombreStr.length<5 || nombreStr===""){
        document.getElementById("nombre").classList.add("error");
        document.getElementById("nombre").previousElementSibling.classList.add("error");
        valido=false;
    }
    let cantanteStr = disco.cantante.toString();
    if(cantanteStr.length<5 || cantanteStr===""){
        document.getElementById("cantante").classList.add("error");
        document.getElementById("cantante").previousElementSibling.classList.add("error");
        valido=false;
    }
    let publicacionStr = parseInt(disco.publicacion).toString();
    if(!publicacionStr || publicacionStr.length!==4){
        document.getElementById("publicacion").classList.add("error");
        document.getElementById("publicacion").previousElementSibling.classList.add("error");
        valido=false;
    }
    let tipo = disco.tipo;
    if(!tipo){
        document.getElementById("tipo").classList.add("error");
        document.getElementById("tipo").previousElementSibling.classList.add("error");
        valido=false;
    }
    let localizacionStr = disco.localizacion;
    if(!/^[A-Za-z]{2}-\d{3}[A-Z]{2}$/.test(localizacionStr)){
        document.getElementById("localizacion").classList.add("error");
        document.getElementById("localizacion").previousElementSibling.classList.add("error");
        valido=false;
    }

    return valido;
}