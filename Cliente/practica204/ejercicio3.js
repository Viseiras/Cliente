'use strict';

/**
 * DNI
 * ----------------------------
 * PROGRAMA QUE PIDE DNI HASTA QUE SE INTRODUCE UN -1
 * ----------------------------
 */


//FUNCIONES
/**
 * Función que cada 5 segundos nos va pidiendo un DNI y rellena su letra por consola del navegador, saliendo al introducir -1
 */
function pideDNI(){
    //Array que tiene las letras ordenadas
    const arrayLetraDNI = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

    //Creamos el interval y le decimos que haga una llamada cada 5 segundos
    const id = setInterval(()=>{
        //Prompt que nos comprueba que el valor sea númerico
        let dni=parseInt(prompt("Escribe un DNI para otorgarle la letra:"));
        //Si el valor es -1 salimos del intervalo y acabamos el programa
        if(dni===-1){
            console.log("Programa finalizado");
            clearInterval(id);
            return;
        }else if(dni<0 || dni>99999999){ //Si el DNI es menor a 0 (ya hemos comprobado antes que no era -1) y que es mayor a 8 digitos lo damos como valor no válido
            console.error("Numero de DNI no válido");
        }
        else{
            //Calculamos la letra
            let letra=arrayLetraDNI[dni%23];
            //Añadimos unos 0 al principio para que llegue hasta 8, en caso de que el numero de DNI sea menor a 8 digitos (sigue siendo válido) y le añadimos la letra
            let dniFinal = dni.toString().padStart(8,"0")+""+letra;
            console.log(dniFinal);
        }

    },5000);
}
//MAIN
pideDNI();
//FIN