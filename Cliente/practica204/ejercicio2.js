'use strict';

/**
 * Temporizador
 * ----------------------------
 * PROGRAMA QUE USA UN RELOJ Y LO ACTUALIZA
 * ----------------------------
 */

//FUNCIONES
/**
 * Función que nos formatea el reloj para tener el formato de dos digitos siempre
 * 
 * @param {number} num - Le pasamos el numero y lo fomatea como si fuese la hora de un reloj
 * @returns {string}
 */
function formatearHora(num){
    return String(num).padStart(2, "0");
}

/**
 * Función que va contando los segundos y enseña por consola el tiempo restante
 * 
 * @param {number} minutos - Parametro que indica los minutos de temporizador
 * @param {number} segundos - Parametro que indica los segundos de temporizador
 * @returns - Solo se usa para hacer break a la función, no me gusta mucho pero era la forma más fácil de hacerlo
 */
function temporizador(minutos, segundos){
    //Si solo se pasa un parámetro se trata como segundos
    if(segundos===undefined){
        segundos=minutos;
        minutos=0;
    }

    if(typeof minutos!=="number" || typeof segundos!=="number" || minutos<0 || segundos<0){
        console.error("Error: los valores deben ser números positivos.");
        return;
    }

    if(segundos>59){
        console.error("Error: los segundos no pueden superar 59.");
        return;
    }

    //Mostramos el tiempo inicial
    console.log(`${formatearHora(minutos)}:${formatearHora(segundos)}`);

    //Creamos el intervalo de 1 segundo con el 1000 milisegundos del final y la acción que hace entre llaves
    const id = setInterval(() => {
        if(segundos===0){
            if(minutos===0){
                console.log("Temporizador finalizado");
                clearInterval(id);
                return;
            }
            minutos--;
            segundos = 59;
        }else{
            segundos--;
        }

        //Mostramos el tiempo restante
        console.log(`${formatearHora(minutos)}:${formatearHora(segundos)}`);
    }, 1000);
}


//MAIN
//Ejemplo previsto
temporizador(2, 50); 

//Ejemplo solo con segundos
//temporizador(40);

//Ejemplo con minutos negativos
//temporizador(-1, 30);

//Ejemplo con segundos superiores a 59
//temporizador(3, 80); 

//FIN