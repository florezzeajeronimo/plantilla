import Menu from "../componentes/menu";

function Inicio() {
    return (
        <div>
            <Menu />
            <div className="container">
                <h1>Consejos de algunos expertos:</h1>

                <h3>¿Por qué ejercitar mi cuerpo es bueno?</h3>
                <p>Ejercitarte mejora la salud, aumenta energía, fortalece músculos y previene enfermedades.</p>

                <h3>¿Por qué comer bien es bueno para mi cuerpo?</h3>
                <p>Comer bien da energía, previene enfermedades y mantiene el cuerpo sano.</p>

                <h3>¿Por qué dormir bien ayuda a mi cuerpo?</h3>
                <p>Dormir bien repara el cuerpo, mejora la memoria, fortalece el sistema inmunológico y regula el ánimo.</p>

                <h3>¿Por qué tener una buena salud mental es importante?</h3>
                <p>Tener una buena salud mental mejora el bienestar, reduce el estrés, aumenta la felicidad y fortalece las relaciones.</p>

                <h3>¿Por qué tener una relación sana con tus seres queridos es importante?</h3>
                <p>Tener una relación sana con tus seres queridos brinda apoyo emocional, fortalece la confianza y mejora el bienestar general.</p>
            </div>
        </div>
    );
}

export default Inicio;
