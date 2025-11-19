"use strict";

const body = document.querySelector("body");

for(let i=0;i<100;i++){

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type","checkbox");

    
    let label = document.createElement("label");

    let numero = Math.round(Math.random()*(1000-100+1)+100);

    label.innerHTML=`
        <input type="checkbox">
        ${numero}
    `;
    body.append(label);
}

const btnPares = document.createElement("button");
btnPares.textContent="Marcar todos los pares";

btnPares.addEventListener("click",()=>{
    let arrayLabel = document.querySelectorAll("label");
    arrayLabel.forEach(label=>{
        if(parseInt(label.textContent)%2===0){
            label.children[0].checked=true;
        }
    })
})

const btnDesmarque = document.createElement("button");
btnDesmarque.textContent="Desmarcar todos";

btnDesmarque.addEventListener("click",()=>{
    let arrayLabel = document.querySelectorAll("label");
    arrayLabel.forEach(label=>{
        label.children[0].checked=false;
    })
})

const div = document.createElement("div");
div.append(btnPares,btnDesmarque);

body.append(div);