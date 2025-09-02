import Menu from "../componentes/menu";
function Registro() {
    return (
        <div className="container">
            <div>
                <Menu />

                <h1>REGISTRARSE</h1>

                <form className="row g-3">
                    <div className="col-md-6">
                        <label for="validationServer01" className="form-label">Correo Electrónico </label>
                        <input type="text" className="form-control is-valid" id="validationServer01" value=" " required />
                        <div className="valid-feedback">
                            Ingrese su correo electrónico
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label for="validationServer02" className="form-label">Fecha de nacimiento</label>
                        <input type="text" className="form-control is-valid" id="validationServer02" value=" " required />
                        <div className="valid-feedback">
                            Por favor ingrese su fecha de nacimiento.
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label for="validationServerUsername" className="form-label">Contraseña</label>
                        <div className="input-group has-validation">
                            <input type="text" className="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                            <div id="validationServerUsernameFeedback" className="invalid-feedback">
                                Por favor ingrese una contraseña.
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required />
                            <label className="form-check-label" for="invalidCheck3">
                                Estoy de acuerdo con los términos y condiciones.
                            </label>
                            <div id="invalidCheck3Feedback" className="invalid-feedback">
                                Debes estar de acuerdo antes de continuar.
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Submit form</button>
                    </div>
                </form>

            </div>
        </div>
            );
}
            export default Registro;