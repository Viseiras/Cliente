import './styles/styles.css';
import Cabecera from './componentes/cabecera.jsx';
import Footer from './componentes/footer.jsx';
import Menu from './componentes/menu.jsx';
import Contenido from './componentes/contenido.jsx';
import { BrowserRouter } from 'react-router-dom';
import datosPeliculas from './data/peliculas.json';

function App() {


  return (
    <div className="App">
      <Cabecera/>
      <BrowserRouter>
        <Menu/>
        <Contenido peliculas={datosPeliculas.peliculas} />
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
