import './App.css'
import {GrupoPersonas, Person} from './Person';

function App() {

  return (
    <>

      <GrupoPersonas>
        <Person nombre="Javier" edad="22" rol="Alumno" foto="https://w0.peakpx.com/wallpaper/34/233/HD-wallpaper-minish-cap-cute-toon-link-sword-the-legend-of-zelda.jpg">
          Es una persona que le gusta programar en Javascript y modificar bases de datos para crear aplicaciones interactivas y muy eficientes, a su vez ampliamente documentadas.
        </Person>
        <Person nombre="Jorge" edad="29" esVip={true} color1="green" color2="aqua" rol="Profesor"/>
        <Person nombre="Rober" edad="40" color1="red" color2="white"/>
        <Person nombre="Aaron" edad="25" esVip={true} color1="gold" color2="orange"/>
      </GrupoPersonas>
    </>
  )
}

export default App
