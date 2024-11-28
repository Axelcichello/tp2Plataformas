import { Link } from "react-router-dom";

const Header = () => {
    
    return (

        <header>
        <div className="contenedor">
            <Link to="/">
                <p>Todo<span className="span-header">Mochilas</span></p>
            </Link>


            <nav className="navegacion">
                <Link to="/About">Nosotros</Link>
                <Link to="/Gallery">Galeria</Link>
                <Link to="/Contact">Contacto</Link>
            </nav>
        </div>
    </header>


    );
};


export default Header;