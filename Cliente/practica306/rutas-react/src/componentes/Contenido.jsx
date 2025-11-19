import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from '../views/Inicio';
import Peliculas from '../views/Peliculas';
import Interpretes from '../views/Interpretes';
import Galeria from '../views/galeria';
import Error404 from '../views/Error404';
import AcerdaDe from '../views/AcerdaDe';

function Contenido(props) {
    return (
        <main className="contenido">
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/peliculas" element={<Peliculas peliculas={props.peliculas} />} />
                <Route path="/interpretes" element={<Interpretes peliculas={props.peliculas} />} />
                <Route path="/galeria" element={<Galeria peliculas={props.peliculas} />} />
                <Route path="/about" element={<AcerdaDe />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </main>
    );
}

export default Contenido;