import './App.css'

function Person(props){
  let c1 = props.color1 || 'white';
  let c2 = props.color2 || 'rgb(68, 146, 209)';
  let descripcion = props.children || "No hay ninguna descripcion disponible";
  return(
    <div className='person' style={{
      background: "linear-gradient(135deg,"+c1+","+c2+")"
    }}>
      <img src={props.foto} alt={props.nombre} width="200"/>
      <h3>Nombre: {props.nombre}</h3>
      <p>Edad: {props.edad}</p>
      <p>Descripción: {descripcion}</p>
    </div>
  )
}

function App() {

  return (
    <>
      <h1>Hola Mundo</h1>
      <Person nombre="Javier" edad="22" foto="https://w0.peakpx.com/wallpaper/34/233/HD-wallpaper-minish-cap-cute-toon-link-sword-the-legend-of-zelda.jpg">
        Es una persona que le gusta programar en Javascript y modificar bases de datos para crear aplicaciones interactivas y muy eficientes, a su vez ampliamente documentadas.
      </Person>
      <Person nombre="Jorge" edad="29"  color1="green" color2="aqua"/>
      <Person nombre="Rober" edad="40" color1="red" color2="white"/>
      <Person nombre="Aaron" edad="25" color1="gold" color2="orange"/>
    </>
  )
}

export default App
