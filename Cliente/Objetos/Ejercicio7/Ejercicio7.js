'use strict';

function crearPersona(nombre="", apellidos="", edad=0, aficiones=[]){
    const persona = {
        nombre: nombre,
        apellidos: apellidos,
        edad: edad,
        aficiones: aficiones
    };

    return persona;
}

//const jorge = crearPersona("Jorge","Zafrilla",29,["DWC"]);

console.log(crearPersona());
