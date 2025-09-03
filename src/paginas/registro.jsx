import { useState } from "react";
import Menu from "../componentes/menu";

function Registro() {
    // 1. Crea las variables de estado para cada campo
    const [correo, setCorreo] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [aceptaTerminos, setAceptaTerminos] = useState(false);

    // 2. Maneja los cambios en los campos
    const handleCorreoChange = (e) => {
        setCorreo(e.target.value);
    };

    const handleFechaNacimientoChange = (e) => {
        setFechaNacimiento(e.target.value);
    };

    const handleContraseñaChange = (e) => {
        setContraseña(e.target.value);
    };

    const handleAceptaTerminosChange = (e) => {
        setAceptaTerminos(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que la página se recargue

        // Aquí puedes agregar la lógica de validación y envío de datos
        console.log("Datos del formulario:", {
            correo,
            fechaNacimiento,
            contraseña,
            aceptaTerminos
        });
        
        // Aquí podrías enviar los datos a una API, por ejemplo
    };

    return (
        <div className="container">
            <div>
                <Menu />
                <h1>REGISTRARSE</h1>
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label htmlFor="validationServer01" className="form-label">Correo Electrónico </label>
                        <input
                            type="email"
                            className="form-control"
                            id="validationServer01"
                            value={correo}
                            onChange={handleCorreoChange}
                            required
                        />
                        <div className="valid-feedback">
                            Ingrese su correo electrónico
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationServer02" className="form-label">Fecha de nacimiento</label>
                        <input
                            type="date"
                            className="form-control"
                            id="validationServer02"
                            value={fechaNacimiento}
                            onChange={handleFechaNacimientoChange}
                            required
                        />
                        <div className="valid-feedback">
                            Por favor ingrese su fecha de nacimiento.
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationServerUsername" className="form-label">Contraseña</label>
                        <div className="input-group has-validation">
                            <input
                                type="password"
                                className="form-control"
                                id="validationServerUsername"
                                value={contraseña}
                                onChange={handleContraseñaChange}
                                required
                            />
                            <div id="validationServerUsernameFeedback" className="invalid-feedback">
                                Por favor ingrese una contraseña.
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="invalidCheck3"
                                checked={aceptaTerminos}
                                onChange={handleAceptaTerminosChange}
                                required
                            />
                            <label className="form-check-label" htmlFor="invalidCheck3">
                                Estoy de acuerdo con los términos y condiciones.
                            </label>
                            <div id="invalidCheck3Feedback" className="invalid-feedback">
                                Debes estar de acuerdo antes de continuar.
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registro;