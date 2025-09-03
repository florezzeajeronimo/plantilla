import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">SaludVital</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link active" to="/tumedicode24horas">Tu médico de 24 horas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/perfil">Perfil</Link>
                            </li>
        
                            <li className="nav-item">
                                <Link className="nav-link active" to="/inicioSesion">Inicio de sesion</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/registro">Registro</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/cuestionario">Cuestionario</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contactanos"> Contactanos</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );

}
export default Menu;