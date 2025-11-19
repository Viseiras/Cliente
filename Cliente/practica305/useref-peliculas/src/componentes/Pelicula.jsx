import Interpretes from "./Interpretes";
import { useRef } from "react";
import { toggleOculto } from "../bibliotecas/funciones";


function Pelicula(props){

  //Inicializamos los refs
  const taquillaRef = useRef(null);
  const elencoRef = useRef(null);


  //Converirtimos la recaudacion de taquilla a numero entero
  let taquillaArray = props.taquilla.replace("$","").split(" ");
  taquillaArray[0] = taquillaArray[0].replace(".","");
  let taquillaNum=0;
  //Si es mayor de mil millones
  if(taquillaArray.length > 2){
    taquillaNum = taquillaArray[0]+"0".repeat(8);
    //Si es mayor de un millon
  }else if(taquillaArray.length === 2){
    taquillaNum = taquillaArray[0]+"0".repeat(6);
  }else{
    //Si es menor de un millon
    taquillaNum = taquillaArray[0];
  }

  //Formateamos la recaudacion a formato moneda euro (Esto lo he buscado en Internet)
  taquillaNum = parseFloat(taquillaNum);
  taquillaNum= taquillaNum.toLocaleString("es-ES", {style: "currency", currency:"EUR"});

    return (
    <li className='pelicula'>
      <h2 className="titulo">{props.nombre}</h2>
      <div className="pelicula-contenido">
        <img className="cartel" src={props.cartelera} alt={`Imagen de ${props.nombre}`}/>
        <p className='resumen'>{props.children}</p>
      </div>
      <div className="pelicula-opciones">
        <div className="botones">
          {/* Añadimos los botones que nos permiten la funcionalidad del Useref en el programa y les ponemos la función toggleOculto con el ref correspondiente */}
          <button className="btnElenco" onClick={() => toggleOculto(elencoRef)}>Elenco</button>
          <button className="btnTaquilla" onClick={() => toggleOculto(taquillaRef)}>Taquilla</button>
        </div>
        {/* Inicializamos los elementos con la clase oculto y con los botones se puede visualizar */}
        <p className="taquilla oculto" ref={taquillaRef}>{taquillaNum}</p>
      </div>
        <Interpretes ref={elencoRef} actores={props.actores}/>
    </li>
  )
}

export default Pelicula;