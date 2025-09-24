'use strict';

let persona = {
    nombre:"Juan",
    apellidos: ["Martinez","García"],
    edad:30,
    aficiones:["música","trial"],
    saludar: function(){
        console.log(`Hola, soy ${this.nombre} ${this.apellidos[0]} ${this.apellidos[1]}`);
    }
};

for(let clave in persona){
    console.log(clave);
    if(typeof(persona.clave) !== 'function'){
        console.log(`${clave}: ${persona[clave]}`)
    }
}

let claves = Object.keys(persona);
if(typeof(persona[claves]) !== 'function'){
    console.log(`${clave}: ${persona[clave]}`)
}