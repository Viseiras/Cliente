"use strict";

const selectProvincia = document.getElementById("provincia");
const selectPoblacion = document.getElementById("poblacion");

const poblacion1 = document.getElementById("poblacion1");
const poblacion2 = document.getElementById("poblacion2");
const poblacion3 = document.getElementById("poblacion3");

selectProvincia.addEventListener("change",(event)=>{
    switch(event.target.value){
        case("alc"):
            poblacion1.value="alc";
            poblacion1.textContent="Alicante";
            poblacion2.value="elc";
            poblacion2.textContent="Elche";
            poblacion3.value="ptr";
            poblacion3.textContent="Petrer";
        break;
        case("val"):
            poblacion1.value="val";
            poblacion1.textContent="Valencia";
            poblacion2.value="xat";
            poblacion2.textContent="Xàtiva";
            poblacion3.value="tor";
            poblacion3.textContent="Torrent";
        break;
        case("cas"):
            poblacion1.value="cas";
            poblacion1.textContent="Castellón";
            poblacion2.value="oro";
            poblacion2.textContent="Oropesa";
            poblacion3.value="vin";
            poblacion3.textContent="Vinaroz";
        break;
        default:
            poblacion1.value="";
            poblacion1.textContent="No seleccionado";
            poblacion2.value="";
            poblacion2.textContent="No seleccionado";
            poblacion3.value="";
            poblacion3.textContent="No seleccionado";
    }
    selectPoblacion.selectedIndex=0;
});