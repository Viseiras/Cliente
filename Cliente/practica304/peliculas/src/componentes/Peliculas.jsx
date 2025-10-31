import Pelicula from "./Pelicula";

function Peliculas(props){
    const peliculas = props.peliculas;

    return (
        <div>
            <ul className="peliculas">
                {peliculas.map(pelicula => (
                    <Pelicula key={pelicula.id} nombre={pelicula.nombre} cartelera={pelicula.cartelera} actores={pelicula.actores}>{pelicula.resumen}</Pelicula>
                ))}    
            </ul>  
        </div>
    )
}

export default Peliculas;