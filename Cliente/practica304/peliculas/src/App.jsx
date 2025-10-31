import './App.css'
import Peliculas from './componentes/Peliculas'
import data from './objetos/peliculas.json'

function App() {
  const peliculas = data.peliculas;

  return (
    <>
      <Peliculas peliculas={peliculas}></Peliculas>
    </>
  )
}

export default App
