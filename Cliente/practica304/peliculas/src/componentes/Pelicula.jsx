import Interpretes from "./Interpretes";

function Pelicula(props){

    return (
    <div className='bloque-pelicula'>
        <img className="bloque-pelicula__cartelera" src="https://www.aceprensa.com/wp-content/uploads/2018/02/399055-0.jpg" alt="Imagen de cartelera de la pelicula: La forma del agua"/>
        <p className='bloque-pelicula__texto'>{props.children}</p>

        <Interpretes actores={props.actores}/>
    </div>
  )
}

export default Pelicula;