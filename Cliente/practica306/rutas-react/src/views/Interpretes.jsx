function Interpretes(props) { 

    const peliculas = props.peliculas;
    const interpretes = peliculas.flatMap(pelicula => pelicula.actores);

    //Comprobamos si hay actores repetidos por el nombre y eliminamos los duplicados
    const interpretesUnicos = Array.from(
        new Map(interpretes.map(actor => [actor.nombre, actor])).values()
    );

    return (
        <div>
            <h2>Página de Interpretes</h2>
            <ul className='interpretes'>
                {interpretesUnicos.map((interprete, indice) => (
                <li key={indice} className="interpretes-item">
                    <img src={interprete.imagen} alt={interprete.nombre} key={indice} />
                    <h3>{interprete.nombre}</h3>
                    <p><strong>Biografia:</strong> {interprete.biografia}</p>
                    <p><strong>Fecha de Nacimiento:</strong> {interprete.fechaNacimiento}</p>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default Interpretes;