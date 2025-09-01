

import Saludo from "./saludo";
import Contador from "./contador";
import BotonPersonalizado from "./boton";

function Clase() {
  const saludar = () => {
    alert("¡Hola, que feo eres!");
  }

  return (
   <div>
    <Saludo nombre="miseria cognitiva"/>
    <BotonPersonalizado texto="Saludar" color="blue" onClick={saludar} />
    <Contador/>
   </div>
  );
}
export default Clase;