"use strict";

import {validador} from "./ejercicio5.js";

const formulario = document.getElementById("formularioDisco");
const btnMostrar = document.getElementById("btnMostrar");
const divMostrar = document.getElementById("divMostrar");

const discos = {album:[]};
formulario.addEventListener("submit",
    (event) =>{
        event.preventDefault();
        const nombre = document.getElementById("nombre");
        const cantante = document.getElementById("cantante");
        const publicacion = document.getElementById("publicacion");
        const tipo = document.getElementById("tipo");
        const localizacion = document.getElementById("localizacion");
        const prestado = document.getElementById("prestado");

        let disco = {
            nombre:nombre.value,
            cantante:cantante.value,
            publicacion:publicacion.value,
            tipo:tipo.value,
            localizacion:localizacion.value,
            prestado:prestado.checked
        }

        if(validador(disco)){
            discos.album.push(disco);
        }
    }
);

btnMostrar.addEventListener("click",()=>{
    divMostrar.innerHTML="";
    discos.album.forEach(disco =>{
        const div = document.createElement("div");
        div.innerHTML=`
            <h3>${disco.nombre}</h3>
            <h4>${disco.cantante}</h4>
            <p><time datetime="${disco.publicacion}">${disco.publicacion}</time><p>
            <p>${disco.tipo}</p>
            <p>${disco.localizacion}</p>
            <label><input type="checkbox" ${disco.prestado?"checked":""} disabled>Prestado</label>
        `;
        divMostrar.append(div);
    })
});


