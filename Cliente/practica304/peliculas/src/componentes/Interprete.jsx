function Interprete(props){
  
    return (
        <li className='interprete'>
            <img src={props.foto} alt={`Foto de ${props.nombre}`}/>
            <div className='interprete-info'>
                <h2>{props.nombre}</h2>
                <p>{props.children}</p>
            </div>
        </li>      
  )
}

export default Interprete;