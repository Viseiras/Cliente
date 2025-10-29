import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <header>
            <h1>Módulos 2ºDAW</h1>
            <nav className='nav-bar'>
                <Link to="/">Dashboard</Link>
                <Link to="/modulos">Módulos</Link>
                <Link to="/mantenimiento">Mantenimiento</Link>
            </nav>
        </header>
    );
}

export default NavBar;