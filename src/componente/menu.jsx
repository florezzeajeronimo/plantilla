import { Link } from "react-router-dom";

function Menu() {
    return (
        <div classNameName='container'>
            <ul className="nav nav-pills" style={{backgroundColor: 'black',
            }}>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">JeronimoPuto</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active " to="/perfil">Perfil</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/contacto">Contacto</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/cursos">Cursos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/registro">Registro</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/iniciosesion">InicioSesion</Link>
                </li>
            </ul>
        </div>
    );
}

export default Menu;