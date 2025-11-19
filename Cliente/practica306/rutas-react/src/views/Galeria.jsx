function Galeria(props) { 

    const peliculas = props.peliculas;

    return (
        <div>
        <h2>Página de Galeria</h2>
        <div className="submenu-filtro filtro-galeria">
            <h3>Filtro de Galeria</h3>
            {/* TODO FUNCIONALIDAD DEL FILTRO */}
            <p className="filtros">
                <button>Titulo</button>
                <button>Director</button>
                <button>Interprete</button>
            </p>
        </div>
        <ul className='peliculas'>
            {peliculas.map((pelicula, indice) => (
            <li key={indice} className="pelicula-item">
                <img src={pelicula.cartelera} alt={pelicula.nombre} key={indice} />
                <h3>{pelicula.nombre}</h3>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default Galeria;