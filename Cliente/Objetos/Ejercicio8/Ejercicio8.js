'use strict';

const { useDebugValue } = require("react");

let instituto = {
    nombre:"IES Poeta Paco Molla",
    direccion: {
        ciudad:"Petrer",
        cp:"03610",
        calle:"Avenida Reina Sofía"
    },
    cursos:[
        {
            codigo:"2DAWSEMI",
            alumnos:[
                {
                    nombre:"Javier",
                    nota:9
                },
                {
                    nombre:"Jorge",
                    nota:3
                }
            ]
        },
        {
            codigo:"1DAW",
            alumnos:[
                {
                    nombre:"Rober",
                    nota:8.5
                }
            ]
        }
    ]    
}

for(let clave in instituto.cursos[0].alumnos[i]){
    console.log(instituto.cursos[0].alumnos[1][clave]);
}

//console.log(instituto.nombre);
//console.log(instituto.direccion.ciudad);
//console.log(instituto.cursos[0].codigo);

/*

for(let i=0;i<instituto.cursos.length;i++){
    console.log(`Curso: ${instituto.cursos[i].codigo}`);
    for(let j=0;j<instituto.cursos[i].alumnos.length;j++){
        let alumno = instituto.cursos[i].alumnos[j];
        console.log(`El alumno ${alumno.nombre} tiene un ${alumno.nota}`);
    }
}

*/