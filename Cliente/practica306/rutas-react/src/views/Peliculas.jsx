function Peliculas(props) {
  const peliculas = props.peliculas;

  return (
    <div>
        <h2>Página de Películas</h2>
        <div className="submenu-filtro filtro-peliculas">
            <h3>Filtro de Peliculas</h3>
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
                <h3>{pelicula.nombre}</h3>
                <p><strong>Director:</strong> {pelicula.director}</p>
                <p><strong>Género:</strong> {pelicula.genero}</p>
                <p><strong>Clasificación:</strong> {pelicula.clasificacion}</p>
                <p><strong>Recaudación:</strong> {pelicula.recaudacion}</p>
                <p><strong>Nota:</strong> {pelicula.nota}</p>
                <p><strong>Resumen:</strong> {pelicula.resumen}</p>
            </li>
            ))}
        </ul>
    </div>
  );
}

export default Peliculas;
