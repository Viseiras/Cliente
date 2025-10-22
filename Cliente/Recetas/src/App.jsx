import './App.css'
import Recetas from './componentes/Recetas'
import data from './objetos/recetas.json'

function App() {
  const listadoCompleto = data.recetas;

  return (
    <div className='App'>
      <Recetas listado={listadoCompleto}/>
    </div>
  )
}

export default App
