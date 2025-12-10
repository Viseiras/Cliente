import {useState} from "react";

/**
 * Componente Euromillon que permite realizar una simulación de apuesta al Euromillon
 */
function Euromillon(){
    const [mensaje,setMensaje] = useState("Pulsa generar para crear una apuesta aleatoria");
    const [apuestas, setApuesta] = useState([]);

    //Combinación ganadora del enunciado
    const combinacionGanadora ={
        num1:5,
        num2:45,
        num3:21,
        num4:34,
        num5:27,
        estrella1:6,
        estrella2:12
    }

    /**
     * Función que permite crear una apuesta aleatoria y añadirla a la lista
     */
    const manejarApuesta = () =>{
        const apuestaNueva = {
            num1:Math.floor(Math.random()*50)+1,
            num2:Math.floor(Math.random()*50)+1,
            num3:Math.floor(Math.random()*50)+1,
            num4:Math.floor(Math.random()*50)+1,
            num5:Math.floor(Math.random()*50)+1,
            estrella1:Math.floor(Math.random()*12)+1,
            estrella2:Math.floor(Math.random()*12)+1
        }

        //Comprueba si ha ganado la apuesta
        let esGanadora = compruebaGanador(apuestaNueva);

        if(esGanadora){
            setMensaje("Apuesta ganadora");
        }else{
            setMensaje("Nueva apuesta añadida");
        }

        //Añade la apuesta al array de apuestas y el campo que nos dice si ha ganado
        setApuesta([...apuestas, { ...apuestaNueva, ganadora: esGanadora }]);
    }

    /**
     * Función de ejemplo que te permite generar un ganador para no tener que estar dandole media hora (es codigo repetido y solo para probar)
     */
    const manejarEjemplo = () =>{
        const apuestaNueva = {
            num1:5,
            num2:Math.floor(Math.random()*50)+1,
            num3:Math.floor(Math.random()*50)+1,
            num4:34,
            num5:Math.floor(Math.random()*50)+1,
            estrella1:Math.floor(Math.random()*12)+1,
            estrella2:12
        }

        let esGanadora = compruebaGanador(apuestaNueva);

        if(esGanadora){
            setMensaje("Apuesta ganadora");
        }else{
            setMensaje("Nueva apuesta añadida");
        }

        setApuesta([...apuestas, { ...apuestaNueva, ganadora: esGanadora }]);
    }

    /**
     * Función que comprueba si la apuesta es ganadora
     * 
     * @param {Object} apuesta - Apuesta aleatoria 
     * @returns {boolean} - Booleano que dice si ha ganado o no
     */
    const compruebaGanador = (apuesta) =>{
        let ganador = true;
        let coincidenciasNum = 0;
        let coincidenciasEstrellas = 0;

        //Comrpobamos coincidencias en los numeros
        if(combinacionGanadora.num1===apuesta.num1){
            coincidenciasNum++;
        }
        if(combinacionGanadora.num2===apuesta.num2){
            coincidenciasNum++;
        }
        if(combinacionGanadora.num3===apuesta.num3){
            coincidenciasNum++;
        }
        if(combinacionGanadora.num4===apuesta.num4){
            coincidenciasNum++;
        }
        if(combinacionGanadora.num5===apuesta.num5){
            coincidenciasNum++;
        }

        //Comprobamos coincidencias en las estrellas
        if(combinacionGanadora.estrella1===apuesta.estrella1){
            coincidenciasEstrellas++;
        }
        if(combinacionGanadora.estrella2===apuesta.estrella2){
            coincidenciasEstrellas++;
        }

        if (!(coincidenciasNum >= 2 && coincidenciasEstrellas >= 1)) {
            ganador = false;
        }

        return ganador;
    }

    return(
        <div>
            <p>{mensaje}</p>
            <div className="botones">
                <button onClick={manejarApuesta}>Generar</button>
                <button onClick={manejarEjemplo}>Genera Ganador</button>
            </div>
            <ul className="lista__apuestas">
                {apuestas.map((apuesta,index)=>(
                    <li key={index} className={apuesta.ganadora?"ganador":""}>
                        {apuesta.num1+" "+apuesta.num2+" "+apuesta.num3+" "+apuesta.num4+" "+apuesta.num5}
                        <div className="estrellas">
                            <span className="estrella"> {apuesta.estrella1} </span>
                            <span className="estrella"> {apuesta.estrella2} </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Euromillon;