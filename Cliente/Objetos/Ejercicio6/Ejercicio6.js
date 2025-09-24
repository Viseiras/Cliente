'use strict';

const receta = {
    nombre: "Pulpo a la gallega",
    elaboracion: 30,
    formato:{
        tapa:"1 persona",
        media:"2 personas",
        racion:"4 personas"
    },
    ingredientes:["Pulpo","patatas","pimenton","aceite"]
};

console.log(JSON.stringify(receta));
console.log(typeof JSON.stringify(receta));


let cadena = new String('{"asignatura":"DWC","duración":200,"profesor":"Jorge","aprobado":true}');


let objeto = JSON.parse(cadena);

console.log(JSON.parse(cadena));
console.log(typeof JSON.parse(cadena));

for(let clave in objeto){
    console.log(`${clave}: ${objeto[clave]}`);
}