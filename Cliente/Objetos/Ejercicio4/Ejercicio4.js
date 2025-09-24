'use strict';

let notasCurso={
    DWC: 10,
    DWS: 7,
    DIW: 8,
    DAW: 5,
    Optativa: 3,
    IP2: 7.6
};

let valores = Object.values(notasCurso);

let suma = valores.reduce(function(a,b){
    //console.log(a, b);
    return a + b
},
0);

/*
console.log(suma);

let media = suma / valores.length;

console.log(`Tu media es: ${media.toFixed(2)}`);

*/

/*

for(let clave in notasCurso){
    console.log(`${clave}: ${notasCurso[clave]}`);
}

*/

