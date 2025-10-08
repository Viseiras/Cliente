'use strict';

/**
 * toCani
 * ----------------------------
 * PROGRAMA QUE RECIBE UNA CADENA Y LA DEVUELVE EN LENGUAJE CANI
 * ----------------------------
 */
//FUNCIONES
/**
 * Función que convierte a lenguaje Cani la cadena introducida como parametro
 * 
 * @param {string} cadena - Cadena normal introducida como parametro para transformarla
 * @returns {string}
 */
function toCani(cadena){
    let stringCani = cadena.toLowerCase();
    let cadenaCani=stringCani.split('');
    //let cadenaCani=[];

    for(let i=0;i<cadenaCani.length;i++){
        if(cadenaCani[i]==="c"){
            cadenaCani[i]="k";
        }
        
        if(i%2===0){
            cadenaCani[i] = cadenaCani[i].toUpperCase();
        }else{
            cadenaCani[i]=cadenaCani[i];
        }
    }   

    cadenaCani=cadenaCani.join('');
    cadenaCani=cadenaCani.padEnd(cadenaCani.length+3,"H");

    return cadenaCani;
}
//MAIN
console.log(toCani("una cadena cani es como esta"));
//FIN