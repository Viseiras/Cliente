import Interpretes from "./Interpretes";

function Pelicula(props){

    return (
    <li className='bloque-pelicula'>
      <h2>{props.nombre}</h2>
        <img className="bloque-pelicula__cartelera" src={props.cartelera} alt={`Imagen de ${props.nombre}`}/>
        <p className='bloque-pelicula__texto'>{props.children}</p>

        <Interpretes actores={props.actores}/>
    </li>
  )
}

export default Pelicula;