import Menu from "../componentes/menu";

function Iniciosesion() {
    return (
         <div>
            <Menu />
            <div className="container">
                <form className="row g-3">
                    <div className="col-md-10">
                        <label for="inputEmail4" className="form-label">Correo Electrónico</label>
                        <input type="email" className="form-control" id="inputEmail4"/>
                    </div>
                    <div className="col-md-10">
                        <label for="inputPassword4" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="inputPassword4"/>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                <label className="form-check-label" for="gridCheck">
                                    Recordarme
                                </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Inciar Sesión</button>
                    </div>
                </form>
                
            <div ClassName="dropdown-divider"></div>

                    <a ClassName="dropdown-item" href="#">Eres nuevo aquí? Registrate</a>

                    <a ClassName="dropdown-item" href="#">Olvidé mi contraseña</a>
            </div>

        </div>
            );
}
            export default Iniciosesion;