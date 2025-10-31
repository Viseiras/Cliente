import Interpretes from "./Interpretes";

function Pelicula(props){

    return (
    <li className='pelicula'>
      <h2 className="titulo">{props.nombre}</h2>
      <div className="pelicula-contenido">
        <img className="cartel" src={props.cartelera} alt={`Imagen de ${props.nombre}`}/>
        <p className='resumen'>{props.children}</p>
      </div>
        <Interpretes actores={props.actores}/>
    </li>
  )
}

export default Pelicula;