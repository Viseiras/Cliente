import { Link } from "react-router-dom";

function Menu() {
    return (
        <nav className="menu">
            <ul className="menu-lista">
                <Link to="/">Inicio</Link>
                <Link to="/peliculas">Películas</Link>
                <Link to="/interpretes">Intérpretes</Link>
                <Link to="/galeria">Galería</Link>
                <Link to="/about">¿Quienes somos?</Link>
            </ul>
        </nav>
    );
}   

export default Menu;