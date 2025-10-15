'use strict';

const datos = [
    {nombre:'Jorge',nota:9},
    {nombre:'Luisa',nota:8}
];

const container = document.getElementById("container");

function crearTabla(){

    container.innerHTML = '';

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const trh = document.createElement('tr');

    ['Nombre','Nota'].forEach(texto =>{
        const th = document.createElement('th');
        th.textContent = texto;
        trh.appendChild(th);
    });

    thead.appendChild(trh);

    const tbody = document.createElement('tbody');
    
    datos.forEach(alumno =>{
        
        const tr = document.createElement('tr');   
        const tdNombre = document.createElement('td');
        tdNombre.textContent = alumno.nombre;
        
        const tdNota = document.createElement('td'); 
        tdNota.textContent = alumno.nota;
        tdNota.className = 'nota';

        tr.append(tdNombre,tdNota);
        tbody.appendChild(tr);
    })

    table.append(thead,tbody);
    container.appendChild(table);
}

crearTabla();

document.getElementById('add').addEventListener('click',() => {
    let numeroAlumnos = datos.length + 1;
    datos.push({nombre:'Alumno '+numeroAlumnos,nota: Math.floor(Math.random()*11)})
    crearTabla();
});

document.getElementById('suspensos').addEventListener('click',() => {
    
    const notas = document.getElementsByClassName('nota');
    for(let i=0;i<notas.length;i++){
        if(notas[i].textContent< 5){
            notas[i].classList.toggle('suspendido');
        }
    }
});